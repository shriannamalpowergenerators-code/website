"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryCarousel() {
    const images = [
        { src: "/images/shri annamalai power generators/Pdy ASJ Holiday Villa 58.5 kva-1.jpeg", alt: "Pachaiyappa Silks | Kanchipuram" },
        { src: "/images/shri annamalai power generators/Cdm RR Conventional Hall 320 kva.jpeg", alt: "RR Conventional Hall | Chidambaram" },
        { src: "/images/shri annamalai power generators/Cdl sthp Mr. S. Pugalaenthi 125.jpeg", alt: "Cavin Kare Pvt., Ltd | Cuddalore" },
        { src: "/images/shri annamalai power generators/Tvr Kdvsl Merucury Industries 58.5.jpeg", alt: "Sri Ram Hospital | Thirukovilur" },
        { src: "/images/shri annamalai power generators/Km Karthik Cinemas 20-1.jpeg", alt: "Naturals | Kumbakonam" },
        { src: "/images/shri annamalai power generators/Ngi Trmrgl RGR Tex Bazaar 180 -2.jpeg", alt: "City Union Bank | Kumbakonam" },
        { src: "/images/shri annamalai power generators/Pdy Balaji Enterprises 58.5-1.jpeg", alt: "Balaji Enterprises | Pondiccherry" },
        { src: "/images/shri annamalai power generators/WhatsApp Image 2025-10-18 at 6.04.45 PM.jpeg", alt: "Anbu Hospital | Kumbakonam" },
        { src: "/images/shri annamalai power generators/Km Trbhvnm Mr. Manimaran 125.jpeg", alt: "Sugam Multi Speciality Hospital | Kumbakonam" },
        { src: "/images/shri annamalai power generators/Tnj Mr. Dr. Rajasekar 58.5-1.jpeg", alt: "ARC Kamatchi Jewellery | Mayiladuthurai" },
        { src: "/images/shri annamalai power generators/Ngi Uma Bakery 125-1.jpeg", alt: "Hotel Ariyas | Mannargudi" },
        { src: "/images/shri annamalai power generators/Copy of Pdy Pondicherry Maritime Academy 58.5 -1.jpeg", alt: "Saradharam Apartment | Chidambaram" },
        { src: "/images/shri annamalai power generators/Pdy Luminuous Datamatics 40 kva-1.jpeg", alt: "Hotel Sea Gate | Velankanni" },
        { src: "/images/shri annamalai power generators/gensets.jpeg", alt: "K S Pattu Centre | Mayiladuthurai" },
        { src: "/images/shri annamalai power generators/Pdy Pondicherry Maritime.jpeg", alt: "Hotel Manivizha | Thirukadaiyur" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
    }, [images.length]);

    // Auto-play feature
    useEffect(() => {
        const timer = setInterval(() => paginate(1), 5000);
        return () => clearInterval(timer);
    }, [paginate]);

    return (
        <section id="gallery" className="py-20 ">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-12 text-center max-w-3xl mx-auto">
                    <span className="text-[11px] font-bold text-brand-action tracking-widest uppercase mb-3">Successful Implementations</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-enterprise mb-6 tracking-tight uppercase">
                        TRUSTED <span className="text-brand-action">INSTALLATIONS</span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Explore our professional commissioning gallery featuring large-scale power solutions across industrial and commercial sectors.
                    </p>
                    <div className="w-24 h-1.5 bg-brand-action mt-6 rounded-full"></div>
                </div>

                {/* Main Carousel Container */}
                <div className="relative max-w-6xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-3xl ">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 flex items-center justify-center p-4 md:p-12"
                        >
                            <div className="relative w-full h-full group">
                                <Image
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    fill
                                    unoptimized
                                    className="object-contain" // Keeps aspect ratio perfect
                                    priority
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pointer-events-none">
                                    <p className="text-white font-bold text-lg md:text-2xl drop-shadow-md">{images[currentIndex].alt}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
                        <button
                            onClick={() => paginate(-1)}
                            className="pointer-events-auto p-3 rounded-full text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="pointer-events-auto p-3 rounded-full bg-white/80 text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

                {/* Thumbnail Indicators */}
                <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-2xl mx-auto">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex ? "w-12 bg-blue-600" : "w-3 bg-slate-300 hover:bg-slate-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}