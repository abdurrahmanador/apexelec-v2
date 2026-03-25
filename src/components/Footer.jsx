import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight, Shield } from 'lucide-react'
import styles from './Footer.module.css'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
]

const SERVICES_LIST = [
  'Electrical Installations',
  'Consumer Unit Upgrades',
  'CCTV Systems',
  'Intruder Alarms',
  'EV Chargers',
  'EICR Certificates',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      {/* Top accent bar */}
      <div className={styles.accentBar} />

      {/* CTA Strip */}
      <div className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaStripInner}>
            <div className={styles.ctaStripText}>
              <Shield size={20} />
              <span>Trusted Electrical &amp; Security Specialists — Covering Across the Leicestershire</span>
            </div>
            <a href="tel:07442527146" className={styles.ctaStripPhone}>
              <Phone size={16} /> 07442 527146
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>

            {/* Brand Column */}
            <div className={styles.brand}>
              {/* Logo — no setOpen here, Footer doesn't control the drawer */}
              <Link to="/" className={styles.logo}>
                <div className={styles.logoMark}>
                  <img src="/logo.png" alt="Apexelec icon" className={styles.logoImg} />
                </div>
                <img src="/logo_title.png" alt="Apexelec" className={styles.logoTitle} />
              </Link>

              <p className={styles.brandDesc}>
                Professional electrical installations and advanced security systems
                delivered with precision and care across the United Kingdom.
              </p>

              <a
                href="https://wa.me/447442527146"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h5 className={styles.colTitle}>Quick Links</h5>
              <ul className={styles.linkList}>
                {QUICK_LINKS.map(l => (
                  <li key={l.to}>
                    <Link to={l.to}>
                      <ArrowRight size={13} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h5 className={styles.colTitle}>Services</h5>
              <ul className={styles.linkList}>
                {SERVICES_LIST.map(s => (
                  <li key={s}>
                    <Link to="/services">
                      <ArrowRight size={13} />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h5 className={styles.colTitle}>Contact</h5>
              <ul className={styles.contactList}>
                <li>
                  <div className={styles.contactIcon}><Phone size={14} /></div>
                  <a href="tel:07442527146">07442 527146</a>
                </li>
                <li>
                  <div className={styles.contactIcon}><Mail size={14} /></div>
                  <a href="mailto:info@apexelec.uk">info@apexelec.uk</a>
                </li>
                <li>
                  <div className={styles.contactIcon}><MapPin size={14} /></div>
                  <span>United Kingdom</span>
                </li>
                <li>
                  <div className={styles.contactIcon}><Clock size={14} /></div>
                  <span>Mon–Sat: 8am–6pm</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {year} Apexelec Ltd. All rights reserved.</span>
            <span className={styles.bottomRight}>Electrical &amp; Security Systems · United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  )
}