"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Force scroll to top on path change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-[96px] right-6 z-[60] bg-brand-enterprise text-white p-3.5 rounded-full shadow-2xl hover:bg-brand-action transition-all transform hover:scale-110 flex items-center justify-center group"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
