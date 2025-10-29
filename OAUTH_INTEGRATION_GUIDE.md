# OAuth Integration Guide for Edubucks Admin Panel

## Overview

The Edubucks admin panel now supports both **Mock Authentication** (for development) and **Google OAuth** (for production). This guide explains how to configure and use both authentication methods.

## Authentication Modes

### 1. Mock Authentication (Development)
- **Default mode** for development
- Uses demo credentials: `admin@edubucks.org` / `admin123`
- No external dependencies required
- Perfect for testing and development

### 2. Google OAuth (Production)
- Secure authentication via Google
- No password management required
- Production-ready authentication
- Requires Google OAuth setup

## Configuration

### Environment Variables

Create a `.env` file in your project root:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8080/api/v1

# Authentication Mode
# Set to 'oauth' for production with Google OAuth
# Set to 'mock' for development with demo credentials
VITE_AUTH_MODE=mock

# Google OAuth Configuration (for production)
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
VITE_GOOGLE_REDIRECT_URI=http://localhost:3039/admin/oauth/callback

# Development Settings
VITE_DEV_MODE=true
```

### Switching Between Modes

#### Development Mode (Mock Authentication)
```bash
VITE_AUTH_MODE=mock
```
- Shows demo credentials on login page
- Uses mock authentication service
- No OAuth button displayed

#### Production Mode (Google OAuth)
```bash
VITE_AUTH_MODE=oauth
VITE_GOOGLE_CLIENT_ID=your_actual_client_id
VITE_GOOGLE_REDIRECT_URI=https://yourdomain.com/admin/oauth/callback
```
- Shows Google OAuth button
- Hides demo credentials
- Redirects to Google for authentication

## Google OAuth Setup

### 1. Create Google OAuth Application

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - Development: `http://localhost:3039/admin/oauth/callback`
   - Production: `https://yourdomain.com/admin/oauth/callback`

### 2. Configure Backend

Your backend should handle the OAuth flow:

```
GET /api/v1/oauth2/authorization/google
- Redirects to Google OAuth
- Includes redirect_uri and client_id parameters

GET /api/v1/login/oauth2/code/google
- Handles OAuth callback from Google
- Exchanges authorization code for JWT token
- Redirects to frontend with token parameter
```

### 3. Backend OAuth Flow

The backend should:
1. Redirect to Google OAuth with proper parameters
2. Handle the callback from Google
3. Exchange authorization code for JWT token
4. Redirect to frontend: `/admin/oauth/callback?token=JWT_TOKEN`

## Frontend OAuth Flow

### 1. User Clicks "Google ile Giriş Yap"
- Frontend calls `authService.loginWithOAuth()`
- Redirects to backend OAuth endpoint
- Backend handles Google OAuth flow

### 2. Google OAuth Callback
- Google redirects to backend callback
- Backend processes OAuth and redirects to frontend
- Frontend receives JWT token in URL parameters

### 3. Token Processing
- `OAuthCallback` component processes the token
- Stores token in localStorage
- Redirects to admin dashboard

## File Structure

```
src/
├── config/
│   ├── api.js                 # API endpoints configuration
│   └── environment.js         # Environment and feature flags
├── services/admin/
│   └── auth.js               # Authentication service (mock + OAuth)
├── pages/admin/
│   ├── Login.jsx             # Login page with OAuth button
│   └── OAuthCallback.jsx     # OAuth callback handler
└── components/admin/
    └── ProtectedRoute.jsx    # Route protection
```

## API Integration

### Authentication Endpoints

```javascript
// Backend OAuth endpoints
AUTH: {
  LOGIN: '/api/v1/auth/login',                    // Mock login
  OAUTH: '/api/v1/oauth2/authorization/google',   // OAuth redirect
  OAUTH_CALLBACK: '/api/v1/login/oauth2/code/google' // OAuth callback
}
```

### Token Management

- **Storage**: JWT tokens stored in `localStorage` with key `jwt_token`
- **Expiration**: 12 hours (configurable in backend)
- **Refresh**: Handled by backend (if implemented)
- **Validation**: Backend validates tokens on each API call

## Testing

### Mock Authentication Testing
1. Set `VITE_AUTH_MODE=mock`
2. Start the application
3. Use demo credentials: `admin@edubucks.org` / `admin123`
4. Verify admin panel access

### OAuth Testing
1. Set `VITE_AUTH_MODE=oauth`
2. Configure Google OAuth credentials
3. Start backend server
4. Click "Google ile Giriş Yap"
5. Complete Google OAuth flow
6. Verify admin panel access

## Troubleshooting

### Common Issues

1. **OAuth button not showing**
   - Check `VITE_AUTH_MODE=oauth`
   - Verify environment configuration

2. **OAuth redirect fails**
   - Check `VITE_GOOGLE_CLIENT_ID` is set
   - Verify redirect URI matches Google Console
   - Ensure backend is running

3. **Token not processed**
   - Check backend OAuth callback implementation
   - Verify token parameter in URL
   - Check browser console for errors

4. **API calls fail after OAuth**
   - Verify token is stored in localStorage
   - Check token format and expiration
   - Ensure backend validates JWT tokens

### Debug Mode

Enable debug mode to see detailed logs:

```bash
VITE_DEV_MODE=true
```

This will log:
- Environment configuration
- Authentication mode
- API calls and responses
- Token validation

## Security Considerations

### Production Checklist

- [ ] Use HTTPS in production
- [ ] Set secure redirect URIs
- [ ] Implement token refresh
- [ ] Add CSRF protection
- [ ] Validate JWT tokens on backend
- [ ] Set appropriate token expiration
- [ ] Implement proper error handling
- [ ] Add rate limiting

### Environment Security

- Never commit `.env` files
- Use environment-specific configurations
- Rotate OAuth credentials regularly
- Monitor authentication logs

## Migration Guide

### From Mock to OAuth

1. **Setup Google OAuth** (see Google OAuth Setup)
2. **Configure environment variables**
3. **Test OAuth flow** in development
4. **Deploy with OAuth enabled**
5. **Monitor authentication logs**

### Rollback Plan

If OAuth fails in production:
1. Set `VITE_AUTH_MODE=mock`
2. Redeploy frontend
3. Use mock authentication temporarily
4. Fix OAuth issues
5. Re-enable OAuth

## Support

For issues with OAuth integration:
1. Check this guide first
2. Review browser console logs
3. Verify backend OAuth implementation
4. Test with mock authentication
5. Contact development team

---

**Note**: This integration supports both authentication methods simultaneously, allowing for smooth development and production workflows.

