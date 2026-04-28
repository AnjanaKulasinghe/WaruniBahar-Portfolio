# Waruni Bahar - Cybersecurity & Cloud Portfolio

A modern, cybersecurity-themed portfolio website showcasing expertise in QA Engineering, Cybersecurity, and Cloud Computing.

## 🌟 Features

- **Cyber-themed Design**: Matrix-inspired aesthetic with neon green and purple accents
- **Particle Animation System**: Dynamic background with interconnected particles
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Custom Cursor**: Enhanced cursor effects on desktop
- **Glitch Effects**: Cyberpunk-style text glitches
- **Matrix Rain**: Authentic Matrix-style falling characters

## 🎨 Color Palette

- **Primary**: Cyber Green (#00ff41)
- **Secondary**: Purple (#a855f7)
- **Accent**: Magenta (#c026d3)
- **Background**: Deep Black (#0a0a0a)
- **Cards**: Dark Gray (#151515)

## 🚀 Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/warunibahar/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your browser:
   - **Option 1**: Double-click the file
   - **Option 2**: Use a local server (recommended)
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server -p 8000
     ```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. Push the repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Click Save

3. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Custom Domain (Optional)

1. Create a `CNAME` file in the root directory with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS settings at your domain registrar:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. Enable HTTPS in GitHub Pages settings

## 📝 Customization Guide

### Personal Information

Edit `index.html` and update:

- **Line 7**: Page title
- **Lines 53-54**: Name in hero section
- **Lines 58-60**: Tagline
- **Lines 104-106**: Social media links
- **About section**: Your professional background
- **Skills section**: Add/remove skills and percentages
- **Experience section**: Update work history
- **Projects section**: Add your projects
- **Contact section**: Update email (geniwarunibahar@gmail.com), LinkedIn, and mobile number

### Colors

Edit `assets/css/style.css` and modify CSS variables:

```css
:root {
    --cyber-green: #00ff41;
    --cyber-purple: #a855f7;
    --cyber-magenta: #c026d3;
    /* ... other colors */
}
```

### Content Sections

To add/remove sections:
1. Update navigation in `index.html` (lines 44-52)
2. Add/remove corresponding `<section>` elements
3. Adjust scroll animations in `assets/js/main.js`

## 📁 Project Structure

```
WaruniBahar-Portfolio/
├── index.html              # Main HTML file
├── README.md               # Documentation
├── CNAME                   # Custom domain (optional)
├── .gitignore              # Git ignore file
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    ├── js/
    │   ├── particles.js    # Particle animation system
    │   └── main.js         # Interactive features
    └── img/
        └── favicon.ico     # Site favicon
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Vanilla JS for interactivity
- **Canvas API**: Particle system
- **Intersection Observer**: Scroll animations
- **Google Fonts**: Orbitron, Rajdhani, Share Tech Mono

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Performance Optimization

- Minimal external dependencies
- Optimized animations with `requestAnimationFrame`
- Lazy loading for images (add as needed)
- Reduced particle count on mobile devices

## 📄 License

© 2026 Waruni Bahar. All rights reserved.

## 🤝 Contributing

This is a personal portfolio, but feedback is welcome! Feel free to:
- Report bugs
- Suggest improvements
- Share your own implementation

## 📧 Contact

- **Email**: geniwarunibahar@gmail.com
- **LinkedIn**: [linkedin.com/in/geniwarunimalibahar](https://www.linkedin.com/in/geniwarunimalibahar/)
- **Mobile**: 022 049 7550
- **GitHub**: [github.com/warunibahar](https://github.com/warunibahar)

---

**Built with 💚 for Cybersecurity and ☁️ for Cloud Computing**

*Securing the digital future, one line of code at a time.*
