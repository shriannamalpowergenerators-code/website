import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Landmark, Factory, CheckCircle2, PhoneCall, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Solar Infrastructure & Hybrid Grids | Shri Annamalai Power Generators",
    description: "Utility-scale commercial solar arrays, hybrid grid integrations, and renewable energy back-ups. Explore why advanced solar infrastructure is critical for modern industrial operations.",
    keywords: "solar infrastructure, commercial solar panels, industrial solar grid, hybrid power generators",
};

export default function SolarInfrastructurePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header variant="light" />
            {/* Hero Section */}
            <div className="relative pt-32 pb-16 md:pb-24 bg-brand-enterprise overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
                <Image
                    src="/images/grid_solar.png"
                    alt="solar infrastructure"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-3xl">
                        <span className="text-[10px] md:text-[11px] font-bold text-gray-400 tracking-[0.4em] uppercase mb-4 block">
                            Products / Green Energy
                        </span>
                        <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-1 md:mb-8 tracking-tight leading-tight">
                            SOLAR <span className="text-brand-action">INFRASTRUCTURE</span>
                        </h1>
                        <p className="text-white/70 text-base md:text-xl font-sans leading-relaxed max-w-2xl md:border-l-2 md:border-brand-action md:pl-6 mx-auto md:mx-0">
                            Utility-scale commercial solar arrays and hybrid grid integrations designed for maximum efficiency, sustainability, and reduced operational costs.
                        </p>
                    </div>
                </div>
            </div>

            {/* SEO Content Injection */}
            <section className="py-16 md:py-14 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto prose prose-blue prose-lg md:prose-xl">
                        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-enterprise mb-6">Advanced Commercial Solar Infrastructure in pondicherry & Karaikal</h2>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Shri Annamalai Power Generators is a premier supplier and integrator of <strong>heavy-duty commercial solar infrastructure</strong> tailored specifically for industrial loads. Our deep expertise in combining rooftop solar PV arrays with sophisticated inverter systems ensures that manufacturing hubs, IT parks, and educational campuses can seamlessly transition to clean energy without compromising their baseline grid stability.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Hybrid Grid Integrations & Renewable Energy Backup</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Relying solely on external power grids can lead to massive bottlenecks during unexpected peak hour blackouts. Our comprehensive <strong>hybrid grid integrations</strong> fuse high-grade Tier-1 solar panels with robust diesel generator arrays and UPS storage logic. This precise multi-source synchronization dynamically scales power draw—leveraging free solar energy when available, and smoothly bridging to fuel-based backup during extreme climatic conditions or utility-level failures.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Why Invest in Industrial Solar Arrays?</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Implementing solar power goes beyond sustainable branding; it dramatically enhances business continuity and Return on Investment (ROI). Companies utilizing our high-efficiency inversion technologies experience a sharp reduction in electrical operational expenditure. With net metering and local regulatory energy credits in Tamil Nadu and Puducherry, deploying solar infrastructure is heavily incentivized for fast break-even intervals.
                        </p>

                        <p className="text-gray-600 font-sans leading-relaxed">
                            When combined with our renowned fleet of Cummins diesel generators, our holistic energy packages represent the ultimate fail-safe strategy against power volatility. Book a technical site inspection today and discover exactly how our specialized solar engineering team can minimize your energy overheads securely.
                        </p>
                    </div>
                </div>
            </section>

            {/* Purpose & Why it is needed */}
            <section className="py-1 md:py-15 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-enterprise mb-6">WHY SOLAR INFRASTRUCTURE?</h2>
                        <p className="text-gray-600 font-sans leading-relaxed text-lg">
                            Transitioning to solar isn't just about environmental responsibility; it’s a strategic economic decision. Our hybrid solar-grid integrations are built to reduce reliance on volatile main power grids while massively cutting down electrical overheads.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Cost Reduction", desc: "Dramatically lower your operational electricity bills with independent generation." },
                            { title: "Energy Independence", desc: "Reduce reliance on traditional power grids and avoid unexpected brownouts." },
                            { title: "Carbon Neutrality", desc: "Meet corporate ESG goals with clean, completely renewable energy sources." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                                <CheckCircle2 size={32} className="text-brand-action mb-6" />
                                <h3 className="text-xl font-heading font-black text-brand-enterprise mb-3">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 md:py-19 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-25">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black text-brand-action tracking-widest uppercase">Target Markets</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-enterprise uppercase tracking-tight mt-4">PRIMARY USE CASES</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Factory size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Manufacturing Hubs</h4>
                                <p className="text-gray-500 text-sm">Large roof spans of factories provide perfect acreage for mega-watt class solar plants, driving heavy machinery affordably.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Building2 size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">IT Parks & Commercial</h4>
                                <p className="text-gray-500 text-sm">Hybrid solar layouts integrated with UPS grids to maintain zero-downtime environments for server systems.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Landmark size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Educational Institutions</h4>
                                <p className="text-gray-500 text-sm">Campuses transforming into self-sustaining mini-grids with solar-roofed parking and academic building setups.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Lead Generation CTA */}
            <section className="bg-brand-enterprise text-white py-20 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-action opacity-10 skew-x-12 -translate-x-1/3 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight uppercase leading-tight">INITIATE YOUR <span className="text-brand-action">GREEN TRANSITION</span></h2>
                    <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto italic font-sans leading-relaxed">
                        Schedule a comprehensive site evaluation. Our engineers will audit your facility and design a bespoke solar infrastructure plan maximizing ROI.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-10 py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3"
                        >
                            REQUEST TECHNICAL BRIEF <MoveRight size={16} />
                        </Link>
                        <a
                            href="tel:+919442946598"
                            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all w-full sm:w-auto"
                        >
                            <PhoneCall size={18} />
                            +91 94429 46598
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
