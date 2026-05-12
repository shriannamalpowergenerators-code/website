"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ onQuote, variant = "dark" }: { onQuote?: () => void; variant?: "light" | "dark" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/#inventory" },
        { name: "Gallery", href: "/gallery" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                : "bg-white shadow-sm py-4"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 md:gap-3 group max-w-[75%] sm:max-w-none">
                    <div className="w-[45px] md:w-16 h-auto flex items-center justify-center shrink-0">
                        <img src="/images/sapgen logo.png" alt="Logo" className="w-full object-contain" />
                    </div>
                    <div className="flex flex-col whitespace-normal">
                        <span className="font-heading font-black text-[12px] sm:text-[18px] md:text-2xl leading-[1.2] transition-colors text-brand-enterprise tracking-tight">
                            SHRI ANNAMALAI POWER GENERATORS
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-sans font-medium transition-colors text-sm uppercase tracking-wide text-brand-enterprise hover:text-brand-action"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Action */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={onQuote ? onQuote : () => { window.location.href = '/#inventory' }}
                        className="px-6 py-2.5 rounded-sm font-heading font-bold text-sm tracking-wide transition-all transform hover:scale-105 shadow-lg bg-brand-action text-white hover:bg-brand-enterprise shadow-brand-action/20"
                    >
                        GET QUOTE
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden transition-colors text-brand-enterprise"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="py-3 font-sans font-semibold text-brand-enterprise border-b border-gray-50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            if (onQuote) onQuote();
                            else window.location.href = '/#inventory';
                            setIsMobileMenuOpen(false);
                        }}
                        className="mt-4 bg-brand-action text-white px-6 py-3 rounded-sm font-heading font-bold text-center"
                    >
                        GET QUOTE
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
