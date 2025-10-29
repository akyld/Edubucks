import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, User, Mail, Phone, Calendar, MapPin, School, GraduationCap, Eye, Edit, Trash2 } from 'lucide-react';
import { api } from '../../services/admin/api';
import themeConfig from '../../theme/themeConfig';

const SinavBasvuranlar = () => {
  const { sinavId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [examData, setExamData] = useState(null);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Load exam details
        const exam = await api.getExamById(sinavId);
        setExamData(exam);
        // Load applicants for exam
        const resp = await api.getExamApplicationsByExam(sinavId, 0, 100);
        const content = resp?.content || [];
        // Map fields to UI expectations
        const mapped = content.map((a) => ({
          id: a.id,
          adSoyad: a.studentName || a.adSoyad || '',
          email: a.email || a.ogrenciEmail || '',
          telefon: a.phone || a.telefon || '',
          dogumTarihi: a.birthDate || a.dogumTarihi || '',
          cinsiyet: a.gender || a.cinsiyet || '',
          sinif: a.grade || a.sinif || '',
          okul: a.schoolName || a.okul || '',
          veliAdSoyad: a.parentName || a.veliAdSoyad || '',
          veliEmail: a.parentEmail || a.veliEmail || '',
          veliTelefon: a.parentPhone || a.veliTelefon || '',
          veliYakinlik: a.parentRelation || a.veliYakinlik || '',
          basvuruTarihi: a.appliedAt || a.basvuruTarihi || '',
          durum: a.status || 'Beklemede'
        }));
        setApplicants(mapped);
      } catch (e) {
        console.error('Error loading applicants:', e);
        setError('Başvurular yüklenirken bir hata oluştu');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [sinavId]);

  const filteredApplicants = applicants.filter(applicant =>
    applicant.adSoyad.toLowerCase().includes(searchTerm.toLowerCase()) ||
    applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    applicant.okul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Onaylandı':
        return '#10B981';
      case 'Beklemede':
        return '#F59E0B';
      case 'Reddedildi':
        return '#EF4444';
      default:
        return themeConfig.colors.textSecondary;
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
        duration: 0.5,
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: themeConfig.colors.accent }}></div>
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
        className="flex items-center justify-between"
        variants={itemVariants}
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/admin/sinavlar')}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 
              className="text-2xl font-bold"
              style={{ color: themeConfig.colors.textPrimary }}
            >
              Sınav Başvuranları
            </h1>
            <p 
              className="text-sm"
              style={{ color: themeConfig.colors.textSecondary }}
            >
              {(examData?.examName || examData?.baslik) || ''} - {(examData?.city || examData?.sehir) || ''}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Exam Info Card */}
      <motion.div 
        className="rounded-lg overflow-hidden"
        style={{ 
          backgroundColor: themeConfig.colors.bgPrimary,
          border: `1px solid ${themeConfig.colors.accent}30`
        }}
        variants={itemVariants}
      >
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Calendar 
                size={20} 
                className="mr-3"
                style={{ color: themeConfig.colors.accent }}
              />
              <div>
                <p 
                  className="text-sm font-medium"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  {examData?.examDate ? new Date(examData.examDate).toLocaleDateString('tr-TR') : (examData?.tarih ? new Date(examData.tarih).toLocaleDateString('tr-TR') : '-')}
                </p>
                <p 
                  className="text-xs"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  {examData?.examTime || examData?.saat || '-'}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin 
                size={20} 
                className="mr-3"
                style={{ color: themeConfig.colors.accent }}
              />
              <div>
                <p 
                  className="text-sm font-medium"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  {examData?.location || examData?.yer || ''}
                </p>
                <p 
                  className="text-xs"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  {examData?.city || examData?.sehir || ''}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <User 
                size={20} 
                className="mr-3"
                style={{ color: themeConfig.colors.accent }}
              />
              <div>
                <p 
                  className="text-sm font-medium"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  {applicants.length} Başvuru
                </p>
                <p 
                  className="text-xs"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Toplam Katılımcı
                </p>
              </div>
            </div>
          </div>
        </div>
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
                placeholder="Ad, email veya okul ara..."
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
                  Öğrenci
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
                  Okul Bilgileri
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Veli Bilgileri
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Başvuru Tarihi
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Durum
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
              {filteredApplicants.length === 0 ? (
                <tr>
                  <td 
                    colSpan="7" 
                    className="px-6 py-8 text-center"
                    style={{ color: themeConfig.colors.textSecondary }}
                  >
                    Başvuru bulunamadı
                  </td>
                </tr>
              ) : (
                filteredApplicants.map((applicant) => (
                  <tr 
                    key={applicant.id}
                    className="hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: themeConfig.colors.accent + '20' }}
                        >
                          <User 
                            size={20}
                            style={{ color: themeConfig.colors.accent }}
                          />
                        </div>
                        <div>
                          <div 
                            className="text-sm font-medium"
                            style={{ color: themeConfig.colors.textPrimary }}
                          >
                            {applicant.adSoyad}
                          </div>
                          <div 
                            className="text-xs"
                            style={{ color: themeConfig.colors.textSecondary }}
                          >
                            {applicant.cinsiyet} • {new Date(applicant.dogumTarihi).toLocaleDateString('tr-TR')}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Mail 
                            size={14} 
                            className="mr-2"
                            style={{ color: themeConfig.colors.textSecondary }}
                          />
                          <span 
                            className="text-sm"
                            style={{ color: themeConfig.colors.textPrimary }}
                          >
                            {applicant.email}
                          </span>
                        </div>
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
                            {applicant.telefon}
                          </span>
                        </div>
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
                            className="text-sm"
                            style={{ color: themeConfig.colors.textPrimary }}
                          >
                            {applicant.okul}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap 
                            size={14} 
                            className="mr-2"
                            style={{ color: themeConfig.colors.textSecondary }}
                          />
                          <span 
                            className="text-sm"
                            style={{ color: themeConfig.colors.textPrimary }}
                          >
                            {applicant.sinif}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div 
                          className="text-sm font-medium"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {applicant.veliAdSoyad}
                        </div>
                        <div 
                          className="text-xs"
                          style={{ color: themeConfig.colors.textSecondary }}
                        >
                          {applicant.veliYakinlik}
                        </div>
                        <div 
                          className="text-xs"
                          style={{ color: themeConfig.colors.textSecondary }}
                        >
                          {applicant.veliEmail}
                        </div>
                      </div>
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
                          {new Date(applicant.basvuruTarihi).toLocaleDateString('tr-TR')}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: getStatusColor(applicant.durum) + '20',
                          color: getStatusColor(applicant.durum)
                        }}
                      >
                        {applicant.durum}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        
                        <button
                          onClick={() => console.log('Edit', applicant.id)}
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#10B981';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                          title="Düzenle"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => console.log('Delete', applicant.id)}
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#EF4444';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                          title="Sil"
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

export default SinavBasvuranlar;
