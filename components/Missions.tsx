"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const missions = [
  {
    day: 1,
    place: "En el avión",
    title: "Cena sin pantallas",
    description:
      "Esta noche, en el vuelo, cenad juntos sin mirar el teléfono. Hablaos de lo que os espera. Imaginad Costa Rica.",
    icon: "🍽️",
    color: "jungle",
    accent: "#3d8562",
  },
  {
    day: 2,
    place: "Tortuguero",
    title: "Brindar con \"Pura Vida\"",
    description:
      "Al llegar al lodge, pedid dos bebidas con hielo y brindad diciendo «Pura Vida». Así empieza todo.",
    icon: "🥂",
    color: "turquoise",
    accent: "#0cb8e9",
  },
  {
    day: 3,
    place: "Los canales",
    title: "La foto con un animal",
    description:
      "Encontrad un animal salvaje —tortuga, mono, caimán— y haceos una foto con él de fondo. Sin filtros.",
    icon: "📸",
    color: "jungle",
    accent: "#2d6a4f",
  },
  {
    day: 4,
    place: "Volcán Arenal",
    title: "Ver el volcán juntos",
    description:
      "Al atardecer, buscad el mejor punto de vista del Arenal. Quedaos en silencio un momento. Ese silencio vale mucho.",
    icon: "🌋",
    color: "sand",
    accent: "#c56c2f",
  },
  {
    day: 5,
    place: "Arenal",
    title: "Elegir vuestra aventura",
    description:
      "Tirolina, kayak, senderismo o simplemente las aguas termales. Hoy elegís vosotros. No hay opción mala.",
    icon: "🧭",
    color: "gold",
    accent: "#d4a847",
  },
  {
    day: 6,
    place: "Manuel Antonio",
    title: "Un momento de calma",
    description:
      "Encontrad un rincón tranquilo frente al Pacífico. Sentaos, respirad y no hagáis nada durante diez minutos.",
    icon: "🌊",
    color: "turquoise",
    accent: "#0093c7",
  },
  {
    day: 7,
    place: "Último atardecer",
    title: "Escribiros algo bonito",
    description:
      "En el último atardecer, cada uno escribe algo al otro. Puede ser una frase, una palabra, un poema. Lo que salga del corazón.",
    icon: "💌",
    color: "gold",
    accent: "#d4a847",
  },
];

function MissionCard({
  mission,
  index,
}: {
  mission: (typeof missions)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [done, setDone] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setDone(!done)}
        className={`
          relative cursor-pointer rounded-2xl p-6 border transition-all duration-500 select-none
          ${done
            ? "bg-jungle-900 border-jungle-600 shadow-[0_0_30px_rgba(61,133,98,0.2)]"
            : "bg-white border-jungle-100 shadow-[0_2px_20px_rgba(26,58,45,0.06)] hover:border-jungle-200 hover:shadow-[0_8px_30px_rgba(26,58,45,0.12)]"
          }
        `}
      >
        {/* Número del día — fondo decorativo */}
        <div
          className="absolute top-4 right-5 font-serif text-6xl font-bold leading-none pointer-events-none select-none"
          style={{ color: mission.accent, opacity: done ? 0.25 : 0.08 }}
        >
          {mission.day}
        </div>

        <div className="flex items-start gap-4">
          {/* Check / Emoji */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300"
            style={{
              backgroundColor: done ? `${mission.accent}30` : `${mission.accent}10`,
              border: `1px solid ${mission.accent}${done ? "60" : "20"}`,
            }}
          >
            {done ? "✓" : mission.icon}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-xs font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${mission.accent}15`,
                  color: mission.accent,
                }}
              >
                Día {mission.day}
              </span>
              <span className={`text-xs font-sans ${done ? "text-jungle-500" : "text-jungle-400"}`}>
                {mission.place}
              </span>
            </div>
            <h3
              className={`font-serif text-xl mb-2 transition-colors duration-300 ${done ? "text-jungle-300 line-through decoration-jungle-600" : "text-jungle-900"}`}
            >
              {mission.title}
            </h3>
            <p className={`font-sans text-sm leading-relaxed transition-colors duration-300 ${done ? "text-jungle-500" : "text-jungle-600"}`}>
              {mission.description}
            </p>
          </div>
        </div>

        {done && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 pt-4 border-t border-jungle-700"
          >
            <p className="text-xs text-jungle-500 font-sans italic">
              ✓ Completada — este recuerdo ya es vuestro para siempre.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Missions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-off-white relative overflow-hidden">
      {/* Fondo sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(61,133,98,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(12,184,233,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-jungle-300" />
            <span className="text-jungle-500 text-xs uppercase tracking-[0.4em] font-sans">
              Misiones
            </span>
            <div className="w-8 h-px bg-jungle-300" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-jungle-900 mb-4">
            7 momentos para{" "}
            <span className="italic text-jungle-600">recordar</span>
          </h2>
          <p className="font-sans text-jungle-500 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Una pequeña misión por cada día. Tocad la tarjeta cuando la completéis.
          </p>
        </motion.div>

        {/* Grid de misiones */}
        <div className="grid gap-4 sm:grid-cols-2">
          {missions.map((mission, index) => (
            <MissionCard key={mission.day} mission={mission} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-jungle-400 text-sm font-sans mt-8 italic"
        >
          No son obligaciones. Son invitaciones.
        </motion.p>
      </div>
    </section>
  );
}
