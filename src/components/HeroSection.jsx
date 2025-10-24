import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import themeConfig from '../theme/themeConfig';

const HeroSection = ({ 
  logo = '/logo.svg',
  slogan = 'Empowering Education Through Innovation',
  ctaText = 'Learn More',
  ctaLink = '#features',
}) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: themeConfig.animation.easing.spring,
      }
    }
  };
  
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: themeConfig.animation.easing.spring,
      }
    }
  };
  
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6"
      style={{
        paddingTop: themeConfig.spacing.navbarHeight,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center max-w-5xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          className="flex justify-center mb-8 md:mb-12"
        >
          <img 
            src={logo}
            alt="Edubucks Logo"
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div
            style={{
              display: 'none',
              width: '192px',
              height: '192px',
              backgroundColor: themeConfig.colors.accent,
              borderRadius: themeConfig.effects.borderRadius.xl,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: themeConfig.typography.fontWeight.bold,
              color: themeConfig.colors.textPrimary,
            }}
          >
            EB
          </div>
        </motion.div>
        
        {/* Main Slogan */}
        <motion.h1
          variants={itemVariants}
          className="font-extrabold tracking-tight mb-6 md:mb-8 px-2"
          style={{
            fontSize: 'clamp(1.75rem, 5vw, 4.5rem)',
            color: themeConfig.colors.textPrimary,
            lineHeight: '1.2',
            textShadow: themeConfig.effects.shadow.xl,
          }}
        >
          {slogan}
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          style={{
            color: themeConfig.colors.textSecondary,
            lineHeight: '1.6',
          }}
        >
          How Tech Will Shape Education
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href={ctaLink}
            onClick={handleScroll}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 font-bold tracking-wide text-base md:text-lg rounded-full"
            style={{
              backgroundColor: themeConfig.colors.accent,
              color: themeConfig.colors.textPrimary,
              boxShadow: themeConfig.effects.shadow.accent,
              transition: themeConfig.animation.transition.normal,
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px -10px rgba(255, 122, 0, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = themeConfig.colors.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
            }}
          >
            {ctaText}
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
        
        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 md:mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex justify-center"
          >
            <div 
              className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
              style={{
                borderColor: themeConfig.colors.textMuted,
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: themeConfig.colors.accent,
                }}
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

