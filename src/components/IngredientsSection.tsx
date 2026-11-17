import { ArrowUpRight, Bean, Cherry, Nut } from 'lucide-react'
import { products } from '../data/products'
import { ProductVisual } from './ProductVisual'

export function FlavorRibbon() {
  return <div className="flavor-ribbon"><div className="container ribbon-inner"><span><Bean size={19} />Cacao con carácter</span><i /><span><Cherry size={19} />Sabores para descubrir</span><i /><span><Nut size={19} />Tu pausa, a tu gusto</span><i /><span className="ribbon-last">Del empaque a tu próximo antojo <ArrowUpRight size={17} /></span></div></div>
}

export function IngredientsSection() {
  return <section id="ingredientes" className="ingredients section-space" aria-labelledby="ingredients-title"><div className="container ingredients-grid">
    <div className="ingredients-visual">
      <div className="ingredient-photo-caption"><span>LA SELECCIÓN</span><span>MACHU PICCHU</span></div>
      <div className="ingredient-circle" aria-hidden="true" />
      <ProductVisual product={products.find(item => item.id === 'almendra')!} className="ingredient-bar-back" />
      <ProductVisual product={products.find(item => item.id === 'profundo')!} className="ingredient-bar-front" />
      <div className="cacao-caption"><span>El cacao,</span><em>siempre protagonista.</em></div>
    </div>
    <div className="ingredients-copy"><p className="eyebrow">CONOCE LO QUE ELIGES</p><h2 id="ingredients-title">Buen chocolate.<br /><em>Muchas posibilidades.</em></h2><p className="ingredients-intro">Del cacao intenso a las combinaciones con frutas y frutos secos. Una selección de barras Machu Picchu para explorar a tu gusto.</p>
      <dl className="ingredient-facts"><div><dt>75%, 85% y 99%</dt><dd>de cacao, según la variedad.</dd></div><div><dt>25 gramos</dt><dd>en las presentaciones fotografiadas.</dd></div><div><dt>Frutas y frutos secos</dt><dd>Sabores como arándano, pecana y pistacho.</dd></div></dl>
      <details className="ingredient-details"><summary>Sobre ingredientes y alérgenos <span aria-hidden="true">+</span></summary><p>Los nombres de sabores y porcentajes se tomaron del frente de los empaques. <strong>La lista completa de ingredientes y alérgenos está pendiente de confirmar con el fabricante.</strong> Consúltala antes de elegir si tienes alguna restricción alimentaria.</p></details>
    </div>
  </div></section>
}
