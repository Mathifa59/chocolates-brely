import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductCatalog } from './components/ProductCatalog'
import { FlavorRibbon, IngredientsSection } from './components/IngredientsSection'
import { WhatsAppCTA } from './components/WhatsAppCTA'
import { WhatsAppFloatingButton, WhatsAppProvider } from './components/WhatsApp'
import { Footer } from './components/Footer'
import { useScrollEffects } from './hooks/useScrollEffects'

export default function App() {
  useScrollEffects()
  return <WhatsAppProvider><div id="inicio">
    <div className="progress" aria-hidden="true" />
    <div className="ambient" aria-hidden="true"><i /><i /><i /></div>
    <Header /><main id="contenido"><Hero /><FlavorRibbon /><ProductCatalog /><IngredientsSection /><WhatsAppCTA /></main><Footer /><WhatsAppFloatingButton />
  </div></WhatsAppProvider>
}
