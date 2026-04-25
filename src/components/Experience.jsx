import useReveal from './useReveal'
import styles from './Experience.module.css'

const EXP = [
  {
    date:  '2024 — May 2026',
    co:    'Underscore Media',
    desc:  'Full-time Motion Designer & SFX Engineer. Delivered motion and audio work for Pakistan\'s major brands — from Zero to Audionic — spanning campaigns, explainers, and branded content. Built the sonic identity for TCW\'s entire explainer library.',
    icon:  '🎬',
  },
  {
    date:  'International',
    co:    'EU Pakistan · MRC Afghanistan',
    desc:  'Produced visual and motion content for EU–Pakistan collaboration videos, MRC Afghanistan campaigns, and internationally distributed platforms — reaching audiences across three countries.',
    icon:  '🌍',
  },
  {
    date:  'Ongoing',
    co:    'Independent / Own Content',
    desc:  'Creating a new personal portfolio — experimental motion, wild visual concepts, and self-directed content that pushes the boundaries of what motion design can look and sound like.',
    icon:  '⚡',
  },
]

function ExpItem({ date, co, desc, icon }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`rv ${styles.item}`} data-hover>
      <div className={styles.date}>{date}</div>
      <div className={styles.body}>
        <div className={styles.co}>{co}</div>
        <p  className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  )
}

export default function Experience() {
  const headRef = useReveal()
  return (
    <section id="work" className={styles.section}>
      <div ref={headRef} className={`rv ${styles.head}`}>
        <span className="section-label">// Experience</span>
        <h2 className="section-title">
          Where I've <span className="hl">Built Things</span>
        </h2>
      </div>
      <div className={styles.list}>
        {EXP.map(e => <ExpItem key={e.co} {...e} />)}
      </div>
    </section>
  )
}
