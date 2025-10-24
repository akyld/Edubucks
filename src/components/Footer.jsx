import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialLinks from './SocialLinks';
import themeConfig from '../theme/themeConfig';

const Footer = ({ variant = 'default' }) => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'E-Posta',
      value: 'info@edubucks.org',
      href: 'mailto:info@edubucks.org',
      color: themeConfig.colors.accent,
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+90 (850) 532 66 77',
      href: 'tel:+908505326677',
      color: themeConfig.colors.accent,
    },
    {
      icon: MapPin,
        label: 'Adres',
          value: 'Yalı, 143. Sk. No:38, 35430 Güzelbahçe/İzmir',
      href: null,
      color: themeConfig.colors.accent,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  // Different styles for landing page (fixed) vs other pages (relative)
  const isFixed = variant === 'fixed';

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`${isFixed ? 'fixed' : 'relative'} ${isFixed ? 'bottom-0 left-0 right-0 z-20' : ''} pb-6 md:pb-8 pt-12 md:pt-16`}
      style={{
        background: isFixed 
          ? 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%)'
          : `linear-gradient(to top, ${themeConfig.colors.bgPrimary} 0%, rgba(0, 0, 0, 0.95) 100%)`,
        borderTop: !isFixed ? `1px solid rgba(255, 255, 255, 0.1)` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8"
        >
          {/* Left Side - Social Links & Branding */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 
              className="text-2xl md:text-3xl font-bold text-center md:text-left"
              style={{ color: themeConfig.colors.accent }}
            >
              Edubucks
            </h3>
            <p 
              className="text-sm md:text-base text-center md:text-left"
              style={{ color: themeConfig.colors.textSecondary }}
            >
              How Tech Will Shape Education
            </p>

            {/* Social Links - directly below */}
            <div className="flex justify-center md:justify-start">
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right Side - İletişim Section */}
          <motion.div variants={itemVariants}>
            <div
              className="relative p-6 md:p-8 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid rgba(255, 255, 255, 0.1)`,
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Decorative gradient */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-20"
                style={{
                  background: `radial-gradient(circle, ${themeConfig.colors.accent} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: `${themeConfig.colors.accent}20`,
                    }}
                  >
                    <Send
                      size={24}
                      style={{ color: themeConfig.colors.accent }}
                    />
                  </div>
                  <h4 
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    İletişim
                  </h4>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    const Wrapper = contact.href ? 'a' : 'div';
                    const wrapperProps = contact.href 
                      ? { href: contact.href, ...(contact.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
                      : {};

                    return (
                      <Wrapper
                        key={index}
                        {...wrapperProps}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${contact.href ? 'cursor-pointer hover:bg-white/5' : ''}`}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        }}
                        onMouseEnter={(e) => {
                          if (contact.href) {
                            e.currentTarget.style.backgroundColor = `${themeConfig.colors.accent}10`;
                            e.currentTarget.style.transform = 'translateX(5px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (contact.href) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }
                        }}
                      >
                        <div
                          className="p-2 rounded-lg flex-shrink-0"
                          style={{
                            backgroundColor: `${contact.color}20`,
                          }}
                        >
                          <Icon
                            size={18}
                            style={{ color: contact.color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-xs font-semibold mb-1"
                            style={{ color: themeConfig.colors.textMuted }}
                          >
                            {contact.label}
                          </p>
                          <p
                            className="text-sm md:text-base font-semibold truncate"
                            style={{ 
                              color: contact.href ? themeConfig.colors.accent : themeConfig.colors.textPrimary 
                            }}
                          >
                            {contact.value}
                          </p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>

                {/* Quick Contact Button */}
                <Link to="/blog/iletisim">
                  <motion.button
                    className="w-full mt-4 px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: `${themeConfig.colors.accent}20`,
                      color: themeConfig.colors.accent,
                      border: `1px solid ${themeConfig.colors.accent}40`,
                    }}
                    whileHover={{
                      backgroundColor: themeConfig.colors.accent,
                      color: themeConfig.colors.textPrimary,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Bize Ulaşın
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        

        {/* Copyright */}
        <motion.p
          variants={itemVariants}
          className="text-center text-xs md:text-sm"
          style={{
            color: themeConfig.colors.textMuted,
          }}
        >
          © {new Date().getFullYear()} Edubucks. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;

