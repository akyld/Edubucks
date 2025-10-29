import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  Plus, 
  Users, 
  CreditCard, 
  Home
} from 'lucide-react';
import themeConfig from '../../theme/themeConfig';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Etkinlikler',
      href: '/admin',
      icon: Calendar,
    },
    {
      name: 'Sınavlar',
      children: [
        { name: 'Sınav Listesi', href: '/admin/sinavlar', icon: FileText },
        { name: 'Sınav Ekle', href: '/admin/sinavlar/ekle', icon: Plus },
      ]
    },
    {
      name: 'Başvurular',
      children: [
        { name: 'Sınav Başvuruları', href: '/admin/basvurular/sinav', icon: FileText },
        { name: 'Hemen Başvurular', href: '/admin/basvurular/hemen', icon: Users },
      ]
    },
    {
      name: 'Ödemeler',
      href: '/admin/odemeler',
      icon: CreditCard,
    },
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <div
      className="w-64 h-screen"
      style={{ 
        backgroundColor: themeConfig.colors.bgPrimary,
        borderRight: `1px solid ${themeConfig.colors.accent}30`
      }}
    >
      {/* Header */}
      <div className="flex items-center h-16 px-6">
        <h1 
          className="text-xl font-bold"
          style={{ color: themeConfig.colors.accent }}
        >
          Edubucks Admin
        </h1>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-3">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <Link
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href) 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  style={{
                    backgroundColor: isActive(item.href) 
                      ? themeConfig.colors.accent 
                      : 'transparent'
                  }}
                >
                  <item.icon 
                    className="mr-3 h-5 w-5" 
                    style={{ 
                      color: isActive(item.href) 
                        ? themeConfig.colors.textPrimary 
                        : themeConfig.colors.textSecondary 
                    }}
                  />
                  {item.name}
                </Link>
              ) : (
                <div>
                  <div 
                    className="px-3 py-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: themeConfig.colors.textMuted }}
                  >
                    {item.name}
                  </div>
                  {item.children?.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={child.href}
                      className={`group flex items-center px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(child.href) 
                          ? 'text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                      style={{
                        backgroundColor: isActive(child.href) 
                          ? themeConfig.colors.accent 
                          : 'transparent'
                      }}
                    >
                      <child.icon 
                        className="mr-3 h-4 w-4" 
                        style={{ 
                          color: isActive(child.href) 
                            ? themeConfig.colors.textPrimary 
                            : themeConfig.colors.textSecondary 
                        }}
                      />
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Back to Main Site */}
      <div className="absolute bottom-4 left-4 right-4">
        <Link
          to="/"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-gray-700"
          style={{ 
            color: themeConfig.colors.textSecondary,
            backgroundColor: 'transparent'
          }}
        >
          <Home className="mr-3 h-4 w-4" />
          Ana Siteye Dön
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;