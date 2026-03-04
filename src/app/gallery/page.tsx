import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Gallery | Visual Storytelling of our Beach Retreat",
    description: "Photos of TAM-BoSa Beach Retreat — river views, guest rooms, beach sunrises, and the lush surroundings of our Udupi homestay. See it before you visit.",
    alternates: {
        canonical: "https://tam-bosa.com/gallery",
    },
    openGraph: {
        title: "Gallery | Visual Storytelling of our Beach Retreat",
        description: "Photos of TAM-BoSa Beach Retreat — river views, guest rooms, beach sunrises, and the lush surroundings of our Udupi homestay. See it before you visit.",
        url: "https://tam-bosa.com/gallery",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat gallery" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
