"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ACTIVITIES = [
    {
        phase: "Nature & Water",
        time: "Nearby",
        title: "Kayaking",
        desc: "Glide through the serene river waters right beside the homestay. Kayaking sessions can be arranged with local operators for a peaceful exploration of the calm backwaters and surrounding mangroves.",
        img: "/images/kayaking.png"
    },
    {
        phase: "Adventure & Thrills",
        time: "Nearby",
        title: "Jet-ski",
        desc: "Feel the rush of the Arabian Sea with an exhilarating jet-ski ride along the Udupi coastline. Perfect for those seeking a dose of adrenaline during their stay.",
        img: "/images/jet-ski.png"
    },
    {
        phase: "Scenic Excursions",
        time: "Nearby",
        title: "Boat Ride",
        desc: "Drift along the gentle river on a traditional boat ride, soaking in panoramic views of lush greenery and coastal beauty. An ideal way to unwind and connect with nature.",
        img: "/images/boat-ride.png"
    }
];

export default function Experiences() {
    return (
        <div className="bg-background text-foreground min-h-screen pt-24 md:pt-36 pb-20 md:pb-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32"
                >
                    <h1 className="text-4xl md:text-7xl font-serif text-primary tracking-wide">Explore the Area</h1>
                    <p className="mt-8 text-sm md:text-base text-teal-800/80 font-sans tracking-[0.2em] font-medium max-w-2xl mx-auto uppercase">
                        Discover what Udupi has to offer.
                    </p>
                    <p className="mt-8 text-sm text-primary/70 font-sans font-light max-w-3xl mx-auto leading-relaxed">
                        While TAM-BoSa Resort provides a peaceful stay by the river, there are numerous activities available close by. Please note that these are independent local experiences and can be arranged at an additional cost.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-12 flex flex-col gap-20 md:gap-32 pb-16 md:pb-20">

                    {ACTIVITIES.map((item, i) => (
                        <motion.div
                            key={item.phase}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative pl-12 md:pl-24"
                        >
                            <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400">{item.time}</span>
                                    <p className="text-xs uppercase tracking-[0.2em] text-primary/60 mt-2 mb-6">{item.phase}</p>
                                    <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight mb-8">{item.title}</h2>
                                    <p className="text-foreground/80 font-sans tracking-wider font-light mb-16 max-w-sm text-sm leading-relaxed">{item.desc}</p>

                                    <div className="mt-10 inline-block px-4 py-2 border border-primary text-primary text-[10px] uppercase font-bold tracking-[0.2em]">
                                        Arranged nearby at extra cost
                                    </div>
                                </div>

                                <div className="w-full h-[40vh] lg:h-[60vh] overflow-hidden group relative">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-110 transition-transform duration-[10s]"
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
