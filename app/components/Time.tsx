"use client";

import { motion } from "motion/react";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";
import { Polaroid, MarkerArrow } from "./brand/Decor";

const LINKTREE = "https://linktr.ee/academybelsy";

const professores = [
  { nome: "Eduardo", slug: "eduardo", rotate: -4 },
  { nome: "Isabela", slug: "isabela", rotate: 3 },
  { nome: "Bernardo", slug: "bernardo", rotate: -2 },
  { nome: "Camila", slug: "camila", rotate: 4 },
  { nome: "Kamila", slug: "kamila", rotate: -3 },
  { nome: "Sophia", slug: "sophia", rotate: 2 },
];

export default function Time() {
  return (
    <section id="equipe" className="bg-belsy-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3">
            <p className="font-handwritten text-4xl text-belsy-green md:text-5xl">
              Professores Belsy!
            </p>
            <MarkerArrow className="h-12 w-12 rotate-12 text-belsy-green" />
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Conheça quem vai te levar à fluência.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Um time autoral de professores de inglês e espanhol — gente
            apaixonada por idiomas, não roteiros engessados.
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-y-16 md:grid-cols-3 md:gap-x-10"
          staggerChildren={0.1}
        >
          {professores.map((p) => (
            <RevealItem key={p.slug} className="flex justify-center">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full max-w-[260px]"
              >
                <Polaroid
                  src={`/team/${p.slug}.jpg`}
                  alt={`${p.nome}, professor(a) da Belsy Language Academy`}
                  name={p.nome}
                  rotate={p.rotate}
                />
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-24" delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-belsy-green/30 bg-belsy-purple/15 p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="font-handwritten text-3xl text-belsy-green">
                  bora ensinar com a gente?
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold md:text-3xl">
                  Seja um Professor Belsy
                </h3>
                <p className="mt-2 max-w-xl text-white/70">
                  Ama idiomas e quer fazer parte de um time autoral? Mande seu
                  portfólio e venha transformar fluência em protagonismo com a
                  gente.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={LINKTREE}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-belsy-green px-7 py-3.5 text-base font-extrabold text-belsy-black shadow-lg shadow-belsy-green/20"
              >
                Quero me candidatar →
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
