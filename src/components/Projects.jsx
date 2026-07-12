import { useState, useEffect, useRef } from 'react'
import useReveal from './useReveal'
import styles from './Projects.module.css'

const VIDEOS = [
  { id: 'pATLSB69Jgw', num: '01', title: 'The Vision' },
  { id: 'ZNbwGBjPtJk', num: '02', title: 'The Process' },
  { id: 'KBDNCjrc-3Y', num: '03', title: 'The Build' },
  { id: 'bIaaFdH1-C8', num: '04', title: 'The Launch' },
]

export default function Projects() {
  const headRef   = useReveal()
  const descRef   = useReveal()
  const ctaRef    = useReveal()
  const scrollRef = useRef(null)

  const [active, setActive]     = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      if (travel <= 0) return
      const p = Math.max(0, Math.min(0.999, -rect.top / travel))
      setProgress(p)
      setActive(Math.max(0, Math.min(VIDEOS.length - 1, Math.floor(p * VIDEOS.length))))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const current = VIDEOS[active]

  return (
    <section id="projects" className={styles.section}>
      {/* ── Intro ── */}
      <div className={styles.intro}>
        <div ref={headRef} className="rv">
          <span className="section-label">// Featured Project</span>
          <h2 className="section-title">
            LumiNexis <span className="hl">TBG</span>
          </h2>
        </div>
        <p ref={descRef} className={`rv ${styles.desc}`}>
          Helped LumiNexis TBG distill a full build-validate-launch pipeline into
          four cinematic shorts — each one built to hook investors and founders
          within the first five seconds.
        </p>
      </div>

      {/* ── Scroll-driven sticky area ── */}
      <div ref={scrollRef} className={styles.scrollWrap}>
        <div className={styles.sticky} style={{ '--progress': progress }}>

          {/* Animated grid background */}
          <div className={styles.grid} aria-hidden />

          {/* Aurora blobs */}
          <div className={styles.aurora} aria-hidden>
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.orb3} />
            <div className={styles.orb4} />
          </div>

          {/* Noise texture overlay */}
          <div className={styles.noise} aria-hidden />

          {/* Large watermark number */}
          <span className={styles.bigNum} key={`big-${active}`} aria-hidden>
            {current.num}
          </span>

          {/* Floating particles */}
          <div className={styles.particles} aria-hidden>
            <span className={`${styles.particle} ${styles.p1}`} />
            <span className={`${styles.particle} ${styles.p2}`} />
            <span className={`${styles.particle} ${styles.p3}`} />
            <span className={`${styles.particle} ${styles.p4}`} />
            <span className={`${styles.particle} ${styles.p5}`} />
            <span className={`${styles.particle} ${styles.p6}`} />
          </div>

          {/* ── Device frame ── */}
          <div className={styles.device}>
            {/* Outer decorative ring */}
            <div className={styles.outerRing} aria-hidden />
            {/* Orbit ring */}
            <div className={styles.orbit} aria-hidden>
              <span className={styles.orbitDot} />
            </div>

            {/* Main frame with rotating gradient border */}
            <div className={styles.frameOuter}>
              <div className={styles.frameGlow} />
              <div className={styles.frame}>
                {/* Top bar (device notch) */}
                <div className={styles.topBar} aria-hidden>
                  <span className={styles.statusDot} />
                  <span className={styles.statusLine} />
                </div>

                {/* YouTube video */}
                <iframe
                  key={current.id}
                  src={`https://www.youtube.com/embed/${current.id}?rel=0&modestbranding=1&playsinline=1`}
                  title={`LumiNexis TBG — ${current.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                />

                {/* Bottom home bar */}
                <div className={styles.bottomBar} aria-hidden>
                  <span className={styles.homeIndicator} />
                </div>
              </div>
            </div>

            {/* Floating labels around the device */}
            <div className={styles.floatTag + ' ' + styles.tagLeft} key={`tag-l-${active}`}>
              <span className={styles.tagDot} />
              <span className={styles.tagText}>EP.{current.num}</span>
            </div>
            <div className={styles.floatTag + ' ' + styles.tagRight} key={`tag-r-${active}`}>
              <span className={styles.tagText}>{current.title}</span>
              <span className={styles.tagLine} />
            </div>
            <div className={styles.floatTag + ' ' + styles.tagTop}>
              <span className={styles.tagPulse} />
              <span className={styles.tagText}>Now Playing</span>
            </div>
          </div>

          {/* Reflection */}
          <div className={styles.reflection} aria-hidden />

          {/* Meta bar */}
          <div className={styles.meta}>
            <span className={styles.num} key={`n-${active}`}>{current.num}</span>
            <span className={styles.slash}>/</span>
            <span className={styles.total}>04</span>
            <h3 className={styles.videoTitle} key={`t-${active}`}>{current.title}</h3>
            <div className={styles.dots}>
              {VIDEOS.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotOn : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Side progress rail */}
          <div className={styles.rail}>
            <div className={styles.railTrack}>
              <div className={styles.railFill} />
            </div>
            {VIDEOS.map((v, i) => (
              <div
                key={i}
                className={`${styles.railNode} ${i <= active ? styles.railNodeOn : ''}`}
              >
                <span className={styles.railDot} />
                <span className={styles.railLabel}>{v.num}</span>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className={styles.scrollHint}>
            <div className={styles.scrollPill}>
              <span className={styles.scrollDot} />
            </div>
            <span className={styles.scrollText}>Scroll</span>
          </div>
        </div>
      </div>

      {/* ── Outro ── */}
      <div className={styles.outro}>
        <div ref={ctaRef} className="rv">
          <a
            href="https://luminexistbg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            data-hover
          >
            Visit LumiNexis TBG <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
