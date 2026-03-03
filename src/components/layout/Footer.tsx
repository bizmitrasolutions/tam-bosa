import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#041B1C] border-t border-teal-900 pt-24 pb-12 px-6 mt-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">
                <div className="max-w-md">
                    <Link href="/" className="inline-block mb-6">
                        <img src="/logo.png" alt="TAM-BoSa Logo" className="h-12 w-auto object-contain" />
                    </Link>
                    <p className="text-[15px] text-foreground/70 leading-relaxed font-sans font-light">
                        A peaceful riverside retreat wrapped in nature. Family-friendly comfort with thoughtful architecture, just a short walk to the beach.
                    </p>
                </div>

                <div className="flex gap-20">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-serif text-lg tracking-wider text-primary-soft uppercase text-xs">Explore</h4>
                        <Link href="/" className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">Home</Link>
                        <Link href="/accommodations" className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">Accommodations</Link>
                        <Link href="/experiences" className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">Experiences</Link>
                        <Link href="/gallery" className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">Gallery</Link>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="font-serif text-lg tracking-wider text-primary-soft uppercase text-xs">Reach Us</h4>
                        <Link href="/contact" className="text-[13px] text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">Contact & Reserve</Link>
                        <span className="text-[13px] text-foreground/60 uppercase tracking-widest mt-2 block">Udupi, Karnataka, India</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-teal-900/50 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 font-light tracking-wider">
                <p>© {new Date().getFullYear()} TAM-BoSa Beach Retreat. All rights reserved.</p>
                <div className="flex gap-8 mt-6 md:mt-0">
                    <span className="hover:text-primary/70 cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-primary/70 cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
