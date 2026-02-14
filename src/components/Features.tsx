"use client";

import { motion } from "framer-motion";

const features = [
    {
        number: "01",
        title: "AI가 코딩 파트너",
        description: "Claude, GPT 등 최신 AI를 활용해 코드를 작성합니다. 여러분은 아이디어만 말하면 됩니다.",
        accent: "#FF0000",
    },
    {
        number: "02",
        title: "4주 완성 커리큘럼",
        description: "체계적인 4주 커리큘럼으로 기획부터 배포까지. 매주 실전 프로젝트를 완성합니다.",
        accent: "#0048BA",
    },
    {
        number: "03",
        title: "실전 프로젝트 중심",
        description: "이론만 배우는 강의는 그만! 실제 서비스를 만들고 배포해서 포트폴리오를 완성하세요.",
        accent: "#FF0000",
    },
    {
        number: "04",
        title: "1:1 멘토링",
        description: "현직 개발자 멘토가 1:1로 코드 리뷰하고 피드백합니다. 혼자 고민하지 마세요.",
        accent: "#0048BA",
    },
    {
        number: "05",
        title: "Next.js + Vercel",
        description: "최신 기술 스택으로 SEO 최적화된 웹사이트를 만들고, Vercel로 전 세계에 배포합니다.",
        accent: "#FF0000",
    },
    {
        number: "06",
        title: "취업 · 창업 연계",
        description: "수강 후 취업 추천 및 창업 컨설팅을 제공합니다. 당신의 커리어를 함께 설계합니다.",
        accent: "#0048BA",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
    return (
        <section id="features" className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF0000] mb-4 block">
                        Why Vibe Coding
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                        왜{" "}
                        <span className="text-[#FF0000]">바이브코딩</span>
                        <br />
                        인가요?
                    </h2>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5"
                >
                    {features.map((feature, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <div className="bg-black p-8 sm:p-10 h-full group cursor-default hover:bg-[#0A0A0A] transition-colors relative overflow-hidden">
                                {/* Number */}
                                <span
                                    className="text-[80px] font-black absolute -top-4 -right-2 leading-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                                    style={{ color: feature.accent }}
                                >
                                    {feature.number}
                                </span>

                                {/* Top line accent */}
                                <div
                                    className="w-8 h-[3px] mb-6 transition-all duration-300 group-hover:w-16"
                                    style={{ backgroundColor: feature.accent }}
                                />

                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-4 block">
                                    {feature.number}
                                </span>
                                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#FF0000] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
