import ScrollReveal from "@/components/ScrollReveal";
import Link from 'next/link';
import { Phone, MapPin, DollarSign } from 'lucide-react';

export default function Admissions() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <span className="badge-success mb-4">Admissions 2026-27</span>
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
                            <a href="tel:09910288492" className="btn-primary bg-white text-emerald-900 hover:bg-emerald-50">
                                <Phone className="w-5 h-5" />
                                Call 099102 88492
                            </a>
                            <Link href="/contact" className="btn-secondary border-2 border-emerald-600 text-white hover:bg-emerald-700">
                                <MapPin className="w-5 h-5" />
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
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                                <DollarSign className="w-6 h-6" strokeWidth={2} />
                            </div>
                        </div>
                        <div className="divide-y divide-neutral-100">
                            {[
                                {
                                    level: "Pre-Primary",
                                    grade: "Nursery - KG",
                                    tuition: "₹18,000",
                                    term: "per term",
                                    annual: "₹54,000/year"
                                },
                                {
                                    level: "Primary",
                                    grade: "Class 1 - 5",
                                    tuition: "₹22,000",
                                    term: "per term",
                                    annual: "₹66,000/year"
                                },
                                {
                                    level: "Upper Primary",
                                    grade: "Class 6 - 8",
                                    tuition: "₹25,000",
                                    term: "per term",
                                    annual: "₹75,000/year"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 hover:bg-neutral-50 transition-colors gap-4">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-neutral-900 mb-1">{item.level}</h3>
                                        <p className="text-neutral-500 text-sm">{item.grade}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-emerald-700">{item.tuition}</span>
                                            <span className="text-sm text-neutral-400">{item.term}</span>
                                        </div>
                                        <span className="text-xs text-neutral-400 mt-1">{item.annual}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Additional Charges */}
                            <div className="p-8 bg-gradient-to-br from-neutral-50 to-emerald-50/30">
                                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                    Additional Charges
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-100">
                                        <span className="text-neutral-600">Admission Fee (One-time)</span>
                                        <span className="font-semibold text-neutral-900">₹5,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-100">
                                        <span className="text-neutral-600">Annual Charges</span>
                                        <span className="font-semibold text-neutral-900">₹8,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-100">
                                        <span className="text-neutral-600">Transport Fee (Optional)</span>
                                        <span className="font-semibold text-neutral-900">₹12,000/year</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-100">
                                        <span className="text-neutral-600">Books & Uniform (Approx.)</span>
                                        <span className="font-semibold text-neutral-900">₹6,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Note */}
                            <div className="p-6 bg-amber-50 border-t-2 border-amber-200">
                                <div className="flex items-start gap-3">
                                    <span className="text-amber-600 text-xl">💡</span>
                                    <div className="text-sm text-neutral-700">
                                        <p className="font-semibold mb-1">Important Notes:</p>
                                        <ul className="space-y-1 text-neutral-600">
                                            <li>• Fees are payable in 3 terms (April, August, December)</li>
                                            <li>• Scholarships available for meritorious students</li>
                                            <li>• Sibling discount: 10% on tuition fees</li>
                                            <li>• For detailed fee structure, please contact the office</li>
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
