# Getting Started with Edubucks Landing Page

Welcome! This guide will help you get up and running with your new landing page in minutes.

## 📋 What You Just Got

A complete, production-ready landing page with:
- ✅ Modern React 18 + Vite setup
- ✅ TailwindCSS for styling
- ✅ Framer Motion animations
- ✅ Dynamic theme system (change colors in one file!)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Placeholder logo and assets
- ✅ Social media links with hover effects
- ✅ Smooth scroll behavior
- ✅ Full documentation

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:5173` (Vite will show the exact URL)

🎉 **You're done!** The landing page is now running.

## 🎨 Make It Yours (5 Minutes)

### 1. Change Colors (30 seconds)
Open `src/theme/themeConfig.js` and modify:

```javascript
colors: {
  primary: '#000000',    // Your primary color
  accent: '#FF7A00',     // Your accent color
  // Save and watch it update instantly!
}
```

### 2. Update Logo (1 minute)
- Replace `public/logo.svg` with your logo
- Supports: `.svg`, `.png`, `.jpg`
- Recommended size: 200x200px

### 3. Change Text (2 minutes)
Open `src/pages/LandingPage.jsx`:

```jsx
<HeroSection
  slogan="YOUR COMPANY SLOGAN HERE"
  ctaText="YOUR BUTTON TEXT"
/>
```

### 4. Update Navigation (1 minute)
Open `src/components/Navbar.jsx`:

```javascript
const navLinks = [
  { label: 'YOUR LINK 1', href: '#section1' },
  { label: 'YOUR LINK 2', href: '#section2' },
  // Add your links...
];
```

### 5. Add Background Video (30 seconds)
- Drop your video into `public/bg-video.mp4`
- Or add an image: `public/bg-image.jpg`

## 📁 File Structure Explained

```
📦 Your Project
├── 📂 src/
│   ├── 📂 components/         
│   │   ├── Navbar.jsx         ← Top navigation bar
│   │   ├── HeroSection.jsx    ← Main hero content
│   │   └── SocialLinks.jsx    ← Social media icons
│   ├── 📂 pages/
│   │   └── LandingPage.jsx    ← Main page (imports everything)
│   ├── 📂 theme/
│   │   └── themeConfig.js     ← ⭐ CUSTOMIZE COLORS HERE
│   ├── App.jsx                ← App entry point
│   ├── main.jsx              ← React mount point
│   └── index.css             ← Global styles
├── 📂 public/
│   └── logo.svg              ← Your logo goes here
├── 📄 index.html              ← HTML template
├── 📄 package.json            ← Dependencies
└── 📄 README.md               ← Full documentation
```

## 🎯 Common Tasks

### Add a New Section
Create `src/components/FeaturesSection.jsx`:

```jsx
import { motion } from 'framer-motion';
import themeConfig from '../theme/themeConfig';

const FeaturesSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 style={{ color: themeConfig.colors.textPrimary }}>
          Your Features
        </h2>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
```

Then add to `LandingPage.jsx`:
```jsx
import FeaturesSection from '../components/FeaturesSection';

// Inside LandingPage component:
<FeaturesSection />
```

### Change Fonts
1. Go to [Google Fonts](https://fonts.google.com)
2. Select a font
3. Copy the import link
4. Add to `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
```

5. Update `themeConfig.js`:
```javascript
typography: {
  fontFamily: {
    primary: 'Poppins, sans-serif',
  }
}
```

### Update Social Links
Open `src/components/SocialLinks.jsx`:

```javascript
const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'YOUR_LINKEDIN_URL',  // Update this
  },
  // ... update all URLs
];
```

## 🔧 Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Check code quality
```

## 🎨 Theme Customization Examples

### Blue Theme
```javascript
colors: {
  primary: '#1E40AF',
  accent: '#3B82F6',
}
```

### Green Theme
```javascript
colors: {
  primary: '#065F46',
  accent: '#10B981',
}
```

### Purple Theme
```javascript
colors: {
  primary: '#5B21B6',
  accent: '#A855F7',
}
```

See `THEME_GUIDE.md` for more examples!

## 📱 Test on Mobile

1. Start dev server: `npm run dev`
2. On mobile, visit: `http://YOUR_IP:5173`
   - Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)

## 🚢 Ready to Deploy?

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Build: `npm run build`
2. Drag `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder to your server

See `DEPLOYMENT.md` for detailed deployment guides!

## ❓ Troubleshooting

### "npm: command not found"
Install Node.js from [nodejs.org](https://nodejs.org)

### Port already in use
Vite will automatically try the next available port, or you can specify:
```bash
npm run dev -- --port 3000
```

### Changes not showing
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear cache
3. Restart dev server

### Theme not applying
Make sure you're importing `themeConfig`:
```javascript
import themeConfig from '../theme/themeConfig';
```

## 📚 Learn More

- **Theme Customization**: See `THEME_GUIDE.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Full Documentation**: See `README.md`

## 🆘 Need Help?

Common issues:
1. **Build errors**: Delete `node_modules`, run `npm install` again
2. **Styling issues**: Check TailwindCSS classes are correct
3. **Import errors**: Verify file paths are correct

## 🎓 Next Steps

1. ✅ Get it running (you're here!)
2. 🎨 Customize theme colors
3. 📝 Update content and text
4. 🖼️ Add your logo and assets
5. 📱 Test on mobile
6. 🚀 Deploy to production
7. 🎉 Share with the world!

## 💡 Pro Tips

- **Hot Reload**: Save files and see changes instantly
- **Component Reuse**: Copy components for new sections
- **Theme Variables**: Always use `themeConfig` for colors
- **Responsive Design**: Test on different screen sizes
- **Animations**: Framer Motion is already set up!

## 🎉 You're All Set!

Your landing page is ready to be customized. Start with the theme colors, then move on to content and assets.

**Have fun building!** 🚀

---

Made with ❤️ for developers

