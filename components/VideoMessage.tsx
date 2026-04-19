"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

/*
 * CÓMO CAMBIAR EL VÍDEO:
 * 1. Sube tu vídeo a YouTube o Vimeo.
 * 2. Copia el ID del vídeo (la parte después de "v=" en YouTube, o el número en Vimeo).
 * 3. Reemplaza el valor de VIDEO_URL:
 *    - YouTube: "https://www.youtube.com/embed/TU_ID_AQUI"
 *    - Vimeo:   "https://player.vimeo.com/video/TU_ID_AQUI"
 * 4. El vídeo nunca se almacena en este proyecto — solo se enlaza externamente.
 */
const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
// Añade ?rel=0&modestbranding=1 para ocultar sugerencias de YouTube al final:
// const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1";

export default function VideoMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="section-padding bg-jungle-950 relative overflow-hidden">
      {/* Fondo de partículas de luz */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(12,184,233,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-jungle-600" />
            <span className="text-jungle-400 text-xs uppercase tracking-[0.4em] font-sans">
              Un mensaje
            </span>
            <div className="w-8 h-px bg-jungle-600" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Un mensaje{" "}
            <span className="italic text-turquoise-300">para vosotros</span>
          </h2>
          <p className="font-sans text-jungle-400 text-base max-w-sm mx-auto leading-relaxed">
            He grabado algo especial para que lo veáis juntos.
          </p>
        </motion.div>

        {/* Contenedor del vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Capa de presentación / botón */}
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="cover"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setIsRevealed(true)}
              >
                {/* Thumbnail placeholder con gradiente */}
                <div
                  className="w-full aspect-video bg-gradient-to-br from-jungle-900 via-jungle-800 to-turquoise-900 flex items-center justify-center relative"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Bordes decorativos */}
                  <div className="absolute inset-0 rounded-2xl border border-jungle-700" />
                  <div className="absolute inset-2 rounded-xl border border-jungle-800 opacity-50" />

                  {/* Ornamento central */}
                  <div className="relative z-10 text-center">
                    {/* Botón de play */}
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {/* Triángulo de play */}
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="ml-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </motion.div>

                    <motion.button
                      className="font-serif italic text-xl text-cream group-hover:text-turquoise-300 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      Ver el mensaje
                    </motion.button>
                    <p className="text-jungle-500 text-xs mt-2 font-sans">
                      Tocad para reproducir · Subid el volumen
                    </p>
                  </div>

                  {/* Partículas de luz en el fondo */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-turquoise-300 pointer-events-none"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                        opacity: 0,
                      }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2.5 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(12,184,233,0.15), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(12,184,233,0.05)",
                }}
              >
                {/* Marco decorativo exterior */}
                <div className="absolute inset-0 rounded-2xl border border-turquoise-700/30 pointer-events-none z-10" />

                {/* Iframe del vídeo */}
                <div className="w-full aspect-video">
                  <iframe
                    src={`${VIDEO_URL}?autoplay=1&rel=0&modestbranding=1`}
                    title="Un mensaje para vosotros"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nota inferior */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center text-jungle-600 text-xs font-sans mt-4 italic"
          >
            Vedlo juntos. En silencio. Con calma.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
