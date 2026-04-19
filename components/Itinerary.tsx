"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const days = [
  {
    day: 1,
    date: "España → San José",
    title: "El comienzo",
    description:
      "Dejáis atrás lo conocido y os lanzáis hacia lo extraordinario. El vuelo es el primer acto de esta historia.",
    emoji: "✈️",
    accent: "#2d6a4f",
    bg: "from-jungle-950 to-jungle-800",
    textLight: true,
    detail: "Vuelo internacional · Llegada a Juan Santamaría",
  },
  {
    day: 2,
    date: "San José → Tortuguero",
    title: "Los canales",
    description:
      "Una lancha os lleva por canales bordeados de selva densa. El mundo se vuelve verde, húmedo y silencioso.",
    emoji: "🛶",
    accent: "#0093c7",
    bg: "from-turquoise-900 to-jungle-900",
    textLight: true,
    detail: "Navegación fluvial · Lodge en la selva",
  },
  {
    day: 3,
    date: "Tortuguero",
    title: "La selva viva",
    description:
      "Los canales son un ecosistema sin igual. Tortugas, caimanes, monos. La naturaleza en estado puro.",
    emoji: "🐢",
    accent: "#3d8562",
    bg: "from-jungle-800 to-jungle-950",
    textLight: true,
    detail: "Avistamiento de fauna · Playa de tortugas",
  },
  {
    day: 4,
    date: "Tortuguero → Arenal",
    title: "El volcán despierta",
    description:
      "Os desplazáis hacia el corazón de Costa Rica, donde un volcán majestuoso domina el horizonte.",
    emoji: "🌋",
    accent: "#c56c2f",
    bg: "from-sand-900 to-jungle-900",
    textLight: true,
    detail: "Traslado terrestre · Primer avistamiento del Arenal",
  },
  {
    day: 5,
    date: "Arenal",
    title: "Fuego y agua",
    description:
      "Aguas termales con vistas al volcán. Senderismo entre coladas de lava. Adrenalina y calma en el mismo día.",
    emoji: "♨️",
    accent: "#d4a847",
    bg: "from-sand-800 to-sand-950",
    textLight: true,
    detail: "Aguas termales · Actividades en el parque",
  },
  {
    day: 6,
    date: "Arenal → Manuel Antonio",
    title: "Hacia el Pacífico",
    description:
      "La selva se abre y aparece el océano. Palmeras, olas y el cielo más naranja que hayáis visto.",
    emoji: "🌊",
    accent: "#0cb8e9",
    bg: "from-turquoise-800 to-turquoise-950",
    textLight: true,
    detail: "Costa Pacífica · Hotel con vista al mar",
  },
  {
    day: 7,
    date: "Manuel Antonio",
    title: "El último paraíso",
    description:
      "Playa blanca, monos capuchinos entre los árboles y un atardecer que vale más que cualquier foto.",
    emoji: "🌅",
    accent: "#d4a847",
    bg: "from-sand-700 to-turquoise-900",
    textLight: true,
    detail: "Parque Nacional · Atardecer en la playa",
  },
  {
    day: 8,
    date: "Manuel Antonio → España",
    title: "El regreso",
    description:
      "Con los corazones llenos y la maleta cargada de recuerdos, el viaje más importante de vuestras vidas emprende el regreso.",
    emoji: "🏠",
    accent: "#2d6a4f",
    bg: "from-jungle-800 to-jungle-950",
    textLight: true,
    detail: "Vuelo de regreso · Llegada a España",
  },
];

function DayCard({ day, index }: { day: (typeof days)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} gap-0 md:gap-8 items-stretch`}
      >
        {/* Número del día */}
        <div
          className={`flex md:flex-col items-center ${isEven ? "md:items-end" : "md:items-start"} md:w-28 flex-shrink-0 pt-1`}
        >
          <span className="font-serif text-7xl md:text-8xl font-bold leading-none"
            style={{ color: day.accent, opacity: 0.15 }}>
            {day.day}
          </span>
        </div>

        {/* Tarjeta */}
        <div
          className={`flex-1 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${day.bg} p-7 md:p-8`}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1 flex-shrink-0">{day.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <span
                  className="text-xs font-sans uppercase tracking-widest font-medium px-2 py-1 rounded-full w-fit"
                  style={{ backgroundColor: `${day.accent}33`, color: day.accent === "#d4a847" ? "#fcd34d" : "#b9ecfd" }}
                >
                  Día {day.day}
                </span>
                <span className="text-jungle-400 text-sm font-sans">
                  {day.date}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-cream mb-3 leading-tight">
                {day.title}
              </h3>
              <p className="font-sans text-jungle-300 text-sm md:text-base leading-relaxed mb-4">
                {day.description}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-px" style={{ backgroundColor: day.accent }} />
                <span className="text-xs text-jungle-500 font-sans">{day.detail}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Itinerary() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-jungle-950 relative overflow-hidden">
      {/* Línea vertical decorativa */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-jungle-700 to-transparent opacity-30 hidden md:block" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-jungle-600" />
            <span className="text-jungle-400 text-xs uppercase tracking-[0.4em] font-sans">
              El viaje
            </span>
            <div className="w-8 h-px bg-jungle-600" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Vuestro itinerario
          </h2>
          <p className="font-sans text-jungle-400 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Nueve días que os cambiarán. Cada uno tiene su alma propia.
          </p>
        </motion.div>

        {/* Días */}
        <div className="space-y-6 md:space-y-8">
          {days.map((day, index) => (
            <DayCard key={day.day} day={day} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
