import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Calendar, MapPin, Users, Eye, X, Clock, FileText, Search } from 'lucide-react';
import { api } from '../../services/admin/api';
import themeConfig from '../../theme/themeConfig';

const Etkinlikler = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    seminarName: '',
    description: '',
    seminarDate: '',
    seminarTime: '',
    status: 'ACTIVE'
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 0,
    size: 20,
    totalElements: 0,
    totalPages: 0
  });

  useEffect(() => {
    loadEvents();
  }, [pagination.page, pagination.size]);

  const loadEvents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.getEvents(pagination.page, pagination.size);
      
      setEvents(response.content || []);
      setPagination(prev => ({
        ...prev,
        totalElements: response.totalElements || 0,
        totalPages: response.totalPages || 0
      }));
    } catch (err) {
      console.error('Error loading events:', err);
      setError('Etkinlikler yüklenirken bir hata oluştu');
      setEvents([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      
      if (editingId) {
        // Update existing event
        await api.updateEvent(editingId, formData);
        setEditingId(null);
      } else {
        // Create new event
        await api.createEvent(formData);
      }
      
      // Reload events
      await loadEvents();
      
      // Reset form
      setFormData({
        seminarName: '',
        description: '',
        seminarDate: '',
        seminarTime: '',
        status: 'ACTIVE'
      });
    } catch (err) {
      console.error('Error saving event:', err);
      setError(editingId ? 'Etkinlik güncellenirken bir hata oluştu' : 'Etkinlik oluşturulurken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (event) => {
    setFormData({
      seminarName: event.seminarName || event.title || '',
      description: event.description || '',
      seminarDate: event.seminarDate || event.date || '',
      seminarTime: event.seminarTime || event.time || '',
      status: event.status || 'ACTIVE'
    });
    setEditingId(event.id);
  };

  const handleCancel = () => {
    setFormData({
      seminarName: '',
      description: '',
      seminarDate: '',
      seminarTime: '',
      status: 'ACTIVE'
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bu etkinliği silmek istediğinizden emin misiniz?')) {
      try {
        setIsLoading(true);
        setError(null);
        await api.deleteEvent(id);
        await loadEvents();
      } catch (err) {
        console.error('Error deleting event:', err);
        setError('Etkinlik silinirken bir hata oluştu');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE':
        return '#10B981';
      case 'COMPLETED':
        return '#6B7280';
      case 'CANCELLED':
        return '#EF4444';
      default:
        return themeConfig.colors.textSecondary;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'ACTIVE':
        return 'Aktif';
      case 'COMPLETED':
        return 'Tamamlandı';
      case 'CANCELLED':
        return 'İptal';
      default:
        return status;
    }
  };

  const filteredEvents = events.filter(event =>
    (event.seminarName || event.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (event.description || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div 
          className="text-lg"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          Yükleniyor...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div 
          className="text-lg text-red-400"
          style={{ color: '#EF4444' }}
        >
          {error}
        </div>
      </div>
    );
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
        <div>
          <h1 
            className="text-2xl font-bold"
            style={{ color: themeConfig.colors.textPrimary }}
          >
            Etkinlikler
          </h1>
          <p 
            className="text-sm"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            Tüm etkinlikleri yönetin ve takip edin
          </p>
        </div>
        
        {editingId && (
          <motion.button
            onClick={handleCancel}
            className="flex items-center px-6 py-3 rounded-full font-bold text-lg"
            style={{
              backgroundColor: '#EF4444',
              color: themeConfig.colors.textPrimary,
              boxShadow: '0 8px 20px rgba(239, 68, 68, 0.3)',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 12px 30px rgba(239, 68, 68, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={20} className="mr-2" />
            İptal
          </motion.button>
        )}
      </motion.div>

      {/* Form Section */}
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
              {editingId ? 'Etkinlik Düzenle' : 'Yeni Etkinlik Ekle'}
            </h3>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeConfig.colors.textPrimary }}
                  >
                    <FileText size={16} className="inline mr-2" />
                    Etkinlik Adı *
                  </label>
                  <input
                    type="text"
                    name="seminarName"
                    required
                    value={formData.seminarName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeConfig.colors.bgSecondary,
                      borderColor: themeConfig.colors.accent + '30',
                      color: themeConfig.colors.textPrimary,
                      focusRingColor: themeConfig.colors.accent
                    }}
                    placeholder="Etkinlik adı"
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
                    Tarih *
                  </label>
                  <input
                    type="date"
                    name="seminarDate"
                    required
                    value={formData.seminarDate}
                    onChange={handleChange}
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
                    Saat
                  </label>
                  <input
                    type="time"
                    name="seminarTime"
                    value={formData.seminarTime}
                    onChange={handleChange}
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

              <motion.div variants={itemVariants}>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  <FileText size={16} className="inline mr-2" />
                  Açıklama
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeConfig.colors.bgSecondary,
                    borderColor: themeConfig.colors.accent + '30',
                    color: themeConfig.colors.textPrimary,
                    focusRingColor: themeConfig.colors.accent
                  }}
                  rows="3"
                  placeholder="Etkinlik açıklaması"
                />
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 pt-4"
                variants={itemVariants}
              >
                <motion.button 
                  type="submit" 
                  className="flex items-center px-6 py-3 rounded-lg font-bold"
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
                  {editingId ? 'Güncelle' : 'Etkinlik Kaydet'}
                </motion.button>

                {editingId && (
                  <motion.button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center px-6 py-3 rounded-lg font-bold"
                    style={{
                      backgroundColor: '#EF4444',
                      color: themeConfig.colors.textPrimary,
                      boxShadow: '0 8px 20px rgba(239, 68, 68, 0.3)',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 12px 30px rgba(239, 68, 68, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} className="mr-2" />
                    İptal
                  </motion.button>
                )}
              </motion.div>
            </form>
          </div>
        </motion.div>

      {/* Events Table */}
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
              Etkinlik Listesi
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
                  Etkinlik
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
                  Saat
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  Detay
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
              {filteredEvents.length === 0 ? (
                <tr>
                  <td 
                    colSpan="6" 
                    className="px-6 py-8 text-center"
                    style={{ color: themeConfig.colors.textSecondary }}
                  >
                    Etkinlik bulunamadı
                  </td>
                </tr>
              ) : (
                filteredEvents.map((event) => (
                <tr 
                  key={event.id}
                  className="hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {event.seminarName || event.title}
                      </div>
                      <div 
                        className="text-sm"
                        style={{ color: themeConfig.colors.textSecondary }}
                      >
                        {event.description}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar 
                        size={16} 
                        className="mr-2"
                        style={{ color: themeConfig.colors.textSecondary }}
                      />
                      <span 
                        className="text-sm"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {new Date(event.seminarDate || event.date).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock 
                        size={16} 
                        className="mr-2"
                        style={{ color: themeConfig.colors.textSecondary }}
                      />
                      <span 
                        className="text-sm"
                        style={{ color: themeConfig.colors.textPrimary }}
                      >
                        {event.seminarTime || event.time || '-'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div 
                      className="text-sm max-w-xs truncate"
                      style={{ color: themeConfig.colors.textSecondary }}
                    >
                      {event.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                      style={{
                        backgroundColor: getStatusColor(event.status) + '20',
                        color: getStatusColor(event.status)
                      }}
                    >
                      {getStatusText(event.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      
                      <button
                        onClick={() => handleEdit(event)}
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
                        onClick={() => handleDelete(event.id)}
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

export default Etkinlikler;
