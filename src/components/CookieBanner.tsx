"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem("cookie_consent");
        if (!hasConsented) {
            setIsVisible(true);
            }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-800 text-white p-4 z-[100] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom duration-500">
            <p className="text-sm font-sans max-w-4xl opacity-90 text-center sm:text-left">
                We use tracking technologies to ensure you get the best experience on our website and to analyze traffic for better support services.
                By clicking "Accept", you consent to our use of these technologies.
            </p>
            <button
                onClick={acceptCookies}
                className="bg-brand-action hover:bg-white hover:text-brand-action text-white px-6 py-2.5 rounded font-heading font-bold text-xs tracking-wider uppercase transition-colors shrink-0"
            >
                Accept
            </button>
        </div>
    );
}
