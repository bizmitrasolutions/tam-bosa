"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

type Category = "All" | "Accommodations" | "Views" | "Common Areas" | "Experiences";

const IMAGES: { src: string; alt: string; category: Category }[] = [
    // Accommodations 
    { src: "/images/bedroom.png", alt: "Cozy bedroom interior at TAM-BoSa", category: "Accommodations" },
    { src: "/images/bedroom-2.png", alt: "TAM-BoSa beachfront view with ocean waves", category: "Accommodations" },
    { src: "/images/bedroom-3.png", alt: "Premium bedroom with natural lighting", category: "Accommodations" },
    { src: "/images/bedroom-4.png", alt: "Spacious bedroom interior", category: "Accommodations" },
    { src: "/images/bedroom-5.png", alt: "Comfortable bedroom setup", category: "Accommodations" },
    { src: "/images/bedroom-6.png", alt: "Elegant bedroom design", category: "Accommodations" },
    { src: "/images/bedroom-7.png", alt: "Premium Oceanfront suite bedroom interior", category: "Accommodations" },
    { src: "/images/bedroom-8.png", alt: "Luxurious bedroom features", category: "Accommodations" },
    { src: "/images/washroom.png", alt: "Clean and modern washroom at TAM-BoSa homestay", category: "Accommodations" },

    // Views
    { src: "/images/beach-view.jpeg", alt: "Stunning beach view from the retreat", category: "Views" },
    { src: "/images/delta-point.jpeg", alt: "Scenic delta point view", category: "Views" },
    { src: "/images/garden.png", alt: "Lush green garden area", category: "Views" },
    { src: "/images/outside-view.png", alt: "Exterior view of the property", category: "Views" },
    { src: "/images/river-view.jpeg", alt: "Calm river view", category: "Views" },
    { src: "/images/sunset-view.png", alt: "Breathtaking sunset view", category: "Views" },

    // Common Areas
    { src: "/images/entrance.png", alt: "Serene morning view of the beach retreat entrance", category: "Common Areas" },
    { src: "/images/entrance-2.png", alt: "Welcoming entrance to TAM-BoSa", category: "Common Areas" },
    { src: "/images/lobby.png", alt: "Luxury coastal dining setup at sunset", category: "Common Areas" },
    { src: "/images/sitting-area.png", alt: "Comfortable sitting area at TAM-BoSa homestay Udupi", category: "Common Areas" },
    { src: "/images/sitting-area-2.png", alt: "Relaxing sitting lounge", category: "Common Areas" },
    { src: "/images/sitting-area-3.png", alt: "Spacious sitting and gathering area", category: "Common Areas" },

    // Experiences
    { src: "/images/boat-ride.png", alt: "Exciting boat ride experience", category: "Experiences" },
    { src: "/images/jet-ski.png", alt: "Thrilling jet ski adventure", category: "Experiences" },
    { src: "/images/kayaking.png", alt: "Kayaking along the serene waters", category: "Experiences" }
];

const CATEGORIES: Category[] = ["All", "Accommodations", "Views", "Common Areas", "Experiences"];

// Asymmetric heights to force a fragmented masonry
const SPANS = [
    "col-span-1 row-span-2 h-[60vh]",
    "col-span-1 row-span-1 h-[30vh]",
    "col-span-1 row-span-1 h-[40vh]",
    "col-span-1 row-span-2 h-[70vh]",
    "col-span-1 row-span-1 h-[40vh]",
    "col-span-1 row-span-1 h-[50vh]"
];

const getSpan = (index: number) => SPANS[index % SPANS.length];

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredImages = IMAGES.filter(
        (img) => activeCategory === "All" || img.category === activeCategory
    );

    const getSelectedImage = () => IMAGES.find((img) => img.src === selectedId);

    return (
        <div className="bg-[#041B1C] min-h-screen text-foreground pt-36 pb-32">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-serif text-primary tracking-widest uppercase">Visual Storytelling</h1>
                    <p className="mt-6 text-xs md:text-sm text-foreground/50 tracking-[0.4em] uppercase font-light">
                        Glimpses of stillness
                    </p>
                </motion.div>

                {/* Typographic Filter UI */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20"
                >
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="relative focus:outline-none group"
                        >
                            <span
                                className={`text-sm tracking-[0.2em] transition-all duration-500 uppercase ${activeCategory === category
                                    ? "text-primary font-medium"
                                    : "text-foreground/40 hover:text-foreground/80 font-light"
                                    }`}
                            >
                                {category}
                            </span>
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeFilterRef"
                                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Fragmented Masonry */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min items-center"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img, i) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                layoutId={`img-container-${img.src}`}
                                key={img.src}
                                onClick={() => setSelectedId(img.src)}
                                className={`relative overflow-hidden cursor-pointer group ${getSpan(i)}`}
                            >
                                <motion.img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ZoomIn className="text-primary w-10 h-10" strokeWidth={1} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Immersive Overlay */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 liquid-glass cursor-pointer"
                            onClick={() => setSelectedId(null)}
                        />

                        <button
                            className="absolute top-10 right-10 z-50 p-4 text-white/50 hover:text-primary transition-colors focus:outline-none mix-blend-difference"
                            onClick={() => setSelectedId(null)}
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <motion.div
                            layoutId={`img-container-${selectedId}`}
                            className="relative z-20 w-[90vw] md:w-[75vw] h-[80vh] flex items-center justify-center"
                        >
                            <img
                                src={getSelectedImage()?.src}
                                alt={getSelectedImage()?.alt || "Expanded view"}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
