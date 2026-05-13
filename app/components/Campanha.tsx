"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

const beneficios = [
  { texto: "R$ 333/mês em grupo de até 4 alunos", destaque: "R$ 333/mês" },
  { texto: "Matrícula ZERO para as 10 primeiras inscritas", destaque: "Matrícula ZERO" },
  { texto: "10% OFF para mãe e filho estudarem juntos", destaque: "10% OFF" },
  { texto: "Foco em clareza, pronúncia e agilidade mental" },
];

const stats = ["Conexões neurais", "Autonomia", "Memória", "Confiança"];

export default function Campanha() {
  return (
    <section id="campanha" className="bg-belsy-yellow py-24 text-belsy-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal direction="right">
            <p className="font-handwritten text-3xl text-belsy-purple">
              campanha do mês das mães
            </p>
            <h2 className="mt-2 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              Combo <span className="text-belsy-purple">Conexão</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-belsy-black/80">
              Idioma também é autocuidado. Presenteie sua mãe — ou se
              presenteie — com longevidade cognitiva e comunicação sem
              barreiras.
            </p>

            <motion.ul
              className="mt-7 space-y-3 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
            >
              {beneficios.map((b, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="text-belsy-purple">✅</span>
                  <span>
                    {b.destaque ? (
                      <>
                        <strong>{b.destaque}</strong>
                        {b.texto.replace(b.destaque, "")}
                      </>
                    ) : (
                      b.texto
                    )}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://linktr.ee/academybelsy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-belsy-purple px-8 py-4 text-base font-semibold text-white shadow-lg shadow-belsy-purple/30"
            >
              Quero garantir minha vaga →
            </motion.a>
            <p className="mt-3 text-sm text-belsy-black/60">
              Vagas limitadas. Atendimento via Instagram & Linktree.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="relative">
              <motion.div
                initial={{ rotate: -3, scale: 0.95 }}
                whileInView={{ rotate: -3, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="rounded-3xl bg-belsy-purple p-10 text-white shadow-2xl"
              >
                <p className="font-handwritten text-3xl text-belsy-yellow">
                  presenteie com:
                </p>
                <p className="mt-3 font-display text-3xl font-bold">
                  Longevidade cognitiva
                </p>
                <p className="mt-2 text-white/85">
                  A ciência confirma: estudar um novo idioma é uma das
                  ferramentas mais poderosas para manter o cérebro ativo.
                </p>

                <motion.div
                  className="mt-6 grid grid-cols-2 gap-4 text-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                  }}
                >
                  {stats.map((s) => (
                    <motion.div
                      key={s}
                      variants={{
                        hidden: { opacity: 0, scale: 0.85 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.45, ease: "easeOut" },
                        },
                      }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.18)" }}
                      className="rounded-2xl bg-white/10 p-4"
                    >
                      <p className="font-display text-3xl font-extrabold text-belsy-yellow">
                        +
                      </p>
                      <p>{s}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 rounded-2xl bg-belsy-black px-5 py-3 shadow-xl"
                initial={{ rotate: 5, scale: 0 }}
                whileInView={{ rotate: 5, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 220, damping: 14 }}
              >
                <motion.span
                  className="font-handwritten text-2xl text-belsy-yellow inline-block"
                  animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  vagas limitadas!
                </motion.span>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
