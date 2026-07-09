import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact KANGARO TECH | Get a Free Consultation"
        description="Contact KANGARO TECH, under CIMA Group Pty Ltd, based in Adelaide, Australia and Sri Lanka, for a free consultation on your website, software or AI project."
      />
      <PageHeader title="Contact Us" current="Contact" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-split">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>Get In Touch</span>
              <h2 className="kt-heading">Let&rsquo;s Talk About Your Project</h2>
              <p style={{ color: 'var(--kt-grey-600)', marginBottom: 32 }}>
                Tell us about your business and what you are looking to build. A member of our
                team will respond with next steps and, where useful, a free initial consultation.
              </p>

              <div className="kt-card kt-card-compact" style={{ marginBottom: 16 }}>
                <div className="tile-row" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div className="kt-card-icon" style={{ marginBottom: 0 }}><i className="bi bi-envelope"></i></div>
                  <div>
                    <h4 style={{ marginBottom: 2 }}>Email</h4>
                    <p style={{ margin: 0 }}><a href="mailto:hello@kangarotech.com.au" style={{ color: 'inherit' }}>hello@kangarotech.com.au</a></p>
                  </div>
                </div>
              </div>

              <div className="kt-card kt-card-compact" style={{ marginBottom: 16 }}>
                <div className="tile-row" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div className="kt-card-icon" style={{ marginBottom: 0 }}><i className="bi bi-telephone"></i></div>
                  <div>
                    <h4 style={{ marginBottom: 2 }}>Phone</h4>
                    <p style={{ margin: 0 }}><a href="tel:+61XXXXXXXXX" style={{ color: 'inherit' }}>+61 XXX XXX XXX</a></p>
                  </div>
                </div>
              </div>

              <div className="kt-card kt-card-compact" style={{ marginBottom: 16 }}>
                <div className="tile-row" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div className="kt-card-icon" style={{ marginBottom: 0 }}><i className="bi bi-geo-alt"></i></div>
                  <div>
                    <h4 style={{ marginBottom: 2 }}>Australia</h4>
                    <p style={{ margin: 0 }}>Adelaide, South Australia — Under CIMA Group Pty Ltd</p>
                  </div>
                </div>
              </div>

              <div className="kt-card kt-card-compact">
                <div className="tile-row" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div className="kt-card-icon" style={{ marginBottom: 0 }}><i className="bi bi-geo-alt-fill"></i></div>
                  <div>
                    <h4 style={{ marginBottom: 2 }}>Sri Lanka</h4>
                    <p style={{ margin: 0 }}>Delivery &amp; engineering team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="kt-card" style={{ padding: '36px 32px' }}>
              <h3 style={{ marginBottom: 22 }}>Send Us an Enquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
