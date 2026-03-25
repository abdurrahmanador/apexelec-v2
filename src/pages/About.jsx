import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Shield, Zap, Camera, ThumbsUp,
  MapPin, Phone, Mail, Globe, Star, Users, Clock, Award
} from 'lucide-react'
import styles from './About.module.css'

const CERTS = [
  { src: '/certs/city_guild.png',  alt: 'City & Guilds Qualified' },
  { src: '/certs/trustmark.png',   alt: 'TrustMark Gov. Endorsed' },
  { src: '/certs/napit.png',       alt: 'NAPIT Member' },
  { src: '/certs/napit_elect.png', alt: 'Registered Competent Person' },
  { src: '/certs/part.png',alt:'Part P Certified'
  },
]

const STATS = [
  { value: '100+', label: 'Projects',      icon: Award },
  { value: '10+',  label: 'Years Exp.',    icon: Clock },
  { value: '100%', label: 'Satisfaction',  icon: Star  },
  { value: '24/7', label: 'Support',       icon: Users },
]

const VALUES = [
  { icon: Shield,   title: 'Safety First',        desc: 'Every installation meets BS7671 standards. Safety is never compromised, on every job, every time.' },
  { icon: Zap,      title: 'Expert Craftsmanship', desc: 'Qualified engineers with decades of combined experience across all electrical and security disciplines.' },
  { icon: Camera,   title: 'Latest Technology',    desc: 'We only install industry-leading equipment for long-lasting, reliable performance you can depend on.' },
  { icon: ThumbsUp, title: 'Customer Focused',     desc: 'Transparent pricing, clear communication, and tailored solutions for every home and business.' },
]

const ELECTRICAL = [
  'Domestic & Commercial Work', 'Full & Partial Rewires',
  'Condition Reports (EICR)',   'Landlords Certificates',
  'Extra Lights & Sockets',     'Fuse Board Upgrades',
  'Security & Lighting Systems','EV Charger Installation',
]

const SECURITY = [
  'Bespoke System Designs',     'Installation & Commissioning',
  'Maintenance & Servicing',    'System Upgrades',
  'Wireless & Wired Alarms',    'CCTV Systems (4K HD)',
  'Networking Solutions',       'Remote Monitoring Setup',
]

const ACCREDITATIONS = [
  'NAPIT Approved Contractor',     '18th Edition Wiring Regulations',
  'Part P Certified',               'City & Guilds Qualified',
  'Fully Public Liability Insured', 'TrustMark Government Endorsed',
]

export default function About() {
  return (
    <div className="page-wrapper">

      {/* ═══════════ HERO — compact banner ═══════════ */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />

        <div className={`container ${styles.heroInner}`}>

          {/* Left: title + breadcrumb */}
          <div className={styles.heroLeft}>
            <div className={styles.heroCrumb}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <h1 className={styles.heroH1}>About <span className={styles.heroSpan}>Apexelec</span></h1>
            <p className={styles.heroSub}>
              Leicestershire-based electrical &amp; security specialists — trusted
              by hundreds of homes and businesses across the Leicestershire.
            </p>
            <div className={styles.heroMeta}>
              <span><MapPin size={13} /> Leicestershire, UK</span>
              <span><Phone size={13} /> 07442 527146</span>
              <span><Mail size={13} /> info@apexelec.uk</span>
            </div>
          </div>

          {/* Right: stat pills + cert row */}
          <div className={styles.heroRight}>
            <div className={styles.heroStatRow}>
              {STATS.map((s, i) => (
                <div key={i} className={styles.heroStat}>
                  <span className={styles.heroStatNum}>{s.value}</span>
                  <span className={styles.heroStatLbl}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.heroCerts}>
              <p className={styles.heroCertsLabel}>Accredited By</p>
              <div className={styles.heroCertCircles}>
                {CERTS.map((c) => (
                  <div key={c.alt} className={styles.heroCertCircle} title={c.alt}>
                    <img src={c.src} alt={c.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════ STORY ═══════════ */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>

            <div className={styles.storyLeft}>
              <span className="section-label">Who We Are</span>
              <h2 className={styles.h2}>Dedicated to Your<br />Safety &amp; Comfort</h2>
              <div className="divider" />
              <p className={styles.storyLead}>
                Apexelec is a Leicestershire-based electrical and security systems
                company delivering premium installations for residential and
                commercial clients across the Leicestershire.
              </p>
              <p className={styles.storyBody}>
                From our first project to our five-hundredth, one thing has never
                changed — our commitment to doing the job right. Our engineers bring
                decades of combined experience across electrical, intruder alarm, and
                CCTV disciplines.
              </p>
              <p className={styles.storyBody}>
                We pride ourselves on clear communication, transparent pricing, and
                leaving every site cleaner than we found it. Whether you need a single
                socket or a full-scale security overhaul, Apexelec is the partner you
                can count on.
              </p>

              <div className={styles.storyLinks}>
                <a href="tel:07442527146" className={styles.storyLink}><Phone size={14} /> 07442 527146</a>
                <a href="mailto:info@apexelec.uk" className={styles.storyLink}><Mail size={14} /> info@apexelec.uk</a>
                <a href="https://apexelec.uk" target="_blank" rel="noopener noreferrer" className={styles.storyLink}><Globe size={14} /> apexelec.uk</a>
              </div>

              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
                Work With Us <ArrowRight size={17} />
              </Link>
            </div>

            <div className={styles.storyRight}>
              <div className={styles.statsBox}>
                {STATS.map((s, i) => (
                  <div key={i} className={styles.statCell}>
                    <div className={styles.statIcon}><s.icon size={18} /></div>
                    <span className={styles.statNum}>{s.value}</span>
                    <span className={styles.statLbl}>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.locationCard}>
                <MapPin size={16} color="var(--accent)" />
                <div>
                  <strong>Leicestershire Based</strong>
                  <span>Covering domestic &amp; commercial clients across the Leicestershire</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <div>
              <span className="section-label">What We Offer</span>
              <h2 className={styles.h2}>Our Full Range of Services</h2>
            </div>
            <p className={styles.servicesIntro}>
              From a single socket to a full security installation — handled with precision.
            </p>
          </div>

          <div className={styles.servicesCols}>
            {[
              { icon: Zap,    title: 'Electrical', sub: 'Domestic & Commercial', items: ELECTRICAL, grad: 'linear-gradient(135deg,#004aad,#10016d)' },
              { icon: Shield, title: 'Security',   sub: 'Alarms, CCTV & Access', items: SECURITY,   grad: 'linear-gradient(135deg,#10016d,#004aad)' },
            ].map((col, i) => (
              <div key={i} className={styles.servicesCard}>
                <div className={styles.servicesCardHead}>
                  <div className={styles.servicesIcon} style={{ background: col.grad }}>
                    <col.icon size={22} />
                  </div>
                  <div>
                    <h3 className={styles.servicesTitle}>{col.title}</h3>
                    <p className={styles.servicesSub}>{col.sub}</p>
                  </div>
                </div>
                <ul className={styles.servicesList}>
                  {col.items.map((s, j) => (
                    <li key={j}><CheckCircle2 size={14} /><span>{s}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.servicesCta}>
            <Link to="/services" className="btn btn-primary">Explore All Services <ArrowRight size={17} /></Link>
            <Link to="/contact" className="btn btn-outline">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section className={styles.valuesSection}>
        <div className="container">
          <span className="section-label">Our Values</span>
          <h2 className={styles.h2} style={{ marginTop: 10, marginBottom: 40 }}>What Drives Everything We Do</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueNum}>0{i + 1}</div>
                <div className={styles.valueIcon}><v.icon size={22} /></div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ACCREDITATIONS ═══════════ */}
      <section className={styles.acredSection}>
        <div className="container">

          <div className={styles.acredTop}>
            <div>
              <span className="section-label">Accreditations</span>
              <h2 className={styles.h2} style={{ marginTop: 10 }}>Certified &amp; Fully Compliant</h2>
            </div>
            <p className={styles.acredIntro}>
              All work is carried out by fully qualified engineers in accordance with
              British Standards. Every Apexelec installation is safe, legal, and built to last.
            </p>
          </div>

          {/* Cert circles */}
          <div className={styles.acredCertRow}>
            {CERTS.map((c) => (
              <div key={c.alt} className={styles.acredCertCard}>
                <div className={styles.acredCertCircle}>
                  <img src={c.src} alt={c.alt} />
                </div>
                <span className={styles.acredCertLabel}>{c.alt}</span>
              </div>
            ))}
          </div>

          {/* List + CTA */}
          <div className={styles.acredBottom}>
            <div className={styles.acredList}>
              <p className={styles.acredListTitle}>Standards &amp; Compliance</p>
              <ul className={styles.acredItems}>
                {ACCREDITATIONS.map((a, i) => (
                  <li key={i}><CheckCircle2 size={15} /><span>{a}</span></li>
                ))}
              </ul>
            </div>

            <div className={styles.acredCta}>
              <div className={styles.acredCtaBg} />
              <div className={styles.acredCtaInner}>
                <h3 className={styles.acredCtaH3}>Ready to Start<br />Your Project?</h3>
                <p className={styles.acredCtaP}>Free, no-obligation quote — we respond within 24 hours.</p>
                <div className={styles.acredCtaBtns}>
                  <Link to="/contact" className={styles.acredWhiteBtn}>
                    Get Free Quote <ArrowRight size={15} />
                  </Link>
                  <a href="tel:07442527146" className={styles.acredPhoneBtn}>
                    <Phone size={14} /> 07442 527146
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}