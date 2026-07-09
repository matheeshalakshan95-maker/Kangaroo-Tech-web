import home from './home.mjs';
import about from './about.mjs';
import services from './services.mjs';
import cima from './cima.mjs';
import outsourcing from './outsourcing.mjs';
import readymade from './readymade.mjs';
import projects from './projects.mjs';
import pricing from './pricing.mjs';
import careers from './careers.mjs';
import contact from './contact.mjs';
import notfound from './notfound.mjs';

const jsonLd = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KANGARO TECH",
  "url": "https://kangarotech.com.au/",
  "logo": "https://kangarotech.com.au/apple-touch-icon.png",
  "description": "Australian-standard websites, software, SaaS platforms and AI-integrated systems, delivered by expert Sri Lankan technology teams under CIMA Group Pty Ltd.",
  "parentOrganization": { "@type": "Organization", "name": "CIMA Group Pty Ltd" },
  "address": { "@type": "PostalAddress", "addressLocality": "Adelaide", "addressRegion": "South Australia", "addressCountry": "AU" },
  "email": "hello@kangarotech.com.au"
}
</script>`;

home.jsonLd = jsonLd;

export const pages = [home, about, services, cima, outsourcing, readymade, projects, pricing, careers, contact, notfound];
