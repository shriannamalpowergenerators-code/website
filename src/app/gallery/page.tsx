"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoveRight, LayoutGrid, Award } from "lucide-react";

export default function GalleryPage() {
    const [activeTab, setActiveTab] = useState<"showcase" | "exhibition">("showcase");

    const showcaseImages = [
        { src: "/images/shri annamalai power generators/Pdy ASJ Holiday Villa 58.5 kva-1.jpeg", alt: "Pachaiyappa Silks | Kanchipuram" },
        { src: "/images/shri annamalai power generators/Cdm RR Conventional Hall 320 kva.jpeg", alt: "RR Conventional Hall | Chidambaram" },
        { src: "/images/shri annamalai power generators/Cdl sthp Mr. S. Pugalaenthi 125.jpeg", alt: "Cavin Kare Pvt., Ltd | Cuddalore" },
        { src: "/images/shri annamalai power generators/Tvr Kdvsl Merucury Industries 58.5.jpeg", alt: "Sri Ram Hospital | Thirukovilur" },
        { src: "/images/shri annamalai power generators/Km Karthik Cinemas 20-1.jpeg", alt: "Naturals | Kumbakonam" },
        { src: "/images/shri annamalai power generators/Ngi Trmrgl RGR Tex Bazaar 180 -2.jpeg", alt: "City Union Bank | Kumbakonam" },
        { src: "/images/shri annamalai power generators/Pdy Balaji Enterprises 58.5-1.jpeg", alt: "Balaji Enterprises | Pondiccherry" },
        { src: "/images/shri annamalai power generators/WhatsApp Image 2025-10-18 at 6.04.45 PM.jpeg", alt: "Anbu Hospital | Kumbakonam" },
    ];

    const exhibitionImages = [
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.25 PM (2).jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/Gemini_Generated_Image_pglxgfpglxgfpglx.png", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/IMG-20241227-WA0002.jpg.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/IMG-20241227-WA0006.jpg.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/IMG_20241228_110304688.jpg.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/IMG_20241228_110415852.jpg.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.18 PM (2).jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.18 PM (3).jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.25 PM.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.21 PM (1).jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.21 PM.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.24 PM (1).jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.24 PM.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.25 PM (1).jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/WhatsApp Image 2026-05-11 at 1.52.19 PM.jpeg", alt: "Exhibition Event" },
        { src: "/images/gallery-exhibition/stall 2.jpeg", alt: "Exhibition Stall" },
        { src: "/images/gallery-exhibition/stall.jpeg", alt: "Exhibition Stall" },
    ];

    const currentImages = activeTab === "showcase" ? showcaseImages : exhibitionImages;
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-brand-action selection:text-white">
            <Header variant="light" />

            {/* Hero Section - Clean Title */}
            <section className="pt-32 pb-12 md:pt-44 md:pb-20 bg-brand-enterprise text-white relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block text-brand-action text-center">
                            Portfolio
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight leading-tight uppercase text-center">
                            Installation <span className="text-brand-action">Gallery</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Interactive Toggle & Description Bar */}
            <section className="py-8 md:py-12 bg-white border-b border-slate-200 sticky top-[72px] z-30 shadow-sm">
                <div className="container mx-auto px-6 md:px-12"> {/* Increased horizontal padding here */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Toggle Controls - Added a wrapper to ensure button group doesn't stretch */}
                        <div className="flex p-1 bg-slate-100 rounded-full border border-slate-200 w-fit">
                            <button
                                onClick={() => setActiveTab("showcase")}
                                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === "showcase"
                                    ? "bg-brand-enterprise text-white shadow-md"
                                    : "text-slate-500 hover:text-brand-enterprise"
                                    }`}
                            >
                                <LayoutGrid size={14} /> Showcase
                            </button>
                            <button
                                onClick={() => setActiveTab("exhibition")}
                                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === "exhibition"
                                    ? "bg-brand-enterprise text-white shadow-md"
                                    : "text-slate-500 hover:text-brand-enterprise"
                                    }`}
                            >
                                <Award size={14} /> Exhibition
                            </button>
                        </div>

                        {/* Dynamic Content Description */}
                        <div className="max-w-md text-center md:text-right hidden sm:block">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="text-slate-600 text-sm font-medium leading-relaxed italic"
                                >
                                    {activeTab === "showcase"
                                        ? "Elite on-site installations and mission-critical power setups across South India."
                                        : "Industry presence, equipment expos, and technical summits showcasing our latest tech."}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {currentImages.map((img, i) => {
                                const classes = [
                                    "col-span-2 row-span-2",
                                    "col-span-1 row-span-1",
                                    "col-span-1 row-span-1",
                                    "col-span-1 row-span-2 md:col-span-2",
                                    "col-span-1 row-span-1",
                                    "col-span-2 row-span-1 md:col-span-1",
                                    "col-span-2 row-span-2",
                                    "col-span-1 row-span-1"
                                ][i % 8];

                                return (
                                    <motion.div
                                        key={img.src}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className={`relative rounded-xl overflow-hidden group bg-slate-200 shadow-sm ${classes}`}
                                    >
                                        <div className="absolute inset-0 bg-brand-enterprise/20 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none" />
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            unoptimized
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-enterprise/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                            <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wider">{img.alt}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-slate-100 py-20 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-heading font-black text-brand-enterprise uppercase tracking-tight mb-4">Request a Site Visit?</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm">Experience our engineering quality first-hand. Contact us for a technical audit of your existing power setup.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-brand-action hover:bg-brand-enterprise text-white px-8 py-4 rounded font-heading font-black text-xs uppercase tracking-widest shadow-xl transition-all">
                        Talk To Our Engineers <MoveRight size={16} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}