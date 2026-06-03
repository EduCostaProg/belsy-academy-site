"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { Polaroid, MarkerArrow } from "./brand/Decor";
import { professores, type Professor } from "./professoresData";
import ProfessorModal from "./ProfessorModal";

const LINKTREE = "https://linktr.ee/academybelsy";
const COPIES = [0, 1, 2]; // 3 cópias p/ loop infinito sem emendas

export default function Time() {
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidth = useRef(0); // largura de UMA cópia (scrollWidth / 3)
  const idle = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState<Professor | null>(null);

  // Inicializa no meio (cópia 2) e remede em resize.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const init = () => {
      setWidth.current = el.scrollWidth / COPIES.length;
      el.scrollLeft = setWidth.current;
    };
    init();
    const raf = requestAnimationFrame(init);
    const onResize = () => {
      setWidth.current = el.scrollWidth / COPIES.length;
      el.scrollLeft = setWidth.current; // re-ancora na cópia do meio ao mudar largura
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Quando o scroll para (debounce), reposiciona p/ a cópia do meio.
  // Deslocar exatamente uma cópia é imperceptível (conteúdo idêntico).
  const onScroll = () => {
    if (idle.current) clearTimeout(idle.current);
    idle.current = setTimeout(() => {
      const el = trackRef.current;
      const w = setWidth.current;
      if (!el || !w) return;
      if (el.scrollLeft < w) el.scrollLeft += w;
      else if (el.scrollLeft >= 2 * w) el.scrollLeft -= w;
    }, 120);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const amount = slide ? slide.offsetWidth + 20 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <section id="equipe" className="bg-belsy-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <Reveal className="max-w-3xl">
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

            <div className="hidden shrink-0 gap-2 md:flex">
              {([-1, 1] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => scrollByCard(dir)}
                  aria-label={dir === -1 ? "Professor anterior" : "Próximo professor"}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-belsy-green hover:text-belsy-green"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <path
                      d={dir === -1 ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div
            ref={trackRef}
            onScroll={onScroll}
            role="region"
            aria-label="Professores Belsy"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {COPIES.flatMap((copy) =>
              professores.map((p) => {
                const clone = copy !== 1;
                return (
                  <div
                    data-slide
                    key={`${p.slug}-${copy}`}
                    aria-hidden={clone || undefined}
                    className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
                  >
                    <div className="mx-auto flex max-w-[280px] flex-col items-center text-center">
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-full max-w-[240px]"
                      >
                        <Polaroid
                          src={`/team/${p.slug}.jpg`}
                          alt={`${p.nome}, professor(a) da Belsy Language Academy`}
                          name={p.nome}
                          rotate={p.rotate}
                          sizes="(max-width: 640px) 70vw, 240px"
                        />
                      </motion.div>

                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <span className="inline-block rounded-full bg-belsy-green px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-belsy-black">
                          {p.idioma}
                        </span>
                        {p.fundadora && (
                          <span className="inline-block rounded-full bg-belsy-purple px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                            Fundadora
                          </span>
                        )}
                      </div>

                      <p className="mt-3 line-clamp-3 text-sm text-white/70">
                        {p.resumo}
                      </p>

                      <button
                        type="button"
                        onClick={() => setActive(p)}
                        tabIndex={clone ? -1 : undefined}
                        aria-label={clone ? undefined : `Ver mais sobre ${p.nome}`}
                        className="group mt-2 inline-flex min-h-11 items-center gap-1.5 px-3 text-sm font-bold text-belsy-green"
                      >
                        Ver mais
                        <span
                          aria-hidden
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                );
              }),
            )}
          </div>

          <Reveal className="mt-20" delay={0.1}>
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

      <ProfessorModal professor={active} onClose={() => setActive(null)} />
    </>
  );
}
