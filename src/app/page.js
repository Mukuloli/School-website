import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md bg-white/80 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                BF
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-800">Bright Future Academy</h1>
                <p className="text-xs text-neutral-500">Excellence in Education</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">Home</a>
              <a href="#programs" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">Programs</a>
              <a href="#about" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">Contact</a>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Where Excellence Meets <span className="text-yellow-300">Education</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Empowering young minds to reach their full potential through innovative learning,
              dedicated teachers, and a nurturing environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 shadow-xl">
                Schedule a Visit
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/20">
                Learn More
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-white/80">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">25+</div>
                <div className="text-sm text-white/80">Years</div>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-3xl blur-2xl opacity-30"></div>
            <Image
              src="/images/hero.png"
              alt="Happy students learning"
              width={600}
              height={600}
              className="relative rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            Comprehensive educational programs designed to nurture every aspect of student development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Classroom Learning */}
            <div className="card group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/classroom.png"
                  alt="Modern classroom"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Academics</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">
                  Rigorous curriculum with modern teaching methods and personalized attention
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Small class sizes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Interactive learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Expert faculty
                  </li>
                </ul>
              </div>
            </div>

            {/* Science */}
            <div className="card group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/science.png"
                  alt="Science laboratory"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Science Lab</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">
                  State-of-the-art laboratories for hands-on scientific exploration
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Modern equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Practical experiments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Safety protocols
                  </li>
                </ul>
              </div>
            </div>

            {/* Sports */}
            <div className="card group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/sports.png"
                  alt="Sports activities"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Sports</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">
                  Comprehensive sports program promoting physical fitness and teamwork
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Multiple sports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Professional coaches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Competitions
                  </li>
                </ul>
              </div>
            </div>

            {/* Arts */}
            <div className="card group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/arts.png"
                  alt="Arts and creativity"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Arts</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">
                  Creative programs to nurture artistic talents and self-expression
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Music & dance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Visual arts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Drama & theater
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Why Choose Bright Future Academy?</h2>
          <p className="section-subtitle">
            We provide a holistic education that prepares students for success in life
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/images/teacher.png"
                alt="Dedicated teachers"
                width={600}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="icon-box flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">Expert Faculty</h3>
                  <p className="text-neutral-600">
                    Our passionate and experienced teachers are dedicated to bringing out the best in every student
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="icon-box flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">Innovative Learning</h3>
                  <p className="text-neutral-600">
                    Modern teaching methods combined with technology to make learning engaging and effective
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="icon-box flex-shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">Proven Results</h3>
                  <p className="text-neutral-600">
                    Consistent academic excellence with students excelling in various fields and competitions
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="icon-box flex-shrink-0">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">Holistic Development</h3>
                  <p className="text-neutral-600">
                    Focus on academics, sports, arts, and character building for well-rounded development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">What Parents Say</h2>
          <p className="section-subtitle">
            Hear from our community about their experience with Bright Future Academy
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                  SM
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800">Sarah Mitchell</h4>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "The teachers here truly care about each child's success. My daughter has grown so much
                academically and personally since joining this school."
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-white font-bold text-xl">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800">Rajesh Kumar</h4>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Excellent facilities and a wonderful learning environment. The focus on both academics
                and extracurricular activities is impressive."
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-xl">
                  EP
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800">Emily Parker</h4>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Best decision we made for our son's education. The school has helped him discover his
                passions and build confidence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">Get in Touch</h2>
              <p className="text-neutral-600 mb-8">
                Ready to give your child the best education? Contact us today to schedule a campus visit
                or learn more about our admission process.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="icon-box flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Address</h4>
                    <p className="text-neutral-600">123 Education Lane, Knowledge City, 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-box flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Phone</h4>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-box flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Email</h4>
                    <p className="text-neutral-600">info@brightfutureacademy.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-box flex-shrink-0">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Office Hours</h4>
                    <p className="text-neutral-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  BF
                </div>
                <div>
                  <h3 className="text-lg font-bold">Bright Future Academy</h3>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">
                Empowering young minds to reach their full potential through excellence in education.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>Academics</li>
                <li>Science Lab</li>
                <li>Sports</li>
                <li>Arts & Culture</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span>f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span>𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span>in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
            <p>&copy; 2026 Bright Future Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
