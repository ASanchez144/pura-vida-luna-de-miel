"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Closing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-jungle-950 px-6">
      {/* Fondo con gradiente radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(61,133,98,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Línea superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jungle-700 to-transparent" />

      {/* Partículas de luz */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${10 + Math.random() * 80}%`,
            backgroundColor: i % 3 === 0 ? "#fcd34d" : i % 3 === 1 ? "#b9ecfd" : "#8ec2a7",
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.5, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeOut",
          }}
        />
      ))}

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-10"
        />

        {/* Título del cierre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95] mb-8"
        >
          Que sea
          <span className="block italic text-turquoise-300 mt-1">
            inolvidable
          </span>
        </motion.h2>

        {/* Cita */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mb-12"
        >
          <div className="absolute -top-4 -left-4 text-6xl text-jungle-800 font-serif leading-none select-none">
            "
          </div>
          <p className="font-serif italic text-xl md:text-2xl text-jungle-300 leading-relaxed px-8">
            Pura vida no es una frase. Es una forma de mirar el mundo.
            Una pausa, un abrazo, un volcán al atardecer. Es exactamente esto.
          </p>
          <div className="absolute -bottom-4 -right-4 text-6xl text-jungle-800 font-serif leading-none select-none">
            "
          </div>
        </motion.blockquote>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-white/4 rounded-2xl border border-white/6 p-8 mb-10"
        >
          <p className="font-sans text-jungle-300 text-base leading-relaxed mb-4">
            Inés, Sergio — os deseo que este viaje sea el primero de muchos.
            Que cada vez que penséis en Costa Rica, sonriáis.
            Y que el «Pura Vida» se os quede pegado al alma.
          </p>
          <p className="font-sans text-jungle-400 text-sm">
            Os quiero un montón. Disfrutadlo muchísimo.
          </p>
          <div className="mt-6 pt-6 border-t border-white/8">
            <p className="font-serif italic text-2xl text-jungle-300 mb-3">
              Con todo nuestro cariño,
            </p>
            <p className="font-serif text-3xl text-cream leading-snug">
              Alejandro, Sandra<br />
              <span className="text-turquoise-300">&amp; Arturo</span>
            </p>
          </div>
        </motion.div>

        {/* Símbolo Pura Vida */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl"
          >
            🌿
          </motion.div>
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-jungle-700" />
            <span className="text-jungle-500 text-xs uppercase tracking-[0.5em] font-sans">
              Pura Vida
            </span>
            <div className="w-8 h-px bg-jungle-700" />
          </div>
          <p className="text-jungle-700 text-xs font-sans mt-2">
            Costa Rica · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>

      {/* Degradado al fondo absoluto */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </footer>
  );
}
