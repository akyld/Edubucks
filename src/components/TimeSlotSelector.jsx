import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import themeConfig from '../theme/themeConfig';

const TimeSlotSelector = ({ selectedTime, onTimeSelect, error }) => {
  // Generate time slots from 11:00 to 18:30 in 30-minute intervals (24-hour format)
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 11;
    const endHour = 18;
    const endMinute = 30;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        // Stop at 18:30
        if (hour === endHour && minute > endMinute) break;
        
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        slots.push({
          value: timeString,
          display: timeString, // 24-hour format display
        });
      }
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="mb-6">
      <label
        className="block text-sm font-semibold mb-3"
        style={{ color: themeConfig.colors.textSecondary }}
      >
        <Clock size={16} className="inline mr-2" />
        Select Time <span style={{ color: themeConfig.colors.accent }}>*</span>
      </label>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-64 overflow-y-auto p-1">
        {timeSlots.map((slot) => {
          const isSelected = selectedTime === slot.value;

          return (
            <motion.button
              key={slot.value}
              type="button"
              onClick={() => onTimeSelect(slot.value)}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-center"
              style={{
                backgroundColor: isSelected 
                  ? themeConfig.colors.accent 
                  : 'rgba(255, 255, 255, 0.05)',
                border: isSelected 
                  ? `2px solid ${themeConfig.colors.accent}` 
                  : `1px solid ${error ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'}`,
                color: isSelected 
                  ? themeConfig.colors.textPrimary 
                  : themeConfig.colors.textSecondary,
                transition: themeConfig.animation.transition.normal,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: isSelected 
                  ? themeConfig.colors.hover 
                  : 'rgba(255, 122, 0, 0.1)',
                borderColor: themeConfig.colors.accent,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {slot.display}
            </motion.button>
          );
        })}
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm mt-2 ml-1"
          style={{ color: '#EF4444' }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default TimeSlotSelector;

