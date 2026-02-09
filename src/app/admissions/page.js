'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Phone, MapPin, Sparkles, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

export default function Admissions() {
    const feeStructure = [
        { level: "Pre-Primary", grade: "Nursery - KG", tuition: "₹18,000", term: "per term", annual: "₹54,000/year" },
        { level: "Primary", grade: "Class 1 - 5", tuition: "₹22,000", term: "per term", annual: "₹66,000/year" },
        { level: "Upper Primary", grade: "Class 6 - 8", tuition: "₹25,000", term: "per term", annual: "₹75,000/year" }
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
                            Admissions 2026-27
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Join the <span className="text-holographic">Future</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Build a foundation for life. Join the Darpan family.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 pb-24 space-y-12">

                {/* Main CTA Card */}
                <ScrollReveal>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="relative overflow-hidden rounded-[2rem] p-12 text-center"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/20 via-[#B026FF]/10 to-[#FF6B9D]/20" />
                        <div className="absolute inset-0 glass-dark" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Admissions Open for <span className="text-holographic">2026-27</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                We invite parents to visit our campus, meet our faculty, and understand our child-centric approach. Limited seats available for Pre-primary to Class 8.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:09910288492" className="btn-neon">
                                    <Phone className="w-5 h-5" />
                                    Call 099102 88492
                                </a>
                                <Link href="/contact" className="btn-glass">
                                    <MapPin className="w-5 h-5" />
                                    Visit Campus
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>

                {/* Fees Table */}
                <ScrollReveal delay={200}>
                    <div className="glass-card overflow-hidden">
                        <div className="p-8 border-b border-white/5 flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Fee Structure</h2>
                                <span className="text-white/50 text-sm">Academic Session 2026-27</span>
                            </div>
                            <div className="icon-box bg-gradient-to-br from-[#00F5FF] to-[#4D7CFE]">
                                <CreditCard className="w-6 h-6 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="divide-y divide-white/5">
                            {feeStructure.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                                    className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 gap-4"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-white mb-1">{item.level}</h3>
                                        <p className="text-white/50 text-sm">{item.grade}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-holographic">{item.tuition}</span>
                                            <span className="text-sm text-white/40">{item.term}</span>
                                        </div>
                                        <span className="text-xs text-white/40 mt-1">{item.annual}</span>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Additional Charges */}
                            <div className="p-8 bg-gradient-to-br from-[#00F5FF]/5 to-[#B026FF]/5">
                                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]" />
                                    Additional Charges
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { label: "Admission Fee (One-time)", value: "₹5,000" },
                                        { label: "Annual Charges", value: "₹8,000" },
                                        { label: "Transport Fee (Optional)", value: "₹12,000/year" },
                                        { label: "Books & Uniform (Approx.)", value: "₹6,000" }
                                    ].map((charge, i) => (
                                        <div key={i} className="flex justify-between items-center p-3 glass-dark rounded-lg">
                                            <span className="text-white/60">{charge.label}</span>
                                            <span className="font-semibold text-white">{charge.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Note */}
                            <div className="p-6 bg-gradient-to-r from-[#B026FF]/10 to-[#FF6B9D]/10 border-t border-[#B026FF]/20">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-[#FF6B9D] flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-white/70">
                                        <p className="font-semibold text-white mb-2">Important Notes:</p>
                                        <ul className="space-y-1">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#00FF88]" /> Fees payable in 3 terms (April, August, December)</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#00FF88]" /> Scholarships for meritorious students</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-[#00FF88]" /> Sibling discount: 10% on tuition fees</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
