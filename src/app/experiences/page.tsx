import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Experiences | Coastal & Backwater Activities in Udupi",
    description: "Discover the best of beach living in Udupi. From surfing to sunrise walks and serene kayaking. Call +91 87222 11666 to book your space.",
    alternates: {
        canonical: "https://www.tambosa.com/experiences",
    },
    openGraph: {
        title: "Experiences | TAM-BoSa Beach Retreat",
        description: "Discover the unique coastal and backwater experiences at TAM-BoSa Beach Retreat. For inquiries, call +91 87222 11666.",
        url: "https://www.tambosa.com/experiences",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat experiences" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
