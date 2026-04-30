import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tent, HardHat, Cog, Clock, PhoneCall, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Rental Generators | Shri Annamalai Power Generators",
    description: "Flexible, temporary power solutions tailored for events, construction sites, and emergency deployment scenarios needing immediate grid support.",
    keywords: "rental generators, hire generators, temporary power solutions, event power rental, construction generator",
};

export default function RentalGeneratorsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header variant="light" />

            {/* Hero Section */}
            <div className="relative pt-32 pb-16 md:pb-24 bg-brand-enterprise overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
                <Image
                    src="/images/grid_generator.png"
                    alt="Rental Generators"
                    fill
                    className="object-cover opacity-20 mix-blend-screen"
                    priority
                />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-3xl">
                        <span className="text-[10px] md:text-[11px] font-bold text-gray-400 tracking-[0.4em] uppercase mb-4 block">
                            Products / Rental Generators
                        </span>
                        <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            RENTAL <span className="text-brand-action">GENERATORS</span>
                        </h1>
                        <p className="text-white/70 text-base md:text-xl font-sans leading-relaxed max-w-2xl md:border-l-2 md:border-brand-action md:pl-6 mx-auto md:mx-0">
                            Plug-and-play, hyper-reliable temporary power solutions meticulously maintained for massive outdoor events, remote construction sites, and emergency grid failures.
                        </p>
                    </div>
                </div>
            </div>
            {/* SEO Content Injection */}
            <section className="py-16 md:py-14 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto prose prose-blue prose-lg md:prose-xl">
                        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-enterprise mb-6">Reliable Genset On-Hire & Premium Rental Generators Base</h2>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Shri Annamalai Power Generators operates a massive inventory of meticulously maintained acoustic diesel generators available strictly for <strong>long-term and short-term rentals</strong>. Whether you're managing sudden equipment failure, staging a colossal public event in pondicherry, or constructing a remote industrial site in Karaikal, our heavy-duty Cummins-powered temporary generator fleets are guaranteed to keep your operations illuminated.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Turnkey Power Solutions: From End to End</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Renting a generator from us isn't simply renting hardware. We offer comprehensive <strong>turnkey power setups</strong> which include comprehensive site inspections, logistics, heavy-lift transportation, robust cabling layout, and on-site engineering support. We provide fully staffed 24/7 operator supervision alongside automated fuel management systems, so your organization never has to pause production to worry about logistical breakdowns.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Flexible Sizing for Construction and Event Scale</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Our rental catalogue covers extreme spectrums of voltage demand. We offer silent mobile sets ranging from 15kVA for intimate, high-end VIP events, stretching all the way up to specialized 1000kVA+ synchronized megawatt blocks engineered purely to swallow the massive loads of multi-crane construction sites and deep-sea port activities.
                        </p>

                        <p className="text-gray-600 font-sans leading-relaxed">
                            Every rental generator ships with strict emission compliance certifications and super-silent enclosures, ensuring smooth adherence to local regulatory demands. Reach out today for immediate deployment capabilities and emergency backup dispatches.
                        </p>
                    </div>
                </div>
            </section>
            {/* Purpose & Why it is needed */}
            <section className="py-20 md:py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-enterprise mb-6">WHY RENT A GENERATOR?</h2>
                        <p className="text-gray-600 font-sans leading-relaxed text-lg">
                            Not every project requires the massive capital expenditure of a permanent power plant. Our rental fleet provides instantaneous access to premium-grade, CPCB IV+ compliant generators with complete maintenance handled by our on-ground engineers, so you can focus entirely on your core operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Zero CAPEX", desc: "Access top-tier industrial generation power without the heavy initial capital deployment." },
                            { title: "Instant Scalability", desc: "Rent exactly the kVA you require. Upscale or downscale the units rapidly as your project phase changes." },
                            { title: "Fully Serviced", desc: "Every unit comes with an ironclad uptime guarantee, backed by our 24/7 dedicated service technicians." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                                <Clock size={32} className="text-brand-action mb-6" />
                                <h3 className="text-xl font-heading font-black text-brand-enterprise mb-3">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 md:py-9 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black text-brand-action tracking-widest uppercase">Target Markets</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-enterprise uppercase tracking-tight mt-4">PRIMARY USE CASES</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Tent size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Massive Outdoor Events</h4>
                                <p className="text-gray-500 text-sm">Quiet, aesthetically packaged generator units providing flawless electricity to highly sensitive concert audio systems and lighting rigs.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <HardHat size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Construction & Mining</h4>
                                <p className="text-gray-500 text-sm">Heavy-duty power drops bringing crucial operational capability to remote off-grid zones for heavy tools and site camps.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Cog size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Emergency Grid Backup</h4>
                                <p className="text-gray-500 text-sm">Instant deployment fleet ready to restore critical operations for facilities whose primary backup vectors have completely failed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Lead Generation CTA */}
            <section className="bg-brand-enterprise text-white py-20 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-action opacity-10 skew-x-12 -translate-x-1/3 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight uppercase leading-tight">HIRE <span className="text-brand-action">RELIABILITY</span> TODAY</h2>
                    <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto italic font-sans leading-relaxed">
                        Need power on your site by tomorrow? Our rapid-response fleet is standing by. Get competitive pricing for short-term and long-term rental agreements.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-10 py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3"
                        >
                            ENQUIRE RENTAL FLEET <MoveRight size={16} />
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
