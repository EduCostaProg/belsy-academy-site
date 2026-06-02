"use client";

import { motion } from "motion/react";
import { RevealStagger, RevealItem, default as Reveal } from "./Reveal";
import { Highlight } from "./brand/Decor";

const personas = [
  {
    titulo: "Crianças & Adolescentes",
    desc: "Conteúdo licenciado de padrão internacional, com professores que tornam o aprendizado leve e divertido.",
    emoji: "🧒",
    cor: "bg-belsy-purple",
    text: "text-white",
    sub: "text-white/85",
  },
  {
    titulo: "Adultos & Profissionais",
    desc: "Idiomas para destravar carreira, viagens e oportunidades — sem decoreba, com foco em comunicação real.",
    emoji: "💼",
    cor: "bg-belsy-green",
    text: "text-belsy-black",
    sub: "text-belsy-black/75",
  },
  {
    titulo: "Mães & 50+",
    desc: "Aprender idioma é exercício de longevidade cognitiva. Mantenha a mente ágil e fortaleça vínculos.",
    emoji: "💜",
    cor: "bg-white",
    text: "text-belsy-black",
    sub: "text-belsy-black/70",
  },
];

export default function ParaQuem() {
  return (
    <section className="bg-belsy-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Para quem é a <Highlight>Belsy</Highlight>?
          </h2>
          <p className="mt-5 text-lg text-white/70">
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
                className={`${p.cor} ${p.text} h-full rounded-3xl p-8 shadow-xl`}
              >
                <motion.span
                  className="block text-5xl"
                  whileHover={{ rotate: [0, -10, 10, -6, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {p.emoji}
                </motion.span>
                <h3 className="mt-5 font-display text-2xl font-extrabold">
                  {p.titulo}
                </h3>
                <p className={`mt-3 ${p.sub}`}>{p.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
