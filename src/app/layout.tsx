import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL("https://www.tambosa.com"),
  title: {
    default: "TAM-BoSa Beach Retreat | Premium Beachside Homestay in Udupi",
    template: "%s | TAM-BoSa Resort"
  },
  description: "Experience the ultimate coastal escape at TAM-BoSa Beach Retreat, Udupi. Just steps from the Arabian Sea, our homestay offers luxury beachside living. For bookings, contact us at +91 87222 11666.",
  keywords: ["Udupi homestay", "beach homestay Udupi", "TAM-BoSa Beach Retreat", "riverside homestay Karnataka", "beachside stay Udupi", "family homestay near beach Karnataka", "best homestay in Udupi"],
  openGraph: {
    title: "TAM-BoSa Beach Retreat | Premium Beachside Homestay in Udupi",
    description: "Wake up to the sound of waves at TAM-BoSa Udupi. Luxury beachside stay between the sea and backwaters. Call +91 87222 11666 for reservations.",
    url: "https://www.tambosa.com",
    siteName: "TAM-BoSa Resort",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-garden.webp",
        width: 1200,
        height: 630,
        alt: "TAM-BoSa Beach Retreat Sunrise Entrance",
      },
      {
        url: "/images/og-lobby.webp",
        width: 1200,
        height: 630,
        alt: "TAM-BoSa Oceanside View",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAM-BoSa Beach Retreat | Premium Beachside Homestay in Udupi",
    description: "TAM-BoSa Beach Retreat — riverside homestay in Udupi, Karnataka. 100m from the beach. For inquiries, call +91 87222 11666.",
    images: ["/images/og-garden.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
                "url": "https://www.tambosa.com",
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
          <main className="min-h-screen" aria-label="Main content">
            {children}
          </main>
          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
