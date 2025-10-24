# Theme Customization Guide

This guide explains how to customize the Edubucks landing page theme for your own projects.

## 🎨 Theme Configuration File

All theme settings are in `src/theme/themeConfig.js`. This is the **single source of truth** for your design system.

## 📋 Quick Theme Examples

### Example 1: Blue Corporate Theme
```javascript
colors: {
  primary: '#1E3A8A',      // Navy blue
  accent: '#3B82F6',       // Sky blue
  secondary: '#1E293B',    // Dark slate
  // ... rest stays the same
}
```

### Example 2: Green Nature Theme
```javascript
colors: {
  primary: '#064E3B',      // Dark green
  accent: '#10B981',       // Emerald
  secondary: '#022C22',    // Forest green
}
```

### Example 3: Purple Modern Theme
```javascript
colors: {
  primary: '#4C1D95',      // Deep purple
  accent: '#A855F7',       // Purple
  secondary: '#2E1065',    // Dark purple
}
```

### Example 4: Red Energy Theme
```javascript
colors: {
  primary: '#7F1D1D',      // Dark red
  accent: '#EF4444',       // Red
  secondary: '#450A0A',    // Deep red
}
```

## 🔧 Component-Level Customization

### Navbar Height
```javascript
// In themeConfig.js
spacing: {
  navbarHeight: '100px',  // Change from default 80px
}
```

### Animation Speed
```javascript
// In themeConfig.js
animation: {
  transition: {
    fast: '0.1s ease-in-out',
    normal: '0.2s ease-in-out',
    slow: '0.4s ease-in-out',
  }
}
```

### Typography
```javascript
// In themeConfig.js
typography: {
  fontFamily: {
    primary: 'Poppins, sans-serif',  // Use Google Font
    heading: 'Montserrat, sans-serif',
  }
}
```

Don't forget to import the fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## 🎯 Using Theme Variables in Components

### In JSX Style Props
```jsx
<div
  style={{
    backgroundColor: themeConfig.colors.accent,
    color: themeConfig.colors.textPrimary,
  }}
>
  Content
</div>
```

### With Inline Styles
```jsx
<button
  style={{
    padding: '12px 24px',
    backgroundColor: themeConfig.colors.accent,
    borderRadius: themeConfig.effects.borderRadius.full,
  }}
>
  Click Me
</button>
```

### Dynamic Hover Effects
```jsx
<div
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = themeConfig.colors.hover;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = themeConfig.colors.accent;
  }}
>
  Hover me
</div>
```

## 🚀 Advanced: Adding New Theme Properties

### Step 1: Add to themeConfig.js
```javascript
const themeConfig = {
  // ... existing config
  buttons: {
    primary: {
      bg: '#FF7A00',
      hover: '#FF8C1A',
      text: '#FFFFFF',
    },
    secondary: {
      bg: 'transparent',
      hover: '#1a1a1a',
      text: '#FF7A00',
    }
  }
};
```

### Step 2: Use in Components
```jsx
import themeConfig from '../theme/themeConfig';

const Button = ({ variant = 'primary', children }) => {
  const buttonStyle = themeConfig.buttons[variant];
  
  return (
    <button
      style={{
        backgroundColor: buttonStyle.bg,
        color: buttonStyle.text,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = buttonStyle.hover;
      }}
    >
      {children}
    </button>
  );
};
```

## 💡 Best Practices

1. **Never hardcode colors** - Always use themeConfig
2. **Keep it DRY** - Define reusable values in theme
3. **Use semantic names** - `accent` instead of `orange`
4. **Test on mobile** - Responsive design is crucial
5. **Maintain contrast** - Ensure text is readable

## 🎨 Color Palette Tools

Generate color schemes:
- [Coolors.co](https://coolors.co)
- [Adobe Color](https://color.adobe.com)
- [Paletton](https://paletton.com)

Check accessibility:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 📱 Responsive Breakpoints

TailwindCSS breakpoints (already configured):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use in components:
```jsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Text
</div>
```

## 🔄 Theme Switching (Advanced)

To implement multiple themes:

1. Create multiple theme configs:
```javascript
// themes/darkTheme.js
export const darkTheme = { colors: { ... } };

// themes/lightTheme.js
export const lightTheme = { colors: { ... } };
```

2. Use React Context:
```jsx
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(darkTheme);
  
  return (
    <ThemeContext.Provider value={theme}>
      <LandingPage />
    </ThemeContext.Provider>
  );
}
```

3. Access in components:
```jsx
const theme = useContext(ThemeContext);
```

---

Happy theming! 🎨

