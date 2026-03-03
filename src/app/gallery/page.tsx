"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop"
];

// Asymmetric heights to force a fragmented masonry
const SPANS = [
    "col-span-1 row-span-2 h-[60vh]",
    "col-span-1 row-span-1 h-[30vh]",
    "col-span-1 row-span-1 h-[40vh]",
    "col-span-1 row-span-2 h-[70vh]",
    "col-span-1 row-span-1 h-[40vh]",
    "col-span-1 row-span-1 h-[50vh]"
];

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const getSelectedImage = () => IMAGES.find((img) => img === selectedId);

    return (
        <div className="bg-[#041B1C] min-h-screen text-foreground pt-36 pb-32">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-6xl font-serif text-primary tracking-widest uppercase">Visual Storytelling</h1>
                    <p className="mt-6 text-xs md:text-sm text-foreground/50 tracking-[0.4em] uppercase font-light">
                        Glimpses of stillness
                    </p>
                </motion.div>

                {/* Fragmented Masonry */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min items-center">
                    {IMAGES.map((img, i) => (
                        <motion.div
                            layoutId={`img-container-${img}`}
                            key={img}
                            onClick={() => setSelectedId(img)}
                            className={`relative overflow-hidden cursor-pointer group bg-teal-900 ${SPANS[i]}`}
                        >
                            <motion.img
                                src={img}
                                alt="Retreat imagery"
                                className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="text-primary w-10 h-10" strokeWidth={1} />
                            </div>
                        </motion.div>
                    ))}
                </div>
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
                                src={getSelectedImage()}
                                alt="Expanded view"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
