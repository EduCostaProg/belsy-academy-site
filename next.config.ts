import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site 100% estático em ./out (sem runtime de servidor).
  output: "export",
  // O otimizador de imagens do Next exige servidor; no export servimos as imagens como estão.
  images: { unoptimized: true },
};

export default nextConfig;
