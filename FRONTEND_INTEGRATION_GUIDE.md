# Frontend Integration Guide

This guide will help you integrate your frontend application with the Triarii Growth Administration Backend API.

---

## 🌐 Environment URLs

### CI Environment (Staging)
- **Backend API Base URL**: `https://ci-triariigrowth-administration-backend-production.up.railway.app`
- **Swagger Documentation**: `https://ci-triariigrowth-administration-backend-production.up.railway.app/swagger-ui.html`

---

## 🔐 Authentication Flow

The API uses **Google OAuth2** for authentication and **JWT tokens** for authorization.

### Step 1: Initiate Google Login

From your frontend, redirect users to:

```
https://ci-triariigrowth-administration-backend-production.up.railway.app/oauth2/authorization/google
```

**Important**: The browser automatically sends the `Origin` header during OAuth flow. Make sure your frontend URL is properly configured in your environment:
- **Development**: `http://localhost:3039`
- **Staging/CI**: Your Vercel/staging URL
- **Production**: Your production domain

⚠️ **Do NOT hardcode the origin!** Use environment variables in your frontend to dynamically set the base URL.

### Step 2: Handle OAuth Callback

After successful Google authentication, the backend will redirect to:

```
https://your-frontend-url/administration?token={JWT_TOKEN}
```

Extract the `token` from the URL query parameter. This is your **JWT token**.

**Example redirect:**
```
http://localhost:3039/administration?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGV4YW1wbGUuY29tIiwidGVuYW50SWQiOiJlZHVidWNrcyIsInJvbGUiOiJURU5BTlRfQURNSU4iLCJpYXQiOjE2OTg5MzIwMDAsImV4cCI6MTY5ODk3NTIwMH0.xyz...
```

### Step 3: Store the JWT Token

Store the JWT token in `localStorage`:

```javascript
// Extract token from URL and store it
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (token) {
  // Store token in localStorage
  localStorage.setItem('jwt_token', token);
  
  // Clean URL to remove token from address bar
  window.history.replaceState({}, document.title, window.location.pathname);
}
```

**Why localStorage?**
- ✅ Token persists after closing browser (better UX)
- ✅ Shared across all tabs (work in multiple tabs without re-login)
- ✅ Token expires after 12 hours automatically
- ✅ HTTPS encrypts the token in transit

### Step 4: Use Token in API Requests

Include the JWT token in all API requests as a **Bearer token** in the `Authorization` header:

```javascript
// Example: API request with token
const token = localStorage.getItem('jwt_token');

// Determine API URL based on environment
const getApiBaseUrl = () => {
  const mode = import.meta.env.MODE; // 'dev', 'prod', etc.
  
  switch (mode) {
    case 'prod':
      return 'https://production-backend.railway.app'; // To be provided later
    
    case 'dev':
    case 'ci':
    default:
      return 'https://ci-triariigrowth-administration-backend-production.up.railway.app';
  }
};

const API_BASE_URL = getApiBaseUrl();

fetch(`${API_BASE_URL}/api/admin/exams`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
    // Origin header is automatically sent by the browser
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

⚠️ **IMPORTANT**: Create a centralized API configuration file:

**Create `src/config/api.js`:**
```javascript
// API configuration based on environment
const getApiBaseUrl = () => {
  const mode = import.meta.env.MODE;
  
  switch (mode) {
    case 'prod':
      // Production backend (to be configured later)
      return 'https://production-backend.railway.app';
    
    case 'dev':
    case 'ci':
    default:
      // Dev and CI use the same backend
      return 'https://ci-triariigrowth-administration-backend-production.up.railway.app';
  }
};

export const API_BASE_URL = getApiBaseUrl();
export const API_ENDPOINTS = {
  EXAMS: '/api/admin/exams',
  SEMINARS: '/api/admin/seminars',
  APPLICATIONS: '/api/admin/applications',
  // ... add more as needed
};
```

**Usage in components:**
```javascript
import { API_BASE_URL } from '@/config/api';

// All API calls use the centralized config
fetch(`${API_BASE_URL}/api/admin/exams`, { ... })
```

---

## 📚 Accessing Swagger Documentation

### For SUPER_ADMIN Users Only

Swagger UI is restricted to `SUPER_ADMIN` role users. If you're a `TENANT_ADMIN`, you won't have access.

**To access Swagger:**

1. **Authenticate via Google OAuth** (as described above)
2. **Navigate to**: `https://ci-triariigrowth-administration-backend-production.up.railway.app/swagger-ui.html`
3. **Click "Authorize"** button (top right)
4. **Enter your JWT token**:
   ```
   Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGV4YW1wbGUuY29tIiwidGVuYW50SWQiOiJlZHVidWNrcyIsInJvbGUiOiJURU5BTlRfQURNSU4iLCJpYXQiOjE2OTg5MzIwMDAsImV4cCI6MTY5ODk3NTIwMH0.xyz...
   ```
5. **Click "Authorize"** and then **"Close"**
6. **All endpoints are now testable** directly from Swagger UI

---

## 🔑 API Endpoints Overview

### Public Endpoints (No Authentication Required)

These endpoints are accessible without a JWT token:

- `POST /api/public/exam-applications` - Submit exam application
- `GET /api/public/exams` - List all exams
- `GET /api/public/exams/{id}` - Get exam details
- `GET /api/public/seminars` - List all seminars
- `GET /api/public/cities` - List all cities
- `POST /api/public/payment/initiate` - Initiate payment
- `POST /api/payment/webhook/paytr` - PayTR payment webhook (for payment gateway only)

### Admin Endpoints (Authentication Required)

These require `Authorization: Bearer {token}` header:

- `GET /api/admin/exams` - List all exams (with pagination)
- `POST /api/admin/exams` - Create new exam
- `PUT /api/admin/exams/{id}` - Update exam
- `DELETE /api/admin/exams/{id}` - Delete exam
- `GET /api/admin/seminars` - List all seminars
- `GET /api/admin/applications` - List all applications
- `GET /api/admin/exam-applications` - List all exam applications
- `GET /api/admin/payments` - List all payments
- `GET /api/admin/gallery` - List gallery items
- `POST /api/admin/gallery` - Upload gallery image

**All endpoint details are available in Swagger documentation.**

---

## 🌍 Multi-Tenancy & CORS

### Important Headers

Always include the `Authorization` header in your requests:

```javascript
headers: {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
  // Origin header is automatically sent by the browser - do NOT set it manually!
}
```

⚠️ **CRITICAL**: 
- **Do NOT manually set the `Origin` header** - the browser automatically sends it based on your frontend URL
- **Do NOT hardcode API URLs** - use environment variables that change per environment

### Tenant Context

The backend automatically resolves your tenant based on the **Origin** header:

- `http://localhost:3039` → `edubucks` tenant
- `https://ci-fe.vercel.app` → `edubucks` tenant
- `https://edubucks.org` → `edubucks` tenant

**You don't need to send tenant information in requests** - it's automatically handled by the backend.

---

## 📋 Request/Response Format

### Standard Success Response

All endpoints return data wrapped in `ApiResponse`:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "examName": "Sample Exam",
    "examFee": 100.00
  },
  "message": null,
  "timestamp": "2024-10-27T16:00:00.000+00:00"
}
```

### Standard Error Response

```json
{
  "success": false,
  "data": null,
  "message": "Resource not found with id: 123",
  "timestamp": "2024-10-27T16:00:00.000+00:00"
}
```

### Paginated Response

List endpoints return paginated data:

```json
{
  "success": true,
  "data": {
    "content": [
      { "id": 1, "examName": "Exam 1" },
      { "id": 2, "examName": "Exam 2" }
    ],
    "pageable": {
      "pageNumber": 0,
      "pageSize": 20
    },
    "totalElements": 50,
    "totalPages": 3,
    "last": false,
    "first": true
  },
  "message": null,
  "timestamp": "2024-10-27T16:00:00.000+00:00"
}
```

---

## 🛠️ Development Tips

### 1. Environment Configuration

**Automatically determine API URL based on build mode:**

**Create `src/config/api.js`:**
```javascript
// Centralized API configuration
const getApiBaseUrl = () => {
  const mode = import.meta.env.MODE; // Vite's built-in environment mode
  
  switch (mode) {
    case 'prod':
      // Production backend (will be configured when ready)
      return 'https://production-backend.railway.app';
    
    case 'dev':
    case 'ci':
    default:
      // Dev and CI both use the same staging backend
      return 'https://ci-triariigrowth-administration-backend-production.up.railway.app';
  }
};

export const API_BASE_URL = getApiBaseUrl();

// Optional: Centralize all API endpoints
export const API_ENDPOINTS = {
  OAUTH_LOGIN: '/oauth2/authorization/google',
  EXAMS: '/api/admin/exams',
  SEMINARS: '/api/admin/seminars',
  APPLICATIONS: '/api/admin/applications',
  EXAM_APPLICATIONS: '/api/admin/exam-applications',
  PAYMENTS: '/api/admin/payments',
  GALLERY: '/api/admin/gallery',
  CITIES: '/api/public/cities',
};
```

**Usage in your components:**
```javascript
import { API_BASE_URL, API_ENDPOINTS } from '@/config/api';

// Login redirect
window.location.href = API_BASE_URL + API_ENDPOINTS.OAUTH_LOGIN;

// API calls
fetch(`${API_BASE_URL}${API_ENDPOINTS.EXAMS}`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

**How it works:**
- **Local dev**: `npm run dev` → `mode = 'dev'` → Uses CI backend
- **CI build**: `npm run build` → `mode = 'prod'` by default
- **Production**: `npm run build` → `mode = 'prod'` → Uses prod backend (when ready)

⚠️ **No environment variables needed!** The API URL is determined automatically from Vite's build mode.

### 2. Testing Pagination and Search

Most list endpoints support pagination and search:

```javascript
// Pagination
GET /api/admin/exams?page=0&size=20&sort=createdAt,desc

// Search
GET /api/admin/exams?search=mathematics

// Combined
GET /api/admin/exams?page=0&size=20&sort=examDate,asc&search=2024
```

### 3. Handling Token Expiration

Tokens expire after 12 hours. Handle 401 errors by redirecting to login:

```javascript
fetch(url, { headers })
  .then(response => {
    if (response.status === 401) {
      // Token expired, redirect to OAuth
      window.location.href = 'https://ci-triariigrowth-administration-backend-production.up.railway.app/oauth2/authorization/google';
    }
    return response.json();
  });
```

⚠️ **Security Note**: Do NOT decode the JWT on the frontend for authorization decisions. If you need user information (role, email, etc.), request it from a dedicated API endpoint. The backend is the source of truth for authorization.

---

## 🚨 Common Issues & Solutions

### Issue 1: CORS Error

**Error**: `Access to fetch at '...' has been blocked by CORS policy`

**Solution**: Make sure your frontend URL is in the `CORS_ORIGINS` environment variable in Railway:
```
CORS_ORIGINS=http://localhost:3039,https://ci-fe.vercel.app
```

### Issue 2: 401 Unauthorized

**Error**: `Unauthorized` response from API

**Solution**: 
- Check token is included in `Authorization` header as `Bearer {token}`
- Verify token hasn't expired (12 hours)
- Re-authenticate via OAuth if needed

### Issue 3: 403 Forbidden

**Error**: `Forbidden` response from API

**Solution**: 
- You're trying to access an endpoint your role doesn't have permission for
- Check if endpoint requires `SUPER_ADMIN` role (you might be `TENANT_ADMIN`)

### Issue 4: OAuth Redirect Not Working

**Error**: After Google login, redirect doesn't go to your frontend

**Solution**: 
- Ensure you're sending `Origin` or `Referer` header when initiating OAuth
- Your frontend URL must be in `CORS_ORIGINS` configuration

---

## 📞 Support

If you encounter issues not covered in this guide:
1. Check Swagger documentation for detailed endpoint specifications
2. Check browser console for detailed error messages
3. Verify all environment variables are correctly set in Railway
4. Contact the backend team with error details

---

## ✅ Quick Start Checklist

- [ ] Get your Railway CI backend URL from backend team
- [ ] Set up environment variables for API URL (do NOT hardcode!)
- [ ] Verify your frontend URL is in backend's `CORS_ORIGINS` configuration
- [ ] Implement OAuth redirect to `/oauth2/authorization/google`
- [ ] Handle token extraction from redirect URL (`/administration?token=...`)
- [ ] Store token in localStorage
- [ ] Include `Authorization: Bearer {token}` header in all admin API calls
- [ ] Let browser handle `Origin` header automatically (do NOT set manually!)
- [ ] Test authentication flow end-to-end
- [ ] Explore API endpoints in Swagger UI
- [ ] Implement error handling for 401/403 responses
- [ ] Handle token expiration (12 hours) with redirect to login

---

Happy coding! 🚀

