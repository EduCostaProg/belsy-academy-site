"use client";

import { motion } from "motion/react";
import { RevealStagger, RevealItem, default as Reveal } from "./Reveal";

const personas = [
  {
    titulo: "Crianças & Adolescentes",
    desc: "Conteúdo licenciado de padrão internacional, com professores que tornam o aprendizado leve e divertido.",
    emoji: "🧒",
    cor: "bg-belsy-purple-soft",
  },
  {
    titulo: "Adultos & Profissionais",
    desc: "Idiomas para destravar carreira, viagens e oportunidades — sem decoreba, com foco em comunicação real.",
    emoji: "💼",
    cor: "bg-belsy-yellow",
    dark: true,
  },
  {
    titulo: "Mães & 50+",
    desc: "Aprender idioma é exercício de longevidade cognitiva. Mantenha sua mente ágil e fortaleça vínculos.",
    emoji: "💜",
    cor: "bg-belsy-lime",
    dark: true,
  },
];

export default function ParaQuem() {
  return (
    <section className="bg-belsy-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Para quem é a <span className="text-belsy-purple-soft">Belsy</span>?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Não importa a idade — o que importa é a vontade de virar
            protagonista da própria história.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-3" staggerChildren={0.12}>
          {personas.map((p) => (
            <RevealItem key={p.titulo}>
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`${p.cor} ${
                  p.dark ? "text-belsy-black" : "text-white"
                } h-full rounded-3xl p-8 shadow-xl`}
              >
                <motion.span
                  className="block text-5xl"
                  whileHover={{ rotate: [0, -10, 10, -6, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {p.emoji}
                </motion.span>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  {p.titulo}
                </h3>
                <p
                  className={`mt-3 ${
                    p.dark ? "text-belsy-black/80" : "text-white/90"
                  }`}
                >
                  {p.desc}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
