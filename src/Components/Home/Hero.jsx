import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="kt-hero kt-bg-navy">
      <div className="kt-hero-grid"></div>
      <div className="kt-container">
        <div className="kt-split">
          <div>
            <span className="kt-hero-eyebrow">
              <span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#1fbf75', display: 'inline-block' }}></span>
              Australia &bull; Sri Lanka Technology Partnership
            </span>
            <h1>
              Build Smarter Digital Solutions with <span>KANGARO TECH</span>
            </h1>
            <p className="lead">
              Australian-standard software, AI, SaaS, web development and digital marketing
              powered by expert Sri Lankan technology teams.
            </p>
            <div className="kt-hero-actions">
              <Link to="/contact" className="kt-btn kt-btn-primary">
                Get a Free Consultation <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/services" className="kt-btn kt-btn-outline">
                Explore Our Services
              </Link>
            </div>
            <div className="kt-hero-stats">
              <div className="stat">
                <h3>2</h3>
                <span>Countries, one delivery standard</span>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <span>Core service lines</span>
              </div>
              <div className="stat">
                <h3>AI-Ready</h3>
                <span>Built for automation from day one</span>
              </div>
            </div>
          </div>

          <div className="kt-hero-panel">
            <div className="row-line">
              <span className="label">Project Delivery Standard</span>
              <span className="value">Australian Business Grade</span>
            </div>
            <div className="row-line">
              <span className="label">Engineering Team</span>
              <span className="value">Sri Lankan Technology Experts</span>
            </div>
            <div className="row-line">
              <span className="label">Flagship Product</span>
              <span className="value">CIMA Biz AI (In Development)</span>
            </div>
            <div style={{ marginTop: 18 }}>
              <div className="row-line" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <span className="label">Development Cost Efficiency</span>
                <span className="value">High</span>
              </div>
              <div className="bar"><span style={{ width: '88%' }}></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
