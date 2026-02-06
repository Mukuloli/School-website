import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { Eye, Target } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">About Us</h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-6" />
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Nurturing Excellence, Character, and Community <br />
                            <span className="text-emerald-700 font-medium">Since 1991</span>
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-20 space-y-24">

                {/* Story Section - Split Layout */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-emerald-600 rounded-[2rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500" />
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl">
                                <Image
                                    src="/images/classroom.png"
                                    alt="Darpan School Classroom"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />

                                {/* Floating Stats Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white shadow-lg">
                                    <div className="flex justify-between items-center text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-emerald-700">30+</div>
                                            <div className="text-xs text-neutral-500 uppercase tracking-wider">Years</div>
                                        </div>
                                        <div className="w-px h-8 bg-neutral-200" />
                                        <div>
                                            <div className="text-2xl font-bold text-emerald-700">1000+</div>
                                            <div className="text-xs text-neutral-500 uppercase tracking-wider">Alumni</div>
                                        </div>
                                        <div className="w-px h-8 bg-neutral-200" />
                                        <div>
                                            <div className="text-2xl font-bold text-emerald-700">100%</div>
                                            <div className="text-xs text-neutral-500 uppercase tracking-wider">Dedication</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="space-y-8">
                            <div>
                                <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-2 block">Our History</span>
                                <h2 className="text-4xl font-bold text-neutral-900 mb-6 leading-tight">From Humble Beginnings to Educational Leadership</h2>
                            </div>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                Darpan Children Garden School was established in <strong className="text-neutral-900">July 1991</strong> with a clear vision: to value every child. Starting with just six students and one teacher, we have grown into one of Haldwani's most respected institutions.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                Our journey is defined by a relentless commitment to academic standards and moral values, creating an environment where students don't just learn, but thrive.
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                {/* Vision & Mission - Glass Cards */}
                <section className="grid md:grid-cols-2 gap-8 relative">
                    <div className="absolute inset-0 bg-gradient-mesh opacity-50 -z-10 rounded-3xl" />

                    <ScrollReveal delay={100}>
                        <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-neutral-100 hover:shadow-emerald-glow transition-all duration-300 h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-emerald-100" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-700">
                                    <Eye className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
                                <p className="text-neutral-600 text-lg leading-relaxed">
                                    To empower every student with confidence, knowledge, values, and life skills for a bright future. We envision a community of lifelong learners who lead with integrity.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-neutral-100 hover:shadow-amber-glow transition-all duration-300 h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-amber-100" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-700">
                                    <Target className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
                                <ul className="space-y-4 text-neutral-600 text-lg">
                                    <li className="flex gap-3 items-center">
                                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                                        Provide quality education in a safe, caring environment.
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                                        Encourage creativity, discipline & critical thinking.
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                                        Engage families as partners in the learning journey.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
}
