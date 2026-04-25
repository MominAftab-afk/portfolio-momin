import styles from './Ticker.module.css'

const ITEMS = [
  'Motion Design', 'SFX Engineering', 'Music Production',
  'Brand Films', 'Visual Effects', 'Sound Design', 'Crazy Content',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}> · </span>
          </span>
        ))}
      </div>
    </div>
  )
}
