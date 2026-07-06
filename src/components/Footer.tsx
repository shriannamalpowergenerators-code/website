"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FORM_RECIPIENT_EMAIL = "info@sapgene.com";

const Footer = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleFooterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        
        const formEl = e.currentTarget;
        const formData = new FormData(formEl);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value as string;
        });

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setSubmitError("Form key is missing. Please configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    to_email: FORM_RECIPIENT_EMAIL,
                    subject: "Quick Footer Inquiry - Shri Annamalai Power Generators",
                    from_name: "Shri Annamalai Footer",
                    ...data
                })
            });
            const result = await response.json();
            if (result.success) {
                setSubmitSuccess(true);
                formEl.reset();
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                setSubmitError(result.message || "Failed to send message. Please try again.");
            }
        } catch {
            setSubmitError("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <footer className="bg-brand-enterprise text-white pt-24 pb-12 relative overflow-hidden" id="contact">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-action opacity-5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-2 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 flex flex-col justify-start gap-6 h-full">
                        <Link href="/" className="flex items-center gap-3 w-full">
                            <div className="w-12 h-12 bg-white rounded flex items-center justify-center shrink-0 relative">
                                <Image src="/images/logo.webp" alt="SAPGENEE – Shri Annamalai Power Generators Logo" width={40} height={40} className="object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-black text-sm md:text-xl leading-tight text-white whitespace-normal break-words w-full">SHRI ANNAMALAI POWER GENERATORS</span>
                            </div>
                        </Link>

                        <p className="text-[#94A3B8] font-sans text-sm leading-relaxed max-w-sm">
                            Providing high-end industrial energy solutions across Tamil Nadu and Puducherry. Authorized partners in world-class power generation since 2004.
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit SAPGENE Facebook page"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-action transition-colors text-white/60 hover:text-white border border-white/10"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit SAPGENE Twitter profile"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-action transition-colors text-white/60 hover:text-white border border-white/10"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit SAPGENE LinkedIn profile"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-action transition-colors text-white/60 hover:text-white border border-white/10"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://wa.me/919442946598"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact SAPGENE via WhatsApp"
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
                    <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Pondicherry */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-heading font-black text-xs tracking-[0.3em] text-white uppercase leading-relaxed">
                                PONDICHERRY
                                <br className="hidden md:block" />
                                <span className="md:ml-0 ml-2">ADDRESS</span>
                            </h4>

                            <div className="flex flex-col gap-4 text-sm text-[#94A3B8] font-sans">
                                <div className="flex items-start gap-3 min-h-[90px]">
                                    <MapPin className="text-white shrink-0" size={18} />
                                    <p className="leading-7">
                                        19B, 6th Cross Extn <br />
                                        Anna Nagar <br />
                                        Pondicherry - 605005
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <Phone className="text-white shrink-0" size={18} />
                                    <a
                                        href="tel:+919443126598"
                                        className="hover:text-white transition-colors"
                                    >
                                        +91 94431 26598
                                    </a>
                                </div>

                                <div className="flex gap-3">
                                    <Mail className="text-white shrink-0" size={18} />
                                    <a
                                        href={`mailto:${FORM_RECIPIENT_EMAIL}`}
                                        className="hover:text-white transition-colors break-all sm:break-normal"
                                    >
                                        {FORM_RECIPIENT_EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Karaikal */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-heading font-black text-xs tracking-[0.3em] text-white uppercase leading-relaxed">
                                KARAIKAL
                                <br className="hidden md:block" />
                                <span className="md:ml-0 ml-2">ADDRESS</span>
                            </h4>

                            <div className="flex flex-col gap-4 text-sm text-[#94A3B8] font-sans">
                                <div className="flex items-start gap-3 min-h-[90px]">
                                    <MapPin className="text-white shrink-0" size={18} />
                                    <p className="leading-7">
                                        14, West Street <br />
                                        Mela Oduthurai <br />
                                        Karaikal - 609602
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <Phone className="text-white shrink-0" size={18} />
                                    <a
                                        href="tel:+919442946598"
                                        className="hover:text-white transition-colors"
                                    >
                                        +91 94429 46598
                                    </a>
                                </div>

                                <div className="flex gap-3">
                                    <Mail className="text-white shrink-0" size={18} />
                                    <a
                                        href={`mailto:${FORM_RECIPIENT_EMAIL}`}
                                        className="hover:text-white transition-colors break-all sm:break-normal"
                                    >
                                        {FORM_RECIPIENT_EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Mini Form */}
                    <div className="lg:col-span-4 flex flex-col gap-5 h-full">
                        <h4 className="font-heading font-black text-xs tracking-[0.3em] text-white uppercase">QUICK INQUIRY</h4>
                        {submitSuccess ? (
                            <div className="bg-white/5 border border-green-500/30 p-6 rounded text-center">
                                <p className="text-green-400 font-bold text-sm mb-2">Message Transmitted!</p>
                                <p className="text-xs text-[#94A3B8]">Thank you for reaching out. A representative will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleFooterSubmit} className="flex flex-col gap-3">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="bg-white/5 border border-white/10 px-5 py-4 rounded-sm focus:outline-none focus:border-brand-action transition-all text-sm placeholder:text-white/20 font-sans"
                                    disabled={isSubmitting}
                                />
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="bg-white/5 border border-white/10 px-5 py-4 rounded-sm focus:outline-none focus:border-brand-action transition-all text-sm placeholder:text-white/20 font-sans"
                                    disabled={isSubmitting}
                                />
                                <textarea
                                    required
                                    name="message"
                                    placeholder="Technical requirement..."
                                    rows={3}
                                    className="bg-white/5 border border-white/10 px-5 py-4 rounded-sm focus:outline-none focus:border-brand-action transition-all text-sm placeholder:text-white/20 font-sans resize-none"
                                    disabled={isSubmitting}
                                ></textarea>
                                {submitError && (
                                    <p className="text-red-400 text-xs font-semibold">{submitError}</p>
                                )}
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-brand-action hover:bg-white hover:text-brand-action disabled:opacity-50 text-white px-8 py-4 rounded-sm font-heading font-black text-xs tracking-widest transition-all flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                                    <Send size={14} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
                    <div className="text-[10px] font-bold text-grey/90 tracking-widest uppercase">
                        © 2026 Shri Annamalai Power Generators. All Rights Reserved.
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-4 text-[10px] font-bold text-grey tracking-widest uppercase pr-24 md:pr-28">                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
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
