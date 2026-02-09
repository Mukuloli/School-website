'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Users, Award, Quote } from 'lucide-react';

export default function Leadership() {
    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-neon mb-6 inline-flex">
                            <Users className="w-4 h-4" />
                            Our Leaders
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            <span className="text-holographic">Leadership</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60">Guiding Lights of Darpan School</p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 pb-24 space-y-16">

                {/* Principal Card */}
                <ScrollReveal>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden"
                    >
                        {/* Gradient Top Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F5FF] to-[#B026FF]" />

                        {/* Image Placeholder */}
                        <div className="relative shrink-0">
                            <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-[#00F5FF]/20 to-[#B026FF]/20 rounded-full border-4 border-white/10 overflow-hidden flex items-center justify-center">
                                <Users className="w-24 h-24 text-white/20" />
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-[#00F5FF] to-[#B026FF] rounded-full flex items-center justify-center shadow-lg"
                            >
                                <Quote className="w-5 h-5 text-white" />
                            </motion.div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <span className="badge-neon mb-6 inline-flex">Founder & Principal</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Smt. Meenakshi Joshi</h2>
                            <p className="text-[#00F5FF] text-lg italic mb-8">Visionary Educator & Award Recipient</p>

                            <p className="text-lg text-white/60 leading-relaxed mb-6">
                                "Education is not just about filling a bucket, but lighting a fire. At Darpan, we strive to ignite that spark in every child."
                            </p>

                            <div className="glass-dark p-6 rounded-xl">
                                <p className="text-white/50 leading-relaxed">
                                    With decades of experience and efficiency awards from the U.P. Government, Smt. Joshi has relentlessly focused on high academic standards and child-centric learning since 1991.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>

                {/* Chairman Card */}
                <ScrollReveal delay={200}>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="glass-card p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12 items-center relative overflow-hidden"
                    >
                        {/* Gradient Top Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B026FF] to-[#FF6B9D]" />

                        {/* Image Placeholder */}
                        <div className="relative shrink-0">
                            <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-[#B026FF]/20 to-[#FF6B9D]/20 rounded-full border-4 border-white/10 overflow-hidden flex items-center justify-center">
                                <Award className="w-24 h-24 text-white/20" />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex justify-center md:justify-start">
                                <span className="badge-glow mb-6 inline-flex">Chairman</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Sri Girish Chandra Joshi</h2>
                            <p className="text-[#B026FF] text-lg italic mb-8">M.A., B.Ed. | Distinguished Mentor</p>

                            <p className="text-lg text-white/60 leading-relaxed">
                                A pillar of strength for the institution, Sri Girish Chandra Joshi brings a wealth of educational experience. He has been instrumental in guiding the school's growth, ensuring that we remain true to our core values while adapting to modern educational needs.
                            </p>
                        </div>
                    </motion.div>
                </ScrollReveal>

            </div>
        </div>
    );
}
