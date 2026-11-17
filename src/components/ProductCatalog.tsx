import { useMemo, useState } from 'react'
import { ArrowDown, ArrowUpRight, Search, X } from 'lucide-react'
import { categories, products } from '../data/products'
import type { Filter, Product } from '../data/products'
import { ProductVisual } from './ProductVisual'
import { WhatsAppLink } from './WhatsApp'

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es')

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <div className="product-image-area" style={{ backgroundColor: product.color }}>
      <span className="cacao-tag">{product.cacao}% CACAO</span><span className="weight-tag">25 g</span>
      <ProductVisual product={product} />
      <span className="product-category">{product.category}</span>
    </div>
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price">{product.price !== undefined ? new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(product.price) : 'Consulta precio y disponibilidad'}</div>
      <WhatsAppLink productName={product.name} className="product-order" arrow>{product.available === false ? 'Consultar disponibilidad' : 'Pedir por WhatsApp'}</WhatsAppLink>
    </div>
  </article>
}

export function ProductCatalog() {
  const [category, setCategory] = useState<Filter>('Todos')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(false)
  const filtered = useMemo(() => products.filter(product => (category === 'Todos' || product.category === category) && normalize(product.name).includes(normalize(query.trim()))), [category, query])
  const visible = expanded ? filtered : filtered.slice(0, 8)

  return <section id="sabores" className="catalog section-space" aria-labelledby="catalog-title">
    <div className="container">
      <div className="section-heading">
        <div><p className="eyebrow">LA PARTE DIFÍCIL ES ELEGIR</p><h2 id="catalog-title">A cada antojo,<br /><em>su chocolate.</em></h2></div>
        <p>Para los de siempre y los que quieren probar algo nuevo.<br />Explora los sabores y encuentra tu próxima pausa favorita.</p>
      </div>
      <div className="catalog-toolbar">
        <div className="category-filters" role="group" aria-label="Filtrar por tipo de sabor">{categories.map(item => <button key={item} className={`filter-button ${category === item ? 'selected' : ''}`} aria-pressed={category === item} onClick={() => { setCategory(item); setExpanded(false) }}>{item}{item === 'Todos' && <span>{products.length}</span>}</button>)}</div>
        <div className="search-box"><Search size={17} aria-hidden="true" /><input type="search" aria-label="Buscar un sabor" placeholder="Busca tu sabor" value={query} onChange={event => { setQuery(event.target.value); setExpanded(false) }} />{query && <button aria-label="Borrar búsqueda" onClick={() => setQuery('')}><X size={16} /></button>}</div>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">{filtered.length} sabores encontrados. Mostrando {visible.length}.</p>
      {visible.length ? <div className="product-grid">{visible.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><Search size={29} /><h3>Ese antojo aún no está por aquí.</h3><p>Prueba con otro sabor o explora nuestra selección.</p><button className="button button-primary" onClick={() => { setQuery(''); setCategory('Todos'); setExpanded(false) }}>Ver todos los sabores <ArrowUpRight size={17} /></button></div>}
      {filtered.length > 8 && <div className="catalog-more"><button className="button button-outline" aria-expanded={expanded} onClick={() => { setExpanded(!expanded); if (expanded) document.getElementById('sabores')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }}>{expanded ? 'Ver menos sabores' : `Ver los ${filtered.length} sabores`}<ArrowDown size={17} className={expanded ? 'rotate-180' : ''} /></button><span>{expanded ? filtered.length : Math.min(filtered.length, 8)} de {filtered.length} sabores · elige sin prisa</span></div>}
    </div>
  </section>
}
