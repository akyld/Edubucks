// API Client for Edubucks Admin Panel
// Centralized HTTP request handling with authentication and error management

import { API_BASE_URL, API_CONFIG } from '../../config/api';
import { authService } from './auth';

// Custom error class for API errors
export class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Parse ApiResponse wrapper from backend
const parseApiResponse = (response) => {
  // Backend returns ApiResponse<T> format
  if (response.success !== undefined) {
    return {
      success: response.success,
      message: response.message || '',
      data: response.data || null,
      timestamp: response.timestamp || new Date().toISOString()
    };
  }
  
  // Fallback for direct data responses
  return {
    success: true,
    message: '',
    data: response,
    timestamp: new Date().toISOString()
  };
};

// Parse paginated response
const parsePaginatedResponse = (response) => {
  const parsed = parseApiResponse(response);
  
  if (parsed.data && Array.isArray(parsed.data.content)) {
    return {
      ...parsed,
      data: {
        content: parsed.data.content,
        totalElements: parsed.data.totalElements || 0,
        totalPages: parsed.data.totalPages || 0,
        size: parsed.data.size || API_CONFIG.DEFAULT_PAGE_SIZE,
        number: parsed.data.number || 0,
        first: parsed.data.first || false,
        last: parsed.data.last || false
      }
    };
  }
  
  return parsed;
};

// Get authorization header
const getAuthHeader = () => {
  const token = authService.getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Handle API errors
const handleApiError = async (response) => {
  let errorData = null;
  
  try {
    errorData = await response.json();
  } catch {
    // If response is not JSON, use status text
    errorData = { message: response.statusText };
  }
  
  const message = errorData?.message || `HTTP ${response.status}: ${response.statusText}`;
  
  // Handle specific error cases
  if (response.status === 401) {
    // Token expired or invalid - redirect to login
    authService.logout();
    window.location.href = '/admin/login';
    throw new ApiError('Authentication required', 401, errorData);
  }
  
  if (response.status === 403) {
    throw new ApiError('Access forbidden', 403, errorData);
  }
  
  if (response.status >= 500) {
    throw new ApiError('Server error', response.status, errorData);
  }
  
  throw new ApiError(message, response.status, errorData);
};

// Base fetch wrapper with error handling
const apiRequest = async (url, options = {}) => {
  const fullUrl = `${API_BASE_URL}${url}`;
  
  const config = {
    ...options,
    headers: {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...getAuthHeader(),
      ...options.headers
    }
  };
  
  // Add timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);
  
  try {
    const response = await fetch(fullUrl, {
      ...config,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      await handleApiError(response);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new ApiError('Request timeout', 408);
    }
    
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(`Network error: ${error.message}`, 0);
  }
};

// HTTP Methods
export const apiClient = {
  // GET request
  get: async (url, options = {}) => {
    const response = await apiRequest(url, {
      method: 'GET',
      ...options
    });
    return parseApiResponse(response);
  },
  
  // GET request for paginated data
  getPaginated: async (url, options = {}) => {
    const response = await apiRequest(url, {
      method: 'GET',
      ...options
    });
    return parsePaginatedResponse(response);
  },
  
  // POST request
  post: async (url, data = null, options = {}) => {
    const response = await apiRequest(url, {
      method: 'POST',
      body: data ? JSON.stringify(data) : null,
      ...options
    });
    return parseApiResponse(response);
  },
  
  // PUT request
  put: async (url, data = null, options = {}) => {
    const response = await apiRequest(url, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : null,
      ...options
    });
    return parseApiResponse(response);
  },
  
  // DELETE request
  delete: async (url, options = {}) => {
    const response = await apiRequest(url, {
      method: 'DELETE',
      ...options
    });
    return parseApiResponse(response);
  },
  
  // PATCH request
  patch: async (url, data = null, options = {}) => {
    const response = await apiRequest(url, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : null,
      ...options
    });
    return parseApiResponse(response);
  }
};

// Utility functions
export const buildQueryString = (params) => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      searchParams.append(key, value.toString());
    }
  });
  
  return searchParams.toString();
};

export const buildPaginatedUrl = (baseUrl, page = 0, size = API_CONFIG.DEFAULT_PAGE_SIZE, sort = null) => {
  const params = {
    page: page.toString(),
    size: size.toString()
  };
  
  if (sort) {
    params.sort = sort;
  }
  
  const queryString = buildQueryString(params);
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

// Export default
export default apiClient;
