# Waruni Bahar — Portfolio

Personal portfolio website for Waruni Bahar, a security-focused IT professional with a background in QA engineering and hands-on project work across AWS, Microsoft Azure and Fortinet.

Live site: <https://genibahar.com>

## Overview

A single-page static portfolio built with plain HTML, CSS and JavaScript. It presents an about section, technical skills, certifications and learning history, work experience, project deliverables (briefs, reports, presentations and demo videos) and contact information.

The site is hosted on GitHub Pages behind the custom domain `genibahar.com`.


## Tech Stack

- HTML5 (semantic markup, JSON-LD structured data)
- CSS3 (custom properties, grid, media queries)
- Vanilla JavaScript (no framework, no build step)
- Canvas API for the background particle system
- Google Fonts: Orbitron, Rajdhani, Share Tech Mono

## Project Structure

```
WaruniBahar_Portfolio/
├── CNAME                   Custom domain configuration for GitHub Pages
├── README.md
├── index.html              Main page with meta tags and JSON-LD
├── robots.txt              Search engine crawling rules
├── sitemap.xml             XML sitemap
└── assets/
    ├── css/
    │   └── style.css
    ├── img/                Profile images, favicons, certification logos
    ├── js/
    │   ├── main.js         Navigation, scroll behaviour, interactions
    │   └── particles.js    Canvas particle background
    ├── projects/
    │   ├── Project/        Assignment briefs (PDF)
    │   └── Solution/       Completed reports, presentations and demo videos
    └── resume/             Downloadable resume assets
```

## Running Locally

No build tooling is required. Serve the folder with any static HTTP server, for example:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server -p 8000
```

Then open <http://localhost:8000> in a browser.

Opening `index.html` directly via `file://` also works for most content, but a local HTTP server is recommended so that relative paths, fetches and canvas behaviour match production.

## Deployment

The site is deployed via GitHub Pages from the `main` branch.

1. Push changes to `main`.
2. GitHub Pages rebuilds automatically.
3. The `CNAME` file at the repository root maps the site to `genibahar.com`.

### DNS

DNS is configured at the domain registrar to point `genibahar.com` to GitHub Pages using either a `CNAME` record to `<github-user>.github.io` or the four GitHub Pages `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

The `www` subdomain is mapped via `CNAME` to `<github-user>.github.io`. HTTPS is enforced from the repository's Pages settings.

## Adding a New Project

1. Place the source files under `assets/projects/`:
   - Brief PDF in `assets/projects/Project/`
   - Report, presentation and demo video in `assets/projects/Solution/`
2. Duplicate an existing `.project-card` block in `index.html` inside `.projects-container`.
3. Update the title, description, tags and link `href` attributes.
4. Keep descriptions in a similar length range (~55–70 words) so cards align in the grid.

## Editing Content

Content is edited directly in `index.html`. Key sections:

- Hero, About, Skills, Certifications, Experience, Projects, Contact and Footer are individual `<section>` elements.
- Colour tokens and layout variables are defined at the top of `assets/css/style.css` under `:root`.
- The projects grid uses `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` and collapses to a single column below 968 px.

## SEO

The following are configured for search engine discovery:

- Primary meta tags (title, description, keywords, author, robots)
- Canonical URL
- Open Graph and Twitter Card tags
- Schema.org `Person` structured data via JSON-LD
- `sitemap.xml` and `robots.txt` at the repository root

To register the site with Google Search Console, add `genibahar.com` as a property, verify ownership, and submit `https://genibahar.com/sitemap.xml`.

## Browser Support

Latest versions of Chrome, Firefox, Safari and Edge on desktop, plus iOS Safari and Chrome on Android.

## Contact

- Email: geniwarunibahar@gmail.com
- LinkedIn: <https://www.linkedin.com/in/geniwarunimalibahar/>
- Location: Auckland, New Zealand

## License

© 2026 Waruni Bahar. All rights reserved.
