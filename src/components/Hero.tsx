"use client";

import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const stats = [
    { number: "2,847+", label: "수강생" },
    { number: "97%", label: "만족도" },
    { number: "4주", label: "완성" },
    { number: "150+", label: "런칭" },
];

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen bg-black">
            {/* Spline + Spotlight Hero Card */}
            <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="#FF0000"
                />
                <Spotlight
                    className="-top-40 right-0 md:right-40 md:-top-20"
                    fill="#0048BA"
                />

                <div className="flex flex-col lg:flex-row min-h-screen">
                    {/* Left content — Kinetic Typography */}
                    <div className="lg:w-[45%] w-full relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-28 lg:pt-0 pb-8 lg:pb-0">

                        {/* Headline */}
                        <div className="mb-8 overflow-hidden">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[1.15] text-white">
                                    비전공자도
                                </span>
                            </motion.div>
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[1.15] text-[#FF0000]">
                                    4주 만에
                                </span>
                            </motion.div>
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[1.15] text-white">
                                    서비스 <span className="text-[#0048BA]">런칭</span>
                                </span>
                            </motion.div>
                        </div>

                        {/* Sub copy */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-base sm:text-lg text-white/80 max-w-lg mb-10 leading-relaxed font-light"
                        >
                            코딩 경험 <span className="text-white font-semibold">ZERO</span>.{" "}
                            AI와 함께하는{" "}
                            <span className="text-[#FF0000] font-bold">바이브코딩</span>으로
                            <br className="hidden sm:block" />
                            아이디어를 실제 서비스로 만드세요.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.75 }}
                            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
                        >
                            <a
                                href="#cta"
                                className="kinetic-button text-base px-10 py-4 w-full sm:w-auto text-center relative"
                            >
                                <span>무료 상담 신청</span>
                            </a>
                            <a
                                href="#curriculum"
                                className="kinetic-button-outline text-sm px-8 py-4 w-full sm:w-auto text-center flex items-center justify-center gap-2"
                            >
                                커리큘럼 보기
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="grid grid-cols-4 gap-0 max-w-md border border-white/10"
                        >
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className={`text-center py-5 ${i < 3 ? "border-r border-white/10" : ""}`}
                                >
                                    <div className="text-xl sm:text-2xl font-black text-[#FF0000] mb-1 tracking-tight">
                                        {stat.number}
                                    </div>
                                    <div className="text-[9px] uppercase tracking-[0.3em] text-white/70 font-bold">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right content — Spline 3D */}
                    <div className="lg:w-[55%] w-full relative min-h-[400px] lg:min-h-0">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                        {/* Gradient overlay from left to blend with text */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none lg:block hidden" />
                        {/* Gradient overlay from bottom on mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none lg:hidden" />
                    </div>
                </div>
            </Card>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );
}
