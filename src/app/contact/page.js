import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="pt-32 pb-16 text-center">
                <ScrollReveal>
                    <h1 className="text-5xl font-bold text-neutral-900 mb-4">Get in Touch</h1>
                    <p className="text-xl text-neutral-600 font-light">We'd love to hear from you.</p>
                </ScrollReveal>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-24">
                <ScrollReveal>
                    <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-white grid lg:grid-cols-2">

                        {/* Contact Info Panel - Dark Emerald */}
                        <div className="bg-emerald-900 p-12 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-20 -mt-20" />

                            <h2 className="text-3xl font-bold mb-10 relative z-10">Contact Information</h2>

                            <div className="space-y-10 relative z-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 border border-emerald-700">
                                        <MapPin className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Campus Location</h3>
                                        <p className="text-emerald-100/80 leading-relaxed max-w-xs">
                                            Kartikey Colony Phase-III,<br />
                                            Harinagar, Kusumkhera,<br />
                                            Haldwani, Uttarakhand 263139
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 border border-emerald-700">
                                        <Phone className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Phone Numbers</h3>
                                        <div className="space-y-1">
                                            <a href="tel:09910288492" className="block text-emerald-100/80 hover:text-white transition-colors">099102 88492</a>
                                            <a href="tel:05946260166" className="block text-emerald-100/80 hover:text-white transition-colors">05946-260166</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 border border-emerald-700">
                                        <Mail className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email Address</h3>
                                        <a href="mailto:darpanchildrengarden@gmail.com" className="text-emerald-100/80 hover:text-white transition-colors">
                                            darpanchildrengarden@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Panel */}
                        <div className="h-[400px] lg:h-auto w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.992225883021!2d79.5166!3d29.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDEzJzAwLjEiTiA3OcKwMzEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, position: 'absolute', inset: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Contact Form Section */}
                <ScrollReveal delay={200}>
                    <div className="mt-16 max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
                            <p className="text-lg text-slate-600">Have questions? We're here to help!</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
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
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="input-modern"
                />
            </div>

            {/* Email Input */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="input-modern"
                />
            </div>

            {/* Phone Input */}
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="input-modern"
                />
            </div>

            {/* Subject Input */}
            <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    required
                    className="input-modern"
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
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="input-modern resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn-gradient-blue w-full py-3 text-base font-semibold"
            >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </form>
    );
}
