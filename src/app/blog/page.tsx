import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Travel Guide | Udupi Tips, Beaches & Local Insights",
    description: "Explore the hidden gems of Udupi. From secret beaches to coastal travel tips, get inspired for your next seaside adventure with the TAM-BoSa guide.",
    alternates: {
        canonical: "https://tambosa.com/blog",
    },
    openGraph: {
        title: "Travel Guide | Udupi Tips, Beaches & Local Insights",
        description: "Travel tips for Udupi, Karnataka — best beaches, local food, homestay picks, and backwater experiences. Curated by TAM-BoSa Beach Retreat.",
        url: "https://tambosa.com/blog",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat travel guide" }],
    },
};

export default function BlogPage() {
    return <ClientPage />;
}
