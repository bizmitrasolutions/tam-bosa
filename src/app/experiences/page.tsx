import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Experiences | Coastal & Backwater Activities in Udupi",
    description: "Call +91 87222 11666 for bookings. Discover the best of coastal Udupi with TAM-BoSa Beach Retreat.",
    alternates: {
        canonical: "https://www.tambosa.com/experiences",
    },
    openGraph: {
        title: "Experiences | TAM-BoSa Beach Retreat",
        description: "Call +91 87222 11666 for bookings. Discover the best of coastal Udupi with TAM-BoSa Beach Retreat.",
        url: "https://www.tambosa.com/experiences",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat experiences" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
