import ScrollReveal from "@/components/ScrollReveal";

export default function Alumni() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16 text-center">
                <ScrollReveal>
                    <h1 className="text-5xl font-bold text-neutral-900 mb-4">Success Stories</h1>
                    <p className="text-xl text-neutral-600 font-light">Our Alumni Network</p>
                </ScrollReveal>
            </section>

            <div className="max-w-5xl mx-auto px-4 pb-24">
                <ScrollReveal>
                    <div className="bg-white p-16 rounded-[2.5rem] text-center shadow-xl border border-neutral-100 relative overflow-hidden">
                        <div className="absolute top-0 opacity-[0.03] w-full h-full pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl mb-8 mx-auto text-emerald-600">
                            🎓
                        </div>

                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Darpan Alumni Association</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-10">
                            Our students have gone on to achieve excellence in engineering, medicine, arts, and public service. We are in the process of digitizing our alumni database to showcase their inspiring journeys.
                        </p>

                        <div className="inline-block p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                            <p className="text-neutral-500 font-medium italic">
                                "Stay tuned for featured alumni profiles."
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
