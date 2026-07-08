import { Link } from 'react-router-dom';

const PageHeader = ({ title, current }) => {
  return (
    <div className="kt-pageheader">
      <div className="kt-container">
        <h1>{title}</h1>
        <div className="kt-breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" style={{ fontSize: 11 }}></i>
          <span>{current}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
