"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Calendar, Users, Code, Menu, X, Search, ExternalLink, Layers, Server, Cpu, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function ViewWork() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [floatingShapes, setFloatingShapes] = useState<Array<any>>([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // SEO: Set page metadata
  useEffect(() => {
    // Update document title with keywords
    document.title = 'Software Development Portfolio | 3Cs Custom Software Solutions';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore 3Cs software development portfolio - 200+ successful custom software projects in web development, mobile apps, and enterprise solutions. See our work and client testimonials.');
    }

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Software Development Portfolio | 3Cs Custom Software Solutions');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Browse our portfolio of custom software development projects. 3Cs delivers web apps, mobile apps, and enterprise solutions for businesses worldwide.');
  }, []);

  // Initialize client-side only content
  useEffect(() => {
    setIsClient(true);
    
    // Floating shapes with deterministic values
    const shapes = Array.from({ length: 8 }).map((_, i) => {
      const seed = i * 123.456;
      const x = (Math.sin(seed) * 0.5 + 0.5) * 100;
      const y = (Math.cos(seed * 1.5) * 0.5 + 0.5) * 100;
      const size = 20 + (i % 4) * 10;
      
      return {
        id: i,
        x,
        y,
        size,
        delay: (i * 0.5) % 2,
        duration: 10 + (i % 5) * 5,
        color: i % 3 === 0 ? 'from-purple-500/10' : i % 3 === 1 ? 'from-blue-500/10' : 'from-pink-500/10'
      };
    });
    setFloatingShapes(shapes);
  }, []);

  // Your projects data with SEO-friendly descriptions
  const projects = [
    {
      id: 1,
      title: "Corporate Finance Platform",
      client: "Global Finance Corp",
      description: "Enterprise financial management dashboard for accounting, reporting, and financial analytics.",
      category: ["web"],
      tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      stats: { clients: "Corporate", rating: 4.9, duration: "4 months" },
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/5",
      seoKeywords: ["financial software", "corporate finance", "enterprise accounting", "business dashboard"]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "MediCare Solutions",
      description: "Comprehensive healthcare platform with patient portal, appointment scheduling, and medical records management.",
      category: ["web", "mobile"],
      tags: ["React Native", "Python", "Django", "MongoDB"],
      stats: { clients: "Medical", rating: 4.8, duration: "5 months" },
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5",
      seoKeywords: ["healthcare software", "patient management", "medical app", "appointment system"]
    },
    {
      id: 3,
      title: "E-commerce Retail Platform",
      client: "UrbanStyle Fashion",
      description: "Full-featured e-commerce solution with inventory management, payment processing, and customer analytics.",
      category: ["web", "ecommerce"],
      tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      stats: { clients: "Retail", rating: 4.7, duration: "6 months" },
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/5",
      seoKeywords: ["e-commerce development", "online store", "retail software", "payment integration"]
    },
    {
      id: 4,
      title: "Real Estate Portal",
      client: "Prime Properties Ltd",
      description: "Property listing platform with virtual tours, agent management, and advanced search features.",
      category: ["web", "mobile"],
      tags: ["React", "Java", "Spring Boot", "MySQL"],
      stats: { clients: "Real Estate", rating: 4.9, duration: "3 months" },
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/5",
      seoKeywords: ["real estate software", "property management", "virtual tours", "property listing"]
    },
    {
      id: 5,
      title: "Logistics Tracking System",
      client: "Swift Logistics Inc",
      description: "Real-time shipment tracking, fleet management, and logistics optimization platform.",
      category: ["web", "mobile"],
      tags: ["React", "Node.js", "AWS", "Docker"],
      stats: { clients: "Logistics", rating: 4.8, duration: "7 months" },
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-purple-500/5",
      seoKeywords: ["logistics software", "shipment tracking", "fleet management", "transportation tech"]
    },
    {
      id: 6,
      title: "Educational Platform",
      client: "LearnPro Academy",
      description: "Online learning management system with course creation, student tracking, and certification.",
      category: ["web"],
      tags: ["Vue.js", "Python", "Django", "PostgreSQL"],
      stats: { clients: "Education", rating: 4.6, duration: "5 months" },
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/5",
      seoKeywords: ["education software", "LMS", "online learning", "course management"]
    },
    {
      id: 7,
      title: "Restaurant Management App",
      client: "FoodHub Group",
      description: "Complete restaurant management solution with ordering, delivery, and inventory features.",
      category: ["mobile", "web"],
      tags: ["Flutter", "Node.js", "MongoDB", "Firebase"],
      stats: { clients: "Hospitality", rating: 4.7, duration: "4 months" },
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-indigo-500/5",
      seoKeywords: ["restaurant software", "food ordering", "delivery app", "hospitality tech"]
    },
    {
      id: 8,
      title: "Hotel Booking System",
      client: "StayWell Hotels",
      description: "Hotel reservation platform with room management, guest services, and booking optimization.",
      category: ["web", "mobile"],
      tags: ["React", "Next.js", "TypeScript", "MySQL"],
      stats: { clients: "Hospitality", rating: 4.9, duration: "3 months" },
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-500/5",
      seoKeywords: ["hotel booking software", "reservation system", "hospitality software", "guest management"]
    }
  ];

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    project.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { value: "200+", label: "Software Projects Delivered", icon: <Code className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { value: "99.8%", label: "Client Satisfaction Rate", icon: <Star className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { value: "50+", label: "Technologies & Frameworks", icon: <Cpu className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
    { value: "24/7", label: "Development Support", icon: <Server className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith('/')) {
      router.push(path);
    } else if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Software Development Portfolio | 3Cs",
              "description": "Browse our custom software development projects and solutions",
              "url": "https://3Csportfolio.vercel.app/viewwork",
              "about": {
                "@type": "Organization",
                "name": "3Cs Software Development Company",
                "url": "https://3Csportfolio.vercel.app",
                "description": "Custom software development company specializing in web applications, mobile apps, and enterprise solutions."
              },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": projects.map((project, index) => ({
                  "@type": "SoftwareApplication",
                  "position": index + 1,
                  "name": project.title,
                  "description": project.description,
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web, iOS, Android",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }))
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden relative">
        
        {/* Modern Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
          
          {(isClient ? floatingShapes : []).map((shape) => (
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
                duration: shape.duration || 15,
                repeat: Infinity,
                ease: "linear",
                delay: shape.delay || 0,
              }}
              suppressHydrationWarning
            />
          ))}
          
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-xl border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo with SEO-friendly alt text */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4 group"
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
                    <Link href="/" className="cursor-pointer">
                      <img 
                        src="/logo1.png" 
                        alt="3Cs Software Development Company Logo - Custom Software Solutions" 
                        className="w-24 h-24 object-contain relative z-10 -mr-5"
                      />
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      3Cs
                    </h1>
                    <p className="text-sm text-gray-400 font-medium">Software Solutions</p>
                  </div>
                </motion.div>

                {/* Desktop Navigation with SEO-friendly anchor text */}
                <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
                  <button
                    onClick={() => handleNavigation('/')}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                    aria-label="Home"
                  >
                    <span className="relative z-10">Home</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </button>
                  <button
                    onClick={() => handleNavigation('#portfolio')}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                    aria-label="View our software development portfolio"
                  >
                    <span className="relative z-10">Portfolio</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </button>
                  <button
                    onClick={() => handleNavigation('#technologies')}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                    aria-label="Technologies we use for software development"
                  >
                    <span className="relative z-10">Technologies</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </button>
                  <button
                    onClick={() => handleNavigation('#clients')}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                    aria-label="Client testimonials and success stories"
                  >
                    <span className="relative z-10">Clients</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </button>
                  <button
                    onClick={() => handleNavigation('/getstarted')}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group"
                    aria-label="Contact us for software development"
                  >
                    <span className="relative z-10">Contact</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </button>
                </nav>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors relative group"
                  aria-label="Toggle mobile menu"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  {mobileMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section with SEO-friendly content */}
          <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">Custom Software Development Portfolio</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
              >
                <span className="block text-gray-300">Custom Software Projects</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  That Drive Results
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
              >
                Explore our portfolio of 200+ successful custom software development projects across industries including finance, healthcare, e-commerce, and logistics. Each solution is built with modern technologies to solve specific business challenges.
              </motion.p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl p-6 text-center backdrop-blur-sm hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Search Section */}
          <section className="max-w-4xl mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <label htmlFor="projectSearch" className="sr-only">Search Software Projects</label>
                <input
                  id="projectSearch"
                  type="text"
                  placeholder="Search custom software projects by technology, industry, or client..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-gray-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400">
                  <Search className="w-5 h-5" />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Try searching for: "React", "Healthcare", "E-commerce", or client names
              </p>
            </motion.div>
          </section>

          {/* Portfolio Grid */}
          <section id="portfolio" className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Software Development <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group h-full"
                >
                  <article className={`${project.bgColor} border border-gray-800 rounded-2xl p-6 h-full flex flex-col backdrop-blur-sm hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                    
                    <div className="mb-6 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Layers className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full backdrop-blur-sm">
                            <Star className="w-3 h-3 fill-purple-400" />
                            {project.stats.rating}/5
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <span className="font-medium">Client:</span>
                        <span className="text-purple-300 font-semibold">{project.client}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 flex-grow relative z-10">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-900/50 text-xs font-medium text-gray-300 rounded-full border border-gray-800 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gray-800 mt-auto relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-gray-400">{project.stats.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-gray-400">{project.stats.clients}</span>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                          onClick={() => {
                            alert(`Viewing details for ${project.title}`);
                          }}
                          aria-label={`View details for ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-500 mb-4 text-lg">No projects found matching your search criteria</div>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center gap-2 mx-auto"
                  aria-label="Clear search filters"
                >
                  <X className="w-4 h-4" />
                  Clear Search
                </button>
              </motion.div>
            )}
          </section>

          {/* Technologies Section */}
          <section id="technologies" className="max-w-7xl mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Master for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Custom Software Development</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Our custom software development projects leverage a wide range of modern technologies and frameworks to deliver optimal solutions
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {["React/Next.js", "Node.js", "Python/Django", "Java/Spring", "TypeScript", "React Native", "Flutter", "AWS/Azure", "Docker/Kubernetes", "PostgreSQL/MongoDB", "GraphQL/REST", "Redis", "Firebase", "Vue.js", "PHP/Laravel"].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-xl font-medium text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 cursor-default group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300" />
                  <span className="relative z-10">{tech}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Client Testimonials */}
          <section id="clients" className="max-w-7xl mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Success stories from businesses we've helped transform with custom software solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "3Cs delivered our financial platform ahead of schedule with exceptional quality. Their team's expertise in React and Node.js was impressive.",
                  author: "John Carter",
                  position: "CTO, Global Finance Corp",
                  rating: 5
                },
                {
                  quote: "The healthcare management system they built for us has revolutionized our patient care process. Highly professional team.",
                  author: "Sarah Johnson",
                  position: "Director, MediCare Solutions",
                  rating: 5
                },
                {
                  quote: "Our e-commerce platform handles thousands of transactions daily without issues. 3Cs's scalable architecture is outstanding.",
                  author: "Michael Chen",
                  position: "CEO, UrbanStyle Fashion",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 group-hover:text-gray-200 transition-colors">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">{testimonial.author}</div>
                    <div className="text-sm text-purple-400">{testimonial.position}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-gray-800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/50 to-pink-900/20" />
              
              {isClient && (
                <>
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
                </>
              )}
              
              <div className="relative z-10 p-12 md:p-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
                  <CheckCircle className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-semibold text-purple-300">Ready to Start Your Custom Software Project</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Be Our Next
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Success Story?
                  </span>
                </h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                  Let's discuss how we can transform your business with custom software solutions
                </motion.p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => handleNavigation('/getstarted')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
                    aria-label="Start your custom software project with 3Cs"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleNavigation('/')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-transparent border-2 border-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-800/30 hover:border-purple-500/50 hover:text-white transition-all"
                    aria-label="Back to 3Cs Software Development Company homepage"
                  >
                    Back to Home
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-800/50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="/logo1.png" 
                      alt="3Cs Software Development Company Logo" 
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        3Cs
                      </h4>
                      <p className="text-sm text-gray-400">Software Solutions</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Transforming Businesses Through Innovative Custom Software Solutions
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <button
                    onClick={() => handleNavigation('/')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    aria-label="Home"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavigation('#portfolio')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    aria-label="Software Development Portfolio"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => handleNavigation('#technologies')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    aria-label="Technologies"
                  >
                    Technologies
                  </button>
                  <button
                    onClick={() => handleNavigation('#clients')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    aria-label="Client Testimonials"
                  >
                    Clients
                  </button>
                  <button
                    onClick={() => handleNavigation('/getstarted')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    aria-label="Contact 3Cs"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                  © 2024 3Cs Software Development Company. All rights reserved.
                </p>
              </div>
            </div>
          </footer>

          {/* Mobile Menu Overlay */}
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
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <img 
                      src="/logo1.png" 
                      alt="3Cs Software Development Company Logo" 
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        3Cs
                      </h4>
                      <p className="text-sm text-gray-400">Software Solutions</p>
                    </div>
                  </div>
                </div>

                {["Home", "Portfolio", "Technologies", "Clients", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      if (item === "Home") {
                        handleNavigation('/');
                      } else if (item === "Contact") {
                        handleNavigation('/getstarted');
                      } else {
                        handleNavigation(`#${item.toLowerCase()}`);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="block text-2xl font-semibold text-gray-300 hover:text-white transition-colors py-2"
                    aria-label={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}