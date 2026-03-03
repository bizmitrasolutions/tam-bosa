import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Contact & Reservations | Reach our Udupi Retreat",
    description: "Contact TAM-BoSa Beach Retreat to book your luxury stay. Connect with our concierge or find our location in Udupi, Karnataka.",
};

export default function Page() {
    return <ClientPage />;
}
