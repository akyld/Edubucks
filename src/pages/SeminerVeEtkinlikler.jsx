import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink, Filter, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import themeConfig from '../theme/themeConfig';

// Mock data for seminars and events
const seminarData = [
  {
    id: 1,
    location: 'İstanbul',
    venue: 'Beşiktaş Kültür Merkezi',
    address: 'Sinanpaşa Mahallesi, Beşiktaş/İstanbul',
    time: '14:00 - 16:00',
    date: '15 Kasım 2024',
    institutionalPage: 'https://example.com/besiktas-kultur'
  },
  {
    id: 2,
    location: 'İstanbul',
    venue: 'Kadıköy Belediye Konferans Salonu',
    address: 'Caferağa Mahallesi, Kadıköy/İstanbul',
    time: '18:00 - 20:00',
    date: '20 Kasım 2024',
    institutionalPage: 'https://example.com/kadikoy-belediye'
  },
  {
    id: 3,
    location: 'Ankara',
    venue: 'Çankaya Sanat Merkezi',
    address: 'Kızılay, Çankaya/Ankara',
    time: '15:00 - 17:00',
    date: '22 Kasım 2024',
    institutionalPage: 'https://example.com/cankaya-sanat'
  },
  {
    id: 4,
    location: 'İzmir',
    venue: 'Karşıyaka Toplum Merkezi',
    address: 'Bostanlı, Karşıyaka/İzmir',
    time: '13:00 - 15:00',
    date: '25 Kasım 2024',
    institutionalPage: 'https://example.com/karsiyaka-toplum'
  },
  {
    id: 5,
    location: 'İstanbul',
    venue: 'Üsküdar Gençlik Merkezi',
    address: 'Altunizade, Üsküdar/İstanbul',
    time: '16:00 - 18:00',
    date: '28 Kasım 2024',
    institutionalPage: 'https://example.com/uskudar-genclik'
  },
  {
    id: 6,
    location: 'Bursa',
    venue: 'Nilüfer Belediyesi Konferans Salonu',
    address: 'Özlüce, Nilüfer/Bursa',
    time: '14:30 - 16:30',
    date: '1 Aralık 2024',
    institutionalPage: 'https://example.com/nilufer-belediye'
  },
  {
    id: 7,
    location: 'Antalya',
    venue: 'Muratpaşa Kültür Merkezi',
    address: 'Fener, Muratpaşa/Antalya',
    time: '17:00 - 19:00',
    date: '5 Aralık 2024',
    institutionalPage: 'https://example.com/muratpasa-kultur'
  },
  {
    id: 8,
    location: 'İstanbul',
    venue: 'Şişli Belediye Sanat Galerisi',
    address: 'Mecidiyeköy, Şişli/İstanbul',
    time: '19:00 - 21:00',
    date: '8 Aralık 2024',
    institutionalPage: 'https://example.com/sisli-sanat'
  }
];

const SeminerVeEtkinlikler = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [filteredSeminars, setFilteredSeminars] = useState(seminarData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Instant filtering - applies immediately when city is selected
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    if (city === 'all') {
      setFilteredSeminars(seminarData);
    } else if (city === 'istanbul') {
      setFilteredSeminars(seminarData.filter(seminar => seminar.location === 'İstanbul'));
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
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at top right, rgba(255, 122, 0, 0.08) 0%, ${themeConfig.colors.bgPrimary} 50%)`,
          }}
        />
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
        <Navbar logo="/logo.webp" />

        <section
          className="pt-32 pb-20 px-4 md:px-6"
          style={{
            paddingTop: `calc(${themeConfig.spacing.navbarHeight} + 4rem)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                Seminer ve{' '}
                <span style={{ color: themeConfig.colors.accent }}>
                  Etkinlikler
                </span>
              </h1>
              <p
                className="text-base md:text-lg max-w-3xl mx-auto"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                Eğitim ve gelişim odaklı seminerlerimize katılın. Uzman konuşmacılarımızdan 
                kariyer planlama, yurt dışı eğitim ve kişisel gelişim konularında bilgi edinin.
              </p>
            </motion.div>

            {/* Filter Section - Modern Pill Style */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <motion.div
                variants={itemVariants}
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
                        Seminer Lokasyonu
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
              </motion.div>
            </motion.div>

            {/* Table Section - Desktop */}
            <motion.div
              variants={itemVariants}
              className="hidden md:block rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid rgba(255, 255, 255, 0.1)`,
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      style={{
                        backgroundColor: `${themeConfig.colors.accent}20`,
                        borderBottom: `2px solid ${themeConfig.colors.accent}`,
                      }}
                    >
                      <th
                        className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider"
                        style={{ color: themeConfig.colors.accent }}
                      >
                        <MapPin size={16} className="inline mr-2" />
                        Seminer Yeri
                      </th>
                      <th
                        className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider"
                        style={{ color: themeConfig.colors.accent }}
                      >
                        Adres
                      </th>
                      <th
                        className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider"
                        style={{ color: themeConfig.colors.accent }}
                      >
                        <Clock size={16} className="inline mr-2" />
                        Seminer Saati
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider"
                        style={{ color: themeConfig.colors.accent }}
                      >
                        Kurumsal Sayfa
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider"
                        style={{ color: themeConfig.colors.accent }}
                      >
                        Başvuru
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSeminars.map((seminar, index) => (
                      <motion.tr
                        key={seminar.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="transition-all duration-200"
                        style={{
                          backgroundColor:
                            index % 2 === 0
                              ? 'rgba(255, 255, 255, 0.02)'
                              : 'rgba(255, 255, 255, 0.05)',
                          borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${themeConfig.colors.accent}15`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            index % 2 === 0
                              ? 'rgba(255, 255, 255, 0.02)'
                              : 'rgba(255, 255, 255, 0.05)';
                        }}
                      >
                        <td
                          className="px-6 py-4 font-semibold"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          <div className="flex flex-col">
                            <span className="font-bold">{seminar.venue}</span>
                            <span
                              className="text-sm"
                              style={{ color: themeConfig.colors.textMuted }}
                            >
                              <Calendar size={14} className="inline mr-1" />
                              {seminar.date}
                            </span>
                          </div>
                        </td>
                        <td
                          className="px-6 py-4"
                          style={{ color: themeConfig.colors.textSecondary }}
                        >
                          {seminar.address}
                        </td>
                        <td
                          className="px-6 py-4 font-semibold"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {seminar.time}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <a
                            href={seminar.institutionalPage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200"
                            style={{
                              color: themeConfig.colors.accent,
                              border: `1px solid ${themeConfig.colors.accent}40`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = `${themeConfig.colors.accent}20`;
                              e.currentTarget.style.borderColor = themeConfig.colors.accent;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.borderColor = `${themeConfig.colors.accent}40`;
                            }}
                          >
                            Ziyaret Et
                            <ExternalLink size={16} />
                          </a>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link to={`/event-application/seminar/${seminar.id}`}>
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
                              <Ticket size={16} />
                              Başvur
                            </motion.button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* No Results Message */}
              {filteredSeminars.length === 0 && (
                <div className="py-12 text-center">
                  <p
                    className="text-lg font-semibold"
                    style={{ color: themeConfig.colors.textMuted }}
                  >
                    Seçilen kriterlere uygun seminer bulunamadı.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {filteredSeminars.map((seminar, index) => (
                <motion.div
                  key={seminar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid rgba(255, 255, 255, 0.1)`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    {seminar.venue}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <Calendar
                        size={16}
                        className="mt-1 flex-shrink-0"
                        style={{ color: themeConfig.colors.accent }}
                      />
                      <div>
                        <p
                          className="text-xs font-semibold"
                          style={{ color: themeConfig.colors.textMuted }}
                        >
                          Tarih
                        </p>
                        <p
                          className="font-semibold"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {seminar.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock
                        size={16}
                        className="mt-1 flex-shrink-0"
                        style={{ color: themeConfig.colors.accent }}
                      />
                      <div>
                        <p
                          className="text-xs font-semibold"
                          style={{ color: themeConfig.colors.textMuted }}
                        >
                          Saat
                        </p>
                        <p
                          className="font-semibold"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {seminar.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="mt-1 flex-shrink-0"
                        style={{ color: themeConfig.colors.accent }}
                      />
                      <div>
                        <p
                          className="text-xs font-semibold"
                          style={{ color: themeConfig.colors.textMuted }}
                        >
                          Adres
                        </p>
                        <p
                          style={{ color: themeConfig.colors.textSecondary }}
                        >
                          {seminar.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={seminar.institutionalPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: `${themeConfig.colors.accent}20`,
                        color: themeConfig.colors.accent,
                        border: `1px solid ${themeConfig.colors.accent}`,
                      }}
                    >
                      Kurumsal Sayfayı Ziyaret Et
                      <ExternalLink size={18} />
                    </a>

                    <Link to={`/event-application/seminar/${seminar.id}`} className="block">
                      <motion.button
                        className="w-full px-6 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-2"
                        style={{
                          backgroundColor: themeConfig.colors.accent,
                          color: themeConfig.colors.textPrimary,
                          boxShadow: themeConfig.effects.shadow.accent,
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Ticket size={18} />
                        Seminere Başvur
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}

              {/* No Results Message - Mobile */}
              {filteredSeminars.length === 0 && (
                <div className="py-12 text-center">
                  <p
                    className="text-lg font-semibold"
                    style={{ color: themeConfig.colors.textMuted }}
                  >
                    Seçilen kriterlere uygun seminer bulunamadı.
                  </p>
                </div>
              )}
            </div>

            {/* Results Count */}
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p
                className="text-sm font-semibold"
                style={{ color: themeConfig.colors.textMuted }}
              >
                Toplam {filteredSeminars.length} seminer ve etkinlik listeleniyor
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SeminerVeEtkinlikler;

