# KANGARO TECH Website — Handbook

This is the operating manual for the KANGARO TECH website: what it is, what still needs a human
decision before it goes live, how to deploy it, and how to make everyday content changes. It
assumes no prior familiarity with the project.

For a technical changelog of what was built, see `README.md`. This document is the practical
"how do I actually use this" guide.

---

## 1. What This Is

A plain **HTML + CSS + JavaScript** website — no framework, no build step, no server-side code,
no database. Every page (`index.html`, `about.html`, etc.) is a complete, self-contained file
that works the moment you open it. That makes it about as simple as a website can be to host,
but it also means the contact and application forms don't currently send anywhere (Section 2).

**Pages:** Home, About (incl. Team), Services, CIMA Biz AI, Outsourcing, Ready-Made Solutions,
Projects & Case Studies, Pricing, Careers, Contact, plus a 404 page — 11 files in total, all at
the root of the project.

A small convenience tool (the `build/` folder) *generated* these HTML files from shared
templates, so the header, footer and design system stay consistent across all 11 pages. You
never have to touch it to run or host the site — it only matters if you want to make content
changes the "recommended" way (Section 4).

---

## 2. Before You Launch — Action Checklist

These are things a human needs to decide or provide. Nothing below will break the site if left
as-is, but the site is **not ready for real customers** until the starred items are resolved.

| # | Item | Where | Why it matters |
|---|---|---|---|
| ★ | Real email address | `careers.html`, `contact.html`, and every page's footer | Currently `hello@kangarotech.com.au` — a placeholder. Confirm this inbox exists and is monitored. |
| ★ | Real phone number | Same files | Currently `+61 XXX XXX XXX`. Update both the visible text and the `tel:` link (Section 4.3). |
| ★ | Contact form backend | `contact.html`, `careers.html`, `assets/js/main.js` | Forms currently validate and show a "thank you" message but **do not send an email or save anywhere**. Wire them to a real service before launch — see Section 2.1. |
| ★ | Final domain name | `build/generate.mjs`, `robots.txt`, `sitemap.xml` | These reference `kangarotech.com.au` as a placeholder. Update once confirmed (Section 4.7). |
|   | Social media links | Every page's footer (LinkedIn/Facebook/Instagram icons) | Currently link to `#` (nowhere). Replace with real profile URLs once they exist, or remove the icons. |
|   | ABN / business registration details | Not currently on the site | Consider whether Australian consumer law requires this to be displayed. Confirm with an advisor. |
|   | Analytics (Google Analytics / Ads) | Not currently installed | Add before launch if you want to measure traffic or run the Google Ads service you're advertising. |
|   | Real project/case study content | `build/pages/projects.mjs` | Current entries are clearly-labelled sample concepts, not real client work. |
|   | Privacy Policy / Terms | Not currently a page | Add if legally required for your form data collection. |

### 2.1 Fixing the contact/application forms (most important item)

Right now, submitting either form just shows a success message in the browser — **no email is
sent, nothing is saved.** Three realistic options, cheapest/fastest to most capable:

1. **Form service (fastest, no code)** — sign up for something like Formspree or Web3Forms. They
   give you a URL to send the form data to, and email you the submissions. Under an hour to
   wire up.
2. **Serverless function** — if you later move to Vercel or Netlify hosting, add a small function
   that receives the form POST and sends an email (Resend, SendGrid, AWS SES).
3. **Full backend** — a small API if you also want to store submissions in a database.

The code change happens in `assets/js/main.js`, inside the `initForm` function: after
validation passes (where it currently just replaces the form with a success message), add a
`fetch()` call to your chosen endpoint first.

---

## 3. Deploying the Site

This is a genuinely simple deployment — there is no routing configuration to get right, because
every page is a real file at a real path. Upload the folder; it works.

### 3.1 Any static host (the general case)

1. Take the entire project folder (or the hosting zip provided alongside this handbook).
2. Upload everything to your host's public root (often called `public_html`, `www`, or similar
   in cPanel-style hosting) — the `.html` files, `assets/`, the favicon/icon files, `robots.txt`,
   `sitemap.xml`, and `.htaccess`.
3. Done. Visiting `yoursite.com/` shows the homepage, `yoursite.com/about.html` shows the About
   page, and so on — no special server configuration required.
4. The included `.htaccess` (used automatically on Apache/cPanel hosting) gives you a proper
   custom 404 page and sensible caching headers. It's optional — the site works without it — but
   worth keeping.

### 3.2 Netlify

1. Create a free Netlify account.
2. Drag the project folder onto the dashboard ("deploy manually"), or connect the GitHub repo
   (no build command needed — publish directory is the repository root).
3. Add your custom domain under Site Settings → Domain Management; SSL is automatic and free.

### 3.3 Vercel

1. Connect the GitHub repo at vercel.com, or drag-and-drop the folder.
2. No build command needed.
3. `vercel.json` (in the repo root) enables Vercel's clean-URL feature, so `yoursite.com/about`
   works without the `.html` — this is optional and Vercel-specific; every link on the site still
   uses the `.html` filenames underneath, which is what makes the site portable to *any* host.
4. Add your custom domain under Project Settings → Domains.

### 3.4 After deploying

- Click through every page on the live site — not just the homepage.
- Test on a phone, not just desktop.
- Submit both forms yourself to confirm whatever backend you wired up (Section 2.1) works.
- Once the real domain is live, update `robots.txt`, `sitemap.xml` and the `SITE_URL` constant
  in `build/generate.mjs` (Section 4.7), then regenerate and redeploy.
- Submit the sitemap to Google Search Console so Google finds all pages quickly.

---

## 4. Making Content Changes

There are two ways to edit content, and it's worth understanding the trade-off up front:

- **Edit the `.html` file directly.** Works immediately, no tooling required. The catch: if
  someone later re-runs the generator (below) without also updating the matching source module,
  your direct edit gets overwritten.
- **Edit the source module in `build/pages/`, then regenerate.** Slightly more setup (Node.js +
  one command), but the change is captured permanently and won't be lost. **This is the
  recommended path for anything more than a quick typo fix.**

For a one-off typo, editing the `.html` directly is completely fine. For anything you want to
stick — a new service, updated pricing, a new team function — use the source module.

```bash
npm install                # first time only
node build/generate.mjs    # regenerates all 11 .html files from build/pages/*.mjs
npm run build:css          # only needed if you changed colours/styles (Section 4.5)
```

### 4.1 Updating text on an existing page

Open the matching file in `build/pages/` (e.g. `about.mjs` for the About page). Content is
plain JavaScript strings and arrays — search for the sentence you want to change and edit it
directly, then regenerate. (Or, for a quick one-off fix, just edit the `.html` file itself —
see the trade-off above.)

### 4.2 Adding or editing a Service

Open `build/pages/services.mjs` (the Home page's featured services live in `build/pages/home.mjs`
as a separate, shorter list). Each service is one array entry:

```js
['bi-window-stack', 'Website Design & Development', 'Longer description sentence shown on the /services page.'],
```

The first value is any Bootstrap Icons name (browse them at icons.getbootstrap.com — the vendored
copy in `assets/vendor/` already includes the full set, no internet connection needed).

### 4.3 Updating contact details (email / phone)

The email and phone appear in `build/partials.mjs` (the footer, shared by every page) and in
`build/pages/contact.mjs` (the Contact page's cards) — update both, then regenerate.

For phone numbers, update **two** things per location: the number people *see* (e.g.
`+61 8 1234 5678`) and the `tel:` link next to it, which needs no spaces and a leading `+`
(e.g. `tel:+61812345678`) so tapping it dials correctly on mobile.

### 4.4 Adding a Project / Case Study

Open `build/pages/projects.mjs`. Each project is one object with a title, category, icon,
description, tags, banner colour, and a Challenge/Approach/Outcome breakdown — copy the shape of
an existing entry.

> **Important:** if you replace a sample concept with a real client project, also update the
> "Sample Concept" badge and the disclaimer banner near the top of the page in the same file —
> search for `Sample Concept` — once real case studies are in place.

### 4.5 Changing colours / branding

Brand colours are defined in `tailwind.config.js` and referenced throughout `src-css/tailwind.css`:

```js
colors: {
  navy: { DEFAULT: '#0a1a3c', 700: '#122a63' },
  purple: { DEFAULT: '#7c3aed' },
  blue: { DEFAULT: '#0b5fff' },
  green: { DEFAULT: '#159c5f' },
}
```

After changing a value, run `npm run build:css` to recompile `assets/css/style.css` — this step
is required; unlike the HTML, the CSS file is *only* ever produced by this build, so editing it
by hand will be lost the next time anyone runs the build.

### 4.6 Changing the logo

The logo is inline SVG code (in `build/partials.mjs`, the `logoMark` function and
`favicon.svg`), not an image file, so it stays crisp at any size. To adjust its colours, edit the
gradient stop colours in both places. If you replace the design entirely, also regenerate
`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` and `og-image.png` from the new
artwork (a designer or developer can do this).

### 4.7 Updating the domain name everywhere

Once your final domain is confirmed, update:

- `build/generate.mjs` — change the `SITE_URL` constant near the top, then run
  `node build/generate.mjs` to regenerate every page's canonical/Open Graph tags.
- `robots.txt` — update the `Sitemap:` line.
- `sitemap.xml` — update every `<loc>` URL.

### 4.8 Adding a new page

1. Create `build/pages/yourpage.mjs`, modelled on an existing simple page (e.g. `pricing.mjs`).
   Export an object with `file`, `active`, `title`, `description`, and `body`.
2. Import and add it to the `pages` array in `build/pages/index.mjs`.
3. Add a nav entry in `build/partials.mjs` (`NAV_ITEMS`) if it should appear in the main menu, or
   just link to it from elsewhere (like Careers does) if not.
4. Add it to `sitemap.xml`.
5. Run `node build/generate.mjs`.

---

## 5. Site Map

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, capability marquee, trust section, services, CIMA Biz AI highlight, outsourcing, ready-made, why-choose-us, CTA |
| About | `about.html` | Company story, values, delivery model, Team section |
| Services | `services.html` | All 16 services + delivery process |
| CIMA Biz AI | `cima-biz-ai.html` | Flagship product page |
| Outsourcing | `outsourcing.html` | IT/team outsourcing, links to Careers |
| Ready-Made Solutions | `ready-made-solutions.html` | Pre-built foundations |
| Projects & Case Studies | `projects.html` | Sample project concepts with expandable case-study detail |
| Pricing | `pricing.html` | Engagement models |
| Careers | `careers.html` | Freelance/career opportunities + application form (not in main nav — linked from footer and Outsourcing) |
| Contact | `contact.html` | Enquiry form + contact details |
| 404 | `404.html` | Not-found page |

---

## 6. Known Limitations

### No CMS
All content lives in `build/pages/*.js` (or the generated `.html` directly). There's no admin
panel for a non-technical person to edit text without some comfort in a code editor. If frequent
non-developer content updates become a priority, consider a headless CMS (Sanity, Contentful) in
a future iteration — though for a site this size, that's likely unnecessary complexity.

### Two ways to edit means two things can drift
Because you *can* edit the generated `.html` directly (Section 4), it's possible for a page to
diverge from its source module in `build/pages/`. If you're working with a developer, agree on
one approach (editing the source and regenerating is the safer default) to avoid confusion.

### No automated tests or linting
There's no test suite or linter configured. For a marketing site of this size that's a
reasonable trade-off for simplicity, but worth knowing if the site grows significantly more
complex in the future.

---

## 7. Troubleshooting

**A content change isn't showing up** — if you edited a file in `build/pages/`, you need to run
`node build/generate.mjs` afterward; editing the source module alone doesn't touch the `.html`
files. If you edited `tailwind.config.js` or `src-css/tailwind.css`, run `npm run build:css`.

**`npm run build:css` fails** — run `npm install` first to make sure the Tailwind CLI is
installed; delete `node_modules` and `package-lock.json` and reinstall if that doesn't help.

**Site loads but looks unstyled (no colours/layout)** — `assets/css/style.css` didn't upload, or
the page can't reach it. Confirm the `assets/` folder (with `css/`, `js/` and `vendor/`
subfolders) was uploaded alongside the `.html` files, in the same directory.

**Logo or icons look broken** — confirm `favicon.svg`, the `.png` icon files, and the `assets/`
folder were all uploaded — not just the `.html` files.

**Contact form "works" but you never receive anything** — expected until Section 2.1 is done; it
currently only shows an on-screen confirmation, it doesn't send anywhere yet.

**I want a routes-without-`.html` look on a host other than Vercel** — most hosts support this
with a small server config change (Apache: `MultiViews` + `RemoveHandler`; Nginx: a `try_files`
rule appending `.html`). Not set up by default here, since it adds a server-specific dependency
that the "just upload and it works everywhere" approach deliberately avoids. Ask a developer if
you want this.

---

## 8. Where This Handbook Lives

This file (`HANDBOOK.md`) is version-controlled alongside the code, so it stays up to date as
the site evolves. If you make structural changes (new pages, a new form backend, a different
build tool), please update the relevant section here too.
