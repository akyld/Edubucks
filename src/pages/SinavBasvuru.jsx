import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, ExternalLink, FileText, CreditCard } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import themeConfig from '../theme/themeConfig';

// Mock exam data
const examData = [
  {
    id: 1,
    date: '15 Kasım 2024',
    location: 'İstanbul',
    address: 'Beşiktaş Anadolu Lisesi, Beşiktaş/İstanbul',
    parentSeminar: 'Evet - 14:00',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '500 TL'
  },
  {
    id: 2,
    date: '20 Kasım 2024',
    location: 'İstanbul',
    address: 'Kadıköy Lisesi, Kadıköy/İstanbul',
    parentSeminar: 'Evet - 15:00',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '500 TL'
  },
  {
    id: 3,
    date: '22 Kasım 2024',
    location: 'Ankara',
    address: 'Çankaya Anadolu Lisesi, Çankaya/Ankara',
    parentSeminar: 'Hayır',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '450 TL'
  },
  {
    id: 4,
    date: '25 Kasım 2024',
    location: 'İzmir',
    address: 'Karşıyaka Lisesi, Karşıyaka/İzmir',
    parentSeminar: 'Evet - 13:00',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '480 TL'
  },
  {
    id: 5,
    date: '28 Kasım 2024',
    location: 'İstanbul',
    address: 'Üsküdar Fen Lisesi, Üsküdar/İstanbul',
    parentSeminar: 'Evet - 14:30',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '500 TL'
  },
  {
    id: 6,
    date: '1 Aralık 2024',
    location: 'Bursa',
    address: 'Nilüfer Anadolu Lisesi, Nilüfer/Bursa',
    parentSeminar: 'Hayır',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '470 TL'
  },
  {
    id: 7,
    date: '5 Aralık 2024',
    location: 'Antalya',
    address: 'Muratpaşa Lisesi, Muratpaşa/Antalya',
    parentSeminar: 'Evet - 15:30',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '490 TL'
  },
  {
    id: 8,
    date: '8 Aralık 2024',
    location: 'İstanbul',
    address: 'Şişli Terakki Lisesi, Şişli/İstanbul',
    parentSeminar: 'Evet - 16:00',
    sampleQuestions: 'https://example.com/sample-questions',
    institutionalPage: 'https://example.com/institution',
    fee: '550 TL'
  }
];

const SinavBasvuru = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [filteredData, setFilteredData] = useState(examData);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    if (city === 'all') {
      setFilteredData(examData);
    } else if (city === 'istanbul') {
      setFilteredData(examData.filter(exam => exam.location === 'İstanbul'));
    }
  };

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
        duration: 0.6,
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
            background: `radial-gradient(circle at top right, rgba(255, 122, 0, 0.08) 0%, ${themeConfig.colors.bgPrimary} 50%)`,
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

        {/* Page Content */}
        <section
          className="pt-32 pb-20 px-4 md:px-6"
          style={{
            paddingTop: `calc(${themeConfig.spacing.navbarHeight} + 4rem)`,
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
                style={{
                  color: themeConfig.colors.textPrimary,
                  lineHeight: '1.1',
                }}
              >
                Sınav{' '}
                <span style={{ color: themeConfig.colors.accent }}>
                  Başvuru
                </span>
              </h1>
              <p
                className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                Yaklaşan sınav tarihlerini inceleyin, size en uygun lokasyonu seçin ve hemen başvurunuzu tamamlayın.
              </p>
            </motion.div>

            {/* Modern Filter Section */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div 
                className="relative p-8 rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid rgba(255, 255, 255, 0.1)`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Decorative gradient background */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at top left, ${themeConfig.colors.accent} 0%, transparent 50%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6">
                  {/* Filter Header */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor: `${themeConfig.colors.accent}20`,
                      }}
                    >
                      <Filter
                        size={24}
                        style={{ color: themeConfig.colors.accent }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: themeConfig.colors.textMuted }}
                      >
                        Şehir Seçimi
                      </p>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        Sınav Lokasyonu
                      </h3>
                    </div>
                  </div>

                  {/* Modern Pill Buttons */}
                  <div className="flex flex-wrap items-center gap-3 flex-1 justify-center lg:justify-start">
                    {/* All Cities Pill */}
                    <motion.button
                      onClick={() => handleCitySelect('all')}
                      className="px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden"
                      style={{
                        backgroundColor: selectedCity === 'all' 
                          ? themeConfig.colors.accent 
                          : 'rgba(255, 255, 255, 0.05)',
                        color: selectedCity === 'all'
                          ? themeConfig.colors.textPrimary
                          : themeConfig.colors.textSecondary,
                        border: selectedCity === 'all'
                          ? `2px solid ${themeConfig.colors.accent}`
                          : `2px solid rgba(255, 255, 255, 0.1)`,
                        boxShadow: selectedCity === 'all'
                          ? `0 8px 20px ${themeConfig.colors.accent}40`
                          : 'none',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedCity === 'all' && (
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${themeConfig.colors.accent}40, transparent)`,
                          }}
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      )}
                      <span className="relative z-10">🌍 Bütün İller</span>
                    </motion.button>

                    {/* Istanbul Pill */}
                    <motion.button
                      onClick={() => handleCitySelect('istanbul')}
                      className="px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden"
                      style={{
                        backgroundColor: selectedCity === 'istanbul' 
                          ? themeConfig.colors.accent 
                          : 'rgba(255, 255, 255, 0.05)',
                        color: selectedCity === 'istanbul'
                          ? themeConfig.colors.textPrimary
                          : themeConfig.colors.textSecondary,
                        border: selectedCity === 'istanbul'
                          ? `2px solid ${themeConfig.colors.accent}`
                          : `2px solid rgba(255, 255, 255, 0.1)`,
                        boxShadow: selectedCity === 'istanbul'
                          ? `0 8px 20px ${themeConfig.colors.accent}40`
                          : 'none',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedCity === 'istanbul' && (
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${themeConfig.colors.accent}40, transparent)`,
                          }}
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      )}
                      <span className="relative z-10">🏙️ İstanbul</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              variants={itemVariants}
              className="mb-4"
            >
              <p
                className="text-sm md:text-base"
                style={{ color: themeConfig.colors.textMuted }}
              >
                {filteredData.length} sonuç bulundu
              </p>
            </motion.div>

            {/* Table Section */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: `1px solid rgba(255, 255, 255, 0.1)`,
              }}
            >
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      style={{
                        backgroundColor: themeConfig.colors.accent + '20',
                        borderBottom: `2px solid ${themeConfig.colors.accent}`,
                      }}
                    >
                      <th className="px-6 py-4 text-left font-bold" style={{ color: themeConfig.colors.accent }}>
                        SINAV TARİHİ
                      </th>
                      <th className="px-6 py-4 text-left font-bold" style={{ color: themeConfig.colors.accent }}>
                        SINAV YERİ
                      </th>
                      <th className="px-6 py-4 text-left font-bold" style={{ color: themeConfig.colors.accent }}>
                        ADRES
                      </th>
                      <th className="px-6 py-4 text-left font-bold" style={{ color: themeConfig.colors.accent }}>
                        VELİ SEMİNERİ
                      </th>
                      <th className="px-6 py-4 text-left font-bold" style={{ color: themeConfig.colors.accent }}>
                        ÖRNEK SORULAR
                      </th>
                      <th className="px-6 py-4 text-left font-bold" style={{ color: themeConfig.colors.accent }}>
                        KURUMSAL SAYFA
                      </th>
                      <th className="px-6 py-4 text-left font-bold" style={{ color: themeConfig.colors.accent }}>
                        SINAV ÜCRETİ
                      </th>
                      <th className="px-6 py-4 text-center font-bold" style={{ color: themeConfig.colors.accent }}>
                        BAŞVURU
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((exam, index) => (
                      <motion.tr
                        key={exam.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="transition-colors duration-200"
                        style={{
                          backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)',
                          borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${themeConfig.colors.accent}10`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)';
                        }}
                      >
                        <td className="px-6 py-4" style={{ color: themeConfig.colors.textPrimary }}>
                          {exam.date}
                        </td>
                        <td className="px-6 py-4 font-semibold" style={{ color: themeConfig.colors.accent }}>
                          {exam.location}
                        </td>
                        <td className="px-6 py-4" style={{ color: themeConfig.colors.textSecondary }}>
                          {exam.address}
                        </td>
                        <td className="px-6 py-4" style={{ color: themeConfig.colors.textPrimary }}>
                          {exam.parentSeminar}
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={exam.sampleQuestions}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:underline"
                            style={{ color: themeConfig.colors.accent }}
                          >
                            <FileText size={16} />
                            Görüntüle
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={exam.institutionalPage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:underline"
                            style={{ color: themeConfig.colors.accent }}
                          >
                            <ExternalLink size={16} />
                            Ziyaret Et
                          </a>
                        </td>
                        <td className="px-6 py-4 font-semibold" style={{ color: themeConfig.colors.textPrimary }}>
                          {exam.fee}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link to={`/event-application/exam/${exam.id}`}>
                            <motion.button
                              className="px-5 py-2.5 rounded-lg font-bold inline-flex items-center gap-2 whitespace-nowrap"
                              style={{
                                backgroundColor: themeConfig.colors.accent,
                                color: themeConfig.colors.textPrimary,
                                boxShadow: themeConfig.effects.shadow.accent,
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <CreditCard size={16} />
                              Başvur
                            </motion.button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden p-4 space-y-4">
                {filteredData.map((exam, index) => (
                  <motion.div
                    key={exam.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                    }}
                  >
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                          SINAV TARİHİ
                        </p>
                        <p className="font-semibold" style={{ color: themeConfig.colors.textPrimary }}>
                          {exam.date}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                          SINAV YERİ
                        </p>
                        <p className="font-bold" style={{ color: themeConfig.colors.accent }}>
                          {exam.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                          ADRES
                        </p>
                        <p style={{ color: themeConfig.colors.textSecondary }}>
                          {exam.address}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                          VELİ SEMİNERİ
                        </p>
                        <p style={{ color: themeConfig.colors.textPrimary }}>
                          {exam.parentSeminar}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={exam.sampleQuestions}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm hover:underline"
                          style={{ color: themeConfig.colors.accent }}
                        >
                          <FileText size={16} />
                          Örnek Sorular
                        </a>
                        <a
                          href={exam.institutionalPage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm hover:underline"
                          style={{ color: themeConfig.colors.accent }}
                        >
                          <ExternalLink size={16} />
                          Kurumsal Sayfa
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                          SINAV ÜCRETİ
                        </p>
                        <p className="text-lg font-bold" style={{ color: themeConfig.colors.accent }}>
                          {exam.fee}
                        </p>
                      </div>
                      
                      {/* Apply Button */}
                      <Link to={`/exam-application/${exam.id}`} className="block">
                        <motion.button
                          className="w-full mt-4 px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-2"
                          style={{
                            backgroundColor: themeConfig.colors.accent,
                            color: themeConfig.colors.textPrimary,
                            boxShadow: themeConfig.effects.shadow.accent,
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <CreditCard size={18} />
                          Sınava Başvur - {exam.fee}
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Empty State */}
            {filteredData.length === 0 && (
              <motion.div
                variants={itemVariants}
                className="text-center py-16"
              >
                <p
                  className="text-xl"
                  style={{ color: themeConfig.colors.textMuted }}
                >
                  Seçtiğiniz kriterlere uygun sınav bulunamadı.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SinavBasvuru;

