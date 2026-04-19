"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Leaf = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={style}
    animate={{ y: [0, -15, 0], rotate: [0, 5, -3, 0] }}
    transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" opacity={0.15}>
      <path
        d="M30 2C30 2 55 20 55 45C55 62 44 75 30 78C16 75 5 62 5 45C5 20 30 2 30 2Z"
        fill="#3d8562"
        stroke="#2d6a4f"
        strokeWidth="1"
      />
      <line x1="30" y1="10" x2="30" y2="75" stroke="#2d6a4f" strokeWidth="1.5" opacity={0.6} />
      <line x1="30" y1="30" x2="18" y2="20" stroke="#2d6a4f" strokeWidth="1" opacity={0.5} />
      <line x1="30" y1="40" x2="15" y2="32" stroke="#2d6a4f" strokeWidth="1" opacity={0.5} />
      <line x1="30" y1="50" x2="17" y2="44" stroke="#2d6a4f" strokeWidth="1" opacity={0.5} />
      <line x1="30" y1="30" x2="42" y2="20" stroke="#2d6a4f" strokeWidth="1" opacity={0.5} />
      <line x1="30" y1="40" x2="45" y2="32" stroke="#2d6a4f" strokeWidth="1" opacity={0.5} />
      <line x1="30" y1="50" x2="43" y2="44" stroke="#2d6a4f" strokeWidth="1" opacity={0.5} />
    </svg>
  </motion.div>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const leaves = [
    { top: "8%", left: "5%", transform: "rotate(-20deg) scale(1.4)" },
    { top: "15%", right: "6%", transform: "rotate(25deg) scale(1.2)" },
    { bottom: "20%", left: "8%", transform: "rotate(-35deg) scale(1.6)" },
    { bottom: "15%", right: "4%", transform: "rotate(15deg) scale(1.3)" },
    { top: "40%", left: "2%", transform: "rotate(-10deg) scale(1.1)" },
    { top: "35%", right: "2%", transform: "rotate(30deg) scale(1.0)" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-jungle-950"
    >
      {/* Fondo de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-950 via-jungle-900 to-jungle-800" />

      {/* Capa de bruma */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,180,216,0.08) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hojas decorativas */}
      {leaves.map((style, i) => (
        <Leaf key={i} style={style as React.CSSProperties} />
      ))}

      {/* Partículas de luz */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gold-300 pointer-events-none"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
            y: [0, -30],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Contenido principal con parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-turquoise-300 text-xs font-sans font-medium uppercase tracking-[0.5em] mb-8"
        >
          Costa Rica · 2026
        </motion.p>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] mb-6"
        >
          Pura
          <span className="block italic text-turquoise-300">Vida</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"
        />

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif italic text-2xl md:text-3xl text-jungle-300 mb-4"
        >
          7 días · 7 recuerdos
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-sans text-base md:text-lg text-jungle-400 max-w-md mx-auto leading-relaxed"
        >
          Un regalo para que vuestra luna de miel sea tan extraordinaria como vosotros
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-jungle-500 text-xs uppercase tracking-widest font-sans">
            Desplázate
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-jungle-500 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Línea divisoria inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jungle-700 to-transparent" />
    </section>
  );
}
