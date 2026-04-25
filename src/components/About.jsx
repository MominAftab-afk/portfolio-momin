import useReveal from './useReveal'
import styles from './About.module.css'

const STATS = [
  { num: '2+', label: 'Years Professional' },
  { num: '10+', label: 'Major Brands' },
  { num: '6', label: 'Countries Reached' },
  { num: '∞', label: 'Ideas in Queue' },
]

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="about" className={styles.section}>
      <div ref={leftRef} className={`rv ${styles.left}`}>
        <span className="section-label">// Who I Am</span>
        <h2 className="section-title">
          Visuals that hit.<br />
          <span className="hl">Sound that lands.</span>
        </h2>
        <p className={styles.body}>
          I'm <strong>Momin Aftab</strong> — a Motion Designer and SFX/Music Engineer
          from Pakistan with 2+ years of professional craft. At{' '}
          <strong>Underscore Media</strong>, I built motion and audio work for some of
          Pakistan's biggest brands.
        </p>
        <p className={styles.body}>
          Now I'm going independent — building a crazy, unfiltered creative portfolio.
          Expect wild content, experimental motion, and sound design that doesn't play it safe.
        </p>
      </div>

      <div ref={rightRef} className={`rv ${styles.right}`}>
        <div className={styles.statsGrid}>
          {STATS.map(s => (
            <div key={s.label} className={styles.statCard} data-hover>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
