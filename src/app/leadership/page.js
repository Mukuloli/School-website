import ScrollReveal from "@/components/ScrollReveal";

export default function Leadership() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16 text-center">
                <ScrollReveal>
                    <h1 className="text-5xl font-bold text-neutral-900 mb-4">Leadership</h1>
                    <p className="text-xl text-neutral-600 font-light">Guiding Lights of Darpan School</p>
                </ScrollReveal>
            </section>

            <div className="max-w-6xl mx-auto px-4 pb-24 space-y-20">

                {/* Principal Card - Premium */}
                <ScrollReveal>
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-neutral-100 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-400" />

                        {/* Image Placeholder */}
                        <div className="relative shrink-0">
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-neutral-100 rounded-full border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center">
                                <span className="text-6xl grayscale opacity-20">👩🏫</span>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
                                ❝
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm font-bold tracking-wider uppercase mb-6">Founder & Principal</span>
                            <h2 className="text-4xl font-bold text-neutral-900 mb-3 playfair-display">Smt. Meenakshi Joshi</h2>
                            <p className="text-neutral-500 text-lg italic mb-8">Visionary Educator & Award Recipient</p>

                            <p className="text-lg text-neutral-600 leading-loose mb-6">
                                "Education is not just about filling a bucket, but lighting a fire. At Darpan, we strive to ignite that spark in every child."
                            </p>

                            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                                <p className="text-neutral-600 leading-relaxed">
                                    With decades of experience and efficiency awards from the U.P. Government, Smt. Joshi has relentlessly focused on high academic standards and child-centric learning since 1991.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Chairman Card - Premium */}
                <ScrollReveal delay={200}>
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-neutral-100 flex flex-col md:flex-row-reverse gap-12 items-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-orange-400" />

                        {/* Image Placeholder */}
                        <div className="relative shrink-0">
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-neutral-100 rounded-full border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center">
                                <span className="text-6xl grayscale opacity-20">👨🏫</span>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex justify-center md:justify-start">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 text-sm font-bold tracking-wider uppercase mb-6">Chairman</span>
                            </div>
                            <h2 className="text-4xl font-bold text-neutral-900 mb-3 playfair-display">Sri Girish Chandra Joshi</h2>
                            <p className="text-neutral-500 text-lg italic mb-8">M.A., B.Ed. | Distinguished Mentor</p>

                            <p className="text-lg text-neutral-600 leading-loose">
                                A pillar of strength for the institution, Sri Girish Chandra Joshi brings a wealth of educational experience. He has been instrumental in guiding the school's growth, ensuring that we remain true to our core values while adapting to modern educational needs.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
}
