'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Sparkles } from 'lucide-react';

export default function Achievers() {
    const categories = [
        {
            title: "Academic Toppers",
            icon: Medal,
            desc: "Board Exam Merits",
            gradient: "from-[#FF6B35] to-[#FF6B9D]"
        },
        {
            title: "Sports Champions",
            icon: Trophy,
            desc: "District & State Level",
            gradient: "from-[#00FF88] to-[#00F5FF]"
        },
        {
            title: "Cultural Stars",
            icon: Star,
            desc: "Art, Music & Dance",
            gradient: "from-[#B026FF] to-[#FF6B9D]"
        },
    ];

    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-glow mb-6 inline-flex">
                            <Trophy className="w-4 h-4" />
                            Hall of Fame
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Our <span className="text-holographic">Achievers</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60">Celebrating Student Excellence</p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <ScrollReveal key={cat.title} delay={i * 100}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass-card p-10 h-full flex flex-col items-center text-center group"
                            >
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                                >
                                    <cat.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-holographic transition-all">
                                    {cat.title}
                                </h3>
                                <p className="text-white/50 font-medium mb-8">{cat.desc}</p>

                                <div className="w-full glass-dark rounded-xl p-6 mt-auto">
                                    <p className="text-white/40 italic text-sm">
                                        "List of recent achievers will be updated for the current academic session."
                                    </p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
