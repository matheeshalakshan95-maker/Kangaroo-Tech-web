# KANGARO TECH — Company Website

A React (Vite) marketing and lead-generation website for **KANGARO TECH**, an IT, software, AI
and digital marketing company operating under **CIMA Group Pty Ltd** (Adelaide, Australia),
with delivery teams based in **Sri Lanka**.

## What Was Changed

The repository as uploaded was an incomplete export of an IT-services React template
("solutek-react"): it contained a flat dump of ~20 component files with no `src/` folder, no
`Header`/`Footer`/`Routes`/`Pages`, broken relative imports, and image assets that were mostly
either literal placeholder graphics (e.g. grey boxes labelled `452x771`) or carried the
"SoluTek" brand baked into the PNG. It did not build.

Given that, the site was **rebuilt from the ground up** as a proper Vite + React Router
application, reusing the original dependency stack (React 18, React Router 6, Bootstrap 5,
Bootstrap Icons) but with:

- A new `src/` project structure (components, pages, layouts, routes, data).
- A custom design system (`src/assets/css/theme.css`) in the requested palette — dark navy,
  electric blue, white, light grey, with a small green accent — replacing the template's
  orange branding.
- A gradient "K" monogram logo (`LogoMark.jsx`), recreated as a scalable inline SVG to match the
  supplied logo artwork — vertical purple-to-blue gradient stroke, layered white/blue swoosh
  accent, standalone glyph (no background tile) — used in the header, footer and favicon. No
  dependency on the old raster logo, which had "SoluTek" text embedded in the image.
- All iconography via Bootstrap Icons (vector, recolourable) instead of the template's broken
  or off-brand PNG icons.
- Entirely new, original copy for every page — no template/Solutek placeholder text remains.
- A site-wide motion system (Framer Motion + a lightweight scroll-reveal hook): animated hero
  entrance, animated counters, animated gradient/blob backgrounds, page transitions on route
  change, button hover shine, and scroll-triggered card/section reveals. All motion respects
  `prefers-reduced-motion`, and reveal has a safety-net timeout so content is never permanently
  hidden if the observer doesn't fire (see QA notes below).
- A premium "agentic AI SaaS" motion layer on the Home hero, inspired by the energy of
  category-leading automation/AI platform marketing sites: a cursor-reactive spotlight glow,
  floating parallax blobs, a mouse-tilt 3D hero panel, a gradient shimmer headline, a scrolling
  capability marquee (technology/service tags — not fabricated client logos), gradient
  glow-border card hovers, and scroll-linked parallax on the CIMA Biz AI panel.

### Pages Built

| Route | Page |
|---|---|
| `/` | Home — hero, trust/value section, services overview, CIMA Biz AI highlight, outsourcing section, ready-made solutions section, why-choose-us, CTA |
| `/about` | About KANGARO TECH — company story, parent company/branch structure, values, delivery model, and a **Team** section (organised by function/location — Australia governance + Sri Lanka delivery teams — not fabricated individual staff) |
| `/services` | All 15 services with descriptions, plus delivery process |
| `/cima-biz-ai` | Flagship SaaS product page — capabilities, development roadmap, early-access CTA |
| `/outsourcing` | IT/team outsourcing options, benefits, engagement steps, plus a cross-link to `/careers` for freelancers |
| `/ready-made-solutions` | Ready-made website/software foundations, customisation process |
| `/projects` | **Projects & Case Studies** — sample project concepts with an expandable Challenge/Approach/Outcome breakdown per project (clearly labelled as illustrative — no fake client names) |
| `/pricing` | Engagement models (fixed-price, dedicated team, outsourced IT department, freelance) |
| `/careers` | **Freelance & Career Opportunities** — for Sri Lanka-based developers/designers/marketers who want to work with KANGARO TECH (distinct from `/outsourcing`, which is for clients hiring us). Opportunity types, skills sought, benefits, and an application form. Linked from the footer and the Outsourcing page rather than the primary nav, to keep the client-facing nav focused. |
| `/contact` | Validated enquiry form + company/location/contact details |
| `*` | 404 page |

### IA Decisions (Team / Case Studies / Careers)

A request to add Team, Case Studies, Freelancer Opportunities, Projects, Pricing, Outsourcing
and Ready-Made Solutions pages was scoped as follows — most already existed; the rest were
added or grouped rather than bolted on as extra top-level nav items:

- **Projects, Pricing, Outsourcing, Ready-Made Solutions** already existed as full pages.
- **Team** was added as a section on `/about` rather than a standalone page. The company is
  new/growing, so it's organised by function and location (Australia governance, Sri Lanka
  delivery) rather than individual staff — inventing named people with photos and bios would
  violate the same "no fabricated identity" principle already applied to client names.
- **Case Studies** were folded into `/projects` (retitled "Projects & Case Studies") as an
  expandable Challenge/Approach/Outcome breakdown per project, instead of a separate page
  competing for nav space with near-identical content.
- **Freelancer/Career Opportunities** is the one genuinely new page (`/careers`) — a distinct
  audience (talent, not clients) with its own application form. It's deliberately **not** in
  the primary nav (which was already at 9 items and tuned to fit on one line at desktop width)
  — it's linked from the footer and from a callout on the Outsourcing page instead, so the
  client-facing nav stays focused.

### Compliance Notes

- No fabricated client names or case studies. The Projects page carries an explicit banner
  stating the listed work is representative/sample, not named client work.
- No "cheap" language — copy consistently uses "cost-effective," "lower development cost,"
  and "efficient delivery."
- No overpromising marketing claims (e.g. no "100% accurate" language) — marketing copy uses
  "data-driven," "analytics-based," and "performance-focused" instead.
- Email/phone on the Contact page and in the footer are the requested placeholders
  (`hello@kangarotech.com.au`, `+61 XXX XXX XXX`) pending real details.
- Footer includes "KANGARO TECH — Under CIMA Group Pty Ltd" as required.

## Project Structure

```
src/
  assets/css/theme.css        Design system (colours, typography, components, motion/keyframes)
  hooks/useScrollReveal.js    Site-wide scroll-reveal (IntersectionObserver + fallback timeout)
  Components/
    Header/Header.jsx         Sticky nav with mobile menu overlay
    Footer/Footer.jsx
    Common/                   Logo, LogoMark (SVG monogram), Seo, PageHeader, CtaSection,
                               AnimatedCounter
    Home/                     Home-page-only sections (Hero, TrustSection, etc.)
    Contact/ContactForm.jsx   Validated enquiry form
  Data/                       services.js, projects.js (content data)
  Layouts/Main.jsx            Header + animated <Outlet/> (page transitions) + Footer
  Pages/                      One file per route
  Routes/Routes.jsx           React Router route table

preview/demo.html              Self-contained static HTML/CSS/JS preview (see below)
```

## Static HTML Demo (No Build Required)

`preview/demo.html` is a **self-contained, single-file** preview of the new logo and motion
system — open it directly in any browser (double-click, or `open preview/demo.html`). It needs
no `npm install`, no dev server, and makes no external network requests (fonts, icons and the
logo are all inline SVG/CSS). It's a condensed single-page version of the Home page design for
quick visual sign-off; the live React app is the full, multi-page, production site.

## How to Run Locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

## How to Build

```bash
npm run build
```

Output is written to `dist/`. Verified locally with `npm run preview` after building.

Also available:

```bash
npm run lint      # ESLint — currently passes with 0 errors/warnings
npm run preview   # Serve the production build locally
```

## Files Touched

Effectively the entire codebase, since the original upload had no working `src/` tree. Key
files:

- `package.json`, `vite.config.js`, `eslint.config.js`, `index.html`, `.gitignore` — project
  configuration (the original `vite.config.js` and `eslint.config.js` had been accidentally
  deleted along with template `.js`/`.css`/`.jsx` cleanup; both were restored/recreated).
- `src/main.jsx`, `src/Routes/Routes.jsx`, `src/Layouts/Main.jsx`
- `src/Components/**` — Header, Footer, and all reusable section/common components
- `src/Pages/**` — Home, About, Services, CimaBizAi, Outsourcing, ReadyMadeSolutions, Projects,
  Pricing, Contact, NotFound
- `src/Data/services.js`, `src/Data/projects.js`
- `src/assets/css/theme.css`
- `src/Components/Common/LogoMark.jsx`, `src/Components/Common/AnimatedCounter.jsx`,
  `src/hooks/useScrollReveal.js` — new logo, animated counters, scroll-reveal motion
- `public/favicon.svg` — regenerated to match the new gradient K-monogram
- `preview/demo.html` — new standalone static preview
- Removed: all root-level template files (`*.jsx`, `*.png`, `*.css`, `bootstrap.min2.js`,
  `jquery-2.1.4.min2.js`, `other.js`, `custom.js`) that were either broken, off-brand, or
  superseded by the new `src/` structure.

## QA Performed

- `npm install` and `npm run build` both succeed with no errors.
- `npm run lint` passes with 0 errors/warnings.
- Verified in a real browser (Chromium via Playwright) at desktop (1440px), tablet (768px) and
  mobile (390px) widths across every page: layout, header navigation (including the mobile
  slide-in menu), and footer all render correctly.
- Contact form tested end-to-end: empty submission shows field-level validation errors;
  valid submission shows a success confirmation.
- Verified client-side routing (React Router) serves the SPA correctly on direct navigation
  and on unknown routes (404 page).
- Verified the new mobile navigation overlay renders correctly (a `position: sticky` header
  turned out to establish a containing block for `position: fixed` descendants in Chromium,
  which was collapsing the mobile menu to zero height — fixed by moving the mobile nav to be a
  sibling of the header rather than a child).
- Verified the scroll-reveal system with a fallback: since it's `IntersectionObserver`-driven,
  content could theoretically stay invisible if the observer never fires (e.g. some automated
  renderers). A 4-second safety-net timeout force-reveals anything not yet visible, so no
  content is ever permanently hidden regardless of environment.
- Verified the new logo glyph: the vertical stroke of the "K" has zero geometric bounding-box
  width, and an SVG gradient using the default `objectBoundingBox` units resolves per-element,
  not per-group — so Chromium silently failed to paint that one stroke (the K rendered as a
  checkmark, missing its stem). Fixed by switching the gradient to `userSpaceOnUse` coordinates
  shared across all three strokes.
- `preview/demo.html` verified separately in a real browser: no console errors, animations,
  scroll reveal and the mobile nav overlay all confirmed working.

## Code Audit & Production-Readiness Pass

A full audit was done across the codebase (bugs, accessibility, SEO, security, dead code). Real
issues found and fixed:

- **Accessibility — button contrast:** `.kt-btn-green` used white text on a light green
  background (2.4:1 contrast — fails WCAG AA). Fixed by darkening the green token
  (`--kt-green: #159c5f`, chosen so it also clears the 3:1 non-text minimum for the small
  checkmark icons that reuse it) and switching button text to navy (4.86–7.15:1 depending on
  state).
- **Accessibility — focus states:** `.kt-form-control:focus` removed the default outline with no
  replacement. Added a visible focus ring (`box-shadow`) on form fields, and explicit
  `:focus-visible` outlines on nav links, buttons and the mobile menu toggle.
- **Missing `mailto:`/`tel:` links:** the email and phone number in the footer and on the
  Contact page were plain text — not clickable/tappable. Fixed.
- **No SEO/production essentials:** the site had no `robots.txt`, `sitemap.xml`, Open Graph/
  Twitter meta tags, canonical URLs, or structured data — all added. `Seo.jsx` now also updates
  canonical/OG/Twitter tags per route, not just the title/description.
- **No SPA hosting fallback config:** without one, every route except `/` returns a 404 on most
  static hosts. Added `public/_redirects` (Netlify), `public/.htaccess` (Apache/cPanel), and
  `vercel.json` (Vercel) — verified all three survive the `npm run build` output.
- **Favicon/social preview gaps:** added PNG favicon fallbacks (16×16, 32×32), an
  `apple-touch-icon.png`, a `manifest.webmanifest`, and a branded `og-image.png` (1200×630) for
  link previews on social platforms.

See `HANDBOOK.md` for the full pre-launch checklist (what still needs a human decision — real
contact details, the contact form's backend, final domain, etc.), deployment instructions per
host, and a guide to making everyday content changes.

## Remaining Recommendations

1. **Contact form backend**: the form currently validates client-side and shows a success
   confirmation, but does not send email or persist data anywhere (no backend was in scope).
   Before launch, wire it to a real endpoint (e.g. an email API, a serverless function, or a
   form service) so enquiries actually reach the team.
2. **Real contact details**: replace the placeholder email and phone number once confirmed.
3. **Real project case studies**: replace the sample project concepts on `/projects` with real
   client work (with permission) as engagements are completed.
4. **Analytics & tracking**: add Google Analytics / Google Ads conversion tracking once
   accounts are set up, particularly given the Google Ads & analytics-based marketing service.
5. **Content/legal review**: have an Australian stakeholder confirm company registration
   details, ABN (if applicable), and any required legal/privacy pages before go-live.
6. **Custom domain fonts**: the site currently uses a system font stack for reliability and
   performance; consider licensing a brand typeface if a more distinctive look is wanted.
7. **Images**: the site is intentionally built with CSS/SVG visuals rather than stock photos.
   Consider commissioning real photography (team, office, workflow) once available.
