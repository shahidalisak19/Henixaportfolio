"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Smartphone, Zap, Shield, Cpu, Palette, Rocket, Star, Target, Code, Database, Cloud, Server, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { icon: <Code className="w-6 h-6" />, text: "Custom Software Development", color: "from-emerald-600 to-teal-600", bg: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10" },
    { icon: <Globe className="w-6 h-6" />, text: "Web Application Development", color: "from-green-600 to-emerald-600", bg: "bg-gradient-to-br from-green-600/10 to-emerald-600/10" },
    { icon: <Smartphone className="w-6 h-6" />, text: "Mobile App Development", color: "from-teal-600 to-cyan-600", bg: "bg-gradient-to-br from-teal-600/10 to-cyan-600/10" },
    { icon: <Database className="w-6 h-6" />, text: "Database Architecture", color: "from-amber-600 to-orange-600", bg: "bg-gradient-to-br from-amber-600/10 to-orange-600/10" },
    { icon: <Cloud className="w-6 h-6" />, text: "Cloud Solutions & DevOps", color: "from-slate-600 to-gray-600", bg: "bg-gradient-to-br from-slate-600/10 to-gray-600/10" },
    { icon: <Server className="w-6 h-6" />, text: "API & Backend Services", color: "from-cyan-600 to-teal-600", bg: "bg-gradient-to-br from-cyan-600/10 to-teal-600/10" },
  ];

  const stats = [
    { value: "200+", label: "Software Projects Delivered", icon: <Rocket className="w-5 h-5" /> },
    { value: "99.8%", label: "Client Satisfaction Rate", icon: <Star className="w-5 h-5" /> },
    { value: "50+", label: "Technologies & Frameworks", icon: <Cpu className="w-5 h-5" /> },
    { value: "24/7", label: "Development Support", icon: <Shield className="w-5 h-5" /> },
  ];

  // Comprehensive software development technologies
  const technologies = [
    // Frontend
    "React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript",
    // Backend
    "Node.js", "Express.js", "Python", "Django", "FastAPI", "Java", "Spring Boot",
    "PHP", "Laravel", ".NET Core", "Ruby on Rails", "Go", "Rust",
    // Mobile
    "React Native", "Flutter", "Swift", "Kotlin", "Ionic",
    // Databases
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "Oracle DB",
    "Firebase", "DynamoDB",
    // Cloud & DevOps
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins",
    "GitHub Actions", "Terraform", "Ansible",
    // API & Integration
    "GraphQL", "REST API", "gRPC", "WebSockets", "Microservices",
    // Others
    "TensorFlow", "Machine Learning", "Blockchain", "WebAssembly"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 text-stone-900 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-olive-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 100 - 50,
            y: mousePosition.y * 100 - 50,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl"
          animate={{
            x: -(mousePosition.x * 80 - 40),
            y: -(mousePosition.y * 80 - 40),
          }}
          transition={{ type: "spring", damping: 25 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Professional Header with Navigation */}
        <header className="border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-md sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-6 py-1">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-0.5"
              >
                <img 
                  src="/logo1.png" 
                  alt="Henixa Logo" 
                  className="w-25 h-25 object-contain -mr-5"
                />
                <div>
                  <h1 className="text-xl font-bold text-stone-900">HENIXA</h1>
                  <p className="text-xs text-stone-600">Software Solutions</p>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#services" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">Services</a>
                <a href="#technologies" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">Technologies</a>
                <a href="#about" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">About</a>
                <a href="/viewwork" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">Projects</a>
                <a href="/getstarted" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">Contact</a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-stone-200 pt-4 space-y-3"
              >
                <a href="#services" className="block text-stone-700 hover:text-emerald-700 font-medium">Services</a>
                <a href="#technologies" className="block text-stone-700 hover:text-emerald-700 font-medium">Technologies</a>
                <a href="#about" className="block text-stone-700 hover:text-emerald-700 font-medium">About</a>
                <a href="/viewwork" className="block text-stone-700 hover:text-emerald-700 font-medium">Projects</a>
                <a href="/getstarted" className="block text-stone-700 hover:text-emerald-700 font-medium">Contact</a>
              </motion.div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-200"
            >
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-800">Professional Software Development Company</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight"
            >
              Custom Software Solutions That{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Drive Growth
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Henixa Software Development Company builds scalable, enterprise-grade custom software solutions that transform businesses. From web applications to mobile apps and cloud services, we deliver excellence.
            </motion.p>
          </div>
        </section>

        {/* Services & Stats Grid */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
                  Software Development Services
                </h3>
                <p className="text-stone-700 font-medium">End-to-end development solutions for modern businesses</p>
              </motion.div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className={`${service.bg} border border-stone-200 rounded-xl p-6 cursor-pointer backdrop-blur-sm hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
                        {service.icon}
                      </div>
                      <span className="text-lg font-semibold text-stone-900">{service.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
                  Proven Track Record
                </h3>
                <p className="text-stone-700 font-medium">Numbers that speak for our excellence</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-stone-50 to-amber-50/50 border border-stone-200 rounded-xl p-6 text-center backdrop-blur-sm hover:shadow-lg transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg mb-4 text-stone-50">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-stone-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-stone-700 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Technology Stack
            </h3>
            <p className="text-stone-700 max-w-2xl mx-auto font-medium">
              We leverage cutting-edge technologies to build robust, scalable software solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-6 py-3 bg-gradient-to-br from-white to-amber-50/80 border border-emerald-200 rounded-lg font-semibold text-stone-800 hover:shadow-md hover:border-emerald-300 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Build Your Software Solution?
              </h3>
              <p className="text-xl text-white mb-4 max-w-2xl mx-auto font-medium">
                Partner with Henixa Software Development Company and transform your business with custom software
              </p>
              <p className="text-lg text-white/95 font-medium">
                Contact us through the header menu to get started on your project
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-200 bg-stone-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-center text-stone-700">
              <p className="font-semibold mb-2">© 2024 Henixa Software Development Company</p>
              <p className="text-sm font-medium">Building Digital Future Through Innovation & Excellence</p>
            </div>
          </div>
        </footer>

        {/* SEO Content - Hidden but crawlable */}
        <div className="sr-only" id="about">
          <h1>Henixa - Leading Software Development Company | Custom Solutions</h1>
          <p>
            Henixa Software Development Company is a premier provider of custom software development services, specializing in web application development, mobile app development, and enterprise software solutions. With over 200 successfully delivered software projects and a 99.8% client satisfaction rate, Henixa has established itself as a trusted partner for businesses seeking digital transformation.
          </p>
          <h2>Professional Software Development Services</h2>
          <p>
            Our comprehensive software development services include custom application development, full-stack web development using React, Next.js, Node.js, Python Django, and Java Spring frameworks. We specialize in building scalable SaaS platforms, enterprise resource planning (ERP) systems, customer relationship management (CRM) software, and e-commerce solutions.
          </p>
          <h2>Expert Development Team & Technologies</h2>
          <p>
            Henixa's team of certified software engineers and developers are proficient in 50+ modern technologies and frameworks. Our expertise spans across frontend development (React, Next.js, Vue.js), backend development (Node.js, Python, Java, PHP), mobile development (React Native, Flutter), cloud services (AWS, Azure, Google Cloud), and DevOps practices (Docker, Kubernetes, CI/CD pipelines).
          </p>
          <h2>Why Choose Henixa Software Development Company</h2>
          <p>
            With proven expertise in agile development methodologies, Test-Driven Development (TDD), and continuous integration/continuous deployment (CI/CD), Henixa delivers high-quality software solutions on time and within budget. Our client-centric approach ensures that every software project aligns with business objectives and delivers measurable ROI.
          </p>
          <ul>
            <li>Custom Software Development tailored to unique business requirements</li>
            <li>Scalable Web Applications using modern JavaScript frameworks</li>
            <li>Native and Cross-Platform Mobile Apps for iOS and Android</li>
            <li>Robust Database Architecture using SQL and NoSQL databases</li>
            <li>Cloud-Native Solutions leveraging AWS, Azure, and GCP</li>
            <li>RESTful and GraphQL API Development for seamless integrations</li>
          </ul>
          <p>
            Contact Henixa Software Development Company today for a free consultation and project estimate. Let our expert development team transform your business vision into a powerful software reality. Whether you need a minimum viable product (MVP), enterprise software upgrade, or complete digital transformation, Henixa has the expertise to deliver excellence.
          </p>
        </div>
      </div>
    </div>
  );
}