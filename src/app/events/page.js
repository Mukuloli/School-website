import ScrollReveal from "@/components/ScrollReveal";

export default function Events() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16 text-center">
                <ScrollReveal>
                    <h1 className="text-5xl font-bold text-neutral-900 mb-4">Life at Darpan</h1>
                    <p className="text-xl text-neutral-600 font-light">Events, Celebrations & Workshops</p>
                </ScrollReveal>
            </section>

            <div className="max-w-6xl mx-auto px-4 pb-24">
                <ScrollReveal>
                    <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-100 grid md:grid-cols-2">
                        {/* Visual Side */}
                        <div className="bg-neutral-900 relative min-h-[400px] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
                            <div className="relative z-10 text-center">
                                <span className="text-8xl">🎉</span>
                                <div className="mt-8 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-bold border border-white/20">
                                    Annual Function
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4">Highlights</span>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Celebrating Talent & Culture</h2>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                Beyond the classroom, Darpan School comes alive with colors and joy during our annual cultural fests, sports meets, and art exhibitions. These events are crucial for personality development and team building.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {['Annual Day', 'Sports Meet', 'Science Exhibition', 'Festivals', 'Art Workshop'].map((tag) => (
                                    <span key={tag} className="px-5 py-2 bg-neutral-100 text-neutral-700 rounded-full font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
