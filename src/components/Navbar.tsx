"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "특징", href: "#features" },
    { label: "커리큘럼", href: "#curriculum" },
    { label: "수강후기", href: "#testimonials" },
    { label: "수강료", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-black/90 backdrop-blur-sm border-b border-white/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-[#FF0000] flex items-center justify-center text-white font-black text-xs tracking-tighter">
                            VC
                        </div>
                        <span className="text-base font-black uppercase tracking-[0.2em] text-white">
                            Vibe<span className="text-[#FF0000]">Coding</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="kinetic-underline text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#cta"
                            className="kinetic-button text-xs px-6 py-2.5 relative"
                        >
                            <span>상담 신청</span>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="메뉴 열기"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <motion.span
                                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="block h-[2px] bg-white w-full origin-center"
                            />
                            <motion.span
                                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="block h-[2px] bg-white w-full"
                            />
                            <motion.span
                                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="block h-[2px] bg-white w-full origin-center"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-t border-white/5"
                    >
                        <div className="px-4 py-8 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="block text-2xl font-black uppercase tracking-[0.1em] text-white/80 hover:text-[#FF0000] transition-colors py-3 border-b border-white/5"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="#cta"
                                onClick={() => setMobileOpen(false)}
                                className="block text-center kinetic-button text-sm px-5 py-4 mt-6 relative"
                            >
                                <span>상담 신청</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
