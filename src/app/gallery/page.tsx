import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Gallery | Visual Storytelling of our Beach Retreat",
    description: "Step into paradise through our gallery. See captured moments of golden sunrise beach walks, serene river views, and the coastal beauty surrounding TAM-BoSa.",
    alternates: {
        canonical: "https://tambosa.com/gallery",
    },
    openGraph: {
        title: "Gallery | TAM-BoSa Beach Retreat",
        description: "Explore the beauty of TAM-BoSa Beach Retreat through our photo gallery.",
        url: "https://tambosa.com/gallery",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat gallery" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
