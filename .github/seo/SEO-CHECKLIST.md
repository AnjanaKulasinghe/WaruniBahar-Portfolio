# SEO Checklist for New Public Pages

## Design-preservation gate

- Treat the currently approved rendered website as the baseline. Preserve public routes, visible content, layout, typography, images, breakpoints, interactions and animations.
- Implement automatically only changes that do not alter the rendered page or user-visible browser experience. Put any content, route, navigation or design proposal in [`SEO-CONTENT-RECOMMENDATIONS.md`](SEO-CONTENT-RECOMMENDATIONS.md) and wait for explicit approval.
- Before work, capture representative page/view states and record existing tests and Lighthouse measurements. After work, repeat the captures and compare at matching viewport sizes; investigate any deterministic visual or functional difference.
- If comparison tooling or browser access is unavailable, record design preservation as unverified and restrict the change to metadata, structured data, crawler files, regression checks and documentation.
- Do not replace the site baseline screenshots with post-change images to make a comparison pass. Mask or control only inherently dynamic content such as canvas particles or animation timing, and disclose that treatment.

Use this checklist for each new public HTML page or substantial public feature page. Do not apply page SEO to private, admin, or confidential content; protect those routes through access controls, and use `noindex` only when the page is still meant to be publicly accessible but excluded from search.

## Before publishing

- [ ] Confirm the page serves a distinct user need and contains original, accurate, useful information.
- [ ] Confirm the facts, credentials, dates, authorship, locations, and claims against a primary source or the page owner.
- [ ] Choose one primary search intent and a small set of supporting terms; do not duplicate another page's intent or repeat phrases unnaturally.
- [ ] Keep the established brand, accessible responsive design, and existing URL patterns.
- [ ] Use one descriptive `<title>` and one natural meta description; align `og:title`, `og:description`, and social preview with the page.
- [ ] Use one clear `<h1>` followed by logical heading levels. Ensure important copy exists in crawlable HTML and does not require a click or user action to render.
- [ ] Use semantic landmarks, keyboard-accessible controls, readable contrast, descriptive link labels, and meaningful image alt text. Decorative images should use empty alt text.
- [ ] For images, use the right dimensions and efficient modern formats with a fallback where appropriate. Add `width`/`height`; lazy-load below-fold media, but do not lazy-load a critical above-fold/LCP image.
- [ ] Add exactly one absolute HTTPS canonical URL for the intended public page. Keep canonical, sitemap, internal links, and Open Graph URL consistent.
- [ ] Add `hreflang` only if a real translated or regional alternative exists, with reciprocal annotations and self-canonicals.
- [ ] Add structured data only when it accurately reflects visible content and a relevant Schema.org type exists. Validate JSON syntax; distinguish general Schema.org semantics from eligibility for a Google rich result.
- [ ] Add no fake review, rating, price, local address, award, or other unsupported claim. Avoid `LocalBusiness` for an individual profile unless there is an actual business.
- [ ] Add ordinary crawlable internal links from relevant navigation or related content; update breadcrumbs only when hierarchy warrants them.

## Before merging

- [ ] Add the public canonical URL to `sitemap.xml`; no fragments, query variants, redirects, noindex pages, or private routes.
- [ ] Set `<lastmod>` only when the page content has meaningfully changed; use an accurate ISO date.
- [ ] Confirm `robots.txt` and hosting/CDN rules permit intended search discovery. Keep AI search-crawler and AI training preferences separate and explicit when needed.
- [ ] Check that relative assets, internal fragments, downloads, and external credential links are valid. New-tab links should use `rel="noopener noreferrer"`.
- [ ] Run `python3 scripts/check_seo.py` and extend it if a new route, sitemap entry, or metadata rule is added.
- [ ] Run JavaScript syntax checks when scripts change; run the project build and relevant tests when a build/test setup exists.
- [ ] Review the rendered page at mobile and desktop widths and with keyboard navigation. Check for horizontal overflow, layout shift, broken controls, and missing image descriptions.
- [ ] Record field/lab performance separately; do not claim a Core Web Vitals result from source inspection alone.

## After deployment

- [ ] Confirm the page returns `200`, uses HTTPS, is not blocked, and has the expected canonical after redirects.
- [ ] Confirm the sitemap and robots file are live and readable; submit/inspect through Search Console or Bing Webmaster Tools when connected.
- [ ] Validate structured data with current search engine tools and fix errors without assuming a rich result is guaranteed.
- [ ] Monitor indexing, query impressions, clicks, referrals, conversions, and field Core Web Vitals; use a suitable time window before drawing conclusions.
- [ ] Re-check external links, factual claims, and crawler preferences during periodic maintenance.

## Production release validation for genibahar.com

The 25 November 2026 read-only check found the apex page and current public robots/sitemap endpoints reachable, with host redirects observed as expected. Those endpoints served the previous version. Run this list against the reviewed, authorized deployment and record response evidence:

- [ ] Open `https://genibahar.com/`; confirm HTTP 200, valid certificate, expected title/description, canonical `https://genibahar.com/`, identity-first introduction, schema, assets, and mobile/desktop content.
- [ ] Open `http://genibahar.com/` and `https://www.genibahar.com/`; confirm each redirects directly to the apex HTTPS URL and that no redirect loop or intermediate HTTP destination occurs.
- [ ] Open `https://genibahar.com/robots.txt`; confirm the intended public crawling policy, `OAI-SearchBot` allowance, chosen GPTBot policy, and sitemap location. Ensure no CDN/firewall rule blocks major crawlers or assets.
- [ ] Open `https://genibahar.com/sitemap.xml`; confirm 200, valid XML, exactly the four intended canonical public URLs (`/`, `/projects/fortigate-in-aws.html`, `/projects/aws-site-to-site-vpn.html`, `/projects/multicloud-wordpress-security.html`) and accurate `lastmod`; open every listed URL and confirm it returns 200 with the matching canonical.
- [ ] Load each project page directly (including on mobile): verify its title, description, canonical, visible content, project article schema, images/diagrams, source-material links, and crawlable homepage/back links.
- [ ] In Google Search Console, verify the domain property, submit the sitemap, inspect the homepage's indexing status and Google-selected canonical, request indexing if the updated URL is eligible, then review crawl/page indexing and security reports.
- [ ] In Bing Webmaster Tools, verify the domain, submit the sitemap, inspect crawl/index status, and confirm crawl access.
- [ ] Run the deployed URL through Google's Rich Results Test; confirm parsed JSON-LD reflects the visible page and resolve errors. Schema.org markup may be valid without being eligible for a Google rich result.
- [ ] Run PageSpeed Insights for the homepage and all three project URLs on mobile and desktop. Record its Lighthouse lab metrics separately from any available CrUX field data and Search Console Core Web Vitals.
- [ ] Confirm LinkedIn and CompTIA external profile/credential URLs load and point to the intended profile/credential; confirm the public profiles link back to the current domain where appropriate.
- [ ] Check crawl accessibility from a public network and review Search Console/Bing reports or server/CDN logs for blocked HTML, CSS, images, robots, sitemap, or bot requests.
- [ ] Compare the rendered public DOM at mobile and desktop: same core visible profile copy, headings, projects and links; no content requiring interaction or JavaScript to appear.

**Current state:** a previous Phase 2 endpoint check observed expected domain redirects and reachable homepage/robots/sitemap, serving the then-current prior configuration. A fresh Phase 4 direct fetch through the available web reader was unavailable, so current public status must be rechecked from a public network. This repository contains four canonical public HTML pages. Search Console/Bing verification, rich-result validation, public PSI, indexing requests, profile checks, deployed HTML checks and crawl-log confirmation remain outstanding.
