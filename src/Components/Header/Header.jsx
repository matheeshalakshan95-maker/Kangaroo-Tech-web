import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Common/Logo';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/cima-biz-ai', label: 'CIMA Biz AI' },
  { to: '/outsourcing', label: 'Outsourcing' },
  { to: '/ready-made-solutions', label: 'Ready-Made Solutions' },
  { to: '/projects', label: 'Projects' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="kt-header">
        <div className="kt-container kt-header-inner">
          <Logo />
          <nav className="kt-nav-desktop">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="kt-header-actions">
            <NavLink to="/contact" className="kt-btn kt-btn-primary desktop-only kt-btn-sm">
              Get a Free Consultation
            </NavLink>
            <button
              className="kt-menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((v) => !v)}
            >
              <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>
      </header>

      <div className={`kt-mobile-nav ${open ? 'open' : ''}`}>
        <nav>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="kt-btn kt-btn-primary kt-btn-block">
          Get a Free Consultation
        </NavLink>
      </div>
    </>
  );
};

export default Header;
