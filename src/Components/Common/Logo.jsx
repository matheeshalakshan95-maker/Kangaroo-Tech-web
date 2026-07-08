import { Link } from 'react-router-dom';

const Logo = ({ light = false }) => {
  return (
    <Link to="/" className="kt-logo" style={light ? { color: '#fff' } : undefined}>
      <span className="mark">KT</span>
      <span>
        KANGARO TECH
        <span className="sub">Under CIMA Group Pty Ltd</span>
      </span>
    </Link>
  );
};

export default Logo;
