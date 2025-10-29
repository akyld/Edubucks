// API Configuration for Edubucks Admin Panel
// This file handles environment-based API URL configuration

// Base URL configuration based on environment
const getApiBaseUrl = () => {
  // For development and CI, use the backend URL from environment variable
  // This should be set in .env file as VITE_API_BASE_URL
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  
  if (envUrl) {
    return envUrl;
  }
  
  // Fallback for local development
  return 'http://localhost:3039';
};

// Export the base URL
export const API_BASE_URL = getApiBaseUrl();

// API Endpoints configuration
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    OAUTH: '/api/auth/oauth2/authorization/google',
    OAUTH_CALLBACK: '/api/auth/oauth2/callback/google'
  },
  
  // Admin Endpoints
  ADMIN: {
    // Exams
    EXAMS: '/api/admin/exams',
    EXAM_BY_ID: (id) => `/api/admin/exams/${id}`,
    EXAM_APPLICATIONS: '/api/admin/exam-applications',
    EXAM_APPLICATIONS_BY_EXAM: (examId) => `/api/admin/exam-applications/exam/${examId}`,
    
    // Seminars/Events
    SEMINARS: '/api/admin/seminars',
    SEMINAR_BY_ID: (id) => `/api/admin/seminars/${id}`,
    
    // Applications
    APPLICATIONS: '/api/admin/applications',
    APPLICATION_BY_ID: (id) => `/api/admin/applications/${id}`,
    
    // Payments
    PAYMENTS: '/api/admin/payments',
    PAYMENT_BY_ID: (id) => `/api/admin/payments/${id}`,
    
    // Statistics
    STATS: '/api/admin/statistics'
  }
};

// Request configuration
export const API_CONFIG = {
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  
  // Timeout settings
  TIMEOUT: 10000, // 10 seconds
  
  // Pagination defaults
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100
};

// Environment detection
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Log API configuration in development
if (isDevelopment) {
  console.log('🔧 API Configuration:', {
    baseUrl: API_BASE_URL,
    environment: isDevelopment ? 'development' : 'production'
  });
}
