# Pura Vida — Luna de miel en Costa Rica

Experiencia web de regalo de boda para luna de miel en Costa Rica.

---

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000 en tu navegador.

---

## Personalizar el vídeo

Abre `components/VideoMessage.tsx` y cambia la constante `VIDEO_URL`:

```ts
// YouTube:
const VIDEO_URL = "https://www.youtube.com/embed/TU_ID_AQUI";

// Vimeo:
const VIDEO_URL = "https://player.vimeo.com/video/TU_ID_AQUI";
```

El ID de YouTube está en la URL del vídeo después de `v=`.

---

## Personalizar el texto de la firma

En `components/WelcomeLetter.tsx` y `components/Closing.tsx` puedes cambiar el nombre "Arturo" por el tuyo.

---

## Desplegar en Vercel

### Opción A — CLI (más rápido)

```bash
npm install -g vercel
vercel
```

Sigue el asistente: Next.js se detecta automáticamente.

### Opción B — GitHub + Vercel web

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a https://vercel.com/new y conecta el repositorio.
3. Vercel detecta Next.js y despliega automáticamente.
4. Obtienes una URL pública lista para compartir.

---

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
