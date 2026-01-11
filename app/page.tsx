"use client";
import type { Metadata } from 'next'
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Smartphone, Zap, Shield, Cpu, Palette, Rocket, Star, Target, Code, Database, Cloud, Server } from "lucide-react";
import { useEffect, useState } from "react";


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // UPDATED SERVICES FOR SOFTWARE DEVELOPMENT
  const services = [
    { icon: <Code className="w-4 h-4" />, text: "Custom Software", color: "from-blue-500 to-cyan-500", bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: <Globe className="w-4 h-4" />, text: "Web Applications", color: "from-green-500 to-emerald-500", bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10" },
    { icon: <Smartphone className="w-4 h-4" />, text: "Mobile Apps", color: "from-purple-500 to-violet-500", bg: "bg-gradient-to-br from-purple-500/10 to-violet-500/10" },
    { icon: <Database className="w-4 h-4" />, text: "Database Solutions", color: "from-amber-500 to-orange-500", bg: "bg-gradient-to-br from-amber-500/10 to-orange-500/10" },
    { icon: <Cloud className="w-4 h-4" />, text: "Cloud Services", color: "from-pink-500 to-rose-500", bg: "bg-gradient-to-br from-pink-500/10 to-rose-500/10" },
    { icon: <Server className="w-4 h-4" />, text: "API Development", color: "from-cyan-500 to-teal-500", bg: "bg-gradient-to-br from-cyan-500/10 to-teal-500/10" },
  ];

  const stats = [
    { value: "200+", label: "Software Projects", icon: <Code className="w-3 h-3" /> },
    { value: "99.8%", label: "Client Satisfaction", icon: <Star className="w-3 h-3" /> },
    { value: "50+", label: "Technologies Used", icon: <Cpu className="w-3 h-3" /> },
    { value: "24/7", label: "Dev Support", icon: <Shield className="w-3 h-3" /> },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white px-4 md:px-6 py-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.4), rgba(0, 0, 0, 0) 50%)`,
          }}
        />
        
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header - UPDATED FOR SOFTWARE COMPANY */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center gap-3 mb-5 px-5 py-2.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="p-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              HENIXA SOFTWARE
            </span>
            <div className="w-px h-4 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <span className="text-xs text-cyan-200/80 font-medium">
              Development Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="block text-white/90">Custom Software</span>
            <span className="block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Development Company
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm max-w-md mx-auto mb-5"
          >
            <strong>Henixa Software Development Company</strong> builds scalable, custom software solutions that drive business growth and digital transformation.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
          />
        </motion.div>

        {/* Software Development Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6 shadow-2xl">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-300" />
              Henixa Software Development Services
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <p><strong>Henixa Software Development Company</strong> specializes in building custom software solutions for businesses of all sizes. Our team of expert developers creates scalable applications using the latest technologies.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="font-semibold">Custom Software Development</div>
                  </div>
                  <div className="text-xs text-gray-300">Tailored solutions for unique business needs</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="font-semibold">Web Application Development</div>
                  </div>
                  <div className="text-xs text-gray-300">Scalable web apps with modern frameworks</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services & Stats Side by Side */}
        <div className="flex flex-col lg:flex-row gap-5 mb-6">
          {/* Services - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                Software Development Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className={`p-3 rounded-xl ${service.bg} border border-white/5`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-white">{service.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-5 shadow-2xl">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-300" />
                Software Development Stats
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-3 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="p-1 rounded bg-cyan-500/20">
                        <div className="text-cyan-300">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs text-cyan-100/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technologies & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
            <h3 className="font-semibold text-white mb-4">Henixa Development Stack</h3>
            <div className="flex flex-wrap gap-3">
              {["React/Next.js", "Node.js", "Python/Django", "Java/Spring", "PHP/Laravel", "React Native", "Flutter", "AWS/Azure", "Docker/Kubernetes", "MySQL/MongoDB"].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 text-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-2xl p-px bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[15px] p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white mb-1">Need Custom Software?</h3>
                  <p className="text-sm text-cyan-100/70">Partner with Henixa Software Development Company</p>
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href="/viewwork"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      View Projects
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="/getstarted"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-lg font-semibold border border-cyan-500/50 text-cyan-300 text-sm hover:bg-cyan-500/10 transition-colors"
                  >
                    Get Quote
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xs text-white/40 mt-4"
          >
            Henixa Software Development Company | Building Digital Future Since 2023
          </motion.p>
        </motion.div>

        {/* SEO CONTENT - SOFTWARE DEVELOPMENT FOCUS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-bold mb-4 text-white">Henixa - Professional Software Development Company</h2>
          <div className="space-y-3 text-gray-300 text-sm">
            <p><strong>Henixa Software Development Company</strong> is a leading provider of custom software solutions, web applications, and mobile app development services. Based on cutting-edge technology and agile development methodologies, <strong>Henixa</strong> delivers scalable software products that drive business growth and operational efficiency.</p>
            
            <p>As a full-service <strong>software development company</strong>, Henixa offers end-to-end solutions including requirements analysis, UI/UX design, development, testing, deployment, and ongoing maintenance. Our team of certified developers specializes in multiple programming languages and frameworks to deliver robust, secure, and high-performance software applications.</p>
            
            <p>Why choose <strong>Henixa Software Development Company</strong>? With over 200 successful software projects delivered, 99.8% client satisfaction rate, and expertise in 50+ technologies, we have the experience and skills to handle complex software development challenges. Whether you need a custom CRM, e-commerce platform, SaaS application, or enterprise software solution, <strong>Henixa</strong> has the expertise to bring your vision to life.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
                <div className="font-semibold text-cyan-300">Custom Software</div>
                <div className="text-xs mt-1">Tailored solutions for unique business needs</div>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
                <div className="font-semibold text-cyan-300">Web Applications</div>
                <div className="text-xs mt-1">Scalable web apps with modern frameworks</div>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
                <div className="font-semibold text-cyan-300">Mobile Apps</div>
                <div className="text-xs mt-1">iOS & Android native and cross-platform</div>
              </div>
            </div>
            
            <p className="mt-4 text-cyan-200/80">Contact <strong>Henixa Software Development Company</strong> today to discuss your software project requirements and get a free consultation with our technical team.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}