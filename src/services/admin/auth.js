// Authentication service for admin panel
// Supports both mock authentication (for development) and OAuth (for production)

import { API_ENDPOINTS } from '../../config/api';

export const authService = {
  // Mock login for development (will be replaced with OAuth)
  async login(email, password) {
    // Demo credentials
    const validCredentials = [
      { email: 'admin@edubucks.org', password: 'admin123' },
      { email: 'test@edubucks.org', password: 'test123' }
    ];
    
    const isValid = validCredentials.some(
      cred => cred.email === email && cred.password === password
    );
    
    if (!isValid) {
      throw new Error('Invalid credentials');
    }
    
    // Create mock token and user data (12 hours expiration to match backend)
    const mockToken = btoa(JSON.stringify({
      sub: email,
      exp: Date.now() / 1000 + (12 * 60 * 60), // 12 hours
      iat: Date.now() / 1000
    }));
    
    const mockUser = {
      id: 1,
      email: email,
      name: email.split('@')[0],
      role: 'admin'
    };
    
    // Store auth data using jwt_token key (matches backend expectation)
    localStorage.setItem('jwt_token', mockToken);
    localStorage.setItem('admin_user', JSON.stringify(mockUser));
    
    return { token: mockToken, user: mockUser };
  },

  // OAuth login redirect
  async loginWithOAuth() {
    // Redirect to backend OAuth endpoint
    window.location.href = `${API_ENDPOINTS.AUTH.OAUTH}`;
  },

  // Handle OAuth callback
  handleOAuthCallback(token) {
    if (!token) {
      throw new Error('No token received from OAuth callback');
    }
    
    // Store the token from OAuth
    localStorage.setItem('jwt_token', token);
    
    // For now, create a mock user - in real implementation, 
    // you might want to fetch user info from backend
    const mockUser = {
      id: 1,
      email: 'admin@edubucks.org',
      name: 'Admin',
      role: 'admin'
    };
    
    localStorage.setItem('admin_user', JSON.stringify(mockUser));
    
    return { token, user: mockUser };
  },

  async logout() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('admin_user');
  },

  isAuthenticated() {
    const token = this.getToken();
    if (!token) return false;
    
    try {
      // For mock tokens, check expiration
      if (token.includes('.')) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;
      }
      
      // For real JWT tokens, we'll let the backend validate
      return true;
    } catch {
      return false;
    }
  },

  isTokenExpired() {
    const token = this.getToken();
    if (!token) return true;
    
    try {
      if (token.includes('.')) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp <= Date.now() / 1000;
      }
      return false;
    } catch {
      return true;
    }
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('admin_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getToken() {
    return localStorage.getItem('jwt_token');
  },

  // Check if we're using OAuth (no mock credentials)
  isOAuthMode() {
    // This will be true when we switch to OAuth-only mode
    return false; // Currently using mock mode
  }
};
