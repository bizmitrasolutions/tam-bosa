"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { BlogPost } from "@/data/blog-posts";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

interface Props {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

export default function BlogPostClientPage({ post, relatedPosts }: Props) {
    const { openModal } = useContactModal();

    return (
        <div className="bg-[#041B1C] min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <OptimizedImage
                        src={post.heroImage}
                        alt={post.heroAlt}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041B1C] via-[#041B1C]/60 to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 max-w-3xl mx-auto px-6 pb-12 md:pb-16 w-full"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs text-primary/70 hover:text-primary uppercase tracking-[0.2em] font-semibold mb-6 transition-colors"
                    >
                        <ArrowLeft size={12} />
                        Travel Guide
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        {post.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-xs text-foreground/50">
                        <span className="flex items-center gap-1.5">
                            <Clock size={12} />
                            {post.readingTime} min read
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            Last verified: {new Date(post.lastVerified).toLocaleDateString("en-IN", {
                                month: "long",
                                year: "numeric"
                            })}
                        </span>
                    </div>
                </motion.div>
            </section>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                {post.sections.map((section, i) => {
                    switch (section.type) {
                        case "heading":
                            return (
                                <motion.h2
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-2xl md:text-3xl font-serif text-primary-soft mt-12 mb-6 leading-snug"
                                >
                                    {section.content}
                                </motion.h2>
                            );
                        case "subheading":
                            return (
                                <motion.h3
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-lg md:text-xl font-serif text-foreground mt-8 mb-4"
                                >
                                    {section.content}
                                </motion.h3>
                            );
                        case "paragraph":
                            return (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-sm md:text-base text-foreground/80 font-sans font-light leading-[1.9] tracking-wide mb-6"
                                >
                                    {section.content}
                                </motion.p>
                            );
                        case "list":
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-8"
                                >
                                    {section.content && (
                                        <p className="text-sm md:text-base text-foreground/80 font-sans font-light mb-3 tracking-wide">
                                            {section.content}
                                        </p>
                                    )}
                                    <ul className="space-y-3 pl-5">
                                        {section.items?.map((item, j) => (
                                            <li
                                                key={j}
                                                className="text-sm md:text-base text-foreground/70 font-sans font-light leading-relaxed tracking-wide relative before:content-[''] before:absolute before:left-[-16px] before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        case "cta":
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-12 p-8 md:p-10 bg-teal-900/30 border border-teal-900/50 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                    <p className="text-sm md:text-base text-foreground/90 font-sans leading-relaxed mb-6">
                                        {section.content}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/accommodations"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary-soft transition-colors rounded-sm min-h-[44px]"
                                        >
                                            View Rooms
                                            <ArrowRight size={12} />
                                        </Link>
                                        <button
                                            onClick={openModal}
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/40 text-primary text-xs uppercase tracking-[0.2em] font-bold hover:border-primary hover:bg-primary/10 transition-all rounded-sm min-h-[44px]"
                                        >
                                            Reserve Now
                                        </button>
                                    </div>
                                    {section.showOtaLinks && (
                                        <div className="mt-6 pt-5 border-t border-teal-900/40">
                                            <span className="text-[11px] text-foreground/40 uppercase tracking-[0.15em] block mb-2">Also available on</span>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                                <a href="https://app.mmyt.co/Xm2V/83t03c2f" target="_blank" rel="noopener noreferrer" className="text-[12px] text-foreground/60 hover:text-primary transition-colors duration-300">MakeMyTrip</a>
                                                <a href="https://www.booking.com/hotel/in/tam-bosa-beach-retreat.en-gb.html" target="_blank" rel="noopener noreferrer" className="text-[12px] text-foreground/60 hover:text-primary transition-colors duration-300">Booking.com</a>
                                                <a href="https://www.agoda.com/en-sg/tam-bosa-beach-retreat/hotel/varamballi-in.html" target="_blank" rel="noopener noreferrer" className="text-[12px] text-foreground/60 hover:text-primary transition-colors duration-300">Agoda</a>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        default:
                            return null;
                    }
                })}
            </article>

            {/* Related Posts */}
            <section className="max-w-6xl mx-auto px-6 pb-24 md:pb-32 border-t border-teal-900/40 pt-16 md:pt-20">
                <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-10">
                    More from the Guide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {relatedPosts.map((related, i) => (
                        <motion.div
                            key={related.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <Link
                                href={`/blog/${related.slug}`}
                                className="group block"
                            >
                                <div className="relative h-40 overflow-hidden mb-4">
                                    <OptimizedImage
                                        src={related.heroImage}
                                        alt={related.heroAlt}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] text-primary/70 uppercase tracking-[0.2em] font-semibold">
                                        {related.tags[0]}
                                    </span>
                                    <span className="text-[10px] text-foreground/40">
                                        · {related.readingTime} min
                                    </span>
                                </div>
                                <h3 className="text-base font-serif text-foreground group-hover:text-primary-soft transition-colors duration-300 leading-snug">
                                    {related.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
