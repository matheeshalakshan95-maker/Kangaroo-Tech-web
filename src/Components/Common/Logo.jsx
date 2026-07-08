import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';

const Logo = ({ light = false, showTagline = false, markSize = 38 }) => {
  return (
    <Link to="/" className="kt-logo" style={light ? { color: '#fff' } : undefined}>
      <LogoMark size={markSize} animated />
      <span className="kt-logo-word">
        <span className="kt-logo-name">
          Kangaro<span className="accent">Tech</span>
        </span>
        {showTagline && (
          <span className="kt-logo-tagline">IT, Website &amp; Web Solutions</span>
        )}
        {!showTagline && <span className="sub">Under CIMA Group Pty Ltd</span>}
      </span>
    </Link>
  );
};

export default Logo;
