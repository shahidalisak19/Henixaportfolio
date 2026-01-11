"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Smartphone, Zap, Shield, Cpu, Palette, Rocket, Star, Target } from "lucide-react";
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

  const services = [
    { icon: <Globe className="w-4 h-4" />, text: "Web Dev", color: "from-blue-500 to-cyan-500", bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: <Smartphone className="w-4 h-4" />, text: "Mobile", color: "from-green-500 to-emerald-500", bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10" },
    { icon: <Cpu className="w-4 h-4" />, text: "AI", color: "from-purple-500 to-violet-500", bg: "bg-gradient-to-br from-purple-500/10 to-violet-500/10" },
    { icon: <Shield className="w-4 h-4" />, text: "Security", color: "from-amber-500 to-orange-500", bg: "bg-gradient-to-br from-amber-500/10 to-orange-500/10" },
    { icon: <Palette className="w-4 h-4" />, text: "UI/UX", color: "from-pink-500 to-rose-500", bg: "bg-gradient-to-br from-pink-500/10 to-rose-500/10" },
    { icon: <Rocket className="w-4 h-4" />, text: "Digital", color: "from-cyan-500 to-teal-500", bg: "bg-gradient-to-br from-cyan-500/10 to-teal-500/10" },
  ];

  const stats = [
    { value: "150+", label: "Projects", icon: <Target className="w-3 h-3" /> },
    { value: "99.8%", label: "Satisfaction", icon: <Star className="w-3 h-3" /> },
    { value: "24/7", label: "Support", icon: <Shield className="w-3 h-3" /> },
    { value: "40%", label: "Growth", icon: <ArrowRight className="w-3 h-3" /> },
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
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
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
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              HENIXA
            </span>
            <div className="w-px h-4 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <span className="text-xs text-cyan-200/80 font-medium">
              Next-Gen Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="block text-white/90">Transform Ideas into</span>
            <span className="block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm max-w-md mx-auto mb-5"
          >
            We create <span className="text-cyan-300 font-medium">scalable solutions</span> that drive measurable growth for forward-thinking businesses.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
          />
        </motion.div>

        {/* Services & Stats Side by Side */}
        <div className="flex flex-col lg:flex-row gap-5 mb-6">
          {/* Services - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-2/3"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                Our Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
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
            transition={{ delay: 0.4 }}
            className="lg:w-1/3"
          >
            <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-5 shadow-2xl">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-300" />
                Our Results
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
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

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-6 text-sm"
        >
          {["Enterprise Security", "24/7 Support", "Agile Development", "Scalable Solutions"].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
              <span className="text-white/80">{feature}</span>
            </motion.div>
          ))}
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
                  <h3 className="text-lg font-bold text-white mb-1">Ready to Transform?</h3>
                  <p className="text-sm text-cyan-100/70">Let's build something amazing together</p>
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href="/viewwork"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      View Work
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="/getstarted"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-lg font-semibold border border-cyan-500/50 text-cyan-300 text-sm hover:bg-cyan-500/10 transition-colors"
                  >
                    Get Started
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
            Driving measurable growth through innovative digital solutions
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}