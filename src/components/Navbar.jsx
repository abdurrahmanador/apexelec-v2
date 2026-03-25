import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone, Home, Info, Wrench, Image, Mail } from 'lucide-react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home',     icon: Home    },
  { to: '/about',    label: 'About',    icon: Info    },
  { to: '/services', label: 'Services', icon: Wrench  },
  { to: '/gallery',  label: 'Gallery',  icon: Image   },
  { to: '/contact',  label: 'Contact',  icon: Mail    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)   // ← always starts CLOSED

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>

          {/* ── Logo ── */}
          <Link to="/" className={styles.logo} onClick={close}>
            <div className={styles.logoIconWrap}>
              <img src="/logo.png" alt="Apexelec icon" className={styles.logoIcon} />
            </div>
            <img src="/logo_title.png" alt="Apexelec" className={styles.logoTitle} />
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

          {/* ── Phone CTA (desktop) ── */}
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
                onClick={close}
                className={({ isActive }) =>
                  `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`
                }
              >
                <l.icon size={18} />
                {l.label}
              </NavLink>
            ))}
            <div className={styles.drawerContact}>
              <a href="tel:07442527146" className="btn btn-primary" onClick={close}>
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
          <div className={styles.backdrop} onClick={close} />
        )}
      </header>

      {/* ── Mobile Bottom Nav Bar ── */}
      <nav className={styles.bottomNav}>
        {NAV_LINKS.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `${styles.bottomNavItem} ${isActive ? styles.bottomNavActive : ''}`
            }
          >
            <l.icon size={20} />
            <span>{l.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}