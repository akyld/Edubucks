import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import themeConfig from '../theme/themeConfig';

const SocialLinks = ({ className = '' }) => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/company/edubucks',
      color: themeConfig.colors.social.linkedin,
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/edubucks_org',
      color: themeConfig.colors.social.instagram,
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/edubucks',
      color: themeConfig.colors.social.twitter,
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://www.youtube.com/channel/UC8EkXbL5QZMhfUya2BU0efA',
      color: themeConfig.colors.social.youtube,
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }
    }
  };
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex items-center justify-center gap-6 ${className}`}
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;
        
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="relative group"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.name}
          >
            {/* Background Circle */}
            <div
              className="absolute inset-0 rounded-full transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            
            {/* Icon */}
            <div
              className="relative p-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${themeConfig.colors.textMuted}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
                e.currentTarget.style.borderColor = themeConfig.colors.accent;
                e.currentTarget.style.boxShadow = themeConfig.effects.shadow.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = themeConfig.colors.textMuted;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Icon 
                size={24} 
                style={{
                  color: themeConfig.colors.textPrimary,
                  transition: themeConfig.animation.transition.normal,
                }}
              />
            </div>
            
            {/* Tooltip */}
            <div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg opacity-0 pointer-events-none transition-all duration-300 whitespace-nowrap"
              style={{
                backgroundColor: themeConfig.colors.accent,
                color: themeConfig.colors.textPrimary,
                fontSize: themeConfig.typography.fontSize.sm,
                fontWeight: themeConfig.typography.fontWeight.semibold,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translate(-50%, -5px)';
              }}
            >
              {social.name}
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: `6px solid ${themeConfig.colors.accent}`,
                }}
              />
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;

