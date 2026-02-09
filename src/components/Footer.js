'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Send, Heart } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Academics', href: '/academics' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Events', href: '/events' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="relative bg-[#0A0E27] border-t border-white/5">
            {/* Neural Pattern Background */}
            <div className="absolute inset-0 neural-bg opacity-20" />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#00F5FF]/5 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5FF] via-[#B026FF] to-[#FF6B9D] flex items-center justify-center text-white font-bold text-lg"
                            >
                                D
                            </motion.div>
                            <div>
                                <span className="text-lg font-bold text-white block leading-tight">Darpan</span>
                                <span className="text-xs text-[#00F5FF] font-medium">Children Garden School</span>
                            </div>
                        </Link>
                        <p className="text-white/50 mb-6 leading-relaxed">
                            Nurturing young minds since 1991. Building tomorrow's leaders through innovative education.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 hover:bg-[#00F5FF]/10 transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/50 hover:text-[#00F5FF] transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#00F5FF] group-hover:w-4 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/50">
                                <MapPin className="w-5 h-5 text-[#00F5FF] flex-shrink-0 mt-0.5" />
                                <span>Haldwani, Uttarakhand, India - 263139</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/50">
                                <Phone className="w-5 h-5 text-[#B026FF] flex-shrink-0" />
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/50">
                                <Mail className="w-5 h-5 text-[#FF6B9D] flex-shrink-0" />
                                <span>info@darpanschool.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg">Stay Updated</h3>
                        <p className="text-white/50 mb-4 text-sm">
                            Subscribe to our newsletter for news and updates.
                        </p>
                        <form className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input-neon pr-12 text-sm"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-r from-[#00F5FF] to-[#B026FF] flex items-center justify-center text-white"
                                >
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider-glow" />

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm flex items-center gap-1">
                        © 2026 Darpan Children Garden School. Made with
                        <Heart className="w-4 h-4 text-[#FF6B9D] fill-current" />
                        in Haldwani
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href="#" className="text-white/40 hover:text-[#00F5FF] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-white/40 hover:text-[#00F5FF] transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
