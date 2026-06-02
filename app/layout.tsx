import type { Metadata, Viewport } from "next";
import { Poppins, Mansalva } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  display: "swap",
});

const mansalva = Mansalva({
  variable: "--font-mansalva",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://belsyacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Belsy Language Academy — Inglês e Espanhol Online",
    template: "%s · Belsy Language Academy",
  },
  description:
    "Transforme a sua fluência em protagonismo. Inglês e espanhol com materiais licenciados de padrão mundial, professores autorais e turmas de até 4 alunos.",
  keywords: [
    "inglês online",
    "espanhol online",
    "aulas de idiomas",
    "fluência",
    "Belsy Academy",
    "Languages & Global Skills",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Belsy Language Academy",
    title: "Belsy Language Academy — Inglês e Espanhol Online",
    description:
      "Transforme a sua fluência em protagonismo. Materiais licenciados de padrão mundial, professores autorais e turmas de até 4 alunos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belsy Language Academy — Inglês e Espanhol Online",
    description:
      "Transforme a sua fluência em protagonismo. Inglês e espanhol com materiais de padrão mundial.",
  },
};

export const viewport: Viewport = {
  themeColor: "#6e47e4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${mansalva.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-belsy-black text-belsy-white font-sans">
        {children}
      </body>
    </html>
  );
}
