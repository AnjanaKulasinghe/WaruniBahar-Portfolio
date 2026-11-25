# Waruni Bahar — Portfolio

Personal portfolio website for Geni Waruni Bahar (Waruni Bahar), sharing her story, interests, education, experience and verified project work across software quality assurance, cloud and cybersecurity.

Live site: <https://genibahar.com>

## Overview

A static portfolio built with plain HTML, CSS and JavaScript. The homepage introduces Waruni and her path; three accessible project case-study pages give more context to selected academic AWS/network security work. The site also presents skills, certifications, learning history, experience, source deliverables and contact details.

The site is hosted on GitHub Pages behind the custom domain `genibahar.com`.


## Tech Stack

- HTML5 (semantic markup, JSON-LD structured data)
- CSS3 (custom properties, grid, media queries)
- Vanilla JavaScript (no framework, no build step)
- Canvas API for the background particle system
- Self-hosted Orbitron, Rajdhani and Share Tech Mono fonts (SIL Open Font License files are included in `assets/fonts/`)

## Project Structure

```
WaruniBahar_Portfolio/
├── CNAME                   Custom domain configuration for GitHub Pages
├── README.md
├── index.html              Main portfolio page with meta tags and JSON-LD
├── projects/               Three source-checked, static project case studies
├── robots.txt              Search engine crawling rules
├── sitemap.xml             XML sitemap
├── scripts/
│   └── check_seo.py         Dependency-free static SEO and link checks
├── .github/seo/             SEO audit, strategy, growth plan and checklist
└── assets/
    ├── css/                Main and project-page stylesheets
    ├── fonts/              Local WOFF2 fonts and SIL OFL license files
    ├── img/                Profile variants, social preview, diagrams and certification logos
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

SEO uses unique canonical metadata for the homepage and each project story, Open Graph and Twitter previews, and JSON-LD describing the person, site, and visible project articles. The sitemap lists all four canonical public pages; `robots.txt` allows crawling and declares the sitemap.

Run the dependency-free SEO regression check with:

```bash
python3 scripts/check_seo.py
```

The check also runs on relevant pushes and pull requests through GitHub Actions. See [`.github/seo/`](.github/seo/) for the audit, keyword and growth strategy, implementation report and reusable page checklist. The dot-directory keeps these repository documents out of the GitHub Pages site output.

To monitor search visibility, verify `genibahar.com` in Google Search Console and Bing Webmaster Tools, submit `https://genibahar.com/sitemap.xml`, then review indexing, queries, links and field Core Web Vitals. Account verification and any analytics IDs must be configured by the site owner; none are committed to this repository. Local Lighthouse results and production follow-up are documented in [`.github/seo/SEO-REPORT.md`](.github/seo/SEO-REPORT.md). Changes here have not been deployed.

## Browser Support

Latest versions of Chrome, Firefox, Safari and Edge on desktop, plus iOS Safari and Chrome on Android.

## Contact

- Email: geniwarunibahar@gmail.com
- LinkedIn: <https://www.linkedin.com/in/geniwarunimalibahar/>
- Location: Auckland, New Zealand

## License

© 2026 Waruni Bahar. All rights reserved.
