"use client";

import { motion } from "motion/react";

const headlineWords = [
  { text: "Transforme", className: "" },
  { text: "a", className: "" },
  { text: "sua", className: "" },
  { text: "fluência", className: "font-handwritten text-belsy-yellow text-6xl md:text-8xl inline-block" },
  { text: "em", className: "" },
  { text: "protagonismo.", className: "text-belsy-yellow" },
];

const float = (delay: number, distance: number = 8) => ({
  y: [0, -distance, 0],
  transition: {
    duration: 4 + delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-belsy-purple">
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #e8ff3f 0%, transparent 35%), radial-gradient(circle at 80% 70%, #5be83d 0%, transparent 35%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-belsy-yellow/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-belsy-yellow"
          >
            Languages & Global Skills
          </motion.p>

          <motion.h1
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
            }}
          >
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                className={`mr-3 inline-block ${w.className}`}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {w.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 max-w-lg text-lg text-white/85"
          >
            Aulas de inglês e espanhol com materiais licenciados de padrão
            mundial. Aprenda para se posicionar — não só para passar de prova.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#campanha"
              className="rounded-full bg-belsy-yellow px-7 py-3.5 text-center text-base font-semibold text-belsy-black shadow-lg shadow-belsy-yellow/20"
            >
              Garantir minha vaga
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              href="#metodo"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center text-base font-semibold text-white"
            >
              Conhecer o método
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-6 text-sm text-white/60"
          >
            🚀 Mais de 300 alunos já se matricularam — turmas até 4 pessoas.
          </motion.p>
        </div>

        <div className="relative hidden md:block">
          <motion.div
            className="absolute -left-6 top-0 rounded-2xl bg-belsy-black px-5 py-4 shadow-xl"
            initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
            animate={{ opacity: 1, rotate: -6, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="font-handwritten text-3xl text-belsy-yellow block"
              animate={float(0)}
            >
              Hello!
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute right-0 top-16 rounded-2xl bg-belsy-lime px-5 py-4 shadow-xl"
            initial={{ opacity: 0, rotate: 20, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 4, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="font-handwritten text-3xl text-belsy-black block"
              animate={float(0.5, 10)}
            >
              ¡Hola!
            </motion.span>
          </motion.div>

          <motion.div
            className="mx-auto grid h-80 w-80 place-items-center rounded-3xl bg-belsy-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="font-display text-[12rem] font-extrabold text-belsy-yellow"
              animate={{
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              B
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 left-12 rounded-2xl bg-belsy-yellow px-5 py-4 shadow-xl"
            initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="font-handwritten text-3xl text-belsy-black block"
              animate={float(1, 6)}
            >
              Bonjour!
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
