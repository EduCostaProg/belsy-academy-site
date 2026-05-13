"use client";

import { motion } from "motion/react";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";

const diferenciais = [
  {
    titulo: "Materiais licenciados de padrão mundial",
    desc: "Conteúdo internacional usado em escolas referência — não apostilas genéricas.",
  },
  {
    titulo: "Foco em protagonismo, não em decoreba",
    desc: "Você aprende para usar, se posicionar e ganhar voz. Não para passar no quiz e esquecer.",
  },
  {
    titulo: "Turmas reduzidas (até 4 alunos)",
    desc: "Atenção real do professor, conversação garantida em toda aula, ritmo respeitado.",
  },
  {
    titulo: "Professores autorais",
    desc: "Tradutores, intérpretes e educadores apaixonados — não roteiros engessados.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-belsy-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl">
          <p className="font-handwritten text-3xl text-belsy-yellow">
            o método Belsy
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Idioma é ferramenta. A gente te ensina a{" "}
            <span className="text-belsy-purple-soft">usar bem.</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-2" staggerChildren={0.1}>
          {diferenciais.map((d, i) => (
            <RevealItem key={d.titulo}>
              <motion.div
                whileHover={{
                  borderColor: "rgba(232, 255, 63, 0.55)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                transition={{ duration: 0.25 }}
                className="flex h-full gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="font-display text-4xl font-extrabold text-belsy-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{d.titulo}</h3>
                  <p className="mt-2 text-white/70">{d.desc}</p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
