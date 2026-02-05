import ScrollReveal from "@/components/ScrollReveal";

export default function Academics() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h1 className="text-5xl font-bold text-neutral-900 mb-6">Academic Framework</h1>
                        <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto">
                            Our curriculum is a blend of traditional values and modern pedagogy, designed to ensure holistic development at every stage.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">

                {/* Curriculum Cards */}
                <section className="mb-24">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Early Childhood",
                                sub: "Playgroup to KG",
                                desc: "Focus on sensory learning, motor skills, and social interaction in a playful environment.",
                                icon: "🧸",
                                color: "bg-pink-50 text-pink-600 border-pink-100"
                            },
                            {
                                title: "Primary Years",
                                sub: "Class 1 to 5",
                                desc: "Building strong foundations in language, mathematics, and environmental sciences.",
                                icon: "📚",
                                color: "bg-emerald-50 text-emerald-600 border-emerald-100"
                            },
                            {
                                title: "Middle School",
                                sub: "Class 6 to 8",
                                desc: "Advanced concepts, critical thinking, and preparation for higher academic challenges.",
                                icon: "🔬",
                                color: "bg-blue-50 text-blue-600 border-blue-100"
                            }
                        ].map((item, index) => (
                            <ScrollReveal key={item.title} delay={index * 100}>
                                <div className={`p-10 rounded-[2rem] border ${item.color.split(' ')[2]} bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start relative group overflow-hidden`}>
                                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-50 -mr-8 -mt-8 ${item.color.split(' ')[0]}`} />

                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">{item.title}</h3>
                                    <span className="text-sm font-semibold tracking-wide text-neutral-400 uppercase mb-4">{item.sub}</span>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Programs Grid (Bento Style Lite) */}
                <section>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center">Enrichment Programs</h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Morning Assembly", icon: "🙏", desc: "Prayer & Ethics" },
                            { title: "Yoga & Fitness", icon: "🧘", desc: "Mind-Body Health" },
                            { title: "Group Projects", icon: "👥", desc: "Collaboration" },
                            { title: "Remedial Care", icon: "💡", desc: "Personal Support" }
                        ].map((item, index) => (
                            <ScrollReveal key={item.title} delay={index * 100}>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-center hover:-translate-y-1 transition-transform cursor-default">
                                    <div className="text-5xl mb-6">{item.icon}</div>
                                    <h3 className="font-bold text-lg text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-neutral-500">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
