'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Trophy, Users, Shield, Target, Handshake, Sparkles, GraduationCap, Calendar, ArrowRight, Star, Zap } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "30+", label: "Years of Excellence" },
    { value: "2000+", label: "Alumni Network" },
    { value: "50+", label: "Expert Faculty" },
    { value: "100%", label: "Parent Trust" },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      desc: "Comprehensive curriculum fostering critical thinking and creativity.",
      gradient: "from-[#00F5FF] to-[#4D7CFE]",
      size: "bento-md"
    },
    {
      icon: Trophy,
      title: "Co-Curricular Focus",
      desc: "Sports, music, and arts for holistic development.",
      gradient: "from-[#B026FF] to-[#FF6B9D]",
      size: "bento-sm"
    },
    {
      icon: Users,
      title: "Dedicated Faculty",
      desc: "Passionate teachers nurturing potential.",
      gradient: "from-[#00FF88] to-[#00F5FF]",
      size: "bento-sm"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      desc: "Secure, child-friendly campus for effective learning.",
      gradient: "from-[#FF6B9D] to-[#FF6B35]",
      size: "bento-sm"
    },
    {
      icon: Target,
      title: "Value-Based Education",
      desc: "Strong emphasis on ethics and character building.",
      gradient: "from-[#4D7CFE] to-[#B026FF]",
      size: "bento-sm"
    },
    {
      icon: Handshake,
      title: "Parent Partnership",
      desc: "Active collaboration for seamless development.",
      gradient: "from-[#00F5FF] to-[#00FF88]",
      size: "bento-md"
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-aurora">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#00F5FF]/10 blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#B026FF]/10 blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[50%] left-[40%] w-[400px] h-[400px] rounded-full bg-[#FF6B9D]/8 blur-[80px]"
          />
        </div>

        {/* Neural Network Pattern */}
        <div className="absolute inset-0 neural-bg opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <ScrollReveal>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full badge-glow mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-semibold">Established 1991 • Shaping Future Leaders</span>
              </motion.div>
            </ScrollReveal>

            {/* Hero Title */}
            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-6 leading-[0.95] tracking-tight">
                The Future of
                <br />
                <span className="text-holographic">Education</span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                Where innovation meets tradition. Nurturing tomorrow's leaders with cutting-edge learning experiences.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/admissions" className="btn-neon group">
                  <Sparkles className="w-5 h-5" />
                  Admissions 2026
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-glass">
                  Explore Campus
                </Link>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-card p-6 text-center"
                  >
                    <div className="text-4xl md:text-5xl font-extrabold text-holographic mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="py-32 bg-[#0A0E27] relative">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <ScrollReveal>
              <div className="badge-neon mb-6 inline-flex">
                <Zap className="w-4 h-4" />
                Why Choose Us
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                A Legacy of <span className="text-holographic">Excellence</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isLarge = feature.size === "bento-md";
              return (
                <ScrollReveal
                  key={feature.title}
                  delay={index * 100}
                  className={isLarge ? "md:col-span-2" : ""}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bento-item h-full group"
                  >
                    <div className={`icon-box mb-6 bg-gradient-to-br ${feature.gradient} bg-opacity-20`}>
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-holographic transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-[#1A1B2E] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F5FF]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B026FF]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: "Academics", desc: "Explore our comprehensive curriculum", link: "/academics", gradient: "from-[#00F5FF] to-[#4D7CFE]" },
              { icon: Calendar, title: "Events", desc: "Stay updated with school activities", link: "/events", gradient: "from-[#B026FF] to-[#FF6B9D]" },
              { icon: Star, title: "Achievers", desc: "Celebrate our student achievements", link: "/achievers", gradient: "from-[#00FF88] to-[#00F5FF]" },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <Link href={item.link}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="clay-card p-8 h-full group cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-holographic transition-all">
                      {item.title}
                    </h3>
                    <p className="text-white/50 mb-4">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[#00F5FF] font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/20 via-[#B026FF]/10 to-[#FF6B9D]/20" />
        <div className="absolute inset-0 bg-[#0A0E27]/80" />

        {/* Floating Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-48 h-48 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-24 h-24 border border-[#00F5FF]/10 rounded-full"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Join the <span className="text-holographic">Future</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Admissions are now open for 2026-27. Give your child the gift of world-class education.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions" className="btn-neon">
                <Sparkles className="w-5 h-5" />
                Apply Now
              </Link>
              <Link href="/contact" className="btn-outline-neon">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
