import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCounter from '../Common/AnimatedCounter';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 0.84, 0.44, 1] } },
};

const Hero = () => {
  return (
    <section className="kt-hero kt-bg-navy">
      <div className="kt-hero-grid"></div>
      <div className="kt-container">
        <div className="kt-split">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span variants={item} className="kt-hero-eyebrow">
              <span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#1fbf75', display: 'inline-block' }}></span>
              Australia &bull; Sri Lanka Technology Partnership
            </motion.span>
            <motion.h1 variants={item}>
              Build Smarter Digital Solutions with <span>KANGARO TECH</span>
            </motion.h1>
            <motion.p variants={item} className="lead">
              Australian-standard software, AI, SaaS, web development and digital marketing
              powered by expert Sri Lankan technology teams.
            </motion.p>
            <motion.div variants={item} className="kt-hero-actions">
              <Link to="/contact" className="kt-btn kt-btn-primary">
                Get a Free Consultation <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/services" className="kt-btn kt-btn-outline">
                Explore Our Services
              </Link>
            </motion.div>
            <motion.div variants={item} className="kt-hero-stats">
              <div className="stat">
                <AnimatedCounter value={2} />
                <span>Countries, one delivery standard</span>
              </div>
              <div className="stat">
                <AnimatedCounter value={15} suffix="+" />
                <span>Core service lines</span>
              </div>
              <div className="stat">
                <h3>AI-Ready</h3>
                <span>Built for automation from day one</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="kt-hero-panel"
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 0.84, 0.44, 1] }}
          >
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
              <div className="bar">
                <motion.span
                  initial={{ width: '0%' }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
                ></motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
