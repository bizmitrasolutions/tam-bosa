import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Travel Guide | Udupi Tips, Beaches & Local Insights",
    description: "Your guide to exploring Udupi, Karnataka. Local tips on beaches, backwaters, food, and things to do — curated by TAM-BoSa Beach Retreat.",
};

export default function BlogPage() {
    return <ClientPage />;
}
