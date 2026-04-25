import { useEffect, useRef } from 'react'
import useReveal from './useReveal'
import styles from './Skills.module.css'

const SKILLS = [
  { name: 'Motion Design', pct: 93, color: 'var(--neon-lime)' },
  { name: 'SFX Engineering', pct: 90, color: 'var(--neon-pink)' },
  { name: 'Music Production', pct: 95, color: 'var(--neon-cyan)' },
  { name: 'Visual Effects', pct: 90, color: 'var(--neon-purple)' },
  { name: 'Brand Storytelling', pct: 87, color: 'var(--neon-orange)' },
  { name: 'Creative Direction', pct: 85, color: 'var(--neon-lime)' },
]

function SkillRow({ name, pct, color }) {
  const fillRef = useRef(null)
  const rowRef = useReveal()

  useEffect(() => {
    const el = rowRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fillRef.current) {
        fillRef.current.style.width = pct + '%'
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={rowRef} className={`rv ${styles.row}`}>
      <div className={styles.head}>
        <span className={styles.name}>{name}</span>
        <span className={styles.pct} style={{ color }}>{pct}%</span>
      </div>
      <div className={styles.bar}>
        <div
          ref={fillRef}
          className={styles.fill}
          style={{ background: color, '--c': color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useReveal()
  return (
    <section id="skills" className={styles.section}>
      <div ref={headRef} className={`rv ${styles.head}`}>
        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>// Craft</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          My <span className="hl">Expertise</span>
        </h2>
      </div>
      <div className={styles.grid}>
        {SKILLS.map(s => <SkillRow key={s.name} {...s} />)}
      </div>
    </section>
  )
}
