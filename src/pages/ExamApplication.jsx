import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, MapPin, School, Heart, CreditCard } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import themeConfig from '../theme/themeConfig';

// Custom styles for select dropdowns and date picker
const customStyles = `
  /* Select dropdown styling */
  select {
    cursor: pointer;
  }
  
  select option {
    background-color: ${themeConfig.colors.bgPrimary};
    color: ${themeConfig.colors.textPrimary};
    padding: 10px;
  }
  
  select option:hover,
  select option:focus,
  select option:checked {
    background-color: ${themeConfig.colors.accent};
    color: ${themeConfig.colors.textPrimary};
  }

  /* Date picker styling */
  input[type="date"] {
    cursor: pointer;
    color-scheme: dark;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1) brightness(0.8);
    cursor: pointer;
  }
  
  input[type="date"]::-webkit-datetime-edit {
    color: ${themeConfig.colors.textPrimary};
  }
  
  input[type="date"]::-webkit-datetime-edit-fields-wrapper {
    color: ${themeConfig.colors.textPrimary};
  }
  
  input[type="date"]::-webkit-datetime-edit-text {
    color: ${themeConfig.colors.textMuted};
  }
  
  input[type="date"]::-webkit-datetime-edit-month-field,
  input[type="date"]::-webkit-datetime-edit-day-field,
  input[type="date"]::-webkit-datetime-edit-year-field {
    color: ${themeConfig.colors.textPrimary};
  }
  
  /* Style the calendar popup */
  input[type="date"]::-webkit-calendar-picker-indicator:hover {
    background-color: ${themeConfig.colors.accent}30;
    border-radius: 4px;
  }
  
  /* Firefox date picker styling */
  input[type="date"]::-moz-calendar-picker-indicator {
    filter: invert(1) brightness(0.8);
    cursor: pointer;
  }
`;

// Import exam data (you might want to move this to a separate file)
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

const ExamApplication = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: '',
    tcNo: '',
    email: '',
    phone: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    parentRelation: '',
    city: '',
    school: '',
    grade: '',
    birthDate: '',
  });

  useEffect(() => {
    const foundExam = examData.find(e => e.id === parseInt(examId));
    if (foundExam) {
      setExam(foundExam);
    } else {
      navigate('/sinav-basvuru');
    }
  }, [examId, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', { examId, ...formData });
      alert('Başvurunuz başarıyla alındı! Ödeme sayfasına yönlendiriliyorsunuz...');
      setIsSubmitting(false);
      // Here you would redirect to payment
      // navigate('/payment');
    }, 1500);
  };

  if (!exam) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <>
      {/* Inject custom styles */}
      <style>{customStyles}</style>
      
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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
                style={{ color: themeConfig.colors.textPrimary }}
              >
                Sınav{' '}
                <span style={{ color: themeConfig.colors.accent }}>
                  Başvuru Formu
                </span>
              </h1>
              <p
                className="text-base md:text-lg"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                Lütfen tüm bilgileri eksiksiz doldurunuz
              </p>
            </motion.div>

            {/* Exam Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 p-6 rounded-2xl"
              style={{
                backgroundColor: `${themeConfig.colors.accent}20`,
                border: `2px solid ${themeConfig.colors.accent}60`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                    Sınav Yeri
                  </p>
                  <p className="font-bold text-lg" style={{ color: themeConfig.colors.accent }}>
                    {exam.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                    Sınav Tarihi
                  </p>
                  <p className="font-bold text-lg" style={{ color: themeConfig.colors.textPrimary }}>
                    {exam.date}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                    Adres
                  </p>
                  <p style={{ color: themeConfig.colors.textSecondary }}>
                    {exam.address}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: themeConfig.colors.textMuted }}>
                    Sınav Ücreti
                  </p>
                  <p className="font-bold text-xl" style={{ color: themeConfig.colors.accent }}>
                    {exam.fee}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid rgba(255, 255, 255, 0.1)`,
                backdropFilter: 'blur(10px)',
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Information Section */}
                <div>
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    <User size={24} />
                    Öğrenci Bilgileri
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        Ad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Surname */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        Soyad *
                      </label>
                      <input
                        type="text"
                        name="surname"
                        required
                        value={formData.surname}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        Cinsiyet *
                      </label>
                      <select
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      >
                        <option value="">Seçiniz</option>
                        <option value="Erkek">Erkek</option>
                        <option value="Kız">Kız</option>
                      </select>
                    </div>

                    {/* TC No */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        TC Kimlik No *
                      </label>
                      <input
                        type="text"
                        name="tcNo"
                        required
                        maxLength="11"
                        value={formData.tcNo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        <Mail size={16} className="inline mr-1" />
                        E-Posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        <Phone size={16} className="inline mr-1" />
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="5XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Birth Date */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        <Calendar size={16} className="inline mr-1" />
                        Doğum Tarihi *
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        required
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        <MapPin size={16} className="inline mr-1" />
                        Şehir *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* School */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        <School size={16} className="inline mr-1" />
                        Okul *
                      </label>
                      <input
                        type="text"
                        name="school"
                        required
                        value={formData.school}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Grade */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        Sınıf *
                      </label>
                      <select
                        name="grade"
                        required
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      >
                        <option value="">Seçiniz</option>
                        <option value="9">9. Sınıf</option>
                        <option value="10">10. Sınıf</option>
                        <option value="11">11. Sınıf</option>
                        <option value="12">12. Sınıf</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Parent Information Section */}
                <div className="pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: themeConfig.colors.accent }}
                  >
                    <Heart size={24} />
                    Veli Bilgileri
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        Veli Adı Soyadı *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Parent Relation */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        Veli Yakınlık Derecesi *
                      </label>
                      <select
                        name="parentRelation"
                        required
                        value={formData.parentRelation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      >
                        <option value="">Seçiniz</option>
                        <option value="Anne">Anne</option>
                        <option value="Baba">Baba</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>

                    {/* Parent Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        <Mail size={16} className="inline mr-1" />
                        Veli E-Posta Adresi *
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        required
                        value={formData.parentEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>

                    {/* Parent Phone */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: themeConfig.colors.textPrimary }}>
                        <Phone size={16} className="inline mr-1" />
                        Veli Telefon Numarası *
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        required
                        value={formData.parentPhone}
                        onChange={handleChange}
                        placeholder="5XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                          color: themeConfig.colors.textPrimary,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3"
                  style={{
                    backgroundColor: themeConfig.colors.accent,
                    color: themeConfig.colors.textPrimary,
                    boxShadow: themeConfig.effects.shadow.accent,
                    opacity: isSubmitting ? 0.6 : 1,
                  }}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <CreditCard size={24} />
                  {isSubmitting ? 'İşleniyor...' : `Başvuruyu Tamamla ve Ödeme Yap - ${exam.fee}`}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
    </>
  );
};

export default ExamApplication;

