"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import { WorldMap, Highlight, MarkerArrow } from "./brand/Decor";

const LINKTREE = "https://linktr.ee/academybelsy";
const INSTAGRAM = "https://www.instagram.com/belsyacademy/";

const provas = [
  "Materiais licenciados de padrão mundial",
  "Turmas de até 4 alunos",
  "Professores autorais de inglês e espanhol",
];

export default function CTA() {
  return (
    <section
      id="matricula"
      className="relative overflow-hidden bg-belsy-purple py-28 text-center"
    >
      <WorldMap opacity={0.14} />
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 120%, #b8ff00 0%, transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-handwritten text-3xl text-belsy-green md:text-4xl">
            sua vez de ser protagonista
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Transforme a sua fluência em <Highlight>protagonismo.</Highlight>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Inglês e espanhol com método autoral e atenção real. Garanta sua
            vaga antes que as turmas fechem.
          </p>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/90">
            {provas.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-belsy-green">✅</span> {p}
              </li>
            ))}
          </ul>

          <div className="relative mt-10 inline-flex flex-col items-center gap-4 sm:flex-row">
            <MarkerArrow
              aria-hidden
              className="absolute -left-16 -top-6 hidden h-12 w-12 -rotate-12 text-belsy-green sm:block"
            />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={LINKTREE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-belsy-green px-9 py-4 text-base font-extrabold text-belsy-black shadow-xl shadow-belsy-green/25"
            >
              Quero garantir minha vaga →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-9 py-4 text-base font-semibold text-white"
            >
              Falar no Instagram
            </motion.a>
          </div>
          <p className="mt-5 text-sm text-white/85">
            Atendimento via Instagram &amp; Linktree. Vagas limitadas por turma.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
