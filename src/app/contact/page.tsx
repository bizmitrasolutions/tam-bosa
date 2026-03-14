import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Contact & Reservations | Reach our Udupi Retreat",
    description: "Plan your seaside getaway today. Reach out to TAM-BoSa Beach Retreat for bookings at +91 87222 11666. Experience Udupi’s finest hospitality.",
    alternates: {
        canonical: "https://www.tambosa.com/contact",
    },
    openGraph: {
        title: "Contact Us | TAM-BoSa Beach Retreat",
        description: "Get in touch with TAM-BoSa Beach Retreat for bookings and inquiries. Call +91 87222 11666.",
        url: "https://www.tambosa.com/contact",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat contact" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
