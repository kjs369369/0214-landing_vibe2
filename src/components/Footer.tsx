"use client";

export default function Footer() {
    return (
        <footer className="relative py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-[#FF0000] flex items-center justify-center text-white font-black text-xs">
                                VC
                            </div>
                            <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
                                Vibe<span className="text-[#FF0000]">Coding</span>
                            </span>
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed max-w-sm mb-6">
                            비전공자도 AI와 함께 4주 만에 나만의 서비스를 런칭할 수 있는
                            실전 코딩 교육 프로그램입니다.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4">
                            바로가기
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: "특징", href: "#features" },
                                { label: "커리큘럼", href: "#curriculum" },
                                { label: "수강후기", href: "#testimonials" },
                                { label: "수강료", href: "#pricing" },
                                { label: "FAQ", href: "#faq" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}
                                        className="text-xs text-white/50 hover:text-[#FF0000] transition-colors uppercase tracking-[0.1em]">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4">
                            문의
                        </h4>
                        <ul className="space-y-2 text-xs text-white/50">
                            <li>hello@vibecoding.kr</li>
                            <li>02-1234-5678</li>
                            <li>카카오톡: @바이브코딩</li>
                            <li className="pt-2 text-[10px] text-white/30 uppercase tracking-widest">
                                평일 10:00–18:00
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
                        © 2026 BSD 바이브코딩 센터
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] text-white/40 hover:text-white/70 transition-colors uppercase tracking-[0.1em]">
                            개인정보처리방침
                        </a>
                        <a href="#" className="text-[10px] text-white/40 hover:text-white/70 transition-colors uppercase tracking-[0.1em]">
                            이용약관
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
