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
- A text + monogram logo and an SVG favicon (no dependency on the old raster logo, which had
  "SoluTek" text embedded in the image).
- All iconography via Bootstrap Icons (vector, recolourable) instead of the template's broken
  or off-brand PNG icons.
- Entirely new, original copy for every page — no template/Solutek placeholder text remains.

### Pages Built

| Route | Page |
|---|---|
| `/` | Home — hero, trust/value section, services overview, CIMA Biz AI highlight, outsourcing section, ready-made solutions section, why-choose-us, CTA |
| `/about` | About KANGARO TECH — company story, parent company/branch structure, values, delivery model |
| `/services` | All 15 services with descriptions, plus delivery process |
| `/cima-biz-ai` | Flagship SaaS product page — capabilities, development roadmap, early-access CTA |
| `/outsourcing` | IT/team outsourcing options, benefits, engagement steps |
| `/ready-made-solutions` | Ready-made website/software foundations, customisation process |
| `/projects` | Sample project concepts (clearly labelled as illustrative — no fake client names) |
| `/pricing` | Engagement models (fixed-price, dedicated team, outsourced IT department, freelance) |
| `/contact` | Validated enquiry form + company/location/contact details |
| `*` | 404 page |

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
  assets/css/theme.css        Design system (colours, typography, components)
  Components/
    Header/Header.jsx         Sticky nav with mobile menu overlay
    Footer/Footer.jsx
    Common/                   Logo, Seo (per-page title/meta), PageHeader, CtaSection
    Home/                     Home-page-only sections (Hero, TrustSection, etc.)
    Contact/ContactForm.jsx   Validated enquiry form
  Data/                       services.js, projects.js (content data)
  Layouts/Main.jsx            Header + <Outlet/> + Footer
  Pages/                      One file per route
  Routes/Routes.jsx           React Router route table
```

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
- `public/favicon.svg`
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
