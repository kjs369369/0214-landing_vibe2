"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "김민수",
        role: "전직 마케터 → 프리랜서 개발자",
        content: "마케팅만 10년 했는데, 바이브코딩으로 첫 웹서비스를 만들었어요. 지금은 프리랜서 개발자로 활동 중입니다. 인생이 바뀌었어요!",
    },
    {
        name: "이서연",
        role: "대학생 → 스타트업 공동창업",
        content: "수업에서 만든 프로젝트가 실제 스타트업이 되었어요. 4주 만에 MVP를 만들고 투자까지 받았습니다.",
    },
    {
        name: "박정환",
        role: "직장인 → 사이드 프로젝트 런칭",
        content: "회사 다니면서 저녁에 수업 들었는데, 진짜 4주 만에 서비스를 배포했습니다. AI 코딩이 이렇게 강력한 줄 몰랐어요.",
    },
    {
        name: "최유진",
        role: "디자이너 → 풀스택 제품 제작",
        content: "디자인만 할 줄 알았는데 이제는 디자인부터 개발·배포까지 혼자 다 합니다. 역량이 확장됐어요.",
    },
    {
        name: "장태영",
        role: "40대 직장인 → 커리어 전환 준비",
        content: "나이가 걸림돌이 될까 걱정했는데, AI 덕분에 코딩이 정말 쉬워졌어요. 멘토님 피드백도 정말 좋았습니다.",
    },
    {
        name: "한소희",
        role: "주부 → 온라인 쇼핑몰 오픈",
        content: "아이 키우면서 짬짬이 들었는데, 결국 제 쇼핑몰을 만들어서 운영 중이에요. 상상도 못 했던 일!",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 sm:py-32">
            <div className="kinetic-divider mb-24" />

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
                        Testimonials
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                        수강생들의
                        <br />
                        <span className="text-[#FF0000]">리얼</span> 후기
                    </h2>
                </motion.div>

                {/* Testimonial Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5"
                >
                    {testimonials.map((t, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <div className="bg-black p-8 h-full flex flex-col group hover:bg-[#0A0A0A] transition-colors relative">
                                {/* Quote mark */}
                                <span className="text-[80px] font-black text-[#FF0000] opacity-10 absolute top-2 right-6 leading-none select-none">
                                    &ldquo;
                                </span>

                                <p className="text-white/90 leading-relaxed mb-8 flex-1 text-sm relative z-10">
                                    {t.content}
                                </p>

                                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white/70">
                                        {t.name.substring(0, 1)}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{t.name}</p>
                                        <p className="text-white/60 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
