import { Link } from 'react-router-dom';
import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';

const models = [
  {
    title: 'Fixed-Price Project',
    note: 'Best for clearly defined websites, software or app builds',
    features: [
      'Agreed scope, timeline and deliverables',
      'Single, predictable project cost',
      'Ideal for websites, apps and defined features',
      'Structured milestones and sign-off',
    ],
  },
  {
    title: 'Dedicated Team / Staff Augmentation',
    note: 'Best for ongoing product or platform development',
    featured: true,
    features: [
      'Developers, designers or QA working exclusively for you',
      'Scales up or down as your roadmap changes',
      'Direct communication with your dedicated team',
      'Ideal for SaaS products and long-term platforms',
    ],
  },
  {
    title: 'Outsourced IT Department',
    note: 'Best for businesses replacing or extending an internal IT function',
    features: [
      'End-to-end technology support under one team',
      'Development, support, infrastructure and reporting',
      'Australian-based account management',
      'Predictable monthly engagement',
    ],
  },
  {
    title: 'Hourly / Freelance Support',
    note: 'Best for short-term tasks or specialist skill gaps',
    features: [
      'Pay only for the hours you need',
      'Quick access to specific technical skills',
      'No long-term commitment required',
      'Ideal for fixes, enhancements and overflow work',
    ],
  },
];

const factors = [
  { icon: 'bi-rulers', title: 'Project Scope', desc: 'The size and complexity of the features you need built.' },
  { icon: 'bi-clock-history', title: 'Timeline', desc: 'Standard delivery versus accelerated timelines.' },
  { icon: 'bi-people', title: 'Team Size', desc: 'Number of developers, designers or specialists required.' },
  { icon: 'bi-arrow-repeat', title: 'Ongoing Support', desc: 'Whether the engagement includes long-term maintenance.' },
];

const Pricing = () => {
  return (
    <>
      <Seo
        title="Pricing & Engagement Models | KANGARO TECH"
        description="Explore KANGARO TECH's engagement models — fixed-price projects, dedicated teams, outsourced IT departments and freelance support — with cost-effective delivery from Sri Lanka."
      />
      <PageHeader title="Pricing & Engagement Models" current="Pricing" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Flexible Engagement</span>
            <h2 className="kt-heading">An Engagement Model to Fit Your Project</h2>
            <p className="kt-subheading">
              Every business has different needs. We structure engagements around your project
              rather than forcing a single pricing template — all delivered at a lower
              development cost through our Sri Lanka-based team.
            </p>
          </div>

          <div className="kt-grid-4">
            {models.map((m) => (
              <div className={`kt-price-card ${m.featured ? 'featured' : ''}`} key={m.title}>
                {m.featured && <span className="badge-pop">Most Flexible</span>}
                <h3>{m.title}</h3>
                <p className="price-note">{m.note}</p>
                <ul className="kt-list-check">
                  {m.features.map((f) => (
                    <li key={f}><i className="bi bi-check-circle-fill"></i>{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="kt-btn kt-btn-navy kt-btn-block" style={{ marginTop: 20 }}>
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>How Cost Is Determined</span>
            <h2 className="kt-heading">What Affects Your Project Cost</h2>
            <p className="kt-subheading">
              We provide a detailed, transparent quote after understanding your requirements —
              no generic price lists, no hidden fees.
            </p>
          </div>
          <div className="kt-grid-4">
            {factors.map((f) => (
              <div className="kt-card kt-card-compact" key={f.title}>
                <div className="kt-card-icon"><i className={`bi ${f.icon}`}></i></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Get a Transparent, Obligation-Free Quote"
        text="Tell us about your project and we will recommend the right engagement model and a clear cost estimate."
        primaryLabel="Request a Quote"
      />
    </>
  );
};

export default Pricing;
