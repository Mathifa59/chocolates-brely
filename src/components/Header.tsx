import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Sparkle, X } from 'lucide-react'
import { store } from '../config/store'
import { WhatsAppLink } from './WhatsApp'

export function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label={`${store.name}, ir al inicio`}>
    <span className="brand-mark" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <i key={i} />)}</span>
    <span>{store.name.toLowerCase()}<span className="brand-period">.</span><small>DISTRIBUIDOR DE CHOCOLATE</small></span>
  </a>
}

export function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <div className="announcement"><Sparkle size={12} /><span>Hay un chocolate para cada antojo.</span><a href="#sabores">Encuentra el tuyo <ArrowUpRight size={12} /></a></div>
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav aria-label="Navegación principal" id="main-navigation" className={`navigation ${open ? 'is-open' : ''}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#sabores" onClick={() => setOpen(false)}>Sabores</a>
          <a href="#ingredientes" onClick={() => setOpen(false)}>Ingredientes</a>
        </nav>
        <WhatsAppLink className="button button-primary header-order" />
        <button className="icon-button menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
      </div>
    </header>
  </>
}
