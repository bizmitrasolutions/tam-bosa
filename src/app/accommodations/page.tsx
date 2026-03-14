import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Rooms & Stays | Riverside Guest Rooms in Udupi",
    description: "Call +91 87222 11666 for bookings. Luxury riverside and beachside accommodations in Udupi. Experience comfort at TAM-BoSa Beach Retreat.",
    alternates: {
        canonical: "https://www.tambosa.com/accommodations",
    },
    openGraph: {
        title: "Rooms & Stays | Riverside Guest Rooms in Udupi",
        description: "Comfortable riverside guest rooms at TAM-BoSa Beach Retreat, Udupi. AC rooms with river views and beach access. For reservations, call +91 87222 11666.",
        url: "https://www.tambosa.com/accommodations",
        images: [{ url: "/images/og-garden.webp", alt: "TAM-BoSa Beach Retreat rooms" }],
    },
};

export default function Page() {
    return <ClientPage />;
}
