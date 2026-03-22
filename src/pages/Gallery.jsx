import { useState } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Gallery.module.css'

/**
 * GALLERY SETUP INSTRUCTIONS:
 * 1. Place your photos in: public/gallery/
 *    Example: public/gallery/install-01.jpg
 * 2. Update the PHOTOS array below with your actual filenames
 * 3. Run: npm run build
 */

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=70',
    category: 'Electrical',
    caption: 'Consumer unit upgrade — Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
    category: 'Electrical',
    caption: 'Commercial electrical installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1573868396-9cc3ccb8d48a?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1573868396-9cc3ccb8d48a?w=400&q=70',
    category: 'CCTV',
    caption: 'CCTV installation — Business premises',
  },
  {
    src: 'https://images.unsplash.com/photo-1580979542278-bb36e2702a98?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1580979542278-bb36e2702a98?w=400&q=70',
    category: 'CCTV',
    caption: '4K dome camera installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1593622915963-d4ce6e93e9e2?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1593622915963-d4ce6e93e9e2?w=400&q=70',
    category: 'Intruder',
    caption: 'Wireless intruder alarm — Residential',
  },
  {
    src: 'https://images.unsplash.com/photo-1562790879-8fce436b5faf?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1562790879-8fce436b5faf?w=400&q=70',
    category: 'Electrical',
    caption: 'LED lighting installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e',
    thumb: 'https://images.unsplash.com/photo-1616394584738-f=70',
    category: 'CCTV',
    caption: 'Outdoor bullet camera setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=70',
    category: 'Electrical',
    caption: 'Industrial electrical wiring',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70',
    category: 'Intruder',
    caption: 'Smart alarm control panel',
  },
]

const CATEGORIES = ['All', 'Electrical', 'CCTV', 'Intruder']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null) // index or null

  const filtered = filter === 'All' ? PHOTOS : PHOTOS.filter(p => p.category === filter)

  const openLightbox = idx => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prevPhoto = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  const nextPhoto = () => setLightbox(i => (i + 1) % filtered.length)

  // Keyboard nav
  const handleKey = e => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prevPhoto()
    if (e.key === 'ArrowRight') nextPhoto()
  }

  return (
    <div className="page-wrapper" onKeyDown={handleKey} tabIndex={-1}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Our Work</span>
          <h1>Project Gallery</h1>
          <p style={{ maxWidth: 560, marginTop: 16 }}>
            Browse a selection of our completed electrical, intruder alarm, and CCTV installations across the UK.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
            <span className={styles.count}>{filtered.length} photos</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {filtered.map((photo, idx) => (
              <button
                key={idx}
                className={styles.photoCard}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={photo.thumb}
                  alt={photo.caption}
                  loading="lazy"
                />
                <div className={styles.photoOverlay}>
                  <ZoomIn size={28} />
                  <span>{photo.caption}</span>
                </div>
                <div className={styles.photoCat}>{photo.category}</div>
              </button>
            ))}
          </div>

          {/* Upload Notice */}
    
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lbClose} onClick={closeLightbox}>
            <X size={28} />
          </button>
          <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={e => { e.stopPropagation(); prevPhoto() }}>
            <ChevronLeft size={32} />
          </button>
          <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].caption} />
            <p className={styles.lbCaption}>{filtered[lightbox].caption}</p>
            <span className={styles.lbCounter}>{lightbox + 1} / {filtered.length}</span>
          </div>
          <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={e => { e.stopPropagation(); nextPhoto() }}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  )
}
