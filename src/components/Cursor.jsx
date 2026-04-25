import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const posRef   = useRef({ mx: 0, my: 0, tx: 0, ty: 0 })
  const rafRef   = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      posRef.current.mx = e.clientX
      posRef.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 4 + 'px'
        dotRef.current.style.top  = e.clientY - 4 + 'px'
      }
    }

    const animate = () => {
      const p = posRef.current
      p.tx += (p.mx - p.tx - 18) * 0.13
      p.ty += (p.my - p.ty - 18) * 0.13
      if (ringRef.current) {
        ringRef.current.style.left = p.tx + 'px'
        ringRef.current.style.top  = p.ty + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const grow = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'scale(2.5)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1.5)'
    }
    const shrink = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  style={styles.dot}  />
      <div ref={ringRef} style={styles.ring} />
    </>
  )
}

const styles = {
  dot: {
    width: 8, height: 8,
    background: 'var(--neon-lime)',
    borderRadius: '50%',
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none', zIndex: 9999,
    boxShadow: '0 0 10px var(--neon-lime), 0 0 30px var(--neon-lime)',
    transition: 'transform 0.08s',
  },
  ring: {
    width: 36, height: 36,
    border: '1.5px solid var(--neon-pink)',
    borderRadius: '50%',
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none', zIndex: 9998,
    boxShadow: '0 0 8px var(--neon-pink)',
    transition: 'transform 0.14s ease',
  },
}
