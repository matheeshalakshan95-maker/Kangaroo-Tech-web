import { Link } from 'react-router-dom';
import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';

const options = [
  { icon: 'bi-diagram-3-fill', title: 'Full IT Department Outsourcing', desc: 'Hand over your entire technology function — development, support, infrastructure and reporting — to a dedicated team managed under Australian oversight.' },
  { icon: 'bi-code-slash', title: 'Dedicated Development Team', desc: 'A ring-fenced team of developers working exclusively on your product or platform, functioning as an extension of your business.' },
  { icon: 'bi-palette2', title: 'Dedicated Design Team', desc: 'Ongoing UI/UX and brand design support for businesses that need consistent design output across products and campaigns.' },
  { icon: 'bi-megaphone-fill', title: 'Marketing Team Support', desc: 'Outsource campaign planning, SEO and analytics-based marketing execution to a team that works to your targets.' },
  { icon: 'bi-person-workspace', title: 'Freelance Developer Support', desc: 'Bring in vetted individual developers for short-term projects, overflow work or specialist skill gaps.' },
  { icon: 'bi-clipboard-data', title: 'Business Process Automation Support', desc: 'A dedicated resource to continuously identify and automate manual processes as your business evolves.' },
];

const benefits = [
  'Lower operating cost than hiring locally in Australia',
  'Access to a full range of technical and creative skill sets',
  'Australian-based communication and account management',
  'Flexible scaling up or down based on project demand',
  'No recruitment, onboarding or HR overhead',
  'Consistent quality control across every engagement',
];

const steps = [
  { step: '01', title: 'Requirement Review', desc: 'We assess your current IT setup, team structure or gaps.' },
  { step: '02', title: 'Team Proposal', desc: 'We recommend the right outsourcing model and team composition.' },
  { step: '03', title: 'Onboarding', desc: 'Your dedicated team is onboarded to your tools, systems and processes.' },
  { step: '04', title: 'Ongoing Delivery', desc: 'The team operates as part of your business, with regular reporting.' },
];

const Outsourcing = () => {
  return (
    <>
      <Seo
        title="IT Outsourcing to Sri Lanka | KANGARO TECH"
        description="Outsource your IT department, development team, design team or marketing support to KANGARO TECH — Australian business standards, Sri Lankan expert delivery."
      />
      <PageHeader title="IT & Team Outsourcing" current="Outsourcing" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Outsourcing Solutions</span>
            <h2 className="kt-heading">Outsource as Much or as Little as You Need</h2>
            <p className="kt-subheading">
              Whether you need a single developer or a complete IT department, KANGARO TECH
              provides Sri Lankan expert teams managed to Australian business standards.
            </p>
          </div>
          <div className="kt-grid-3">
            {options.map((o) => (
              <div className="kt-card" key={o.title}>
                <div className="kt-card-icon"><i className={`bi ${o.icon}`}></i></div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-split reverse">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>Why Outsource to Us</span>
              <h2 className="kt-heading">A Lower-Cost Alternative to Local Hiring</h2>
              <p style={{ color: 'var(--kt-grey-600)' }}>
                Building an internal team in Australia is expensive and slow. Outsourcing to
                KANGARO TECH gives you the same accountability and quality with a more
                cost-effective delivery structure.
              </p>
              <ul className="kt-list-check">
                {benefits.map((b) => (
                  <li key={b}><i className="bi bi-check-circle-fill"></i>{b}</li>
                ))}
              </ul>
            </div>
            <div className="kt-media-frame">
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-cash-stack"></i></div>
                  <div><h5>Lower Cost Base</h5><p>Efficient delivery from Sri Lanka</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-chat-dots"></i></div>
                  <div><h5>Australian Communication</h5><p>Clear reporting, familiar business hours overlap</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-arrow-repeat"></i></div>
                  <div><h5>Flexible Scaling</h5><p>Grow or reduce your team as needs change</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>How It Works</span>
            <h2 className="kt-heading">Getting Started Is Straightforward</h2>
          </div>
          <div className="kt-grid-4">
            {steps.map((s) => (
              <div className="kt-card kt-card-compact" key={s.step}>
                <div className="kt-why-num" style={{ fontSize: 24, marginBottom: 10 }}>{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section-sm">
        <div className="kt-container">
          <div className="kt-sample-note" style={{ marginBottom: 0 }}>
            <i className="bi bi-person-workspace"></i>
            <span>
              Are you a Sri Lanka-based developer, designer or marketer? See our{' '}
              <Link to="/careers" style={{ fontWeight: 700, color: 'var(--kt-blue)' }}>
                freelance and career opportunities
              </Link>{' '}
              to join our delivery network.
            </span>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Reduce Your IT Overheads Without Reducing Quality?"
        text="Talk to us about outsourcing your development, design or marketing team to KANGARO TECH."
      />
    </>
  );
};

export default Outsourcing;
