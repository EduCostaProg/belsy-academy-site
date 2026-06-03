"use client";

import { motion } from "motion/react";
import { RevealStagger, RevealItem, default as Reveal } from "./Reveal";
import { Highlight, IconBackpack, IconBriefcase, IconHeart } from "./brand/Decor";

const personas = [
  {
    titulo: "Crianças & Adolescentes",
    desc: "Conteúdo licenciado de padrão internacional, com professores que tornam o aprendizado leve e divertido.",
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
    desc: "Aprender idioma é exercício de longevidade cognitiva. Mantenha a mente ágil e fortaleça vínculos.",
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
      </div>
    </section>
  );
}
