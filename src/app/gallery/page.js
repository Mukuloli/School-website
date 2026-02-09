'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
    const galleryItems = [
        { id: 1, title: "Classroom Learning", gradient: "from-[#00F5FF] to-[#4D7CFE]" },
        { id: 2, title: "Sports Day Rally", gradient: "from-[#00FF88] to-[#00F5FF]" },
        { id: 3, title: "Cultural Dance", gradient: "from-[#B026FF] to-[#FF6B9D]" },
        { id: 4, title: "Art Workshop", gradient: "from-[#4D7CFE] to-[#B026FF]" },
        { id: 5, title: "Science Projects", gradient: "from-[#00F5FF] to-[#00FF88]" },
        { id: 6, title: "Award Ceremony", gradient: "from-[#FF6B9D] to-[#FF6B35]" },
    ];

    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-neon mb-6 inline-flex">
                            <Camera className="w-4 h-4" />
                            Memories
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Photo <span className="text-holographic">Gallery</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60">Capturing Moments of Joy</p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 100}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative aspect-[4/3] glass-card overflow-hidden cursor-pointer"
                            >
                                {/* Gradient Placeholder */}
                                <div className={`w-full h-full bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-50 transition-all duration-500`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ImageIcon className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <motion.span
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        className="text-white font-bold text-xl"
                                    >
                                        {item.title}
                                    </motion.span>
                                    <span className="text-[#00F5FF] text-sm mt-1">
                                        View Full Size
                                    </span>
                                </div>

                                {/* Glow Border */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-[#00F5FF]/30 rounded-[1.5rem] transition-all" />
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-glass"
                    >
                        Load More Photos
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
