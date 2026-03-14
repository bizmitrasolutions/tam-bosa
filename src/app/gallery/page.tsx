import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Gallery | Visual Storytelling of our Beach Retreat",
    description: "Call +91 87222 11666 for stay inquiries. Step into paradise through our gallery. See the coastal beauty surrounding TAM-BoSa.",
    alternates: {
        canonical: "https://www.tambosa.com/gallery",
    },
    openGraph: {
        title: "Gallery | TAM-BoSa Beach Retreat",
        description: "Call +91 87222 11666 for bookings. Explore the beauty of TAM-BoSa Beach Retreat through our photo gallery.",
        url: "https://www.tambosa.com/gallery",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat gallery" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
