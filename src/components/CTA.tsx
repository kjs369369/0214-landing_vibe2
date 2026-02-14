"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", interest: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    return (
        <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
            <div className="kinetic-divider mb-24" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    {!submitted ? (
                        <>
                            <div className="mb-12">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF0000] mb-4 block">
                                    Apply Now
                                </span>
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6">
                                    무료 상담
                                    <br />
                                    <span className="text-[#FF0000]">신청하기</span>
                                </h2>
                                <p className="text-sm text-white/70 max-w-md">
                                    궁금한 점이 있으시면 편하게 상담 신청해 주세요.
                                    전문 상담사가 1:1로 맞춤 안내를 해드립니다.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-[1px] bg-white/5">
                                <div className="bg-black p-0">
                                    <input type="text" required placeholder="이름" value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-transparent border-0 px-6 py-5 text-white text-sm placeholder:text-white/50 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs focus:outline-none focus:bg-white/[0.02] transition-colors" />
                                </div>
                                <div className="bg-black p-0">
                                    <input type="tel" required placeholder="연락처" value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-transparent border-0 px-6 py-5 text-white text-sm placeholder:text-white/50 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs focus:outline-none focus:bg-white/[0.02] transition-colors" />
                                </div>
                                <div className="bg-black p-0">
                                    <input type="email" required placeholder="이메일" value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-transparent border-0 px-6 py-5 text-white text-sm placeholder:text-white/50 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs focus:outline-none focus:bg-white/[0.02] transition-colors" />
                                </div>
                                <div className="bg-black p-0">
                                    <select value={formData.interest}
                                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                        className="w-full bg-transparent border-0 px-6 py-5 text-white text-sm focus:outline-none focus:bg-white/[0.02] transition-colors appearance-none cursor-pointer"
                                        style={{ color: formData.interest ? '#FFFFFF' : 'rgba(255,255,255,0.5)' }}>
                                        <option value="" className="bg-black text-white/20">과정 선택</option>
                                        <option value="basic" className="bg-black text-white">BASIC — 49만원</option>
                                        <option value="pro" className="bg-black text-white">PRO — 89만원 (추천)</option>
                                        <option value="premium" className="bg-black text-white">PREMIUM — 149만원</option>
                                        <option value="undecided" className="bg-black text-white">아직 고민 중</option>
                                    </select>
                                </div>

                                <div className="bg-black pt-4">
                                    <button type="submit" className="kinetic-button w-full text-sm py-5 uppercase tracking-[0.2em] font-black relative">
                                        <span>무료 상담 신청</span>
                                    </button>
                                </div>
                            </form>

                            <p className="text-center text-[10px] text-white/50 mt-6 uppercase tracking-[0.2em]">
                                상담 신청은 무료 · 강제 등록 없음
                            </p>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 bg-[#FF0000] flex items-center justify-center mx-auto mb-8">
                                <span className="text-white text-2xl font-black">✓</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white mb-4">
                                신청 완료
                            </h3>
                            <p className="text-sm text-white/70 max-w-sm mx-auto mb-8">
                                24시간 이내에 전문 상담사가 연락드리겠습니다.
                                <br />바이브코딩과 함께 멋진 여정을 시작하세요.
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#FF0000]/30 text-[#FF0000] text-xs font-bold uppercase tracking-[0.2em]">
                                <span className="w-2 h-2 bg-[#FF0000]" />
                                접수 완료
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
