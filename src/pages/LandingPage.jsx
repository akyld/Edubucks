import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import themeConfig from '../theme/themeConfig';

const LandingPage = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay was prevented:', err);
      });
    }
  }, []);
  
  return (
    <div 
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: themeConfig.colors.bgPrimary,
        color: themeConfig.colors.textPrimary,
      }}
    >
      {/* Background Video/Image */}
      <div className="fixed inset-0 z-0">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/bg-image.jpg"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/bg-image.jpg)',
            display: 'none',
          }}
          onError={(e) => {
            e.target.style.backgroundImage = 'none';
            e.target.style.backgroundColor = themeConfig.colors.bgSecondary;
          }}
        />
        
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              ${themeConfig.colors.bgOverlay} 0%,
              rgba(0, 0, 0, 0.8) 50%,
              ${themeConfig.colors.bgOverlay} 100%
            )`,
          }}
        />
        
        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${themeConfig.colors.accent} 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar logo="/logo.webp" />
        
        {/* Hero Section */}
        <HeroSection
          logo="/logo.webp"
          slogan="The Future Of Learning"
          ctaText="Learn More"
          ctaLink="#features"
        />
        
        {/* Features Section */}
        <section
          id="features"
          className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-20"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto w-full"
          >
            {/* Interactive Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
              {[
                { 
                  title: 'Lise Değişim',
                  image: '/lise-değişim.jpg',
                  route: '/lise-degisim',
                  subRoutes: [
                    { name: 'Devlet Lise Değişim Programları', path: '/blog/lise-degisim-programlari' },
                    { name: 'Özel Lise Değişim Programları', path: '/blog/ozel-lise-degisim-programlari' },
                  ]
                },
                { 
                  title: 'Akademik',
                  image: '/akademik.jpg',
                  route: '/akademik',
                  subRoutes: [
                    { name: 'Lisans & Yüksek Lisans Programları', path: '/blog/lisans-yukseklisans-programları' },
                    { name: 'Diploma & Sertifika Programları', path: '/blog/diploma-ve-sertifika-programları' },
                    { name: 'Akademik Yaz Okulu Programları', path: '/blog/akademik-yaz-okul-programlari' },
                  ]
                },
                { 
                  title: 'Spor Akademisi',
                  image: '/spor-akademisi.jpg',
                  route: '/spor-akademisi',
                  subRoutes: [
                    { name: 'Spor Akademisi', path: '/blog/spor-akademisi' },
                  ]
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.route}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <motion.div
                    className="relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group w-full h-80 md:h-96 lg:h-[450px]"
                    style={{
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                    }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Image Container */}
                    <div
                      className="absolute inset-0 w-full h-full transition-transform duration-300 md:group-hover:scale-110"
                      style={{
                        backgroundColor: themeConfig.colors.accent + '20',
                        backgroundImage: `url(${feature.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    
                    {/* Hover Overlay - Mobile: Always visible | Desktop: Show on hover */}
                    <div
                      className="absolute inset-0 w-full h-full bg-black/70 flex flex-col items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 p-4 md:p-6"
                    >
                      {/* Feature Title */}
                      <h3
                        className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 transform md:scale-90 md:group-hover:scale-100 transition-transform duration-300"
                        style={{
                          color: themeConfig.colors.accent,
                        }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Route List */}
                      <div className="space-y-2 md:space-y-3 w-full max-w-xs transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                        {feature.subRoutes.map((subRoute, idx) => (
                          <Link
                            key={subRoute.path}
                            to={subRoute.path}
                            className="block px-3 md:px-4 py-2 rounded-lg text-center text-sm md:text-base font-semibold transition-all duration-200 hover:bg-white/10"
                            style={{
                              color: themeConfig.colors.textPrimary,
                              border: `1px solid ${themeConfig.colors.accent}40`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = `${themeConfig.colors.accent}30`;
                              e.currentTarget.style.borderColor = themeConfig.colors.accent;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.borderColor = `${themeConfig.colors.accent}40`;
                            }}
                          >
                            {subRoute.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

