import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, Users, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import DemoForm from '../components/DemoForm';
import SuccessModal from '../components/SuccessModal';
import Footer from '../components/Footer';
import themeConfig from '../theme/themeConfig';

const BookADemo = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const features = [
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for you'
    },
    {
      icon: Video,
      title: 'Virtual Meeting',
      description: 'Join from anywhere via video call'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Meet with our education specialists'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in just 30 minutes'
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
            background: `radial-gradient(circle at bottom left, rgba(255, 122, 0, 0.08) 0%, ${themeConfig.colors.bgPrimary} 50%)`,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(${themeConfig.colors.accent} 1px, transparent 1px),
              linear-gradient(90deg, ${themeConfig.colors.accent} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar logo="/logo.webp" />

        {/* Hero Section */}
        <section
          className="pt-32 pb-20 px-6"
          style={{
            paddingTop: `calc(${themeConfig.spacing.navbarHeight} + 4rem)`,
          }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: `${themeConfig.colors.accent}20`,
                  border: `1px solid ${themeConfig.colors.accent}40`,
                }}
              >
                <Calendar
                  size={20}
                  style={{ color: themeConfig.colors.accent }}
                />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: themeConfig.colors.accent }}
                >
                  SCHEDULE YOUR DEMO
                </span>
              </motion.div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
                style={{
                  color: themeConfig.colors.textPrimary,
                  lineHeight: '1.1',
                }}
              >
                Experience Edubucks
                <br />
                <span style={{ color: themeConfig.colors.accent }}>
                  In Action
                </span>
              </h1>

              <p
                className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                Book a personalized demo and discover how Edubucks can transform
                your educational journey with AI-powered insights.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-6 rounded-xl text-center"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(255, 122, 0, 0.05)',
                      borderColor: themeConfig.colors.accent,
                      y: -5,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                      style={{
                        backgroundColor: `${themeConfig.colors.accent}20`,
                      }}
                    >
                      <Icon
                        size={24}
                        style={{ color: themeConfig.colors.accent }}
                      />
                    </div>
                    <h3
                      className="text-base font-bold mb-2"
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

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="rounded-2xl p-8 md:p-12"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: `1px solid rgba(255, 255, 255, 0.1)`,
                backdropFilter: 'blur(10px)',
              }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-center mb-8"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                Fill in Your Details
              </h2>
              
              <DemoForm onSubmitSuccess={handleFormSuccess} />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default BookADemo;

