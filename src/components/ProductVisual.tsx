import type { CSSProperties } from 'react'
import type { Product } from '../data/products'

export function ProductVisual({ product, className = '', eager = false, decorative = false }: { product: Product; className?: string; eager?: boolean; decorative?: boolean }) {
  const xs = product.corners.map(([x]) => x)
  const ys = product.corners.map(([, y]) => y)
  const left = Math.min(...xs)
  const top = Math.min(...ys)
  const width = Math.max(...xs) - left
  const height = Math.max(...ys) - top
  const photoHeight = product.photoHeight || 400
  const style: CSSProperties = {
    width: `${300 / width * 100}%`,
    left: `${-left / width * 100}%`,
    top: `${-top / height * 100}%`,
    clipPath: `polygon(${product.corners.map(([x, y]) => `${x / 3}% ${y / photoHeight * 100}%`).join(',')})`,
  }
  return <div className={`product-cutout ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
    <img src={product.image} alt={decorative ? '' : `Barra Machu Picchu de ${product.name}, ${product.cacao}% cacao`} loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'} width={900} height={Math.round(photoHeight * 3)} style={style} />
  </div>
}
