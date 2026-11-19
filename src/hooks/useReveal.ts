import { useEffect, useRef } from 'react'

// Marca el elemento con la clase "is-in" la primera vez que entra en pantalla.
// El estilo inicial (oculto) solo se aplica si <html> tiene la clase "motion-ok",
// así que sin JavaScript o con movimiento reducido el contenido siempre se ve.
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-in')
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-in')
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return ref
}
