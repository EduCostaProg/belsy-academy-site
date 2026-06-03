"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { BelsyIcon } from "./brand/BrandMark";

const links = [
  { href: "#idiomas", label: "Idiomas" },
  { href: "#metodo", label: "Método" },
  { href: "#equipe", label: "Equipe" },
];

const LINKTREE = "https://linktr.ee/academybelsy";

export default function Nav() {
  const { scrollY } = useScroll();
  const backdropOpacity = useTransform(scrollY, [0, 120], [0, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 0.12]);
  const [open, setOpen] = useState(false);

  // ESC fecha; ao voltar p/ desktop, garante menu fechado.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-belsy-black backdrop-blur-md"
        style={{ opacity: open ? 1 : backdropOpacity }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-white"
        style={{ opacity: borderOpacity }}
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.a
          href="#"
          aria-label="Belsy Language Academy — início"
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(false)}
        >
          <BelsyIcon variant="white" size={34} priority decorative />
          <span className="font-display text-lg font-extrabold tracking-tight">
            Belsy <span className="text-belsy-green">Academy</span>
          </span>
        </motion.a>

        <ul className="hidden gap-7 text-sm font-normal text-white/90 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                className="relative inline-block transition hover:text-belsy-green"
                whileHover="hover"
                initial="rest"
              >
                {l.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-belsy-green"
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.a
          href={LINKTREE}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="hidden whitespace-nowrap rounded-full bg-belsy-green px-5 py-2.5 text-sm font-extrabold text-belsy-black shadow-lg shadow-belsy-green/20 md:inline-flex"
        >
          Matricule-se
        </motion.a>

        {/* hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid h-11 w-11 place-items-center text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* menu mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 -z-10 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative border-t border-white/10 bg-belsy-black px-6 py-4 md:hidden"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg font-semibold text-white transition hover:text-belsy-green"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={LINKTREE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center whitespace-nowrap rounded-full bg-belsy-green px-5 py-3 text-base font-extrabold text-belsy-black"
              >
                Matricule-se
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
