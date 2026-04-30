import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Server, Activity, BriefcaseMedical, ShieldCheck, PhoneCall, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Online UPS Systems | Shri Annamalai Power Generators",
    description: "Zero-transfer time uninterrupted power supplies for mission-critical IT infrastructure, medical setups, and enterprise operations.",
    keywords: "online UPS, uninterruptible power supply, critical power backup, zero transfer UPS",
};

export default function OnlineUpsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header variant="light" />

            {/* Hero Section */}
            <div className="relative pt-32 pb-16 md:pb-24 bg-brand-enterprise overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
                <Image
                    src="/images/grid_ups.png"
                    alt="Online UPS Systems"
                    fill
                    className="object-cover opacity-20 mix-blend-screen"
                    priority
                />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-3xl">
                        <span className="text-[10px] md:text-[11px] font-bold text-gray-400 tracking-[0.4em] uppercase mb-4 block">
                            Products / Power Systems
                        </span>
                        <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            ONLINE UPS <span className="text-brand-action">SYSTEMS</span>
                        </h1>
                        <p className="text-white/70 text-base md:text-xl font-sans leading-relaxed max-w-2xl md:border-l-2 md:border-brand-action md:pl-6 mx-auto md:mx-0">
                            Zero-transfer time uninterrupted power arrays engineered for mission-critical IT loads, sensitive medical equipment, and modern data centers.
                        </p>
                    </div>
                </div>
            </div>
            {/* SEO Content Injection */}
            <section className="py-16 md:py-15 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto prose prose-blue prose-lg md:prose-xl">
                        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-enterprise mb-6">High-Performance Online UPS Systems for Critical Operations</h2>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            At Shri Annamalai Power Generators, we deliver <strong>mission-critical Online UPS Systems</strong> engineered specifically to protect high-stakes digital and medical infrastructure from devastating electrical volatility. Whether you run a high-density data center, an automated robotic assembly line, or a life-support medical ICU, our power conditioners and true double-conversion UPS units provide an impenetrable barrier against power sags, surges, and micro-outages.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Understanding Zero-Transfer Time Technology</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Unlike consumer-grade offline or line-interactive systems that feature a brief delay when switching to battery power, a true <strong>zero-transfer time Uninterruptible Power Supply (UPS)</strong> operates continuously through its inverter. The incoming AC power is converted to DC to charge the battery banks and is then immediately inverted back to perfectly clean, pure sine wave AC output. This means your sensitive electronics never even "feel" a power failure occurring. The transition is instantaneous and completely seamless.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Seamless Integration with Cummins Industrial Generators</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            An Online UPS system is the perfect companion to a heavy-duty backup generator. When a total blackout occurs, heavy diesel generators (like Cummins DG Sets) require approximately 10 to 15 seconds to spin up to full operational speed and stabilize their voltage frequency. Our customized UPS grid bridges this critical gap—carrying the facility's entire load effortlessly until the generators take over the heavy lifting, securing comprehensive 24/7 power backup strategies.
                        </p>

                        <p className="text-gray-600 font-sans leading-relaxed">
                            Protect your microprocessors, secure your corporate data, and extend the lifespan of expensive sensitive machinery. We offer bespoke sizing and rapid installation services for three-phase commercial UPS architectures across pondicherry and Karaikal.
                        </p>
                    </div>
                </div>
            </section>


            {/* Purpose & Why it is needed */}
            <section className="py-20 md:py-15 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-enterprise mb-6">WHY ONLINE UPS?</h2>
                        <p className="text-gray-600 font-sans leading-relaxed text-lg">
                            Unlike traditional standby systems, an Online UPS operates continuously through its inverter, providing a pure sine wave output. This means absolutely zero transfer time during a power failure, ensuring that highly sensitive microprocessors are never exposed to voltage spikes, sags, or micro-outages.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Zero Transfer Time", desc: "No micro-second delays. Perfect seamless transition bridging the gap before generators start." },
                            { title: "Pure Power Quality", desc: "Active double-conversion technology cleans raw grid power removing all noise and surges." },
                            { title: "Mission Critical Stability", desc: "Prevents data corruption and protects investments in highly sensitive electronic control units." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                                <ShieldCheck size={32} className="text-brand-action mb-6" />
                                <h3 className="text-xl font-heading font-black text-brand-enterprise mb-3">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 md:py-15 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black text-brand-action tracking-widest uppercase">Target Markets</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-enterprise uppercase tracking-tight mt-4">PRIMARY USE CASES</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Server size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Data Centers & IT Networks</h4>
                                <p className="text-gray-500 text-sm">Server racks cannot suffer even a millisecond of power loss. Our UPS arrays keep networks alive safely during generator spin-up phases.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <BriefcaseMedical size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Medical & Healthcare</h4>
                                <p className="text-gray-500 text-sm">Life-support systems, MRI machines, and ICU monitors require absolute continuous high-grade electrical sine waves.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Activity size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Automated Manufacturing</h4>
                                <p className="text-gray-500 text-sm">Continuous process lines and robotic arms crash if a lag occurs, saving millions in ruined batches through UPS bridges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Lead Generation CTA */}
            <section className="bg-brand-enterprise text-white py-20 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-action opacity-10 skew-x-12 -translate-x-1/3 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight uppercase leading-tight">SECURE YOUR <span className="text-brand-action">CRITICAL LOAD</span></h2>
                    <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto italic font-sans leading-relaxed">
                        Do not let grid volatility affect your uptime. Contact our technical team today to accurately size an Online UPS system for your precise operational load.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-10 py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3"
                        >
                            GET A CUSTOM QUOTE <MoveRight size={16} />
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
