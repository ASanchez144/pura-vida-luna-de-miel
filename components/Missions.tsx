"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const missions = [
  {
    day: 1,
    place: "En el avión",
    title: "Cena sin pantallas",
    description:
      "Esta noche, en el vuelo, cenad juntos sin mirar el teléfono. Hablaos de lo que os espera. Imaginad Costa Rica.",
    icon: "🍽️",
    accent: "#3d8562",
    photoPrompt: "Haceos una foto juntos en el avión. Sin filtros.",
  },
  {
    day: 2,
    place: "Tortuguero",
    title: "Brindar con \"Pura Vida\"",
    description:
      "Al llegar al lodge, pedid dos bebidas con hielo y brindad diciendo «Pura Vida». Así empieza todo.",
    icon: "🥂",
    accent: "#0cb8e9",
    photoPrompt: "Foto del brindis. Que se vean las copas y las sonrisas.",
  },
  {
    day: 3,
    place: "Los canales",
    title: "La foto con un animal",
    description:
      "Encontrad un animal salvaje —tortuga, mono, caimán— y haceos una foto con él de fondo. Sin filtros.",
    icon: "📸",
    accent: "#2d6a4f",
    photoPrompt: "El animal en primer plano, vosotros detrás. Prueba de que estuvo ahí.",
  },
  {
    day: 4,
    place: "Volcán Arenal",
    title: "Ver el volcán juntos",
    description:
      "Al atardecer, buscad el mejor punto de vista del Arenal. Quedaos en silencio un momento. Ese silencio vale mucho.",
    icon: "🌋",
    accent: "#c56c2f",
    photoPrompt: "Los dos con el volcán al fondo. Hora dorada si puede ser.",
  },
  {
    day: 5,
    place: "Arenal",
    title: "Elegir vuestra aventura",
    description:
      "Tirolina, kayak, senderismo o simplemente las aguas termales. Hoy elegís vosotros. No hay opción mala.",
    icon: "🧭",
    accent: "#d4a847",
    photoPrompt: "Foto en plena actividad. Que se note la adrenalina —o la relajación.",
  },
  {
    day: 6,
    place: "Manuel Antonio",
    title: "Un momento de calma",
    description:
      "Encontrad un rincón tranquilo frente al Pacífico. Sentaos, respirad y no hagáis nada durante diez minutos.",
    icon: "🌊",
    accent: "#0093c7",
    photoPrompt: "El mar, vosotros, la calma. Sin posado. Como os pille.",
  },
  {
    day: 7,
    place: "Último atardecer",
    title: "Escribiros algo bonito",
    description:
      "En el último atardecer, cada uno escribe algo al otro. Puede ser una frase, una palabra, un poema. Lo que salga del corazón.",
    icon: "💌",
    accent: "#d4a847",
    photoPrompt: "Foto de lo que habéis escrito. Guardadla para siempre.",
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
  const inputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [done, setDone] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const handlePhoto = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhoto(url);
    setShowCamera(false);
    setDone(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        whileHover={{ y: -3, scale: 1.005 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className={`
          relative rounded-2xl border transition-all duration-500 overflow-hidden
          ${done
            ? "bg-jungle-900 border-jungle-600 shadow-[0_0_30px_rgba(61,133,98,0.15)]"
            : "bg-white border-jungle-100 shadow-[0_2px_20px_rgba(26,58,45,0.06)] hover:border-jungle-200 hover:shadow-[0_8px_30px_rgba(26,58,45,0.10)]"
          }
        `}
      >
        {/* Número decorativo de fondo */}
        <div
          className="absolute top-3 right-4 font-serif text-6xl font-bold leading-none pointer-events-none select-none"
          style={{ color: mission.accent, opacity: done ? 0.2 : 0.07 }}
        >
          {mission.day}
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Icono / check */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-all duration-300"
              style={{
                backgroundColor: `${mission.accent}${done ? "30" : "12"}`,
                border: `1px solid ${mission.accent}${done ? "50" : "20"}`,
              }}
            >
              {done ? "✓" : mission.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="text-xs font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${mission.accent}15`, color: mission.accent }}
                >
                  Día {mission.day}
                </span>
                <span className={`text-xs font-sans ${done ? "text-jungle-500" : "text-jungle-400"}`}>
                  {mission.place}
                </span>
              </div>
              <h3 className={`font-serif text-xl mb-2 transition-colors duration-300 ${done ? "text-jungle-300 line-through decoration-jungle-600" : "text-jungle-900"}`}>
                {mission.title}
              </h3>
              <p className={`font-sans text-sm leading-relaxed transition-colors duration-300 ${done ? "text-jungle-500" : "text-jungle-600"}`}>
                {mission.description}
              </p>
            </div>
          </div>

          {/* Foto preview */}
          <AnimatePresence>
            {photo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 overflow-hidden"
              >
                <div className="relative rounded-xl overflow-hidden border border-jungle-700/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={`Foto misión día ${mission.day}`}
                    className="w-full max-h-56 object-cover"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs font-sans text-white/80 flex items-center gap-1.5"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                  >
                    <span>📍</span>
                    <span>{mission.place} · Día {mission.day}</span>
                  </div>
                  {/* Botón para cambiar foto */}
                  <button
                    onClick={() => inputRef.current?.click()}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm transition-colors"
                  >
                    Cambiar
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botones de acción */}
          <div className={`flex gap-2 mt-4 pt-4 border-t transition-colors duration-300 ${done ? "border-jungle-700/40" : "border-jungle-100"}`}>
            {/* Botón completar */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setDone(!done)}
              className={`flex-1 text-xs font-sans font-medium py-2.5 px-3 rounded-xl transition-all duration-300 ${
                done
                  ? "bg-jungle-700/40 text-jungle-400 hover:bg-jungle-700/60"
                  : "text-white"
              }`}
              style={!done ? { backgroundColor: mission.accent } : {}}
            >
              {done ? "↩ Desmarcar" : "✓ Completada"}
            </motion.button>

            {/* Botón cámara */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => inputRef.current?.click()}
              title={mission.photoPrompt}
              className={`flex items-center gap-1.5 text-xs font-sans font-medium py-2.5 px-4 rounded-xl border transition-all duration-300 ${
                photo
                  ? "border-turquoise-500/50 text-turquoise-400 bg-turquoise-500/10"
                  : done
                  ? "border-jungle-600 text-jungle-400 hover:border-jungle-500"
                  : "border-jungle-200 text-jungle-500 hover:border-jungle-400 hover:text-jungle-700"
              }`}
            >
              <span className="text-base">{photo ? "🖼️" : "📷"}</span>
              <span>{photo ? "Ver foto" : "Foto"}</span>
            </motion.button>
          </div>

          {/* Prompt de la foto (tooltip natural) */}
          <AnimatePresence>
            {showCamera && !photo && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 text-xs text-jungle-400 italic font-sans"
              >
                {mission.photoPrompt}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Confirmación si completada con foto */}
          {done && photo && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-xs text-jungle-500 font-sans italic"
            >
              ✓ Misión completada y guardada. Este recuerdo ya es vuestro.
            </motion.p>
          )}
          {done && !photo && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-xs text-jungle-600 font-sans italic"
            >
              Completada — añade la foto para dejar constancia 📷
            </motion.p>
          )}
        </div>

        {/* Input oculto para la cámara / galería */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handlePhoto}
          onClick={() => setShowCamera(true)}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Missions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-off-white relative overflow-hidden">
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
            Completad cada misión y dejad constancia con una foto. La prueba del crimen.
          </p>
        </motion.div>

        {/* Grid */}
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
          No son obligaciones. Son invitaciones —con prueba gráfica.
        </motion.p>
      </div>
    </section>
  );
}
