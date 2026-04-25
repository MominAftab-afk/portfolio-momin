import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work',  href: '#work'  },
  { label: 'Skills',href: '#skills'},
  { label: 'Contact',href:'#contact'},
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>MA/</span>

      <button
        className={`${styles.burger} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
