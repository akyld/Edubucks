import { motion } from 'framer-motion';
import { Brain, Sparkles, TrendingUp, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import themeConfig from '../theme/themeConfig';

const EdubucksAI = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Assessment',
      description: 'AI-powered analysis of your learning patterns'
    },
    {
      icon: Target,
      title: 'Personalized Goals',
      description: 'Custom learning paths tailored to your needs'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Real-time insights into your improvement'
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Get suggestions that match your learning style'
    }
  ];

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: themeConfig.colors.bgPrimary,
        color: themeConfig.colors.textPrimary,
      }}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at top right, rgba(255, 122, 0, 0.1) 0%, ${themeConfig.colors.bgPrimary} 50%)`,
          }}
        />

        {/* AI-themed Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(${themeConfig.colors.accent} 1px, transparent 1px),
              linear-gradient(90deg, ${themeConfig.colors.accent} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated Glow Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${themeConfig.colors.accent}20 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${themeConfig.colors.accent}15 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: themeConfig.colors.accent,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar logo="/logo.webp" />

        {/* Hero Section */}
        <section
          className="min-h-screen flex items-center justify-center px-6"
          style={{
            paddingTop: themeConfig.spacing.navbarHeight,
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Logo and Heading Side by Side */}
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-24 mb-12 mt-12">
              {/* Logo */}
              <motion.div
                variants={logoVariants}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src="/ai_logo.webp"
                    alt="Edubucks AI Logo"
                    className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    style={{
                      display: 'none',
                      width: '160px',
                      height: '160px',
                      backgroundColor: themeConfig.colors.accent,
                      borderRadius: themeConfig.effects.borderRadius.xl,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px',
                      fontWeight: themeConfig.typography.fontWeight.bold,
                      color: themeConfig.colors.textPrimary,
                    }}
                  >
                    AI
                  </div>

                  {/* Pulsing Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background: `radial-gradient(circle, ${themeConfig.colors.accent}40 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                variants={itemVariants}
                className="flex-1 text-center lg:text-left"
              >
                <motion.h1
                  className="font-extrabold tracking-tight"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                    color: themeConfig.colors.textPrimary,
                    lineHeight: '1.1',
                    textShadow: themeConfig.effects.shadow.xl,
                  }}
                >
                  Discover Your 
                  Learning Personality
                  <br />
                  <span style={{ color: themeConfig.colors.accent }}>
                  Learning Personality
                  </span>
                </motion.h1>
              </motion.div>
            </div>

            {/* Description & CTA Button Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16 max-w-6xl mx-auto"
            >
              {/* Description */}
              <p
                className="text-lg md:text-xl leading-relaxed text-center lg:text-left flex-1"
                style={{
                  color: themeConfig.colors.textSecondary,
                }}
              >
                Edubucks AI is an intelligent personality assessment model designed to help students discover their unique learning personality and align it with future career paths. By analyzing each student's cognitive tendencies, motivational drivers, and behavioral patterns, the system identifies their professional dependencies  the natural connections between how they learn and the careers where they can thrive.
              </p>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <motion.button
                  className="px-10 py-5 rounded-full font-bold text-lg tracking-wide inline-flex items-center gap-3 whitespace-nowrap"
                  style={{
                    backgroundColor: themeConfig.colors.accent,
                    color: themeConfig.colors.textPrimary,
                    boxShadow: themeConfig.effects.shadow.accent,
                    transition: themeConfig.animation.transition.normal,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 20px 40px -10px ${themeConfig.colors.accent}80`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = themeConfig.colors.hover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
                  }}
                >
                  <Sparkles size={24} />
                  Start Assessment
                </motion.button>
              </div>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 mb-10"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="p-6 rounded-2xl backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                      transition: themeConfig.animation.transition.normal,
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(255, 122, 0, 0.05)',
                      borderColor: themeConfig.colors.accent,
                      y: -5,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      style={{
                        backgroundColor: `${themeConfig.colors.accent}20`,
                      }}
                    >
                      <Icon
                        size={28}
                        style={{ color: themeConfig.colors.accent }}
                      />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: themeConfig.colors.textPrimary }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: themeConfig.colors.textMuted }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default EdubucksAI;

