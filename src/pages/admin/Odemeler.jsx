import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Check, X, CreditCard, User, Mail, Calendar, DollarSign, Hash, Plus } from 'lucide-react';
import themeConfig from '../../theme/themeConfig';

const Odemeler = () => {
  const [odemeler, setOdemeler] = useState([
    {
      id: 1,
      ogrenciAdi: 'Ahmet Yılmaz',
      mail: 'ahmet@example.com',
      sinav: '2024 LGS Deneme Sınavı',
      tutar: '150₺',
      odemeTarihi: '2024-01-10',
      paytrId: 'PTR-123456789',
      durum: 'Tamamlandı',
    },
    {
      id: 2,
      ogrenciAdi: 'Ayşe Demir',
      mail: 'ayse@example.com',
      sinav: '2024 YKS Deneme Sınavı',
      tutar: '200₺',
      odemeTarihi: '-',
      paytrId: '-',
      durum: 'Beklemede',
    },
    {
      id: 3,     
      ogrenciAdi: 'Mehmet Kaya',
      mail: 'mehmet@example.com',
      sinav: '2024 LGS Deneme Sınavı',
      tutar: '150₺',
      odemeTarihi: '2024-01-12',
      paytrId: 'PTR-987654321',
      durum: 'Tamamlandı',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredOdemeler = odemeler.filter(odeme =>
    odeme.ogrenciAdi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    odeme.sinav.toLowerCase().includes(searchTerm.toLowerCase())
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
            Ödemeler
          </h1>
          <p 
            className="text-sm"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            Ödeme bilgilerini yönetin
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
              Ödeme Listesi
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
                  Sınav
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Tutar
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Tarih
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  PayTR ID
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Durum
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredOdemeler.length === 0 ? (
                <tr>
                  <td 
                    colSpan="7" 
                    className="px-6 py-8 text-center"
                    style={{ color: themeConfig.colors.textSecondary }}
                  >
                    Ödeme bulunamadı
                  </td>
                </tr>
              ) : (
                filteredOdemeler.map((odeme) => (
                  <tr 
                    key={odeme.id}
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
                          {odeme.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <User 
                            size={14} 
                            className="mr-2"
                            style={{ color: themeConfig.colors.textSecondary }}
                          />
                          <span 
                            className="text-sm font-medium"
                            style={{ color: themeConfig.colors.textPrimary }}
                          >
                            {odeme.ogrenciAdi}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Mail 
                            size={14} 
                            className="mr-2"
                            style={{ color: themeConfig.colors.textSecondary }}
                          />
                          <span 
                            className="text-xs"
                            style={{ color: themeConfig.colors.textSecondary }}
                          >
                            {odeme.mail}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div 
                        className="text-sm font-medium"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {odeme.sinav}
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
                        {odeme.tutar}
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
                          {odeme.odemeTarihi === '-' ? 'Beklemede' : new Date(odeme.odemeTarihi).toLocaleDateString('tr-TR')}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className="font-mono text-xs"
                        style={{ color: themeConfig.colors.textSecondary }}
                      >
                        {odeme.paytrId === '-' ? 'Yok' : odeme.paytrId}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: odeme.durum === 'Tamamlandı' ? '#10B981' + '20' : '#F59E0B' + '20',
                          color: odeme.durum === 'Tamamlandı' ? '#10B981' : '#F59E0B'
                        }}
                      >
                        {odeme.durum === 'Tamamlandı' ? (
                          <Check className="w-3 h-3 mr-1" />
                        ) : (
                          <X className="w-3 h-3 mr-1" />
                        )}
                        {odeme.durum}
                      </span>
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

export default Odemeler
