# Edubucks Admin Panel Integration Prompt

## 🎯 Project Overview
You are integrating a complete **Edubucks Admin Panel** into your main Edubucks project. This admin panel is built with **Vite + React + TailwindCSS** and provides comprehensive management for events, exams, applications, and payments.

## 📋 Integration Requirements

### 1. **Project Structure Integration**
```
your-edubucks-project/
├── admin/                          # Admin panel subdirectory
│   ├── src/
│   │   ├── components/
│   │   │   └── Layout/
│   │   │       ├── Layout.jsx
│   │   │       ├── Sidebar.jsx
│   │   │       └── Topbar.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Etkinlikler.jsx
│   │   │   ├── SinavListele.jsx
│   │   │   ├── SinavEkle.jsx
│   │   │   ├── SinavBasvurulari.jsx
│   │   │   ├── HemenBasvurular.jsx
│   │   │   └── Odemeler.jsx
│   │   ├── config/
│   │   │   └── themeConfig.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── your-main-project-files...
```

### 2. **Dependencies to Add**
Add these dependencies to your main project's `package.json`:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "framer-motion": "^11.5.4",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.8",
    "vite": "^5.4.3"
  },
  "resolutions": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### 3. **Configuration Files**

#### **vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './admin/index.html'
      }
    }
  }
})
```

#### **tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./admin/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8',
          500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e',
        },
        danger: {
          50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171',
          500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d',
        },
      },
    },
  },
  plugins: [],
}
```

#### **postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 4. **Admin Panel HTML Entry Point**
Create `admin/index.html`:
```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edubucks Admin Panel</title>
  </head>
  <body>
    <div id="admin-root"></div>
    <script type="module" src="/admin/src/main.jsx"></script>
  </body>
</html>
```

### 5. **Routing Integration**

#### **Main App Router (your main project)**
```javascript
import { Routes, Route } from 'react-router-dom'
import AdminPanel from './admin/AdminPanel'

function App() {
  return (
    <Routes>
      {/* Your main project routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      
      {/* Admin panel route */}
      <Route path="/admin/*" element={<AdminPanel />} />
    </Routes>
  )
}
```

#### **Admin Panel Router (admin/src/App.jsx)**
```javascript
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from './pages/Login'
import Etkinlikler from './pages/Etkinlikler'
// ... other imports

function AdminApp() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/etkinlikler" element={<Layout><Etkinlikler /></Layout>} />
      <Route path="/sinavlar/listele" element={<Layout><SinavListele /></Layout>} />
      <Route path="/sinavlar/ekle" element={<Layout><SinavEkle /></Layout>} />
      <Route path="/sinav-basvurulari" element={<Layout><SinavBasvurulari /></Layout>} />
      <Route path="/hemen-basvurular" element={<Layout><HemenBasvurular /></Layout>} />
      <Route path="/odemeler" element={<Layout><Odemeler /></Layout>} />
    </Routes>
  )
}

export default AdminApp
```

### 6. **API Integration Points**

#### **Authentication Service**
Create `admin/src/services/auth.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'

export const authService = {
  async login(email, password) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    return response.json()
  },

  async logout() {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
  },

  isAuthenticated() {
    return !!localStorage.getItem('admin_token')
  }
}
```

#### **Data Services**
Create `admin/src/services/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'

const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('admin_token')
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  })
  return response.json()
}

export const api = {
  // Events
  getEvents: () => apiRequest('/events'),
  createEvent: (data) => apiRequest('/events', { method: 'POST', body: JSON.stringify(data) }),
  updateEvent: (id, data) => apiRequest(`/events/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteEvent: (id) => apiRequest(`/events/${id}`, { method: 'DELETE' }),

  // Exams
  getExams: () => apiRequest('/exams'),
  createExam: (data) => apiRequest('/exams', { method: 'POST', body: JSON.stringify(data) }),
  updateExam: (id, data) => apiRequest(`/exams/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteExam: (id) => apiRequest(`/exams/${id}`, { method: 'DELETE' }),

  // Applications
  getExamApplications: () => apiRequest('/applications/exam'),
  getQuickApplications: () => apiRequest('/applications/quick'),

  // Payments
  getPayments: () => apiRequest('/payments'),
  updatePaymentStatus: (id, status) => apiRequest(`/payments/${id}/status`, { 
    method: 'PATCH', 
    body: JSON.stringify({ status }) 
  }),
}
```

### 7. **Environment Variables**
Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ADMIN_URL=/admin
```



#### **Admin Panel Access Control**
```javascript
// Add to your main project's protected routes
const ProtectedAdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('admin_token')
  return isAdmin ? children : <Navigate to="/admin/login" />
}
```

### 9. **Build Configuration**

#### **Package.json Scripts**
```json
{
  "scripts": {
    "dev": "vite",
    "dev:admin": "vite --config admin/vite.config.js",
    "build": "vite build",
    "build:admin": "vite build --config admin/vite.config.js",
    "preview": "vite preview",
    "preview:admin": "vite preview --config admin/vite.config.js"
  }
}
```

### 10. **Testing Integration**

#### **Test Scripts**
```json
{
  "scripts": {
    "test": "vitest",
    "test:admin": "vitest --config admin/vitest.config.js",
    "test:coverage": "vitest --coverage"
  }
}
```

## 🚀 Implementation Steps

1. **Copy Admin Files**: Copy the entire `admin/` directory to your main project
2. **Install Dependencies**: Run `npm install` to install all required packages
3. **Update Configurations**: Modify `vite.config.js`, `tailwind.config.js`, and `postcss.config.js`
4. **Create Admin Entry Point**: Add `admin/index.html`
5. **Integrate Routing**: Update your main app router to include admin routes
6. **Add API Services**: Implement authentication and data services
7. **Update Navigation**: Add admin panel link to your main navigation
8. **Test Integration**: Run both main app and admin panel to ensure they work together

## 🔧 Customization Options

### **Theme Customization**
- Modify `admin/src/config/themeConfig.js` to match your brand colors
- Update Tailwind config to include your custom color palette

### **Menu Customization**
- Edit `admin/src/components/Layout/Sidebar.jsx` to add/remove menu items
- Update routing in `admin/src/App.jsx` accordingly

### **Page Customization**
- Modify individual page components in `admin/src/pages/`
- Add new pages by creating new components and adding routes

## 📝 Notes

- The admin panel uses mock data by default - replace with real API calls
- Authentication is currently placeholder - implement real auth with your backend
- All forms include proper validation and error handling
- The panel is fully responsive and mobile-friendly
- Testing setup is included for comprehensive test coverage

## 🎯 Expected Result

After integration, you'll have:
- A fully functional admin panel accessible at `/admin`
- Seamless navigation between main site and admin panel
- Complete CRUD operations for all data types
- Responsive design that works on all devices
- Comprehensive testing setup
- Easy customization and extension points
