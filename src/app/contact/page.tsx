import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Contact & Reservations | Reach our Udupi Retreat",
    description: "Call +91 87222 11666 for bookings. Plan your seaside getaway today. Reach out to TAM-BoSa Beach Retreat and experience Udupi’s finest hospitality.",
    alternates: {
        canonical: "https://www.tambosa.com/contact",
    },
    openGraph: {
        title: "Contact Us | TAM-BoSa Beach Retreat",
        description: "Call +91 87222 11666. Get in touch with TAM-BoSa Beach Retreat for bookings and inquiries.",
        url: "https://www.tambosa.com/contact",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat contact" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
