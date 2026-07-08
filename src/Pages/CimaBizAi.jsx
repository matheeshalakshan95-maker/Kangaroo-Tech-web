import { Link } from 'react-router-dom';
import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';

const capabilities = [
  { icon: 'bi-gear-wide-connected', title: 'Operations Automation', desc: 'Automate repetitive operational tasks across departments, reducing manual workload.' },
  { icon: 'bi-graph-up-arrow', title: 'AI Analytics', desc: 'Turn business data into clear, actionable insight using AI-driven analytics.' },
  { icon: 'bi-diagram-3', title: 'Workflow Management', desc: 'Design, assign and track business workflows from a single control centre.' },
  { icon: 'bi-lightbulb', title: 'Decision Support', desc: 'AI-assisted recommendations to support faster, more informed business decisions.' },
  { icon: 'bi-boxes', title: 'Modular by Design', desc: 'Configurable modules so the platform adapts to different industries and team sizes.' },
  { icon: 'bi-shield-lock', title: 'Secure SaaS Architecture', desc: 'Built on a scalable, secure multi-tenant architecture from the ground up.' },
];

const roadmap = [
  { phase: 'Phase 1', title: 'Core Platform & Workflow Engine', status: 'In Development' },
  { phase: 'Phase 2', title: 'AI Analytics & Decision Support Engine', status: 'In Development' },
  { phase: 'Phase 3', title: 'Industry-Specific Modules', status: 'Planned' },
  { phase: 'Phase 4', title: 'Public Availability', status: 'Planned' },
];

const CimaBizAi = () => {
  return (
    <>
      <Seo
        title="CIMA Biz AI | Flagship AI-Powered SaaS Platform | KANGARO TECH"
        description="CIMA Biz AI is KANGARO TECH's flagship SaaS platform, helping businesses automate operations, manage workflows and use AI analytics for better decision-making."
      />
      <PageHeader title="CIMA Biz AI" current="CIMA Biz AI" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-cima">
            <span className="kt-cima-badge"><i className="bi bi-stars"></i> Flagship Product — Currently Under Development</span>
            <h2>The Business Operating System We Are Building for Our Clients</h2>
            <p style={{ maxWidth: 720 }}>
              CIMA Biz AI is our flagship SaaS masterpiece, designed to help businesses automate
              operations, improve decision-making, manage workflows, use AI analytics and
              integrate AI into daily business systems. It is being engineered by the same team
              that delivers KANGARO TECH client projects, using the same Australian-standard
              quality process.
            </p>
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Platform Capabilities</span>
            <h2 className="kt-heading">What CIMA Biz AI Is Being Built to Do</h2>
            <p className="kt-subheading">
              A single platform to bring automation, analytics and AI-assisted decision-making
              into everyday business operations.
            </p>
          </div>
          <div className="kt-grid-3">
            {capabilities.map((c) => (
              <div className="kt-card" key={c.title}>
                <div className="kt-card-icon"><i className={`bi ${c.icon}`}></i></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-split">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>Development Roadmap</span>
              <h2 className="kt-heading">Built in Stages, Tested at Every Step</h2>
              <p style={{ color: 'var(--kt-grey-600)' }}>
                CIMA Biz AI is under active development. We are building the platform in
                structured phases so that each capability is properly engineered and tested
                before moving to the next.
              </p>
            </div>
            <div>
              {roadmap.map((r) => (
                <div className="kt-why-item" key={r.phase}>
                  <span className="kt-why-num">{r.phase}</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <h4 style={{ margin: 0 }}>{r.title}</h4>
                    <span className="kt-tag-pill" style={{ marginBottom: 0 }}>{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container text-center">
          <h2 className="kt-heading">Interested in Early Access to CIMA Biz AI?</h2>
          <p className="kt-subheading" style={{ margin: '0 auto 28px' }}>
            Register your interest and our team will keep you updated as CIMA Biz AI moves
            toward release, including opportunities to take part in early testing.
          </p>
          <Link to="/contact" className="kt-btn kt-btn-primary">
            Register Your Interest <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default CimaBizAi;
