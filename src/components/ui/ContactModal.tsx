"use client";

import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { useContactModal } from "@/contexts/ContactModalContext";

// Dynamically import the heavy modal form content.
// This prevents react-datepicker and date-fns from loading on the initial page load for every user.
const DynamicContactModalInner = dynamic(
    () => import("./ContactModalInner").then((mod) => mod.ContactModalInner),
    { ssr: false }
);

export function ContactModal() {
    const { isOpen } = useContactModal();

    return (
        <AnimatePresence>
            {isOpen && <DynamicContactModalInner key="modal-inner" />}
        </AnimatePresence>
    );
}
