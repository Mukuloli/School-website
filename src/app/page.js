import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-mesh overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[80px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Established 1991 • Haldwani, Uttarakhand
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Nurturing <span className="text-gradient-emerald">Excellence</span> in Every Child
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                Darpan Children Garden School provides a world-class foundation for young minds to bloom into compassionate, knowledgeable leaders of tomorrow.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link href="/admissions" className="btn-primary">
                  Admissions Open 2026
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/about" className="btn-secondary">
                  Explore Our Campus
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="text-emerald-600 font-semibold tracking-widest text-sm uppercase">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">A Legacy of Excellence</h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Academic Excellence",
                desc: "Comprehensive curriculum fostering critical thinking, creativity, and a lifelong love for learning.",
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                icon: "🏆",
                title: "Co-Curricular Focus",
                desc: "Sports, music, dance, and arts programs to ensure holistic development of every student.",
                color: "bg-amber-50 text-amber-600"
              },
              {
                icon: "👩‍🏫",
                title: "Dedicated Faculty",
                desc: "Experienced and passionate teachers committed to nurturing each child's unique potential.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: "🌳",
                title: "Safe Environment",
                desc: "Secure, clean, and child-friendly campus designed for effective learning and growth.",
                color: "bg-teal-50 text-teal-600"
              },
              {
                icon: "🎯",
                title: "Value-Based Education",
                desc: "Strong emphasis on moral values, ethics, and character building alongside academics.",
                color: "bg-rose-50 text-rose-600"
              },
              {
                icon: "🤝",
                title: "Parent Partnership",
                desc: "Active collaboration with parents to ensure seamless development at school and home.",
                color: "bg-purple-50 text-purple-600"
              }
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="card-premium p-8 h-full">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Family?</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Admissions are now open for the 2026-27 academic session. Give your child the gift of quality education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions" className="px-8 py-4 bg-white text-emerald-800 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Apply Now
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
