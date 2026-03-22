import { useState } from 'react'
import {
  Phone, Mail, MapPin, MessageCircle, Clock,
  Send, CheckCircle2, ArrowRight
} from 'lucide-react'
import { submitEnquiry, openMailtoFallback } from '../services/formService'
import styles from './Contact.module.css'

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '07442 527146',
    link: 'tel:07442527146',
    desc: 'Mon–Sat, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@apexelec.uk',
    link: 'mailto:info@apexelec.uk',
    desc: 'We reply within 24 hours',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+44 7887 702726',
    link: 'https://wa.me/447887702726',
    desc: 'Quick responses guaranteed',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'United Kingdom',
    link: 'https://share.google/Ifq4CGxM6PL3vBuuX',
    desc: 'Covering across the UK',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', serviceType: '',
    postcode: '', preferredDate: '', message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    const result = await submitEnquiry(form)

    if (result.success) {
      setStatus('success')
      setForm({ name: '', phone: '', email: '', serviceType: '', postcode: '', preferredDate: '', message: '' })
    } else {
      openMailtoFallback(form)
      setStatus('success')
    }
  }

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p style={{ maxWidth: 580, marginTop: 16 }}>
            Ready for a free, no-obligation quote? Reach out — our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {CONTACT_ITEMS.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className={styles.contactCard}
                target={item.label === 'WhatsApp' || item.label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <div className={styles.cardIcon}>
                  <item.icon size={24} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardLabel}>{item.label}</span>
                  <strong className={styles.cardValue}>{item.value}</strong>
                  <span className={styles.cardDesc}>{item.desc}</span>
                </div>
                <ArrowRight size={18} className={styles.cardArrow} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="section">
        <div className="container">
          <div className={styles.mainGrid}>

            {/* ---- ENQUIRY FORM ---- */}
            <div className={styles.formWrap}>
              <div className={styles.formHeader}>
                <span className="section-label">Enquiry Form</span>
                <h2>Send Us a Message</h2>
                <p>Fill in the form and we'll get back to you with a tailored quote.</p>
              </div>

              {status === 'success' ? (
                <div className={styles.successBox}>
                  <CheckCircle2 size={52} color="var(--accent)" />
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for your enquiry. A member of our team will be in touch within 24 hours.
                    For urgent matters, please call us on{' '}
                    <a href="tel:07442527146">07442 527146</a>.
                  </p>
                  <button className="btn btn-outline" onClick={() => setStatus(null)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="07700 000000"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Postcode</label>
                      <input
                        name="postcode"
                        value={form.postcode}
                        onChange={handleChange}
                        placeholder="SW1A 1AA"
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Service Required</label>
                      <select name="serviceType" value={form.serviceType} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option>Electrical Installation</option>
                        <option>Consumer Unit Upgrade</option>
                        <option>Intruder Alarm</option>
                        <option>CCTV System</option>
                        <option>EV Charger</option>
                        <option>EICR Certificate</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Preferred Date</label>
                      <input
                        name="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading'
                      ? 'Sending...'
                      : <><Send size={18} /> Send Enquiry</>
                    }
                  </button>

                  <p className={styles.formNote}>
                    Your message goes directly to <strong>info@apexelec.uk</strong>.
                    We never share your details.
                  </p>
                </form>
              )}
            </div>

            {/* ---- MAP + INFO ---- */}
            <div className={styles.mapCol}>
              <div className={styles.mapHeader}>
                <span className="section-label">Find Us</span>
                <h2>Our Location</h2>
              </div>

              {/* Embedded Google Map */}
              <div className={styles.mapFrame}>
                <iframe
                  title="Apexelec Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2483.2!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="360"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://share.google/Ifq4CGxM6PL3vBuuX"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline ${styles.mapBtn}`}
              >
                <MapPin size={18} /> Open in Google Maps
              </a>

              {/* Hours */}
              <div className={styles.hoursBox}>
                <div className={styles.hoursHeader}>
                  <Clock size={18} color="var(--accent)" />
                  <h4>Opening Hours</h4>
                </div>
                <ul className={styles.hoursList}>
                  {[
                    { day: 'Monday – Friday', time: '8:00am – 6:00pm' },
                    { day: 'Saturday', time: '8:00am – 4:00pm' },
                    { day: 'Sunday', time: 'Emergency only' },
                  ].map((h, i) => (
                    <li key={i}>
                      <span>{h.day}</span>
                      <span className={styles.hoursTime}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/447887702726"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBox}
              >
                <MessageCircle size={28} />
                <div>
                  <strong>Chat on WhatsApp</strong>
                  <span>+44 7887 702726 — Quick, easy enquiries</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
