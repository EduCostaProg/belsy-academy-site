"use client";

import { motion, useScroll, useTransform } from "motion/react";
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
        style={{ opacity: backdropOpacity }}
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
        >
          <BelsyIcon variant="white" size={34} priority decorative />
          <span className="font-display text-lg font-extrabold tracking-tight">
            Belsy <span className="text-belsy-green">Academy</span>
          </span>
        </motion.a>

        <ul className="hidden gap-7 text-sm font-normal text-white/75 md:flex">
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
          className="rounded-full bg-belsy-green px-5 py-2.5 text-sm font-extrabold text-belsy-black shadow-lg shadow-belsy-green/20"
        >
          Matricule-se
        </motion.a>
      </div>
    </motion.nav>
  );
}
