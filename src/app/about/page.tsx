"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Target, Zap, Clock, Users, Award, MoveRight, 
  Sun, Battery, Activity, Layout, Settings, Eye, Star, CheckCircle2 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const stats = [
        { label: "Years of Excellence", value: "25+", icon: Clock },
        { label: "Global Installations", value: "500+", icon: Zap },
        { label: "Certified Engineers", value: "50+", icon: Users },
        { label: "Quality Awards", value: "12", icon: Award },
    ];

    const offerings = [
        { title: "Diesel Generator Sets", icon: Zap },
        { title: "Solar Power Plants", icon: Sun },
        { title: "Servo Stabilizers", icon: Activity },
        { title: "Online UPS Systems", icon: Battery },
        { title: "Electrical Panel Boards", icon: Layout },
    ];

    const values = ["Reliability", "Customer Commitment", "Technical Excellence", "Integrity", "Continuous Improvement"];

    const whyChooseUs = [
        { title: "20+ Years Experience", desc: "Proven expertise since 2004 in delivering reliable power solutions." },
        { title: "Complete Solutions", desc: "End-to-end services from design to commissioning under one roof." },
        { title: "Cummins Authorized", desc: "World-class performance and durability through our Cummins partnership." },
        { title: "Reliable Support", desc: "Prompt after-sales service to ensure zero downtime for operations." },
    ];

    return (
        <main className="min-h-screen bg-white selection:bg-brand-action/30 selection:text-brand-enterprise font-sans">
            <Header onQuote={openModal} variant="light" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden bg-brand-enterprise text-white flex items-center min-h-[400px]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/4 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto md:mx-0"
                    >
                        <span className="text-brand-action font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Our Legacy</span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6 tracking-tight">
                            Powering <span className="text-brand-action">Industrial Progress</span> Since 2004.
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-blue-100/80 font-sans leading-relaxed border-l-2 border-brand-action pl-4 md:pl-6 mx-auto md:mx-0 max-w-3xl">
                            Shri Annamalai Power Generators is a trusted name in delivering comprehensive power solutions across Tamil Nadu and Puducherry. We are more than just a dealer; we are a one-stop partner for all your industrial energy needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Offerings Grid Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="p-6 border border-gray-100 rounded-xl bg-brand-surface hover:border-brand-action transition-colors text-center group">
                                <item.icon className="mx-auto mb-4 text-brand-enterprise group-hover:text-brand-action transition-colors" size={32} />
                                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-enterprise">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Mission & Vision */}
            <section className="py-16 md:py-24 bg-brand-surface relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }}
                            className="bg-brand-enterprise p-8 md:p-12 rounded-2xl text-white relative overflow-hidden"
                        >
                            <Target className="text-brand-action mb-6" size={48} />
                            <h2 className="text-3xl font-heading font-black uppercase mb-4 tracking-tight">Our Mission</h2>
                            <p className="text-blue-100/80 text-lg leading-relaxed">
                                To deliver integrated and reliable power solutions that ensure uninterrupted operations for our clients.
                            </p>
                            <div className="absolute top-0 right-0 p-4 opacity-5"><Target size={200} /></div>
                        </motion.div>

                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }}
                            className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden"
                        >
                            <Eye className="text-brand-action mb-6" size={48} />
                            <h2 className="text-3xl font-heading font-black uppercase mb-4 tracking-tight text-brand-enterprise">Our Vision</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be a leading one-stop power solutions provider in South India, known for quality, trust, and service excellence.
                            </p>
                        </motion.div>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {values.map((val, i) => (
                            <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-brand-enterprise uppercase tracking-widest flex items-center gap-2">
                                <Star size={14} className="text-brand-action fill-brand-action" /> {val}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl font-heading font-black text-brand-enterprise uppercase leading-tight mb-6">
                                Why Choose <br /><span className="text-brand-action">Annamalai?</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                We prioritize long-term relationships by offering transparent communication and dependable service at every stage of your power journey.
                            </p>
                            <Link href="/contact" className="group flex items-center gap-3 font-bold text-xs tracking-widest uppercase text-brand-enterprise hover:text-brand-action transition-colors">
                                View Our Portfolio <MoveRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {whyChooseUs.map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <CheckCircle2 className="text-brand-action shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-brand-enterprise uppercase text-sm mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-16 md:py-20 bg-gray-50 relative z-30 border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center gap-3 p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:border-brand-action hover:-translate-y-1 transition-all group"
                            >
                                <stat.icon className="text-brand-action group-hover:scale-110 transition-transform" size={40} />
                                <div>
                                    <div className="text-3xl md:text-4xl font-heading font-black text-brand-enterprise">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 md:py-24 bg-brand-enterprise relative overflow-hidden z-40">
                <div className="absolute inset-0 bg-brand-action/5 animate-pulse" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 md:gap-8">
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight leading-tight">
                            Ready to <span className="text-brand-action">Upgrade</span> Your Power Infrastructure?
                        </h2>
                        <button
                            onClick={openModal}
                            className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-8 md:px-12 py-4 md:py-5 rounded font-heading font-black text-xs md:text-sm tracking-[0.2em] transition-all shadow-2xl shadow-brand-action/30"
                        >
                            TALK TO AN ENGINEER
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
}