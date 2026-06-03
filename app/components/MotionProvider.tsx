"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/* Respeita prefers-reduced-motion globalmente: o motion/react passa a
   reduzir/neutralizar animações de transform e layout para quem pediu
   menos movimento. Loops infinitos específicos do Hero ainda são
   travados via useReducedMotion() lá. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
