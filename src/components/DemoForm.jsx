import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, Phone, MessageSquare } from 'lucide-react';
import DateSelector from './DateSelector';
import TimeSlotSelector from './TimeSlotSelector';
import themeConfig from '../theme/themeConfig';

// FormField component - moved outside to prevent re-creation on each render
const FormField = ({ icon: Icon, label, name, type = 'text', required = false, error, value, onChange, ...props }) => {
  const inputBaseStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    color: themeConfig.colors.textPrimary,
    transition: themeConfig.animation.transition.normal,
  };

  const inputFocusStyle = {
    borderColor: themeConfig.colors.accent,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  };

  const inputErrorStyle = {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  };

  return (
    <div className="mb-6">
      <label
        className="block text-sm font-semibold mb-2"
        style={{ color: themeConfig.colors.textSecondary }}
      >
        {label} {required && <span style={{ color: themeConfig.colors.accent }}>*</span>}
      </label>
      <div className="relative">
        <Icon
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-10"
          style={{ color: error ? '#EF4444' : themeConfig.colors.textMuted }}
        />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full pl-12 pr-4 py-3 rounded-lg outline-none"
          style={error ? { ...inputBaseStyle, ...inputErrorStyle } : inputBaseStyle}
          onFocus={(e) => {
            if (!error) {
              Object.assign(e.target.style, inputFocusStyle);
            }
          }}
          onBlur={(e) => {
            if (!error) {
              Object.assign(e.target.style, inputBaseStyle);
            }
          }}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm mt-1 ml-1"
          style={{ color: '#EF4444' }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

const DemoForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!selectedDate) {
      newErrors.date = 'Please select a date';
    }

    if (!selectedTime) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    
    // Clear date error
    if (errors.date) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.date;
        return newErrors;
      });
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    
    // Clear time error
    if (errors.time) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.time;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', {
        ...formData,
        date: selectedDate,
        time: selectedTime
      });
      
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setSelectedDate('');
      setSelectedTime('');
      setErrors({});
      
      // Trigger success modal
      onSubmitSuccess();
    }, 1000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Full Name */}
        <FormField
          icon={User}
          label="Full Name"
          name="fullName"
          type="text"
          required
          error={errors.fullName}
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          autoComplete="name"
        />

        {/* Email */}
        <FormField
          icon={Mail}
          label="Email Address"
          name="email"
          type="email"
          required
          error={errors.email}
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          autoComplete="email"
        />

        {/* Company */}
        <FormField
          icon={Building}
          label="Company"
          name="company"
          type="text"
          required
          error={errors.company}
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Acme Inc."
          autoComplete="organization"
        />

        {/* Phone */}
        <FormField
          icon={Phone}
          label="Phone Number"
          name="phone"
          type="tel"
          required
          error={errors.phone}
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+1 (555) 123-4567"
          autoComplete="tel"
        />
      </div>

      {/* Date Selector */}
      <DateSelector
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        error={errors.date}
      />

      {/* Time Slot Selector */}
      <TimeSlotSelector
        selectedTime={selectedTime}
        onTimeSelect={handleTimeSelect}
        error={errors.time}
      />

      {/* Message (Optional) */}
      <div className="mb-8">
        <label
          className="block text-sm font-semibold mb-2"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          Message <span className="text-xs">(Optional)</span>
        </label>
        <div className="relative">
          <MessageSquare
            size={20}
            className="absolute left-4 top-4 pointer-events-none z-10"
            style={{ color: themeConfig.colors.textMuted }}
          />
          <textarea
            name="message"
            value={formData.message || ''}
            onChange={handleInputChange}
            rows="4"
            className="w-full pl-12 pr-4 py-3 rounded-lg outline-none resize-none"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid rgba(255, 255, 255, 0.1)`,
              color: themeConfig.colors.textPrimary,
              transition: themeConfig.animation.transition.normal,
            }}
            onFocus={(e) => {
              e.target.style.borderColor = themeConfig.colors.accent;
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
            placeholder="Tell us about your needs..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-full font-bold text-lg tracking-wide"
        style={{
          backgroundColor: isSubmitting ? themeConfig.colors.secondary : themeConfig.colors.accent,
          color: themeConfig.colors.textPrimary,
          boxShadow: themeConfig.effects.shadow.accent,
          transition: themeConfig.animation.transition.normal,
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
        }}
        whileHover={!isSubmitting ? { 
          scale: 1.02,
          boxShadow: `0 20px 40px ${themeConfig.colors.accent}60`
        } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = themeConfig.colors.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
          }
        }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <motion.div
              className="w-5 h-5 border-2 border-t-transparent rounded-full"
              style={{ borderColor: themeConfig.colors.textPrimary }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            Booking...
          </span>
        ) : (
          'Book a Demo'
        )}
      </motion.button>
    </motion.form>
  );
};

export default DemoForm;
