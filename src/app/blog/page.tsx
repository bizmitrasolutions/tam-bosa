import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Travel Guide | Udupi Tips, Beaches & Local Insights",
    description: "Call +91 87222 11666 for stay inquiries. Explore the best of Udupi with TAM-BoSa Beach Retreat. Detailed travel guides for your coastal escape.",
    alternates: {
        canonical: "https://www.tambosa.com/blog",
    },
    openGraph: {
        title: "Travel Guide | Udupi Tips, Beaches & Local Insights",
        description: "Call +91 87222 11666 for stays. Travel tips for Udupi, Karnataka — best beaches, local food, and backwater experiences.",
        url: "https://www.tambosa.com/blog",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat travel guide" }],
    },
};

export default function BlogPage() {
    return <ClientPage />;
}
