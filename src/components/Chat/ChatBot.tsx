"use client";

import { useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="relative"
                        >
                            <MessageCircle size={28} />
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-1 -right-1 w-3 h-3 bg-[#0048BA] rounded-full border-2 border-[#FF0000]"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-[380px] sm:w-[420px] max-h-[600px] h-[70vh] bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-white/10 bg-[#0A0A0A] flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm tracking-tight">바이브봇 (VibeBot)</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-white/50 text-[11px] uppercase tracking-wider font-bold">Online 어시스턴트</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide"
                        >
                            {messages.length === 0 && (
                                <div className="text-center py-10">
                                    <p className="text-white/40 text-sm">
                                        안녕하세요! BSD 바이브코딩입니다.<br />
                                        궁금하신 점을 물어보세요.
                                    </p>
                                </div>
                            )}

                            {messages.map((m: any) => (
                                <motion.div
                                    initial={{ opacity: 0, x: m.role === "user" ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={m.id}
                                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-white/10" : "bg-[#FF0000]"
                                            }`}>
                                            {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                                        </div>
                                        <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed ${m.role === "user"
                                            ? "bg-white text-black rounded-tr-none"
                                            : "bg-white/5 text-white/90 border border-white/10 rounded-tl-none"
                                            }`}>
                                            {m.content}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-3 rounded-2xl animate-pulse">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 bg-[#0A0A0A] border-t border-white/10">
                            <div className="relative">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="무엇이든 물어보세요..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#FF0000]/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FF0000] rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:grayscale transition-all"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
