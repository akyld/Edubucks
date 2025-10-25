/**
 * Edubucks Theme Configuration
 * 
 * This is the single source of truth for all theme colors and styling.
 * Modify these values to change the entire theme of the application.
 * Perfect for reusing this template for future projects.
 */

const themeConfig = {
  // Brand Colors
  colors: {
    primary: '#142436',      // Blue - Main brand color
    accent: '#cdad7d',       // Beige/Gold - Accent/highlight color
    secondary: '#263d56',    // Lighter blue for secondary elements
    
    // Text Colors
    textPrimary: '#FFFFFF',  // White text for dark backgrounds
    textSecondary: '#E5E5E5', // Light gray text
    textMuted: '#A0A0A0',    // Muted gray text
    
    // Background Colors
    bgPrimary: '#142436',    // Primary background (blue)
    bgSecondary: '#152638',  // Secondary background (darker blue)
    bgOverlay: 'rgba(28, 50, 74, 0.6)', // Overlay for video/image backgrounds
    
    // UI States
    hover: '#d9ba90',        // Lighter beige for hover states
    active: '#b89960',       // Darker beige for active states
    focus: '#cdad7d',        // Focus outline color
    
    // Social Media (optional specific colors)
    social: {
      linkedin: '#0A66C2',
      instagram: '#E4405F',
      twitter: '#1DA1F2',
      youtube: '#FF0000',
    }
  },
  
  // Typography
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, -apple-system, sans-serif',
      heading: 'Inter, system-ui, -apple-system, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    }
  },
  
  // Spacing
  spacing: {
    navbarHeight: '80px',
    sectionPadding: '6rem',
    containerMaxWidth: '1280px',
  },
  
  // Animation
  animation: {
    transition: {
      fast: '0.15s ease-in-out',
      normal: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
    },
    easing: {
      default: [0.6, -0.05, 0.01, 0.99],
      spring: [0.43, 0.13, 0.23, 0.96],
    }
  },
  
  // Effects
  effects: {
    blur: {
      sm: '4px',
      md: '8px',
      lg: '12px',
    },
    shadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      accent: '0 10px 30px -5px rgba(205, 173, 125, 0.3)',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px',
    }
  }
};

export default themeConfig;

