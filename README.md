# Landing de barras de chocolate

React + Vite + TypeScript + Tailwind CSS + Lucide React. Sitio estático sin backend, carrito ni pagos. Las 31 variedades se identificaron en las fotografías proporcionadas.

## Ejecutar

Desde esta carpeta (`chocolate-landing`):

```powershell
npm install
npm run dev
```

Abre la dirección local que muestra Vite. Para validar y generar la versión de producción:

```powershell
npm run build
npm run preview
```

`npm run check` comprueba TypeScript. Node.js 22.12+ o 24 recomendado.

## Datos pendientes antes de recibir pedidos

1. Copia `.env.example` como `.env.local`.
2. Cambia `VITE_WHATSAPP_NUMBER=519XXXXXXXX` por tu número real, con código de país y sin `+`, espacios ni guiones.
3. Cambia `VITE_STORE_NAME` por el nombre de tu negocio. **“Un antojo” es un nombre comercial provisional**, no el nombre del fabricante.
4. Agrega precios y disponibilidad confirmados en `src/data/products.ts` si deseas mostrarlos.
5. Confirma la lista completa de ingredientes y alérgenos con el fabricante; las fotos muestran el frente del empaque y no permiten confirmar esa información.

Reinicia Vite después de editar variables de entorno. En producción, vuelve a ejecutar el build y despliega la nueva versión. En Vercel, configura estas mismas variables en el proyecto antes del build.

Mientras el número siga siendo un placeholder, los botones no abren un destinatario inexistente: muestran un aviso accesible con la consulta del sabor seleccionado y permiten copiarla. Con un número configurado, todos abren directamente `https://wa.me/NUMERO?text=MENSAJE` en otra pestaña. El enlace y el mensaje se construyen en `src/config/store.ts`.

## Cambiar el contenido

| Contenido | Archivo o carpeta |
| --- | --- |
| Nombre comercial y WhatsApp | `.env.local` o `src/config/store.ts` |
| Productos, sabores, descripciones y categorías | `src/data/products.ts` |
| Precio opcional en soles | Campo `price` de cada producto, como número |
| Stock opcional | Campo `available` de cada producto |
| Ingredientes confirmados por producto | Campo opcional `ingredients`; al completarlo, adapta la sección de ingredientes para mostrar la ficha confirmada |
| Fotografías optimizadas | `public/images/` |
| Relación entre fotografías y originales | `src/data/image-sources.json` |
| Textos de portada | `src/components/Hero.tsx` |
| Ingredientes y advertencia de información pendiente | `src/components/IngredientsSection.tsx` |
| Textos finales | `src/components/WhatsAppCTA.tsx` |
| Colores, tipografía y diseño responsive | `src/styles.css` |
| Título, descripción y Open Graph | `index.html` |
| Imagen para compartir | `public/social-preview.jpg` |

Puedes agregar o eliminar productos editando solo el arreglo `products`. Los filtros, el conteo y los mensajes se actualizan automáticamente. No se inventaron precios ni disponibilidad. Los porcentajes 75%, 85% y 99%, los sabores y los 25 g se tomaron de las etiquetas fotografiadas. No se presenta al distribuidor como fabricante.

Las imágenes conservan las fotografías reales. `ProductVisual` encuadra el empaque mediante un polígono CSS definido en `corners` (ancho de referencia: 300 px). Para nuevas fotos, ajusta esos puntos o utiliza una fotografía del producto con un encuadre equivalente. Las fotografías verticales 900×1600 usan `photoHeight: 1600/3`; las de proporción 3:4 usan 400.

El script opcional `scripts/prepare-assets.py` crea copias WebP optimizadas a partir de las fotografías originales de la carpeta superior. Requiere Python y Pillow solo si se regeneran los recursos; no es necesario para ejecutar o desplegar la web. Los originales no se modifican.

Las fuentes se sirven desde el propio sitio. Las imágenes secundarias tienen carga diferida. La navegación móvil, el diálogo de contacto, los estados de foco y las preferencias de movimiento reducido están contemplados.

## Publicar en Vercel

Selecciona **Vite** como framework y esta carpeta como raíz del proyecto. Comando de build: `npm run build`. Carpeta de salida: `dist`. No requiere funciones, base de datos ni reglas de redirección.

Al usar tu propio dominio o Vercel, actualiza `og:url` y `og:image` en `index.html` con la URL final. El archivo `.openai/hosting.json` únicamente configura la copia alojada en Sites.
