# Imágenes y verificación

## Recursos originales y versiones web

Los archivos originales se conservan en `assets/originals/`. Esta carpeta no se copia al build de producción.

- `assets/originals/LOGO2026.png`: fuente de los iconos y del logo del contacto.
- `assets/originals/images/`: fotografías y capturas originales, incluidas las que no se muestran actualmente.
- `public/images/`: versiones WebP de las imágenes utilizadas, en hasta tres tamaños. El navegador elige la adecuada mediante `srcset` y `sizes`.
- `src/data/images.json`: rutas, anchuras y alturas generadas para `OptimizedImage`.

Para cambiar o agregar una captura, guarda el original en `assets/originals/images/` y utiliza su nombre sin extensión en la propiedad `image` de `src/components/Projects.js`. Un arreglo permite mostrar varias imágenes en una tarjeta.

Regenera los archivos antes de compilar:

```bash
npm run optimize:images
npm run build
```

El proceso también genera `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `logo192.png`, `logo512.png` y `images/logo.webp` a partir del logo original. Conserva los archivos generados en el repositorio para que la compilación no dependa de volver a procesarlos.

## Comprobaciones

Verificado con Node.js 24. Las herramientas de optimización y pruebas son dependencias de desarrollo.

```bash
# Validación del formulario, codificación del correo y alternativas de copia
npm test -- --watchAll=false --runInBand

# Instalar el navegador de pruebas la primera vez
npx playwright install chromium

# Compilar y comprobar navegación, modal, formulario, contraste e imágenes
npm run test:e2e
```

También se puede utilizar Microsoft Edge ya instalado, sin descargar Chromium. En PowerShell:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm run test:e2e
```

Las pruebas de navegador usan una vista previa local del build en `http://127.0.0.1:4173/portafolio/`. Los resultados y capturas se guardan en `test-results/`, excluido de Git.

## Contacto y accesibilidad

El formulario valida los campos, dirige el foco al primer error y prepara un enlace `mailto:`. Solicita abrir la aplicación de correo del visitante; el envío se confirma en esa aplicación. Si no se abre, el borrador permanece disponible para copiarlo o seleccionarlo manualmente. Las pruebas del flujo válido simulan la apertura del cliente de correo.

Los enlaces internos son anclas nativas y las secciones reciben foco sin quedar ocultas bajo la barra de navegación. El visor usa un diálogo modal nativo, mantiene Tab dentro del visor y devuelve el foco al botón de origen al cerrar. Escape cierra el diálogo y las flechas recorren las imágenes.

El coral `#EA6D73` se conserva en los fondos de marca con texto oscuro `#0F172A`. Para textos de acento sobre fondos claros se utiliza `#A52E3B`; sobre fondos oscuros, `#F4878C`. Las pruebas comprueban los contrastes principales en ambos temas, sin representar una certificación de accesibilidad de todo el sitio.
