"use client";

import { motion } from "motion/react";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";
import { WorldMap } from "./brand/Decor";

const LINKTREE = "https://linktr.ee/academybelsy";

const idiomas = [
  {
    saudacao: "Hello!",
    nome: "Inglês",
    micro: "O idioma oficial dos negócios e do mundo.",
    status: "Matrículas abertas",
    statusCor: "bg-belsy-green text-belsy-black",
    cta: "Quero essa turma",
    href: LINKTREE,
  },
  {
    saudacao: "¡Hola!",
    nome: "Espanhol",
    micro: "Expanda suas fronteiras pela América Latina e Europa.",
    status: "Matrículas abertas",
    statusCor: "bg-belsy-green text-belsy-black",
    cta: "Quero essa turma",
    href: LINKTREE,
  },
  {
    saudacao: "Bonjour!",
    nome: "Francês",
    micro: "A língua da diplomacia, da arte e da gastronomia.",
    status: "Em breve",
    statusCor: "bg-white text-belsy-black",
    cta: "Entrar na lista de espera",
    href: LINKTREE,
  },
  {
    saudacao: "Ciao!",
    nome: "Italiano",
    micro: "A língua da arte, da moda e da dolce vita.",
    status: "Em breve",
    statusCor: "bg-white text-belsy-black",
    cta: "Entrar na lista de espera",
    href: LINKTREE,
  },
];

export default function Idiomas() {
  return (
    <section id="idiomas" className="relative overflow-hidden bg-belsy-purple py-24">
      <WorldMap opacity={0.1} />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-14">
          <p className="font-handwritten text-3xl text-belsy-green md:text-4xl">
            escolha seu idioma
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Quatro caminhos, um destino:{" "}
            <span className="text-belsy-green">fluência real.</span>
          </h2>
        </Reveal>

        <RevealStagger
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.1}
        >
          {idiomas.map((i) => (
            <RevealItem key={i.nome}>
              <motion.div
                whileHover={{ y: -8, borderColor: "#b8ff00" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group flex h-full flex-col rounded-3xl border border-white/15 bg-belsy-black/40 p-7 backdrop-blur-sm"
              >
                <motion.div
                  className="flex h-11 items-center"
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <span className="font-handwritten text-4xl leading-none text-belsy-green">
                    {i.saudacao}
                  </span>
                </motion.div>
                <h3 className="mt-4 font-display text-2xl font-extrabold">{i.nome}</h3>
                <p className="mt-2 text-sm leading-snug text-white/65">{i.micro}</p>
                <div className="mt-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${i.statusCor}`}
                  >
                    {i.status}
                  </span>
                </div>
                <a
                  href={i.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-white transition group-hover:text-belsy-green"
                >
                  {i.cta}{" "}
                  <motion.span
                    aria-hidden
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
