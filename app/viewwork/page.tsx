"use client";

import { motion } from "framer-motion";
import { Star, Calendar, Users, Globe, Code } from "lucide-react";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function ViewWork() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Set page title when component mounts
  useEffect(() => {
    document.title = 'Our Portfolio | Henixa Digital Solutions';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our successful web development projects and digital solutions portfolio');
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "Corporate Finance Platform",
      client: "Global Finance Corp",
      description: "Financial management dashboard for enterprise-level accounting and reporting.",
      category: ["web"],
      tags: ["React", "Node.js", "Accounting", "Dashboard"],
      stats: { clients: "Corporate", rating: 4.9, duration: "4 months" },
      color: "from-blue-500 to-purple-600",
      image: "project-1.png"
    },
    {
      id: 2,
      title: "Healthcare Management App",
      client: "MediCare Solutions",
      description: "Patient portal and appointment scheduling system for healthcare providers.",
      category: ["mobile"],
      tags: ["React Native", "Healthcare", "Booking", "Secure"],
      stats: { clients: "Medical", rating: 4.8, duration: "5 months" },
      color: "from-emerald-500 to-cyan-600",
      image: "project-2.png"
    },
    {
      id: 3,
      title: "Online Retail Store",
      client: "UrbanStyle Fashion",
      description: "Complete e-commerce solution with inventory management and payment processing.",
      category: ["web", "ecommerce"],
      tags: ["Next.js", "E-commerce", "Payment", "Inventory"],
      stats: { clients: "Retail", rating: 4.7, duration: "6 months" },
      color: "from-purple-500 to-pink-600",
      image: "project-3.png"
    },
    {
      id: 4,
      title: "Real Estate Portal",
      client: "Prime Properties Ltd",
      description: "Property listing platform with virtual tours and agent management.",
      category: ["web", "design"],
      tags: ["UI/UX", "Property", "Virtual Tour", "Listing"],
      stats: { clients: "Real Estate", rating: 4.9, duration: "3 months" },
      color: "from-amber-500 to-orange-600",
      image: "project-4.png"
    },
    {
      id: 5,
      title: "Logistics Tracking System",
      client: "Swift Logistics Inc",
      description: "Real-time shipment tracking and fleet management platform.",
      category: ["web", "mobile"],
      tags: ["React", "Tracking", "Logistics", "Maps"],
      stats: { clients: "Logistics", rating: 4.8, duration: "7 months" },
      color: "from-green-500 to-teal-600",
      image: "project-5.png"
    },
    {
      id: 6,
      title: "Educational Platform",
      client: "LearnPro Academy",
      description: "Online learning management system with course creation and student tracking.",
      category: ["web"],
      tags: ["Vue.js", "Education", "LMS", "Courses"],
      stats: { clients: "Education", rating: 4.6, duration: "5 months" },
      color: "from-orange-500 to-red-600",
      image: "project-6.png"
    },
    {
      id: 7,
      title: "Restaurant Management App",
      client: "FoodHub Group",
      description: "Complete restaurant management solution with ordering and delivery features.",
      category: ["mobile", "web"],
      tags: ["Flutter", "Restaurant", "Ordering", "Delivery"],
      stats: { clients: "Hospitality", rating: 4.7, duration: "4 months" },
      color: "from-fuchsia-500 to-rose-600",
      image: "project-7.png"
    },
    {
      id: 8,
      title: "Hotel Booking System",
      client: "StayWell Hotels",
      description: "Hotel reservation platform with room management and guest services.",
      category: ["web", "mobile"],
      tags: ["React", "Booking", "Hotels", "Reservation"],
      stats: { clients: "Hospitality", rating: 4.9, duration: "3 months" },
      color: "from-blue-400 to-indigo-600",
      image: "project-8.png"
    }
  ];

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Client</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform their digital presence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { value: "150+", label: "Projects Delivered", icon: <Code className="w-5 h-5" /> },
              { value: "99.8%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
              { value: "15+", label: "Industries Served", icon: <Globe className="w-5 h-5" /> },
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-3">
                  <div className="text-cyan-300">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Grid - REMOVED FILTER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 shadow-2xl h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={`/projects/${project.image}`}
                    alt={`${project.title} - ${project.client}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-3xl font-bold text-white/90 mb-1">{project.client.split(' ')[0]}</div>
                      <div className="text-white/70 text-xs">{project.stats.clients} Sector</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-cyan-300 mb-2">
                      <span className="font-medium">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{project.stats.duration} timeline</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-300">{project.stats.clients} Clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-semibold">{project.stats.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">No projects found matching your criteria</div>
            <button
              onClick={() => {
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Reset Search
            </button>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="relative mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="block">Ready to Be Our</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Next Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve digital excellence.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => window.location.href = "/getstarted"}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}