import { Link } from 'react-router-dom';
import services from '../../Data/services';

const featured = services.filter((s) =>
  [
    'Website Design & Development',
    'Custom Software Development',
    'SaaS Application Development',
    'AI Business Automation',
    'UI/UX Design',
    'Digital Marketing',
    'IT Department Outsourcing',
  ].includes(s.title)
);

const ServicesOverview = () => {
  return (
    <section className="kt-section kt-bg-grey">
      <div className="kt-container">
        <div className="kt-section-head text-center">
          <span className="kt-eyebrow"><span className="dot"></span>What We Do</span>
          <h2 className="kt-heading">Full-Spectrum Technology &amp; Marketing Services</h2>
          <p className="kt-subheading">
            From web and software to AI automation and digital marketing, KANGARO TECH covers
            every capability an Australian business needs to grow.
          </p>
        </div>
        <div className="kt-grid-3">
          {featured.map((service) => (
            <div className="kt-card" key={service.title}>
              <div className="kt-card-icon"><i className={`bi ${service.icon}`}></i></div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 40 }}>
          <Link to="/services" className="kt-btn kt-btn-navy">
            View All 15 Services <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
