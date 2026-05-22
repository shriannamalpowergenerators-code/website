"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const headerY = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("enquiry_popup_seen");

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                localStorage.setItem("enquiry_popup_seen", "true");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const formEl = e.currentTarget;
        const formData = new FormData(formEl);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value as string;
        });

        // Use process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setSubmitError("Form submission key is missing. Please configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
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
                    subject: "New Engineering Support Request - Shri Annamalai Power Generators",
                    from_name: "Shri Annamalai Website Contact Form",
                    ...data
                })
            });
            const result = await response.json();
            if (result.success) {
                setIsSubmitSuccess(true);
                formEl.reset();
            } else {
                setSubmitError(result.message || "Failed to transmit requirement. Please try again.");
            }
        } catch (error) {
            setSubmitError("An error occurred during transmission. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const fieldStyle =
        "w-full bg-white border border-gray-200 px-5 py-4 rounded-sm focus:outline-none focus:border-brand-action transition-all text-sm font-sans text-black placeholder:text-black placeholder:opacity-70";

    return (
        <main
            ref={containerRef}
            className="min-h-screen bg-white selection:bg-brand-action/30 selection:text-brand-enterprise overflow-hidden"
        >
            <Header onQuote={openModal} variant="light" />

            {/* Hero Section */}
            <motion.section
                style={{ y: headerY }}
                className="relative pt-32 pb-24 overflow-hidden bg-brand-enterprise text-white"
            >
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto px-2"
                    >
                        <span className="text-blue-100/80 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">
                            Connect with Engineering
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black leading-tight mb-8">
                            Global Power <br />
                            <span className="text-brand-action">Support Center.</span>
                        </h1>

                        <p className="text-base md:text-lg text-blue-100/80 font-sans leading-relaxed max-w-2xl mx-auto">
                            Need technical guidance or a quote? Our power experts are standing
                            by to assist with your industrial, commercial, and residential
                            infrastructure requirements.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Contact Section */}
            <section className="py-24 relative z-20 text-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Form */}
                        {isSubmitSuccess ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="lg:col-span-7 bg-[#F8FAFC] p-8 md:p-12 rounded-2xl border border-gray-100 shadow-xl flex flex-col items-center justify-center text-center py-20"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                                    <ShieldCheck size={36} />
                                </div>
                                <h2 className="text-3xl font-heading font-black text-brand-enterprise uppercase tracking-tight mb-4">
                                    Transmission Successful
                                </h2>
                                <p className="text-gray-600 max-w-md mb-8">
                                    Your engineering requirement has been transmitted to our systems. A support engineer will review the specifications and contact you within 2 hours.
                                </p>
                                <button 
                                    onClick={() => setIsSubmitSuccess(false)}
                                    className="bg-brand-enterprise hover:bg-brand-action text-white px-8 py-3 rounded-sm font-heading font-black text-xs tracking-widest transition-all"
                                >
                                    SEND ANOTHER MESSAGE
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-7 bg-[#F8FAFC] p-8 md:p-12 rounded-2xl border border-gray-100 shadow-xl"
                            >
                                <div className="flex flex-col gap-4 mb-10">
                                    <h2 className="text-3xl font-heading font-black text-brand-enterprise uppercase tracking-tight">
                                        Request Data Specification
                                    </h2>

                                    <p className="text-gray-500 text-sm">
                                        Fill out the form below and an engineer will contact you within
                                        2 hours.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-enterprise uppercase tracking-widest">
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            className={fieldStyle}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-enterprise uppercase tracking-widest">
                                            Corporate Email
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="name@company.com"
                                            className={fieldStyle}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-enterprise uppercase tracking-widest">
                                            Contact Number
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 00000 00000"
                                            className={fieldStyle}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Requirement */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-enterprise uppercase tracking-widest">
                                            Requirement Type
                                        </label>

                                        <select
                                            name="requirement_type"
                                            defaultValue=""
                                            required
                                            className={`${fieldStyle} appearance-none invalid:text-gray-700`}
                                            disabled={isSubmitting}
                                        >
                                            <option value="" disabled>
                                                Select Requirement Type
                                            </option>
                                            <option value="generators">Electric Generators</option>
                                            <option value="solar">Solar Infrastructure</option>
                                            <option value="servo">Servo Stabilizer</option>
                                            <option value="ups">Custom UPS System</option>
                                        </select>
                                    </div>

                                    {/* State */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-enterprise uppercase tracking-widest">
                                            State
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="state"
                                            placeholder="E.g. Tamil Nadu"
                                            className={fieldStyle}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Zip */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-enterprise uppercase tracking-widest">
                                            Pincode / Zip Code
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="pincode"
                                            placeholder="600001"
                                            className={fieldStyle}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-bold text-brand-enterprise uppercase tracking-widest">
                                            Technical Requirement Details
                                        </label>

                                        <textarea
                                            required
                                            name="message"
                                            placeholder="Your Message"
                                            rows={5}
                                            className={`${fieldStyle} resize-none`}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {submitError && (
                                        <div className="md:col-span-2 text-red-500 text-xs font-semibold">
                                            {submitError}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <div className="md:col-span-2">
                                        <button 
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-brand-enterprise hover:bg-brand-enterprise disabled:opacity-50 text-white py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all shadow-xl shadow-brand-action/20 flex items-center justify-center gap-3 cursor-pointer"
                                        >
                                            {isSubmitting ? "TRANSMITTING..." : "TRANSMIT REQUIREMENT"}
                                            <Send size={16} />
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {/* Right Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 flex flex-col gap-12"
                        >
                            <div className="flex flex-col gap-8">
                                <h3 className="text-2xl font-heading font-black text-brand-enterprise uppercase tracking-tight">
                                    Main Hubs
                                </h3>

                                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                                    <div className="flex gap-6">
                                        <MapPin className="text-brand-action" />
                                        <div>
                                            <h4 className="font-bold text-sm uppercase text-[#64748B]">
                                                Pondicherry Address
                                            </h4>
                                            <p className="text-sm">
                                                19B, 6th Cross Extension, Anna Nagar, Pondicherry -
                                                605005
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                                    <div className="flex gap-6">
                                        <MapPin className="text-brand-action" />
                                        <div>
                                            <h4 className="font-bold text-sm uppercase text-[#64748B]">
                                                Karaikal Address
                                            </h4>
                                            <p className="text-sm">
                                                14, West St, Mela Oduthurai, Karaikal, Pondicherry -
                                                609602
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-heading font-black text-brand-enterprise uppercase tracking-tight">
                                    Quick Connectivity
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <a
                                        href="tel:+919442946598"
                                        className="flex items-center gap-4 p-4 bg-brand-enterprise text-white rounded-lg"
                                    >
                                        <Phone size={20} />
                                        <span className="text-xs font-bold tracking-widest">
                                            +91 94431 26598
                                        </span>
                                    </a>

                                    <a
                                        href="https://wa.me/919442946598"
                                        target="_blank"
                                        className="flex items-center gap-4 p-4 bg-white border-2 border-green-400 text-green-600 rounded-lg"
                                    >
                                        <Image
                                            src="/images/whatsapp-icon.png"
                                            alt="WhatsApp"
                                            width={24}
                                            height={24}
                                        />
                                        <span className="text-xs font-bold uppercase">
                                            WhatsApp Direct
                                        </span>
                                    </a>

                                    <a
                                        href="mailto:sapgenekkl@gmail.com"
                                        className="flex items-center gap-4 p-4 bg-[#F1F5F9] rounded-lg sm:col-span-2"
                                    >
                                        <Mail size={20} />
                                        <span className="text-xs font-bold uppercase">
                                            sapgenekkl@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>


                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
}