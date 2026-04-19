"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function WelcomeLetter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Ornamento de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#2d6a4f" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#2d6a4f" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="#2d6a4f" strokeWidth="0.5" />
          <path d="M20 100 Q60 40 100 20 Q140 40 180 100 Q140 160 100 180 Q60 160 20 100Z" stroke="#2d6a4f" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M20 100 Q60 40 100 20 Q140 40 180 100 Q140 160 100 180 Q60 160 20 100Z" stroke="#00b4d8" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header de la carta */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-jungle-400" />
            <span className="text-jungle-500 text-xs uppercase tracking-[0.4em] font-sans">
              Una carta para vosotros
            </span>
            <div className="w-8 h-px bg-jungle-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-jungle-900 leading-tight">
            Querida Inés,<br />
            <span className="italic text-jungle-600">querido Sergio</span>
          </h2>
        </FadeIn>

        {/* Cuerpo de la carta */}
        <div
          ref={ref}
          className="relative bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_60px_rgba(26,58,45,0.08)] border border-jungle-100"
        >
          {/* Esquinas decorativas */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-500 opacity-60" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold-500 opacity-60" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold-500 opacity-60" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-500 opacity-60" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="space-y-5 font-sans text-jungle-800 leading-relaxed text-base md:text-[17px]"
          >
            <p>
              Hay regalos que se compran, y hay regalos que se construyen.
              Este es de los segundos.
            </p>

            <p>
              Cuando supe que os casabais, pensé mucho en qué daros. No quería
              algo que ocupe espacio en una estantería ni algo que se olvide con
              el tiempo. Quería daros algo que viváis, que sintáis, que recordéis
              cuando os miréis y sepáis que hubo un momento en que todo fue perfecto.
            </p>

            <p>
              Ese momento es este viaje.
            </p>

            <p>
              Costa Rica no es solo un destino. Es un lugar donde la naturaleza
              te recuerda lo pequeño y lo maravilloso que es existir. Donde la
              selva huele a lluvia y tierra, donde los volcanes respiran y los
              canales reflejan el cielo al amanecer. Donde la gente te dice
              <em className="text-jungle-600 font-medium"> "Pura Vida"</em> y lo
              dicen de verdad.
            </p>

            <p>
              He preparado este viaje con todo el cariño del mundo. Cada día tiene
              algo especial esperándoos. No es solo un itinerario —es una invitación
              a desconectaros del mundo y conectaros el uno con el otro.
            </p>

            <p>
              Merecéis esto y mucho más.
            </p>

            <p>
              Os quiero muchísimo.
            </p>
          </motion.div>

          {/* Firma */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 pt-8 border-t border-jungle-100"
          >
            <p className="font-serif italic text-2xl text-jungle-700 mb-1">
              Con todo mi amor
            </p>
            <p className="font-serif text-3xl text-jungle-900">
              Arturo
            </p>
            <div className="mt-3 w-16 h-px bg-gold-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
