"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-brand-enterprise text-white pt-24 pb-12 relative overflow-hidden" id="contact">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-action opacity-5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-3 w-full">
                            <div className="w-12 h-12 bg-white rounded flex items-center justify-center shrink-0">
                                <img src="/images/logo.webp" alt="Logo" className="w-10 h-10 object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-black text-sm md:text-xl leading-tight text-white whitespace-normal break-words w-full">SHRI ANNAMALAI POWER GENERATORS</span>
                            </div>
                        </Link>

                        <p className="text-[#94A3B8] font-sans text-sm leading-relaxed max-w-sm">
                            Providing high-end industrial energy solutions across Tamil Nadu and Puducherry. Authorized partners in world-class power generation since 2004.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-action transition-colors cursor-pointer text-white/60 hover:text-white border border-white/10">
                                <Facebook size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-action transition-colors cursor-pointer text-white/60 hover:text-white border border-white/10">
                                <Twitter size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-action transition-colors cursor-pointer text-white/60 hover:text-white border border-white/10">
                                <Linkedin size={18} />
                            </div>
                            <a
                                href="https://wa.me/919442946598"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                            >
                                <Image
                                    src="/images/whatsapp-icon.png"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 object-contain"
                                />
                            </a>
                        </div>


                    </div>

                    {/* Service Hubs */}
                    <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-heading font-black text-xs tracking-[0.3em] text-white uppercase">BRANCH OFFICE - PONDICHERRY</h4>
                            <div className="flex flex-col gap-4 text-sm text-[#94A3B8] font-sans">
                                <div className="flex gap-3">
                                    <MapPin className="text-white shrink-0" size={18} />
                                    <span>19B <br /> 6th cross Extn <br /> Anna Nagar <br /> Pondicherry - 605005</span>
                                </div>
                                <div className="flex gap-3">
                                    <Phone className="text-white shrink-0" size={18} />
                                    <span>+91 94429 46598</span>
                                </div>
                                <div className="flex gap-3">
                                    <Mail className="text-white shrink-0" size={18} />
                                    <span>sapgenekkl@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="font-heading font-black text-xs tracking-[0.3em] text-white uppercase">HEAD OFFICE - KARAIKAL</h4>
                            <div className="flex flex-col gap-4 text-sm text-[#94A3B8] font-sans">
                                <div className="flex gap-3">
                                    <MapPin className="text-white shrink-0" size={18} />
                                    <span>14 <br /> West St <br /> Mela Oduthurai <br/> Karaikal - 609602</span>
                                </div>
                                <div className="flex gap-3">
                                    <Phone className="text-white shrink-0" size={18} />
                                    <span>+91 94429 46598</span>
                                </div>
                                <div className="flex gap-3">
                                    <Mail className="text-white shrink-0" size={18} />
                                    <span>sapgenekkl@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mini Form */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <h4 className="font-heading font-black text-xs tracking-[0.3em] text-white uppercase">QUICK INQUIRY</h4>
                        <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for your inquiry. A representative will contact you shortly."); }} className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="bg-white/5 border border-white/10 px-5 py-4 rounded-sm focus:outline-none focus:border-brand-action transition-all text-sm placeholder:text-white/20 font-sans"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="bg-white/5 border border-white/10 px-5 py-4 rounded-sm focus:outline-none focus:border-brand-action transition-all text-sm placeholder:text-white/20 font-sans"
                            />
                            <textarea
                                placeholder="Technical requirement..."
                                rows={3}
                                className="bg-white/5 border border-white/10 px-5 py-4 rounded-sm focus:outline-none focus:border-brand-action transition-all text-sm placeholder:text-white/20 font-sans resize-none"
                            ></textarea>
                            <button className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-8 py-4 rounded-sm font-heading font-black text-xs tracking-widest transition-all flex items-center justify-center gap-3">
                                SEND MESSAGE
                                <Send size={14} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
                    <div className="text-[10px] font-bold text-[#64748B] tracking-widest uppercase">
                        © 2026 Shri Annamalai Power Generators. All Rights Reserved.
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-4 text-[10px] font-bold text-[#64748B] tracking-widest uppercase pr-24 md:pr-28">                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <span className="opacity-20 hidden md:inline">|</span>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/legal" className="hover:text-white transition-colors">Legal Brief</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
