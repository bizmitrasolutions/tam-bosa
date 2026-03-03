import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Gallery | Visual Storytelling of our Beach Retreat",
    description: "Immerse yourself in the visual story of TAM-BoSa. Glimpses of stillness from our beachfront homestay in Udupi.",
};

export default function Page() {
    return <ClientPage />;
}
