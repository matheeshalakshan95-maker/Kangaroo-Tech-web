import { pageHeader, sectionHead, ctaPanel } from '../components.mjs';

const projects = [
  {
    title: 'Retail E-Commerce Platform', category: 'Website & Software Development', icon: 'bi-cart3',
    desc: 'A concept online store build showing product catalogue, cart and checkout flow for a retail business.',
    tags: ['React', 'E-Commerce', 'UI/UX'], color: 'linear-gradient(135deg, #0a1a3c, #0b5fff)',
    challenge: 'Retail businesses often need an online store that feels fast and trustworthy without a long, expensive build.',
    approach: 'A modular catalogue, cart and checkout flow designed for quick customisation, built on a component library that can be re-skinned per brand.',
    outcome: 'A launch-ready e-commerce foundation that can go from brief to live store in weeks rather than months.',
  },
  {
    title: 'Healthcare Booking & Patient Management', category: 'SaaS Application Development', icon: 'bi-heart-pulse',
    desc: 'A sample SaaS concept for appointment booking and patient record management for clinics.',
    tags: ['SaaS', 'Booking System', 'Dashboard'], color: 'linear-gradient(135deg, #0d2150, #159c5f)',
    challenge: 'Clinics need appointment booking and basic patient records without paying for an enterprise system.',
    approach: 'A multi-tenant SaaS structure separating booking, patient records and staff scheduling into clear, secure modules.',
    outcome: 'A right-sized system a small clinic could adopt immediately, with room to add features as the practice grows.',
  },
  {
    title: 'Logistics Operations Dashboard', category: 'AI Business Automation', icon: 'bi-truck',
    desc: 'A concept dashboard applying AI analytics and automation to logistics and fleet operations.',
    tags: ['AI Analytics', 'Automation', 'Dashboard'], color: 'linear-gradient(135deg, #122a63, #4c8cff)',
    challenge: 'Logistics teams often track fleet and delivery performance across disconnected spreadsheets.',
    approach: 'A single operations dashboard applying automation and analytics to consolidate delivery, fleet and cost data.',
    outcome: 'A concept that shows how AI Business Automation, applied to a real workflow, replaces manual reporting.',
  },
  {
    title: 'Hospitality Booking Mobile App', category: 'Mobile App Development', icon: 'bi-phone',
    desc: 'A sample mobile app concept for restaurant and accommodation bookings.',
    tags: ['Mobile App', 'iOS & Android', 'Bookings'], color: 'linear-gradient(135deg, #0a1a3c, #159c5f)',
    challenge: 'Hospitality businesses need a booking experience customers trust enough to complete on a phone.',
    approach: 'A streamlined native-quality mobile flow from browse to booking confirmation, connected to existing reservation systems.',
    outcome: 'A concept mobile app illustrating how we approach customer-facing booking experiences end to end.',
  },
  {
    title: 'Professional Services Website', category: 'Website Design & UI/UX', icon: 'bi-briefcase',
    desc: 'A corporate website concept built for a professional services firm targeting Australian clients.',
    tags: ['Website Design', 'SEO', 'Branding'], color: 'linear-gradient(135deg, #0b5fff, #0a1a3c)',
    challenge: 'Professional services firms need a website that signals credibility to Australian business clients.',
    approach: 'A clean corporate design system with SEO-structured content and clear service and contact pathways.',
    outcome: 'A concept demonstrating the standard of design and structure we apply to every corporate website build.',
  },
  {
    title: 'Real Estate Listing Platform', category: 'Full Stack Development', icon: 'bi-houses',
    desc: 'A concept listing platform with search, filtering and enquiry management for real estate agencies.',
    tags: ['Full Stack', 'Search & Filters', 'CRM'], color: 'linear-gradient(135deg, #0d2150, #4c8cff)',
    challenge: 'Real estate agencies need fast property search and a way to manage enquiries without juggling separate tools.',
    approach: 'A full-stack build pairing a fast search/filter front end with an integrated enquiry and listing management back end.',
    outcome: 'A concept showing how we connect a public-facing search experience to a practical internal CRM workflow.',
  },
];

const projectCard = (p) => `
<div class="project-card reveal">
  <div class="project-thumb" style="background:${p.color};">
    <span class="tag">Sample Concept</span>
    <i class="bi ${p.icon}"></i>
    <button type="button" class="project-overlay" aria-expanded="false">
      <span>View Case Study</span><i class="bi bi-plus-lg"></i>
    </button>
  </div>
  <div class="project-body">
    <span class="tag-pill">${p.category}</span>
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
    <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div>
    <div class="case-study hidden">
      <div><span class="case-label">Challenge</span><p>${p.challenge}</p></div>
      <div><span class="case-label">Approach</span><p>${p.approach}</p></div>
      <div><span class="case-label">Outcome</span><p>${p.outcome}</p></div>
    </div>
  </div>
</div>`;

const body = `
${pageHeader('Projects & Case Studies', 'Projects')}

<section class="section">
  <div class="container-site">
    <div class="sample-note">
      <i class="bi bi-info-circle-fill"></i>
      <span>KANGARO TECH is a growing technology partner. The case studies below are sample concepts illustrating how we approach real problems, and do not represent named clients. Real client case studies will be added here as engagements are completed.</span>
    </div>

    ${sectionHead({ eyebrow: 'Representative Work', heading: 'The Kind of Projects We Build', sub: 'From e-commerce and booking platforms to AI-driven dashboards, these concepts reflect the range of solutions our team is equipped to deliver. Select a project to see the challenge, our approach and the outcome.' })}

    <div class="grid-3">
      ${projects.map(projectCard).join('\n      ')}
    </div>
  </div>
</section>

${ctaPanel({
  title: 'Have a Project in Mind?',
  text: 'Tell us what you are looking to build and we will show you how KANGARO TECH can deliver it.',
  primaryLabel: 'Start a Project',
})}
`;

export default {
  file: 'projects.html',
  active: 'projects',
  title: 'Projects & Case Studies | KANGARO TECH',
  description: "Representative project concepts and case-study breakdowns showing how KANGARO TECH approaches websites, software, SaaS and AI automation work for Australian businesses.",
  body,
};
