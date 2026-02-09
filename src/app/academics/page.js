'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Baby, BookOpen, Microscope, Heart, Users2, Lightbulb, Sunrise, GraduationCap, Sparkles } from 'lucide-react';

export default function Academics() {
    const curriculum = [
        {
            title: "Early Childhood",
            sub: "Playgroup to KG",
            desc: "Focus on sensory learning, motor skills, and social interaction in a playful environment.",
            icon: Baby,
            gradient: "from-[#FF6B9D] to-[#B026FF]"
        },
        {
            title: "Primary Years",
            sub: "Class 1 to 5",
            desc: "Building strong foundations in language, mathematics, and environmental sciences.",
            icon: BookOpen,
            gradient: "from-[#00F5FF] to-[#4D7CFE]"
        },
        {
            title: "Middle School",
            sub: "Class 6 to 8",
            desc: "Advanced concepts, critical thinking, and preparation for higher academic challenges.",
            icon: Microscope,
            gradient: "from-[#00FF88] to-[#00F5FF]"
        }
    ];

    const programs = [
        { title: "Morning Assembly", icon: Sunrise, desc: "Prayer & Ethics", gradient: "from-[#FF6B35] to-[#FF6B9D]" },
        { title: "Yoga & Fitness", icon: Heart, desc: "Mind-Body Health", gradient: "from-[#B026FF] to-[#4D7CFE]" },
        { title: "Group Projects", icon: Users2, desc: "Collaboration", gradient: "from-[#00F5FF] to-[#00FF88]" },
        { title: "Remedial Care", icon: Lightbulb, desc: "Personal Support", gradient: "from-[#4D7CFE] to-[#B026FF]" }
    ];

    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-neon mb-6 inline-flex">
                            <GraduationCap className="w-4 h-4" />
                            Learning Excellence
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Academic <span className="text-holographic">Framework</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto">
                            Our curriculum blends traditional values with modern pedagogy for holistic development.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">

                {/* Curriculum Cards */}
                <section className="mb-24">
                    <div className="grid md:grid-cols-3 gap-8">
                        {curriculum.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <ScrollReveal key={item.title} delay={index * 100}>
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="glass-card p-10 h-full group"
                                    >
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-holographic transition-all">{item.title}</h3>
                                        <span className="text-sm font-semibold tracking-wide text-[#00F5FF] uppercase mb-4 block">{item.sub}</span>
                                        <p className="text-white/60 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </section>

                {/* Programs Grid (Bento Style) */}
                <section>
                    <div className="text-center mb-12">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold text-white">
                                Enrichment <span className="text-holographic">Programs</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {programs.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <ScrollReveal key={item.title} delay={index * 100}>
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        className="bento-item text-center py-10"
                                    >
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4`}>
                                            <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-white/50">{item.desc}</p>
                                    </motion.div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
