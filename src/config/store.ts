export const store = {
  // Nombre que se muestra como marca de la tienda; el fabricante y la marca son Machu Picchu.
  name: import.meta.env.VITE_STORE_NAME || 'Machu Picchu',
  nameIsPlaceholder: false,
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '51981916198',
  manufacturer: 'Machu Picchu',
}

export function getWhatsAppMessage(productName?: string) {
  return productName
    ? `¡Hola! Me gustaría pedir el chocolate de ${productName}. ¿Podrías brindarme el precio, la disponibilidad y la información para realizar mi pedido?`
    : '¡Hola! Me gustaría conocer las barras de chocolate disponibles, sus precios y cómo realizar un pedido.'
}

export function getWhatsAppUrl(productName?: string) {
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(productName))}`
}

export const isWhatsAppConfigured = /^\d{10,15}$/.test(store.whatsappNumber)
