import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: 'Website Design & Development',
  message: '',
};

const services = [
  'Website Design & Development',
  'Custom Software Development',
  'SaaS Application Development',
  'AI Business Automation',
  'AI Integration for Existing Businesses',
  'UI/UX Design',
  'Full Stack Development',
  'Mobile App Development',
  'Digital Marketing',
  'Google Ads & Analytics-Based Marketing',
  'SEO',
  'IT Department Outsourcing',
  'Freelance Developer Support',
  'Business Process Automation',
  'Ready-Made Websites & Software Solutions',
  'Other / Not Sure Yet',
];

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please tell us a little about your project.';
  return errors;
};

const ContactForm = () => {
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
          Thank you, {values.name.split(' ')[0]}. Your enquiry has been recorded. Our team will
          get back to you shortly at {values.email}.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="kt-form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
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
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`kt-form-control ${errors.email ? 'error' : ''}`}
          placeholder="you@company.com"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <div className="kt-error-text">{errors.email}</div>}
      </div>

      <div className="kt-form-group">
        <label htmlFor="company">Company Name</label>
        <input
          id="company"
          name="company"
          type="text"
          className="kt-form-control"
          placeholder="Your company (optional)"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className="kt-form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="kt-form-control"
          placeholder="Your phone number (optional)"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <div className="kt-form-group">
        <label htmlFor="service">Service You&rsquo;re Interested In</label>
        <select
          id="service"
          name="service"
          className="kt-form-control"
          value={values.service}
          onChange={handleChange}
        >
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="kt-form-group">
        <label htmlFor="message">Tell Us About Your Project *</label>
        <textarea
          id="message"
          name="message"
          className={`kt-form-control ${errors.message ? 'error' : ''}`}
          placeholder="Briefly describe your business, project or requirement"
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <div className="kt-error-text">{errors.message}</div>}
      </div>

      <button type="submit" className="kt-btn kt-btn-primary kt-btn-block">
        Send Enquiry <i className="bi bi-send"></i>
      </button>
    </form>
  );
};

export default ContactForm;
