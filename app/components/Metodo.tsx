"use client";

import { motion } from "motion/react";
import Reveal, { RevealStagger, RevealItem } from "./Reveal";
import { Highlight } from "./brand/Decor";

const diferenciais = [
  {
    titulo: "Material de Padrão Internacional",
    desc: "Conteúdo de ponta utilizado nas melhores escolas do mundo. Diga adeus às apostilas genéricas e desatualizadas.",
  },
  {
    titulo: "Fluência que Dá Voz",
    desc: "Esqueça a decoreba. Nosso foco é que você assuma o protagonismo e use o idioma como uma verdadeira ferramenta de conexão.",
  },
  {
    titulo: "Turmas reduzidas (até 4 alunos)",
    desc: "Conversação garantida em todas as aulas. Tenha a atenção real do professor e o seu ritmo de aprendizado 100% respeitado.",
  },
  {
    titulo: "Vivência Real do Idioma",
    desc: "Nossa equipe traz o mundo real para a sala de aula. Tradutores e educadores de excelência, fugindo do ensino óbvio e robótico.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-belsy-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl">
          <p className="font-handwritten text-3xl text-belsy-green md:text-4xl">
            o método Belsy
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Idioma é ferramenta. A gente te ensina a{" "}
            <Highlight>usar bem.</Highlight>
          </h2>
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-2" staggerChildren={0.1}>
          {diferenciais.map((d, i) => (
            <RevealItem key={d.titulo}>
              <motion.div
                whileHover={{
                  borderColor: "rgba(184, 255, 0, 0.55)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                transition={{ duration: 0.25 }}
                className="flex h-full gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="font-display text-4xl font-extrabold text-belsy-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold">{d.titulo}</h3>
                  <p className="mt-2 font-normal text-white/70">{d.desc}</p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
