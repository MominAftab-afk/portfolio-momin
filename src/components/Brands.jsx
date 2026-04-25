import useReveal from './useReveal'
import styles from './Brands.module.css'

const NEONS = [
  'var(--neon-pink)',
  'var(--neon-lime)',
  'var(--neon-cyan)',
  'var(--neon-purple)',
  'var(--neon-orange)',
  'var(--neon-pink)',
  'var(--neon-lime)',
  'var(--neon-cyan)',
]

const BRANDS = [
  'Zero', 'Audionic', 'Ronin', 'Login',
  'TCW', 'EU Pakistan', 'MRC Afghanistan', '& Many More',
]

export default function Brands() {
  const headRef  = useReveal()
  const gridRef  = useReveal()

  return (
    <section className={styles.section}>
      <div ref={headRef} className={`rv ${styles.head}`}>
        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>// Clients</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Brands I've <span className="hl">Worked With</span>
        </h2>
      </div>

      <div ref={gridRef} className={`rv ${styles.grid}`}>
        {BRANDS.map((b, i) => (
          <div
            key={b}
            className={styles.tag}
            style={{ '--c': NEONS[i % NEONS.length] }}
            data-hover
          >
            {b}
          </div>
        ))}
      </div>
    </section>
  )
}
