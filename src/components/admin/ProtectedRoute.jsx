// Protected Route Component for Admin Panel
// Ensures user is authenticated before accessing admin pages

import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/admin/auth';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();

  // If not authenticated, redirect to login with return URL
  if (!isAuthenticated) {
    return (
      <Navigate 
        to="/admin/login" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
