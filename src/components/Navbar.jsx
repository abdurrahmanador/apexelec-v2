import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* ── Logo ── */}
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <div className={styles.logoImgWrap}>
            <img src="/logo.png" alt="Apexelec" className={styles.logoImg} />
          </div>
          <div className={styles.logoWords}>
            <span className={styles.logoMain}>APEX<span className={styles.logoSub}>ELEC</span></span>
            <span className={styles.logoTagline}>Electrical &amp; Security</span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Phone CTA ── */}
        <a href="tel:07442527146" className={styles.ctaBtn}>
          <Phone size={15} />
          07442 527146
        </a>

        {/* ── Hamburger ── */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerNav}>
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className={styles.drawerContact}>
            <a href="tel:07442527146" className="btn btn-primary">
              <Phone size={16} /> Call 07442 527146
            </a>
            <a href="mailto:info@apexelec.uk" className={styles.drawerEmail}>
              info@apexelec.uk
            </a>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} />
      )}
    </header>
  )
}
