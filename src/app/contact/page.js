'use client';
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle, Sparkles } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#0A0E27]">
            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-aurora">
                <div className="absolute inset-0 neural-bg opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                        <div className="badge-neon mb-6 inline-flex">
                            <MessageCircle className="w-4 h-4" />
                            Get in Touch
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Contact <span className="text-holographic">Us</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            We'd love to hear from you. Let's start a conversation.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">
                <ScrollReveal>
                    <div className="glass-card overflow-hidden grid lg:grid-cols-2">

                        {/* Contact Info Panel */}
                        <div className="p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#00F5FF]/10 to-[#B026FF]/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5FF]/10 rounded-full blur-[100px] -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B026FF]/10 rounded-full blur-[100px] -ml-20 -mb-20" />

                            <h2 className="text-3xl font-bold text-white mb-10 relative z-10">Contact Information</h2>

                            <div className="space-y-10 relative z-10">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="icon-box shrink-0 bg-gradient-to-br from-[#00F5FF] to-[#4D7CFE]">
                                        <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-2">Campus Location</h3>
                                        <p className="text-white/60 leading-relaxed">
                                            Kartikey Colony Phase-III,<br />
                                            Harinagar, Kusumkhera,<br />
                                            Haldwani, Uttarakhand 263139
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="icon-box shrink-0 bg-gradient-to-br from-[#B026FF] to-[#FF6B9D]">
                                        <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-2">Phone Numbers</h3>
                                        <div className="space-y-2">
                                            <a href="tel:09910288492" className="block text-white/60 hover:text-[#00F5FF] transition-colors">099102 88492</a>
                                            <a href="tel:05946260166" className="block text-white/60 hover:text-[#00F5FF] transition-colors">05946-260166</a>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="icon-box shrink-0 bg-gradient-to-br from-[#00FF88] to-[#00F5FF]">
                                        <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-2">Email Address</h3>
                                        <a href="mailto:darpanchildrengarden@gmail.com" className="text-white/60 hover:text-[#00F5FF] transition-colors">
                                            darpanchildrengarden@gmail.com
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Map Panel */}
                        <div className="h-[400px] lg:h-auto w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.992225883021!2d79.5166!3d29.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDEzJzAwLjEiTiA3OcKwMzEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, position: 'absolute', inset: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                                className="opacity-80 hover:opacity-100 transition-opacity duration-500"
                            ></iframe>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Contact Form Section */}
                <ScrollReveal delay={200}>
                    <div className="mt-16 max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold text-white mb-3">Send Us a <span className="text-holographic">Message</span></h2>
                            <p className="text-lg text-white/60">Have questions? We're here to help!</p>
                        </div>
                        <div className="glass-card p-8 md:p-12">
                            <ContactForm />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <form className="space-y-6">
            {/* Name Input */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">
                    Full Name <span className="text-[#FF6B9D]">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="input-neon"
                />
            </div>

            {/* Email Input */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">
                    Email Address <span className="text-[#FF6B9D]">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="input-neon"
                />
            </div>

            {/* Phone Input */}
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white/80 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="input-neon"
                />
            </div>

            {/* Subject Input */}
            <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white/80 mb-2">
                    Subject <span className="text-[#FF6B9D]">*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    required
                    className="input-neon"
                >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Message Textarea */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2">
                    Message <span className="text-[#FF6B9D]">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="input-neon resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-neon w-full py-4"
            >
                <Send className="w-5 h-5" />
                Send Message
            </motion.button>
        </form>
    );
}
