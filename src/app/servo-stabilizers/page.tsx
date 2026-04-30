import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PlugZap, Cable, Microchip, ShieldAlert, PhoneCall, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Servo Stabilizers | Shri Annamalai Power Generators",
    description: "Industrial-grade Servo Stabilizers engineered for precision voltage regulation, protecting sensitive manufacturing units from electrical fluctuations.",
    keywords: "servo stabilizers, voltage regulation, industrial power protection, precise voltage control",
};

export default function ServoStabilizersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header variant="light" />

            {/* Hero Section */}
            <div className="relative pt-32 pb-16 md:pb-24 bg-brand-enterprise overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
                <Image
                    src="/images/grid_servo.png"
                    alt="Servo Stabilizers"
                    fill
                    className="object-cover opacity-20 mix-blend-screen"
                    priority
                />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-3xl">
                        <span className="text-[10px] md:text-[11px] font-bold text-brand-action tracking-[0.4em] uppercase mb-4 block">
                            Products / Grid Quality
                        </span>
                        <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            SERVO <span className="text-brand-action">STABILIZERS</span>
                        </h1>
                        <p className="text-white/70 text-base md:text-xl font-sans leading-relaxed max-w-2xl md:border-l-2 md:border-brand-action md:pl-6 mx-auto md:mx-0">
                            Precision dynamic voltage regulation equipment designed strictly to shield capital-intensive industrial machinery and commercial hardware.
                        </p>
                    </div>
                </div>
            </div>
            {/* SEO Content Injection */}
            <section className="py-16 md:py-14 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto prose prose-blue prose-lg md:prose-xl">
                        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-enterprise mb-6">Precision Servo Stabilizers for Industrial Voltage Regulation</h2>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            The industrial belts of Tamil Nadu and Puducherry frequently struggle with erratic voltage fluctuations. Shri Annamalai Power Generators combats this by supplying advanced, microprocessor-controlled <strong>Servo Voltage Stabilizers</strong> built to handle extreme input variance. Operating via robust copper-wound buck-boost transformers and responsive伺服 servo motors, our units ensure a continuous ±1% precise voltage output, unconditionally protecting your expensive 3-phase machinery.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Protecting High-Caliber CNC Machines and Medical Assets</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            Heavy electrical surges and brownouts can cause immediate physical damage to the delicate programmable logic controllers (PLCs) found within CNC milling arrays, offset printing lines, and sophisticated medical scanners (MRI/CT). A localized <strong>industrial servo stabilizer</strong> inherently isolates these machines from grid disturbances, extending their lifespans significantly while completely preventing sudden operational errors caused by voltage drops.
                        </p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-enterprise mt-10 mb-4">Tailored Capacities: From 10kVA to 3000kVA Mainline Stations</h3>
                        <p className="text-gray-600 font-sans leading-relaxed mb-6">
                            We don't believe in one-size-fits-all. Our engineers deploy tailored automatic voltage conditioning systems ranging from agile 10kVA units for individual workstations up to gigantic 3000kVA mainline stabilizers capable of stabilizing whole manufacturing complexes. Featuring IP55-rated enclosures, our hardware tolerates extreme indoor and outdoor industrial environments flawlessly while requiring exceptionally low maintenance parameters.
                        </p>

                        <p className="text-gray-600 font-sans leading-relaxed">
                            Stop losing profit to power fluctuations and damaged hardware. By implementing a centralized <strong>voltage regulation system</strong>, you secure a smooth, standardized energy baseline that maximizes plant productivity continuously throughout the year.
                        </p>
                    </div>
                </div>
            </section>
            {/* Purpose & Why it is needed */}
            <section className="py-20 md:py-15 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-enterprise mb-6">WHY SERVO STABILIZERS?</h2>
                        <p className="text-gray-600 font-sans leading-relaxed text-lg">
                            The main electrical grid is infamous for its invisible fluctuations. Voltage sags and surges might not immediately turn machines off, but they aggressively degrade component lifespan over time. Servo stabilizers act as an active, mechanical guardian correcting incoming voltage inconsistencies instantly before they strike the main board.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Equipment Longevity", desc: "Eliminate micro-stresses on capacitive and inductive components inside your machinery by delivering perfect nominal voltages." },
                            { title: "Dynamic Correction", desc: "Utilizes motorized buck-boost transformer architecture to actively ride through varying severe input ranges." },
                            { title: "Reduced Downtime", desc: "Prevents mysterious motherboard burnouts or tripped breakers which halt the entire factory production chain." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                                <ShieldAlert size={32} className="text-brand-action mb-6" />
                                <h3 className="text-xl font-heading font-black text-brand-enterprise mb-3">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 md:py-10 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-6">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black text-brand-action tracking-widest uppercase">Target Markets</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-enterprise uppercase tracking-tight mt-4">PRIMARY USE CASES</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Microchip size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">CNC & Robotics</h4>
                                <p className="text-gray-500 text-sm">Computer Numerical Control devices lose logic calibration during voltage inconsistencies. Servos ensure exact cutting parameters aren't disrupted.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <Cable size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Textile & Printing</h4>
                                <p className="text-gray-500 text-sm">Continuous running high-torque spinning motors require balanced three-phase inputs to prevent fabric faults or color misalignment.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <PlugZap size={32} className="text-brand-action shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-enterprise mb-2">Commercial Buildings</h4>
                                <p className="text-gray-500 text-sm">Large centralized HVAC arrays and elevator systems are incredibly prone to damage from unbalanced phase voltages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Lead Generation CTA */}
            <section className="bg-brand-enterprise text-white py-20 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-action opacity-10 skew-x-12 -translate-x-1/3 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight uppercase leading-tight">PROTECT YOUR <span className="text-brand-action">INVESTMENT</span></h2>
                    <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto italic font-sans leading-relaxed">
                        One voltage spike can cost more than an entire protection array. Speak with our experts to secure a customized high-capacity Servo Stabilizer tailored to your load.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-10 py-5 rounded-sm font-heading font-black text-xs tracking-widest transition-all shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3"
                        >
                            GET A FREE CONSULTATION <MoveRight size={16} />
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
