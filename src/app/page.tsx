"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#041B1C]">
      {/* Hero Section */}
      <section className="relative h-[110vh] flex flex-col justify-center overflow-hidden">
        {/* Abstract Background Gradient & Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#072C2F]/90 via-[#041B1C]/80 to-black/90" />
        </div>
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="sr-only">TAM-BoSa Luxury Beach Retreat in Udupi</h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[11vw] leading-[0.85] font-serif text-primary-soft tracking-tighter uppercase relative z-20 flex flex-col items-center"
          >
            <span>BEACHFRONT</span>
            <span className="text-foreground md:ml-[15vw] inline-block mt-[-2vw]">BLISS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="mt-16 text-xs md:text-sm text-primary font-sans max-w-xl mx-auto font-medium tracking-[0.4em] uppercase"
          >
            A Private Escape Wrapped in Nature
          </motion.p>
        </motion.div>
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-30" />
      </section>

      {/* The Duality */}
      <section className="relative min-h-[150vh] bg-foreground text-background py-16 md:py-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-[60vh] md:h-[80vh] flex flex-col justify-center">

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-10%" }}
              className="absolute left-0 top-10 md:top-0 w-[90%] md:w-[65%] h-[50vh] bg-teal-800 z-10 overflow-hidden mix-blend-multiply"
            >
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-luminosity hover:scale-105 transition-transform duration-[10s]" />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-10%" }}
              className="absolute right-0 bottom-0 md:bottom-10 w-[75%] md:w-[45%] h-[35vh] md:h-[45vh] bg-primary z-20 p-8 md:p-12 flex flex-col justify-end"
            >
              <h2 className="text-4xl md:text-7xl font-serif text-teal-900 leading-none">THE<br />DUALITY</h2>
              <p className="mt-6 md:mt-8 text-teal-900/80 font-sans text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase">Ocean Movement vs Backwater Stillness</p>
            </motion.div>

          </div>

          <div className="mt-48 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-end max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif leading-snug md:leading-relaxed text-[#041B1C]"
            >
              On one side, the endless Arabian Sea. On the other, the slow-moving Udupi backwaters. In between—your private coastal sanctuary.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-sm md:text-base font-sans font-light text-[#041B1C] leading-loose tracking-wide">
                TAM-BoSa Resort is an exclusive luxury homestay located in the serene coastal belt of Udupi, Karnataka. Designed for couples and those seeking a private escape, our beachfront property offers a rare geographical phenomenon: direct access to pristine ocean waves on one side, and the quiet, mirror-like stillness of tropical backwaters on the other.
              </p>
              <p className="text-sm md:text-base font-sans font-light text-[#041B1C] leading-loose tracking-wide">
                Wake up to the rhythm of the tides, indulge in authentic local experiences, and retreat into absolute privacy away from the rush of the city.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Retreat's Essence */}
      <section className="relative py-16 md:py-40 lg:py-60 bg-[#041B1C] text-foreground px-6 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-teal-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-32 ml-4 md:ml-20">The Essence</h3>

          <div className="flex flex-col gap-32 md:gap-48">
            {[
              {
                num: "01",
                title: "Dual Views",
                desc: "A front-row seat to nature at its most serene. Beach on one side, calming backwaters on the other.",
                img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
              },
              {
                num: "02",
                title: "Lush Greenery",
                desc: "Embraced by vibrant thickets for ultimate privacy and peace. This is not just a stay, it's a reset.",
                img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1974&auto=format&fit=crop"
              },
              {
                num: "03",
                title: "100 Steps",
                desc: "Walkable pristine beach access. Sunrise strolls and sunset dips are an everyday luxury.",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
              }
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true, margin: "-20%" }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 relative ${i % 2 !== 0 ? "md:ml-auto md:flex-row-reverse" : "md:mr-auto"} max-w-5xl`}
              >
                <div className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] font-serif text-teal-800/30 leading-none absolute -top-8 md:-top-16 lg:-top-24 -left-4 md:-left-8 lg:-left-16 z-0 mix-blend-screen select-none pointer-events-none">{item.num}</div>

                <div className="w-full md:w-1/2 h-64 md:h-96 relative z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply z-10 pointer-events-none" />
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-[10s]"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                </div>

                <div className="pt-8 md:pt-0 md:w-1/2 relative z-10">
                  <h4 className="text-3xl md:text-4xl font-serif text-primary-soft mb-6">{item.title}</h4>
                  <p className="text-sm md:text-base text-foreground/90 font-light tracking-wide leading-loose">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outro CTA */}
      <section className="py-16 md:py-32 bg-primary flex justify-center text-center px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-teal-900 leading-tight mb-10">
            Come experience a stay where the sea greets you.
          </h2>
          <motion.a
            href="/accommodations"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-teal-900 text-primary text-xs uppercase tracking-[0.3em] font-bold cursor-pointer transition-all duration-300 hover:bg-teal-800 hover:shadow-lg rounded-sm"
          >
            Explore Accommodations
          </motion.a>
        </div>
      </section>

      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where is TAM-BoSa Resort located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAM-BoSa Resort is a luxury beachfront homestay located in Udupi, Karnataka, offering unique access to both the Arabian Sea and the serene backwaters."
                }
              },
              {
                "@type": "Question",
                "name": "What type of accommodations does TAM-BoSa offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer premium accommodations including Oceanfront Suites with direct beach access and Backwater Villas surrounded by lush tropical greenery for ultimate privacy."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
