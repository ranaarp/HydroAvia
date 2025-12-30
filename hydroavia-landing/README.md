# 🚁 HydroAvia Landing Page

A stunning, Anduril-inspired landing page for HydroAvia's GPS-denied autonomous drone platform. Features dark aesthetics, 3D drone visualization, and smooth animations.

![HydroAvia](https://img.shields.io/badge/HydroAvia-Autonomous%20Drones-00d9ff?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

## ✨ Features

- 🎨 **Dark Anduril-Style Design** - Military-grade aesthetics with cyan/blue accents
- 🔷 **3D Drone Viewer** - Interactive Three.js visualization of 14" drone frame
- 📐 **Blueprint Mode** - Toggle between 3D model and technical blueprint view
- ⚡ **Smooth Animations** - Framer Motion powered transitions and effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **Contact Form** - Integrated Formspree for zero-cost email delivery
- 🚀 **Zero Hosting Cost** - Deploys to GitHub Pages automatically
- 🎭 **Custom Animations** - Particle systems, scan lines, and HUD elements
- 🔧 **Easy to Extend** - Component-based architecture for small teams

## 🛠️ Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (free)
- **Contact Form**: Formspree (free tier)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/hydroavia.git
   cd hydroavia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:3000 in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hydroavia.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Under "Build and deployment", select "GitHub Actions" as source
   - The workflow will automatically deploy on every push to main

3. **Access your site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/hydroavia/`

### Method 2: Manual Deployment

1. **Update vite.config.ts**
   ```typescript
   base: '/hydroavia/',  // Change to your repo name
   ```

2. **Deploy manually**
   ```bash
   npm run build
   npm run deploy
   ```

## 📧 Contact Form Setup

The contact form uses Formspree (free for up to 50 submissions/month):

1. **Sign up at Formspree**
   - Go to https://formspree.io/
   - Create a free account
   - Create a new form

2. **Update the form endpoint**
   - Open `src/components/Contact.tsx`
   - Find line with `FORMSPREE_ENDPOINT`
   - Replace `YOUR_FORM_ID` with your Formspree form ID:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

3. **Test the form**
   - Submit a test message
   - Check your email for the notification

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'hydro': {
    'cyan': '#00d9ff',    // Primary accent
    'blue': '#0084ff',    // Secondary accent  
    'accent': '#00ffaa',  // Tertiary accent
    // ... other colors
  }
}
```

### Content
- **Hero**: Edit `src/components/Hero.tsx`
- **Mission**: Edit `src/components/Mission.tsx`
- **Technology**: Edit `src/components/Technology.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx` and `Footer.tsx`

### 3D Model
Replace `public/hydroavia_drone_14inch.stl` with your own STL file.

## 📁 Project Structure

```
hydroavia-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── public/
│   ├── hydroavia_drone_14inch.stl  # 3D drone model
│   └── drone-icon.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Mission.tsx         # Mission section
│   │   ├── Technology.tsx      # Technology showcase
│   │   ├── DroneViewer.tsx     # 3D viewer component
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Navigation.tsx      # Navigation bar
│   │   └── Footer.tsx          # Footer
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🔧 Development

### Running locally
```bash
npm run dev
```

### Building
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🎯 Key Components

### Hero Section
- Particle system background
- Animated text with gradients
- Stats cards
- CTA buttons

### Technology Section
- 3D drone viewer with STL loader
- Blueprint/3D model toggle
- Interactive technology cards
- Technical specifications

### Contact Form
- Formspree integration
- Form validation
- Success/error states
- Contact information display

## 📝 To-Do / Enhancement Ideas

- [ ] Add smooth scroll library (Lenis)
- [ ] Implement GSAP scroll-triggered animations
- [ ] Add more 3D models (components breakdown)
- [ ] Create video backgrounds
- [ ] Add WebGL shader effects
- [ ] Implement dark/light mode toggle
- [ ] Add blog section
- [ ] Create case studies page
- [ ] Add testimonials
- [ ] Integrate analytics

## 🐛 Troubleshooting

### Issue: STL file not loading
- Check that `hydroavia_drone_14inch.stl` is in the `public/` folder
- Verify the path in `DroneViewer.tsx` matches the file location

### Issue: Contact form not working
- Verify Formspree endpoint is correct
- Check that you've replaced `YOUR_FORM_ID`
- Test Formspree form directly on their dashboard

### Issue: Deployment fails
- Check that GitHub Pages is enabled in repository settings
- Verify `base` path in `vite.config.ts` matches your repo name
- Ensure GitHub Actions has write permissions

## 📄 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

This is a template for HydroAvia. Feel free to fork and customize for your own needs!

## 📞 Support

For questions about the code, open an issue on GitHub.

For HydroAvia business inquiries:
- Email: sales@hydroavia.com
- Phone: +1 (408) 849-4408
- Address: 150 Market Street, Milpitas, CA 95035, USA

---

Built with ❤️ for the future of autonomous flight

**HydroAvia** - *GPS-Denied Autonomy for Every Mission*
