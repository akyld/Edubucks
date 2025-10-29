import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Mail, Phone, MapPin, GraduationCap, Eye, Edit, Trash2 } from 'lucide-react';
import themeConfig from '../../theme/themeConfig';

const HemenBasvurular = () => {
  const [basvurular, setBasvurular] = useState([
    {
      id: 1,
      isim: 'Zeynep Aydın',
      mail: 'zeynep@example.com',
      telefon: '0532 111 2233',
      okul: 'Bursa Anadolu Lisesi',
      il: 'Bursa',
      ilgilendigiProgram: 'LGS Hazırlık',
    },
    {
      id: 2,
      isim: 'Can Özkan',
      mail: 'can@example.com',
      telefon: '0533 444 5566',
      okul: 'Antalya Koleji',
      il: 'Antalya',
      ilgilendigiProgram: 'YKS Hazırlık',
    },
    {
      id: 3,
      isim: 'Elif Şahin',
      mail: 'elif@example.com',
      telefon: '0541 777 8899',
      okul: 'İzmir Fen Lisesi',
      il: 'İzmir',
      ilgilendigiProgram: 'LGS Hazırlık',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredBasvurular = basvurular.filter(basvuru =>
    basvuru.isim.toLowerCase().includes(searchTerm.toLowerCase()) ||
    basvuru.il.toLowerCase().includes(searchTerm.toLowerCase()) ||
    basvuru.ilgilendigiProgram.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <motion.div variants={itemVariants}>
        <h1 
          className="text-2xl font-bold"
          style={{ color: themeConfig.colors.textPrimary }}
        >
          Hemen Başvurular
        </h1>
        <p 
          className="text-sm"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          Hızlı başvuruları görüntüleyin ve yönetin
        </p>
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
                  İsim
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
                  Okul
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  İl
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Program
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
                    colSpan="7" 
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
                    <td 
                      className="px-6 py-4 whitespace-nowrap text-sm"
                      style={{ color: themeConfig.colors.textPrimary }}
                    >
                      {basvuru.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div 
                        className="text-sm font-medium"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {basvuru.isim}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
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
                            {basvuru.mail}
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
                            {basvuru.telefon}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div 
                        className="text-sm"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {basvuru.okul}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin 
                          size={14} 
                          className="mr-2"
                          style={{ color: themeConfig.colors.textSecondary }}
                        />
                        <span 
                          className="text-sm"
                          style={{ color: themeConfig.colors.textPrimary }}
                        >
                          {basvuru.il}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: basvuru.ilgilendigiProgram === 'LGS Hazırlık' 
                            ? '#10B981' + '20' 
                            : '#F59E0B' + '20',
                          color: basvuru.ilgilendigiProgram === 'LGS Hazırlık' 
                            ? '#10B981' 
                            : '#F59E0B'
                        }}
                      >
                        {basvuru.ilgilendigiProgram}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
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
                          className="p-2 rounded-md hover:bg-gray-600 transition-colors"
                          style={{ color: themeConfig.colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.target.style.color = themeConfig.colors.accent;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = themeConfig.colors.textSecondary;
                          }}
                        >
                          <Edit size={16} />
                        </button>
                        <button
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

export default HemenBasvurular
