"use client";

import { motion } from "motion/react";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

const professores = [
  {
    nome: "Kamila Victoria",
    cargo: "Professora de Inglês • Tradutora & Intérprete",
    cidade: "Búzios — RJ",
    bio: "Alcançou a proficiência de forma autodidata e leva aulas leves, despojadas e cheias de paciência. Apaixonada por gatos, livros e palavras cruzadas.",
    cor: "from-belsy-lime to-belsy-purple-soft",
  },
  {
    nome: "Sophia",
    cargo: "Professora de Espanhol",
    cidade: "Brasil",
    bio: "Foco em comunicação real para acabar de vez com o portunhol. Aulas dinâmicas para você sair conversando.",
    cor: "from-belsy-yellow to-belsy-purple",
  },
  {
    nome: "Em breve",
    cargo: "Novos professores Belsy",
    cidade: "Você?",
    bio: "Estamos contratando! Se você ama idiomas e quer fazer parte do nosso time autoral, mande seu portfólio.",
    cor: "from-belsy-purple to-belsy-purple-deep",
    cta: true,
  },
];

export default function Time() {
  return (
    <section id="equipe" className="bg-belsy-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl">
          <p className="font-handwritten text-3xl text-belsy-yellow">
            meet the team
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Conheça quem vai te levar à{" "}
            <span className="text-belsy-yellow">fluência.</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-3" staggerChildren={0.14}>
          {professores.map((p) => (
            <RevealItem key={p.nome}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${p.cor} grid place-items-center overflow-hidden`}
                >
                  <motion.span
                    className="font-display text-6xl font-extrabold text-white drop-shadow-lg"
                    whileHover={{ scale: 1.15, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 220 }}
                  >
                    {p.nome.charAt(0)}
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold">{p.nome}</h3>
                  <p className="text-sm text-belsy-yellow">{p.cargo}</p>
                  <p className="mt-1 text-xs text-white/50">{p.cidade}</p>
                  <p className="mt-4 text-sm text-white/75">{p.bio}</p>
                  {p.cta && (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://linktr.ee/academybelsy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex rounded-full bg-belsy-yellow px-4 py-2 text-sm font-semibold text-belsy-black"
                    >
                      Seja um Professor Belsy
                    </motion.a>
                  )}
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
