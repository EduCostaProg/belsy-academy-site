"use client";

import Reveal, { RevealStagger, RevealItem } from "./Reveal";

const depoimentos = [
  {
    texto: "Meus alunos amam quando as reposições de aulas são com ela ahahah ❤️",
    autor: "@psiyh",
  },
  {
    texto: "The best teacher @kamilavictoria ❤️",
    autor: "@m_csilveira",
  },
  {
    texto: "A melhooor 🤍",
    autor: "@lainaferreira",
  },
  {
    texto: "She's awesome! ✨💚",
    autor: "@mfcouto",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-belsy-purple-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12">
          <p className="font-handwritten text-3xl text-belsy-green md:text-4xl">
            a real dos alunos
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            O que os alunos dizem
          </h2>
        </Reveal>

        <RevealStagger
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.08}
        >
          {depoimentos.map((d, i) => (
            <RevealItem key={i}>
              <blockquote className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-6 transition hover:bg-white/[0.1]">
                <p className="text-white/95">{d.texto}</p>
                <footer className="mt-4 text-sm font-extrabold text-belsy-green">
                  {d.autor}
                </footer>
              </blockquote>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
