"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

const FAQ = [
    { q: "What time is check-in and check-out?", a: "Check-in is from 2:00 PM, and check-out is at 11:00 AM." },
    { q: "How far is the beach?", a: "The beach is a very short, 100-meter walk across the road from the homestay." },
    { q: "Do you offer activities?", a: "While we provide a comfortable stay, activities like boating and kayaking are available nearby for an additional charge." },
    { q: "Are children allowed at the retreat?", a: "Absolutely. We are a family-friendly homestay with spaces for all ages to relax together." },
];

const ROOMS = [
    {
        name: "Oceanfront Suite",
        desc: "A comfortable, beautifully designed suite offering views towards the Arabian Sea. Features include a cozy bed, well-planned architecture, and easy access to the beach just across the road. Enjoy our dedicated service throughout your stay.",
        img: "/images/bedroom.png"
    },
    {
        name: "Backwater Villa",
        desc: "A serene room situated closer to the quiet river, framed by natural greenery. Designed for families and nature lovers, it offers a peaceful retreat with thoughtful aesthetics and warm hospitality.",
        img: "/images/bedroom-4.png"
    }
];

export default function Accommodations() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useContactModal();

    return (
        <div className="bg-[#041B1C] min-h-screen text-foreground pt-24 md:pt-36 pb-20 md:pb-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-40"
                >
                    <h1 className="text-4xl md:text-7xl font-serif text-primary tracking-wide">Comfortable Stays</h1>
                    <p className="mt-6 md:mt-8 text-sm md:text-base text-foreground/70 font-sans tracking-[0.2em] font-light max-w-2xl mx-auto uppercase">
                        Thoughtful architecture and warm service.
                    </p>
                </motion.div>

                {/* Room Showcase */}
                <div className="flex flex-col gap-20 md:gap-40 mb-24 md:mb-40">
                    {ROOMS.map((room, i) => (
                        <div key={room.name} className={`flex flex-col ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-24 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full md:w-3/5 h-[40vh] md:h-[70vh] overflow-hidden relative"
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-[8s]"
                                    style={{ backgroundImage: `url(${room.img})` }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: i % 2 !== 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="w-full md:w-2/5"
                            >
                                <h2 className="text-3xl md:text-5xl font-serif text-primary-soft mb-6">{room.name}</h2>
                                <p className="text-foreground/90 font-light leading-loose text-sm md:text-base tracking-wide">
                                    {room.desc}
                                </p>
                                <div className="mt-12 w-full h-px bg-teal-800/50" />
                                <div className="pt-8 flex justify-between items-center">
                                    <span className="text-xs uppercase tracking-[0.2em] text-primary">All essential amenities</span>
                                    <button onClick={openModal} className="text-xs uppercase tracking-[0.2em] text-teal-400 hover:text-white transition-all duration-300 font-bold tracking-widest cursor-pointer">Book Now →</button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Guest Q&A */}
                <div className="max-w-3xl mx-auto mt-24 md:mt-40">
                    <h3 className="text-2xl md:text-3xl font-serif text-center text-primary mb-10 md:mb-16">Guest Logistics</h3>
                    <div className="flex flex-col divide-y divide-teal-800/30 border-y border-teal-800/30">
                        {FAQ.map((faq, i) => (
                            <div key={i} className="py-6">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center text-left py-2 hover:text-primary transition-colors focus:outline-none"
                                >
                                    <span className="font-serif text-lg tracking-wide">{faq.q}</span>
                                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }}>
                                        <ChevronDown size={20} className="text-primary-soft" />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pt-4 pb-2 text-sm text-foreground/60 font-light leading-relaxed tracking-wide">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* SEO FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": FAQ.map(faq => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.a
                                }
                            }))
                        })
                    }}
                />

            </div>
        </div>
    );
}
