import { motion } from 'framer-motion';
import { BookOpen, Award, BookText, TrendingUp, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import themeConfig from '../theme/themeConfig';

const Blog = () => {
  const blogCategories = [
    {
      id: 'homepage',
      icon: BookOpen,
      title: 'Anasayfa',
      subtitle: 'Homepage Topics',
      /* description: 'Ana sayfa konuları ve genel bilgiler', */
      topics: [
        { name: 'Hemen Başvur', description: 'Başvuru süreçleri', slug: 'hemen-basvur' },
        { name: 'S.S.S', description: 'Sık sorulan sorular', slug: 'sss' },
        { name: 'İletişim', description: 'Bize ulaşın', slug: 'iletisim' },
      ]
    },
    {
      id: 'achievements',
      icon: Award,
      title: 'EDUBUCKS',
      subtitle: 'EDUBUCKS',
      /* description: 'İlham verici başarı hikayeleri ve deneyimler', */
      topics: [
        { name: 'Neler Yapıyoruz?', description: 'Neler yapıyoruz ve neden yapıyoruz?', slug: 'neler-yapiyoruz' },
        { name: 'We Are Edubucks', description: 'We Are Edubucks', slug: 'we-are-edubucks' },
        { name: 'Seminer ve Etkinlikler', description: 'Seminer ve Etkinlikler', slug: 'seminer-ve-etkinlikler' },
      ]
    },
    {
      id: 'technology',
      icon: GraduationCap,
      title: 'Yurt Dışı Programları',
      subtitle: 'International Programs',
      /* description: 'Yurt Dışı Programları', */
      topics: [
        { name: 'Devlet Lise Değişim Programları', description: 'Devlet Lise Değişim Programları', slug: 'lise-degisim-programlari' },
        { name: 'Özel Lise Değişim Programları', description: 'Özel Lise Değişim Programları', slug: 'ozel-lise-degisim-programlari' },
        { name: 'OSSD+ Çift Diploma Programı', description: 'OSSD+ Çift Diploma Programı', slug: 'ossd-cift-diploma-programı' },
        { name: 'Lisans ve Yüksek Lisans Programları', description: 'Lisans ve Yüksek Lisans Programları', slug: 'lisans-yukseklisans-programları' },
        { name: 'Diploma ve Sertifika Programları', description: 'Diploma ve Sertifika Programları', slug: 'diploma-ve-sertifika-programları' },
        {name: 'Akademik Yaz Okulu Programları', description: 'Akademik Yaz Okulu Programları', slug: 'akademik-yaz-okul-programlari' },
        {name: 'Spor Akademisi Programları', description: 'Spor Akademisi', slug: 'spor-akademisi' },
        {name : 'Yaz Okulları (8-17 yaş)', description: 'Yaz Okulları (8-17 yaş)', slug: 'yaz-okullari' },
        {name: 'İngilizce Dil Okulu Programları', description: 'İngilizce Dil Okulu Programları', slug: 'ingilizce-dil-okulu' },
      ]
    },
    {
      id: 'career',
      icon: BookText,
      title: 'Yararlı Bilgiler',
      subtitle: 'Useful Information',
      /* description: 'Kariyer planlama ve kişisel gelişim', */
      topics: [
        { name: 'Yurt Dışında Beni Ne Bekliyor?', description: 'Yurt Dışında Beni Ne Bekliyor?', slug: 'yurt-disinda-beni-ne-bekliyor' },
        { name: 'Oryantasyon', description: 'Oryantasyon', slug: 'oryantasyon' },
        
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: themeConfig.animation.easing.spring,
      }
    }
  };

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
            background: `radial-gradient(circle at top right, rgba(205, 173, 125, 0.08) 0%, ${themeConfig.colors.bgPrimary} 50%)`,
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
          className="pt-32 pb-12 px-6"
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
                <BookOpen
                  size={20}
                  style={{ color: themeConfig.colors.accent }}
                />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: themeConfig.colors.accent }}
                >
                  KNOWLEDGE HUB
                </span>
              </motion.div>
            </motion.div>

            {/* Blog Categories Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {blogCategories.map((category) => {
                const Icon = category.icon;
                
                return (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    className="rounded-2xl p-8"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                      backdropFilter: 'blur(10px)',
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(205, 173, 125, 0.05)',
                      borderColor: `${themeConfig.colors.accent}40`,
                      y: -5,
                    }}
                  >
                    {/* Category Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${themeConfig.colors.accent}20`,
                        }}
                      >
                        <Icon
                          size={28}
                          style={{ color: themeConfig.colors.accent }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h2
                          className="text-2xl font-bold mb-1"
                          style={{ color: themeConfig.colors.accent }}
                        >
                          {category.title}
                        </h2>
                        <p
                          className="text-sm mb-2"
                          style={{ color: themeConfig.colors.textMuted }}
                        >
                          {category.subtitle}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: themeConfig.colors.textSecondary }}
                        >
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Topics List */}
                    <div className="space-y-3">
                      {category.topics.map((topic, index) => {
                        const isClickable = topic.slug;
                        const TopicWrapper = isClickable ? Link : 'div';
                        // Special routing for Seminer ve Etkinlikler
                        const topicPath = topic.slug === 'seminer-ve-etkinlikler' 
                          ? `/seminer-ve-etkinlikler` 
                          : `/blog/${topic.slug}`;
                        const wrapperProps = isClickable ? { to: topicPath } : {};

                        return (
                          <TopicWrapper
                            key={index}
                            {...wrapperProps}
                          >
                            <motion.div
                              className="group flex items-center justify-between p-3 rounded-lg cursor-pointer"
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                border: `1px solid transparent`,
                                transition: themeConfig.animation.transition.normal,
                              }}
                              whileHover={{
                                backgroundColor: 'rgba(205, 173, 125, 0.08)',
                                borderColor: `${themeConfig.colors.accent}30`,
                                x: 5,
                              }}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                            >
                              <div className="flex-1">
                                <h3
                                  className="font-semibold mb-1 group-hover:text-[themeConfig.colors.accent] transition-colors"
                                  style={{ color: themeConfig.colors.textPrimary }}
                                >
                                  {topic.name}
                                </h3>
                                <p
                                  className="text-xs"
                                  style={{ color: themeConfig.colors.textMuted }}
                                >
                                  {topic.description}
                                </p>
                              </div>
                              
                              <ChevronRight
                                size={20}
                                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ color: themeConfig.colors.accent }}
                              />
                            </motion.div>
                          </TopicWrapper>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 text-center rounded-2xl p-12"
              style={{
                backgroundColor: 'rgba(205, 173, 125, 0.05)',
                border: `1px solid ${themeConfig.colors.accent}30`,
              }}
            >
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                Want to Learn More?
              </h2>
              <p
                className="text-lg mb-8 max-w-2xl mx-auto"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                Discover how Edubucks can transform your educational journey with AI-powered insights and personalized learning paths.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/edubucks-ai"
                  className="px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: themeConfig.colors.accent,
                    color: themeConfig.colors.primary,
                    boxShadow: themeConfig.effects.shadow.accent,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${themeConfig.colors.accent}60`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Edubucks AI
                </motion.a>
                
                <motion.a
                  href="/book-a-demo"
                  className="px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: 'transparent',
                    color: themeConfig.colors.accent,
                    border: `2px solid ${themeConfig.colors.accent}`,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: `${themeConfig.colors.accent}10`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Demo
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Blog;

