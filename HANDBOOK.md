# KANGARO TECH Website — Handbook

This is the operating manual for the KANGARO TECH website: what it is, what still needs a human
decision before it goes live, how to deploy it, and how to make everyday content changes. It
assumes no prior familiarity with the project.

For a full technical changelog of what was built, see `README.md`. This document is the
practical "how do I actually use this" guide.

---

## 1. What This Is

A React (Vite) marketing website for KANGARO TECH, built as a set of static files. There is no
server-side code, no database, and no user accounts — every page is pre-built HTML/CSS/JS that
runs entirely in the visitor's browser. That makes it cheap and simple to host (see Section 3),
but it also means the contact and application forms don't currently send anywhere (see Section 2).

**Pages:** Home, About (incl. Team), Services, CIMA Biz AI, Outsourcing, Ready-Made Solutions,
Projects & Case Studies, Pricing, Careers, Contact, plus a 404 page.

---

## 2. Before You Launch — Action Checklist

These are things a human needs to decide or provide. Nothing below will break the site if left
as-is, but the site is **not ready for real customers** until the starred items are resolved.

| # | Item | Where | Why it matters |
|---|---|---|---|
| ★ | Real email address | `src/Components/Footer/Footer.jsx`, `src/Pages/Contact.jsx` | Currently `hello@kangarotech.com.au` — a placeholder. Confirm this inbox exists and is monitored. |
| ★ | Real phone number | Same two files | Currently `+61 XXX XXX XXX`. Replace the digits in both the **visible text** and the `tel:` link (see Section 4.3). |
| ★ | Contact form backend | `src/Components/Contact/ContactForm.jsx`, `src/Components/Careers/ApplicationForm.jsx` | Forms currently validate and show a "thank you" message but **do not send an email or save anywhere**. Wire them to a real service before launch — see Section 2.1. |
| ★ | Final domain name | `index.html`, `public/robots.txt`, `public/sitemap.xml` | These currently reference `https://kangarotech.com.au/` as a placeholder. Once the real domain is confirmed, do a find-and-replace (Section 4.7). |
|   | Social media links | `src/Components/Footer/Footer.jsx` (LinkedIn/Facebook/Instagram icons) | Currently link to `#` (nowhere). Replace with real profile URLs once they exist, or remove the icons. |
|   | ABN / business registration details | Not currently on the site | Consider whether Australian consumer law requires this to be displayed (footer or Contact page). Confirm with an advisor. |
|   | Analytics (Google Analytics / Ads) | Not currently installed | Add before launch if you want to measure traffic or run the Google Ads service you're advertising. |
|   | Real project/case study content | `src/Data/projects.js` | Current entries are clearly-labelled sample concepts, not real client work. Replace with real case studies as they become available (with client permission). |
|   | Privacy Policy / Terms | Not currently a page | Not built — add if legally required for your form data collection. |

### 2.1 Fixing the contact/application forms (most important item)

Right now, submitting either form just shows a success message in the browser — **no email is
sent, nothing is saved.** You have three realistic options, roughly cheapest/fastest to most
capable:

1. **Form service (fastest, no code)** — sign up for a service like Formspree, Web3Forms, or
   similar. They give you a URL to `fetch()` the form data to, and email you the submissions.
   Takes under an hour to wire up.
2. **Serverless function** — if you host on Vercel or Netlify, add a small function that
   receives the form POST and sends an email (e.g. via Resend, SendGrid, or AWS SES).
3. **Full backend** — build a small API (Node/Express, etc.) if you want to store submissions
   in a database as well as email them. Overkill unless you need that.

Whichever you choose, the code change is the same shape in both `ContactForm.jsx` and
`ApplicationForm.jsx`: inside `handleSubmit`, after validation passes, add a `fetch()` call to
your chosen endpoint before (or instead of) calling `setSubmitted(true)`.

---

## 3. Deploying the Site

### 3.1 The quick way — static hosting package

A ready-to-upload build was provided alongside this handbook:
**`kangaro-tech-website-hosting-package.zip`**

1. Unzip it. You'll get a flat folder of files (`index.html`, an `assets/` folder, some icons,
   `robots.txt`, etc.) — this is the entire website.
2. Upload the **contents** of that folder (not the folder itself) to your web host's public
   root (often called `public_html`, `www`, or similar in cPanel-style hosting).
3. Done. The `.htaccess` file included handles routing automatically on Apache-based hosting
   (most shared hosting/cPanel). The `_redirects` file does the same thing automatically if you
   use Netlify instead.

**Why routing matters:** this is a "single-page app" — there's really only one `index.html`,
and JavaScript changes the page content when you click "About," "Services," etc. without a full
reload. If someone bookmarks `yoursite.com/about` and opens it directly (or refreshes the page),
the web server needs to be told "serve `index.html` for that too." The `.htaccess` and
`_redirects` files already do this for you — just make sure they're actually uploaded (some FTP
clients hide dotfiles like `.htaccess` by default; check "show hidden files").

### 3.2 Netlify (recommended if you don't already have hosting)

1. Create a free Netlify account.
2. Drag the unzipped folder from Section 3.1 onto the Netlify dashboard ("deploy manually"), **or**
   connect your GitHub repo and let Netlify build it automatically (`npm run build`, publish
   directory `dist`).
3. Netlify auto-detects `_redirects` — no extra config needed.
4. Add your custom domain under Site Settings → Domain Management, and Netlify handles SSL
   (HTTPS) automatically for free.

### 3.3 Vercel

1. Connect the GitHub repo at vercel.com.
2. Build command: `npm run build`. Output directory: `dist`.
3. `vercel.json` (already in the repo root) handles SPA routing automatically.
4. Add your custom domain under Project Settings → Domains.

### 3.4 Traditional shared hosting / cPanel

Follow Section 3.1. Make sure `.htaccess` is uploaded and that `mod_rewrite` is enabled on your
hosting plan (it is on virtually all standard cPanel hosts).

### 3.5 After deploying

- Visit the live site and click through every page — don't just check the homepage.
- Test on a phone, not just desktop.
- Submit both forms yourself to confirm whatever backend you wired up (Section 2.1) actually
  works.
- Once the real domain is live, update `public/robots.txt` and `public/sitemap.xml` and
  `index.html` with the real URL (see Section 4.7), then redeploy.
- Submit the sitemap to Google Search Console so Google finds all pages quickly.

---

## 4. Making Content Changes

You'll need Node.js installed (v18+) and basic comfort editing code to make changes yourself —
or hand this section to a developer. All commands below run from the project's root folder.

```bash
npm install       # first time only
npm run dev        # starts a local preview at http://localhost:5173 with live reload
npm run build       # produces the final files in dist/, ready to upload
npm run lint       # checks the code for mistakes
```

### 4.1 Updating text on an existing page

Every page lives in `src/Pages/`, named after the page (`Home.jsx`, `About.jsx`,
`Services.jsx`, etc.). Page text is usually plain, readable strings inside the JSX — search for
the sentence you want to change and edit it directly. Section headings use the pattern:

```jsx
<span className="kt-eyebrow">...small label...</span>
<h2 className="kt-heading">...main heading...</h2>
<p className="kt-subheading">...supporting sentence...</p>
```

### 4.2 Adding or editing a Service

Open `src/Data/services.js`. Each service is one object in the array:

```js
{
  icon: 'bi-window-stack',      // any Bootstrap Icons name — browse at icons.getbootstrap.com
  title: 'Website Design & Development',
  summary: 'One-line summary shown on the Home page cards.',
  detail: 'Longer sentence shown on the /services page.',
},
```

Add a new object in the same shape to add a service, or edit an existing one. It will
automatically appear on both the Home page (if it's one of the 7 featured — see
`src/Components/Home/ServicesOverview.jsx`) and the full `/services` page.

### 4.3 Updating contact details (email / phone)

Two places need the same change, since they're independent hardcoded strings, not shared data:

- `src/Components/Footer/Footer.jsx` — appears on every page.
- `src/Pages/Contact.jsx` — the Contact page cards.

For phone numbers specifically, update **two** things per location: the number people *see*
(e.g. `+61 8 1234 5678`) and the `tel:` link right next to it, which needs the number with no
spaces and a leading `+` (e.g. `tel:+61812345678`) so tapping it dials correctly on mobile.

### 4.4 Adding a Project / Case Study

Open `src/Data/projects.js`. Each project is one object:

```js
{
  title: 'Retail E-Commerce Platform',
  category: 'Website & Software Development',
  icon: 'bi-cart3',
  desc: 'Short one-line description shown on the card.',
  tags: ['React', 'E-Commerce', 'UI/UX'],
  color: 'linear-gradient(135deg, #0a1a3c, #0b5fff)',   // card banner colour
  challenge: 'What problem the project solved.',
  approach: 'How it was approached.',
  outcome: 'What the result was.',
}
```

**Important:** if you replace a sample concept with a *real* client project, remove the "Sample
Concept" framing — search `src/Pages/Projects.jsx` for `Sample Concept` (appears as a badge on
each card) and the disclaimer banner near the top of the page, and update or remove them once
real case studies are in place.

### 4.5 Changing colours / branding

All colours are defined once, at the top of `src/assets/css/theme.css`, as CSS variables:

```css
:root {
  --kt-navy: #0a1a3c;
  --kt-purple: #7c3aed;
  --kt-blue: #0b5fff;
  --kt-green: #159c5f;
  ...
}
```

Changing a value here updates it everywhere that variable is used across the entire site — you
generally shouldn't need to touch colours anywhere else.

### 4.6 Changing the logo

The logo is code, not an image file (`src/Components/Common/LogoMark.jsx`), so it stays crisp at
any size. To adjust its colours, edit the `<linearGradient>` stop colours inside that file. If
you ever replace it with a different design entirely, you'll also want to update
`public/favicon.svg` (and regenerate `favicon-16x16.png`, `favicon-32x32.png`,
`apple-touch-icon.png`, and `public/og-image.png` — a designer or developer can do this from the
new SVG).

### 4.7 Updating the domain name everywhere

Once your final domain is confirmed, replace every instance of `kangarotech.com.au` with your
real domain in:

- `index.html` (canonical link, Open Graph/Twitter tags, JSON-LD structured data)
- `public/robots.txt`
- `public/sitemap.xml`

Then rebuild (`npm run build`) and redeploy.

### 4.8 Adding a new page

1. Create `src/Pages/YourPage.jsx` — copy an existing simple page (e.g. `Pricing.jsx`) as a
   starting template.
2. Register the route in `src/Routes/Routes.jsx` (add a `{ path: 'your-page', element:
   <YourPage /> }` line).
3. Add a link to it somewhere — typically `src/Components/Header/Header.jsx` (main nav) and/or
   `src/Components/Footer/Footer.jsx`.
4. Add it to `public/sitemap.xml` so search engines find it.

---

## 5. Site Map

| Page | Route | Notes |
|---|---|---|
| Home | `/` | Hero, trust section, services overview, CIMA Biz AI highlight, outsourcing, ready-made, why-choose-us, CTA |
| About | `/about` | Company story, values, delivery model, Team section |
| Services | `/services` | All 15 services + delivery process |
| CIMA Biz AI | `/cima-biz-ai` | Flagship product page |
| Outsourcing | `/outsourcing` | IT/team outsourcing, links to Careers for freelancers |
| Ready-Made Solutions | `/ready-made-solutions` | Pre-built foundations |
| Projects & Case Studies | `/projects` | Sample project concepts with expandable case-study detail |
| Pricing | `/pricing` | Engagement models |
| Careers | `/careers` | Freelance/career opportunities + application form (not in main nav — linked from footer and Outsourcing) |
| Contact | `/contact` | Enquiry form + contact details |
| 404 | any unmatched URL | "Page Not Found" |

There's also a **static, single-file preview** at `preview/demo.html` in the repo — useful for
quickly showing someone the design/motion without running the full app. It's a condensed
one-page version of the Home page design, not the full site.

---

## 6. Known Limitations

- **Client-side only:** since this is a static React app with no server, every visitor's
  browser has to download and run the JavaScript to render pages. This is fine for a marketing
  site of this size, but be aware search engines occasionally index client-rendered pages more
  slowly than fully server-rendered ones. If SEO becomes a priority, a future migration to a
  framework with server-side rendering (e.g. Next.js) is the natural next step — not required
  now.
- **404s return HTTP 200:** because a single `index.html` is served for every URL (Section 3.1),
  a genuinely broken link technically returns a "200 OK" status with the 404 page's *content*,
  rather than a real HTTP 404 status. This is a standard limitation of single-page apps on
  static hosting and isn't worth solving unless broken-link SEO becomes a measurable issue.
- **No CMS:** all content is in code (`src/Data/*.js` and the page files). There's no
  admin panel for a non-technical person to edit text without a developer. If frequent content
  updates by non-developers become a priority, consider migrating content into a headless CMS
  (Sanity, Contentful, etc.) in a future iteration.

---

## 7. Troubleshooting

**"npm run build" fails** — run `npm install` first to make sure dependencies are installed;
delete the `node_modules` folder and `package-lock.json` and reinstall if that doesn't help.

**Site loads at the root domain but every other page 404s** — the SPA fallback isn't configured
on your host. Revisit Section 3.1; confirm `.htaccess` (Apache) or `_redirects` (Netlify)
actually uploaded, and that `mod_rewrite` is enabled if using Apache.

**Blank white page after deploying** — open the browser console (F12) and look for a red error.
The most common cause is a missing or misconfigured hosting rewrite rule (see above); the
second most common is deploying to a *sub-folder* (e.g. `example.com/site/`) without setting
Vite's `base` option in `vite.config.js` to match.

**Logo or icons look broken** — confirm the whole `dist`/zip contents were uploaded, including
the `favicon.svg`, `.png` icon files, and the `assets/` folder — not just `index.html`.

**Contact form "works" but you never receive anything** — expected until Section 2.1 is done;
it currently only shows an on-screen confirmation, it doesn't send anywhere yet.

---

## 8. Where This Handbook Lives

This file (`HANDBOOK.md`) is version-controlled alongside the code, so it stays up to date as
the site evolves. If you make structural changes (new pages, new data files, a new backend for
the forms), please update the relevant section here too.
