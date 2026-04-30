"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhatsAppButton = () => {
    const phoneNumber = "919442946598";
    const message = "Hello Shri Annamalai Power Generators, I'm interested in your generators.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[99] flex items-center justify-center group"
            title="Chat on WhatsApp"
        >
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />

            <div className="relative bg-white p-2 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.3)] border-2 border-green-400 flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/whatsapp-icon.png"
                    alt="WhatsApp Chat"
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain"
                />
            </div>

            {/* Tooltip-style label */}
            <span className="absolute right-full mr-4 bg-white text-brand-enterprise text-[10px] font-bold py-1.5 px-3 rounded-sm shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-widest uppercase pointer-events-none">
                Chat with Experts
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
