"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Download, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";

interface SpecSheet {
    range: string;
    description: string;
    pdfUrl: string;
    phase?: "Single Phase" | "Three Phase";
}

const sortByKva = (a: SpecSheet, b: SpecSheet) => {
    const getVal = (s: string) => parseFloat(s.match(/[\d.]+/)?.at(0) || "0");
    return getVal(a.range) - getVal(b.range);
};

const SpecSheetCard = ({ sheet, onEnquire }: { sheet: SpecSheet; onEnquire: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 p-6 md:p-8 flex flex-col items-start h-full"
    >
        <div className="flex items-center justify-between w-full mb-6 relative">
            <div className="w-12 h-12 bg-[#e0eaf5] rounded flex items-center justify-center text-[#175C96]">
                <FileText size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">TECHNICAL PDF</span>
                {sheet.phase && (
                    <span className="text-[10px] font-bold text-red-600 mt-1 uppercase italic tracking-wider">{sheet.phase}</span>
                )}
            </div>
        </div>

        <h4 className="text-xl md:text-2xl font-black text-[#175C96] mb-3 tracking-tight">{sheet.range}</h4>
        <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6 flex-1">
            {sheet.description}
        </p>

        <div className="flex flex-col w-full gap-3 mt-auto">
            <a
                href={sheet.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                    if (sheet.pdfUrl === "#") {
                        e.preventDefault();
                        console.log("PDF not yet uploaded for this size.");
                    }
                }}
                className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-[10px] md:text-xs font-bold py-3.5 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-widest shadow-md border border-[#1e3a8a]"
            >
                <Download size={14} /> DOWNLOAD SPEC SHEET
            </a>
            <button
                onClick={onEnquire}
                className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-[10px] md:text-xs font-bold py-3.5 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-widest"
            >
                ENQUIRE NOW <ArrowRight size={14} />
            </button>
        </div>
    </motion.div>
);

const DieselGeneratorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const mhpSinglePhase: SpecSheet[] = [
        { range: "7.5 - 18.5 kVA", description: "Prime Rated", phase: "Single Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-7.5-18.5-kVA_Spec-Sheet_SP_Rev-0.pdf" },
        { range: "25 - 35 kVA", description: "Prime Rated", phase: "Single Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-25-35kVA_Spec-Sheet_SP_Rev-0.pdf" },
        { range: "41 - 50 kVA", description: "Prime Rated", phase: "Single Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-41-50kVA_Spec-Sheet_SP_Rev-0.pdf" },
    ];
    mhpSinglePhase.sort(sortByKva);

    const mhpThreePhase: SpecSheet[] = [
        { range: "7.5 - 20 kVA", description: "Prime Rated", phase: "Three Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-7.5-20kVA_Spec-Sheet_Rev-0.pdf" },
        { range: "25 - 40 kVA", description: "Prime Rated", phase: "Three Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-25-40kVA_Spec-Sheet_Rev-0.pdf" },
        { range: "50 - 58.5 kVA", description: "Prime Rated", phase: "Three Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-50-58.5kVA_Spec-Sheet_Rev-0.pdf" },
        { range: "82.5 - 140 kVA", description: "Prime Rated", phase: "Three Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-82.5-140kVA_Spec-Sheet_Rev-0.pdf" },
        { range: "82.5 kVA", description: "Prime Rated", phase: "Three Phase", pdfUrl: "/pdfs/82.5 kVA_Spec Sheet_Rev-0 - NEW.pdf" },
        { range: "160 - 250 kVA", description: "Prime Rated", phase: "Three Phase", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-160-250kVA_Spec-Sheet_Rev-0.pdf" },
    ];
    mhpThreePhase.sort(sortByKva);

    const hhpRange: SpecSheet[] = [
        { range: "650 - 750 kVA, 500 - 600 kWe", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/N-650-750kVA_Spec-Sheet_Rev-0.pdf?v=1" },
        { range: "2000 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/2000%20kVA_KTA50G24_Preliminary%20Specsheet_Rev0%20(Resi%20of%20India).pdf" },
        { range: "2500 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/2500%20kVA%20QSK60-G23%20DCP_India%20SpecSheet%20for%20both%20CAQM%20&%20ROI%20regions.pdf" },
        { range: "2750 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/2750%20kVA-QSK60%20G23_Rev-0%20for%20both%20CAQM%20&%20ROI%20regions.pdf" },
        { range: "1010 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/PSBU%20019-1010kVA-KTA38-G5%20PSO601%20(discontinued%20due%20to%20new%20ROI%20model).pdf" },
        { range: "1250 - 1500 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/PSBU-020-K50%201250_1500kVA-Rev-3%20(%201250%20kVA%20KTA50%20G3%20is%20discontinued).pdf" },
        { range: "1750 - 1825 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/PSBU-021-QSK50_1750_1825kVA-Rev-4%20(discontinued).pdf" },
        { range: "2000 - 2250 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/PSBU-022-QSK60%202000_2250kVA-Rev-5.pdf" },
        { range: "1250 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/1250%20-%20KTA50G27_Specs%20Sheet_Rev0%20(%20for%20Rest%20of%20India).pdf" },
        { range: "1800 kVA", description: "Prime Rated", pdfUrl: "https://www.powericaltd.com/pdf/new-cpcbviplus/1800%20kVA_KTA50-G29_Specification%20Sheet_Rev0%20(%20for%20CAQM%20region).pdf" },
    ];
    hhpRange.sort(sortByKva);

    return (
        <main className="min-h-screen bg-white">
            <Header onQuote={openModal} />

            {/* Hero Section */}
            <div className="relative pt-32 pb-16 md:pb-24 bg-brand-enterprise overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
                <Image
                    src="/images/products/diesel-generator-hero.png"
                    alt="generators"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[10px] md:text-[11px] font-bold  tracking-[0.4em] uppercase mb-4 block text-white"
                        >
                            Products / Power Systems
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-heading font-black text-white mb-6 md:mb-8 tracking-tight leading-tight"
                        >
                            GENERATING SETS
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/70 text-base md:text-xl font-sans leading-relaxed max-w-2xl md:border-l-2 md:border-brand-action md:pl-6 mx-auto md:mx-0"
                        >
                            AUTHORIZED PARTNERS FOR CPCB IV+ COMPLIANT TECHNOLOGY. <br className="hidden md:block" />
                            High-fidelity engines designed for continuous industrial, commercial, and residential use.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Core Features Overlay */}
            <div className="container mx-auto px-4 md:px-6 -mt-8 md:-mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {[
                        { title: "CPCB IV+ Compliant", desc: "Latest emission norms meeting environment standards." },
                        { title: "Low Maintenance", desc: "Longer service intervals & world-class support." },
                        { title: "Synchronization Ready Systems ", desc: "Seamless integration with solar and grid controllers." },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-gray-100 flex items-start gap-4 md:gap-5"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                <CheckCircle2 size={20} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h4 className="font-heading font-black text-brand-enterprise text-xs md:text-sm uppercase tracking-wider mb-1">{feature.title}</h4>
                                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-white mt-8 md:mt-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="text-[10px] md:text-xs font-bold text-brand-action tracking-widest uppercase mb-4 block">Electric Generator Products</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-enterprise uppercase tracking-tight mb-8">
                                Electric Generator Sets <br className="hidden md:block" /> <span className="text-brand-action">Powered by Cummins Powerica</span>
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-600 font-sans text-[15px] md:text-base leading-relaxed md:leading-[1.8] text-justify md:text-left">
                            <p>
                                We supply a wide range of diesel generator sets along with complete auxiliary systems including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 font-semibold">
                                <li>Acoustic Enclosures</li>
                                <li>Fuel Systems</li>
                                <li>Exhaust Systems</li>
                                <li>Customized Control Panels</li>
                                <li>Automation &amp; Synchronization Solutions</li>
                            </ul>
                            <p>
                                Our Electric Generator solutions are suitable for small-scale backup requirements as well as large industrial and infrastructure applications.
                            </p>

                            <h3 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">Applications &amp; Industries</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Manufacturing Industries</li>
                                    <li>Hospitals &amp; Healthcare centres</li>
                                    <li>Hotels &amp; Hospitality Businesses</li>
                                    <li>Educational Institutions</li>
                                    <li>Commercial Buildings &amp; Offices</li>
                                </ul>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>IT Infrastructure &amp; Data centres</li>
                                    <li>Agriculture &amp; Cold Storage</li>
                                    <li>Government &amp; Infrastructure Projects</li>
                                    <li>Residential &amp; Real Estate Developments</li>
                                    <li>Defence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Certification Section */}
            <section className="py-16 md:py-20 bg-gray-50 border-t border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <span className="text-[10px] md:text-xs font-bold text-brand-action tracking-widest uppercase mb-4 block">Official Authorizations</span>
                    <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-enterprise uppercase tracking-tight mb-12">Certified Partners & Dealers</h2>

                    <div className="w-full max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100 mb-16">
                        <Image
                            src="/images/SAPG 2026- DEALER CERTIFICATE-CUMMINS&POWERICA.webp"
                            alt="Dealer Certificate - Cummins & Powerica"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain rounded-lg shadow-sm"
                            unoptimized
                        />
                    </div>
                </div>
            </section>

            {/* Product Brochures UI Section */}
            <section className="relative w-full py-16 overflow-hidden bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Product <span className="text-red-600">Brochures</span></h2>
                                <div className="mt-4 h-1.5 w-24 bg-red-600 rounded-full" />
                            </div>
                            <div className="space-y-6">
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Explore our collection of <span className="font-semibold text-gray-900">Cummins Powerica DG Set Brochures</span> to view detailed specifications, features, capacities, and technical information.
                                </p>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-gray-100 shadow-sm backdrop-blur-sm">
                                    <div className="p-3 bg-red-50 rounded-lg text-red-600"><Download size={24} /></div>
                                    <p className="text-gray-700 font-medium">Download brochures to find the right power solution for your operational requirements.</p>
                                </div>
                            </div>
                        </div>
                        <motion.div whileHover={{ y: -5 }} className="relative p-8 rounded-3xl bg-white border border-gray-200 shadow-2xl shadow-gray-200/50">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 p-4 bg-red-600 rounded-2xl shadow-lg text-white"><ShieldCheck size={32} /></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Powering Performance with Reliability</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                With dependable generator technology from <span className="font-medium text-gray-800">Cummins Powerica</span> and dedicated support from <span className="font-medium text-gray-800">Shri Annamalai Power Generators</span>, we deliver power solutions built for performance, efficiency, and uninterrupted operations.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Product Range Sections */}
            <div id="brochure-ranges" className="py-16 md:py-24 space-y-20 md:space-y-32">
                <section className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-12 border-b border-gray-100 pb-8">
                        <div>
                            <span className="text-[10px] md:text-[11px] font-bold text-brand-action tracking-widest uppercase mb-2 block">RANGE 01</span>
                            <h2 className="text-3xl md:text-5xl font-black font-heading text-[#1e3a8a] uppercase tracking-tight">LHP & MHP (7.5 kVA - 250 kVA)</h2>
                        </div>
                        <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed max-w-sm italic">
                            Versatile power solutions for retail units, offices, and light industrial clusters.
                        </p>
                    </div>

                    {/* Single Phase Sub-section */}
                    <div className="mb-16">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="w-2 h-8 bg-red-600 rounded-full" />
                            Single Phase Solutions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {mhpSinglePhase.map((sheet, i) => <SpecSheetCard key={i} sheet={sheet} onEnquire={openModal} />)}
                        </div>
                    </div>

                    {/* Three Phase Sub-section */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="w-2 h-8 bg-[#1e3a8a] rounded-full" />
                            Three Phase Solutions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {mhpThreePhase.map((sheet, i) => <SpecSheetCard key={i} sheet={sheet} onEnquire={openModal} />)}
                        </div>
                    </div>
                </section>

                {/* HHP Section */}
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-12 border-b border-gray-200 pb-8">
                            <div>
                                <span className="text-[10px] md:text-[11px] font-bold text-brand-action tracking-widest uppercase mb-2 block">RANGE 02</span>
                                <h2 className="text-3xl md:text-5xl font-black font-heading text-[#1e3a8a] uppercase tracking-tight">HHP (Above 500 kVA)</h2>
                            </div>
                            <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed max-w-sm italic">
                                High horsepower solutions for critical standby duty, breakdown survival, and peak saving.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {hhpRange.map((sheet, i) => <SpecSheetCard key={i} sheet={sheet} onEnquire={openModal} />)}
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <section className="bg-brand-enterprise text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-1/3 h-full bg-brand-action opacity-10 skew-x-12 translate-x-1/3 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 md:mb-8 tracking-tight uppercase leading-tight">NEED A CUSTOM <span className="text-brand-action">CONFIGURATION</span>?</h2>
                    <p className="text-white/60 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto italic font-sans leading-relaxed">
                        Our engineering team provides end-to-end technical briefs for specific load requirements and industrial environmental factors.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                        <button
                            onClick={openModal}
                            className="w-full sm:w-auto bg-brand-action hover:bg-white hover:text-brand-action text-white px-10 md:px-12 py-4 md:py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all shadow-2xl"
                        >
                            REQUEST TECHNICAL BRIEF
                        </button>
                        <a
                            href="tel:+919442946598"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 md:px-12 py-4 md:py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all"
                        >
                            <PhoneCall size={18} />
                            +91 94429 46598
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
};

export default DieselGeneratorsPage;