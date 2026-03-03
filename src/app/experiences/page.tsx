import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Experiences | Coastal & Backwater Activities in Udupi",
    description: "Discover the daily rhythm at TAM-BoSa Resort. From barefoot walks on the Arabian Sea to kayaking in peaceful Udupi backwaters.",
};

export default function Page() {
    return <ClientPage />;
}
