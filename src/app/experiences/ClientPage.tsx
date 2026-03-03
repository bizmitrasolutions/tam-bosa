"use client";

import { motion } from "framer-motion";

const RHYTHM = [
    {
        phase: "The Awakening",
        time: "Morning",
        title: "Barefoot Walks & Sunrise Calm",
        desc: "Mornings begin with barefoot walks on the pristine beach just 100 steps away. The sea greets you, setting a peaceful tone for the hours ahead.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
    },
    {
        phase: "The Exploration",
        time: "Afternoon",
        title: "Gliding Across Backwaters",
        desc: "Spend your day soaking up the sun or opt for a kayaking experience. Experience the landscape in its purest form as you glide across the slow-moving backwaters.",
        img: "https://images.unsplash.com/photo-1455243387813-f9a72175a00a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        phase: "The Unwinding",
        time: "Evening",
        title: "Golden Skies Mirrored",
        desc: "Listen to the breeze rustle through palm trees. Evenings end with golden skies mirrored in still waters, lulling you into deep tranquility.",
        img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071&auto=format&fit=crop"
    }
];

export default function Experiences() {
    return (
        <div className="bg-background text-foreground min-h-screen pt-36 pb-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32"
                >
                    <h1 className="text-5xl md:text-7xl font-serif text-teal-900 tracking-wide">The Daily Rhythm</h1>
                    <p className="mt-8 text-sm md:text-base text-teal-800/80 font-sans tracking-[0.2em] font-medium max-w-2xl mx-auto uppercase">
                        A chronological breakdown of life at the retreat.
                    </p>
                    <p className="mt-8 text-sm text-teal-900/70 font-sans font-light max-w-3xl mx-auto leading-relaxed">
                        TAM-BoSa Resort is uniquely positioned on a narrow strip of land where the dynamic Arabian Sea meets tranquil Udupi backwater networks. This rare geography allows our guests to experience two entirely different ecosystems within a single day.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-12 flex flex-col gap-32 pb-20">

                    {RHYTHM.map((item, i) => (
                        <motion.div
                            key={item.phase}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative pl-12 md:pl-24"
                        >
                            <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400">{item.time}</span>
                                    <p className="text-xs uppercase tracking-[0.2em] text-teal-900/60 mt-2 mb-6">{item.phase}</p>
                                    <h2 className="text-3xl md:text-5xl font-serif text-teal-900 leading-tight mb-8">{item.title}</h2>
                                    <p className="text-foreground/80 font-sans tracking-wider font-light mb-16 max-w-sm text-sm leading-relaxed">{item.desc}</p>

                                    {i === 1 && (
                                        <div className="mt-10 inline-block px-4 py-2 border border-primary text-primary text-[10px] uppercase font-bold tracking-[0.2em]">
                                            Optional Experience available at extra cost
                                        </div>
                                    )}
                                </div>

                                <div className="w-full h-[40vh] lg:h-[60vh] overflow-hidden bg-teal-900">
                                    <div
                                        className="w-full h-full bg-cover bg-center opacity-90 transition-transform duration-[10s] hover:scale-110 blur-[1px] hover:blur-none"
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    );
}
