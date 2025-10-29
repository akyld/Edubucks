import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, User, Hash, Calendar, Phone, School, MapPin, FileText, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { api } from '../../services/admin/api';
import themeConfig from '../../theme/themeConfig';

const SinavBasvurulari = () => {
  const [basvurular, setBasvurular] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 0, size: 20, totalElements: 0, totalPages: 0 });

  useEffect(() => {
    const loadApplications = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const resp = await api.getExamApplications(pagination.page, pagination.size);
        const content = resp?.content || [];
        const mapped = content.map((b) => ({
          id: b.id,
          isim: b.studentName || b.isim || '',
          tcKimlik: b.nationalId || b.tcKimlik || '',
          dogumTarihi: b.birthDate || b.dogumTarihi || '',
          telefon: b.phone || b.telefon || '',
          okul: b.schoolName || b.okul || '',
          il: b.city || b.il || '',
          basvurduguSinav: b.examName || b.basvurduguSinav || ''
        }));
        setBasvurular(mapped);
        setPagination((p) => ({ ...p, totalElements: resp.totalElements || 0, totalPages: resp.totalPages || 0 }));
      } catch (e) {
        console.error('Error loading applications:', e);
        setError('Başvurular yüklenirken bir hata oluştu');
        setBasvurular([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadApplications();
  }, [pagination.page, pagination.size]);

  const filteredBasvurular = basvurular.filter(basvuru =>
    basvuru.isim.toLowerCase().includes(searchTerm.toLowerCase()) ||
    basvuru.il.toLowerCase().includes(searchTerm.toLowerCase()) ||
    basvuru.basvurduguSinav.toLowerCase().includes(searchTerm.toLowerCase())
  )

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg" style={{ color: themeConfig.colors.textSecondary }}>Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg" style={{ color: '#EF4444' }}>{error}</div>
      </div>
    );
  }

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
        <div>
          <h1 
            className="text-2xl font-bold"
            style={{ color: themeConfig.colors.textPrimary }}
          >
            Sınav Başvuruları
          </h1>
          <p 
            className="text-sm"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            Tüm sınav başvurularını görüntüleyin
          </p>
        </div>
        
        <motion.button
          className="flex items-center px-6 py-3 rounded-full font-bold text-lg"
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
          <Plus size={20} className="mr-2" />
          Yeni Başvuru
        </motion.button>
      </motion.div>


      {/* Search and Table */}
      <motion.div 
        className="rounded-lg overflow-hidden"
        style={{ 
          backgroundColor: themeConfig.colors.bgPrimary,
          border: `1px solid ${themeConfig.colors.accent}30`
        }}
        variants={itemVariants}
      >
        <div className="p-6 border-b" style={{ borderColor: themeConfig.colors.accent + '30' }}>
          <div className="flex items-center justify-between">
            <h3 
              className="text-lg font-semibold"
              style={{ color: themeConfig.colors.textPrimary }}
            >
              Başvuru Listesi
            </h3>
            <div className="relative w-64">
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: themeConfig.colors.textSecondary }}
              />
              <input
                type="text"
                placeholder="Ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: themeConfig.colors.bgSecondary,
                  borderColor: themeConfig.colors.accent + '30',
                  color: themeConfig.colors.textPrimary,
                  focusRingColor: themeConfig.colors.accent
                }}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead 
              style={{ backgroundColor: themeConfig.colors.bgSecondary }}
            >
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  ID
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Öğrenci
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  TC Kimlik
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Doğum Tarihi
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  İletişim
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Okul & Şehir
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Başvurduğu Sınav
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredBasvurular.length === 0 ? (
                <tr>
                  <td 
                    colSpan="8" 
                    className="px-6 py-8 text-center"
                    style={{ color: themeConfig.colors.textSecondary }}
                  >
                    Başvuru bulunamadı
                  </td>
                </tr>
              ) : (
                filteredBasvurular.map((basvuru) => (
                  <tr 
                    key={basvuru.id}
                    className="hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Hash 
                          size={16} 
                          className="mr-2"
                          style={{ color: themeConfig.colors.textSecondary }}
                        />
                        <span 
                          className="text-sm font-medium"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {basvuru.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User 
                          size={16} 
                          className="mr-2"
                          style={{ color: themeConfig.colors.textSecondary }}
                        />
                        <span 
                          className="text-sm font-medium"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {basvuru.isim}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className="font-mono text-sm"
                        style={{ color: themeConfig.colors.textSecondary }}
                      >
                        {basvuru.tcKimlik}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar 
                          size={14} 
                          className="mr-2"
                          style={{ color: themeConfig.colors.textSecondary }}
                        />
                        <span 
                          className="text-sm"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {new Date(basvuru.dogumTarihi).toLocaleDateString('tr-TR')}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Phone 
                          size={14} 
                          className="mr-2"
                          style={{ color: themeConfig.colors.textSecondary }}
                        />
                        <span 
                          className="text-sm"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {basvuru.telefon}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <School 
                            size={14} 
                            className="mr-2"
                            style={{ color: themeConfig.colors.textSecondary }}
                          />
                          <span 
                            className="text-sm font-medium"
                            style={{ color: themeConfig.colors.textPrimary }}
                          >
                            {basvuru.okul}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin 
                            size={14} 
                            className="mr-2"
                            style={{ color: themeConfig.colors.textSecondary }}
                          />
                          <span 
                            className="text-xs"
                            style={{ color: themeConfig.colors.textSecondary }}
                          >
                            {basvuru.il}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span 
                        className="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: themeConfig.colors.accent + '20',
                          color: themeConfig.colors.accent
                        }}
                      >
                        {basvuru.basvurduguSinav}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => console.log('View', basvuru.id)}
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = themeConfig.colors.accent;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => console.log('Edit', basvuru.id)}
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#10B981';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => console.log('Delete', basvuru.id)}
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#EF4444';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SinavBasvurulari
