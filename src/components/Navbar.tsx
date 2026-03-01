"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
    { label: "특징", href: "#features" },
    { label: "커리큘럼", href: "#curriculum" },
    { label: "수강후기", href: "#testimonials" },
    { label: "수강료", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="테마 전환"
            id="theme-toggle-btn"
            className="relative w-14 h-7 rounded-full p-1 flex items-center transition-colors duration-300"
            style={{
                background: isDark
                    ? "linear-gradient(135deg, #1a1a2e, #16213e)"
                    : "linear-gradient(135deg, #f0c040, #ffd700)",
                border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
            }}
        >
            {/* Track icons */}
            <span className="absolute left-1.5 top-1/2 -translate-y-1/2 opacity-70">
                <Moon size={11} color={isDark ? "#7ca3f5" : "#aaa"} />
            </span>
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 opacity-70">
                <Sun size={11} color={isDark ? "#aaa" : "#ff8c00"} />
            </span>

            {/* Thumb */}
            <motion.div
                layout
                animate={{ x: isDark ? 0 : 28 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-5 h-5 rounded-full shadow-md flex items-center justify-center z-10"
                style={{
                    background: isDark
                        ? "linear-gradient(135deg, #4a6cf7, #7ca3f5)"
                        : "linear-gradient(135deg, #ff8c00, #ffd700)",
                }}
            >
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, rotate: -30 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 30 }}
                        >
                            <Moon size={10} color="#fff" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, rotate: 30 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -30 }}
                        >
                            <Sun size={10} color="#fff" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === "dark";

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
                ? "backdrop-blur-sm border-b"
                : "bg-transparent"
                }`}
            style={scrolled ? {
                background: "var(--nav-bg)",
                borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.07)",
            } : {}}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-[#FF0000] flex items-center justify-center text-white font-black text-xs tracking-tighter">
                            VC
                        </div>
                        <span
                            className="text-base font-black uppercase tracking-[0.2em]"
                            style={{ color: "var(--foreground)" }}
                        >
                            Vibe<span className="text-[#FF0000]">Coding</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="kinetic-underline text-xs font-bold uppercase tracking-[0.15em] transition-colors"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        <a
                            href="#cta"
                            className="kinetic-button text-xs px-6 py-2.5 relative"
                        >
                            <span>상담 신청</span>
                        </a>
                    </div>

                    {/* Mobile: Theme toggle + Hamburger */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2"
                            aria-label="메뉴 열기"
                            style={{ color: "var(--foreground)" }}
                        >
                            <div className="w-6 flex flex-col gap-1.5">
                                <motion.span
                                    animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="block h-[2px] w-full origin-center"
                                    style={{ background: "var(--foreground)" }}
                                />
                                <motion.span
                                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="block h-[2px] w-full"
                                    style={{ background: "var(--foreground)" }}
                                />
                                <motion.span
                                    animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    className="block h-[2px] w-full origin-center"
                                    style={{ background: "var(--foreground)" }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t"
                        style={{
                            background: "var(--surface)",
                            borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.07)",
                        }}
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
                                    className="block text-2xl font-black uppercase tracking-[0.1em] transition-colors py-3 border-b hover:text-[#FF0000]"
                                    style={{
                                        color: "var(--text-muted)",
                                        borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.07)",
                                    }}
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
