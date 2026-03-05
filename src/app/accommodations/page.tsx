import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Rooms & Stays | Riverside Guest Rooms in Udupi",
    description: "Comfortable riverside guest rooms at TAM-BoSa Beach Retreat, Udupi. AC rooms with river views, en-suite bathrooms, and beach access just 100m away.",
    alternates: {
        canonical: "https://tambosa.com/accommodations",
    },
    openGraph: {
        title: "Rooms & Stays | Riverside Guest Rooms in Udupi",
        description: "Comfortable riverside guest rooms at TAM-BoSa Beach Retreat, Udupi. AC rooms with river views, en-suite bathrooms, and beach access just 100m away.",
        url: "https://tambosa.com/accommodations",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat rooms" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
