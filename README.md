# KANGARO TECH — Company Website

A static, multi-page marketing website for **KANGARO TECH**, an IT, software, AI and digital
marketing company operating under **CIMA Group Pty Ltd** (Adelaide, Australia), with delivery
teams based in **Sri Lanka**.

**Stack: plain HTML + Tailwind CSS + vanilla JavaScript.** No framework, no client-side router,
no build step required to run the site — every page is a real, complete `.html` file you can
open directly or upload to any host as-is.

## What This Repository Contains

The site was originally built as a React (Vite) single-page app, then rebuilt from the ground up
as a plain static site at the user's request — same design, same content, same motion/effects,
but delivered as ordinary HTML/CSS/JS with zero runtime dependencies. See `HANDBOOK.md` for the
full operating manual (deployment steps, content-editing guide, pre-launch checklist).

### Pages

| File | Page |
|---|---|
| `index.html` | Home — hero, capability marquee, trust section, services overview, CIMA Biz AI highlight, outsourcing, ready-made, why-choose-us, CTA |
| `about.html` | About KANGARO TECH — company story, values, delivery model, Team section |
| `services.html` | All 15 services + delivery process |
| `cima-biz-ai.html` | Flagship SaaS product page |
| `outsourcing.html` | IT/team outsourcing, links to Careers |
| `ready-made-solutions.html` | Ready-made website/software foundations |
| `projects.html` | Projects & Case Studies — sample concepts with expandable Challenge/Approach/Outcome detail |
| `pricing.html` | Engagement models |
| `careers.html` | Freelance/career opportunities + application form (linked from footer and Outsourcing, not the primary nav) |
| `contact.html` | Enquiry form + contact details |
| `404.html` | Not-found page |

### Compliance Notes (unchanged from the original build)

- No fabricated client names or case studies — the Projects page carries an explicit banner
  stating the listed work is representative/sample, not named client work.
- No "cheap" language — copy uses "cost-effective," "lower development cost," "efficient delivery."
- No overpromising marketing claims — copy uses "data-driven," "analytics-based,"
  "performance-focused" instead of guarantees.
- Email/phone are placeholders (`hello@kangarotech.com.au`, `+61 XXX XXX XXX`) pending real details.
- Footer includes "KANGARO TECH — Under CIMA Group Pty Ltd" as required.

## Project Structure

```
index.html, about.html, ...     The actual website — 11 complete, standalone HTML files
assets/
  css/style.css                 Compiled, minified Tailwind output (what the pages load)
  js/main.js                    All interactivity: mobile nav, scroll-reveal, counters, hero
                                 spotlight/tilt, marquee, CIMA parallax, form validation
  vendor/                       Bootstrap Icons, vendored locally (no CDN dependency)
favicon.svg, favicon-*.png,
apple-touch-icon.png,
og-image.png, manifest.webmanifest,
robots.txt, sitemap.xml,
.htaccess                        Static assets + SEO/host essentials, served from the site root

src-css/tailwind.css             Tailwind source (design tokens, component classes) — compiles
                                 to assets/css/style.css
tailwind.config.js               Brand colours, fonts, custom keyframes/animations

build/                           A small Node script that generates the 11 HTML files above from
  generate.mjs                   shared partials + per-page content modules. This is a
  partials.mjs                   *convenience tool*, not a requirement — the generated .html
  components.mjs                 files are complete and work with zero build step. Re-run it
  pages/*.mjs                    after editing a page module so the output stays in sync.
                                 See HANDBOOK.md Section 4 for the full editing workflow.
```

## How to Run Locally

No build step is required just to view the site — open `index.html` directly in a browser, or
serve the folder with any static file server:

```bash
npx http-server .        # or: python3 -m http.server, or any static server
```

## How to Rebuild (after changing styles or content)

```bash
npm install                # first time only — installs the Tailwind CLI
npm run build:css          # recompiles assets/css/style.css from src-css/tailwind.css
node build/generate.mjs    # regenerates all *.html files from the page modules in build/pages/
```

Both steps are independent: run `build:css` after touching `tailwind.config.js` or
`src-css/tailwind.css`; run `build/generate.mjs` after editing anything in `build/`. If you're
only editing plain text directly inside a generated `.html` file, neither is required — but see
HANDBOOK.md Section 4 for why editing the source modules instead is usually the better move.

## Files Touched (React → Static Migration)

- Removed entirely: `src/` (all React components/pages), `vite.config.js`, `eslint.config.js`,
  `preview/demo.html` (a separate single-page preview that's no longer needed now that the full
  site is plain HTML).
- Added: all 11 root-level `.html` files, `assets/css/style.css` (compiled), `assets/js/main.js`,
  `assets/vendor/` (Bootstrap Icons), `src-css/tailwind.css`, `tailwind.config.js`, `build/`
  (the page generator).
- Moved: `public/*` (favicons, `og-image.png`, `manifest.webmanifest`, `robots.txt`,
  `sitemap.xml`, `.htaccess`) → repository root, since `public/` was a Vite-only convention with
  no meaning for a plain static site.
- Updated: `package.json` (now just the Tailwind CLI + a couple of scripts), `sitemap.xml`
  (paths now include `.html`), `.htaccess` (SPA fallback rewrite removed — no longer needed
  since every route is a real file; replaced with a custom-404 directive and caching headers),
  `vercel.json` (SPA rewrite removed; now just enables Vercel's optional clean-URL feature).

## QA Performed

- Every page (11/11) verified in a real browser (Chromium via Playwright) with zero console
  errors and zero failed network requests, at desktop (1440px) and mobile (390px) widths.
- Verified via `file://` directly (not just a local server) — confirms the site truly needs no
  server config to function, since all asset paths are relative.
- Contact form and Careers application form both tested end-to-end: empty submission shows
  field-level validation errors; valid submission shows a success confirmation.
- Project case-study expand/collapse interaction tested (click "View Case Study" → detail
  reveals; ARIA `aria-expanded` state verified).
- Verified the header fits on one line at desktop width with all 9 nav items + CTA button (this
  broke once during the Tailwind port — the "hide tagline in header" rule and button
  `whitespace-nowrap`/`flex-shrink-0` were missing initially; both fixed and re-verified).
- Verified the mobile navigation overlay (no `position: sticky` containing-block issue this
  time, since there's no notice bar above the header in the real site).
- Verified the scroll-reveal system's 4-second safety-net fallback still works (content that
  hasn't scrolled into view is force-revealed, so nothing is ever permanently invisible).

## Remaining Recommendations

1. **Contact form backend**: both forms currently validate client-side and show a success
   confirmation, but do not send email or persist data anywhere. See HANDBOOK.md Section 2.1.
2. **Real contact details**: replace the placeholder email and phone number once confirmed.
3. **Real project case studies**: replace the sample concepts on `/projects.html` with real
   client work (with permission) as engagements are completed.
4. **Analytics & tracking**: add Google Analytics / Google Ads conversion tracking before launch.
5. **Content/legal review**: confirm ABN, company registration details, and any required
   legal/privacy pages before go-live.
6. **Final domain**: update `kangarotech.com.au` references in `build/generate.mjs`,
   `robots.txt` and `sitemap.xml` once confirmed, then rebuild (see HANDBOOK.md Section 4.7).
