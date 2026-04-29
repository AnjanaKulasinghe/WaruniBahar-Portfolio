# Waruni Bahar - Cybersecurity & Cloud Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-genibahar.com-00ff41?style=for-the-badge&logo=google-chrome&logoColor=white)](https://genibahar.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Cybersecurity%20%26%20Cloud-a855f7?style=for-the-badge)](https://genibahar.com)

A modern, cybersecurity-themed portfolio website showcasing expertise in QA Engineering, Cybersecurity, and Cloud Computing.

**Live at: [genibahar.com](https://genibahar.com)**

## 🌟 Features

- **Cyber-themed Design**: Matrix-inspired aesthetic with neon green and purple accents
- **Particle Animation System**: Dynamic background with interconnected particles
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Custom Cursor**: Enhanced cursor effects on desktop
- **Glitch Effects**: Cyberpunk-style text glitches
- **Matrix Rain**: Authentic Matrix-style falling characters
- **SEO Optimized**: Complete with sitemap, robots.txt, structured data, and meta tags

## 🔍 SEO Features

### Included for Google Indexing:
- ✅ **sitemap.xml** - Complete site structure for search engines
- ✅ **robots.txt** - Crawling instructions for search bots
- ✅ **Meta Tags** - Title, description, keywords optimized for search
- ✅ **Open Graph Tags** - Enhanced social media sharing
- ✅ **Twitter Card Tags** - Optimized Twitter previews
- ✅ **JSON-LD Structured Data** - Schema.org Person markup
- ✅ **Canonical URL** - Prevents duplicate content issues
- ✅ **Semantic HTML5** - Proper heading hierarchy and structure
- ✅ **Mobile Responsive** - Mobile-first design (Google ranking factor)
- ✅ **Fast Loading** - Optimized assets and minimal dependencies

### Google Search Console Setup:
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add property: `genibahar.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://genibahar.com/sitemap.xml`
5. Request indexing for key pages
6. Monitor performance and fix any issues

### Submit to Search Engines:
- **Google**: [Submit URL](https://www.google.com/webmasters/tools/submit-url)
- **Bing**: [Bing Webmaster Tools](https://www.bing.com/webmasters)
- **Sitemap URL**: `https://genibahar.com/sitemap.xml`

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

3. Your site will be live at: `https://genibahar.com` (custom domain configured)

### Custom Domain Setup

The portfolio is configured to use the custom domain **genibahar.com**.

**DNS Configuration Required:**

At your domain registrar, configure the following DNS records:

**Option 1: Using CNAME (Recommended if supported):**
```
Type: CNAME
Name: @ (or leave blank for root domain)
Value: YOUR_GITHUB_USERNAME.github.io
```

**Option 2: Using A Records (For root domain):**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
```

**After DNS Configuration:**
1. Go to GitHub repository Settings → Pages
2. Under "Custom domain", enter: `genibahar.com`
3. Click Save
4. Wait for DNS check to complete (may take up to 48 hours)
5. Enable "Enforce HTTPS" once DNS is verified

**Note:** The CNAME file is already included in the repository root.

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
├── index.html              # Main HTML file with SEO meta tags
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Search engine crawling rules
├── README.md               # Documentation
├── CNAME                   # Custom domain configuration
├── .gitignore              # Git ignore file
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    ├── js/
    │   ├── particles.js    # Particle animation system
    │   └── main.js         # Interactive features
    ├── img/
    │   └── favicon.ico     # Site favicon
    └── projects/
        ├── Project/        # Assignment/project briefs
        └── Solution/       # Completed solutions (PDF & video)
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
