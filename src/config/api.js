// API Configuration for Edubucks Admin Panel
// This file handles environment-based API URL configuration

// Base URL configuration based on environment
const getApiBaseUrl = () => {
  const mode = import.meta.env.MODE; // Vite's built-in environment mode
  
  switch (mode) {
    case 'prod':
      // Production backend (to be configured when ready)
      return 'https://production-backend.railway.app';
    
    case 'dev':
    case 'ci':
    default:
      // Dev and CI both use the same staging backend
      return 'https://ci-triariigrowth-administration-backend-production.up.railway.app';
  }
};

// Export the base URL
export const API_BASE_URL = getApiBaseUrl();

// API Endpoints configuration
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    LOGOUT: '/api/v1/auth/logout',
    REFRESH: '/api/v1/auth/refresh',
    OAUTH: '/oauth2/authorization/google',
    OAUTH_CALLBACK: '/login/oauth2/code/google'
  },
  
  // Admin Endpoints
  ADMIN: {
    // Exams
    EXAMS: '/api/admin/exams',
    EXAM_BY_ID: (id) => `/api/admin/exams/${id}`,
    EXAM_APPLICATIONS: '/api/admin/exam-applications',
    EXAM_APPLICATIONS_BY_EXAM: (examId) => `/api/admin/exams/${examId}/applications`,
    
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
  },
  
  // Public Endpoints
  PUBLIC: {
    EXAMS: '/api/public/exams',
    SEMINARS: '/api/public/seminars',
    CITIES: '/api/public/cities',
    EXAM_APPLICATIONS: '/api/public/exam-applications',
    PAYMENT_INITIATE: '/api/public/payment/initiate'
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
