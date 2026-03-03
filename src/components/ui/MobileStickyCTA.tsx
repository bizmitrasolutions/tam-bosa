"use client";

import { MessageCircle } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";

export function MobileStickyCTA() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    const { openModal } = useContactModal();

    // Only show the CTA after the user has scrolled past the hero section a bit
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    const handleWhatsAppClick = () => {
        openModal();
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 right-0 z-[100] md:hidden px-4 pb-6 pt-2 bg-gradient-to-t from-[var(--color-background)]"
        >
            <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-serif tracking-wider text-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-colors"
            >
                <MessageCircle size={20} fill="currentColor" strokeWidth={0} />
                <span className="font-semibold uppercase tracking-widest text-xs">Book via WhatsApp</span>
            </button>
        </motion.div>
    );
}
