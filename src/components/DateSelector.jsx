import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import themeConfig from '../theme/themeConfig';

const DateSelector = ({ selectedDate, onDateSelect, error }) => {
  const [startIndex, setStartIndex] = useState(0);

  // Generate array of next 5 weekdays starting from today (skip weekends)
  const getNextFiveWeekdays = () => {
    const days = [];
    const today = new Date();
    let currentDate = new Date(today);
    
    while (days.length < 7) {
      const dayOfWeek = currentDate.getDay();
      // 0 = Sunday, 6 = Saturday - skip these
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  const allDays = getNextFiveWeekdays();
  const displayedDays = allDays.slice(startIndex, startIndex + 5);

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return {
      dayName: days[date.getDay()],
      dayNumber: date.getDate(),
      monthName: months[date.getMonth()],
      fullDate: date.toISOString().split('T')[0], // YYYY-MM-DD format
    };
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < allDays.length - 5) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="mb-6">
      <label
        className="block text-sm font-semibold mb-3"
        style={{ color: themeConfig.colors.textSecondary }}
      >
        Select Date <span style={{ color: themeConfig.colors.accent }}>*</span>
      </label>

      <div className="flex items-center gap-3">
        {/* Previous Button */}
        <motion.button
          type="button"
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className="p-2 rounded-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid rgba(255, 255, 255, 0.1)`,
            color: startIndex === 0 ? themeConfig.colors.textMuted : themeConfig.colors.accent,
            cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
            opacity: startIndex === 0 ? 0.5 : 1,
          }}
          whileHover={startIndex > 0 ? { scale: 1.1 } : {}}
          whileTap={startIndex > 0 ? { scale: 0.95 } : {}}
        >
          <ChevronLeft size={20} />
        </motion.button>

        {/* Date Cards */}
        <div className="flex-1 grid grid-cols-5 gap-2">
          {displayedDays.map((date) => {
            const { dayName, dayNumber, monthName, fullDate } = formatDate(date);
            const isSelected = selectedDate === fullDate;
            const isTodayDate = isToday(date);

            return (
              <motion.button
                key={fullDate}
                type="button"
                onClick={() => onDateSelect(fullDate)}
                className="p-3 rounded-xl text-center relative overflow-hidden"
                style={{
                  backgroundColor: isSelected 
                    ? themeConfig.colors.accent 
                    : 'rgba(255, 255, 255, 0.05)',
                  border: isSelected 
                    ? `2px solid ${themeConfig.colors.accent}` 
                    : `1px solid ${error ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'}`,
                  transition: themeConfig.animation.transition.normal,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isSelected 
                    ? themeConfig.colors.hover 
                    : 'rgba(255, 122, 0, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Today Badge */}
                {isTodayDate && (
                  <div
                    className="absolute top-1 right-1 w-2 h-2 rounded-full"
                    style={{ backgroundColor: themeConfig.colors.accent }}
                  />
                )}

                <div
                  className="text-xs font-semibold mb-1"
                  style={{ 
                    color: isSelected 
                      ? themeConfig.colors.textPrimary 
                      : themeConfig.colors.textMuted 
                  }}
                >
                  {dayName}
                </div>
                <div
                  className="text-2xl font-bold mb-0.5"
                  style={{ 
                    color: isSelected 
                      ? themeConfig.colors.textPrimary 
                      : themeConfig.colors.textPrimary 
                  }}
                >
                  {dayNumber}
                </div>
                <div
                  className="text-xs"
                  style={{ 
                    color: isSelected 
                      ? themeConfig.colors.textPrimary 
                      : themeConfig.colors.textMuted 
                  }}
                >
                  {monthName}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Next Button */}
        <motion.button
          type="button"
          onClick={handleNext}
          disabled={startIndex >= allDays.length - 5}
          className="p-2 rounded-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid rgba(255, 255, 255, 0.1)`,
            color: startIndex >= allDays.length - 5 ? themeConfig.colors.textMuted : themeConfig.colors.accent,
            cursor: startIndex >= allDays.length - 5 ? 'not-allowed' : 'pointer',
            opacity: startIndex >= allDays.length - 5 ? 0.5 : 1,
          }}
          whileHover={startIndex < allDays.length - 5 ? { scale: 1.1 } : {}}
          whileTap={startIndex < allDays.length - 5 ? { scale: 0.95 } : {}}
        >
          <ChevronRight size={20} />
        </motion.button>
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

export default DateSelector;

