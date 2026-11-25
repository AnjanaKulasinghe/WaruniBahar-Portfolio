# SEO Growth Plan

The site is a public personal portfolio, not a job application or commercial service. It should help people understand Waruni's identity, interests, experiences and work, then make it easy to connect. Use real search and contact data to adjust priorities. The time periods below start after the SEO changes are deployed; they do not imply ranking or traffic guarantees.

## Phase 3 baseline and current state (25 November 2026)

- Local Lighthouse 13.6.0 / Chrome 151: homepage three-run medians are mobile Performance 95 and desktop 100; Accessibility, Best Practices and SEO are 100 in both modes. Each of three project pages scored 100 in all four categories in a single mobile and desktop run. Full metrics and limitations are in [`SEO-REPORT.md`](SEO-REPORT.md). These are simulated lab runs, not real-user CWV.
- The portrait/favicon payload improvement and self-hosted licensed fonts are implemented. Homepage transfer is about 588 KiB across 19 requests; each project page is about 159–163 KiB across 9 requests. Main CSS remains render-blocking, and home mobile LCP median is 2.86 s. Results do not model production caching or compression.
- Production apex/`www`/HTTP endpoint checks and the live robots/sitemap were reached. Redirects converged to apex HTTPS, but production still serves old page metadata, robots policy, and a multi-entry sitemap. Do not interpret this as successful publication.
- Search review is focused on public identity, credentials and technical project pages rather than vacancy listings. The full name should be paired with Auckland/New Zealand context; the shorter “Geni Bahar” is ambiguous. No volume or ranking data is available. The three verified academic project case studies are in the repository, with additional pages deferred until reliable source material exists.
- Webmaster/analytics accounts and field Core Web Vitals remain unverified. Follow [`SEO-CHECKLIST.md`](SEO-CHECKLIST.md) after an authorized release.

## Days 1–30: verify and establish a baseline

1. Publish the reviewed repository changes through the normal GitHub Pages process.
2. Confirm HTTPS and preferred host behavior for apex, `www`, and HTTP URLs. Confirm the canonical homepage, `robots.txt`, sitemap, share image, and profile WebP return successfully.
3. Verify `genibahar.com` as a Domain property in Google Search Console; submit `https://genibahar.com/sitemap.xml`; inspect the canonical homepage and review Page indexing, HTTPS, manual actions, and Core Web Vitals reports.
4. Verify the site in Bing Webmaster Tools, submit the same sitemap, inspect crawl/indexing reports, and review IndexNow eligibility. No IndexNow key or API credential is committed; add it only if you choose to use the service.
5. Take a mobile and desktop Lighthouse run after deployment and record LCP, INP proxy/TBT, CLS, accessibility, best-practices, and SEO scores. Treat Lighthouse as lab data; compare field data from Search Console/CrUX when enough visits exist.
6. Record impressions, clicks, CTR, and average position for relevant Auckland/New Zealand query groups. Record contact clicks or inbound sources only if privacy-appropriate analytics are configured.
7. Decide whether `GPTBot` remains allowed for training while `OAI-SearchBot` is allowed for search. Keep the decision documented in `robots.txt` and re-check after policy changes.

## Days 31–60: grow carefully from evidence

1. Use Search Console queries and visitor feedback to choose any additional portfolio stories; the current three are supported by source reports. Do not use role listings or estimated search volume as a proxy for this portfolio's identity-first audience.
2. The FortiGate, VPN and multi-cloud WordPress case studies are already implemented from reports. Review additional source reports and publish another story only if it adds first-hand, distinct context that can be shared publicly. Continue to distinguish individual from team work and academic labs from production experience.
3. After release, inspect page indexing and query data for each canonical project URL. Refine summaries if search impressions indicate a mismatch with visitor intent; do not add generic keyword pages.
4. Keep the sitemap and multi-page regression checker aligned as new public pages are added; update `lastmod` only for meaningful content changes.
5. Review contact clarity and ease on phone and keyboard. Preserve the current look while making it easy for any visitor to reach email, LinkedIn, and relevant project evidence.
6. Share useful project notes through authentic professional channels and update the LinkedIn portfolio URL; do not buy links or create artificial testimonials.

## Days 61–90: improve based on evidence

1. Compare query and landing-page performance with the 30-day baseline. Refine page titles and summaries where impressions are high but click-through is weak, and ensure changes remain factual.
2. Check indexing and canonical selection for new case studies; resolve discovered crawl, mobile, link, or schema errors. Do not repeatedly submit unchanged sitemaps.
3. Recheck Core Web Vitals field data and run the same Lighthouse profile. Prioritize measured regressions such as render delay, font requests, animation CPU work, image payload, or layout shift.
4. Add one high-quality technical note only if there is a useful first-hand lesson not already covered. A small set of useful pages is preferable to generic keyword pages.
5. Seek legitimate professional mentions through alumni, credential providers, relevant NZ communities, and event participation where genuine. Track earned mentions and referral traffic; avoid spam outreach.
6. Review credential dates, life/work details, contact information, and project links for accuracy. Refresh sitemap `lastmod` only when a page's actual content changes.

## Ongoing monthly maintenance

- Review Search Console and Bing query, indexing, link, and security reports.
- Check all external credential URLs and internal project files.
- Update the site and schema when qualifications or employment facts change.
- Run `python3 scripts/check_seo.py` locally; the same check runs in GitHub Actions on relevant pushes and pull requests.
- Review crawlers and AI-training preferences without conflating search discovery with model training.
- Re-measure field performance when enough traffic exists; keep before/after metrics and the test context.
