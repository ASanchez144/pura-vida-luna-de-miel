"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function GiftReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(212,168,71,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-600 text-xs uppercase tracking-[0.4em] font-sans">
              El regalo
            </span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-jungle-900 mb-4">
            Vuestro{" "}
            <span className="italic text-gradient-gold">regalo</span>
          </h2>
          <p className="font-sans text-jungle-500 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Sí, hay algo físico. Y tiene su miga.
          </p>
        </motion.div>

        {/* Tarjeta principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a3a2d 0%, #0d2018 50%, #1e4435 100%)",
              boxShadow:
                "0 0 0 1px rgba(212,168,71,0.2), 0 30px 80px rgba(0,0,0,0.3), 0 0 100px rgba(212,168,71,0.05)",
            }}
          >
            {/* Esquinas doradas */}
            <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-gold-500/40" />
            <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-gold-500/40" />
            <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-gold-500/40" />
            <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-gold-500/40" />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(212,168,71,0.08) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-8 md:p-12 text-center">
              {/* Icono con animación */}
              <motion.div
                animate={{ rotate: [0, 6, -4, 2, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl md:text-7xl mb-6 inline-block"
              >
                📦
              </motion.div>

              <h3 className="font-serif text-2xl md:text-3xl text-cream mb-4 leading-snug">
                Vuestro regalo está en{" "}
                <span className="italic text-gold-400">Zaragoza</span>
              </h3>

              <p className="font-sans text-jungle-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto mb-8">
                Allí os espera, quietecito, sin moverse. Tendréis que ir a buscarlo
                —o maniobrar diplomáticamente para que alguien os lo acerque. Eso ya es cosa vuestra.
              </p>

              {/* Botón de revelar */}
              {!isOpen && (
                <motion.button
                  onClick={() => setIsOpen(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-400 text-jungle-950 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(212,168,71,0.4)] hover:shadow-[0_8px_35px_rgba(212,168,71,0.55)] transition-shadow duration-300"
                >
                  <span>¿Quién tiene el regalo?</span>
                  <span className="text-base">🔍</span>
                </motion.button>
              )}

              {/* Reveal */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4"
                  >
                    {/* Pista con efecto de "expediente secreto" */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15, duration: 0.6 }}
                      className="bg-white/6 rounded-2xl border border-gold-500/20 p-6 md:p-8 text-left"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-2xl">📍</span>
                        <span className="text-gold-400 text-xs uppercase tracking-widest font-sans">
                          Localización confirmada
                        </span>
                      </div>

                      <p className="font-serif italic text-xl md:text-2xl text-cream mb-4 leading-snug">
                        "Está en casa de Arturo. En Zaragoza. No se mueve solo."
                      </p>

                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <div className="flex items-start gap-3">
                          <span className="text-lg mt-0.5">💡</span>
                          <p className="font-sans text-jungle-300 text-sm leading-relaxed">
                            <span className="text-cream font-medium">Opción A:</span> Acercaos por Zaragoza. Excusa perfecta para una visita.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg mt-0.5">🚗</span>
                          <p className="font-sans text-jungle-300 text-sm leading-relaxed">
                            <span className="text-cream font-medium">Opción B:</span> Convenced a alguien de que os lo lleve. Recomiendo encanto y algún soborno dulce.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg mt-0.5">📞</span>
                          <p className="font-sans text-jungle-300 text-sm leading-relaxed">
                            <span className="text-cream font-medium">Opción C:</span> Llamad directamente al distribuidor oficial del regalo, que está disponible 24/7.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-6 font-serif italic text-jungle-400 text-base"
                    >
                      La logística también forma parte de la aventura. 🌿
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
