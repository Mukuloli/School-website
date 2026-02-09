'use client';
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles, Users, Award, Heart } from 'lucide-react';

export default function About() {
    const values = [
        { icon: Users, title: "Community", desc: "Building strong connections", color: "from-[#00F5FF] to-[#4D7CFE]" },
        { icon: Award, title: "Excellence", desc: "Striving for the best", color: "from-[#B026FF] to-[#FF6B9D]" },
        { icon: Heart, title: "Care", desc: "Nurturing with love", color: "from-[#00FF88] to-[#00F5FF]" },
    ];

    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-neon mb-6 inline-flex">
                            <Sparkles className="w-4 h-4" />
                            Our Story
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            About <span className="text-holographic">Us</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Nurturing Excellence, Character, and Community <br />
                            <span className="text-[#00F5FF] font-medium">Since 1991</span>
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-20 space-y-32">

                {/* Story Section - Split Layout */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <motion.div
                            whileHover={{ rotate: 2 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF] to-[#B026FF] rounded-[2rem] rotate-3 opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative glass-card p-2 overflow-hidden">
                                <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3]">
                                    <Image
                                        src="/images/classroom.png"
                                        alt="Darpan School Classroom"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating Stats Card */}
                                <div className="absolute bottom-6 left-6 right-6 glass-dark p-6 rounded-xl">
                                    <div className="flex justify-between items-center text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-holographic">30+</div>
                                            <div className="text-xs text-white/50 uppercase tracking-wider">Years</div>
                                        </div>
                                        <div className="w-px h-8 bg-white/10" />
                                        <div>
                                            <div className="text-2xl font-bold text-holographic">2000+</div>
                                            <div className="text-xs text-white/50 uppercase tracking-wider">Alumni</div>
                                        </div>
                                        <div className="w-px h-8 bg-white/10" />
                                        <div>
                                            <div className="text-2xl font-bold text-holographic">100%</div>
                                            <div className="text-xs text-white/50 uppercase tracking-wider">Dedication</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="space-y-8">
                            <div>
                                <span className="text-[#00F5FF] font-bold tracking-widest text-sm uppercase mb-4 block">Our History</span>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                                    From Humble Beginnings to <span className="text-holographic">Educational Leadership</span>
                                </h2>
                            </div>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Darpan Children Garden School was established in <strong className="text-white">July 1991</strong> with a clear vision: to value every child. Starting with just six students and one teacher, we have grown into one of Haldwani's most respected institutions.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Our journey is defined by a relentless commitment to academic standards and moral values, creating an environment where students don't just learn, but thrive.
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                {/* Values Section */}
                <section>
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold text-white">Our Core <span className="text-holographic">Values</span></h2>
                        </ScrollReveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <ScrollReveal key={value.title} delay={index * 100}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="clay-card p-8 text-center h-full"
                                >
                                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                                        <value.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-white/50">{value.desc}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Vision & Mission - Glass Cards */}
                <section className="grid md:grid-cols-2 gap-8">
                    <ScrollReveal delay={100}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-10 h-full group"
                        >
                            <div className="icon-box mb-6 bg-gradient-to-br from-[#00F5FF] to-[#4D7CFE]">
                                <Eye className="w-7 h-7 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-holographic transition-all">Our Vision</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                To empower every student with confidence, knowledge, values, and life skills for a bright future. We envision a community of lifelong learners who lead with integrity.
                            </p>
                        </motion.div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-10 h-full group"
                        >
                            <div className="icon-box mb-6 bg-gradient-to-br from-[#B026FF] to-[#FF6B9D]">
                                <Target className="w-7 h-7 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-holographic transition-all">Our Mission</h3>
                            <ul className="space-y-4 text-white/60 text-lg">
                                <li className="flex gap-3 items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#B026FF]" />
                                    Provide quality education in a safe, caring environment.
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#B026FF]" />
                                    Encourage creativity, discipline & critical thinking.
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#B026FF]" />
                                    Engage families as partners in the learning journey.
                                </li>
                            </ul>
                        </motion.div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
}
