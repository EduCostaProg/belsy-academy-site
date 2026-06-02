"use client";

import { motion, useReducedMotion } from "motion/react";
import { BelsyIcon } from "./brand/BrandMark";
import { WorldMap, Highlight, Sparkle } from "./brand/Decor";

const LINKTREE = "https://linktr.ee/academybelsy";

const headlineWords = [
  { text: "Transforme", className: "" },
  { text: "a", className: "" },
  { text: "sua", className: "" },
  {
    text: "fluência",
    className:
      "font-handwritten font-normal text-belsy-green text-5xl sm:text-6xl md:text-8xl inline-block leading-none",
  },
  { text: "em", className: "" },
  { text: "protagonismo.", className: "", highlight: true },
];

const float = (delay: number, distance = 10) => ({
  y: [0, -distance, 0],
  transition: {
    duration: 4 + delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

const greetings = [
  { text: "Hello!", pos: "left-0 top-2", rotate: -8, delay: 0.6, d: 0 },
  { text: "¡Hola!", pos: "right-2 top-20", rotate: 6, delay: 0.85, d: 0.5 },
  { text: "Bonjour!", pos: "left-8 bottom-6", rotate: 4, delay: 1.1, d: 1 },
  { text: "Ciao!", pos: "right-10 bottom-24", rotate: -5, delay: 1.3, d: 0.7 },
];

const sparkles = [
  { pos: "right-12 top-4", size: "h-9 w-9", delay: 0.2, dur: 2.6 },
  { pos: "left-4 bottom-16", size: "h-6 w-6", delay: 0.9, dur: 3.1 },
  { pos: "right-24 bottom-1", size: "h-4 w-4", delay: 1.4, dur: 2.3 },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-belsy-purple">
      <WorldMap opacity={0.16} />

      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 60%, #b8ff00 0%, transparent 38%), radial-gradient(circle at 12% 18%, #9a7cf2 0%, transparent 42%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-block rounded-full border border-belsy-green/40 bg-belsy-green/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-belsy-green"
          >
            Languages &amp; Global Skills
          </motion.p>

          <motion.h1
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight [overflow-wrap:break-word] sm:text-5xl md:text-7xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
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
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {w.highlight ? <Highlight>{w.text}</Highlight> : w.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 max-w-lg text-lg text-white/85"
          >
            Inglês e espanhol com materiais licenciados de padrão mundial.
            Aprenda para se posicionar — não só para passar de prova.
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
              href={LINKTREE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-belsy-green px-7 py-3.5 text-center text-base font-extrabold text-belsy-black shadow-lg shadow-belsy-green/25"
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
            className="mt-6 text-sm text-white/90"
          >
            🚀 Turmas reduzidas de até 4 alunos — atenção real em toda aula.
          </motion.p>
        </div>

        <div className="relative hidden h-[26rem] md:block">
          {/* halo de luz lime atrás do B */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-belsy-green/25 blur-[90px]"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-belsy-green/15 blur-3xl"
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div animate={reduce ? undefined : { rotate: [0, 2, 0, -2, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
              <BelsyIcon variant="white" size={260} priority />
            </motion.div>
          </motion.div>

          {sparkles.map((s, i) => (
            <motion.span
              key={i}
              aria-hidden
              className={`absolute ${s.pos} ${s.size} text-belsy-green drop-shadow-[0_0_10px_rgba(184,255,0,0.5)]`}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                reduce
                  ? { opacity: 1, scale: 1 }
                  : { opacity: [0.5, 1, 0.5], scale: [0.9, 1.18, 0.9] }
              }
              transition={
                reduce
                  ? { delay: s.delay, duration: 0.5 }
                  : { delay: s.delay, duration: s.dur, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Sparkle className="h-full w-full" />
            </motion.span>
          ))}

          {greetings.map((g) => (
            <motion.span
              key={g.text}
              className={`absolute ${g.pos} font-handwritten text-4xl text-belsy-green drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]`}
              initial={{ opacity: 0, scale: 0.6, rotate: g.rotate * 2 }}
              animate={{ opacity: 1, scale: 1, rotate: g.rotate }}
              transition={{ delay: g.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span className="inline-block" animate={reduce ? undefined : float(g.d)}>
                {g.text}
              </motion.span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
