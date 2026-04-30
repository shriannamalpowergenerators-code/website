"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, ExternalLink, ShieldCheck } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    const reviews = [
        {
            id: 1,
            role: "Operations Manager",
            text: "Shri Annamalai's 2500kVA units have been our primary power backup for 3 years without a single failure during peak load seasons.",
            rating: 5,
        },
        {
            id: 2,
            role: "Industrial Engineer",
            text: "The precision of their Servo Stabilizers is unmatched. We saw a 15% reduction in machinery maintenance costs after installation.",
            rating: 5,
        },
        {
            id: 3,
            role: "IT Director",
            text: "Reliable UPS systems and exceptional post-sales support. Their technical team responded within an hour during our grid upgrade.",
            rating: 5,
        },
    ];

    return (
        <section ref={containerRef} className="py-24 bg-white scroll-mt-24 overflow-hidden" id="testimonials">
            <motion.div style={{ y }} className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 mb-16 text-center">
                    <span className="text-[11px] font-bold text-brand-action tracking-widest uppercase flex items-center gap-2">
                        <Star size={14} className="fill-brand-action" />
                        Social Proof & Verification
                    </span>
                    <h2 className="text-4xl font-heading font-extrabold text-brand-enterprise md:text-5xl tracking-tight uppercase">
                        What Our Clients Say
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-action rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#F8FAFC] p-6 sm:p-8 md:p-10 rounded-2xl relative border border-gray-100 group hover:bg-brand-enterprise hover:text-white transition-all duration-500 shadow-xl shadow-gray-200/50 hover:shadow-brand-enterprise/20"
                        >
                            <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-brand-action opacity-20 group-hover:opacity-40" size={32} />

                            <div className="flex gap-1 mb-5 md:mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-brand-action text-brand-action" />
                                ))}
                            </div>

                            <p className="text-base md:text-lg font-sans leading-relaxed italic mb-6 md:mb-8 text-black group-hover:text-white">
                                "{review.text}"
                            </p>

                            <div className="flex flex-col border-t border-gray-200 pt-5 md:pt-6 group-hover:border-white/20">
                                <span className="text-[10px] md:text-[11px] font-bold text-[#64748B] group-hover:text-white/60 uppercase tracking-widest mt-1 italic leading-tight">{review.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Link
                        href="https://g.page/r/your-google-profile-id/review" // Needs real ID
                        target="_blank"
                        className="group bg-white border-2 border-brand-enterprise text-brand-enterprise px-10 py-5 rounded-sm font-heading font-black text-sm tracking-[0.2em] transition-all flex items-center gap-3 hover:bg-brand-enterprise hover:text-white shadow-xl shadow-brand-enterprise/10"
                    >
                        WRITE A GOOGLE REVIEW
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                    <div className="flex items-center gap-4 text-[#64748B] text-[10px] font-bold uppercase tracking-tight">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 rounded-sm text-yellow-600">
                            <Star size={12} className="fill-yellow-600" />
                            <span className="pt-0.5 tracking-tighter shadow-sm">4.9 / 5 Rating</span>
                        </div>
                        <span className="opacity-50">|</span>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck size={14} className="text-brand-action" />
                            <span className="pt-0.5">Verified Industrial Enterprise</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
