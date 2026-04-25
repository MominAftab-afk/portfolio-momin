import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work',  href: '#work'  },
  { label: 'Skills',href: '#skills'},
  { label: 'Contact',href:'#contact'},
]

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>MA/</span>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
