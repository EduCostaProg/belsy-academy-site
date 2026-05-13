import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Caveat } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Belsy Language Academy — Inglês e Espanhol Online",
  description:
    "Transforme a sua fluência em protagonismo. Aulas de inglês e espanhol com materiais licenciados de padrão mundial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-belsy-black text-belsy-white">
        {children}
      </body>
    </html>
  );
}
