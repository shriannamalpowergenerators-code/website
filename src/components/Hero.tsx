"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Brand Data ---
// Ensure these images exist in your /public/images/brands/ folder
const BRANDS = [
    { name: "Pachaiyappas Silks", logo: "/images/logo1.png" },
    { name: "Sri Ram Hospital", logo: "/images/logo2.png" },
    { name: "ARC Chit Funds", logo: "/images/logo3.png" },
    { name: "Lena Theatre", logo: "/images/logo4.png" },
    { name: "Naturals Salon", logo: "/images/logo5.png" },
    { name: "Tagam Hospitals", logo: "/images/logo6.png" },
];

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    // Triple the array for a truly seamless infinite loop
    const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col pt-24 pb-12 overflow-hidden bg-brand-surface"
        >
            {/* Background Graphic Elements */}
            <motion.div
                style={{ y: bgY }}
                className="absolute top-0 right-0 w-1/3 h-3/5 bg-brand-enterprise/5 -skew-x-12 translate-x-1/2 pointer-events-none"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Content Left */}
                    <motion.div
                        style={{ y: textY }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-brand-enterprise/10 w-fit backdrop-blur-sm">
                            <ShieldCheck className="text-brand-action w-4 h-4" />
                            <span className="text-[10px] font-bold text-brand-enterprise tracking-widest uppercase">
                                Certified Backup Solutions
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-brand-enterprise leading-[1.1] tracking-tight">
                            Engineering <span className="text-brand-action">Superior Power</span>{" "}
                            Backup Solutions.
                        </h1>

                        <p className="text-base md:text-lg text-[#475569] font-sans max-w-lg leading-relaxed">
                            <strong>Shri Annamalai Power Generators</strong> offers advanced Electric generator solutions
                            designed to deliver dependable and efficient backup power for industrial, commercial,
                            institutional, residential applications ,etc ., <br /> Our generator systems are engineered for
                            high performance, operational reliability, and seamless power management across diverse
                            environments and demanding conditions.

                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link
                                href="https://wa.me/+919442946598"
                                target="_blank"
                                className="w-full sm:w-auto text-[#25D366] hover:text-[#22c35e] font-heading font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 group px-4 py-3 bg-white sm:bg-transparent border border-[#25D366]/20 sm:border-0 rounded-sm"
                            >
                                <Image
                                    src="/images/whatsapp-icon.png"
                                    alt="WhatsApp"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 object-contain"
                                />
                                REQUEST VIA WHATSAPP
                            </Link>

                            <Link
                                href="#inventory"
                                className="w-full sm:w-auto bg-brand-enterprise hover:bg-brand-action text-white px-8 py-4 rounded-sm font-heading font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-enterprise/10"
                            >
                                VIEW INVENTORY
                                <MoveRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-gray-200/50">
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise">20+</span>
                                <span className="text-[8px] md:text-[10px] text-[#64748B] font-bold uppercase tracking-widest leading-tight">Years Experience</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise">3000+</span>
                                <span className="text-[8px] md:text-[10px] text-[#64748B] font-bold uppercase tracking-widest leading-tight">Successful Installs</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise">24/7</span>
                                <span className="text-[8px] md:text-[10px] text-[#64748B] font-bold uppercase tracking-widest leading-tight">Support Response</span>
                            </div>
                        </div>

                        {/* International Projects Badge */}
                        <div className="flex items-center gap-3 bg-white border border-gray-100 py-3 px-5 rounded-lg w-fit shadow-lg shadow-brand-enterprise/5 mt-2 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-action rounded-l-lg"></div>
                            <div className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </div>
                            <span className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                                Executing Projects In: <span className="text-brand-enterprise font-black px-1">Across India</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Visual Right */}
                    <motion.div
                        style={{ y: imageY }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full mt-8 lg:mt-0"
                    >
                        <div className="absolute -inset-4 bg-brand-action/10 blur-3xl rounded-full opacity-30 pointer-events-none" />
                        <div className="relative w-full flex items-center justify-center group">
                            <Image
                                src="/images/hero anamalai power generator.png"
                                alt="Industrial 2500kVA Generator"
                                width={2020}
                                height={1280}
                                className="w-full h-auto max-w-full drop-shadow-xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* --- BIGGER LOGO CAROUSEL SECTION --- */}
                <div className="w-full  pt-20 border-t border-gray-200/50">

                    <div className="flex flex-col items-center mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-[11px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-3">Trusted by</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight capitalize">
                            industry leaders for <span className="text-blue-600">successful installations</span>
                        </h2>

                        <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
                    </div>

                    <div className="relative w-full flex overflow-hidden">
                        <motion.div
                            className="flex whitespace-nowrap gap-8 md:gap-12 items-center"
                            animate={{ x: ["0%", "-33.33%"] }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {duplicatedBrands.map((brand, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 flex items-center justify-center w-[160px] md:w-[240px] px-2 transition-all duration-300"
                                >
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={400}
                                        height={200}
                                        className="h-20 w-auto md:h-28 object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>

                        {/* Side Fades to make the edges look smooth */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;