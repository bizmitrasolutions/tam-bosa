import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Contact & Reservations | Reach our Udupi Retreat",
    description: "Book your stay at TAM-BoSa Beach Retreat, Udupi. Reach us via WhatsApp, phone, or email. Located along the riverside, 100m from the beach in Karnataka.",
    alternates: {
        canonical: "https://tam-bosa.com/contact",
    },
    openGraph: {
        title: "Contact & Reservations | Reach our Udupi Retreat",
        description: "Book your stay at TAM-BoSa Beach Retreat, Udupi. Reach us via WhatsApp, phone, or email. Located along the riverside, 100m from the beach in Karnataka.",
        url: "https://tam-bosa.com/contact",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat contact" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
