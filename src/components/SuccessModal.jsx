import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import themeConfig from '../theme/themeConfig';

const SuccessModal = ({ isOpen, onClose }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
            }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-md rounded-2xl p-8"
              style={{
                backgroundColor: themeConfig.colors.bgSecondary,
                border: `2px solid ${themeConfig.colors.accent}`,
                boxShadow: `0 20px 50px ${themeConfig.colors.accent}40`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: themeConfig.colors.textMuted,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
                  e.currentTarget.style.color = themeConfig.colors.textPrimary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = themeConfig.colors.textMuted;
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Success Icon with Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.2, 
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                className="flex justify-center mb-6"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${themeConfig.colors.accent}20`,
                  }}
                >
                  <CheckCircle
                    size={48}
                    style={{ color: themeConfig.colors.accent }}
                    strokeWidth={2.5}
                  />
                </div>
              </motion.div>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  Demo Booked Successfully!
                </h2>
                <p
                  className="text-base mb-8 leading-relaxed"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  We&apos;ll contact you soon with confirmation details.
                  Thank you for choosing Edubucks!
                </p>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={onClose}
                className="w-full py-3 rounded-full font-semibold text-lg transition-all duration-300"
                style={{
                  backgroundColor: themeConfig.colors.accent,
                  color: themeConfig.colors.textPrimary,
                  boxShadow: themeConfig.effects.shadow.accent,
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 10px 30px ${themeConfig.colors.accent}60`
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeConfig.colors.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
                }}
              >
                Got it!
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;

