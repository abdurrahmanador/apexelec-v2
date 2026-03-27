import { Link } from 'react-router-dom'
import {
  Zap, ShieldCheck, Camera, Phone, Mail, ArrowRight,
  CheckCircle2, Clock, Award, Users, MessageCircle,
  ChevronRight, MapPin, Star
} from 'lucide-react'
import styles from './Home.module.css'

const CERTS = [
  { src: '/certs/city_guild.png',  alt: 'City & Guilds' },
  { src: '/certs/trustmark.png',   alt: 'TrustMark', href: 'https://www.trustmark.org.uk/firms/Apex%20Electrical%20&%20Security-4097740-LE5%200PR?id=c9c91e0b-0b66-4082-bfca-d1084c33b8f6' },
  { src: '/certs/napit.png',       alt: 'NAPIT',     href: 'https://search.napit.org.uk/member/82269/apex-electrical-and-security' },
  { src: '/certs/napit_elect.png', alt: 'Competent Person', href: 'https://search.napit.org.uk/member/82269/apex-electrical-and-security' },
  { src: '/certs/part.png',        alt: 'Part P Certified' },
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

            <a
              href="https://maps.app.goo.gl/z4448Q3k2ZwgvRbS6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleBadge}
            >
              <div className={styles.googleBadgeStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#FBBC04" color="#FBBC04" />
                ))}
              </div>
              <span className={styles.googleBadgeText}>5.0 · Google Reviews</span>
              <svg width="16" height="16" viewBox="0 0 24 24" className={styles.googleIcon} aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className={styles.heroRight}>

            {/* Cert circles — single row */}
            <div className={styles.certGrid}>
              <p className={styles.certLabel}>Accredited By</p>
              <div className={styles.certCircles}>
                {CERTS.map((c) => {
                  const Tag = c.href ? 'a' : 'div'
                  const props = c.href ? { href: c.href, target: '_blank', rel: 'noopener noreferrer', title: c.alt } : { title: c.alt }
                  return (
                    <Tag key={c.alt} className={styles.certCircle} {...props}>
                      <img src={c.src} alt={c.alt} />
                    </Tag>
                  )
                })}
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
                  {CERTS.map((c) => {
                    const Tag = c.href ? 'a' : 'div'
                    const props = c.href ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' } : {}
                    return (
                      <Tag key={c.alt} className={styles.certShowcaseItem} {...props}>
                        <div className={styles.certShowcaseCircle}>
                          <img src={c.src} alt={c.alt} />
                        </div>
                        <span className={styles.certShowcaseName}>{c.alt}</span>
                      </Tag>
                    )
                  })}
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