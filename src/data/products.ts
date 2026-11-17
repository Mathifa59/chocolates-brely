export type Category = 'Frutales' | 'Frutos secos' | 'Intensos' | 'Otros sabores'
export type Point = readonly [number, number]

export interface Product {
  id: string
  name: string
  description: string
  image: string
  cacao: number
  category: Category
  color: string
  // Puntos del empaque en la foto, con ancho de referencia de 300 px.
  // Solo se recorta visualmente el fondo con CSS; se conserva la fotografía.
  corners: readonly [Point, Point, Point, Point]
  photoHeight?: number
  price?: number
  ingredients?: string[]
  available?: boolean
}

const photo = (id: string) => `/images/${id}.webp`

// Nombres, porcentajes y presentación tomados del frente de los empaques.
// No se proporcionaron precios, stock ni listas completas de ingredientes.
// Agregar aquí esos campos cuando el distribuidor los confirme.
export const products: Product[] = [
  { id: 'intenso', name: 'Intenso', description: 'Chocolate oscuro. Un clásico para tu pausa.', cacao: 75, category: 'Intensos', color: '#e3e8ef', image: photo('intenso'), corners: [[75,178],[185,178],[188,400],[68,400]] },
  { id: 'frutos-rojos', name: 'Frutos rojos', description: 'Chocolate con una combinación de frutos rojos.', cacao: 75, category: 'Frutales', color: '#f1e2e7', image: photo('frutos-rojos'), corners: [[97,161],[199,159],[205,360],[96,359]] },
  { id: 'pecana', name: 'Pecana', description: 'Cacao y pecana en una misma barra.', cacao: 75, category: 'Frutos secos', color: '#f3e4cf', image: photo('pecana'), corners: [[75,137],[189,142],[185,368],[60,363]] },
  { id: 'pistacho', name: 'Pistacho', description: 'Tu chocolate, con el sabor del pistacho.', cacao: 75, category: 'Frutos secos', color: '#e5eadb', image: photo('pistacho'), corners: [[90,142],[185,142],[190,325],[90,326]] },
  { id: 'arandano', name: 'Arándano', description: 'Una combinación de chocolate y arándano.', cacao: 75, category: 'Frutales', color: '#e9e0ee', image: photo('arandano'), corners: [[77,170],[182,170],[185,374],[74,376]] },
  { id: 'caramelo-sal-de-maras', name: 'Caramelo y sal de Maras', description: 'Chocolate crocante con caramelo y sal de Maras.', cacao: 75, category: 'Otros sabores', color: '#f1dfd1', image: photo('caramelo-sal-de-maras'), corners: [[56,108],[171,104],[184,324],[62,330]] },
  { id: 'coco', name: 'Coco', description: 'El encuentro del chocolate con el coco.', cacao: 75, category: 'Otros sabores', color: '#ebe7df', image: photo('coco'), corners: [[63,128],[162,128],[166,310],[66,314]] },
  { id: 'maracuya', name: 'Maracuyá', description: 'Chocolate con un toque de maracuyá.', cacao: 75, category: 'Frutales', color: '#f0eccf', image: photo('maracuya'), corners: [[82,128],[196,130],[196,343],[79,343]] },
  { id: 'granilla-de-cacao', name: 'Granilla de cacao', description: 'Chocolate con granilla de cacao.', cacao: 75, category: 'Intensos', color: '#dfeef0', image: photo('granilla-de-cacao'), corners: [[92,172],[190,173],[194,368],[87,367]] },
  { id: 'mora', name: 'Mora', description: 'Chocolate oscuro con mora.', cacao: 75, category: 'Frutales', color: '#f2dfdd', image: photo('mora'), corners: [[92,135],[206,137],[206,359],[84,356]] },
  { id: 'quinua-tostada', name: 'Quinua tostada', description: 'Chocolate crocante con quinua tostada.', cacao: 75, category: 'Otros sabores', color: '#f1dfeb', image: photo('quinua-tostada'), corners: [[100,159],[197,163],[190,356],[87,349]] },
  { id: 'aguaymanto', name: 'Aguaymanto', description: 'Chocolate con aguaymanto.', cacao: 75, category: 'Frutales', color: '#f6e6ca', image: photo('aguaymanto'), corners: [[82,105],[202,102],[210,330],[88,333]] },
  { id: 'almendra', name: 'Almendra', description: 'Chocolate con almendra.', cacao: 75, category: 'Frutos secos', color: '#eeebd5', image: photo('almendra'), corners: [[63,96],[178,95],[184,310],[66,312]] },
  { id: 'damasco', name: 'Damasco', description: 'Una combinación de cacao y damasco.', cacao: 75, category: 'Frutales', color: '#eee8cd', image: photo('damasco'), corners: [[74,125],[183,125],[187,312],[73,313]] },
  { id: 'limon', name: 'Limón', description: 'Chocolate con limón.', cacao: 75, category: 'Frutales', color: '#e8ebd1', image: photo('limon'), corners: [[94,158],[184,154],[194,324],[103,330]] },
  { id: 'pasas-con-ron', name: 'Pasas con ron', description: 'Chocolate con pasas y ron, según su etiqueta.', cacao: 75, category: 'Otros sabores', color: '#e0e7f0', image: photo('pasas-con-ron'), corners: [[98,157],[200,158],[200,333],[95,332]] },
  { id: 'excelencia', name: 'Excelencia', description: 'La variedad de mayor porcentaje de cacao.', cacao: 99, category: 'Intensos', color: '#e3dfdc', image: photo('excelencia'), corners: [[70,99],[209,96],[215,332],[75,334]] },
  { id: 'mango', name: 'Mango', description: 'Chocolate oscuro con mango.', cacao: 75, category: 'Frutales', color: '#f3dfd7', image: photo('mango'), corners: [[84,139],[198,135],[214,351],[96,359]] },
  { id: 'kiwicha', name: 'Kiwicha', description: 'Chocolate con kiwicha.', cacao: 75, category: 'Otros sabores', color: '#eedfeb', image: photo('kiwicha'), corners: [[92,140],[192,141],[197,307],[96,312]] },
  { id: 'sal-de-maras', name: 'Sal de Maras', description: 'Cacao y sal de Maras en una barra.', cacao: 75, category: 'Otros sabores', color: '#f3e0dc', image: photo('sal-de-maras'), corners: [[91,181],[165,175],[176,321],[100,325]] },
  { id: 'kiwi', name: 'Kiwi', description: 'Una combinación de chocolate y kiwi.', cacao: 75, category: 'Frutales', color: '#dfedeb', image: photo('kiwi'), corners: [[73,132],[167,127],[180,306],[83,313]] },
  { id: 'platano', name: 'Plátano', description: 'Chocolate con plátano.', cacao: 75, category: 'Frutales', color: '#f0e8d2', image: photo('platano'), corners: [[96,112],[205,113],[212,324],[96,324]] },
  { id: 'hojas-de-coca', name: 'Hojas de coca', description: 'La variedad con hojas de coca del catálogo.', cacao: 75, category: 'Otros sabores', color: '#e5ead7', image: photo('hojas-de-coca'), corners: [[81,128],[180,134],[177,306],[70,303]] },
  { id: 'profundo', name: 'Profundo', description: 'Chocolate oscuro al 85% de cacao.', cacao: 85, category: 'Intensos', color: '#e1e3d5', image: photo('profundo'), corners: [[93,185],[181,185],[183,356],[91,356]] },
  { id: 'naranja', name: 'Naranja', description: 'Chocolate con naranja.', cacao: 75, category: 'Frutales', color: '#f2dfd0', image: photo('naranja'), corners: [[86,145],[179,145],[186,324],[88,326]] },
  { id: 'menta', name: 'Menta', description: 'Chocolate oscuro con menta.', cacao: 75, category: 'Otros sabores', color: '#dfeee8', image: photo('menta'), corners: [[104,196],[177,194],[185,335],[106,340]] },
  { id: 'cafe', name: 'Café', description: 'Chocolate al 85% de cacao con café.', cacao: 85, category: 'Intensos', color: '#e5dfd9', image: photo('cafe'), photoHeight: 1600/3, corners: [[86,195],[177,195],[180,366],[87,367]] },
  { id: 'mani', name: 'Maní', description: 'Chocolate oscuro con maní.', cacao: 75, category: 'Frutos secos', color: '#eee1d2', image: photo('mani'), corners: [[113,174],[200,175],[204,341],[113,342]] },
  { id: 'lucuma', name: 'Lúcuma', description: 'Chocolate con lúcuma.', cacao: 75, category: 'Frutales', color: '#e3ead7', image: photo('lucuma'), photoHeight: 1600/3, corners: [[97,162],[201,160],[209,354],[102,359]] },
  { id: 'maca', name: 'Maca', description: 'Chocolate oscuro con maca.', cacao: 75, category: 'Otros sabores', color: '#dfebee', image: photo('maca'), corners: [[106,181],[179,180],[188,330],[109,335]] },
  { id: 'cereza', name: 'Cereza', description: 'Chocolate con cereza.', cacao: 75, category: 'Frutales', color: '#f1dfe4', image: photo('cereza'), photoHeight: 1600/3, corners: [[96,191],[188,189],[198,363],[100,369]] },
]

export const categories = ['Todos', 'Frutales', 'Frutos secos', 'Intensos', 'Otros sabores'] as const
export type Filter = typeof categories[number]
