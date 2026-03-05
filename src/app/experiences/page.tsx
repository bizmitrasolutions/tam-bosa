import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Experiences | Coastal & Backwater Activities in Udupi",
    description: "Discover the best of beach living in Udupi. From surfing to sunrise walks and serene kayaking, explore the unique coastal experiences at TAM-BoSa.",
    alternates: {
        canonical: "https://tambosa.com/experiences",
    },
    openGraph: {
        title: "Experiences | TAM-BoSa Beach Retreat",
        description: "Discover the unique experiences awaiting you at TAM-BoSa Beach Retreat.",
        url: "https://tambosa.com/experiences",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat experiences" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
