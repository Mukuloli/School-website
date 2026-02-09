'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Music, Trophy, Palette, FlaskConical } from 'lucide-react';

export default function Events() {
    const events = [
        { icon: Calendar, title: "Annual Day", desc: "Grand celebration of achievements", gradient: "from-[#00F5FF] to-[#4D7CFE]" },
        { icon: Trophy, title: "Sports Meet", desc: "Athletic excellence showcase", gradient: "from-[#00FF88] to-[#00F5FF]" },
        { icon: FlaskConical, title: "Science Exhibition", desc: "Innovation and discovery", gradient: "from-[#B026FF] to-[#FF6B9D]" },
        { icon: Music, title: "Cultural Fest", desc: "Art, music, and dance", gradient: "from-[#FF6B9D] to-[#FF6B35]" },
        { icon: Palette, title: "Art Workshop", desc: "Creative expression", gradient: "from-[#4D7CFE] to-[#B026FF]" },
    ];

    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-glow mb-6 inline-flex">
                            <Sparkles className="w-4 h-4" />
                            Life at Darpan
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Events & <span className="text-holographic">Celebrations</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Beyond classrooms, we celebrate talent, culture, and achievements.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">
                {/* Featured Event Card */}
                <ScrollReveal>
                    <div className="glass-card overflow-hidden grid lg:grid-cols-2 mb-16">
                        {/* Visual Side */}
                        <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#B026FF]/30 to-[#00F5FF]/30" />
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-br from-[#B026FF]/20 to-[#00F5FF]/20"
                            />
                            <div className="relative z-10 text-center">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-24 h-24 glass-dark rounded-3xl flex items-center justify-center mx-auto mb-6"
                                >
                                    <Sparkles className="w-12 h-12 text-[#00F5FF]" strokeWidth={1.5} />
                                </motion.div>
                                <div className="badge-glow">
                                    Annual Function 2026
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <span className="text-[#00F5FF] font-bold tracking-widest text-sm uppercase mb-4">Highlights</span>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Celebrating <span className="text-holographic">Talent & Culture</span>
                            </h2>
                            <p className="text-lg text-white/60 leading-relaxed mb-8">
                                Beyond the classroom, Darpan School comes alive with colors and joy during our annual cultural fests, sports meets, and art exhibitions. These events are crucial for personality development and team building.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Events Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {events.map((event, index) => (
                        <ScrollReveal key={event.title} delay={index * 100}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bento-item text-center py-8 group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <event.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-white mb-1 group-hover:text-holographic transition-all">{event.title}</h3>
                                <p className="text-sm text-white/50">{event.desc}</p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
