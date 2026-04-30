"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const BrandShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    const brands = [
        { name: "Cummins", id: "cummins", image: "/images/Cummins Logo.jpeg" },
        { name: "Powerica", id: "powerica", image: "/images/Powerica Logo.jpeg" },
        { name: "Kirloskar", id: "kirloskar" },
        { name: "Tata", id: "tata" },
        { name: "Schneider", id: "schneider" },
        { name: "Perkins", id: "perkins" },
        { name: "Stamford", id: "stamford" },
    ];

    return (
        <section ref={containerRef} className="py-16 bg-white border-y border-gray-100 overflow-hidden" id="brands">
            <motion.div style={{ y }} className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-2 mb-12 text-center">
                    <span className="text-[10px] font-bold text-brand-action tracking-widest uppercase">Global Industry Networks</span>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-enterprise">TRUSTED BY WORLD-CLASS PARTNERS</h2>
                </div>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden py-4 flex items-center">
                {/* Fade Gradients for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust this to speed up or slow down
                    }}
                    className="flex w-max gap-16 md:gap-32 pr-16 md:pr-32 items-center"
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={`${brand.id}-${index}`}
                            className="group cursor-pointer relative"
                        >
                            <div className="flex flex-col items-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-90 hover:scale-105">
                                <div className="h-16 flex flex-col items-center justify-center transition-all px-4">
                                    {brand.image ? (
                                        <Image src={brand.image} alt={brand.name} width={120} height={60} className="object-contain w-28 md:w-36 mix-blend-multiply" unoptimized />
                                    ) : (
                                        <span className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-brand-enterprise whitespace-nowrap">
                                            {brand.name.toUpperCase()}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandShowcase;
