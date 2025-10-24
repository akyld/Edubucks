# Deployment Guide

This guide covers deploying your Edubucks landing page to various hosting platforms.

## 🚀 Vercel (Recommended)

### Why Vercel?
- Zero configuration
- Automatic HTTPS
- Instant deployment
- Perfect for Vite/React

### Steps

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

### Via GitHub (Automatic)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

## 🌐 Netlify

### Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Login**
   ```bash
   netlify login
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Via GitHub (Automatic)

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📦 GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

3. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## ☁️ AWS S3 + CloudFront

### Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create bucket with public access
   - Enable static website hosting

3. **Upload dist folder**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

4. **Setup CloudFront** (Optional)
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure SSL certificate

## 🔵 Azure Static Web Apps

1. **Install Azure CLI**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Login**
   ```bash
   az login
   ```

3. **Create resource**
   ```bash
   az staticwebapp create \
     --name edubucks-landing \
     --resource-group myResourceGroup \
     --source . \
     --location "West US 2" \
     --branch main
   ```

## 🐳 Docker

### Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run
```bash
docker build -t edubucks-landing .
docker run -p 80:80 edubucks-landing
```

## 📊 Environment Variables

For production, create `.env.production`:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_SITE_URL=https://yourdomain.com
VITE_ANALYTICS_ID=your-analytics-id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🔒 Security Headers

Add to your hosting provider:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Netlify (_headers file)
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
```

### Vercel (vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 🔍 SEO Optimization

1. **Update meta tags** in `index.html`
2. **Add sitemap.xml**
3. **Add robots.txt**
4. **Configure Google Analytics**
5. **Submit to Google Search Console**

### robots.txt
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 📈 Performance Optimization

1. **Enable Gzip/Brotli compression**
2. **Use CDN for assets**
3. **Optimize images** (use WebP)
4. **Enable caching headers**
5. **Monitor with Lighthouse**

## 🔧 Custom Domain

### Vercel
1. Go to project settings
2. Add domain
3. Update DNS records

### Netlify
1. Go to domain settings
2. Add custom domain
3. Configure DNS

## ✅ Pre-Deployment Checklist

- [ ] Update all placeholder content
- [ ] Replace logo and assets
- [ ] Test on multiple devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Set up analytics
- [ ] Configure SEO meta tags
- [ ] Test build locally (`npm run build && npm run preview`)
- [ ] Remove console.logs
- [ ] Update README with live URL

## 🐛 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Routes
Configure SPA routing in your hosting:
- Netlify: Add `_redirects` file
- Vercel: Automatic
- S3: Configure error page

### Assets Not Loading
Check `base` path in `vite.config.js`:
```javascript
base: './' // For relative paths
```

---

Need help? Check your hosting provider's documentation or open an issue!

