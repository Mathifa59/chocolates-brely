import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductCatalog } from './components/ProductCatalog'
import { FlavorRibbon, IngredientsSection } from './components/IngredientsSection'
import { WhatsAppCTA } from './components/WhatsAppCTA'
import { WhatsAppFloatingButton, WhatsAppProvider } from './components/WhatsApp'
import { Footer } from './components/Footer'

export default function App() {
  return <WhatsAppProvider><div id="inicio"><Header /><main id="contenido"><Hero /><FlavorRibbon /><ProductCatalog /><IngredientsSection /><WhatsAppCTA /></main><Footer /><WhatsAppFloatingButton /></div></WhatsAppProvider>
}
