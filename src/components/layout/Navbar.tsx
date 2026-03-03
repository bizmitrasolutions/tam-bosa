"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openModal } = useContactModal();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 flex justify-center w-full mx-auto md:px-6 transition-all duration-300 ${scrolled ? "pt-4" : "pt-8"
                }`}
        >
            <nav
                className={`flex items-center justify-between w-full max-w-7xl px-8 py-4 transition-all duration-300 ${scrolled
                    ? "liquid-glass md:rounded-2xl"
                    : "bg-transparent border-transparent"
                    }`}
            >
                <Link href="/" className="flex items-center">
                    <img src="/logo.png" alt="TAM-BoSa Logo" className="h-10 w-auto object-contain" />
                </Link>
                <div className="hidden md:flex gap-8 lg:gap-10 text-[13px] uppercase tracking-widest font-medium text-foreground/80 lg:text-sm">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/accommodations" className="hover:text-primary transition-colors">
                        Accommodations
                    </Link>
                    <Link href="/experiences" className="hover:text-primary transition-colors">
                        Experiences
                    </Link>
                    <Link href="/gallery" className="hover:text-primary transition-colors">
                        Gallery
                    </Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">
                        Contact
                    </Link>
                </div>
                <button
                    onClick={openModal}
                    className="hidden md:block px-7 py-2.5 bg-primary text-background hover:bg-primary-soft transition-colors font-semibold text-sm rounded-sm"
                >
                    Reserve
                </button>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-[#041B1C]/95 backdrop-blur-lg border-b border-teal-900/50 flex flex-col items-center py-8 gap-6 shadow-2xl z-[60] overflow-hidden"
                    >
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary uppercase tracking-widest text-sm font-medium transition-colors">Home</Link>
                        <Link href="/accommodations" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary uppercase tracking-widest text-sm font-medium transition-colors">Accommodations</Link>
                        <Link href="/experiences" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary uppercase tracking-widest text-sm font-medium transition-colors">Experiences</Link>
                        <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary uppercase tracking-widest text-sm font-medium transition-colors">Gallery</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 hover:text-primary uppercase tracking-widest text-sm font-medium transition-colors">Contact</Link>

                        <button
                            onClick={() => { setMobileMenuOpen(false); openModal(); }}
                            className="mt-4 px-10 py-3 bg-primary text-background font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-primary-soft transition-colors"
                        >
                            Reserve Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
