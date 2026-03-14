"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/accommodations", label: "Accommodations" },
    { href: "/experiences", label: "Experiences" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

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
                    : "bg-black/10 backdrop-blur-sm border-transparent md:rounded-2xl"
                    }`}
            >
                <Link href="/" className="flex items-center gap-3 md:gap-4">
                    <Image src="/logo.webp" alt="TAM-BoSa Beach Retreat Udupi Logo" width={240} height={80} className="h-14 md:h-20 w-auto object-contain" priority />
                    <span className="font-serif text-lg md:text-xl font-medium tracking-widest text-foreground">TAM-BoSa</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] uppercase tracking-widest font-medium text-foreground/80 lg:text-sm">
                    {NAV_LINKS.map(link => (
                        <Link key={link.href} href={link.href} className="hover:text-primary transition-colors py-2 px-1">
                            {link.label}
                        </Link>
                    ))}
                    <a href="tel:+918722211666" className="text-primary hover:text-primary-soft transition-colors py-2 px-1 flex items-center gap-2">
                        Call Us
                    </a>
                </div>
                <button
                    onClick={openModal}
                    className="hidden md:flex min-h-[44px] items-center justify-center px-7 bg-primary text-background hover:bg-primary-soft transition-colors font-semibold text-sm rounded-sm"
                >
                    Reserve
                </button>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden w-11 h-11 flex items-center justify-center -mr-2 text-foreground hover:text-primary transition-colors focus:outline-none"
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
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full min-h-[44px] text-foreground/80 hover:text-primary uppercase tracking-widest text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="mt-4 flex flex-col items-center gap-4">
                            <a
                                href="tel:+918722211666"
                                className="px-10 min-h-[44px] flex items-center justify-center border border-primary text-primary font-semibold uppercase tracking-widest text-[13px] rounded-sm hover:bg-primary/10 transition-colors w-full"
                            >
                                Call: +91 87222 11666
                            </a>
                            <button
                                onClick={() => { setMobileMenuOpen(false); openModal(); }}
                                className="px-10 min-h-[44px] flex items-center justify-center bg-primary text-background font-semibold uppercase tracking-widest text-[13px] rounded-sm hover:bg-primary-soft transition-colors w-full"
                            >
                                Reserve Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
