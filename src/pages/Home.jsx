import { Link } from 'react-router-dom'
import {
  Zap, ShieldCheck, Camera, Phone, Mail, ArrowRight,
  CheckCircle2, Star, Clock, Award, Users, MessageCircle,
  ChevronRight
} from 'lucide-react'
import styles from './Home.module.css'

const STATS = [
  { value: '500+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
]

const SERVICES = [
  {
    icon: Zap,
    title: 'Electrical Installations',
    desc: 'Full domestic and commercial electrical solutions — consumer units, wiring, testing, and certifications.',
    link: '/services',
    tag: 'NICEIC Approved',
  },
  {
    icon: ShieldCheck,
    title: 'Intruder Alarm Systems',
    desc: 'Grade-A intruder alarm systems with smart monitoring, wireless sensors, and rapid response integration.',
    link: '/services',
    tag: 'Grade 2 & 3',
  },
  {
    icon: Camera,
    title: 'CCTV Systems',
    desc: '4K HD surveillance cameras with remote viewing, night vision, and cloud storage for homes and businesses.',
    link: '/services',
    tag: '4K Ultra HD',
  },
]

const WHY = [
  'NICEIC Approved Contractor',
  'Free on-site assessment',
  'Fully insured & certified',
  'Transparent fixed pricing',
  'Clean, professional install',
  'Aftercare & maintenance',
]

const WHY_CARDS = [
  {
    icon: Award,
    title: 'NICEIC Approved',
    desc: 'All our electricians are fully certified and NICEIC approved, ensuring every job meets the highest safety standards.',
  },
  {
    icon: Clock,
    title: 'Prompt Response',
    desc: 'We understand urgency. Our team is ready to respond quickly and get your systems operational without delay.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    desc: 'Rooted in the UK community, we bring a personal touch with professional-grade results that national chains simply cannot match.',
  },
]

export default function Home() {
  return (
    <div className="page-wrapper">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          <div className={styles.heroGrid} />
          <div className={styles.heroBlob1} />
          <div className={styles.heroBlob2} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            UK's Trusted Electrical &amp; Security Experts
          </div>

          <h1 className={styles.heroTitle}>
            Powering Safety.
            <br />
            <span className={styles.heroGrad}>Securing</span> Futures.
          </h1>

          <p className={styles.heroDesc}>
            Professional electrical installations, advanced intruder alarm systems, and
            4K CCTV solutions for homes and businesses across the UK.
          </p>

          <div className={styles.heroCtas}>
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <a href="tel:07442527146" className={`btn ${styles.heroCallBtn}`}>
              <Phone size={17} /> Call Us Now
            </a>
          </div>

          <div className={styles.heroTrust}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="var(--accent)" color="var(--accent)" />
              ))}
            </div>
            <span>5-star rated · 500+ installations across the UK</span>
          </div>
        </div>

        {/* Floating service pills */}
        <div className={styles.heroPills}>
          <span className={styles.pill}><Zap size={13} /> Electrical</span>
          <span className={styles.pill}><ShieldCheck size={13} /> Intruder Alarms</span>
          <span className={styles.pill}><Camera size={13} /> CCTV</span>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">What We Do</span>
            <h2>Expert Services.<br />Exceptional Results.</h2>
            <p>From a single socket to a complete security overhaul — we cover it all with precision.</p>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <div key={i} className={`card ${styles.serviceCard}`}>
                <div className={styles.serviceTop}>
                  <div className={styles.serviceIconWrap}>
                    <s.icon size={26} />
                  </div>
                  <span className={styles.servicePill}>{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.link} className={styles.serviceLink}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.servicesActions}>
            <Link to="/services" className="btn btn-ghost">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY US ═══════════════════ */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>

            <div className={styles.whyLeft}>
              <span className="section-label">Why Choose Us</span>
              <h2>Built on Trust.<br />Delivered with Care.</h2>
              <p>
                Apexelec has been the preferred choice for homeowners and businesses
                seeking quality electrical and security installations done right, first time.
              </p>

              <ul className={styles.whyList}>
                {WHY.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={styles.whyCtas}>
                <Link to="/about" className="btn btn-primary">
                  About Apexelec <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className={styles.whyRight}>
              {WHY_CARDS.map((c, i) => (
                <div key={i} className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>
                    <c.icon size={22} />
                  </div>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerBg} />
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2>Ready to Get Started?</h2>
              <p>Contact us today for your free, no-obligation quote.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className={`btn ${styles.ctaPrimaryBtn}`}>
                Book an Enquiry <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/447887702726"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.waBtn}`}
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT STRIP ═══════════════════ */}
      <section className={`section-sm ${styles.contactStrip}`}>
        <div className="container">
          <div className={styles.stripGrid}>
            <a href="tel:07442527146" className={styles.stripItem}>
              <div className={styles.stripIcon}><Phone size={20} /></div>
              <div>
                <span>Call Us</span>
                <strong>07442 527146</strong>
              </div>
            </a>
            <a href="mailto:info@apexelec.uk" className={styles.stripItem}>
              <div className={styles.stripIcon}><Mail size={20} /></div>
              <div>
                <span>Email</span>
                <strong>info@apexelec.uk</strong>
              </div>
            </a>
            <a
              href="https://wa.me/447887702726"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stripItem}
            >
              <div className={styles.stripIcon}><MessageCircle size={20} /></div>
              <div>
                <span>WhatsApp</span>
                <strong>+44 7887 702726</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
