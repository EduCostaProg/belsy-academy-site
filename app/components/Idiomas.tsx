"use client";

import { motion } from "motion/react";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";
import { WorldMap } from "./brand/Decor";

const LINKTREE = "https://linktr.ee/academybelsy";

const idiomas = [
  {
    bandeira: "🇺🇸",
    nome: "Inglês",
    status: "Matrículas abertas",
    statusCor: "bg-belsy-green text-belsy-black",
    cta: "Quero essa turma",
    href: LINKTREE,
  },
  {
    bandeira: "🇪🇸",
    nome: "Espanhol",
    status: "Matrículas abertas",
    statusCor: "bg-belsy-green text-belsy-black",
    cta: "Quero essa turma",
    href: LINKTREE,
  },
  {
    bandeira: "🇫🇷 🇮🇹",
    nome: "Francês & Italiano",
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

        <RevealStagger className="grid gap-6 md:grid-cols-3" staggerChildren={0.12}>
          {idiomas.map((i) => (
            <RevealItem key={i.nome}>
              <motion.div
                whileHover={{ y: -8, borderColor: "#b8ff00" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group h-full rounded-3xl border border-white/15 bg-belsy-black/40 p-8 backdrop-blur-sm"
              >
                <motion.div
                  className="text-5xl"
                  whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {i.bandeira}
                </motion.div>
                <h3 className="mt-5 font-display text-3xl font-extrabold">{i.nome}</h3>
                <span
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${i.statusCor}`}
                >
                  {i.status}
                </span>
                <a
                  href={i.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition group-hover:text-belsy-green"
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
