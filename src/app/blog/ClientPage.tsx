"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogClientPage() {
    return (
        <div className="bg-[#041B1C] min-h-screen">
            {/* Hero */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 to-transparent pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <p className="text-xs md:text-sm text-primary font-sans font-medium tracking-[0.4em] uppercase mb-6">
                        Travel Guide
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
                        Discover Udupi
                    </h1>
                    <p className="mt-6 text-sm md:text-base text-foreground/70 font-sans font-light max-w-xl mx-auto leading-relaxed tracking-wide">
                        Local insights, travel tips, and hidden gems to make your coastal Karnataka trip unforgettable.
                    </p>
                </motion.div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-24 md:pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: i * 0.08 }}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block bg-teal-900/20 border border-teal-900/30 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                            >
                                <div className="relative h-56 md:h-64 overflow-hidden">
                                    <OptimizedImage
                                        src={post.heroImage}
                                        alt={post.heroAlt}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#041B1C] via-transparent to-transparent" />
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        {post.tags.slice(0, 2).map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        <span className="flex items-center gap-1 text-[10px] text-foreground/50 ml-auto">
                                            <Clock size={10} />
                                            {post.readingTime} min
                                        </span>
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-primary-soft transition-colors duration-300 leading-snug mb-3">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-foreground/60 font-sans font-light leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-xs text-primary/70 font-semibold uppercase tracking-[0.2em] group-hover:text-primary transition-colors duration-300">
                                        Read Guide
                                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 md:py-28 bg-primary text-center px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-teal-900 leading-tight mb-8">
                        Ready to Experience Udupi?
                    </h2>
                    <p className="text-sm md:text-base text-teal-900/70 font-sans font-light mb-10 leading-relaxed">
                        From riverside sunrises to beach sunsets, TAM-BoSa is your home on the coast.
                    </p>
                    <motion.a
                        href="/accommodations"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-4 bg-teal-900 text-primary text-xs uppercase tracking-[0.3em] font-bold cursor-pointer transition-all duration-300 hover:bg-teal-800 hover:shadow-lg rounded-sm"
                    >
                        View Accommodations
                    </motion.a>
                </div>
            </section>
        </div>
    );
}
