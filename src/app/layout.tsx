import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { ContactModal } from "@/components/ui/ContactModal";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tam-bosa.com"),
  title: {
    default: "TAM-BoSa Beach Retreat | Luxury Udupi Homestay",
    template: "%s | TAM-BoSa Resort"
  },
  description: "A private luxury beachfront retreat in Udupi, Karnataka. Experience the duality of ocean waves and calm backwaters. Book your exclusive nature getaway today.",
  keywords: ["Udupi homestay", "Karnataka resort", "beachfront resort", "backwaters", "private villa", "TAM-BoSa"],
  openGraph: {
    title: "TAM-BoSa Beach Retreat | Luxury Udupi Homestay",
    description: "A private escape wrapped in nature. Where the sea greets you and backwaters lull you into peace.",
    url: "https://tam-bosa.com",
    siteName: "TAM-BoSa Resort",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-garden.jpg",
        width: 1200,
        height: 630,
        alt: "TAM-BoSa Beach Retreat Sunrise Entrance",
      },
      {
        url: "/images/og-lobby.jpg",
        width: 1200,
        height: 630,
        alt: "TAM-BoSa Oceanside View",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAM-BoSa Beach Retreat | Luxury Udupi Homestay",
    description: "A private luxury beachfront retreat in Udupi, Karnataka. Experience the duality of ocean waves and calm backwaters.",
    images: ["/images/og-garden.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <ContactModalProvider>
          <Navbar />
          {/* Global Hotel Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["Hotel", "LocalBusiness"],
                "name": "TAM-BoSa Beach Retreat",
                "description": "A luxury beachfront homestay located in Udupi, Karnataka, offering private oceanfront suites and backwater villas.",
                "url": "https://tam-bosa.com",
                "telephone": "+91 87222 11666",
                "email": "tambosabeachretreat@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Udupi",
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
                },
                "starRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "amenityFeature": [
                  { "@type": "LocationFeatureSpecification", "name": "Direct Beach Access", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Backwater Views", "value": true }
                ]
              })
            }}
          />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileStickyCTA />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
