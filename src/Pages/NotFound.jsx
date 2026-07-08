import { Link } from 'react-router-dom';
import Seo from '../Components/Common/Seo';

const NotFound = () => {
  return (
    <div className="kt-section text-center">
      <Seo title="Page Not Found | KANGARO TECH" description="The page you are looking for could not be found." />
      <div className="kt-container">
        <h1 className="kt-heading">404 — Page Not Found</h1>
        <p className="kt-subheading" style={{ margin: '0 auto 28px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="kt-btn kt-btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
