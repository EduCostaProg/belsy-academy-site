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
    <span className={`relative inline-block ${className}`}>
      <span
        aria-hidden
        style={{
          clipPath: STRIP_CLIP,
          filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.28))",
        }}
        className="absolute -left-[0.24em] -right-[0.24em] -top-[0.14em] -bottom-[0.22em] z-0 -skew-x-2 bg-belsy-green"
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
