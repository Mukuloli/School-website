'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Academics', href: '/academics' },
        { name: 'Events', href: '/events' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'glass-navbar shadow-2xl shadow-black/20 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5FF] via-[#B026FF] to-[#FF6B9D] flex items-center justify-center text-white font-bold text-lg shadow-lg relative overflow-hidden"
                        >
                            <span className="relative z-10">D</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF] via-[#B026FF] to-[#FF6B9D] opacity-0 group-hover:opacity-100 transition-opacity animate-gradient" />
                        </motion.div>
                        <div>
                            <span className="text-lg font-bold text-white block leading-tight">Darpan</span>
                            <span className="text-xs text-[#00F5FF] font-medium">Children Garden School</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="relative px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white transition-all duration-300 group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00F5FF] to-[#B026FF] group-hover:w-full transition-all duration-300" />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                href="/admissions"
                                className="ml-4 btn-neon text-sm py-2.5 px-6"
                            >
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Apply Now
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <motion.span
                                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 9 : 0 }}
                                className="w-full h-0.5 bg-current rounded origin-left transition-colors"
                                style={{ backgroundColor: isMenuOpen ? '#00F5FF' : 'currentColor' }}
                            />
                            <motion.span
                                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                                className="w-full h-0.5 bg-current rounded"
                            />
                            <motion.span
                                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -9 : 0 }}
                                className="w-full h-0.5 bg-current rounded origin-left transition-colors"
                                style={{ backgroundColor: isMenuOpen ? '#00F5FF' : 'currentColor' }}
                            />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden mt-4 pb-4 overflow-hidden"
                        >
                            <div className="glass-card p-4 space-y-1">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="block py-3 px-4 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Link
                                        href="/admissions"
                                        className="block mt-3 py-3 px-4 text-center text-base font-semibold btn-neon"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Apply Now
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
