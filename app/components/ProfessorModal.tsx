"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { Professor } from "./professoresData";

const LINKTREE = "https://linktr.ee/academybelsy";

export default function ProfessorModal({
  professor,
  onClose,
}: {
  professor: Professor | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!professor) return;
    const prevFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => closeRef.current?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocused?.focus?.();
    };
  }, [professor, onClose]);

  return (
    <AnimatePresence>
      {professor && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[85vh] w-[92%] max-w-lg overflow-y-auto rounded-3xl border border-white/15 bg-belsy-black p-6 shadow-2xl md:p-8"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="flex items-start gap-4 pr-10">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-belsy-gray">
                <Image
                  src={`/team/${professor.slug}.jpg`}
                  alt={`${professor.nome}, professor(a) da Belsy`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3
                  id={titleId}
                  className="font-display text-2xl font-extrabold leading-tight"
                >
                  {professor.nome}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-belsy-green px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-belsy-black">
                    {professor.idioma}
                  </span>
                  {professor.fundadora && (
                    <span className="inline-block rounded-full bg-belsy-purple px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                      Fundadora
                    </span>
                  )}
                </div>
                {professor.localizacao && (
                  <p className="mt-2 text-xs text-white/50">{professor.localizacao}</p>
                )}
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold text-belsy-green">
              {professor.credenciais}
            </p>

            <div className="mt-4 space-y-3 text-white/80">
              {professor.bio.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>

            {professor.interesses && (
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70">
                <span className="font-handwritten text-xl text-belsy-green">
                  fora da aula:{" "}
                </span>
                {professor.interesses}
              </p>
            )}

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={LINKTREE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-belsy-green px-6 py-3 text-sm font-extrabold text-belsy-black"
            >
              Quero aula com {professor.nome} →
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
