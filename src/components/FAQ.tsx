"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "코딩을 전혀 모르는데 수강할 수 있나요?",
        answer: "네, 물론입니다! 바이브코딩은 코딩 경험이 전혀 없는 분들을 위해 설계되었습니다. AI 도구를 활용하기 때문에 복잡한 문법을 외울 필요가 없고, 자연어로 원하는 것을 설명하면 코드가 생성됩니다. 실제 수강생의 70% 이상이 비전공자입니다.",
    },
    {
        question: "수업은 어떤 방식으로 진행되나요?",
        answer: "주 2회 실시간 라이브 강의(Zoom)와 녹화 영상 복습으로 진행됩니다. 매 수업마다 실습 과제가 주어지며, 커뮤니티에서 질문하면 24시간 이내 답변을 받을 수 있습니다. Pro/Premium 과정은 1:1 멘토링이 추가됩니다.",
    },
    {
        question: "4주 만에 정말 서비스를 만들 수 있나요?",
        answer: "네, 가능합니다. 이미 150개 이상의 프로젝트가 실제로 런칭되었습니다. AI 코딩 도구를 활용하면 전통적인 개발 방식보다 5~10배 빠르게 결과물을 만들 수 있습니다.",
    },
    {
        question: "어떤 도구와 기술을 사용하나요?",
        answer: "프론트엔드는 Next.js + Tailwind CSS, 백엔드는 Supabase, 배포는 Vercel을 사용합니다. AI 도구로는 Claude, GitHub Copilot 등 최신 AI 코딩 어시스턴트를 활용합니다.",
    },
    {
        question: "수강료 환불이 가능한가요?",
        answer: "수강 시작 후 7일 이내에는 100% 전액 환불이 가능합니다. 수강생 만족도가 97%에 달하지만, 만약 기대에 미치지 못하면 부담 없이 환불을 요청하실 수 있습니다.",
    },
    {
        question: "수료 후에도 지원을 받을 수 있나요?",
        answer: "네! 수료 후에도 커뮤니티에서 지속적으로 질문하고 네트워킹할 수 있습니다. Premium 과정은 취업/창업 연계 프로그램과 평생 콘텐츠 접근 권한이 포함됩니다.",
    },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border-b border-white/5"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-6 text-left gap-4 group"
            >
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-white/60 tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white font-bold text-sm sm:text-base uppercase tracking-tight group-hover:text-[#FF0000] transition-colors">
                        {question}
                    </span>
                </div>
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FF0000] text-xl flex-shrink-0 font-light"
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="pl-10 pb-6 text-sm text-white/80 leading-relaxed max-w-2xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section id="faq" className="relative py-24 sm:py-32">
            <div className="kinetic-divider mb-24" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0048BA] mb-4 block">
                        FAQ
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                        자주 묻는
                        <br />
                        <span className="text-[#FF0000]">질문</span>
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="border-t border-white/5">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
