# 🚀 Lounge Nights Deployment Guide

## Custom Domain & HTTPS Setup

### 1. Choose Your Domain
- **Recommended**: `balkaz-lounge.com` or `balkaz.lounge.com`
- Register domain with any provider (Namecheap, GoDaddy, etc.)

### 2. Recommended Hosting Platforms

#### Option A: Railway (Easiest - Automatic HTTPS)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

**Railway automatically provides:**
- ✅ HTTPS certificate
- ✅ Custom domain support
- ✅ Port management
- ✅ Environment variables

#### Option B: Render (Free tier available)
```bash
# Connect GitHub repo to Render
# Set build command: npm run build
# Set start command: npm run start
```

#### Option C: DigitalOcean App Platform
- Connect repository
- Automatic HTTPS
- Custom domain support

### 3. Domain Configuration

#### For Railway:
```bash
# Add custom domain in Railway dashboard
railway domain add balkaz-lounge.com
```

#### DNS Settings (for any platform):
```
Type: CNAME
Name: balkaz-lounge.com (or www)
Value: your-platform-domain
```

### 4. Environment Variables

Create `.env` file in production:

```env
NODE_ENV=production
PORT=80
DOMAIN=balkaz-lounge.com

# Database (if using external DB)
DATABASE_URL=your_database_url

# Optional: Custom SSL (usually handled by platform)
HTTPS_KEY=/path/to/private.key
HTTPS_CERT=/path/to/certificate.crt
```

### 5. Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start:prod
```

### 6. HTTPS Verification

After deployment, verify HTTPS:
- Visit: `https://balkaz-lounge.com`
- Check SSL certificate validity
- Test all routes work with HTTPS

### 7. Performance Optimization

- Enable gzip compression
- Set up CDN for static assets
- Configure caching headers
- Monitor with application performance tools

## Troubleshooting

### Port Issues
- Railway/Render: Uses automatic port assignment
- Custom server: Ensure PORT=80 for HTTP, 443 for HTTPS

### HTTPS Issues
- Most platforms handle SSL automatically
- For custom SSL: Provide certificate paths in environment variables

### Domain Issues
- DNS propagation can take 24-48 hours
- Clear DNS cache: `ipconfig /flushdns`

## Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database credentials protected
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Security headers set

---

**Your app will be live at: `https://balkaz-lounge.com`** 🎉