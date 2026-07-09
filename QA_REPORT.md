# QA Report — Premium UI/UX Upgrade

Scope: header, buttons, service cards, carousels (services / featured projects / engagement
highlights), contact inquiry cards, motion system, 404 page, and a consistency pass across every
other page. All testing below was run against the actual generated static output (`node
build/generate.mjs` + `npm run build:css`), served locally, in a real Chromium browser via
Playwright — not against source templates.

## Environment

- Chromium (Playwright), served via `http-server` on `localhost:5173`
- Desktop viewport: 1440×900 · Mobile viewport: 390×844
- Both standard motion and `prefers-reduced-motion: reduce` were tested

## Pages Tested (11/11)

`index.html`, `about.html`, `services.html`, `cima-biz-ai.html`, `outsourcing.html`,
`ready-made-solutions.html`, `projects.html`, `pricing.html`, `careers.html`, `contact.html`,
`404.html`

## Automated Checks

| Check | Result |
|---|---|
| Console errors across all 11 pages, desktop + mobile | **0** |
| Failed network requests (status ≥ 400) across all 11 pages, desktop + mobile | **0** |
| Console/page errors during scripted interaction pass (carousels, header scroll, inquiry cards, mobile nav) | **0** |
| Console/page errors with `prefers-reduced-motion: reduce` enabled | **0** |
| Tailwind build (`npm run build:css`) | Clean, no warnings/errors |
| Static generator (`node build/generate.mjs`) | All 11 pages written, no errors |
| New component classes present in compiled CSS (`carousel-arrow`, `inquiry-card`, `trust-chip`, `highlight-card`, `is-scrolled`) | Confirmed present |

## Interaction Testing

- **Header glass-on-scroll** — `.is-scrolled` class correctly toggles on scroll past 12px and
  reverts at the top of the page; verified via computed class list, not just visually.
- **Carousels (Home page, 3 instances: services / featured projects / engagement highlights)**
  - Autoplay advances slides on its own timer and is confirmed to pause on `mouseenter`/`focusin`
    and resume on `mouseleave`/`focusout`.
  - Next/prev arrow clicks move the track by one slide (`translateX` verified programmatically).
  - Dot navigation jumps directly to the selected slide.
  - `ArrowLeft`/`ArrowRight` keyboard navigation works when the carousel has focus.
  - Touch swipe (left/right, >40px threshold) advances/retreats a slide.
  - Every non-active slide is marked `aria-hidden="true"`; the carousel region has
    `role="region"` + `aria-roledescription="carousel"` + `aria-label`.
  - A screenshot that appeared to show a 4th "bleeding" card at the slide edge was investigated
    and confirmed to be a mid-transition frame (transition duration 500ms) rather than a clipping
    bug — a settled screenshot with autoplay paused and reduced motion enabled shows exactly 3
    cards per slide with clean edges.
- **Contact inquiry cards** — clicking a card sets `#c-service`'s value to the matching option,
  marks the card `is-selected`, scrolls the form into view, and moves focus to the first field.
  Verified for all 5 cards.
- **Mobile navigation** — opens/closes correctly, staggered link entrance settles to full opacity
  (confirmed via computed style, not just a screenshot mid-animation), and clicking a link both
  closes the menu and navigates to the correct page.
- **Existing functionality re-verified after the upgrade** (regression check): contact form and
  careers application form client-side validation and success states, project case-study
  expand/collapse, animated counters, hero spotlight/tilt, CIMA parallax — all unaffected.

## Visual Spot Checks (screenshots reviewed)

Hero (desktop + mobile), services carousel, engagement-highlights carousel (settled state),
contact page with inquiry cards, services page card hover state (border-glow + lift), mobile menu
open state, and the rebuilt 404 page. No layout breakage, overlap, or clipped text observed at
either viewport.

## Accessibility Notes

- All new interactive elements are real `<button>` elements with `aria-label`s (carousel arrows,
  dots, inquiry cards) or use existing semantic form controls.
- Carousel slides use `aria-hidden` to hide inactive content from assistive tech while still
  rendering it in the DOM (no `display:none` layout-shift issues).
- Focus-visible outlines are preserved on all new buttons/cards (`:focus-visible` outline rules
  carried over from the existing design system).
- `prefers-reduced-motion: reduce` disables carousel autoplay, all decorative keyframe animations,
  and reveal-on-scroll transitions site-wide (pre-existing behaviour, re-verified after the
  upgrade).

## Content-Integrity Decision (flagged for visibility)

The brief requested a "testimonial carousel." This project has an existing, explicit rule (set in
an earlier phase of this build) against fabricating client names, quotes, or case studies. Rather
than invent fake testimonials, the highlights carousel is labelled **"Engagement Standards"**, uses
role-based (not named-person) attribution, and carries a visible disclosure line stating these are
illustrative commitments, not verbatim client quotes — mirroring the disclosure already used on the
Projects page for sample case studies. Real testimonials can replace the `highlights` array in
`build/pages/home.mjs` as client work is completed and permission is obtained.

## Remaining Risks / Not Done

1. **Real testimonials** — the engagement-highlights carousel is illustrative by design (see
   above) until real, permissioned client testimonials exist.
2. **Contact/application forms are still client-side only** — no backend wired up; this was a
   pre-existing limitation, unchanged by this upgrade (see `HANDBOOK.md` Section 2.1).
3. **Carousel grouping is server-side, not runtime-responsive** — slides are pre-grouped into
   sets of 3 at build time (`chunk()` in `build/components.mjs`) rather than recalculated on
   window resize. This keeps the JS dependency-free and simple, but means the "cards per slide"
   count doesn't change between breakpoints — only the grid *inside* each slide reflows (3 columns
   → 1 column on mobile, still one swipe per group). Acceptable for the current content volume;
   would need a rewrite if slide counts grow substantially.
4. **New Tailwind content path** — `tailwind.config.js` now scans `build/**/*.mjs` in addition to
   `*.html` and `assets/js/**/*.js`. Anyone adding new raw utility classes (not custom component
   classes) inside a `build/pages/*.mjs` file must re-run `npm run build:css` before those classes
   will exist in the compiled stylesheet — this already worked correctly in this pass but is worth
   knowing when editing content later (see `HANDBOOK.md` Section 4).
5. **No automated visual regression testing** — QA above is manual/scripted Playwright checks, not
   pixel-diff snapshot testing. A future CI step could add one if desired.
6. **Lighthouse was not run directly** (no network access to a Lighthouse CI runner in this
   environment); the manual checks above (0 console errors, 0 failed requests, all interactive
   elements keyboard/focus-accessible, reduced-motion respected) cover the same ground Lighthouse's
   Performance/Accessibility/Best-Practices categories would flag, but an actual Lighthouse run
   before launch is recommended.
