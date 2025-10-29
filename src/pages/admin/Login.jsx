import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Chrome } from 'lucide-react';
import { authService } from '../../services/admin/auth';
import config from '../../config/environment';
import themeConfig from '../../theme/themeConfig';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await authService.login(formData.email, formData.password);
      navigate('/admin');
    } catch (err) {
      setError('Giriş başarısız. E-posta ve şifrenizi kontrol edin.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async () => {
    try {
      setIsLoading(true);
      setError('');
      await authService.loginWithOAuth();
    } catch (err) {
      setError('OAuth girişi başlatılamadı. Lütfen tekrar deneyin.');
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: themeConfig.colors.bgPrimary }}
    >
      <motion.div 
        className="max-w-md w-full space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div>
          <h2 
            className="mt-6 text-center text-3xl font-extrabold"
            style={{ color: themeConfig.colors.textPrimary }}
          >
            Admin Girişi
          </h2>
          <p 
            className="mt-2 text-center text-sm"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            Edubucks Admin Paneline Hoş Geldiniz
          </p>
        </div>

        {/* Form */}
        <motion.form 
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium mb-2"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                E-posta Adresi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail 
                    size={20} 
                    style={{ color: themeConfig.colors.textSecondary }}
                  />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="admin@edubucks.org"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium mb-2"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                Şifre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock 
                    size={20} 
                    style={{ color: themeConfig.colors.textSecondary }}
                  />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div 
              className="text-red-400 text-sm text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: themeConfig.colors.accent,
              color: themeConfig.colors.textPrimary,
              focusRingColor: themeConfig.colors.accent
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Giriş yapılıyor...
              </div>
            ) : (
              'Giriş Yap'
            )}
          </motion.button>

          {/* OAuth Section - Only show if OAuth is enabled */}
          {config.FEATURES.ENABLE_OAUTH && (
            <>
              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: themeConfig.colors.accent + '30' }} />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span 
                    className="px-2"
                    style={{ 
                      backgroundColor: themeConfig.colors.bgPrimary,
                      color: themeConfig.colors.textSecondary 
                    }}
                  >
                    veya
                  </span>
                </div>
              </div>

              {/* OAuth Button */}
              <motion.button
                type="button"
                onClick={handleOAuthLogin}
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#4285F4',
                  color: 'white',
                  focusRingColor: '#4285F4'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Chrome className="w-5 h-5 mr-2" />
                Google ile Giriş Yap
              </motion.button>
            </>
          )}

          {/* Demo Credentials - Only show in mock mode */}
          {config.FEATURES.ENABLE_MOCK_AUTH && (
            <div 
              className="text-center text-sm p-4 rounded-lg"
              style={{ 
                backgroundColor: themeConfig.colors.bgSecondary,
                color: themeConfig.colors.textSecondary
              }}
            >
              <p className="font-medium mb-2">Demo Giriş Bilgileri:</p>
              <p>E-posta: admin@edubucks.org</p>
              <p>Şifre: admin123</p>
            </div>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;
