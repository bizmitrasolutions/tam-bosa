import Link from "next/link";
import Image from "next/image";

const EXPLORE_LINKS = [
    { href: "/", label: "Home" },
    { href: "/accommodations", label: "Accommodations" },
    { href: "/experiences", label: "Experiences" },
    { href: "/gallery", label: "Gallery" }
];

const LEGAL_LINKS = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" }
];

export function Footer() {
    return (
        <footer className="bg-[#041B1C] border-t border-teal-900 pt-16 pb-8 px-6 mt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-16 relative z-10">
                <div className="max-w-md">
                    <Link href="/" className="inline-block mb-4">
                        <Image src="/logo.png" alt="TAM-BoSa Beach Retreat Udupi Logo" width={200} height={48} className="h-10 w-auto object-contain" />
                    </Link>
                    <p className="text-[14px] text-foreground/70 leading-relaxed font-sans font-light">
                        A peaceful riverside retreat wrapped in nature. Family-friendly comfort with thoughtful architecture, just a short walk to the beach.
                    </p>
                </div>

                <div className="flex gap-12 md:gap-20 mt-8 md:mt-0">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-serif text-base tracking-wider text-primary-soft uppercase">Explore</h4>
                        {EXPLORE_LINKS.map(link => (
                            <Link key={link.href} href={link.href} className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-serif text-base tracking-wider text-primary-soft uppercase">Reach Us</h4>
                        <Link href="/contact" className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">Contact & Reserve</Link>
                        <span className="text-[13px] text-foreground/60 uppercase tracking-widest mt-1 block">Udupi, Karnataka, India</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-teal-900/50 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 font-light tracking-wider gap-4 md:gap-0 text-center md:text-left">
                <p>© {new Date().getFullYear()} TAM-BoSa Beach Retreat. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-6">
                    {LEGAL_LINKS.map(link => (
                        <Link key={link.href} href={link.href} className="hover:text-primary/70 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
