import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Edit, Trash2, ExternalLink, FileText, MapPin, Calendar, Clock, Users, CreditCard, Plus, Eye } from 'lucide-react';
import themeConfig from '../../theme/themeConfig';

const SinavListele = () => {
  const navigate = useNavigate();
  const [sinavlar, setSinavlar] = useState([
    {
      id: 1,
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
    {
      id: 2,
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
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredSinavlar = sinavlar.filter(sinav =>
    sinav.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sinav.sehir.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id) => {
    if (window.confirm('Bu sınavı silmek istediğinizden emin misiniz?')) {
      setSinavlar(sinavlar.filter(s => s.id !== id));
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
            Sınav Listesi
          </h1>
          <p 
            className="text-sm"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            Tüm sınavları görüntüleyin ve yönetin
          </p>
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
              Sınav Listesi
            </h3>
            <div className="relative w-64">
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: themeConfig.colors.textSecondary }}
              />
              <input
                type="text"
                placeholder="Şehir veya sınav adı ara..."
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
                  Şehir
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Sınav Başlığı
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Yer & Adres
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Tarih & Saat
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Veli Semineri
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Ücret
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Linkler
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
              {filteredSinavlar.length === 0 ? (
                <tr>
                  <td 
                    colSpan="8" 
                    className="px-6 py-8 text-center"
                    style={{ color: themeConfig.colors.textSecondary }}
                  >
                    Sınav bulunamadı
                  </td>
                </tr>
              ) : (
                filteredSinavlar.map((sinav) => (
                  <tr 
                    key={sinav.id}
                    className="hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin 
                          size={16} 
                          className="mr-2"
                          style={{ color: themeConfig.colors.textSecondary }}
                        />
                        <span 
                          className="text-sm font-medium"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {sinav.sehir}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div 
                        className="text-sm font-medium"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {sinav.baslik}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div 
                          className="text-sm font-medium"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {sinav.yer}
                        </div>
                        <div 
                          className="text-xs max-w-xs truncate"
                          style={{ color: themeConfig.colors.textSecondary }}
                        >
                          {sinav.adres}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
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
                            {new Date(sinav.tarih).toLocaleDateString('tr-TR')}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock 
                            size={14} 
                            className="mr-2"
                            style={{ color: themeConfig.colors.textSecondary }}
                          />
                          <span 
                            className="text-sm"
                            style={{ color: themeConfig.colors.textPrimary }}
                          >
                            {sinav.saat}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div 
                        className="text-sm"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {sinav.veliSemineri}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: themeConfig.colors.accent + '20',
                          color: themeConfig.colors.accent
                        }}
                      >
                        {sinav.ucret}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <a
                          href={sinav.ornekSorular}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2 py-1 text-xs rounded-md transition-colors"
                          style={{
                            backgroundColor: themeConfig.colors.accent + '20',
                            color: themeConfig.colors.accent
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = themeConfig.colors.accent;
                            e.target.style.color = themeConfig.colors.textPrimary;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = themeConfig.colors.accent + '20';
                            e.target.style.color = themeConfig.colors.accent;
                          }}
                        >
                          <ExternalLink size={12} className="mr-1" />
                          Sorular
                        </a>
                        <a
                          href={sinav.kurumsalSayfa}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2 py-1 text-xs rounded-md transition-colors"
                          style={{
                            backgroundColor: '#10B981' + '20',
                            color: '#10B981'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#10B981';
                            e.target.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#10B981' + '20';
                            e.target.style.color = '#10B981';
                          }}
                        >
                          <ExternalLink size={12} className="mr-1" />
                          Sayfa
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => navigate(`/admin/sinavlar/${sinav.id}/basvuranlar`)}
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#10B981';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                          title="Başvuranları Gör"
                        >
                          <Users size={16} />
                        </button>
                        <button
                          onClick={() => navigate(`/admin/sinavlar/ekle?edit=${sinav.id}`)}
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = themeConfig.colors.accent;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                          title="Düzenle"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(sinav.id)}
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

export default SinavListele
