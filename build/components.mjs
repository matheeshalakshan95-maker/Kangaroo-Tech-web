export const pageHeader = (title, current) => `
<section class="page-header">
  <div class="container-site">
    <h1>${title}</h1>
    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="bi bi-chevron-right" style="font-size:11px;"></i>
      <span>${current}</span>
    </div>
  </div>
</section>`;

export const sectionHead = ({ eyebrow, heading, sub, center = true, dark = false }) => `
<div class="section-head${center ? ' center' : ''}">
  <span class="eyebrow${dark ? ' eyebrow-dark' : ''}"><span class="dot"></span>${eyebrow}</span>
  <h2 class="heading">${heading}</h2>
  ${sub ? `<p class="subheading${center ? ' mx-auto' : ''}">${sub}</p>` : ''}
</div>`;

export const ctaPanel = ({
  title = 'No Need to Worry About Your Web, Software or AI Solution',
  text = 'KANGARO TECH can handle everything professionally — from strategy and design through to development, AI integration and ongoing support.',
  primaryLabel = 'Get a Free Consultation',
  primaryHref = 'contact.html',
  secondaryLabel = 'View Our Services',
  secondaryHref = 'services.html',
} = {}) => `
<section class="section">
  <div class="container-site">
    <div class="cta-panel reveal">
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="cta-actions">
        <a href="${primaryHref}" class="btn btn-green">${primaryLabel} <i class="bi bi-arrow-right"></i></a>
        <a href="${secondaryHref}" class="btn btn-glass">${secondaryLabel}</a>
      </div>
    </div>
  </div>
</section>`;

export const checkIcon = () => '<i class="bi bi-check-circle-fill"></i>';

/* ---------- Array chunking (used to group items into carousel slides) ---------- */
export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

/* ---------- Generic accessible carousel ---------- */
export const carousel = ({ ariaLabel, autoplay = 6000, onDark = false, slidesHtml }) => `
<div class="carousel${onDark ? ' on-dark' : ''}" data-carousel data-autoplay="${autoplay}" role="region" aria-roledescription="carousel" aria-label="${ariaLabel}">
  <div class="carousel-viewport">
    <div class="carousel-track" data-carousel-track>
      ${slidesHtml.map((html) => `<div class="carousel-slide" data-carousel-slide>${html}</div>`).join('\n      ')}
    </div>
  </div>
  <div class="carousel-controls">
    <button type="button" class="carousel-arrow" data-carousel-prev aria-label="Previous slide"><i class="bi bi-arrow-left"></i></button>
    <div class="carousel-dots" data-carousel-dots></div>
    <button type="button" class="carousel-arrow" data-carousel-next aria-label="Next slide"><i class="bi bi-arrow-right"></i></button>
  </div>
</div>`;

/* ---------- Service card with hover "learn more" link ---------- */
export const serviceCard = (icon, title, desc, { linkHref = 'services.html', linkLabel = 'Learn more' } = {}) => `
<div class="card reveal">
  <div class="card-icon"><i class="bi ${icon}"></i></div>
  <h3>${title}</h3>
  <p>${desc}</p>
  <a href="${linkHref}" class="card-link">${linkLabel} <i class="bi bi-arrow-right"></i></a>
</div>`;
