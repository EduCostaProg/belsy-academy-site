import Image from "next/image";

type Variant = "white" | "purple";

const ICON: Record<Variant, string> = {
  white: "/brand/belsy-icon-white.png",
  purple: "/brand/belsy-icon-purple.png",
};

const MARK: Record<Variant, string> = {
  white: "/brand/belsy-mark-white.png",
  purple: "/brand/belsy-mark-purple.png",
};

const MARK_RATIO = 1772 / 828; // largura / altura do arquivo oficial
const ICON_RATIO = 828 / 817; // altura / largura do ícone oficial

export function BelsyIcon({
  variant = "white",
  size = 40,
  className = "",
  priority = false,
  decorative = false,
}: {
  variant?: Variant;
  size?: number;
  className?: string;
  priority?: boolean;
  /** quando o nome da marca já aparece ao lado, marque o ícone como decorativo */
  decorative?: boolean;
}) {
  return (
    <Image
      src={ICON[variant]}
      alt={decorative ? "" : "Belsy"}
      aria-hidden={decorative || undefined}
      width={size}
      height={Math.round(size * ICON_RATIO)}
      priority={priority}
      style={{ height: "auto" }}
      className={className}
    />
  );
}

export function BelsyWordmark({
  variant = "white",
  height = 40,
  className = "",
  priority = false,
}: {
  variant?: Variant;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={MARK[variant]}
      alt="Belsy Language Academy"
      width={Math.round(height * MARK_RATIO)}
      height={height}
      priority={priority}
      style={{ height: "auto" }}
      className={className}
    />
  );
}
