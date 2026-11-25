# SEO Strategy

## Audience, value, and conversion

This is an online portfolio and an open, first-person introduction to Waruni, not a job application. It presents her professional identity alongside the experiences, interests, learning, projects, and people-facing work that shape her. Visitors may include peers, friends and colleagues, professional communities, collaborators, people interested in her projects, and employers who encounter her work. The primary purpose is to help visitors understand the person behind the technical areas and make it easy to continue a conversation through email, phone, or LinkedIn.

The strongest truthful story is the range of experiences that come together in Geni Waruni Bahar's life: CompTIA Security+ certification, a Grade A Level 6 Cloud Computing and Cyber Security diploma, AWS/Azure/Fortinet security projects, QA/API experience, customer relationships, and early childhood education. Showing these as parts of her life and perspective gives visitors a more complete understanding than a list of target roles.

## Market and language

- Primary market: Auckland, New Zealand.
- Wider context: New Zealand and international professional communities and people who encounter her work online.
- Language: English (`en-NZ`); no translated variants exist, so `hreflang` is not appropriate.
- Local relevance: use Auckland and New Zealand naturally as part of her identity. `LocalBusiness` markup and a Google Business Profile are not appropriate for a personal portfolio without a public business location.

## Keyword-to-page mapping

The current site has one indexable HTML URL. Section IDs provide navigation and are not separate landing pages. Keep one intent map to prevent fragment URLs or future pages competing for the same terms.

| Search intent | Primary terms to use naturally | Supporting terms | Best current destination |
|---|---|---|---|
| Understand who she is | Geni Waruni Bahar; Geni Waruni Bahar Auckland; Waruni Bahar New Zealand | cybersecurity and cloud security, QA background, personal portfolio | Homepage title, introduction, About and Experience |
| Explore her qualifications | Geni Waruni Bahar CompTIA Security+; Waruni Bahar cloud security diploma | AWS Academy, ISC2 CC training, ISTQB, Management Information Systems | Credentials and About sections |
| Explore documented project work | Geni Waruni Bahar AWS project; Waruni Bahar Fortinet firewall; AWS site-to-site VPN; multi-cloud WordPress security | VPC, network segmentation, FortiGate, VPN, AWS, Azure, QA security checks | Homepage cards and three project case-study pages |
| Understand her journey | Geni Waruni Bahar QA; Waruni Bahar cybersecurity journey | application-security checks, issue investigation, customer relationships, early childhood education | Homepage About, Experience and project pages |
| Connect with her ideas and perspective | Auckland cybersecurity portfolio; cloud technology and people | curiosity, learning, communication, verified projects | Homepage introduction, About, project evidence and Contact |

These are relevance hypotheses based on visible content and a small qualitative search-result sample, not measured search volumes, difficulty scores, or forecasts. Search Console query data should refine the map after access is configured.

## Competitor and positioning review

There is no conventional commercial competitor set. The closest comparison is other public person/profile pages, professional networks and credential/project pages that can appear for branded identity and expertise searches. Job-board and vacancy pages are competitors only for broad role queries, which are secondary to this portfolio's identity-first purpose. Existing content covers network and cloud project fundamentals, security checks during QA, education, customer relationships and stakeholder communication. The strongest opportunity is to make her story and verified project context easier to understand, rather than to position the page as a vacancy match or add keyword lists.

Search result examples observed on 25 November 2026:

- [Cansguy's cybersecurity portfolio](https://cansguy.com/portfolio/) positions practical security writing, automation concepts, and labs in an Auckland context. This is close topical competition for regional cyber-project discovery, though not the same biography or experience.
- [Phishy.Cloud's portfolio](https://www.phishy.cloud/portfolio.html) presents cybersecurity projects, coding scripts and a student SOC-style project. Its project depth illustrates the richer technical evidence that tends to compete for broad project queries.
- [Anish Kumar Vedant's cybersecurity portfolio](https://anishvedant.github.io/Portfolio/) and [Jeffrey O's portfolio](https://jeffreyyyyo.github.io/Portfolio/) organize broader homelab/security project sets. They show how generic terms such as “cybersecurity portfolio” compete with extensive technical inventories and different experience claims.
- Public LinkedIn and credential pages also compete for branded-name and qualification searches, but are authoritative only for their own account holders.

This is a small live web-search sample, not a controlled Google SERP or a stable ranking comparison. It supplies page-type and content-depth observations only; no rankings, traffic, keyword volumes, or difficulty are inferred. A search for the shorter name “Geni Bahar” returned an unrelated individual, so the site deliberately identifies its subject as Geni Waruni Bahar / Waruni Bahar and does not attach that person's profiles or use the ambiguous shorter name as an alias. Prioritize full-name queries with Auckland/New Zealand context, verified qualifications, and specific project topics. Search Console must confirm actual impressions after deployment.

The portfolio can differentiate through the intersection of QA/API work and security checks, customer relationship experience, verified Security+ qualification, and multiple cloud/network project artifacts. Do not claim enterprise SOC tenure, production incident-response ownership, or independently verified customer outcomes unless those are added with evidence.

## Content and topical authority

The homepage already covers biography, skills, training, work history, project summaries, and contact. The PDFs and two video demonstrations provide supporting evidence and are linked from ordinary HTML anchors. No thin city pages, FAQ schema, reviews, services, prices, or artificial blog posts should be added.

Three source-checked static HTML case studies are now live in the repository and linked from the matching project cards: individual FortiGate-in-AWS, individual AWS site-to-site VPN, and a group multi-cloud WordPress security project. They identify academic/lab scope, describe only source-supported validations, and separate Geni's documented group contribution from teammates' work. The diagrams are conceptual and explicitly labeled. The primary opportunities now are to deepen other project stories only when a real report or owner-confirmed source supports them, and refine branded queries from Search Console after release. Broad generic how-to terms would require substantially more first-hand depth and should not be targeted by thin pages.

For video search, first provide a stable HTML page with an embedded, crawlable video, accurate title and description, a thumbnail/poster, and captions or transcript. The current project demo videos are linked as downloads, so adding video schema alone would not be a supported improvement.

Other content should be authored only when it adds original experience, such as a carefully documented cloud network lab or a QA-to-application-security learning note. Each article needs a clear author, date only when editorially meaningful, references for sourced technical claims, and links to relevant evidence.

## Internal linking

- Preserve the current navigation links to the seven page sections.
- Use descriptive labels for project evidence (already named by project and file type); keep raw filenames out of link text where possible.
- The three case-study pages link back to the homepage and their source reports; matching cards on the homepage provide descriptive entry points. Each page is represented in the sitemap with its canonical URL.
- Do not submit `#about`, `#skills`, or other fragments as separate sitemap URLs.

## AI search (AEO/GEO)

Keep the profile facts, professional identity, location, credentials, project descriptions, interests, and contact methods in crawlable HTML. The site already does this without requiring JavaScript execution. The structured data describes only the visible person and site. No `llms.txt` or special AI schema is required for Google AI Overviews/AI Mode; standard SEO fundamentals remain the useful approach according to [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

`OAI-SearchBot` is explicitly allowed. The general robots group also allows other crawlers, including `GPTBot`; that model-training behavior is the existing policy and was not changed. OpenAI documents these as separate controls in its [crawler guide](https://developers.openai.com/api/docs/bots). Review the host, firewall, and CDN access only if access logs or webmaster tools show blocked crawler requests.

### Phase 3 copy and entity check

The first-view copy retains the visual display name “Waruni Bahar” and the pages identify her as “Geni Waruni Bahar” in the title and person entity. It describes curiosity about cybersecurity, cloud technology and people; the biography names verified education, QA/security checks, cloud/network projects and customer/stakeholder experience. The schema uses only the well-scoped name and the shorter public name, omitting the ambiguous “Geni Bahar.” The existing LinkedIn `sameAs` is owner-provided but its endpoint and reciprocal identity link were not independently verified; the CompTIA verification link remains a visible credential destination.

Local Chrome/Lighthouse confirms all four static HTML pages render without JavaScript-generated profile or project copy. Their schema is machine-readable JSON-LD and matches on-page facts, but Google Rich Results validation and public crawler rendering have not been performed. Structured data can clarify entities but does not itself prove an entity association, ranking, or rich-result display.

### Phase 2 production state

On 25 November 2026, read-only requests found the apex HTTPS page and the live `robots.txt` and `sitemap.xml` reachable, with HTTP and `www` variants redirecting to apex HTTPS. The live HTML, crawler policy, and sitemap are still the old version. Therefore OAI-SearchBot allowance, current canonical/schema/copy, and current one-URL sitemap are locally verified in the repository but not yet verified on the public site. Search Console/Bing indexing reports and field CWV are not accessible here.

## Off-page growth

1. Keep LinkedIn profile headline, location, credentials, and current project links consistent with the portfolio.
2. Link the portfolio from appropriate public professional profiles and verified credential pages; avoid repetitive link drops.
3. Share project write-ups in relevant New Zealand security and cloud communities when they provide useful technical detail, not merely a backlink.
4. Ask former colleagues or educators for permission to list public references or co-authored work only where authentic and appropriate; do not add invented testimonials.
5. Use legitimate professional associations, alumni profiles, or event speaker pages where there is a genuine membership or contribution.
6. Avoid paid links, directory spam, automated outreach, and private link schemes.
