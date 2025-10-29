import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { authService } from '../../services/admin/auth';
import themeConfig from '../../theme/themeConfig';

const Topbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = async () => {
    await authService.logout();
    navigate('/admin/login');
  };

  return (
    <header 
      className="h-16 flex items-center justify-between px-6"
      style={{ 
        backgroundColor: themeConfig.colors.bgPrimary,
        borderBottom: `1px solid ${themeConfig.colors.accent}30`
      }}
    >
      {/* Left side */}
      <div className="flex items-center">
        <h1 
          className="text-lg font-semibold"
          style={{ color: themeConfig.colors.textPrimary }}
        >
          Admin Panel
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-2 p-2 rounded-md"
            style={{ 
              color: themeConfig.colors.textPrimary,
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = themeConfig.colors.bgTertiary;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <div 
              className="h-8 w-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: themeConfig.colors.accent }}
            >
              <User size={16} style={{ color: themeConfig.colors.textPrimary }} />
            </div>
            <span className="hidden md:block text-sm font-medium">
              {user?.name || 'Admin'}
            </span>
          </button>

          {/* Dropdown Menu */}
          {showUserMenu && (
            <div 
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50"
              style={{ 
                backgroundColor: themeConfig.colors.bgPrimary,
                border: `1px solid ${themeConfig.colors.accent}30`
              }}
            >
              <div className="py-1">
                <div 
                  className="px-4 py-2 text-sm"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  {user?.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-700"
                  style={{ 
                    color: themeConfig.colors.textPrimary,
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = themeConfig.colors.bgTertiary;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  Çıkış Yap
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;