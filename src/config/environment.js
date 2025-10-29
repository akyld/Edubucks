// Environment Configuration for Edubucks Frontend
// Handles different modes and environment variables

const config = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
  
  // Authentication Mode
  // 'oauth' - Use Google OAuth (production)
  // 'mock' - Use demo credentials (development)
  AUTH_MODE: import.meta.env.VITE_AUTH_MODE || 'mock',
  
  // Google OAuth Configuration (handled by backend)
  // No frontend configuration needed - backend handles OAuth flow
  
  // Development Settings
  DEV_MODE: import.meta.env.VITE_DEV_MODE === 'true' || import.meta.env.DEV,
  
  // Feature Flags
  FEATURES: {
    ENABLE_OAUTH: import.meta.env.VITE_AUTH_MODE === 'oauth',
    ENABLE_MOCK_AUTH: import.meta.env.VITE_AUTH_MODE === 'mock' || !import.meta.env.VITE_AUTH_MODE,
    ENABLE_DEBUG: import.meta.env.VITE_DEV_MODE === 'true' || import.meta.env.DEV
  }
};

// Validation
if (config.FEATURES.ENABLE_OAUTH) {
  console.log('OAuth mode enabled - backend handles OAuth configuration');
}

if (config.FEATURES.ENABLE_DEBUG) {
  console.log('Edubucks Environment Config:', config);
}

export default config;
