import { Link } from 'react-router-dom'
import {
  Zap, ShieldCheck, Camera, Phone, Mail, ArrowRight,
  CheckCircle2, Star, Clock, Award, Users, MessageCircle,
  ChevronRight, MapPin
} from 'lucide-react'
import styles from './Home.module.css'

const CERTS = [
  { src: '/certs/city_guild.png',  alt: 'City & Guilds' },
  { src: '/certs/trustmark.png',   alt: 'TrustMark' },
  { src: '/certs/napit.png',       alt: 'NAPIT' },
  { src: '/certs/napit_elect.png', alt: 'Competent Person' },
  { src: '/certs/part.png',alt:'Part P Certified' },
]

const STATS = [
  { value: '100+', label: 'Projects Done' },
  { value: '10+',  label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction' },
  { value: '24/7', label: 'Support' },
]

const SERVICES = [
  {
    icon: Zap,
    title: 'Electrical Installations',
    desc: 'Full domestic and commercial electrical solutions — consumer units, wiring, testing, and certifications.',
    tag: 'NAPIT Approved',
    color: '#004aad',
  },
  {
    icon: ShieldCheck,
    title: 'Intruder Alarm Systems',
    desc: 'Grade-A systems with smart monitoring, wireless sensors, and rapid response integration.',
    tag: 'Grade 2 & 3',
    color: '#10016d',
  },
  {
    icon: Camera,
    title: 'CCTV Systems',
    desc: '4K HD surveillance with remote viewing, night vision, and cloud storage for homes and businesses.',
    tag: '4K Ultra HD',
    color: '#004aad',
  },
]

const WHY = [
  'NAPIT Approved Contractor',
  'Free on-site assessment',
  'Fully insured & certified',
  'Transparent fixed pricing',
  'Clean, professional install',
  'Aftercare & maintenance',
]

export default function Home() {
  return (
    <div className="page-wrapper">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className={styles.hero}>

        {/* Background decoration */}
        <div className={styles.heroBg}>
          <div className={styles.bgGrid} />
          <div className={styles.bgBlob} />
          <div className={styles.bgStripe} />
        </div>

        <div className={`container ${styles.heroWrap}`}>

          {/* ── LEFT COLUMN ── */}
          <div className={styles.heroContent}>

            <div className={styles.badge}>
              <span className={styles.badgePulse} />
              UK Electrical &amp; Security Specialists
            </div>

            <h1 className={styles.heroH1}>
              Powering<br />
              <span className={styles.heroGrad}>Safety.</span><br />
              Securing<br />
              Futures.
            </h1>

            <p className={styles.heroP}>
              Professional electrical installations, advanced intruder alarms
              and 4K CCTV for homes and businesses across the Leicestershire.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contact" className="btn btn-primary">
                Get Free Quote <ArrowRight size={17} />
              </Link>
              <a href="tel:07442527146" className={styles.callBtn}>
                <Phone size={16} /> 07442 527146
              </a>
            </div>

            <div className={styles.heroStars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="var(--accent)" color="var(--accent)" />
              ))}
              <span>5-star · 500+ installs</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className={styles.heroRight}>

            {/* Cert circles — 2×2 grid */}
            <div className={styles.certGrid}>
              <p className={styles.certLabel}>Accredited By</p>
              <div className={styles.certCircles}>
                {CERTS.map((c) => (
                  <div key={c.alt} className={styles.certCircle} title={c.alt}>
                    <img src={c.src} alt={c.alt} />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className={styles.heroStatsCard}>
              {STATS.map((s, i) => (
                <div key={i} className={styles.heroStatItem}>
                  <span className={styles.heroStatNum}>{s.value}</span>
                  <span className={styles.heroStatLbl}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Location badge */}
            <div className={styles.locationBadge}>
              <MapPin size={14} />
              Covering Across the United Kingdom
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionTop}>
            <div>
              <span className="section-label">What We Do</span>
              <h2 className={styles.sectionH2}>Expert Services.<br />Exceptional Results.</h2>
            </div>
            <p className={styles.sectionP}>From a single socket to a complete security overhaul — we cover it all with precision and care.</p>
          </div>

          <div className={styles.cardsRow}>
            {SERVICES.map((s, i) => (
              <div key={i} className={styles.serviceCard} style={{ '--card-color': s.color }}>
                <div className={styles.cardAccent} />
                <div className={styles.cardIcon}>
                  <s.icon size={24} />
                </div>
                <span className={styles.cardTag}>{s.tag}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <Link to="/services" className={styles.cardLink}>
                  Explore <ChevronRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US  +  CERT SHOWCASE
      ══════════════════════════════════════════ */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyWrap}>

            {/* Left — checklist */}
            <div className={styles.whyLeft}>
              <span className="section-label">Why Choose Us</span>
              <h2 className={styles.sectionH2}>Built on Trust.<br />Delivered with Care.</h2>
              <p style={{ marginBottom: 28 }}>
                Apexelec has been the preferred choice for homeowners and businesses
                seeking quality installations done right, first time.
              </p>

              <ul className={styles.whyList}>
                {WHY.map((item, i) => (
                  <li key={i}><CheckCircle2 size={17} />{item}</li>
                ))}
              </ul>

              <div className={styles.whyActions}>
                <Link to="/about" className="btn btn-primary">About Us <ArrowRight size={17} /></Link>
                <Link to="/contact" className="btn btn-outline">Get a Quote</Link>
              </div>
            </div>

            {/* Right — cert showcase + cards */}
            <div className={styles.whyRight}>

              {/* Cert showcase panel */}
              <div className={styles.certShowcase}>
                <p className={styles.certShowcaseLabel}>Our Accreditations &amp; Certifications</p>
                <div className={styles.certShowcaseRow}>
                  {CERTS.map((c) => (
                    <div key={c.alt} className={styles.certShowcaseItem}>
                      <div className={styles.certShowcaseCircle}>
                        <img src={c.src} alt={c.alt} />
                      </div>
                      <span className={styles.certShowcaseName}>{c.alt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick trust cards */}
              {[
                { icon: Award, title: 'NAPIT Approved', desc: 'All engineers certified to the highest UK electrical standards.' },
                { icon: Clock, title: 'Rapid Response',  desc: 'Fast turnaround. We get your systems live without delay.' },
                { icon: Users, title: 'Local Experts',   desc: 'Personal service with professional-grade results every time.' },
              ].map((c, i) => (
                <div key={i} className={styles.trustCard}>
                  <div className={styles.trustIcon}><c.icon size={20} /></div>
                  <div>
                    <h4 className={styles.trustTitle}>{c.title}</h4>
                    <p className={styles.trustDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerBg} />
        <div className={`container ${styles.ctaWrap}`}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaH2}>Ready to Get Started?</h2>
            <p className={styles.ctaP}>Free, no-obligation quote — usually within 24 hours.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link to="/contact" className={styles.ctaWhiteBtn}>
              Book an Enquiry <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/07442527146"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWaBtn}
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════════ */}
      <section className={styles.contactStrip}>
        <div className="container">
          <div className={styles.stripRow}>
           <a href="https://wa.me/447442527146" target="_blank" rel="noopener noreferrer" className={styles.stripItem}>
              <div className={styles.stripIcon}><MessageCircle size={19} /></div>
              <div><span>WhatsApp</span><strong>+44 7442 527146</strong></div>
            </a> 
            <a href="mailto:info@apexelec.uk" className={styles.stripItem}>
              <div className={styles.stripIcon}><Mail size={19} /></div>
              <div><span>Email</span><strong>info@apexelec.uk</strong></div>
            </a>
            <a href="tel:07442527146" className={styles.stripItem}>
              <div className={styles.stripIcon}><Phone size={19} /></div>
              <div><span>Call Us</span><strong>07442 527146</strong></div>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}