"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FORM_RECIPIENT_EMAIL = "info@sapgene.com";

const LeadModal = ({ isOpen, onClose }: LeadModalProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        serviceType: "Generators",
        state: "",
        pincode: "",
        phoneNumber: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

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
                    subject: "New Lead Capture - Shri Annamalai Power Generators",
                    from_name: "Shri Annamalai Website Popup",
                    name: formData.fullName,
                    business: formData.businessName,
                    service: formData.serviceType,
                    state: formData.state,
                    pincode: formData.pincode,
                    phone: formData.phoneNumber
                })
            });
            const result = await response.json();
            if (result.success) {
                setSubmitSuccess(true);
                setFormData({
                    fullName: "",
                    businessName: "",
                    serviceType: "Generators",
                    state: "",
                    pincode: "",
                    phoneNumber: "",
                });
                setTimeout(() => {
                    onClose();
                    setSubmitSuccess(false);
                }, 3000);
            } else {
                setSubmitError(result.message || "Failed to submit request. Please try again.");
            }
        } catch {
            setSubmitError("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-brand-enterprise/95 backdrop-blur-md overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white w-full max-w-4xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] relative flex flex-col md:flex-row overflow-hidden my-auto"
                    >
                        {/* Visual Side */}
                        <div className="hidden md:flex w-1/3 bg-brand-enterprise p-8 text-white flex-col justify-end gap-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/2 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
                                    <ShieldCheck size={28} />
                                </div>
                                <h3 className="text-xl font-heading font-black leading-tight mb-2">PRIORITY QUOTE</h3>
                                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-relaxed italic">Expert technical analysis within 15 minutes.</p>
                            </div>
                        </div>

                        {/* Form Side */}
                        {submitSuccess ? (
                            <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                                    <ShieldCheck size={36} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-enterprise tracking-tight mb-2">
                                    Thank You!
                                </h2>
                                <p className="text-slate-500 text-sm max-w-sm">
                                    Your request has been captured. Our engineers are reviewing your specifications and will connect with you within 15 minutes.
                                </p>
                            </div>
                        ) : (
                            <div className="flex-1 p-6 md:p-10">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-[#64748B] hover:text-brand-action transition-colors bg-gray-50 p-2 rounded-full z-20"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex flex-col gap-2 mb-6 md:mb-8">
                                    <span className="text-[10px] md:text-[11px] font-bold text-brand-action tracking-widest uppercase flex items-center gap-2">
                                        <Zap size={14} className="fill-brand-action" />
                                        Wholesale Inquiry
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-enterprise tracking-tight">Request <span className="text-brand-action">Technical</span> Brief</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                                    {/* FULL NAME - REQUIRED */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest px-1">Full Name *</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.fullName}
                                            placeholder="Enter full name"
                                            className="bg-[#F8FAFC] border-2 border-gray-100 px-4 py-3 md:px-5 md:py-4 rounded-lg focus:outline-none focus:border-brand-action/40 transition-all font-sans text-brand-enterprise font-semibold placeholder:font-normal placeholder:text-slate-400 text-sm"
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* BUSINESS NAME - OPTIONAL */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest px-1">Business Name</label>
                                        <input
                                            type="text"
                                            value={formData.businessName}
                                            placeholder="Global Industries Ltd. (Optional)"
                                            className="bg-[#F8FAFC] border-2 border-gray-100 px-4 py-3 md:px-5 md:py-4 rounded-lg focus:outline-none focus:border-brand-action/40 transition-all font-sans text-brand-enterprise font-semibold placeholder:font-normal placeholder:text-slate-400 text-sm"
                                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* SERVICE TYPE - OPTIONAL */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest px-1 text-xs">Service Type</label>
                                        <select
                                            value={formData.serviceType}
                                            className="bg-[#F8FAFC] border-2 border-gray-100 px-4 py-3 md:px-5 md:py-4 rounded-lg focus:outline-none focus:border-brand-action/40 transition-all font-sans text-brand-enterprise font-semibold text-sm cursor-pointer"
                                            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                            disabled={isSubmitting}
                                        >
                                            <option>Generators</option>
                                            <option>Solar Infrastructure</option>
                                            <option>UPS Systems</option>
                                            <option>Stabilizers</option>
                                            <option>Bespoke Solution</option>
                                        </select>
                                    </div>

                                    {/* STATE & PINCODE - OPTIONAL */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest px-1">State</label>
                                            <input
                                                type="text"
                                                value={formData.state}
                                                placeholder="Tamil Nadu"
                                                className="bg-[#F8FAFC] border-2 border-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:border-brand-action/40 transition-all font-sans text-brand-enterprise font-semibold placeholder:font-normal placeholder:text-slate-400 text-sm"
                                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest px-1">Pincode</label>
                                            <input
                                                type="text"
                                                value={formData.pincode}
                                                placeholder="600001"
                                                className="bg-[#F8FAFC] border-2 border-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:border-brand-action/40 transition-all font-sans text-brand-enterprise font-semibold placeholder:font-normal placeholder:text-slate-400 text-sm"
                                                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    {/* PHONE NUMBER - REQUIRED */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest px-1">Phone Number *</label>
                                        <input
                                            required
                                            type="tel"
                                            value={formData.phoneNumber}
                                            placeholder="+91 00000 00000"
                                            className="bg-[#F8FAFC] border-2 border-gray-100 px-4 py-3 md:px-5 md:py-4 rounded-lg focus:outline-none focus:border-brand-action/40 transition-all font-sans text-brand-enterprise font-semibold placeholder:font-normal placeholder:text-slate-400 text-sm"
                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {submitError && (
                                        <p className="text-red-500 text-xs font-semibold px-1">{submitError}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-2 md:mt-4 bg-brand-action hover:bg-brand-enterprise disabled:opacity-50 text-white px-8 py-4 md:py-5 rounded-lg font-heading font-black text-xs md:text-sm tracking-[0.1em] transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-action/20 group cursor-pointer"
                                    >
                                        {isSubmitting ? "TRANSMITTING..." : "GET PRIORITY QUOTE"}
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>

                                <p className="text-[9px] text-[#64748B] font-bold uppercase tracking-widest text-center mt-6 flex items-center justify-center gap-2">
                                    <ShieldCheck size={12} className="text-green-500" />
                                    Engineering data is strictly confidential & GDPR compliant.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadModal;
