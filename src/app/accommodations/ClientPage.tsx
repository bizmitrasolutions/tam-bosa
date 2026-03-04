"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Wind, Wifi, Coffee, Bath, Tv, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

const FAQ = [
    { q: "What time is check-in and check-out?", a: "Check-in is from 2:00 PM, and check-out is at 11:00 AM." },
    { q: "How far is the beach?", a: "The beach is a very short, 100-meter walk across the road from the homestay." },
    { q: "Do you offer activities?", a: "While we provide a comfortable stay, activities like boating and kayaking are available nearby for an additional charge." },
    { q: "Are children allowed at the retreat?", a: "Absolutely. We are a family-friendly homestay with spaces for all ages to relax together." },
];

const ROOMS = [
    {
        name: "Riverside Guest Rooms",
        desc: "Comfortable, beautifully designed rooms situated by the quiet river, framed by natural greenery. Designed for families and nature lovers, each room offers a peaceful retreat with thoughtful aesthetics, cozy beds, warm hospitality, and easy access to the beach just across the road.",
        images: [
            "/images/bedroom-8.png",
            "/images/bedroom-4.png",
            "/images/bedroom-5.png",
            "/images/bedroom-7.png",
            "/images/washroom.png"
        ]
    }
];

function RoomCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Optional autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="w-full h-full relative group">
            <div className="w-full h-full overflow-hidden relative">
                <motion.div
                    className="flex w-full h-full transition-transform duration-700 ease-[0.16,1,0.3,1]"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, idx) => (
                        <div key={idx} className="w-full h-full flex-shrink-0 relative">
                            <Image
                                src={img}
                                alt={`Room view ${idx + 1}`}
                                fill
                                className="object-cover object-center"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                </>
            )}

            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentIndex === idx ? "bg-white" : "bg-white/40 hover:bg-white/60"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

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
                                <RoomCarousel images={room.images} />
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

                {/* Amenities Section */}
                <div className="max-w-5xl mx-auto mt-24 md:mt-40 mb-24 md:mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">Room Amenities</h3>
                        <p className="text-sm text-foreground/60 font-sans tracking-widest font-light uppercase">Everything you need for a comfortable stay</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { icon: <Wind className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />, label: "Air Conditioning" },
                            { icon: <Wifi className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />, label: "Complimentary Wi-Fi" },
                            { icon: <Bath className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />, label: "En-suite Bathroom" },
                            { icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />, label: "Tea & Coffee" },
                            { icon: <Tv className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />, label: "Smart TV" },
                            { icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />, label: "River & Beach Access" },
                        ].map((amenity, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="flex flex-col items-center justify-center text-center gap-4 p-6 bg-teal-900/10 border border-teal-800/20 hover:bg-teal-900/20 transition-colors"
                            >
                                <div className="text-primary-soft">
                                    {amenity.icon}
                                </div>
                                <span className="font-sans text-sm md:text-base font-light tracking-wide text-foreground/80">{amenity.label}</span>
                            </motion.div>
                        ))}
                    </div>
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

                {/* House Rules & Policies */}
                <div className="max-w-3xl mx-auto mt-24 md:mt-40 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">House Rules & Policies</h3>
                        <p className="text-sm text-foreground/60 font-sans tracking-widest font-light uppercase">For a comfortable stay for everyone</p>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        {[
                            { rule: "Check-in from 2:00 PM — Check-out by 11:00 AM" },
                            { rule: "Quiet hours are observed from 10:00 PM to 7:00 AM" },
                            { rule: "Smoking is not permitted inside the rooms or common indoor areas" },
                            { rule: "Pets are not allowed on the property" },
                            { rule: "Guests are responsible for any damage to the property during their stay" },
                            { rule: "Cancellations made 48 hours before check-in are eligible for a full refund. No-shows or late cancellations are non-refundable" },
                            { rule: "Valid government-issued photo ID is required at check-in for all adult guests" },
                            { rule: "Outside visitors are not permitted without prior approval from the host" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="flex items-start gap-4 py-4 border-b border-teal-800/20 last:border-b-0"
                            >
                                <span className="text-primary text-lg mt-0.5 select-none">•</span>
                                <p className="text-sm text-foreground/80 font-light leading-relaxed tracking-wide">{item.rule}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
