import { useEffect } from 'react'

// Escribe en <html>: --progress (0 a 1) para la barra de lectura y
// data-scrolled para compactar el encabezado. Sin re-renderizar React.
export function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement
    let queued = false
    const update = () => {
      queued = false
      const max = root.scrollHeight - window.innerHeight
      root.style.setProperty('--progress', max > 0 ? String(Math.min(1, window.scrollY / max)) : '0')
      if (window.scrollY > 24) root.setAttribute('data-scrolled', '')
      else root.removeAttribute('data-scrolled')
    }
    const onScroll = () => {
      if (!queued) {
        queued = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
