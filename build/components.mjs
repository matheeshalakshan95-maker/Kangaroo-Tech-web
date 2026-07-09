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
        <a href="${primaryHref}" class="btn btn-green">${primaryLabel}</a>
        <a href="${secondaryHref}" class="btn btn-outline">${secondaryLabel}</a>
      </div>
    </div>
  </div>
</section>`;

export const checkIcon = () => '<i class="bi bi-check-circle-fill"></i>';
