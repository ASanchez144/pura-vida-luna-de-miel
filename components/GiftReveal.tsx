"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const giftDetails = [
  {
    icon: "✈️",
    title: "Vuelos",
    description: "Vuelos de ida y vuelta España–San José, con escala incluida.",
  },
  {
    icon: "🏨",
    title: "Alojamiento completo",
    description:
      "Siete noches en hoteles y lodges seleccionados: Tortuguero, Arenal y Manuel Antonio.",
  },
  {
    icon: "🛶",
    title: "Traslados",
    description:
      "Transfers entre destinos incluidos: lancha por los canales, transporte terrestre y más.",
  },
  {
    icon: "🌿",
    title: "Actividades",
    description:
      "Tour de canales en Tortuguero, aguas termales en Arenal, y entrada al Parque de Manuel Antonio.",
  },
];

export default function GiftReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Ornamento de fondo */}
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
            Todo lo que habéis leído hasta aquí es real. Este viaje está pagado y organizado para vosotros.
          </p>
        </motion.div>

        {/* Caja del regalo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Tarjeta principal */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a3a2d 0%, #0d2018 50%, #1e4435 100%)",
              boxShadow:
                "0 0 0 1px rgba(212,168,71,0.2), 0 30px 80px rgba(0,0,0,0.3), 0 0 100px rgba(212,168,71,0.05)",
            }}
          >
            {/* Bordes dorados decorativos */}
            <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-gold-500/40" />
            <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-gold-500/40" />
            <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-gold-500/40" />
            <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-gold-500/40" />

            {/* Brillo de fondo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(212,168,71,0.08) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-8 md:p-12 text-center">
              {/* Icono central */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl md:text-6xl mb-6 inline-block"
              >
                🎁
              </motion.div>

              <h3 className="font-serif text-2xl md:text-3xl text-cream mb-3">
                Tu luna de miel en Costa Rica
              </h3>
              <p className="font-sans text-jungle-400 text-sm mb-8 leading-relaxed max-w-sm mx-auto">
                8 días · 7 noches · Tortuguero · Arenal · Manuel Antonio
              </p>

              {/* Botón de revelar */}
              {!isOpen && (
                <motion.button
                  onClick={() => setIsOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-400 text-jungle-950 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(212,168,71,0.4)] hover:shadow-[0_6px_30px_rgba(212,168,71,0.5)] transition-shadow duration-300"
                >
                  <span>Ver qué incluye</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </motion.button>
              )}

              {/* Detalles del regalo */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-left">
                      {giftDetails.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="bg-white/5 rounded-2xl p-5 border border-white/8 hover:bg-white/8 transition-colors duration-300"
                        >
                          <div className="text-2xl mb-3">{item.icon}</div>
                          <h4 className="font-serif text-cream text-lg mb-2">{item.title}</h4>
                          <p className="font-sans text-jungle-400 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="mt-8 pt-8 border-t border-white/10"
                    >
                      <p className="font-serif italic text-xl text-jungle-300 mb-2">
                        Todo esto es vuestro.
                      </p>
                      <p className="font-sans text-jungle-500 text-sm">
                        Los detalles prácticos os llegará por separado. Solo tenéis que hacer las maletas.
                      </p>
                    </motion.div>
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
