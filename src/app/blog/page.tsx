import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Travel Guide | Udupi Tips, Beaches & Local Insights",
    description: "Explore the hidden gems of Udupi. From secret beaches to coastal travel tips, get inspired for your next adventure. Contact +91 87222 11666 for more info.",
    alternates: {
        canonical: "https://www.tambosa.com/blog",
    },
    openGraph: {
        title: "Travel Guide | Udupi Tips, Beaches & Local Insights",
        description: "Travel tips for Udupi, Karnataka — best beaches, local food, and backwater experiences. Call +91 87222 11666 for stays.",
        url: "https://www.tambosa.com/blog",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat travel guide" }],
    },
};

export default function BlogPage() {
    return <ClientPage />;
}
