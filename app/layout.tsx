import type { Metadata, Viewport } from "next";
import { Poppins, Mansalva } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./site-url";

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

const TITLE = "Belsy Language Academy — Inglês e Espanhol Online";
const DESCRIPTION =
  "Transforme a sua fluência em protagonismo. Inglês e espanhol com materiais de padrão internacional, professores autorais e turmas de até 4 alunos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Belsy Language Academy",
  },
  description: DESCRIPTION,
  applicationName: "Belsy Language Academy",
  authors: [{ name: "Belsy Language Academy", url: SITE_URL }],
  creator: "Belsy Language Academy",
  publisher: "Belsy Language Academy",
  category: "education",
  keywords: [
    "curso de inglês online",
    "curso de espanhol online",
    "aulas de inglês",
    "aulas de espanhol",
    "aulas de idiomas online",
    "fluência em inglês",
    "turmas reduzidas",
    "Belsy Academy",
    "Languages & Global Skills",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Belsy Language Academy",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#6e47e4",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Belsy Language Academy",
  alternateName: "Belsy Academy",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  description: DESCRIPTION,
  slogan: "Transforme a sua fluência em protagonismo.",
  sameAs: [
    "https://www.instagram.com/belsyacademy/",
    "https://linktr.ee/academybelsy",
  ],
  areaServed: "BR",
  knowsLanguage: ["pt-BR", "en", "es"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+553799350989",
    availableLanguage: ["Portuguese", "English", "Spanish"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
