import React from 'react'
import { 
  ArrowRight, 
  Play, 
  Target, 
  Crown, 
  Star,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu
} from 'lucide-react'
import bgImage from '../assets/mominBG.jpg'
import styles from './Intro.module.css'

const BRANDS = [
  'Zero', 'Audionic', 'Ronin', 'Login',
  'TCW', 'EU Pakistan', 'MRC Afghanistan', '& Many More'
]

const StatItem = ({ value, label }) => (
  <div className={styles.statItem}>
    <span className={styles.statVal}>{value}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
)

export default function Intro({ onEnter }) {
  return (
    <section className={styles.hero}>
      
      {/* ── Background Image with Mask ── */}
      <div 
        className={styles.bgImage}
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      
      {/* ── Overlay Gradient (Darken slightly for readability) ── */}
      <div className={styles.bgOverlay} aria-hidden />

      <div className={styles.container}>
        <div className={styles.gridCols}>
          
          {/* ══════════════════════════════════════
              LEFT COLUMN
              ══════════════════════════════════════ */}
          <div className={styles.leftCol}>
            
            {/* Badge */}
            <div className={`${styles.badgeWrap} ${styles.fadeIn} ${styles.d100}`}>
              <div className={styles.badge}>
                <span className={styles.badgeText}>
                  Creative Yet Lively Design
                  <Star className={styles.starIcon} />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className={`${styles.heading} ${styles.fadeIn} ${styles.d200}`}>
              Crafting Digital<br />
              <span className={styles.gradientText}>Experiences</span><br />
              That Matter
            </h1>

            {/* Description */}
            <p className={`${styles.desc} ${styles.fadeIn} ${styles.d300}`}>
              Hi, I'm <strong>Momin Aftab</strong>, a Motion Designer & SFX Engineer. 
              Turning brands into experiences through visuals that move and sound that sticks. 
            </p>

            {/* CTA Buttons */}
            <div className={`${styles.btnGroup} ${styles.fadeIn} ${styles.d400}`}>
              <button onClick={onEnter} className={styles.btnPrimary}>
                View Portfolio
                <ArrowRight className={styles.btnIcon} />
              </button>
              
              <a href="mailto:momin.aftab@example.com" className={styles.btnSecondary}>
                <Play className={styles.btnIconPlay} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT COLUMN
              ══════════════════════════════════════ */}
          <div className={styles.rightCol}>
            
            {/* ── Stats Card ── */}
            <div className={`${styles.glassCard} ${styles.fadeIn} ${styles.d500}`}>
              {/* Internal glow */}
              <div className={styles.cardGlow} aria-hidden />

              <div className={styles.cardContent}>
                
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Target className={styles.targetIcon} />
                  </div>
                  <div>
                    <div className={styles.cardTitle}>30+</div>
                    <div className={styles.cardSub}>Projects Delivered</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressSection}>
                  <div className={styles.progressHeader}>
                    <span className={styles.progressLabel}>Client Satisfaction</span>
                    <span className={styles.progressValue}>98%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: '98%' }} />
                  </div>
                </div>

                <div className={styles.divider} />

                {/* Mini Stats */}
                <div className={styles.miniStats}>
                  <div className={styles.statsRow1}>
                    <StatItem value="5+" label="Years" />
                    <StatItem value="Full" label="Customer Support" />
                  </div>
                  <div className={styles.qualityRow}>
                    <StatItem value="100%" label="Quality Achieved" />
                  </div>
                </div>

                {/* Tag Pills */}
                <div className={styles.tagGroup}>
                  <div className={styles.tagPill}>
                    <span className={styles.pingWrap}>
                      <span className={styles.pingAnim}></span>
                      <span className={styles.pingDot}></span>
                    </span>
                    ACTIVE
                  </div>
                </div>

              </div>
            </div>

            {/* ── Marquee Card ── */}
            <div className={`${styles.marqueeCard} ${styles.fadeIn} ${styles.d600}`}>
              <h3 className={styles.marqueeTitle}>Trusted by Industry Leaders</h3>
              
              <div className={styles.marqueeWrap}>
                <div className={styles.marqueeTrack}>
                  {/* Triple list for seamless loop */}
                  {[...BRANDS, ...BRANDS, ...BRANDS].map((brandName, i) => (
                    <div key={i} className={styles.marqueeItem}>
                      <span className={styles.marqueeText}>{brandName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ── Mobile Only Floating CTA ── */}
        <div className={`${styles.mobileCtaWrap} ${styles.fadeIn} ${styles.d600}`}>
          <button onClick={onEnter} className={styles.btnMassive}>
            <div className={styles.btnGlow} />
            <span className={styles.btnText}>View Portfolio</span>
            <ArrowRight className={styles.btnIconMassive} />
          </button>
        </div>

      </div>
    </section>
  )
}
