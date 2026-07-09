import { Link } from 'react-router-dom';
import Logo from '../Common/Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="kt-footer">
      <div className="kt-container">
        <div className="kt-footer-grid">
          <div>
            <Logo light />
            <p>
              Australian-standard websites, software, SaaS platforms and AI-integrated systems,
              delivered by expert Sri Lankan technology teams under CIMA Group Pty Ltd.
            </p>
            <div className="kt-footer-social">
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/cima-biz-ai">CIMA Biz AI</Link></li>
              <li><Link to="/projects">Projects &amp; Case Studies</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/careers">Freelance &amp; Careers</Link></li>
            </ul>
          </div>

          <div>
            <h5>Solutions</h5>
            <ul>
              <li><Link to="/outsourcing">IT Outsourcing</Link></li>
              <li><Link to="/ready-made-solutions">Ready-Made Solutions</Link></li>
              <li><Link to="/services">AI Business Automation</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5>Get in Touch</h5>
            <ul className="kt-footer-contact">
              <li><i className="bi bi-envelope"></i><span>hello@kangarotech.com.au</span></li>
              <li><i className="bi bi-telephone"></i><span>+61 XXX XXX XXX</span></li>
              <li><i className="bi bi-geo-alt"></i><span>Adelaide, South Australia, Australia</span></li>
              <li><i className="bi bi-geo-alt"></i><span>Colombo, Sri Lanka</span></li>
            </ul>
          </div>
        </div>

        <div className="kt-footer-bottom">
          <span>&copy; {year} KANGARO TECH — Under CIMA Group Pty Ltd. All rights reserved.</span>
          <span>Adelaide, Australia &bull; Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
