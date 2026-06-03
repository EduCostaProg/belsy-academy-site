"use client";

import { motion, useReducedMotion } from "motion/react";
import { BelsyIcon } from "./brand/BrandMark";
import {
  WorldMap,
  Highlight,
  Sparkle,
  IconTurma,
  IconChatCheck,
  IconGlobe,
} from "./brand/Decor";

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

const float = (d: number) => ({
  y: [0, -(9 + d * 5)],
  transition: {
    duration: 3 + d,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
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

const valueProps = [
  { Icon: IconTurma, label: "Turmas de até 4 alunos" },
  { Icon: IconChatCheck, label: "Método prático e real" },
  { Icon: IconGlobe, label: "Materiais de padrão mundial" },
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
            Domine inglês e espanhol com materiais de padrão internacional.
            Assuma o controle da sua comunicação e vá muito além das provas.
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

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { delayChildren: 1.25, staggerChildren: 0.12 } },
            }}
            className="mt-9 flex max-w-xl flex-wrap gap-2.5"
          >
            {valueProps.map(({ Icon, label }) => (
              <motion.li
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="flex items-center gap-2.5 rounded-2xl border border-white/12 bg-white/[0.06] py-2 pl-2 pr-3.5 backdrop-blur-sm"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-belsy-green text-belsy-purple-deep">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-sm font-bold leading-tight text-white">
                  {label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="relative hidden h-[26rem] md:block">
          {/* respiro sutil de profundidade atrás do B (sem brilho/glow) */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 60%)",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="will-change-transform"
              animate={reduce ? undefined : { y: [-9, 7], rotate: [-1.6, 1.6] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <BelsyIcon variant="white" size={300} priority />
            </motion.div>
          </motion.div>

          {sparkles.map((s, i) => (
            <motion.span
              key={i}
              aria-hidden
              className={`absolute ${s.pos} ${s.size} text-belsy-green will-change-transform`}
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
              className={`absolute ${g.pos} font-handwritten text-4xl text-belsy-green`}
              initial={{ opacity: 0, scale: 0.6, rotate: g.rotate * 2 }}
              animate={{ opacity: 1, scale: 1, rotate: g.rotate }}
              transition={{ delay: g.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="inline-block will-change-transform"
                animate={reduce ? undefined : float(g.d)}
              >
                {g.text}
              </motion.span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
