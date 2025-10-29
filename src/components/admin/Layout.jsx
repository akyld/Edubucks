import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import themeConfig from '../../theme/themeConfig';

const Layout = () => {
  return (
    <div 
      className="min-h-screen flex"
      style={{ backgroundColor: themeConfig.colors.bgPrimary }}
    >
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />
        
        {/* Page Content */}
        <main 
          className="flex-1 p-6"
          style={{ 
            backgroundColor: themeConfig.colors.bgSecondary,
            minHeight: 'calc(100vh - 4rem)'
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;