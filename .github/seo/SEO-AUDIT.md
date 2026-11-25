# SEO Audit

**Audit date:** 2026-11-25  
**Scope:** tracked repository, local rendered page, Lighthouse lab runs, read-only production endpoint checks, and a qualitative live search snapshot. Search Console, Bing Webmaster Tools, analytics, and field performance data were not accessible.

## Site and search objective

This is an online portfolio introducing Geni Waruni Bahar (Waruni Bahar) to the public, not a job application. It presents her identity and interests alongside her education, experiences, projects, and personal perspective. Visitors can include peers, friends and colleagues, professional communities, collaborators, and people interested in her work. The purpose is to make the person and her work understandable and invite connection through email, phone, or LinkedIn. It is a static HTML/CSS/JavaScript website with a homepage and three project case-study routes, hosted on GitHub Pages with `genibahar.com` as its custom domain.

The relevant geographical context is Auckland and wider New Zealand; the content is English and uses New Zealand English. This is a personal portfolio, not a cybersecurity consultancy or local storefront.

## Baseline and findings

Baseline was read from the repository before changes. It is not a ranking, traffic, or field-performance baseline.

| Priority | Finding | Impact / affected area | Resolution or status |
|---|---|---|---|
| Critical | No critical indexing blocker found in tracked files. | Public homepage | `index, follow`; canonical is HTTPS; generic robots group allowed `/`. |
| High | The portrait PNG was 6,019,022 bytes (1782 × 2109) and had no responsive-format source or lazy-loading hint. | About section image and social preview | Added 230,498-byte WebP at the same dimensions with the PNG as fallback, lazy loading and async decoding. Added a 364,876-byte 1200 × 1420 JPEG share image. The WebP is 96.2% smaller than its PNG source; the share JPEG is 93.9% smaller. These are file-size measurements, not a Core Web Vitals result. |
| Medium | Sitemap contained homepage section fragments as separate URLs even though all sections resolve within one document. Its old `lastmod` was stale. | `sitemap.xml` | Now lists only `https://genibahar.com/` with the meaningful content update date `2026-11-25`. |
| Medium | SEO intent is concentrated on one URL. Section fragments are navigation targets, not independently optimized landing pages. | Site architecture and search intent | Preserved the one-page URL and visual experience. Search intent mapping and content expansion opportunities are documented in [`SEO-STRATEGY.md`](SEO-STRATEGY.md). |
| Medium | No verified Search Console, Bing Webmaster Tools, analytics, or real-user Core Web Vitals data is present in the repository. | Measurement and external indexing | No credentials or fabricated IDs were added. Owner setup and monitoring steps are in [`SEO-GROWTH-PLAN.md`](SEO-GROWTH-PLAN.md). |
| Medium | Local source changes have not been published. Production homepage, robots, and sitemap still serve the prior version. | Production deployment | Apex HTTPS, www HTTPS, and apex HTTP endpoint/redirect checks passed at test time; live content remains stale. |
| Low | Existing JSON-LD was syntactically valid, but described an institution name that did not match the visible University College Dublin credential, duplicated a skill, and lacked a website entity. | Homepage structured data | Replaced with a connected `WebSite`, `ProfilePage`, and `Person` graph using the visible institutions and facts. JSON is parsed by the regression check. Rich-result eligibility is not guaranteed. |
| Low | Open Graph declared 1200 × 630 even though the portrait image was 1782 × 2109. A duplicate favicon link pointed to missing `assets/img/favicon.ico`. | Social sharing and browser icon | Share metadata now uses a real 1200 × 1420 JPEG with accurate MIME type and dimensions. Removed the nonexistent favicon link and retained the existing PNG icon. |
| Low | Images had no explicit dimensions or lazy-loading hints; the mobile menu trigger was a clickable `div`, and the page lacked a main landmark and skip link. | Accessibility and layout stability | Added image dimensions, appropriate lazy loading, a `<main>` landmark, a keyboard-visible skip link, and a button with expanded-state announcements. The visual design is unchanged during normal use. |
| Low | Links opened in new tabs without a consistent `noopener` relation. | Linked project files and social links | Added `rel="noopener noreferrer"` where needed. |

## Baseline facts available locally

- One HTML page, one canonical URL, one `h1`, seven top-level content sections, and eight images (portrait plus seven credential marks).
- Important text, navigation links, section content, and project links are in the original HTML source; content is not dependent on client-side rendering for discovery.
- Project PDFs and demo videos are linked for user-initiated access; they are not embedded or fetched as part of the initial page. The repository's `assets/` directory is about 177 MB because it includes these project deliverables; that is repository/hosting footprint, not the initial page transfer size.
- Local static checks confirmed all in-page fragments and relative file targets resolve, all images have non-empty alt text, metadata and JSON-LD parse, and the sitemap and robots rules agree.
- The public Git-tracked set contains only the site and linked project assets. The local `.idea/` directory is ignored by Git and is not in the deployment source list.
- Lighthouse lab measurements and live HTTP endpoint observations are now available; neither represents field Core Web Vitals or Search Console coverage. No Google Search Console, Bing Webmaster, analytics, traffic, or ranking baseline is available.

## Crawler, rendering, and indexing assessment

`robots.txt` allows public crawling and names the production sitemap. `OAI-SearchBot` is explicitly allowed for ChatGPT Search; `GPTBot` remains under the existing wildcard allow policy. No AI-training preference was changed. Robots rules do not protect confidential files; only intentionally public tracked assets should be deployed.

The static HTML is crawlable without executing JavaScript. JavaScript provides animations and navigation behavior; it does not create the main content. No SSR/SSG migration is indicated. One stable canonical homepage is appropriate for the current architecture. GitHub Pages cannot configure server redirects from repository files, so www, HTTP-to-HTTPS, and unknown-route responses need external verification in hosting/DNS settings.

## Search result and content review

A small live search sample of Auckland security analyst listings and public profiles showed role language such as security analyst, security operations, cloud security, vulnerability management, network/log analysis, incident response, customer communication, and practical tools. This is qualitative query-result observation, not keyword-volume or competitor-ranking data. Examples included a current Auckland analyst listing and the Auckland-filtered SEEK result set; details are volatile and should be rechecked when the growth plan is carried out.

The web-search sample for `site:genibahar.com` and the exact domain did not return the portfolio URL. This search provider's result is a reason to verify indexing in Google Search Console and Bing Webmaster Tools, not proof that the site is absent from Google's index.

No direct business competitors apply because this is a personal portfolio. Public professional profiles, other personal portfolios, credential references, and project pages are the closest comparison set. The differentiating evidence already present is the mix of QA/API testing, security-aware issue investigation, customer relationship experience, CompTIA Security+, practical AWS/Azure/Fortinet project work, and a broader personal history.

## Outstanding issues and owner dependencies

1. After the authorized deployment, verify domain variants/HTTPS redirects, updated live `robots.txt` and sitemap, and successful responses for the canonical page and media. Endpoint checks passed at test time, but live robots and sitemap remain stale.
2. Connect Google Search Console and Bing Webmaster Tools and inspect indexing, URL selection, backlinks, queries, and crawl issues.
3. Measure field Core Web Vitals after deployment. Lighthouse results below are local simulated lab measurements and cannot establish field LCP, INP, or CLS.
4. Decide whether the existing wildcard policy for model-training crawlers remains desired. Search-discovery and model-training controls are separate; see the official [OpenAI crawler guide](https://developers.openai.com/api/docs/bots).
5. Consider detailed, original project case-study pages only after curating and checking the project reports. The PDFs are linked and their filenames/titles are visible, but no PDF text-extraction utility was available in this environment; writing technical findings from filenames or short card summaries would risk inventing detail. Add pages only with verified report content and visible internal links.
6. The project videos are linked as downloadable files, not embedded on a dedicated video page. Video thumbnails, transcripts/captions, and direct production access were not verified, so `VideoObject` markup and video sitemap entries were not added.
7. External credential and LinkedIn profile destinations were not independently live-checked here.

## Phase 2: content, rendering, and performance validation

**Audience/search intent:** the site introduces Waruni as a whole person through her identity, interests, learning, experiences and projects. The audience is public: peers, friends/colleagues, professional communities, collaborators, and people who encounter her work. Recruiters/employers may be among visitors, but the site is not framed as an application. Search intent should prioritize her name, qualifications, project topics and personal/professional journey; broad job terms are secondary and mostly surfaced job boards or vacancies in the sample. The hero now names her professional identity and curiosity about cybersecurity, cloud technology and people. No unsupported biography or employment claims were added.

**Coverage and content sufficiency:** the homepage addresses the name, Auckland, cybersecurity/cloud security, CompTIA Security+, QA/application security checks, cloud/network project skills, and direct contact. Project descriptions and linked artifacts offer evidence, but one URL compresses each project into a brief card. The site is relevant to its intended audience but is not yet deep enough to compete broadly for generic technical how-to queries. The best next improvement is source-checked HTML case studies from the AWS IAM and Fortinet work, clearly labelled as lab/academic work. No such pages were added because that would expand the public site's content and route structure, and specific results must be verified from the reports.

**Competitor snapshot:** live query results for Auckland junior cybersecurity/SOC roles surfaced employer/recruiter vacancies, SEEK and LinkedIn Jobs/Indeed aggregations. Listings mention event monitoring, alert triage, incident documentation, networking, cloud familiarity, Security+, communication, and demonstrable labs. These are competitors for generic job-related search result space; candidate profiles are indirect peers. This is a small web-search sample, not a controlled Google SERP, ranking comparison, volume, or difficulty analysis. Current examples and direct links are recorded in `SEO-STRATEGY.md`.

**Rendering/entity checks:** main page text and navigation are present in static HTML; JavaScript is not required to reveal profile content. Local Chrome loaded the page with deferred interaction/animation scripts. Source includes page title, description, canonical, social metadata, one h1, crawlable internal anchors, and a connected Person/WebSite/ProfilePage JSON-LD graph consistent with visible content. `robots.txt` explicitly allows OAI-SearchBot; schema and crawler source checks pass locally. External crawler rendering/indexing and Google rich-result eligibility are not verified. Mobile and desktop share the same HTML/content source.

**Lighthouse lab, final repository snapshot:** Lighthouse 13.6.0, Chrome 151, local Python static HTTP server at `127.0.0.1:8765`, tested 25 November 2026. Latest identity-first copy mobile run: Performance 89, Accessibility 100, Best Practices 100, SEO 100; FCP 2.0 s, LCP 3.5 s, CLS 0, TBT 0 ms, Speed Index 2.0 s, 20 requests, 601,696 bytes (588 KiB) transferred. Mobile repeats varied from 86–89. Desktop: Performance 98, Accessibility 100, Best Practices 100, SEO 100; FCP 0.6 s, LCP 1.0 s, CLS 0.016, TBT 0 ms, Speed Index 0.8 s, same request count and transfer. The latest mobile LCP was hero text. These synthetic runs use local-server timing plus simulated throttling and a remote Google Fonts request. They are lab evidence only; they do not represent CrUX or real-user CWV, and the Python server does not model production caching/compression. Largest observed render-blocking opportunities were Google Fonts and the main stylesheet (~880 ms estimated). No change to stylesheet loading was made because async CSS/font delivery could alter first-render appearance. The dedicated small favicon fixed the actual 6 MB request found in the baseline trace; exact transfer and run comparison are recorded in `SEO-REPORT.md`.

**Production status:** the public apex homepage, live `robots.txt`, and live `sitemap.xml` were reachable with HTTP 200; `www` HTTPS and apex HTTP converged to apex HTTPS. The live page still has the previous title/description; the previous robots file still contains a project-video disallow rule and `Crawl-delay: 1`; the previous sitemap has seven entries including section fragments and an older modification date. Those are observations of the publicly served files at the time checked. Current repository metadata, favicon fix, copy, schema, sitemap and robots updates are not live. The observed responses did not show HTTP Content-Encoding. Do not treat local SEO score as production indexing or deployment validation.

**Status register:**

- **Implemented and verified locally:** identity-first copy and metadata revision; static schema/crawl checks; initial HTML rendering; small favicon and responsive WebP; Lighthouse local measurements; `robots.txt`/sitemap source alignment.
- **Implemented but unverified in production:** all current repository content/metadata/schema/crawler changes; cache/compression behavior; rendered structured-data eligibility; updated public assets and routes.
- **Not implemented:** case-study routes, analytics/Search Console instrumentation, new article or video transcript pages.
- **Not applicable:** LocalBusiness markup, service pages, reviews, and location landing pages for this personal portfolio.
- **Blocked by external access or authorization:** publishing; Search Console/Bing data; PSI public-page report of updated code; index inspection/requests; field CWV; independent verification of third-party profile endpoints.

## Phase 3 follow-up audit (25 November 2026)

The current repository now contains four indexable HTML pages: the identity-first homepage and individual FortiGate-in-AWS and AWS site-to-site VPN academic lab stories, plus Geni's documented AWS/security contribution to a group multi-cloud WordPress project. Each project story links its context to source evidence, separates tested outcomes from future ideas, and identifies team versus individual work. Three responsive SVG diagrams were added. No credentials, student identifiers, keys, IPs or private resource identifiers were published.

The person is identified consistently as **Geni Waruni Bahar**, with **Waruni Bahar** as the shorter name. The ambiguous shorter query “Geni Bahar” was intentionally not used as an alias. Further entity consistency requires confirming the owner-controlled LinkedIn endpoint and any public credential links after deployment; an existing profile URL in `sameAs` is not evidence that the external page is currently accessible or reciprocally linked.

The 25 November search snapshot surfaced [Cansguy's Auckland cybersecurity portfolio](https://cansguy.com/portfolio/), [Phishy.Cloud's project portfolio](https://www.phishy.cloud/portfolio.html), and [Anish Kumar Vedant's project portfolio](https://anishvedant.github.io/Portfolio/). These are topical comparators for regional cyber/project searches, not direct identity competitors. Their portfolio pages present practical writing or broader technical project inventories; this site's differentiator is the verified combination of QA, customer-facing work, education and cloud/security project stories. The snapshot is not a controlled Google SERP and provides no rank, traffic or search-volume evidence. The earlier Phase 2 vacancy examples are historical and do not define the Phase 3 target audience.

Unique titles, descriptions, canonicals, social metadata and visible-content article schema exist for all four pages. The sitemap has four canonical routes. `scripts/check_seo.py` passes across all four HTML files and validates local links, metadata uniqueness, schema JSON, assets and sitemap parity. Rendering is static; core copy does not depend on JavaScript. Lighthouse 13.6 / Chrome 151 local synthetic measurements are recorded in [`SEO-REPORT.md`](SEO-REPORT.md): homepage mobile median score 95 (LCP 2.86 s), homepage desktop median 100, and each project page 100 in one mobile and desktop audit. Those runs showed no console errors. They do not measure field CWV or public deployment.

The original Google Fonts were replaced with self-hosted WOFF2 files under their SIL Open Font License, including license texts. This removes the third-party font stylesheet and requests. The existing design was preserved in visual spot checks at phone and desktop sizes. The remaining visible lab performance opportunity is home mobile LCP/render delay; production compression/cache policy and real-user experience are unknown.

**Status:** implemented and locally verified: content, three case studies, diagrams, metadata, schema syntax, internal links, sitemap, local fonts and Lighthouse/browser spot checks. Implemented but unverified: public deployment of all repository changes, external links/entity relationships, search-engine rich display and indexing. Not implemented: public release, Search Console/Bing account checks, indexing requests, PSI against updated live routes, or field performance measurement. Not applicable: commercial services/local-business claims and testimonials. Blocked by external access: owner search accounts and third-party profile verification.

The earlier Phase 2 discussion above is retained as dated history; its statements that case-study pages were not added and the sitemap held one URL were accurate then and are superseded by this Phase 3 audit.

## Phase 4: strict design-preservation audit (25 November 2026)

The current working tree, including uncommitted Phase 3 pages and site changes, was the baseline. The four current HTML routes loaded locally with HTTP 200. Full-page screenshots were captured for each at 375 × 812, 390 × 844, 768 × 1024, 1440 × 900 and 1920 × 1080, plus the homepage menu-open state at 375 × 812 and 768 × 1024. The browser reported no page errors. Before/after visual comparison is recorded in [`SEO-REPORT.md`](SEO-REPORT.md); no website-rendering files were changed for Phase 4.

Lighthouse 13.6.0 / Chrome 151 baseline audits covered all four pages in mobile and desktop modes. All routes scored 100 for Accessibility, Best Practices and SEO. Homepage Performance was 95 mobile / 100 desktop; project pages scored 100 in single runs. Mobile homepage LCP was 2.86 s, and the VPN page's one mobile run reported 0.014 CLS. These are local simulated lab values only. All reports had zero browser console errors.

Existing metadata, canonical URLs, robots directives, JSON-LD, internal routes and sitemap are present and consistent. The existing static checker now validates social metadata correspondence and uniqueness, schema identity/article/breadcrumb references, and sitemap uniqueness/canonical form; the CI workflow now includes project HTML and font changes in its trigger paths. No visible copy or design changes are approved by this brief, so content opportunities are recommendations only in [`SEO-CONTENT-RECOMMENDATIONS.md`](SEO-CONTENT-RECOMMENDATIONS.md).

**Phase 4 status:** safely implementable checks updated and passing; rendered design change not introduced; external production/indexing validation remains blocked by unavailable public endpoint/account access. This repository has no build framework, dynamic sitemap or server-side redirect configuration. No deployment was performed.

## References

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google title link guidance](https://developers.google.com/search/docs/appearance/title-link)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
