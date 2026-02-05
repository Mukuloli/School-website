import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function Gallery() {
    const galleryItems = [
        { id: 1, title: "Classroom Learning", color: "bg-emerald-100" },
        { id: 2, title: "Sports Day Rally", color: "bg-amber-100" },
        { id: 3, title: "Cultural Dance", color: "bg-purple-100" },
        { id: 4, title: "Art Workshop", color: "bg-blue-100" },
        { id: 5, title: "Science Projects", color: "bg-teal-100" },
        { id: 6, title: "Award Ceremony", color: "bg-rose-100" },
    ];

    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16 text-center">
                <ScrollReveal>
                    <h1 className="text-5xl font-bold text-neutral-900 mb-4">Gallery</h1>
                    <p className="text-xl text-neutral-600 font-light">Capturing Moments of Joy</p>
                </ScrollReveal>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 100}>
                            <div className="group relative aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
                                {/* Placeholder */}
                                <div className={`w-full h-full ${item.color} flex items-center justify-center transition-transform duration-700 group-hover:scale-110`}>
                                    <span className="text-neutral-400 text-5xl opacity-50">📷</span>
                                </div>

                                {/* Premium Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {item.title}
                                    </span>
                                    <span className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        View Full Size
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors">
                        Load More Photos
                    </button>
                </div>
            </div>
        </div>
    );
}
