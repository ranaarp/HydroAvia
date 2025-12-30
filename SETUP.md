# 🚀 Quick Setup Guide for HydroAvia Landing Page

## Prerequisites
- Node.js 18 or higher
- Git
- GitHub account

## Step-by-Step Setup

### 1. Initial Setup

```bash
# Navigate to the project directory
cd hydroavia-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at http://localhost:3000

### 2. Configure Contact Form

1. Go to https://formspree.io/ and create a free account
2. Create a new form
3. Copy your form ID (looks like: `xoqbgzyw`)
4. Open `src/components/Contact.tsx`
5. Replace the form endpoint on line ~17:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   with:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoqbgzyw';  // Your actual ID
   ```

### 3. Deploy to GitHub

#### Option A: New Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: HydroAvia landing page"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/hydroavia.git
git branch -M main
git push -u origin main
```

#### Option B: Existing Repository

```bash
# If you already have the HydroAvia repo:
cd /path/to/your/existing/hydroavia/repo

# Copy these files into your repository
# Then commit and push
git add .
git commit -m "Add new landing page"
git push
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Wait 2-3 minutes for the deployment
6. Your site will be live at: `https://YOUR_USERNAME.github.io/hydroavia/`

### 5. Update Base Path (if needed)

If your repository name is different from "hydroavia":

1. Open `vite.config.ts`
2. Update the base path:
   ```typescript
   base: '/your-repo-name/',
   ```

## Customization Checklist

- [ ] Update contact form endpoint (Formspree)
- [ ] Customize colors in `tailwind.config.js`
- [ ] Update company information in `Contact.tsx` and `Footer.tsx`
- [ ] Replace drone STL model if you have a custom one
- [ ] Update meta tags in `index.html`
- [ ] Add your own logo/favicon

## Testing Locally

1. **Development mode:**
   ```bash
   npm run dev
   ```

2. **Production build:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Check the build:**
   - Navigate to http://localhost:4173
   - Test all links and forms
   - Check 3D viewer loads properly

## Deployment Verification

After deploying, check:
- [ ] Site loads at GitHub Pages URL
- [ ] All sections display correctly
- [ ] 3D drone model loads
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works
- [ ] No console errors

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution:** Run `npm install` to ensure all dependencies are installed

### Issue: 3D model not loading
**Solution:** Check that `hydroavia_drone_14inch.stl` is in the `public/` folder

### Issue: Contact form doesn't work
**Solution:** Verify Formspree endpoint is correctly configured

### Issue: GitHub Pages shows 404
**Solution:** 
1. Check that GitHub Actions workflow completed successfully
2. Verify `base` path in `vite.config.ts` matches repository name
3. Ensure GitHub Pages is enabled with "GitHub Actions" as source

### Issue: Styles look broken
**Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R)

## Next Steps

1. **Content Updates**: Customize text and images to match your brand
2. **SEO**: Update meta tags in `index.html` for better search visibility
3. **Analytics**: Add Google Analytics or similar tracking
4. **Custom Domain**: Configure a custom domain in GitHub Pages settings
5. **More Features**: Add blog, case studies, or customer testimonials

## Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Test locally before deploying
- Use browser DevTools to debug issues

## AWS Credits Usage (Optional)

If you want to use your AWS credits before they expire:

1. Set up AWS S3 + CloudFront for hosting (faster than GitHub Pages)
2. Use AWS Lambda + API Gateway for contact form (instead of Formspree)
3. After credits expire, switch back to GitHub Pages

This is optional - GitHub Pages works perfectly well!

---

**Estimated Setup Time**: 15-30 minutes

Good luck with your launch! 🚀
