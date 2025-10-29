// OAuth Callback Handler for Admin Panel
// Handles the redirect from Google OAuth and processes the token

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { authService } from '../../services/admin/auth';
import themeConfig from '../../theme/themeConfig';

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('processing'); // processing, success, error
  const [message, setMessage] = useState('OAuth işlemi işleniyor...');

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        setStatus('processing');
        setMessage('OAuth token işleniyor...');

        // Get token from URL parameters
        const token = searchParams.get('token');
        
        if (!token) {
          throw new Error('OAuth token bulunamadı');
        }

        // Process the token with auth service
        await authService.handleOAuthCallback(token);
        
        setStatus('success');
        setMessage('Giriş başarılı! Yönlendiriliyorsunuz...');
        
        // Clean URL and redirect to admin dashboard
        setTimeout(() => {
          window.history.replaceState({}, document.title, '/admin');
          navigate('/admin', { replace: true });
        }, 2000);

      } catch (error) {
        console.error('OAuth callback error:', error);
        setStatus('error');
        setMessage(error.message || 'OAuth işlemi başarısız oldu');
        
        // Redirect to login after error
        setTimeout(() => {
          navigate('/admin/login', { replace: true });
        }, 3000);
      }
    };

    handleOAuthCallback();
  }, [searchParams, navigate]);

  const getStatusIcon = () => {
    switch (status) {
      case 'processing':
        return <Loader className="w-16 h-16 animate-spin" style={{ color: themeConfig.colors.accent }} />;
      case 'success':
        return <CheckCircle className="w-16 h-16" style={{ color: '#10B981' }} />;
      case 'error':
        return <XCircle className="w-16 h-16" style={{ color: '#EF4444' }} />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'processing':
        return themeConfig.colors.accent;
      case 'success':
        return '#10B981';
      case 'error':
        return '#EF4444';
      default:
        return themeConfig.colors.textSecondary;
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: themeConfig.colors.bgPrimary }}
    >
      <motion.div 
        className="max-w-md w-full text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Status Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {getStatusIcon()}
        </motion.div>

        {/* Status Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <h2 
            className="text-2xl font-bold mb-2"
            style={{ color: themeConfig.colors.textPrimary }}
          >
            {status === 'processing' && 'İşleniyor...'}
            {status === 'success' && 'Başarılı!'}
            {status === 'error' && 'Hata!'}
          </h2>
          <p 
            className="text-lg"
            style={{ color: getStatusColor() }}
          >
            {message}
          </p>
        </motion.div>

        {/* Additional Info */}
        {status === 'processing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="text-sm"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            <p>Lütfen bekleyin, Google OAuth işlemi tamamlanıyor...</p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-sm" style={{ color: themeConfig.colors.textSecondary }}>
              Giriş yapılamadı. Lütfen tekrar deneyin.
            </p>
            <button
              onClick={() => navigate('/admin/login')}
              className="px-6 py-2 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: themeConfig.colors.accent,
                color: themeConfig.colors.textPrimary
              }}
            >
              Giriş Sayfasına Dön
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default OAuthCallback;

