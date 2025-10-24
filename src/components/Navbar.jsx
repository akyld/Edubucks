import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import themeConfig from '../theme/themeConfig';

const Navbar = ({ logo = '/logo.svg' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { label: 'HOME', href: '/', isRoute: true },
    { label: 'BLOG', href: '/blog', isRoute: true },
    { label: 'SINAV BAŞVURU', href: '/sinav-basvuru', isRoute: true },
    { label: 'EDUBUCKS AI', href: '/edubucks-ai', isRoute: true },
    { label: 'FITBUCKS', href: '#fitbucks' },
    { label: 'EDUBUCKS FUNNEL', href: '#funnel' },
    { label: 'BOOK-A-DEMO', href: '/book-a-demo', isRoute: true, isSpecial: true },
    { label: 'HEMEN BAŞVUR', href: '/blog/hemen-basvur', isRoute: true },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navVariants = {
    top: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(8px)',
    },
    scrolled: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(12px)',
    }
  };
  
  return (
    <motion.nav
      initial="top"
      animate={isScrolled ? 'scrolled' : 'top'}
      variants={navVariants}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          className="flex items-center justify-between"
          style={{ height: themeConfig.spacing.navbarHeight }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="Edubucks Logo" 
                className="h-20 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span 
                className="text-2xl font-bold tracking-tight"
                style={{ 
                  color: themeConfig.colors.textPrimary,
                  display: 'none',
                }}
              >
                EDUBUCKS
              </span>
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const isActive = link.isRoute && location.pathname === link.href;
              const LinkComponent = link.isRoute ? Link : 'a';
              const linkProps = link.isRoute ? { to: link.href } : { href: link.href };
              
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LinkComponent
                    {...linkProps}
                    className="relative font-semibold tracking-wide text-sm"
                    style={{
                      color: isActive ? themeConfig.colors.accent : themeConfig.colors.textPrimary,
                      transition: themeConfig.animation.transition.normal,
                    }}
                  >
                    {link.isSpecial ? (
                      <span
                        className="px-6 py-2.5 rounded-full font-bold inline-block"
                        style={{
                          backgroundColor: themeConfig.colors.accent,
                          color: themeConfig.colors.textPrimary,
                          boxShadow: themeConfig.effects.shadow.accent,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = themeConfig.colors.hover;
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {link.label}
                      </span>
                    ) : (
                      <>
                        {link.label}
                        <span
                          className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                          style={{
                            backgroundColor: themeConfig.colors.accent,
                            width: isActive ? '100%' : '0',
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) e.currentTarget.style.width = '100%';
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) e.currentTarget.style.width = '0';
                          }}
                        />
                      </>
                    )}
                  </LinkComponent>
                </motion.div>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg"
            style={{
              color: themeConfig.colors.textPrimary,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden"
          style={{
            backgroundColor: themeConfig.colors.bgPrimary,
            borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          }}
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = link.isRoute && location.pathname === link.href;
              const LinkComponent = link.isRoute ? Link : 'a';
              const linkProps = link.isRoute ? { to: link.href } : { href: link.href };
              
              return (
                <LinkComponent
                  key={link.label}
                  {...linkProps}
                  className="block font-semibold tracking-wide text-sm py-2"
                  style={{
                    color: isActive || link.isSpecial ? themeConfig.colors.accent : themeConfig.colors.textPrimary,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </LinkComponent>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

