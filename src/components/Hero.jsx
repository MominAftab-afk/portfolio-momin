import photo from '../assets/momin.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* animated grid */}
      <div className={styles.grid} aria-hidden />

      {/* glow blobs */}
      <div className={`${styles.blob} ${styles.b1}`} aria-hidden />
      <div className={`${styles.blob} ${styles.b2}`} aria-hidden />
      <div className={`${styles.blob} ${styles.b3}`} aria-hidden />

      {/* background watermark */}
      <span className={styles.bgText} aria-hidden>MA</span>

      {/* ── LEFT ── */}
      <div className={styles.left}>
        <div className={styles.eyebrow}>Available — Motion + Sound</div>

        <h1 className={styles.name}>
          <span className={styles.nameWord1}>MOMIN</span>
          <span className={styles.nameWord2} data-text="AFTAB">AFTAB</span>
        </h1>

        <p className={styles.role}>
          <em className={styles.em}>Motion Designer</em>
          {' & '}
          <em className={styles.em}>SFX · Music Engineer</em>
          <br />
          Turning brands into experiences through<br />
          visuals that move and sound that sticks.
        </p>

        <div className={styles.buttons}>
          <a href="#work"    className={styles.btnNeon}>View Portfolio</a>
          <a href="#contact" className={styles.btnGhost}>Get In Touch</a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className={styles.right}>
        <div className={styles.imgWrap}>
          <span className={styles.cornerTR} aria-hidden />
          <span className={styles.cornerBL} aria-hidden />
          <img src={photo} alt="Momin Aftab — Motion Designer" className={styles.photo} />
          <div className={styles.imgOverlay} aria-hidden />
          <div className={styles.floatLabelBL}>Motion + Sound 🎬</div>
          <div className={styles.floatLabelTR}>Pakistan 🇵🇰</div>
        </div>
      </div>
    </section>
  )
}
