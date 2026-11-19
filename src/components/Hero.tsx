import { useEffect, useState } from 'react'
import type { PointerEvent } from 'react'
import { ArrowDown, ArrowUpRight, Sparkle } from 'lucide-react'
import { products } from '../data/products'
import { ProductVisual } from './ProductVisual'
import { WhatsAppLink } from './WhatsApp'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function CountUp({ to }: { to: number }) {
  const [value, setValue] = useState(() => (prefersReducedMotion() ? to : 0))
  useEffect(() => {
    if (prefersReducedMotion()) return
    let frame = 0
    const start = performance.now() + 1100
    const tick = (now: number) => {
      const progress = Math.min(1, Math.max(0, (now - start) / 1500))
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [to])
  return <><span aria-hidden="true">{value}</span><span className="sr-only">{to}</span></>
}

export function Hero() {
  const heroProducts = ['pecana', 'frutos-rojos', 'intenso'].map(id => products.find(product => product.id === id)!)

  // Las barras siguen suavemente al cursor, cada una con distinta profundidad.
  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', String(((event.clientX - rect.left) / rect.width - 0.5) * 2))
    event.currentTarget.style.setProperty('--my', String(((event.clientY - rect.top) / rect.height - 0.5) * 2))
  }
  const onLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--mx', '0')
    event.currentTarget.style.setProperty('--my', '0')
  }

  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-line" />UN BUEN MOMENTO EMPIEZA AQUÍ</p>
      <h1 id="hero-title"><span className="h-line"><span>Un pequeño</span></span>{' '}<span className="h-line"><span>break.</span></span>{' '}<span className="h-line"><span><em>Un gran antojo.</em></span></span></h1>
      <p className="hero-description">Barras de chocolate Machu Picchu, en sabores<br className="desktop-break" /> que te invitan a hacer una pausa. ¿Cuál es el tuyo?</p>
      <div className="hero-actions"><a className="button button-primary" href="#sabores">Descubrir sabores <ArrowUpRight size={19} /></a><WhatsAppLink className="button button-text" /></div>
      <div className="hero-note"><span className="note-dot" />Tú eliges el sabor. Lo coordinamos por WhatsApp.</div>
    </div>
    <div className="hero-art" aria-label="Selección de barras de chocolate Machu Picchu" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-circle" aria-hidden="true" />
      <span className="hero-star star-one" aria-hidden="true"><Sparkle strokeWidth={1} /></span>
      <span className="hero-star star-two" aria-hidden="true"><Sparkle strokeWidth={1} /></span>
      <div className="hero-handwritten" aria-hidden="true">Tu pausa más rica<svg viewBox="0 0 100 60" fill="none"><path pathLength={1} d="M4 4C23 38 63 6 78 44M64 39l16 9 3-19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></div>
      {heroProducts.map((product, index) => <div key={product.id} className={`hero-bar hero-bar-${index}`}><ProductVisual product={product} eager /></div>)}
      <div className="variety-stamp"><span>UN MUNDO DE SABORES</span><strong><CountUp to={products.length} /></strong><span>FORMAS DE TENTARTE</span></div>
      <div className="hero-label"><span className="label-line" />Hecho en Cusco, Perú<small>Según el empaque del fabricante</small></div>
    </div>
    <a className="scroll-cue" href="#sabores"><ArrowDown size={15} />QUE EMPIECE EL ANTOJO</a>
  </section>
}
