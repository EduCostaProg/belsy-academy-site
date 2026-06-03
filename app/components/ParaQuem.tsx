"use client";

import { motion } from "motion/react";
import { RevealStagger, RevealItem, default as Reveal } from "./Reveal";
import { Highlight, IconBackpack, IconBriefcase, IconHeart } from "./brand/Decor";

const LINKTREE = "https://linktr.ee/academybelsy";

const personas = [
  {
    titulo: "Crianças & Adolescentes",
    desc: "Inglês natural desde cedo. Metodologia internacional com professores que tornam o aprendizado leve, divertido e preparam seu filho para o mundo.",
    Icon: IconBackpack,
    cor: "bg-belsy-purple",
    text: "text-white",
    sub: "text-white/85",
    iconColor: "text-white",
  },
  {
    titulo: "Adultos & Profissionais",
    desc: "Idiomas para destravar carreira, viagens e oportunidades — sem decoreba, com foco em comunicação real.",
    Icon: IconBriefcase,
    cor: "bg-belsy-green",
    text: "text-belsy-black",
    sub: "text-belsy-black/75",
    iconColor: "text-belsy-black",
  },
  {
    titulo: "Mães & 50+",
    desc: "Aprender um idioma é a melhor forma de manter a mente ativa e ágil. Aulas no seu ritmo, sem pressão, focadas em socialização e em fortalecer vínculos.",
    Icon: IconHeart,
    cor: "bg-white",
    text: "text-belsy-black",
    sub: "text-belsy-black/70",
    iconColor: "text-belsy-purple",
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
                  className="block"
                  whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <p.Icon className={`h-10 w-10 ${p.iconColor}`} />
                </motion.span>
                <h3 className="mt-5 font-display text-2xl font-extrabold">
                  {p.titulo}
                </h3>
                <p className={`mt-3 ${p.sub}`}>{p.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="font-handwritten text-2xl text-belsy-green">
            se identificou?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={LINKTREE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-belsy-green px-8 py-4 text-base font-extrabold text-belsy-black shadow-lg shadow-belsy-green/20"
          >
            Encontrar minha turma
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
