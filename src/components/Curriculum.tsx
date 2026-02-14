"use client";

import { motion } from "framer-motion";

const weeks = [
    {
        week: "W1",
        title: "아이디어 → 기획",
        subtitle: "비즈니스 아이디어를 실현 가능한 기획으로",
        items: [
            "서비스 기획 & 사용자 분석",
            "Figma로 UI/UX 와이어프레임 설계",
            "AI 프롬프트 엔지니어링 기초",
            "개발 환경 셋업 (Node.js, VS Code, Git)",
        ],
        accent: "#FF0000",
    },
    {
        week: "W2",
        title: "프론트엔드 개발",
        subtitle: "Next.js와 Tailwind CSS로 화면 구현",
        items: [
            "Next.js App Router 핵심 개념",
            "Tailwind CSS로 반응형 디자인",
            "컴포넌트 기반 UI 개발",
            "AI 코딩 어시스턴트 200% 활용법",
        ],
        accent: "#0048BA",
    },
    {
        week: "W3",
        title: "백엔드 & DB",
        subtitle: "Supabase로 풀스택 서비스 완성",
        items: [
            "Supabase 데이터베이스 설계",
            "인증 & 사용자 관리 구현",
            "API 연동 (REST, Server Actions)",
            "실시간 데이터 처리",
        ],
        accent: "#FF0000",
    },
    {
        week: "W4",
        title: "배포 & 런칭",
        subtitle: "Vercel 배포와 실전 마케팅",
        items: [
            "Vercel 배포 & 커스텀 도메인 연결",
            "SEO 최적화 & 성능 튜닝",
            "Google Analytics 연동",
            "런칭 프로젝트 발표 & 피드백",
        ],
        accent: "#0048BA",
    },
];

export default function Curriculum() {
    return (
        <section id="curriculum" className="relative py-24 sm:py-32">
            <div className="kinetic-divider mb-24" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0048BA] mb-4 block">
                        Curriculum
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                        <span className="text-[#FF0000]">4주</span> 완성
                        <br />
                        로드맵
                    </h2>
                </motion.div>

                {/* Timeline Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5">
                    {weeks.map((week, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-black p-8 sm:p-10 group hover:bg-[#0A0A0A] transition-colors relative"
                        >
                            {/* Big week number */}
                            <span
                                className="text-[120px] font-black absolute -top-6 -right-2 leading-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity select-none"
                                style={{ color: week.accent }}
                            >
                                {week.week}
                            </span>

                            {/* Week badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-12 h-12 flex items-center justify-center text-white font-black text-xs tracking-tight"
                                    style={{ backgroundColor: week.accent }}
                                >
                                    {week.week}
                                </div>
                                <div className="h-[1px] flex-1 bg-white/10" />
                            </div>

                            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                                {week.title}
                            </h3>
                            <p className="text-xs text-white/70 uppercase tracking-[0.15em] mb-6">
                                {week.subtitle}
                            </p>

                            <ul className="space-y-3">
                                {week.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-white/80">
                                        <span
                                            className="w-1.5 h-1.5 mt-1.5 flex-shrink-0"
                                            style={{ backgroundColor: week.accent }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
