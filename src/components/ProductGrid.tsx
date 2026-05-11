"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, ShieldCheck, Zap, Repeat } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    title: string;
    category: string;
    description: string;
    image: string;
    features: string[];
    onQuote: () => void;
    href?: string;
}

const ProductCard = ({ title, category, description, image, features, onQuote, href }: ProductCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 overflow-visible h-full"
        >
            <div className="relative w-full aspect-[4/3] bg-[#f8fafc] flex items-center justify-center border-b border-gray-100 rounded-t-xl overflow-visible group/image">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain p-4 mix-blend-multiply group-hover/image:scale-110 transition-transform duration-500 relative z-0"
                    unoptimized
                />
                <div className="absolute -bottom-3 left-6 bg-[#2563eb] text-white px-3 py-1.5 rounded shadow text-[9px] font-bold uppercase tracking-widest z-10 w-fit">
                    {category}
                </div>
            </div>

            <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-[#f8fafc] border border-gray-100 px-2 py-1 rounded text-[9px] font-semibold text-[#64748B]">
                            <ShieldCheck size={10} className="text-[#2563eb]" /> {feat}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 mt-auto">
                    <Link
                        href={href || "/contact"}
                        className="flex-1 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-gray-800 text-[9px] font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors uppercase tracking-widest"
                    >
                        INFO <MoveRight size={14} />
                    </Link>
                    <button
                        onClick={onQuote}
                        className="flex-[1.2] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[9px] font-bold py-3 rounded flex items-center justify-center transition-colors uppercase tracking-widest shadow-md"
                    >
                        GET QUOTE
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const ProductGrid = ({ onQuoteInquiry }: { onQuoteInquiry: () => void }) => {
    const [activeTab, setActiveTab] = useState<"sales" | "rental">("sales");

    const salesProducts = [
        {
            id: 1,
            title: "Electric Generators",
            category: "POWER SYSTEMS",
            description: "Precision power backup for mission-critical industrial and commercial applications.",
            image: "/images/hero anamalai power generator.png",
            features: ["2500kVA+", "Silent Env", ""],
            href: "/generators",
        },
        {
            id: 2,
            title: "Solar Infrastructure",
            category: "GREEN ENERGY",
            description: "Utility-scale commercial solar arrays and hybrid grid integrations.",
            image: "/images/grid_solar.png",
            features: ["High ROI", "Tier-1 Panels", "Smart Monitoring"],
            href: "/solar-infrastructure",
        },
        {
            id: 3,
            title: "Online UPS Systems",
            category: "CONTROL SYSTEMS",
            description: "Zero-transfer time power for IT infrastructure and medical loads.",
            image: "/images/grid_ups.png",
            features: ["Pure Sine Wave", "Modular Scalable", "Remote Mgmt"],
            href: "/online-ups",
        },
        {
            id: 4,
            title: "Servo Stabilizers",
            category: "GRID QUALITY",
            description: "Voltage stabilization protecting sensitive industrial machinery.",
            image: "/images/grid_servo.png",
            features: ["±1% Precision", "Copper Wound", "IP55 Rating"],
            href: "/servo-stabilizers",
        },
    ];

    const rentalProducts = [
        {
            id: 5,
            title: "Rental Generators",
            category: "RENTAL POWER",
            description: "Rapid deployment temporary power units for events and remote sites.",
            image: "/images/rental generators.png",
            features: ["24/7 Support", "Turnkey Setup", "Fuel Mgmt"],
            href: "/rental-generators",
        },
        // You can add more rental-specific items here later
    ];

    const currentProducts = activeTab === "sales" ? salesProducts : rentalProducts;

    return (
        <section className="py-24 bg-[#F8FAFC] overflow-x-hidden" id="inventory">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-enterprise mb-8 uppercase tracking-tight">
                        Our Power <span className="text-brand-action">Inventory</span>
                    </h2>

                    {/* Industrial Toggle Switch */}
                    <div className="flex p-1 bg-white rounded-full border border-gray-200 shadow-inner w-fit">
                        <button
                            onClick={() => setActiveTab("sales")}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === "sales"
                                ? "bg-brand-enterprise text-white shadow-lg"
                                : "text-gray-400 hover:text-brand-enterprise"
                                }`}
                        >
                            <Zap size={14} /> Systems Sale
                        </button>
                        <button
                            onClick={() => setActiveTab("rental")}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === "rental"
                                ? "bg-brand-enterprise text-white shadow-lg"
                                : "text-gray-400 hover:text-brand-enterprise"
                                }`}
                        >
                            <Repeat size={14} /> Rental Fleet
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="min-h-[600px]">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {currentProducts.map((product) => (
                                <ProductCard key={product.id} {...product} onQuote={onQuoteInquiry} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Bottom Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-brand-enterprise text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden group max-w-7xl mx-auto"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 -skew-x-12 pointer-events-none group-hover:-translate-x-10 transition-transform duration-700"></div>
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-heading font-black uppercase mb-4">Require a Bespoke Solution?</h3>
                        <p className="text-white/70 max-w-lg text-sm font-sans">Our engineers design custom load-balancing configurations for specific industrial requirements.</p>
                    </div>
                    <Link href="/contact" className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-10 py-4 rounded font-heading font-black text-xs tracking-widest transition-all relative z-10 flex items-center gap-3">
                        CONSULT AN ENGINEER <MoveRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductGrid;