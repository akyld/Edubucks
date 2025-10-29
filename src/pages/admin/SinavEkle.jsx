import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Save, Check, Plus, Calendar, MapPin, Clock, CreditCard, FileText, ExternalLink, ArrowLeft } from 'lucide-react';
import themeConfig from '../../theme/themeConfig';

const SinavEkle = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editId = searchParams.get('edit');
  const isEditMode = !!editId;
  
  const sehirler = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya']

  const [formData, setFormData] = useState({
    sehir: '',
    baslik: '',
    yer: '',
    adres: '',
    tarih: '',
    saat: '',
    veliSemineri: '',
    ucret: '',
    ornekSorular: '',
    kurumsalSayfa: '',
  })

  const [showSuccess, setShowSuccess] = useState(false)

  // Mock exam data for editing
  const mockExamData = {
    1: {
      sehir: 'İstanbul',
      baslik: '2024 LGS Deneme Sınavı',
      yer: 'Ataşehir Koleji',
      adres: 'Barbaros Mah. Ataşehir/İstanbul',
      tarih: '2024-02-15',
      saat: '10:00',
      veliSemineri: '15 Ocak 2024, 18:00',
      ucret: '150₺',
      ornekSorular: 'https://example.com/ornek-sorular',
      kurumsalSayfa: 'https://example.com/sinav',
    },
    2: {
      sehir: 'Ankara',
      baslik: '2024 YKS Deneme Sınavı',
      yer: 'Ankara Fen Lisesi',
      adres: 'Çankaya/Ankara',
      tarih: '2024-02-20',
      saat: '09:00',
      veliSemineri: '20 Ocak 2024, 18:00',
      ucret: '200₺',
      ornekSorular: 'https://example.com/ornek-sorular',
      kurumsalSayfa: 'https://example.com/sinav',
    }
  };

  useEffect(() => {
    if (isEditMode && mockExamData[editId]) {
      setFormData(mockExamData[editId]);
    }
  }, [editId, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sınav kaydedildi:', formData)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        sehir: '',
        baslik: '',
        yer: '',
        adres: '',
        tarih: '',
        saat: '',
        veliSemineri: '',
        ucret: '',
        ornekSorular: '',
        kurumsalSayfa: '',
      })
    }, 2000)
  }

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
        duration: 0.5,
      }
    }
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div 
        className="flex justify-between items-center"
        variants={itemVariants}
      >
        <div className="flex items-center space-x-4">
          {isEditMode && (
            <button
              onClick={() => navigate('/admin/sinavlar')}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
              style={{ color: themeConfig.colors.textSecondary }}
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <div>
            <h1 
              className="text-2xl font-bold"
              style={{ color: themeConfig.colors.textPrimary }}
            >
              {isEditMode ? 'Sınav Düzenle' : 'Sınav Ekle'}
            </h1>
            <p 
              className="text-sm"
              style={{ color: themeConfig.colors.textSecondary }}
            >
              {isEditMode ? 'Mevcut sınavı düzenleyin' : 'Yeni bir sınav ekleyin'}
            </p>
          </div>
        </div>
        
        
      </motion.div>

      {/* Form Card */}
      <motion.div 
        className="rounded-lg overflow-hidden"
        style={{ 
          backgroundColor: themeConfig.colors.bgPrimary,
          border: `1px solid ${themeConfig.colors.accent}30`
        }}
        variants={itemVariants}
      >
        <div className="p-6 border-b" style={{ borderColor: themeConfig.colors.accent + '30' }}>
          <h3 
            className="text-lg font-semibold"
            style={{ color: themeConfig.colors.textPrimary }}
          >
            {isEditMode ? 'Sınav Bilgilerini Düzenle' : 'Sınav Bilgileri'}
          </h3>
        </div>

        <div className="p-6">
          {showSuccess && (
            <motion.div 
              className="mb-6 p-4 rounded-lg flex items-center"
              style={{
                backgroundColor: '#10B981' + '20',
                border: '1px solid #10B981' + '40',
                color: '#10B981'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="w-5 h-5 mr-2" />
              {isEditMode ? 'Sınav başarıyla güncellendi!' : 'Sınav başarıyla kaydedildi!'}
            </motion.div>
          )}
        
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <MapPin size={16} className="inline mr-2" />
                  Şehir *
                </label>
                <select
                  required
                  value={formData.sehir}
                  onChange={(e) => setFormData({ ...formData, sehir: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                >
                  <option value="">Şehir seçin</option>
                  {sehirler.map((sehir) => (
                    <option key={sehir} value={sehir}>
                      {sehir}
                    </option>
                  ))}
                </select>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <FileText size={16} className="inline mr-2" />
                  Sınav Başlığı *
                </label>
                <input
                  type="text"
                  required
                  value={formData.baslik}
                  onChange={(e) => setFormData({ ...formData, baslik: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="Örn: 2024 LGS Deneme Sınavı"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <MapPin size={16} className="inline mr-2" />
                  Sınav Yeri *
                </label>
                <input
                  type="text"
                  required
                  value={formData.yer}
                  onChange={(e) => setFormData({ ...formData, yer: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="Örn: Ataşehir Koleji"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <MapPin size={16} className="inline mr-2" />
                  Sınav Adresi *
                </label>
                <input
                  type="text"
                  required
                  value={formData.adres}
                  onChange={(e) => setFormData({ ...formData, adres: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="Adres"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <Calendar size={16} className="inline mr-2" />
                  Sınav Tarihi *
                </label>
                <input
                  type="date"
                  required
                  value={formData.tarih}
                  onChange={(e) => setFormData({ ...formData, tarih: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <Clock size={16} className="inline mr-2" />
                  Sınav Saati *
                </label>
                <input
                  type="time"
                  required
                  value={formData.saat}
                  onChange={(e) => setFormData({ ...formData, saat: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <Calendar size={16} className="inline mr-2" />
                  Veli Semineri
                </label>
                <input
                  type="text"
                  value={formData.veliSemineri}
                  onChange={(e) => setFormData({ ...formData, veliSemineri: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="Örn: 15 Ocak 2024, 18:00"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <CreditCard size={16} className="inline mr-2" />
                  Sınav Ücreti *
                </label>
                <input
                  type="text"
                  required
                  value={formData.ucret}
                  onChange={(e) => setFormData({ ...formData, ucret: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="Örn: 150₺"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <FileText size={16} className="inline mr-2" />
                  Örnek Sorular (Link)
                </label>
                <input
                  type="url"
                  value={formData.ornekSorular}
                  onChange={(e) => setFormData({ ...formData, ornekSorular: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="https://example.com/ornek-sorular"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <ExternalLink size={16} className="inline mr-2" />
                  Kurumsal Sayfa (Link)
                </label>
                <input
                  type="url"
                  value={formData.kurumsalSayfa}
                  onChange={(e) => setFormData({ ...formData, kurumsalSayfa: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  placeholder="https://example.com/sinav"
                />
              </motion.div>
            </div>

            <motion.div 
              className="flex justify-end pt-6"
              variants={itemVariants}
            >
              <motion.button 
                type="submit" 
                className="flex items-center px-8 py-3 rounded-lg font-bold text-lg"
                style={{
                  backgroundColor: themeConfig.colors.accent,
                  color: themeConfig.colors.textPrimary,
                  boxShadow: '0 8px 20px rgba(205, 173, 125, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 30px rgba(205, 173, 125, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Save className="w-5 h-5 mr-2" />
                {isEditMode ? 'Değişiklikleri Kaydet' : 'Sınav Kaydet'}
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SinavEkle
