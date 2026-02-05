import ScrollReveal from "@/components/ScrollReveal";

export default function Achievers() {
    const categories = [
        { title: "Academic Toppers", icon: "🥇", desc: "Board Exam Merits", bg: "from-amber-50 to-orange-50", text: "text-amber-700" },
        { title: "Sports Champions", icon: "🏆", desc: "District & State Level", bg: "from-emerald-50 to-teal-50", text: "text-emerald-700" },
        { title: "Cultural Stars", icon: "🎭", desc: "Art, Music & Dance", bg: "from-purple-50 to-pink-50", text: "text-purple-700" },
    ];

    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16 text-center">
                <ScrollReveal>
                    <h1 className="text-5xl font-bold text-neutral-900 mb-4">Hall of Fame</h1>
                    <p className="text-xl text-neutral-600 font-light">Celebrating Student Excellence</p>
                </ScrollReveal>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <ScrollReveal key={cat.title} delay={i * 100}>
                            <div className={`bg-gradient-to-br ${cat.bg} p-10 rounded-[2.5rem] border border-white/50 h-full flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300`}>
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mb-8 shadow-sm">
                                    {cat.icon}
                                </div>
                                <h3 className={`text-2xl font-bold mb-2 ${cat.text}`}>{cat.title}</h3>
                                <p className="text-neutral-500 font-medium mb-8">{cat.desc}</p>

                                <div className="w-full bg-white/60 rounded-xl p-8 backdrop-blur-sm mt-auto border border-white/50">
                                    <p className="text-neutral-400 italic text-sm">
                                        "List of recent achievers will be updated for the current academic session."
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
