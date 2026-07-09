import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  skillArea: 'Software Development',
  portfolio: '',
  message: '',
};

const skillAreas = [
  'Software Development',
  'Front-End / UI Development',
  'AI & Automation Engineering',
  'UI/UX Design',
  'Mobile App Development',
  'Quality Assurance',
  'Digital Marketing / SEO',
  'Project Coordination',
  'Other',
];

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please tell us a little about your experience.';
  return errors;
};

const ApplicationForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="kt-form-success">
        <i className="bi bi-check-circle-fill" style={{ fontSize: 20 }}></i>
        <span>
          Thank you, {values.name.split(' ')[0]}. Your application has been recorded. Our team
          will review it and get back to you at {values.email} if there is a suitable
          opportunity.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="kt-form-group">
        <label htmlFor="app-name">Full Name *</label>
        <input
          id="app-name"
          name="name"
          type="text"
          className={`kt-form-control ${errors.name ? 'error' : ''}`}
          placeholder="Your full name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <div className="kt-error-text">{errors.name}</div>}
      </div>

      <div className="kt-form-group">
        <label htmlFor="app-email">Email Address *</label>
        <input
          id="app-email"
          name="email"
          type="email"
          className={`kt-form-control ${errors.email ? 'error' : ''}`}
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <div className="kt-error-text">{errors.email}</div>}
      </div>

      <div className="kt-form-group">
        <label htmlFor="app-phone">Phone Number</label>
        <input
          id="app-phone"
          name="phone"
          type="tel"
          className="kt-form-control"
          placeholder="Your phone number (optional)"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <div className="kt-form-group">
        <label htmlFor="app-skill">Area of Expertise</label>
        <select
          id="app-skill"
          name="skillArea"
          className="kt-form-control"
          value={values.skillArea}
          onChange={handleChange}
        >
          {skillAreas.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="kt-form-group">
        <label htmlFor="app-portfolio">Portfolio / LinkedIn / GitHub Link</label>
        <input
          id="app-portfolio"
          name="portfolio"
          type="url"
          className="kt-form-control"
          placeholder="https://... (optional)"
          value={values.portfolio}
          onChange={handleChange}
        />
      </div>

      <div className="kt-form-group">
        <label htmlFor="app-message">Tell Us About Your Experience *</label>
        <textarea
          id="app-message"
          name="message"
          className={`kt-form-control ${errors.message ? 'error' : ''}`}
          placeholder="Briefly describe your skills, experience and availability"
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <div className="kt-error-text">{errors.message}</div>}
      </div>

      <button type="submit" className="kt-btn kt-btn-primary kt-btn-block">
        Submit Application <i className="bi bi-send"></i>
      </button>
    </form>
  );
};

export default ApplicationForm;
