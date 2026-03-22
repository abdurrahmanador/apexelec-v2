import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Shield, Zap, Camera, Award, ThumbsUp } from 'lucide-react'
import styles from './About.module.css'

const VALUES = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Every installation is carried out to the highest safety standards with full BS7671 compliance.',
  },
  {
    icon: Zap,
    title: 'Expert Craftsmanship',
    desc: 'Our engineers bring years of hands-on experience to every project, no matter the scale.',
  },
  {
    icon: Camera,
    title: 'Latest Technology',
    desc: 'We source and install only industry-leading equipment for long-lasting, reliable performance.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Focused',
    desc: 'We listen, advise, and deliver solutions tailored exactly to your home or business needs.',
  },
]

const CERTIFICATIONS = [
  'NICEIC Approved Contractor',
  '18th Edition Wiring Regulations',
  'BS EN 50131 – Intruder Alarms',
  'BS 8418 – CCTV Systems',
  'Part P Certified',
  'Fully Public Liability Insured',
]

export default function About() {
  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Our Story</span>
          <h1>About Apexelec</h1>
          <p style={{ maxWidth: 600, marginTop: 16 }}>
            A trusted name in electrical and security systems — built on expertise, integrity, and a commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className="section-label">Who We Are</span>
              <h2>Dedicated to Your Safety & Comfort</h2>
              <div className="divider" />
              <p>
                Apexelec is a UK-based electrical and security systems company dedicated to 
                delivering premium installations for residential and commercial clients. From 
                our first project to our five-hundredth, one thing has never changed — our 
                commitment to doing the job right.
              </p>
              <p style={{ marginTop: 16 }}>
                Our team of qualified engineers brings together decades of combined experience 
                across electrical, intruder alarm, and CCTV disciplines. We pride ourselves on 
                clear communication, transparent pricing, and leaving every site cleaner than 
                we found it.
              </p>
              <p style={{ marginTop: 16 }}>
                Whether you need a simple socket installation or a full-scale security overhaul, 
                Apexelec is the partner you can count on.
              </p>

              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 36 }}>
                Work With Us <ArrowRight size={18} />
              </Link>
            </div>

            <div className={styles.storyRight}>
              <div className={styles.statsBox}>
                {[
                  { n: '500+', l: 'Projects Completed' },
                  { n: '10+', l: 'Years Experience' },
                  { n: '100%', l: 'Client Satisfaction' },
                  { n: '3', l: 'Core Specialisms' },
                ].map((s, i) => (
                  <div key={i} className={styles.statBox}>
                    <span className={styles.statNum}>{s.n}</span>
                    <span className={styles.statLbl}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.valuesHead}>
            <span className="section-label">Our Values</span>
            <h2>What Drives Everything We Do</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div key={i} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>
                  <v.icon size={26} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className={styles.certGrid}>
            <div>
              <span className="section-label">Accreditations</span>
              <h2>Certified & Compliant</h2>
              <div className="divider" />
              <p>
                All our work is carried out by fully qualified engineers in accordance with 
                British Standards and current regulations. You can always trust that an 
                Apexelec installation is safe, legal, and built to last.
              </p>
              <ul className={styles.certList}>
                {CERTIFICATIONS.map((c, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.certHighlight}>
              <Award size={64} color="var(--accent)" />
              <h3>NICEIC Approved Contractor</h3>
              <p>
                The NICEIC is the UK's leading electrical contracting authority. 
                Approval means every Apexelec engineer meets the highest standards 
                for competency, safety, and professionalism.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
