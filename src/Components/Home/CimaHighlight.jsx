import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  'AI-powered operations automation',
  'Real-time business analytics dashboards',
  'Intelligent workflow management',
  'Data-driven decision support',
  'Configurable modules for different industries',
  'Built on a scalable, secure SaaS architecture',
];

const CimaHighlight = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-26, 26]);

  return (
    <section className="kt-section" ref={sectionRef}>
      <div className="kt-container">
        <div className="kt-cima">
          <div className="kt-split">
            <div>
              <span className="kt-cima-badge"><i className="bi bi-stars"></i> Flagship Product — In Development</span>
              <h2>CIMA Biz AI: Our Flagship SaaS Platform</h2>
              <p>
                CIMA Biz AI is the flagship SaaS product being built by KANGARO TECH. It is
                designed to help businesses automate operations, improve decision-making,
                manage workflows and bring AI analytics into everyday business systems.
              </p>
              <ul className="kt-cima-features">
                {features.map((f) => (
                  <li key={f}><i className="bi bi-check-circle-fill"></i>{f}</li>
                ))}
              </ul>
              <Link to="/cima-biz-ai" className="kt-btn kt-btn-green">
                Learn More About CIMA Biz AI <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <motion.div className="kt-cima-mock" style={{ y }}>
              <div className="mock-head"><span></span><span></span><span></span></div>
              <div className="mock-row"><span>Workflow Automation</span><b>Active</b></div>
              <div className="mock-row"><span>AI Decision Engine</span><b>Processing</b></div>
              <div className="mock-row"><span>Operational Efficiency</span><b>+32%</b></div>
              <div className="mock-chart">
                <span style={{ height: '40%' }}></span>
                <span style={{ height: '65%' }}></span>
                <span style={{ height: '50%' }}></span>
                <span style={{ height: '85%' }}></span>
                <span style={{ height: '60%' }}></span>
                <span style={{ height: '95%' }}></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CimaHighlight;
