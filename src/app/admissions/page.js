import ScrollReveal from "@/components/ScrollReveal";
import Link from 'next/link';

export default function Admissions() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Admissions Overview</h1>
                        <p className="text-xl text-neutral-600 font-light">
                            Join the Darpan family. Build a foundation for life.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 pb-24 space-y-12">

                {/* Main CTA Card */}
                <ScrollReveal>
                    <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-[2.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -ml-16 -mb-16" />

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Admissions Open for 2026-27</h2>
                        <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
                            We invite parents to visit our campus, meet our faculty, and understand our child-centric approach. Limited seats available for Pre-primary to Class 8.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <a href="tel:09910288492" className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
                                Call 099102 88492
                            </a>
                            <Link href="/contact" className="bg-emerald-800 border-2 border-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors">
                                Visit Campus
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Fees Table - Clean & Professional */}
                <ScrollReveal delay={200}>
                    <div className="bg-white rounded-[2rem] shadow-xl border border-neutral-100 overflow-hidden">
                        <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-900">Fee Structure</h2>
                                <span className="text-neutral-500 text-sm">Academic Session 2026-27</span>
                            </div>
                            <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-xl">
                                💰
                            </div>
                        </div>
                        <div className="divide-y divide-neutral-100">
                            {[
                                { level: "Pre-Primary", grade: "Nursery - KG", fee: "Contact for details" },
                                { level: "Primary", grade: "Class 1 - 5", fee: "Contact for details" },
                                { level: "Upper Primary", grade: "Class 6 - 8", fee: "Contact for details" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col md:flex-row justify-between items-center p-8 hover:bg-neutral-50 transition-colors">
                                    <div className="text-center md:text-left mb-4 md:mb-0">
                                        <h3 className="font-bold text-lg text-neutral-900">{item.level}</h3>
                                        <p className="text-neutral-500 text-sm">{item.grade}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-medium text-neutral-400 italic">{item.fee}</span>
                                        <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="p-6 bg-neutral-50 text-sm text-neutral-500 text-center">
                                * Transport & Annual fees are additional. Scholarships available for meritorious students.
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
