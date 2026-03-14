import Link from "next/link";
import Image from "next/image";

const EXPLORE_LINKS = [
    { href: "/", label: "Home" },
    { href: "/accommodations", label: "Accommodations" },
    { href: "/experiences", label: "Experiences" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Travel Guide" }
];

const LEGAL_LINKS = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" }
];

export function Footer() {
    return (
        <footer className="bg-[#041B1C] border-t border-teal-900 pt-10 pb-6 px-6 mt-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12 relative z-10">
                <div className="max-w-md">
                    <Link href="/" className="inline-block mb-4">
                        <Image src="/logo-transparent.png" alt="TAM-BoSa Beach Retreat Udupi Logo" width={160} height={160} className="h-20 w-20 md:h-24 md:w-24 object-contain rounded-full" />
                    </Link>
                    <p className="text-[14px] text-foreground/70 leading-relaxed font-sans font-light">
                        A peaceful riverside retreat wrapped in nature. Family-friendly comfort with thoughtful architecture, just a short walk to the beach.
                    </p>
                </div>

                <div className="flex gap-8 md:gap-16 mt-6 md:mt-0">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-serif text-base tracking-wider text-primary-soft uppercase">Explore</h4>
                        {EXPLORE_LINKS.map(link => (
                            <Link key={link.href} href={link.href} className="inline-block py-2 text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-serif text-base tracking-wider text-primary-soft uppercase">Reach Us</h4>
                        <Link href="/contact" className="inline-block py-2 text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">Contact & Reserve</Link>
                        <a href="tel:+918722211666" className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest block py-2">+91 87222 11666</a>
                        <span className="text-[13px] text-foreground/60 uppercase tracking-widest mt-1 block">Udupi, Karnataka, India</span>
                        <div className="mt-4">
                            <span className="text-[11px] text-foreground/40 uppercase tracking-[0.15em] block mb-3">Also available on</span>
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                                <a href="https://app.mmyt.co/Xm2V/83t03c2f" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                    <Image src="/images/ota/MakeMyTrip/MakeMyTrip_idD023S7dF_2.svg" alt="Book TAM-BoSa on MakeMyTrip" width={120} height={28} className="h-[20px] w-auto" />
                                </a>
                                <a href="https://www.booking.com/hotel/in/tam-bosa-beach-retreat.en-gb.html" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                    <Image src="/images/ota/Booking.com/Booking.com_Logo_6.svg" alt="Book TAM-BoSa on Booking.com" width={120} height={28} className="h-[20px] w-auto" />
                                </a>
                                <a href="https://www.agoda.com/en-sg/tam-bosa-beach-retreat/hotel/varamballi-in.html" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                    <Image src="/images/ota/Agoda/Agoda_Logo_3.svg" alt="Book TAM-BoSa on Agoda" width={120} height={28} className="h-[20px] w-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-teal-900/50 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 font-light tracking-wider gap-2 md:gap-0 text-center md:text-left">
                <p>© {new Date().getFullYear()} TAM-BoSa Beach Retreat. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-6">
                    {LEGAL_LINKS.map(link => (
                        <Link key={link.href} href={link.href} className="inline-block py-2 hover:text-primary/70 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
