import { useState } from 'react'
import { Zap, ShieldCheck, Camera, CheckCircle2, ArrowRight, Send, Phone } from 'lucide-react'
import { submitEnquiry, openMailtoFallback } from '../services/formService'
import styles from './Services.module.css'

/* ---- SERVICE DATA ---- */
const SERVICES = [
  {
    id: 'electrical',
    icon: Zap,
    label: 'Electrical',
    title: 'Electrical Installations',
    subtitle: 'Full domestic & commercial electrical solutions',
    description:
      'From new builds to full rewires, our NAPIT-approved electricians handle every aspect of electrical work with precision and compliance. All work is certified and tested to BS7671 standards.',
    items: [
      'Full & partial rewires',
      'Consumer unit / fuse board upgrades',
      'New circuits & additional sockets',
      'Lighting design & installation',
      'EV charger installation',
      'Electrical safety certificates (EICR)',
      'Fault finding & repairs',
      'Garden & outdoor lighting',
    ],
    formFields: ['Full Name', 'Phone', 'Email', 'Postcode', 'Property Type', 'Preferred Date', 'Message'],
    propertyTypes: ['Detached House', 'Semi-Detached', 'Flat / Apartment', 'Commercial Property', 'Other'],
  },
  {
    id: 'intruder',
    icon: ShieldCheck,
    label: 'Intruder Alarms',
    title: 'Intruder Alarm Systems',
    subtitle: 'Smart, reliable protection for homes & businesses',
    description:
      'We design and install Grade-A intruder alarm systems tailored to your property layout. From basic bells-only systems to professionally monitored grade 2/3 alarms, we keep you protected.',
    items: [
      'Wired & wireless alarm systems',
      'Grade 2 & Grade 3 systems',
      'PIR motion sensors',
      'Door & window contacts',
      'Smart phone app integration',
      'Remote monitoring options',
      'Alarm servicing & maintenance',
      'Insurance-approved installations',
    ],
    formFields: ['Full Name', 'Phone', 'Email', 'Postcode', 'Property Type', 'Preferred Date', 'Message'],
    propertyTypes: ['Home / Residential', 'Retail', 'Office', 'Warehouse / Industrial', 'Other'],
  },
  {
    id: 'cctv',
    icon: Camera,
    label: 'CCTV',
    title: 'CCTV Security Systems',
    subtitle: '4K HD surveillance for complete peace of mind',
    description:
      'Our CCTV installations use cutting-edge 4K cameras with night vision, wide-angle coverage, and cloud/local storage. View live footage from anywhere in the world via your smartphone.',
    items: [
      '4K Ultra HD cameras',
      'Night vision up to 30m',
      'Remote viewing via smartphone',
      'NVR / DVR recording systems',
      'Cloud & local storage',
      'AI motion detection alerts',
      'Number plate recognition',
      'CCTV maintenance & upgrades',
    ],
    formFields: ['Full Name', 'Phone', 'Email', 'Postcode', 'No. of Cameras', 'Preferred Date', 'Message'],
    propertyTypes: ['Home', 'Business', 'Retail', 'Warehouse', 'Other'],
  },
]

/* ---- ENQUIRY FORM ---- */
function EnquiryForm({ service }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', postcode: '',
    propertyType: '', preferredDate: '', cameras: '', message: '',
  })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    const payload = {
      serviceType: service.title,
      name: form.name,
      phone: form.phone,
      email: form.email,
      postcode: form.postcode,
      propertyType: form.propertyType,
      preferredDate: form.preferredDate,
      cameras: form.cameras,
      message: form.message,
    }

    // Try Apps Script first, fall back to mailto
    const result = await submitEnquiry(payload)

    if (result.success) {
      setStatus('success')
      setForm({ name: '', phone: '', email: '', postcode: '', propertyType: '', preferredDate: '', cameras: '', message: '' })
    } else {
      // Fallback: open email client
      openMailtoFallback(payload)
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successMsg}>
        <CheckCircle2 size={48} color="var(--accent)" />
        <h3>Enquiry Sent!</h3>
        <p>Thank you! Our team will contact you within 24 hours. For urgent queries, call us on <a href="tel:07442527146">07442 527146</a>.</p>
        <button className="btn btn-outline" onClick={() => setStatus(null)}>Submit Another</button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`name-${service.id}`}>Full Name *</label>
          <input
            id={`name-${service.id}`}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={`phone-${service.id}`}>Phone Number *</label>
          <input
            id={`phone-${service.id}`}
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
          <label htmlFor={`email-${service.id}`}>Email Address *</label>
          <input
            id={`email-${service.id}`}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={`postcode-${service.id}`}>Postcode</label>
          <input
            id={`postcode-${service.id}`}
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            placeholder="SW1A 1AA"
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`propType-${service.id}`}>Property Type</label>
          <select
            id={`propType-${service.id}`}
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
          >
            <option value="">Select type...</option>
            {service.propertyTypes.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {service.id === 'cctv' ? (
          <div className="form-group">
            <label htmlFor={`cameras-${service.id}`}>Number of Cameras</label>
            <select
              id={`cameras-${service.id}`}
              name="cameras"
              value={form.cameras}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              {['1–2', '3–4', '5–8', '8+', 'Not sure'].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor={`date-${service.id}`}>Preferred Date</label>
            <input
              id={`date-${service.id}`}
              name="preferredDate"
              type="date"
              value={form.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor={`msg-${service.id}`}>Tell Us More</label>
        <textarea
          id={`msg-${service.id}`}
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder={`Describe your ${service.label.toLowerCase()} requirements...`}
        />
      </div>

      <button
        type="submit"
        className={`btn btn-primary ${styles.submitBtn}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : (
          <><Send size={18} /> Send Enquiry</>
        )}
      </button>

      <p className={styles.formNote}>
        Your enquiry goes directly to <strong>info@apexelec.uk</strong> — we respond within 24 hours.
      </p>
    </form>
  )
}

/* ---- MAIN COMPONENT ---- */
export default function Services() {
  const [active, setActive] = useState('electrical')
  const current = SERVICES.find(s => s.id === active)

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">What We Offer</span>
          <h1>Our Services</h1>
          <p style={{ maxWidth: 580, marginTop: 16 }}>
            Expert electrical, intruder alarm, and CCTV installations — select a service below to explore and submit your enquiry.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className={styles.tabBar}>
        <div className="container">
          <div className={styles.tabs}>
            {SERVICES.map(s => (
              <button
                key={s.id}
                className={`${styles.tab} ${active === s.id ? styles.tabActive : ''}`}
                onClick={() => setActive(s.id)}
              >
                <s.icon size={20} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="section" key={active}>
        <div className="container">
          <div className={styles.serviceLayout}>

            {/* Left: Service Info */}
            <div className={styles.serviceInfo}>
              <div className={styles.serviceHeader}>
                <div className={styles.svcIconLg}>
                  <current.icon size={36} />
                </div>
                <div>
                  <h2>{current.title}</h2>
                  <p className={styles.svcSubtitle}>{current.subtitle}</p>
                </div>
              </div>

              <p className={styles.svcDesc}>{current.description}</p>

              <h4 className={styles.includedTitle}>What's Included</h4>
              <ul className={styles.includedList}>
                {current.items.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={styles.callBox}>
                <Phone size={20} />
                <div>
                  <span>Prefer to talk? Call us directly</span>
                  <a href="tel:07442527146">07442 527146</a>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className={styles.formPanel}>
              <div className={styles.formHeader}>
                <h3>Book / Enquire</h3>
                <p>Fill in your details and we'll get back to you within 24 hours.</p>
              </div>
              <EnquiryForm service={current} />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}