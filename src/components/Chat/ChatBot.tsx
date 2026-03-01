"use client";

import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
        api: "/api/chat",
        onError: (err) => {
            console.error("Chat error:", err);
        },
    });
    const scrollRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const isDark = theme === "dark";

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
                id="chatbot-toggle"
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
                        className="absolute bottom-20 right-0 w-[380px] sm:w-[420px] max-h-[600px] h-[70vh] border rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        style={{
                            background: "var(--chat-window-bg)",
                            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                        }}
                    >
                        {/* Header */}
                        <div
                            className="p-5 border-b flex items-center gap-3"
                            style={{
                                background: "var(--chat-header-bg)",
                                borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                            }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <div>
                                <h3
                                    className="font-bold text-sm tracking-tight"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    바이브봇 (VibeBot)
                                </h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span
                                        className="text-[11px] uppercase tracking-wider font-bold"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        Online 어시스턴트
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide"
                        >
                            {messages.length === 0 && !error && (
                                <div className="text-center py-10">
                                    <p
                                        className="text-sm"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        안녕하세요! BSD 바이브코딩입니다.<br />
                                        궁금하신 점을 물어보세요.
                                    </p>
                                </div>
                            )}

                            {error && (
                                <div className="text-center py-4 px-3 rounded-xl" style={{ background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.2)" }}>
                                    <p className="text-sm text-red-400">
                                        ⚠️ 연결 오류가 발생했습니다.<br />
                                        잠시 후 다시 시도해주세요.
                                    </p>
                                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                                        {error.message}
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
                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.role === "user" ? "" : "bg-[#FF0000]"}`}
                                            style={m.role === "user" ? { background: "var(--surface-light)" } : {}}
                                        >
                                            {m.role === "user"
                                                ? <User size={16} style={{ color: "var(--foreground)" }} />
                                                : <Bot size={16} className="text-white" />
                                            }
                                        </div>
                                        <div
                                            className="p-3.5 rounded-2xl text-[13px] leading-relaxed"
                                            style={m.role === "user" ? {
                                                background: "var(--chat-msg-user-bg)",
                                                color: "var(--chat-msg-user-color)",
                                                borderRadius: "1rem 0.25rem 1rem 1rem",
                                            } : {
                                                background: "var(--chat-msg-bot-bg)",
                                                color: "var(--chat-msg-bot-color)",
                                                border: "1px solid var(--chat-msg-bot-border)",
                                                borderRadius: "0.25rem 1rem 1rem 1rem",
                                            }}
                                        >
                                            {m.content}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div
                                        className="p-3 rounded-2xl"
                                        style={{ background: "var(--chat-msg-bot-bg)" }}
                                    >
                                        <div className="flex gap-1.5 items-center">
                                            {[0, 0.2, 0.4].map((delay, i) => (
                                                <motion.span
                                                    key={i}
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.8, delay }}
                                                    className="block w-2 h-2 rounded-full bg-[#FF0000]"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form
                            onSubmit={handleSubmit}
                            className="p-4 border-t"
                            style={{
                                background: "var(--chat-input-bg)",
                                borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                            }}
                        >
                            <div className="relative">
                                <input
                                    id="chatbot-input"
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="무엇이든 물어보세요..."
                                    className="w-full rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none transition-colors"
                                    style={{
                                        background: "var(--input-bg)",
                                        border: "1px solid var(--input-border)",
                                        color: "var(--foreground)",
                                    }}
                                />
                                <button
                                    type="submit"
                                    id="chatbot-send"
                                    disabled={!input || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FF0000] rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:grayscale transition-all hover:bg-[#CC0000]"
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
