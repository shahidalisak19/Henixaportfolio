"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Smartphone, Zap, Shield, Cpu, Palette, Rocket, Star, Target, Code, Database, Cloud, Server, Menu, X, ChevronRight, Terminal, Layers, Users, CheckCircle, Zap as Lightning, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [floatingShapes, setFloatingShapes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    color: string;
  }>>([]);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    // Generate shapes only on client-side to avoid hydration mismatch
    const shapes = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 10,
      color: i % 3 === 0 ? 'from-purple-500/10' : i % 3 === 1 ? 'from-blue-500/10' : 'from-pink-500/10'
    }));
    setFloatingShapes(shapes);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { icon: <Code className="w-6 h-6" />, text: "Custom Software Development", color: "from-purple-500 to-pink-500", bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/5", hoverColor: "hover:from-purple-500/20 hover:to-pink-500/10" },
    { icon: <Globe className="w-6 h-6" />, text: "Web Application Development", color: "from-blue-500 to-cyan-500", bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5", hoverColor: "hover:from-blue-500/20 hover:to-cyan-500/10" },
    { icon: <Smartphone className="w-6 h-6" />, text: "Mobile App Development", color: "from-green-500 to-emerald-500", bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/5", hoverColor: "hover:from-green-500/20 hover:to-emerald-500/10" },
    { icon: <Database className="w-6 h-6" />, text: "Database Architecture", color: "from-orange-500 to-red-500", bg: "bg-gradient-to-br from-orange-500/10 to-red-500/5", hoverColor: "hover:from-orange-500/20 hover:to-red-500/10" },
    { icon: <Cloud className="w-6 h-6" />, text: "Cloud Solutions & DevOps", color: "from-indigo-500 to-purple-500", bg: "bg-gradient-to-br from-indigo-500/10 to-purple-500/5", hoverColor: "hover:from-indigo-500/20 hover:to-purple-500/10" },
    { icon: <Server className="w-6 h-6" />, text: "API & Backend Services", color: "from-cyan-500 to-blue-500", bg: "bg-gradient-to-br from-cyan-500/10 to-blue-500/5", hoverColor: "hover:from-cyan-500/20 hover:to-blue-500/10" },
  ];

  const stats = [
    { value: "200+", label: "Software Projects Delivered", icon: <Rocket className="w-5 h-5" /> },
    { value: "99.8%", label: "Client Satisfaction Rate", icon: <Star className="w-5 h-5" /> },
    { value: "50+", label: "Technologies & Frameworks", icon: <Cpu className="w-5 h-5" /> },
    { value: "24/7", label: "Development Support", icon: <Shield className="w-5 h-5" /> },
  ];

  const technologies = [
    "React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript",
    "Node.js", "Express.js", "Python", "Django", "FastAPI", "Java", "Spring Boot",
    "PHP", "Laravel", ".NET Core", "Ruby on Rails", "Go", "Rust",
    "React Native", "Flutter", "Swift", "Kotlin", "Ionic",
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "Oracle DB",
    "Firebase", "DynamoDB",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins",
    "GitHub Actions", "Terraform", "Ansible",
    "GraphQL", "REST API", "gRPC", "WebSockets", "Microservices",
    "TensorFlow", "Machine Learning", "Blockchain", "WebAssembly"
  ];

  // Navigation handler
  const handleNavigation = (path: string) => {
    if (path.startsWith('/')) {
      router.push(path);
    } else if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden relative">
      
      {/* Modern Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
        
        {/* Floating gradient shapes - Only render on client side */}
        {floatingShapes.length > 0 && floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${shape.color} rounded-full blur-3xl`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
            }}
            animate={{
              x: [0, Math.sin(shape.id) * 50, 0],
              y: [0, Math.cos(shape.id) * 50, 0],
              rotate: 360,
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
              delay: shape.delay,
            }}
          />
        ))}
        
        {/* Grid pattern with animation */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Sleek Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-xl border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => handleNavigation('/')}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <img 
                    src="/logo1.png" 
                    alt="Henixa Logo" 
                    className="w-24 h-24 object-contain relative z-10 -mr-5"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    HENIXA
                  </h1>
                  <p className="text-sm text-gray-400 font-medium">Software Solutions</p>
                </div>
              </motion.div>

              {/* Desktop Navigation - FIXED */}
              <nav className="hidden lg:flex items-center gap-6">
                <button
                  onClick={() => handleNavigation('#services')}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                >
                  <span className="relative z-10">Services</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => handleNavigation('#technologies')}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                >
                  <span className="relative z-10">Technologies</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => handleNavigation('#about')}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                >
                  <span className="relative z-10">About</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => handleNavigation('/viewwork')}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                >
                  <span className="relative z-10">Projects</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </button>
                <button
                  onClick={() => handleNavigation('/getstarted')}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                {mobileMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Professional Software Development Company</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="block text-gray-300">Build The Future</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                With Code
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            >
              Henixa builds scalable, enterprise-grade custom software solutions that transform businesses. From web applications to mobile apps and cloud services, we deliver excellence.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
            >
              <motion.button
                onClick={() => handleNavigation('/getstarted')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => handleNavigation('/viewwork')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-transparent border-2 border-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-800/30 hover:border-purple-500/50 hover:text-white transition-all"
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                End-to-end development solutions for modern businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className={`${service.bg} border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4 relative z-10">{service.text}</h4>
                  
                  {hoveredService === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-400 text-sm mt-4 relative z-10"
                    >
                      Professional development with modern technologies and best practices
                    </motion.p>
                  )}
                  
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-2 transition-all mt-6 relative z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Technology <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We leverage cutting-edge technologies to build robust, scalable software solutions
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-xl font-medium text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 cursor-default group relative"
                >
                  {/* Tech badge glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300" />
                  <span className="relative z-10">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl border border-gray-800">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/50 to-pink-900/20" />
              
              {/* Animated orbs */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <div className="relative z-10 p-12 md:p-16 text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Build Your
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Software Solution?
                  </span>
                </h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                  Partner with Henixa Software Development Company and transform your business with custom software
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-400 mb-10"
                >
                  Start your digital transformation journey today
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => handleNavigation('/getstarted')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleNavigation('/viewwork')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-transparent border-2 border-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-800/30 hover:border-purple-500/50 hover:text-white transition-all"
                  >
                    View Projects
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Clean Footer without navigation */}
        <footer className="border-t border-gray-800/50 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              <div className="text-center">
                <div className="flex items-center gap-4 mb-4 justify-center">
                  <img 
                    src="/logo1.png" 
                    alt="Henixa Logo" 
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      HENIXA
                    </h4>
                    <p className="text-sm text-gray-400">Software Solutions</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Building Digital Future Through Innovation & Excellence
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  ©2024 Henixa Software Development Company. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile Menu Overlay - FIXED */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-950/95 backdrop-blur-lg z-50 lg:hidden flex flex-col items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="text-center space-y-6 p-6" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <img 
                    src="/logo1.png" 
                    alt="Henixa Logo" 
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      HENIXA
                    </h4>
                    <p className="text-sm text-gray-400">Software Solutions</p>
                  </div>
                </div>
              </div>

              {["Services", "Technologies", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === "Projects") {
                      handleNavigation('/viewwork');
                    } else if (item === "Contact") {
                      handleNavigation('/getstarted');
                    } else {
                      handleNavigation(`#${item.toLowerCase()}`);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="block text-2xl font-semibold text-gray-300 hover:text-white transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}

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