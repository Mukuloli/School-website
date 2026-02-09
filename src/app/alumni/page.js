'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { GraduationCap, Users, Network } from 'lucide-react';

export default function Alumni() {
    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-neon mb-6 inline-flex">
                            <Network className="w-4 h-4" />
                            Our Network
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            <span className="text-holographic">Alumni</span> Stories
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60">Connecting Generations of Excellence</p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 pb-24">
                <ScrollReveal>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="glass-card p-16 text-center relative overflow-hidden"
                    >
                        {/* Neural Pattern */}
                        <div className="absolute inset-0 neural-bg opacity-20" />

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-24 h-24 bg-gradient-to-br from-[#00F5FF] to-[#B026FF] rounded-2xl flex items-center justify-center mb-8 mx-auto"
                        >
                            <GraduationCap className="w-12 h-12 text-white" strokeWidth={1.5} />
                        </motion.div>

                        <h2 className="text-3xl font-bold text-white mb-6">
                            Darpan <span className="text-holographic">Alumni Association</span>
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
                            Our students have gone on to achieve excellence in engineering, medicine, arts, and public service. We are in the process of digitizing our alumni database to showcase their inspiring journeys.
                        </p>

                        <div className="glass-dark rounded-xl p-6 inline-block">
                            <p className="text-white/50 font-medium italic">
                                "Stay tuned for featured alumni profiles."
                            </p>
                        </div>

                        {/* Stats Preview */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5">
                            {[
                                { value: "2000+", label: "Alumni" },
                                { value: "30+", label: "Years" },
                                { value: "100+", label: "Success Stories" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-holographic">{stat.value}</div>
                                    <div className="text-sm text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </div>
    );
}
