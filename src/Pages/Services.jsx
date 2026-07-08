import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';
import services from '../Data/services';

const process = [
  { step: '01', title: 'Discovery & Scoping', desc: 'We understand your business goals, requirements and constraints before writing a proposal.' },
  { step: '02', title: 'Planning & Design', desc: 'Clear project plans, UI/UX design and technical architecture, agreed before development starts.' },
  { step: '03', title: 'Development & QA', desc: 'Sri Lankan engineering teams build and test against Australian quality standards.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy, monitor and provide ongoing support as your business scales.' },
];

const Services = () => {
  return (
    <>
      <Seo
        title="Our Services | Web, Software, SaaS, AI & Marketing | KANGARO TECH"
        description="Explore KANGARO TECH's full range of services: website and software development, SaaS, AI automation, UI/UX design, digital marketing, SEO and IT outsourcing."
      />
      <PageHeader title="Our Services" current="Services" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>15 Core Service Lines</span>
            <h2 className="kt-heading">Everything Your Business Needs From One Technology Partner</h2>
            <p className="kt-subheading">
              We support Australian businesses across the full technology and digital marketing
              lifecycle — from a first website through to AI-integrated SaaS platforms.
            </p>
          </div>
          <div className="kt-grid-3">
            {services.map((service) => (
              <div className="kt-card" key={service.title}>
                <div className="kt-card-icon"><i className={`bi ${service.icon}`}></i></div>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Our Process</span>
            <h2 className="kt-heading">A Structured, Transparent Delivery Process</h2>
            <p className="kt-subheading">
              Every engagement follows the same disciplined process, regardless of project size.
            </p>
          </div>
          <div className="kt-grid-4">
            {process.map((p) => (
              <div className="kt-card kt-card-compact" key={p.step}>
                <div className="kt-why-num" style={{ fontSize: 24, marginBottom: 10 }}>{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default Services;
