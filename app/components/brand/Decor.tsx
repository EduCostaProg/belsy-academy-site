import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/* =========================================================================
   Sistema gráfico Belsy — colagem / cutout.
   Primitivos puramente presentacionais (sem hooks), seguros tanto em
   Server quanto em Client Components. Cor vem de `currentColor` (use as
   classes text-belsy-green / text-belsy-purple para tingir).
   ========================================================================= */

/* ---- Mapa-múndi em linha (textura de fundo, full-bleed) ---- */
export function WorldMap({
  className = "",
  opacity = 0.14,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <Image
      src="/brand/world-map.png"
      alt=""
      aria-hidden
      fill
      sizes="100vw"
      style={{ opacity }}
      className={`pointer-events-none select-none object-cover ${className}`}
    />
  );
}

/* ---- Seta manuscrita (marca-texto) ---- */
export function MarkerArrow({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      className={className}
      style={style}
    >
      <path
        d="M16 16 C 36 70, 56 90, 92 95"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M66 80 L 93 96 L 70 112"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- Círculo rabiscado (para circular palavras) ---- */
export function ScribbleCircle({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 220 110"
      fill="none"
      aria-hidden
      className={className}
      style={style}
    >
      <path
        d="M52 16 C 14 20, 6 74, 78 92 C 168 104, 214 58, 192 28 C 176 6, 116 4, 60 14"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---- Sparkle / twinkle (4 pontas suaves) ---- */
export function Sparkle({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={className}
      style={style}
      fill="currentColor"
    >
      <path d="M50 2 C 56 33, 67 44, 98 50 C 67 56, 56 67, 50 98 C 44 67, 33 56, 2 50 C 33 44, 44 33, 50 2 Z" />
    </svg>
  );
}

/* ---- Check manuscrito num quadrado (bullets do método) ---- */
export function MarkerCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M14 25 L 22 33 L 36 14"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- Ícones de proposta de valor (hand-drawn verde, currentColor) ---- */
export function IconTurma({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <circle cx="24" cy="16" r="6.5" stroke="currentColor" strokeWidth="4" />
      <path
        d="M12.5 38 C12.5 30, 35.5 30, 35.5 38"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="9" cy="19" r="4" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="39" cy="19" r="4" stroke="currentColor" strokeWidth="3.2" />
      <path d="M3 37 C3 31.5, 9 30.5, 12.5 32.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M45 37 C45 31.5, 39 30.5, 35.5 32.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconChatCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <path
        d="M8 9 H40 a5 5 0 0 1 5 5 V29 a5 5 0 0 1 -5 5 H22 l-9 8 v-8 H8 a5 5 0 0 1 -5 -5 V14 a5 5 0 0 1 5 -5 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M15 21.5 L21 27.5 L33 14.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGlobe({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="4" />
      <path
        d="M24 5 C13 14, 13 34, 24 43 C35 34, 35 14, 24 5 Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M5.5 24 H42.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

/* ---- Ícones minimalistas de linha (seção "Para quem é") ---- */
export function IconBackpack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M6 21V11a6 6 0 0 1 12 0v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z" />
      <path d="M9 9V7.5a3 3 0 0 1 6 0V9" />
      <path d="M8 11.5h8" />
      <path d="M8.5 22v-6.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V22" />
    </svg>
  );
}

export function IconBriefcase({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="3" y="7.5" width="18" height="13" rx="2.5" />
      <path d="M8.5 7.5V6a2.5 2.5 0 0 1 2.5-2.5h2a2.5 2.5 0 0 1 2.5 2.5v1.5" />
      <path d="M3 12.5h18" />
      <path d="M12 11.5v2" />
    </svg>
  );
}

export function IconHeart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z" />
    </svg>
  );
}

/* ---- Borda de papel rasgado (compartilhada) ---- */
const TORN_CLIP =
  "polygon(1% 14%, 11% 3%, 26% 11%, 42% 2%, 58% 10%, 74% 1%, 90% 9%, 99% 22%, 97% 46%, 99% 72%, 96% 92%, 80% 98%, 62% 91%, 46% 99%, 28% 92%, 12% 98%, 2% 84%, 4% 56%, 1% 34%)";

/* ---- Etiqueta de papel rasgado (name tags, eyebrows) ---- */
export function TornTag({
  children,
  className = "",
  handwritten = false,
}: {
  children: ReactNode;
  className?: string;
  handwritten?: boolean;
}) {
  return (
    <span
      style={{ clipPath: TORN_CLIP }}
      className={`inline-block bg-belsy-green px-4 py-1.5 leading-none text-belsy-purple ${
        handwritten
          ? "font-handwritten text-xl"
          : "font-sans text-sm font-extrabold uppercase tracking-wide"
      } ${className}`}
    >
      {children}
    </span>
  );
}

/* ---- Marca-texto: tira de papel RASGADO verde sob a palavra ----
   A assinatura da marca é o recorte/colagem: bordas rasgadas + texto roxo.
   Insets NEGATIVOS generosos garantem que os rasgos fiquem na margem (nunca
   sobre os glifos), então a palavra não vaza pro fundo. Roxo #6e47e4 sobre
   verde #b8ff00 = 4.71:1 (passa WCAG AA p/ texto grande). */
const STRIP_CLIP =
  "polygon(0% 9%, 7% 3%, 15% 8%, 24% 2%, 34% 7%, 45% 2%, 55% 8%, 66% 3%, 76% 8%, 86% 2%, 95% 7%, 100% 4%, 98% 33%, 100% 60%, 100% 95%, 92% 98%, 83% 92%, 73% 98%, 63% 93%, 52% 99%, 42% 92%, 32% 98%, 22% 93%, 12% 98%, 4% 92%, 0% 96%, 2% 62%, 1% 34%)";

export function Highlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative mx-[0.22em] inline-block ${className}`}>
      <span
        aria-hidden
        style={{
          clipPath: STRIP_CLIP,
          filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.28))",
        }}
        className="absolute -left-[0.13em] -right-[0.13em] -top-[0.14em] -bottom-[0.22em] z-0 -skew-x-2 bg-belsy-green"
      />
      <span className="relative z-10 text-belsy-purple">{children}</span>
    </span>
  );
}

/* ---- Polaroid (moldura de foto com fita + name tag) ---- */
export function Polaroid({
  src,
  alt,
  name,
  caption,
  rotate = -3,
  className = "",
  sizes = "(max-width: 768px) 45vw, 300px",
  priority = false,
}: {
  src: string;
  alt: string;
  name: string;
  caption?: string;
  rotate?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`relative block w-full bg-white p-2.5 pb-11 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-belsy-gray">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      {/* name tag */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <TornTag handwritten>{name}</TornTag>
      </div>
      {caption ? (
        <p className="mt-2 text-center font-sans text-xs font-semibold uppercase tracking-wide text-belsy-black/50">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
