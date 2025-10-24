# Edubucks Landing Page

A fully modular, production-ready landing page template built with React, TailwindCSS, and Framer Motion. Designed for educational technology projects with dynamic theme support.

## 🎨 Features

- **Dynamic Theme System**: All colors and styles defined in a single configuration file
- **Smooth Animations**: Powered by Framer Motion for professional animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modular Components**: Reusable components for easy customization
- **Modern Stack**: React 18, TailwindCSS 3, Vite, Framer Motion
- **Production Ready**: Clean, optimized code with best practices

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Basic knowledge of React and TailwindCSS

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
edubucks-landing/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with blur effect
│   │   ├── HeroSection.jsx     # Hero with animations
│   │   └── SocialLinks.jsx     # Social media icons with hover effects
│   ├── pages/
│   │   └── LandingPage.jsx     # Main landing page assembly
│   ├── theme/
│   │   └── themeConfig.js      # ⭐ Theme configuration (colors, spacing, etc.)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/
│   └── logo.svg               # Logo (replace with your own)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customizing the Theme

The entire theme is controlled from `src/theme/themeConfig.js`. Simply edit this file to change colors, spacing, typography, and more:

```javascript
const themeConfig = {
  colors: {
    primary: '#000000',    // Change primary color
    accent: '#FF7A00',     // Change accent color
    // ... more options
  },
  // ... typography, spacing, animations
};
```

### Example: Change to Blue Theme

```javascript
colors: {
  primary: '#1E3A8A',    // Navy blue
  accent: '#3B82F6',     // Light blue
  // ...
}
```

## 📦 Adding Custom Assets

### Logo
Replace `public/logo.svg` with your own logo (supports PNG, JPG, SVG)

### Background Video/Image
1. Add your video to `public/bg-video.mp4`
2. Add fallback image to `public/bg-image.jpg`

The landing page will automatically use these files.

## 🎯 Component Usage

### Navbar
```jsx
<Navbar logo="/your-logo.svg" />
```

### Hero Section
```jsx
<HeroSection
  logo="/your-logo.svg"
  slogan="Your Custom Slogan"
  ctaText="Get Started"
  ctaLink="#section"
/>
```

### Social Links
```jsx
<SocialLinks />
```
Update social URLs in `src/components/SocialLinks.jsx`

## 🌐 Navigation Links

Edit navigation links in `src/components/Navbar.jsx`:

```javascript
const navLinks = [
  { label: 'YOUR LINK', href: '#section' },
  // Add more links...
];
```

## 🎬 Animations

All animations use Framer Motion. Customize in component files:

```jsx
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Mobile menu automatically activates on small screens

## 🔧 Tech Stack

- **React 18**: Latest React features
- **TailwindCSS 3**: Utility-first CSS
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **Vite**: Fast build tool

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Manual
```bash
npm run build
# Upload 'dist' folder to your hosting
```

## 📝 Environment Variables

Create `.env` file for environment-specific settings:

```env
VITE_API_URL=https://api.example.com
VITE_SITE_URL=https://yourdomain.com
```

Access in code: `import.meta.env.VITE_API_URL`

## 🎓 Using as a Template

This template is designed to be reusable:

1. **Clone/Fork** this repository
2. **Update** `themeConfig.js` with your brand colors
3. **Replace** logo and background assets
4. **Modify** navigation links and content
5. **Deploy**!

## 🐛 Troubleshooting

### Video not playing
- Ensure video file is in `public/` folder
- Check browser console for errors
- Verify video format (MP4 works best)

### Theme not applying
- Check that imports use `themeConfig` correctly
- Verify file path to `themeConfig.js`
- Clear browser cache and restart dev server

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 16+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

For support, email your-email@example.com or open an issue in the repository.

---

Made with ❤️ for the Education Technology Community

