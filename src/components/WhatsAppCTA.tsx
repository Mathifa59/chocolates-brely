import { ArrowUpRight, Sparkle } from 'lucide-react'
import { WhatsAppLink } from './WhatsApp'

export function WhatsAppCTA() {
  return <section className="closing-section container" aria-labelledby="closing-title"><div className="closing-cta"><Sparkle className="closing-sparkle" strokeWidth={0.8} aria-hidden="true" /><div className="closing-copy"><p className="eyebrow">TU PRÓXIMA PAUSA TIENE SABOR</p><h2 id="closing-title">¿Ya elegiste<br /><em>tu favorito?</em></h2><p>Escríbenos y coordinamos tu pedido.<br />Así de simple. Así de rico.</p><WhatsAppLink className="button button-cream" arrow>Realizar pedido por WhatsApp</WhatsAppLink><span className="closing-note">Consulta sabores, precios y disponibilidad.</span></div><div className="closing-doodle" aria-hidden="true"><span>un mensaje,<br />mucho chocolate.</span><svg viewBox="0 0 200 160" fill="none"><path d="M160 15C196 60 130 131 44 104M62 90l-23 14 17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg><ArrowUpRight size={42} /></div></div></section>
}
