"use client";

import { motion } from "framer-motion";

const plans = [
    {
        name: "BASIC",
        price: "49",
        unit: "만원",
        originalPrice: "79만원",
        period: "4주",
        description: "바이브코딩 입문자를 위한 기본 과정",
        features: [
            "주 2회 라이브 강의 (총 8회)",
            "녹화 강의 무제한 복습",
            "커뮤니티 Q&A 참여",
            "수료증 발급",
            "기본 프로젝트 템플릿",
        ],
        excluded: ["1:1 멘토링", "취업/창업 연계"],
        popular: false,
        accent: "#FFFFFF",
    },
    {
        name: "PRO",
        price: "89",
        unit: "만원",
        originalPrice: "129만원",
        period: "4주",
        description: "가장 인기 있는 과정, 1:1 멘토링 포함",
        features: [
            "주 2회 라이브 강의 (총 8회)",
            "녹화 강의 무제한 복습",
            "커뮤니티 Q&A 참여",
            "수료증 발급",
            "프리미엄 프로젝트 템플릿",
            "주 1회 1:1 멘토링 (30분)",
            "코드 리뷰 피드백",
            "3개월 커뮤니티 무료",
        ],
        excluded: [],
        popular: true,
        accent: "#FF0000",
    },
    {
        name: "PREMIUM",
        price: "149",
        unit: "만원",
        originalPrice: "199만원",
        period: "4주+4주",
        description: "취업/창업까지 끝장 케어",
        features: [
            "Pro 과정 전체 포함",
            "주 2회 1:1 멘토링 (60분)",
            "포트폴리오 완성 코칭",
            "이력서 & 면접 컨설팅",
            "취업/창업 연계 프로그램",
            "6개월 커뮤니티 무료",
            "졸업 후 네트워킹 초대",
            "평생 강의 콘텐츠 접근",
        ],
        excluded: [],
        popular: false,
        accent: "#0048BA",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-24 sm:py-32">
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
                        Pricing
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                        나에게 맞는
                        <br />
                        <span className="text-[#FF0000]">플랜</span> 선택
                    </h2>
                    <p className="text-sm text-white/70 mt-6 uppercase tracking-[0.1em]">
                        모든 플랜 <span className="text-[#FF0000] font-bold">얼리버드 할인</span> 적용 중
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5"
                >
                    {plans.map((plan, i) => (
                        <motion.div key={i} variants={cardVariants} className="flex">
                            <div className="bg-black p-8 sm:p-10 flex flex-col w-full relative group hover:bg-[#0A0A0A] transition-colors">
                                {plan.popular && (
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF0000]" />
                                )}

                                {/* Plan label */}
                                <div className="flex items-center justify-between mb-8">
                                    <span
                                        className="text-xs font-black uppercase tracking-[0.3em]"
                                        style={{ color: plan.accent }}
                                    >
                                        {plan.name}
                                    </span>
                                    {plan.popular && (
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-[#FF0000] text-white px-3 py-1">
                                            인기
                                        </span>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="mb-2">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter">
                                            {plan.price}
                                        </span>
                                        <span className="text-lg font-bold text-white/70">
                                            {plan.unit}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs text-white/60 line-through">
                                            {plan.originalPrice}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-widest text-white/60">
                                            / {plan.period}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs text-white/60 mb-8">{plan.description}</p>

                                <div className="w-full h-[1px] bg-white/5 mb-6" />

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-2.5 text-sm">
                                            <span className="text-[#FF0000] mt-0.5 flex-shrink-0 text-xs">■</span>
                                            <span className="text-white/80">{f}</span>
                                        </li>
                                    ))}
                                    {plan.excluded.map((f, j) => (
                                        <li key={`ex-${j}`} className="flex items-start gap-2.5 text-sm">
                                            <span className="text-white/40 mt-0.5 flex-shrink-0 text-xs">□</span>
                                            <span className="text-white/50 line-through">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#cta"
                                    className={`block text-center py-4 font-bold text-sm uppercase tracking-[0.15em] transition-all relative overflow-hidden ${plan.popular
                                        ? "kinetic-button"
                                        : "border border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                                        }`}
                                >
                                    <span className="relative z-10">선택하기</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Guarantee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <span className="text-xs text-white/60 uppercase tracking-[0.15em]">
                        수강 시작 후 7일 이내{" "}
                        <span className="text-white/80 font-bold">100% 환불 보장</span>
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
