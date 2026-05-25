import type { Metadata } from "next";
import { Red_Hat_Display, Inter, JetBrains_Mono } from "next/font/google";
import { DemoModalProvider } from "@/components/chrome/DemoModalProvider";
import { Navbar } from "@/components/chrome/Navbar";
import { Footer } from "@/components/chrome/Footer";
import { DemoModal } from "@/components/chrome/DemoModal";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORG_JSONLD, PRODUCT_JSONLD } from "@/lib/seo";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-red-hat-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mettry.io"),
  title: {
    default: "Mettry · Le pilotage de votre patrimoine immobilier, enfin centralisé",
    template: "%s · Mettry",
  },
  description:
    "Mettry est la plateforme SaaS tout-en-un qui remplace votre GMAO, votre suivi énergétique, votre ticketing et votre GED. Données hébergées en France. Décret Tertiaire intégré.",
  keywords: [
    "GMAO",
    "facility management",
    "suivi énergétique",
    "Décret Tertiaire",
    "OPERAT",
    "patrimoine immobilier",
    "ticketing maintenance",
    "GED bâtiment",
  ],
  authors: [{ name: "Mettry" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mettry.io",
    siteName: "Mettry",
    title: "Mettry · Le pilotage de votre patrimoine immobilier",
    description:
      "Remplacez votre GMAO, votre suivi énergétique, votre ticketing et votre GED par une seule plateforme.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mettry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mettry · Le pilotage de votre patrimoine immobilier",
    description: "La plateforme tout-en-un pour piloter votre patrimoine immobilier.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${redHatDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <JsonLd id="org-jsonld" data={ORG_JSONLD} />
        <JsonLd id="product-jsonld" data={PRODUCT_JSONLD} />
        <DemoModalProvider>
          <Navbar />
          {children}
          <Footer />
          <DemoModal />
        </DemoModalProvider>
      </body>
    </html>
  );
}