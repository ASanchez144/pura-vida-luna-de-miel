"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/*
 * CÓMO CAMBIAR EL VÍDEO:
 * Sustituye VIDEO_ID por el ID de tu vídeo de YouTube (la parte tras "v=" en la URL).
 * Ejemplo YouTube: https://www.youtube.com/watch?v=ABC123 → VIDEO_ID = "ABC123"
 * El vídeo NUNCA se almacena en el proyecto, solo se enlaza.
 */
const VIDEO_ID = "dQw4w9WgXcQ";

export default function VideoMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  const [started, setStarted] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  // Cuando entra en viewport, arranca el vídeo tras una pequeña pausa dramática
  useEffect(() => {
    if (isInView && !started) {
      const t = setTimeout(() => {
        setStarted(true);
        // Oculta el overlay tras la transición
        setTimeout(() => setOverlayVisible(false), 1200);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [isInView, started]);

  const src = started
    ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=0&rel=0&modestbranding=1&controls=1&showinfo=0`
    : "";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Iframe de vídeo a pantalla completa ── */}
      <div className="absolute inset-0 w-full h-full">
        {started && (
          <motion.iframe
            ref={iframeRef}
            src={src}
            title="Un mensaje para vosotros"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            style={{ aspectRatio: "unset" }}
          />
        )}
      </div>

      {/* ── Overlay de introducción (desaparece al empezar el vídeo) ── */}
      <AnimatePresence>
        {overlayVisible && (
          <motion.div
            key="overlay"
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(13,32,24,0.85) 0%, rgba(0,0,0,0.97) 100%)",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Partículas */}
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: i % 3 === 0 ? 3 : 2,
                  height: i % 3 === 0 ? 3 : 2,
                  left: `${8 + Math.random() * 84}%`,
                  top: `${8 + Math.random() * 84}%`,
                  backgroundColor:
                    i % 3 === 0 ? "#fcd34d" : i % 3 === 1 ? "#b9ecfd" : "#8ec2a7",
                  opacity: 0,
                }}
                animate={{ opacity: [0, 0.8, 0], scale: [0, 1.6, 0], y: [0, -24] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={isInView ? { opacity: 1, letterSpacing: "0.5em" } : {}}
              transition={{ duration: 1.4, delay: 0.2 }}
              className="text-turquoise-300 text-xs font-sans font-medium uppercase tracking-[0.5em] mb-8"
            >
              Un mensaje para vosotros
            </motion.p>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[0.95] mb-6"
            >
              Antes de empezar,
              <span className="block italic text-turquoise-300 mt-2">
                quiero deciros algo.
              </span>
            </motion.h2>

            {/* Línea */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-8"
            />

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
              className="font-sans text-jungle-400 text-base max-w-sm leading-relaxed mb-12"
            >
              Subid el volumen. Sentaos los dos juntos.
            </motion.p>

            {/* Indicador de carga / spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="flex flex-col items-center gap-3"
            >
              {!started ? (
                <>
                  <motion.div
                    className="w-10 h-10 rounded-full border-2 border-turquoise-400/40 border-t-turquoise-300"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="text-jungle-500 text-xs font-sans tracking-widest uppercase">
                    Preparando...
                  </span>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-turquoise-300 text-sm font-sans"
                >
                  ▶ Reproduciendo
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Degradado inferior para transición suave a la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />
    </section>
  );
}
