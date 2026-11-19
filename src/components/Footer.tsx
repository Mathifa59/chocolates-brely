import { ArrowUpRight } from 'lucide-react'
import { store } from '../config/store'
import { Brand } from './Header'
import { WhatsAppLink } from './WhatsApp'

export function Footer() {
  return <footer className="footer container"><div className="footer-main"><div><Brand /><p>Un sabor para cada pausa.</p></div><nav aria-label="Enlaces del pie de página"><a href="#sabores">Explorar sabores <ArrowUpRight size={15} /></a><WhatsAppLink className="footer-whatsapp">Hablemos por WhatsApp</WhatsAppLink></nav></div><div className="footer-bottom"><p>Comercializamos barras Machu Picchu. La marca y la elaboración pertenecen a su fabricante.</p><span>Hecho para disfrutar.</span></div>{store.nameIsPlaceholder && <p className="placeholder-note">Nombre comercial provisional: {store.name}.</p>}</footer>
}
