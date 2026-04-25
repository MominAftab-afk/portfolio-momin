import useReveal from './useReveal'
import styles from './Contact.module.css'

const LINKS = [
  {
    label: 'Gmail',
    href:  'mailto:mughalmomin065@gmail.com',
    color: 'var(--neon-lime)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: '@mominaftabb',
    href:  'https://www.instagram.com/mominaftabb/',
    color: 'var(--neon-pink)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/momin-mughal-761544255/',
    color: 'var(--neon-cyan)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const h1 = useReveal()
  const h2 = useReveal()
  const h3 = useReveal()
  const h4 = useReveal()

  return (
    <section id="contact" className={styles.section}>
      <span className={styles.bgText} aria-hidden>CONTACT</span>

      <div ref={h1} className={`rv ${styles.label}`}>// Get In Touch</div>

      <h2 ref={h2} className={`rv ${styles.title}`}>
        Let's Make<br />
        <span className="hl">Something Crazy.</span>
      </h2>

      <p ref={h3} className={`rv ${styles.sub}`}>
        Have a project, a collab idea, or you just want to talk<br />
        motion and sound? Hit me up.
      </p>

      <div ref={h4} className={`rv ${styles.links}`}>
        {LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={styles.link}
            style={{ '--c': l.color }}
            data-hover
          >
            {l.icon}
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
