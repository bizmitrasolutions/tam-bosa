import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Accommodations | Luxury Backwater Villas & Ocean Suites",
    description: "Explore TAM-BoSa's premium suites. Enjoy direct beach access from our Oceanfront Suites or ultimate privacy in our lush Backwater Villas.",
};

export default function Page() {
    return <ClientPage />;
}
