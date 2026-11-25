# SEO Implementation Report

## Phase 4: strict design-preservation audit (25 November 2026)

The current approved working tree was treated as the visual baseline, including its existing project pages and all uncommitted changes. No public page, visible text, HTML structure, stylesheet, font, image, asset, animation, interaction, or URL was modified during Phase 4. The only implementation change is to static SEO regression validation and its CI path filters; the remaining changes are SEO documentation. The current Lighthouse figures below are baseline lab observations, not field CWV.

### Baseline and after-change verification

Before implementation, full-page browser screenshots were captured for all four current routes at 375 × 812, 390 × 844, 768 × 1024, 1440 × 900, and 1920 × 1080 (20 captures), plus the homepage navigation-open state at 375 × 812 and 768 × 1024 (2 captures). Chrome loaded every page with HTTP 200 and reported zero page errors. Baseline images are held outside the website/repository at `/private/tmp/seo-phase4-visual-baseline/`.

Lighthouse 13.6.0 / Chrome 151 baseline, local Python static server, one run per route and viewport:

| Page | Viewport | Perf. | A11y | Best practices | SEO | FCP | LCP | CLS | TBT | Transfer / requests | Console errors |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Homepage | Mobile | 95 | 100 | 100 | 100 | 1.66 s | 2.86 s | 0.0002 | 0 ms | 588 KiB / 19 | 0 |
| Homepage | Desktop | 100 | 100 | 100 | 100 | 0.38 s | 0.60 s | 0.0001 | 0 ms | 588 KiB / 19 | 0 |
| FortiGate in AWS | Mobile | 100 | 100 | 100 | 100 | 1.05 s | 1.05 s | 0.0000 | 0 ms | 159 KiB / 9 | 0 |
| FortiGate in AWS | Desktop | 100 | 100 | 100 | 100 | 0.28 s | 0.28 s | 0.0000 | 0 ms | 159 KiB / 9 | 0 |
| AWS site-to-site VPN | Mobile | 100 | 100 | 100 | 100 | 1.05 s | 1.05 s | 0.0140 | 0 ms | 159 KiB / 9 | 0 |
| AWS site-to-site VPN | Desktop | 100 | 100 | 100 | 100 | 0.28 s | 0.28 s | 0.0000 | 0 ms | 159 KiB / 9 | 0 |
| Multi-cloud WordPress | Mobile | 100 | 100 | 100 | 100 | 1.05 s | 1.05 s | 0.0001 | 0 ms | 163 KiB / 9 | 0 |
| Multi-cloud WordPress | Desktop | 100 | 100 | 100 | 100 | 0.29 s | 0.29 s | 0.0000 | 0 ms | 163 KiB / 9 | 0 |

The homepage's mobile LCP remains about 0.36 s above the 2.5 s target. The VPN page's one mobile run showed CLS 0.014, within the 0.1 threshold. Project pages scored well in single lab runs; repeatability and field CWV remain unmeasured. Lighthouse throttling and the Python server are synthetic and do not represent GitHub Pages caching/compression or actual visitors.

After the non-rendering changes (checker, CI filters and documentation), the same eight Lighthouse audits retained the same category scores, 19/9 request counts, and byte-for-byte identical transfer sizes per route. LCP stayed within 0–20 ms of baseline on all routes. Homepage CLS/TBT varied between individual simulated runs (mobile 0.0002 → 0.0162 and 0 → 42 ms; desktop 0.0001 → 0.0355 and 0 ms), illustrating lab-run variability; values remain under the stated CLS target. No site rendering files or resource requests changed.

The after browser pass repeated the same 22 screenshots, viewport sizes and menu states. Screenshot dimensions matched every baseline. A raw pixel comparison with a per-channel threshold of 8/255 found 16/22 captures with no above-threshold pixel differences; six full-page captures had differences from 0.06% to 0.61%, except the FortiGate page at 1920 px (2.36%). The comparison still contains timing-sensitive animated/background rendering, so the strict zero-pixel visual criterion is **not a clean automated pass**. Review of the captures found no attributable page-code change; HTML, CSS, font, image and JavaScript files were not changed in Phase 4. Treat exact visual equivalence as manually reviewed but not proved by a deterministic pixel test.

The static SEO check was strengthened to verify unique Open Graph/Twitter titles, matching social title/description/image values and alt text, Schema.org `@graph` structure, homepage Person/ProfilePage identity references, each article's canonical/author/BreadcrumbList references, and sitemap duplicates/HTTPS host/parameter/fragment/lastmod parity. Existing CI now runs when project HTML or local fonts change. The dependency-free check passes. No metadata deficiencies were found that justify changing current site HTML.

### Findings by action class

| Class | Finding | Phase 4 action |
|---|---|---|
| Safe without visual change | Titles, descriptions, canonicals, index robots, Open Graph/Twitter, `en-NZ`, article/profile JSON-LD, crawlable links, four-URL sitemap and crawler policy are present and locally consistent. | Kept existing values; expanded regression coverage and verified all routes. |
| Requires visible copy change | Further personal-story depth, additional first-person project lessons, or new editorial content. | Documented only in [`SEO-CONTENT-RECOMMENDATIONS.md`](SEO-CONTENT-RECOMMENDATIONS.md); approval is required. |
| Requires design/architecture change | New navigation, visible page types, server redirects, dynamic sitemap generation or environment-specific deployment rules. | Not implemented; static GitHub Pages site does not have a build/server config in this repository. |
| Requires external account access | Google Search Console/Bing Webmaster Tools verification, search query/index coverage, PageSpeed Insights field data and index requests. | Not available in the workspace. |
| Requires verified owner information | External profile reciprocity, additional biography, business or location claims, new credentials. | No facts inferred or added. |
| Already optimized / not applicable | Canonicals and metadata are unique; search crawlers are allowed; one language; personal rather than local service business. | No alternate language, LocalBusiness, price, review, FAQ or service schema added. |

Chrome rendering returned HTTP 200 for all local routes and reported no page or console errors. Responsive functional checks across all four pages at 375, 390, 768, 1440 and 1920 px found no horizontal page overflow; project diagrams remained horizontally scrollable on narrow screens; the mobile/tablet menu opened and closed with expected ARIA state. `tidy` available on the host is a 2006 HTML Tidy build that treats HTML5 elements (`main`, `nav`, `canvas`, `article`, `svg`) as unknown, so it is not a reliable HTML5 validator; browser parsing and Lighthouse were used instead. The strict offline check passes, but Google Rich Results validation was not available.

Production endpoints and external profile URLs could not be fetched with the available web reader in this phase. A search sample for the exact name/domain did not surface the portfolio; search results are not authoritative proof of non-indexing. Use the owner-controlled webmaster accounts after an authorized deployment. No deployment was performed.

## Phase 3: personal brand authority and validation (25 November 2026)

This is the current repository assessment. Phase 2 figures below are retained as a dated history; they are not the latest results. No deployment was performed.

### Changes implemented and verified locally

- The identity is consistently presented as **Geni Waruni Bahar**, with **Waruni Bahar** as the shorter public name. The introduction describes the person across QA, customer relationships, early childhood education, cloud/security study and projects. Copy remains first-person and open-ended, without job-seeking language or invented personal details.
- Added three static, crawlable project stories from the source reports: an individual FortiGate-in-AWS lab, an individual AWS site-to-site VPN lab, and Geni's documented contribution to a group multi-cloud WordPress project. Each page distinguishes academic lab work, documented team contribution, tested outcomes and unimplemented ideas. Credentials, student identifiers, private IPs, keys and resource identifiers are omitted.
- Added original responsive SVG diagrams, unique page titles/descriptions/canonicals/social metadata, structured data aligned with visible page copy, and contextual homepage links. The sitemap now contains the four canonical HTML pages. `scripts/check_seo.py` checks all four pages, local links/assets, schema syntax and sitemap parity.
- Moved Orbitron, Rajdhani and Share Tech Mono to local WOFF2 files with their SIL Open Font License texts; CSS uses `font-display: swap`. No Google Fonts stylesheet or font host request remains. The layout was visually checked at mobile and desktop sizes.
- Local HTML/source checks, browser loads, and Lighthouse page audits confirm the important content and links are available without JS-generated content, core metadata/canonicals are present, and the audited pages report no browser console errors. Mobile/desktop use the same static HTML source.

### Current Lighthouse lab results

Lighthouse 13.6.0 / Chrome 151, local static server, 25 November 2026. Homepage numbers are the median of three simulated runs per viewport. Each project page had one run per viewport. These are lab measurements, not field Core Web Vitals.

| Page | Viewport | Perf. | A11y | Best practices | SEO | FCP | LCP | CLS | TBT | Transfer / requests | Console errors |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Homepage | Mobile, 3-run median | 95 | 100 | 100 | 100 | 1.51 s | 2.86 s | 0.0002 | 31 ms | 588 KiB / 19 | 0 |
| Homepage | Desktop, 3-run median | 100 | 100 | 100 | 100 | 0.37 s | 0.59 s | 0.0001 | 0 ms | 588 KiB / 19 | 0 |
| FortiGate in AWS | Mobile | 100 | 100 | 100 | 100 | 1.05 s | 1.05 s | 0.0000 | 0 ms | 159 KiB / 9 | 0 |
| FortiGate in AWS | Desktop | 100 | 100 | 100 | 100 | 0.28 s | 0.28 s | 0.0000 | 0 ms | 159 KiB / 9 | 0 |
| AWS site-to-site VPN | Mobile | 100 | 100 | 100 | 100 | 1.06 s | 1.06 s | 0.0140 | 0 ms | 159 KiB / 9 | 0 |
| AWS site-to-site VPN | Desktop | 100 | 100 | 100 | 100 | 0.29 s | 0.29 s | 0.0000 | 0 ms | 159 KiB / 9 | 0 |
| Multi-cloud WordPress | Mobile | 100 | 100 | 100 | 100 | 1.05 s | 1.05 s | 0.0001 | 0 ms | 163 KiB / 9 | 0 |
| Multi-cloud WordPress | Desktop | 100 | 100 | 100 | 100 | 0.28 s | 0.28 s | 0.0000 | 0 ms | 163 KiB / 9 | 0 |

The homepage's latest mobile LCP remains around 0.36 s above the 2.5 s “good” threshold used as a lab goal, even though its mobile performance score is 95. The main stylesheet is still render-blocking (about 300 ms estimated in the latest trace). Project-page traces scored 100 in both viewports; the VPN story's single mobile CLS run was 0.014. One run per project viewport is a spot check, not a repeatability study. Test server timing, simulated throttling and Lighthouse estimates cannot establish actual visitors' CWV, and the local host does not represent GitHub Pages cache/compression behavior.

### Content and search assessment

Branded discovery should use the full name plus Auckland/New Zealand and the verified cybersecurity/cloud context. A live web search for the shorter string “Geni Bahar” surfaced an unrelated person with that name, so it is intentionally not asserted as an alias or linked through `sameAs`. Searches for the exact full name and project topics are the strongest credible content targets. Search results observed were qualitative only; no volume, rank, difficulty, or traffic estimates are claimed.

The three technical case studies create useful context for people searching for the named cloud/network topics and give visitors a readable account beyond the source PDFs. They are academic/lab evidence, not proof of production security operations or commercial capability. Remaining content opportunity is to document other work only when first-hand source evidence and permission support a distinct, useful page. Personal interests beyond the visible site content were not inferred or invented.

### Status register and external limits

| Area | Status | Evidence or next action |
|---|---|---|
| Identity-first content, case studies, internal links | **Implemented and locally verified** | Static content, report-grounded claims, four crawlable HTML routes. |
| Metadata, canonical, schema, sitemap, local assets | **Implemented and locally verified** | Four-page checker passes; schema syntax and URL set align. Search-engine rich display is not guaranteed. |
| Lighthouse and browser rendering | **Measured locally; field status unverified** | Results above; no console errors in reports. No CrUX/Search Console data. |
| Public routes, redirects, HTTPS, deployed sitemap/robots | **Implemented in repository but not deployed or production-verified** | Previous endpoint observations relate to the old live version only. Recheck after an authorized release. |
| Google/Bing indexing, rich results, external profiles | **Blocked by external account or public endpoint access** | Verify accounts, URLs and reciprocal entity links after publishing; do not infer indexing from local checks. |
| Search volume, rankings, traffic, backlinks, field CWV | **Not measured** | Requires owner-controlled tools and a meaningful post-release observation period. |
| LocalBusiness, testimonials, service/price pages | **Not applicable** | This is a personal portfolio; none are evidenced. |

Production readiness: repository content and routes are ready for owner review, but public SEO release readiness remains pending publishing and the exact checklist in [`SEO-CHECKLIST.md`](SEO-CHECKLIST.md). No deployment was authorized or made.

## Phase 2: validation and content review (25 November 2026, historical)

This section records the follow-up validation of the repository version. It does not indicate a production deployment. Production currently serves an older version of the homepage, robots file, and sitemap.

### Evidence and status by category

| Category | Status | Evidence and limits |
|---|---|---|
| Audience, search intent, visible copy | **Implemented and locally verified** | The portfolio presents Waruni as a person through her professional identity, interests, education, experiences, projects and perspective; it is not framed as a job application. The hero now introduces curiosity about cybersecurity, cloud technology and people. Likely visitors include peers, professional communities, collaborators, friends/colleagues and people who encounter her work through search. No search volume or ranking estimates are claimed. |
| Competitor/search landscape | **Researched; external snapshot only** | For identity and project discovery, relevant comparison pages include professional profiles, credential sources and other personal portfolios. Job boards and vacancy pages are competitors only for broad job-related queries, which are secondary to this site's purpose. Listings still provide useful qualitative language about the cybersecurity context. Search result sample and limitations are in `SEO-STRATEGY.md`; this is not a Google ranking report. |
| Content depth/topical authority | **Partially implemented; growth gap remains** | Current one-page portfolio introduces Waruni's personal/professional journey and ties QA, application-security checks, AWS/Azure/Fortinet labs, Security+, and communication together. Best next opportunity is two or three HTML project case studies derived from the linked reports, written in her voice and with verified outcomes. Not added because details must be checked against source files and expanding routes/content is a deliberate content change. |
| Local rendering and source HTML | **Implemented and verified locally** | Local Chrome/Lighthouse loaded the static page. Important copy, headings, links, canonical, metadata and structured data exist in the source HTML without content-rendering JavaScript. The scripts are deferred and support interaction/animation. Rendered/desktop/mobile content uses the same document. This check does not prove how every external crawler indexes the public host. |
| Lighthouse mobile | **Measured in local lab** | Latest identity-first copy run: Performance **89**, Accessibility **100**, Best Practices **100**, SEO **100**. FCP 2.0 s, LCP 3.5 s, CLS 0, TBT 0 ms, Speed Index 2.0 s, 20 requests, transfer 601,696 bytes (588 KiB). Repeated runs varied (mobile performance 86–89); LCP is hero text. |
| Lighthouse desktop | **Measured in local lab** | Performance **98**, Accessibility **100**, Best Practices **100**, SEO **100**. FCP 0.6 s, LCP 1.0 s, CLS 0.016, TBT 0 ms, Speed Index 0.8 s, same 20 requests and 601,696-byte transfer. |
| Performance interpretation | **Lab only; field status unverified** | Lighthouse 13.6.0 and Chrome 151 on 25 November 2026 against `http://127.0.0.1:8765/`, served by Python's static HTTP server, with Lighthouse simulated mobile and desktop modes. Google Fonts was fetched remotely. The server is not the production CDN/host and has no representative cache/compression policy. These results are not CrUX or real-user Core Web Vitals; TBT is a lab diagnostic, not INP. |
| Rendering/indexing, schema, crawl files | **Repository verified; production unverified/stale** | Static checks pass for metadata, canonical, JSON-LD syntax, internal targets, robots and sitemap. Production endpoints returned 200 for the homepage, robots and sitemap when checked, but those files are older and do not contain the current repository changes. Google Rich Results Test and webmaster inspection were not performed. |
| Domain/redirect readiness | **Production endpoint check passed at time of test** | Apex HTTPS returned 200; `www` HTTPS and apex HTTP converged to the apex HTTPS page. This verifies observed endpoints/redirect behavior at test time, not durable DNS/hosting configuration. |
| Search visibility and real-world outcomes | **Blocked by external account access** | No Search Console, Bing Webmaster Tools, analytics, ranking, click, conversion, backlink or field CWV data was available. A web search sample did not surface the domain; this is not proof of deindexing. Verify with owner-controlled tools. |

### Phase 2 performance fix and remaining lab opportunities

The icon links previously caused the browser to download the full 6,019,022-byte portrait PNG during initial page load. A dedicated 180 × 180 icon (61,321 bytes) now serves favicon and Apple touch icon requests. A 640-pixel WebP candidate (27,736 bytes on disk) is offered for the portrait at normal display sizes while retaining the original PNG fallback and high-resolution WebP. In local Lighthouse, total initial transfer dropped from about 6.6 MiB to 588 KiB, and mobile LCP dropped from 33.5 s in the prior baseline run to 3.5 s in the latest copy recheck. Lighthouse mobile scores vary with simulated first-byte and render timing; the comparable current run is the measurement above.

The remaining largest scored performance opportunity is initial render delay from the main stylesheet and remote Google Fonts stylesheet (Lighthouse estimated about 880 ms in the latest mobile trace). CSS/JS minification opportunities were estimated at about 11 KiB and 4 KiB, respectively. The local static server does not model production caching or compression. These are diagnostic opportunities, not evidence that the live host has the same delay. No further layout-affecting optimization was made because preserving the existing visual design matters and desktop already measured 98.

## Phase 2 executive summary (historical)

Implemented a technical and on-page SEO pass for the existing one-page portfolio, kept its normal-use layout and content presentation, optimized the 5.7 MB profile image delivery, improved crawler/social metadata, repaired the inaccurate sitemap and favicon reference, strengthened mobile menu and page semantics, and added automated static regression checks in GitHub Actions. No production deployment was performed.

## Completed changes

- Updated page title and description for Waruni, cybersecurity/cloud security, and Auckland; aligned canonical and social titles/descriptions.
- Added accurate Open Graph image format, dimensions and alt text; added Twitter image alt text and a smaller JPEG social preview.
- Replaced the single Person JSON-LD object with connected `WebSite`, `ProfilePage`, and `Person` entities. The prior markup was valid JSON, but its alumni organization conflicted with visible education content. The new graph uses facts supported by the page.
- Removed obsolete keyword, language, revisit-after, and legacy geo meta tags. Removed a duplicate favicon declaration that pointed to a missing file.
- Kept `robots.txt` open to public crawling, explicitly allowed OAI-SearchBot, preserved the wildcard policy for GPTBot/training, and declared the sitemap.
- Replaced section-fragment sitemap entries with the canonical homepage and set `lastmod` to the day substantive metadata/content signals were updated.
- Added same-dimension WebP profile delivery with PNG fallback; set profile and credential image dimensions, useful alt text, lazy loading, and async decoding.
- Added a `<main>` landmark, keyboard-visible skip link, semantic mobile-menu button with accessible state announcements, and `noopener noreferrer` for new-tab links.
- Added dependency-free static checks at [`scripts/check_seo.py`](../../scripts/check_seo.py) and a GitHub Actions workflow at [`.github/workflows/seo.yml`](../../.github/workflows/seo.yml).
- Updated the repository's SEO instructions in [`README.md`](../../README.md).
- Created the audit, strategy, growth plan, and page checklist in this directory.

## Before and after measurements

| Measure | Before | After | Evidence |
|---|---:|---:|---|
| Profile source image | PNG, 6,019,022 bytes, 1782 × 2109 | WebP, 230,498 bytes, same dimensions; original PNG fallback retained; responsive 640px WebP is 27,736 bytes | Local file metadata; responsive source is selected by browsers supporting WebP |
| Favicon request | Full portrait PNG, 6,019,022 bytes | Dedicated 180 × 180 PNG, 61,321 bytes | Local Lighthouse request trace; previous favicon links requested the full portrait |
| Social preview asset | Same 6,019,022-byte PNG; incorrect declared 1200 × 630 dimensions | JPEG, 364,876 bytes, 1200 × 1420 with accurate metadata | Local file metadata; 93.9% smaller |
| Sitemap HTML URLs | Homepage plus six section fragments | One canonical homepage URL | Parsed `sitemap.xml` |
| Local SEO checks | No automated check | Static check passes; wired to push and pull request workflow | `python3 scripts/check_seo.py` |
| Lighthouse lab performance | Not measured | Mobile 86; desktop 98; categories and metrics detailed above | Local Lighthouse 13.6.0 / Chrome 151; simulated lab runs, not field CWV |
| Search visibility / organic traffic | No Search Console or analytics data in repo | Not measured | Account setup required; no numbers inferred |

File size improvement is measured, while runtime speed, LCP, INP, CLS, rankings, traffic, indexing and AI citations remain unmeasured and are not promised.

## Test and validation results

- `python3 scripts/check_seo.py` — passed. It validates title/description, canonical and robots directives, JSON-LD parseability, Open Graph/Twitter metadata, one `h1`, unique IDs, image alt text, new-tab link safety, in-page anchors, local file targets, robots rules, and sitemap XML/URL/date.
- `node --check assets/js/main.js` and `node --check assets/js/particles.js` — passed.
- Python AST syntax validation for `scripts/check_seo.py` — passed.
- `python3 scripts/check_seo.py` — passed after Phase 2 copy, image source, and metadata changes.
- `node --check assets/js/main.js`, `node --check assets/js/particles.js`, and `git diff --check` — passed.
- Local Chrome and Lighthouse mobile/desktop audits — run; results and limitations are detailed above.
- Read-only production endpoint check — apex HTTPS, `www` HTTPS, apex HTTP, live robots, and sitemap were reachable; the live files are stale relative to this repository. See production checklist below.
- Google Rich Results Test, Search Console, Bing Webmaster Tools, PageSpeed Insights field data, and external profile/credential endpoint checks — not completed; owner tool/account access and a deployed updated version are required for some of these.
- No build system exists. The GitHub Actions workflow runs the lightweight static SEO check; it does not deploy.

## Modified files and artifacts

- `index.html`, `robots.txt`, `sitemap.xml`
- `assets/css/style.css`, `assets/js/main.js`
- `assets/img/waruni-bahar-cybersecurity-cloud-security-profile.webp`, `assets/img/waruni-bahar-cybersecurity-cloud-security-profile.jpg`
- `scripts/check_seo.py`, `.github/workflows/seo.yml`, `README.md`
- `.github/seo/SEO-AUDIT.md`, `SEO-STRATEGY.md`, `SEO-REPORT.md`, `SEO-GROWTH-PLAN.md`, `SEO-CHECKLIST.md`

At the end of Phase 2, no new user-facing pages had been created. Phase 3 has since added three case-study pages, documented above.

## Remaining blockers and required manual actions

1. Publish the reviewed changes through the authorized release process. No deployment was performed in this task.
2. Confirm apex, `www`, HTTP variants, HTTPS certificate, expected redirects, canonical response, and every referenced public asset after publishing. Redirects passed at test time, while current production content is stale.
3. Open live `robots.txt` and `sitemap.xml`; confirm they reflect intended crawler policy and the one canonical public route. Current endpoints returned 200 but served stale content.
4. Verify Google Search Console and Bing Webmaster Tools, submit the sitemap, inspect homepage indexing and selected canonical, and review crawl reports.
5. Run Google Rich Results Test and PageSpeed Insights against the updated public URL. Compare mobile/desktop PSI lab data and Search Console/CrUX field data separately.
6. Verify LinkedIn and CompTIA profile/credential URLs are current and publicly accessible; ensure portfolio links from those profiles are correct.
7. Decide whether to preserve the existing GPTBot/model-training wildcard allowance. The repository does not encode an opt-out preference.
8. Phase 3 has added three source-checked case-study pages to the repository. Confirm their public routes after the reviewed version is deployed; do not treat the local pages as production routes yet.
9. Add analytics or conversion tracking only after the site owner provides account IDs and confirms privacy/consent expectations.

## Production readiness

Repository changes passed local static checks and local Lighthouse audits. The current public site is reachable and redirects were observed as expected, but it still serves the previous version (old metadata, robots and sitemap). Therefore the Phase 2 repository work is not production-validated or live, and webmaster/indexing/field data remains unverified. No deployment was authorized or made.
