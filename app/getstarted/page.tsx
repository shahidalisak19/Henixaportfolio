// "use client";

// import { motion } from "framer-motion";
// import { Mail, MessageSquare, Calendar, Clock, CheckCircle, ArrowRight, Sparkles, Menu, X } from "lucide-react";
// import { useState, ChangeEvent, useEffect } from "react";

// type FormData = {
//   name: string;
//   email: string;
//   company: string;
//   projectType: string;
//   budget: string;
//   timeline: string;
//   description: string;
// };

// export default function GetStarted() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     company: "",
//     projectType: "",
//     budget: "",
//     timeline: "",
//     description: ""
//   });
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = e.clientX / window.innerWidth;
//       const y = e.clientY / window.innerHeight;
//       setMousePosition({ x, y });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     document.title = 'Contact Henixa Software Development Company | Get Free Quote';
    
//     const metaDescription = document.querySelector('meta[name="description"]');
//     if (metaDescription) {
//       metaDescription.setAttribute('content', 'Contact Henixa Software Development Company for custom software solutions. Get a free quote for web development, mobile apps, and enterprise software. 24-hour response guaranteed.');
//     }
//   }, []);

//   const projectTypes: string[] = [
//     "Custom Software Development",
//     "Web Application Development",
//     "Mobile App Development",
//     "E-commerce Solutions",
//     "Enterprise Software",
//     "Cloud Solutions",
//     "API Development",
//     "Software Consulting",
//     "Other"
//   ];

//   const timelines: string[] = [
//     "Urgent (1-2 weeks)",
//     "Standard (1 month)",
//     "Medium Term (2-3 months)",
//     "Long Term (3-6 months)",
//     "Ongoing Support",
//     "Flexible Timeline"
//   ];

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Direct email link - opens email without form validation
//   const openEmailDirect = () => {
//     window.location.href = 'mailto:henixa73@gmail.com';
//   };

//   // Form submission with validation - sends pre-filled email
//   const handleSubmit = () => {
//     if (!formData.name || !formData.email || !formData.projectType || !formData.timeline || !formData.description) {
//       alert('Please fill in all required fields');
//       return;
//     }
    
//     const subject = `New Software Project Inquiry - ${formData.company || formData.name}`;
//     const body = `
// New Project Inquiry from Henixa Contact Form

// Client Information:
// ------------------
// Name: ${formData.name}
// Email: ${formData.email}
// Company: ${formData.company || 'Not provided'}

// Project Details:
// ---------------
// Project Type: ${formData.projectType}
// Timeline: ${formData.timeline}
// Budget Range: ${formData.budget || 'Not specified'}

// Project Description:
// -------------------
// ${formData.description}

// ---
// Sent via Henixa Software Development Company Contact Form
//     `.trim();

//     window.location.href = `mailto:henixa73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//   };

//   const openWhatsApp = () => {
//     const phoneNumber = "+923301534132";
//     const message = `Hi Henixa! I'm interested in discussing a software development project.

// Project Type: ${formData.projectType || 'To be discussed'}
// Timeline: ${formData.timeline || 'Flexible'}

// I'd like to learn more about your services.`;
    
//     window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 text-stone-900 overflow-hidden relative">
      
//       {/* Animated Background */}
//       <div className="fixed inset-0 pointer-events-none opacity-30">
//         <motion.div
//           className="absolute w-96 h-96 bg-gradient-to-br from-olive-400/20 to-emerald-400/20 rounded-full blur-3xl"
//           animate={{
//             x: mousePosition.x * 100 - 50,
//             y: mousePosition.y * 100 - 50,
//           }}
//           transition={{ type: "spring", damping: 30 }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl"
//           animate={{
//             x: -(mousePosition.x * 80 - 40),
//             y: -(mousePosition.y * 80 - 40),
//           }}
//           transition={{ type: "spring", damping: 25 }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         {/* Professional Header */}
//         <header className="border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-md sticky top-0 z-50">
//           <div className="max-w-7xl mx-auto px-6 py-1">
//             <div className="flex items-center justify-between">
//               {/* Logo */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-center gap-0.5"
//               >
//                 <img 
//                   src="/logo1.png" 
//                   alt="Henixa Logo" 
//                   className="w-25 h-25 object-contain -mr-5"
//                 />
//                 <div>
//                   <h1 className="text-xl font-bold text-stone-900">HENIXA</h1>
//                   <p className="text-xs text-stone-600">Software Solutions</p>
//                 </div>
//               </motion.div>

//               <nav className="hidden lg:flex items-center gap-8">
//                 <a href="/" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">Home</a>
//                 <a href="#services" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">Services</a>
//                 <a href="#contact" className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">Contact</a>
//               </nav>

//               <div className="hidden md:flex items-center gap-3">
//                 <motion.a
//                   href="/"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-5 py-2.5 border-2 border-emerald-600 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
//                 >
//                   Back to Home
//                 </motion.a>
//                 <motion.button
//                   onClick={openWhatsApp}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-stone-50 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
//                 >
//                   WhatsApp Chat <ArrowRight className="w-4 h-4" />
//                 </motion.button>
//               </div>

//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="md:hidden p-2 text-stone-700"
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>

//             {mobileMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4 space-y-3"
//               >
//                 <a href="/" className="block text-stone-700 hover:text-emerald-700 font-medium">Home</a>
//                 <a href="#services" className="block text-stone-700 hover:text-emerald-700 font-medium">Services</a>
//                 <a href="#contact" className="block text-stone-700 hover:text-emerald-700 font-medium">Contact</a>
//                 <div className="flex flex-col gap-2 pt-2">
//                   <a href="/" className="px-5 py-2.5 border-2 border-emerald-600 text-emerald-700 rounded-lg font-semibold text-center">
//                     Back to Home
//                   </a>
//                   <button onClick={openWhatsApp} className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-stone-50 rounded-lg font-semibold text-center">
//                     WhatsApp Chat
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
//           <div className="text-center max-w-4xl mx-auto space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-200"
//             >
//               <Sparkles className="w-4 h-4 text-emerald-700" />
//               <span className="text-sm font-semibold text-emerald-800">Free Consultation & Project Quote</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight"
//             >
//               Start Your{" "}
//               <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
//                 Software Project
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto"
//             >
//               Let's transform your business with custom software solutions. Get expert consultation and a detailed project proposal within 24 hours.
//             </motion.p>
//           </div>
//         </section>

//         {/* Contact Options & Form */}
//         <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Left - Quick Contact Options */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="space-y-6"
//             >
//               <div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">
//                   Quick Connect
//                 </h3>
//                 <p className="text-stone-600">Choose your preferred way to reach us</p>
//               </div>

//               {/* Email Option - NOW OPENS EMAIL DIRECTLY */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 onClick={openEmailDirect}
//                 className="bg-gradient-to-br from-stone-50 to-amber-50/50 border border-stone-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
//                     <Mail className="w-6 h-6 text-stone-50" />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-lg font-semibold text-stone-900 mb-2">Email Us</h4>
//                     <p className="text-stone-600 text-sm mb-3">
//                       Send detailed project requirements and get a comprehensive proposal
//                     </p>
//                     <div className="flex items-center text-emerald-700 font-medium">
//                       <span>henixa73@gmail.com</span>
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* WhatsApp Option */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 onClick={openWhatsApp}
//                 className="bg-gradient-to-br from-stone-50 to-amber-50/50 border border-stone-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600">
//                     <MessageSquare className="w-6 h-6 text-stone-50" />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-lg font-semibold text-stone-900 mb-2">WhatsApp Chat</h4>
//                     <p className="text-stone-600 text-sm mb-3">
//                       Get instant responses and quick consultation on your project
//                     </p>
//                     <div className="flex items-center text-green-700 font-medium">
//                       <span>Chat Now</span>
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Response Time Badge */}
//               <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-stone-50">
//                 <div className="flex items-center gap-3 mb-2">
//                   <Clock className="w-6 h-6" />
//                   <h4 className="text-lg font-bold">24-Hour Response Guarantee</h4>
//                 </div>
//                 <p className="text-stone-100 text-sm">
//                   We respond to all project inquiries within 24 hours with a detailed consultation
//                 </p>
//               </div>
//             </motion.div>

//             {/* Right - Project Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-gradient-to-br from-stone-50 to-amber-50/50 border border-stone-200 rounded-xl p-6 md:p-8"
//             >
//               <h3 className="text-2xl font-bold text-stone-900 mb-6">Project Details Form</h3>
              
//               <div className="space-y-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-stone-700 mb-2">
//                       Your Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                       placeholder="John Doe"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-stone-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                       placeholder="john@company.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-stone-700 mb-2">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                     placeholder="Your Company (Optional)"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-stone-700 mb-2">
//                       Project Type *
//                     </label>
//                     <select
//                       name="projectType"
//                       value={formData.projectType}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none"
//                     >
//                       <option value="">Select Project Type</option>
//                       {projectTypes.map(type => (
//                         <option key={type} value={type}>
//                           {type}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-stone-700 mb-2">
//                       Timeline *
//                     </label>
//                     <select
//                       name="timeline"
//                       value={formData.timeline}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none"
//                     >
//                       <option value="">Select Timeline</option>
//                       {timelines.map(timeline => (
//                         <option key={timeline} value={timeline}>
//                           {timeline}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-stone-700 mb-2">
//                     Project Description *
//                   </label>
//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     rows={5}
//                     className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
//                     placeholder="Describe your project requirements, goals, features needed, and any specific technical requirements..."
//                   />
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-stone-50 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
//                 >
//                   <Mail className="w-5 h-5" />
//                   Submit Project Inquiry
//                 </button>

//                 <p className="text-sm text-stone-600 text-center">
//                   By submitting, you agree to receive project-related communications from Henixa
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section id="services" className="max-w-7xl mx-auto px-6 py-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
//               Why Choose Henixa Software
//             </h3>
//             <p className="text-stone-600 max-w-2xl mx-auto">
//               We're committed to delivering exceptional software solutions and outstanding customer experience
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: <CheckCircle className="w-6 h-6" />,
//                 title: "Free Expert Consultation",
//                 description: "Get professional software development advice before starting your project"
//               },
//               {
//                 icon: <Clock className="w-6 h-6" />,
//                 title: "24-Hour Response Time",
//                 description: "Quick turnaround on all project inquiries with detailed proposals"
//               },
//               {
//                 icon: <Calendar className="w-6 h-6" />,
//                 title: "Flexible Project Timeline",
//                 description: "Software delivered according to your business schedule and requirements"
//               }
//             ].map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gradient-to-br from-stone-50 to-amber-50/50 border border-stone-200 rounded-xl p-6 text-center hover:shadow-lg transition-all"
//               >
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg mb-4 text-stone-50">
//                   {benefit.icon}
//                 </div>
//                 <h4 className="text-lg font-bold text-stone-900 mb-2">{benefit.title}</h4>
//                 <p className="text-stone-600 text-sm">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="border-t border-stone-200 bg-stone-50/50 backdrop-blur-sm mt-16">
//           <div className="max-w-7xl mx-auto px-6 py-8">
//             <div className="text-center text-stone-600">
//               <p className="font-semibold mb-2">© 2024 Henixa Software Development Company</p>
//               <p className="text-sm">Building Digital Future Through Innovation & Excellence</p>
//             </div>
//           </div>
//         </footer>

//         {/* SEO Content - Hidden but crawlable */}
//         <div className="sr-only">
//           <h1>Contact Henixa Software Development Company | Get Free Quote</h1>
//           <p>
//             Contact Henixa Software Development Company for custom software solutions, web application development, mobile app development, and enterprise software services. Get a free consultation and detailed project quote within 24 hours.
//           </p>
//           <h2>Request Software Development Services</h2>
//           <p>
//             Fill out our contact form to start your software development project with Henixa. Our expert development team specializes in custom software development, web applications using React and Next.js, mobile apps with React Native and Flutter, cloud solutions on AWS and Azure, and enterprise software systems.
//           </p>
//           <h2>Free Software Development Consultation</h2>
//           <p>
//             Henixa offers free consultation for all software development projects. Whether you need a custom CRM system, e-commerce platform, SaaS application, or mobile app, our team provides expert guidance on technology stack, architecture design, development timeline, and project budget.
//           </p>
//           <h2>Contact Methods - Email and WhatsApp</h2>
//           <p>
//             Reach Henixa Software Development Company via email at henixa73@gmail.com for detailed project inquiries and proposals. For quick consultations and instant responses, connect with us on WhatsApp. We guarantee a response within 24 hours to all project inquiries.
//           </p>
//           <h2>Software Development Services Available</h2>
//           <ul>
//             <li>Custom Software Development - Tailored solutions for unique business requirements</li>
//             <li>Web Application Development - Using React, Next.js, Node.js, Python Django</li>
//             <li>Mobile App Development - Native iOS/Android and cross-platform solutions</li>
//             <li>E-commerce Solutions - Complete online store development with payment integration</li>
//             <li>Enterprise Software - CRM, ERP, and business management systems</li>
//             <li>Cloud Solutions - AWS, Azure, and Google Cloud deployment and management</li>
//             <li>API Development - RESTful and GraphQL API design and implementation</li>
//             <li>Software Consulting - Technology advisory and architecture planning</li>
//           </ul>
//           <p>
//             Start your software development project today with Henixa. Our proven track record includes 200+ successfully delivered projects, 99.8% client satisfaction rate, and expertise in 50+ modern technologies. Contact us now for a free consultation and transform your business with custom software solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Calendar, Clock, CheckCircle, ArrowRight, Sparkles, Menu, X, Phone, Send, User, Briefcase, Globe, Zap } from "lucide-react";
import { useState, ChangeEvent, useEffect } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
};

export default function GetStarted() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Floating shapes for background
  const floatingShapes = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 10,
    color: i % 3 === 0 ? 'from-purple-500/10' : i % 3 === 1 ? 'from-blue-500/10' : 'from-pink-500/10'
  }));

  useEffect(() => {
    document.title = 'Contact Henixa Software Development Company | Get Free Quote';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Henixa Software Development Company for custom software solutions. Get a free quote for web development, mobile apps, and enterprise software. 24-hour response guaranteed.');
    }
  }, []);

  const projectTypes: string[] = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Enterprise Software",
    "Cloud Solutions",
    "API Development",
    "Software Consulting",
    "Other"
  ];

  const timelines: string[] = [
    "Urgent (1-2 weeks)",
    "Standard (1 month)",
    "Medium Term (2-3 months)",
    "Long Term (3-6 months)",
    "Ongoing Support",
    "Flexible Timeline"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Direct email link - opens email without form validation
  const openEmailDirect = () => {
    window.location.href = 'mailto:henixa73@gmail.com';
  };

  // Form submission with validation - sends pre-filled email
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.projectType || !formData.timeline || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }
    
    const subject = `New Software Project Inquiry - ${formData.company || formData.name}`;
    const body = `
New Project Inquiry from Henixa Contact Form

Client Information:
------------------
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Project Details:
---------------
Project Type: ${formData.projectType}
Timeline: ${formData.timeline}
Budget Range: ${formData.budget || 'Not specified'}

Project Description:
-------------------
${formData.description}

---
Sent via Henixa Software Development Company Contact Form
    `.trim();

    window.location.href = `mailto:henixa73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const openWhatsApp = () => {
    const phoneNumber = "+923301534132";
    const message = `Hi Henixa! I'm interested in discussing a software development project.

Project Type: ${formData.projectType || 'To be discussed'}
Timeline: ${formData.timeline || 'Flexible'}

I'd like to learn more about your services.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden relative">
      
      {/* Modern Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
        
        {/* Floating gradient shapes */}
        {floatingShapes.map((shape) => (
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
        {/* Sleek Header - Matching Theme */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-xl border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
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
                  <a href="/">
                    <img 
                      src="/logo1.png" 
                      alt="Henixa Logo" 
                      className="w-24 h-24 object-contain relative z-10 -mr-5"
                    />
                  </a>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    HENIXA
                  </h1>
                  <p className="text-sm text-gray-400 font-medium">Software Solutions</p>
                </div>
              </motion.div>

              <nav className="hidden lg:flex items-center gap-6">
                <a href="/" className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group">
                  <span className="relative z-10">Home</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group">
                  <span className="relative z-10">Services</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
                >
                  Back to Home
                </motion.a>
                <motion.button
                  onClick={openWhatsApp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center gap-2"
                >
                  WhatsApp Chat <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                {mobileMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4 space-y-3"
              >
                <a href="/" className="block text-gray-300 hover:text-purple-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-all">Home</a>
                <a href="#services" className="block text-gray-300 hover:text-purple-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-all">Services</a>
                <a href="#contact" className="block text-gray-300 hover:text-purple-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-all">Contact</a>
                <div className="flex flex-col gap-2 pt-2">
                  <a href="/" className="px-5 py-2.5 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-center hover:bg-purple-500/10 transition-all">
                    Back to Home
                  </a>
                  <button onClick={openWhatsApp} className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                    WhatsApp Chat
                  </button>
                </div>
              </motion.div>
            )}
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
              <span className="text-sm font-semibold text-purple-300">Free Consultation & Project Quote</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              <span className="block text-gray-300">Start Your</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Software Project
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Let's transform your business with custom software solutions. Get expert consultation and a detailed project proposal within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Contact Options & Form */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Quick Connect
                </h3>
                <p className="text-gray-400">Choose your preferred way to reach us</p>
              </div>

              {/* Email Option */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={openEmailDirect}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl p-6 cursor-pointer hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Send detailed project requirements and get a comprehensive proposal
                    </p>
                    <div className="flex items-center text-purple-300 font-medium">
                      <span>henixa73@gmail.com</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp Option */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={openWhatsApp}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl p-6 cursor-pointer hover:shadow-2xl hover:border-green-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-emerald-500/0 to-teal-500/0 group-hover:from-green-500/5 group-hover:via-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">WhatsApp Chat</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Get instant responses and quick consultation on your project
                    </p>
                    <div className="flex items-center text-green-300 font-medium">
                      <span>Chat Now</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Response Time Badge */}
              <div className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 rounded-xl p-6 text-white backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-lg font-bold">24-Hour Response Guarantee</h4>
                </div>
                <p className="text-gray-100 text-sm group-hover:text-white transition-colors">
                  We respond to all project inquiries within 24 hours with a detailed consultation
                </p>
              </div>
            </motion.div>

            {/* Right - Project Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl p-6 md:p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Project Details Form</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your Company (Optional)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-10 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select Project Type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Timeline *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full pl-12 pr-10 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select Timeline</option>
                        {timelines.map(timeline => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Describe your project requirements, goals, features needed, and any specific technical requirements..."
                    />
                  </div>
                </div>

                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold hover:shadow-xl hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Submit Project Inquiry
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting, you agree to receive project-related communications from Henixa
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Henixa Software
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We're committed to delivering exceptional software solutions and outstanding customer experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Free Expert Consultation",
                description: "Get professional software development advice before starting your project",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "24-Hour Response Time",
                description: "Quick turnaround on all project inquiries with detailed proposals",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Flexible Project Timeline",
                description: "Software delivered according to your business schedule and requirements",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl p-6 text-center hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 py-12 px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-4 mb-4">
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
                <p className="text-gray-500 text-sm">
                  Building Digital Future Through Innovation & Excellence
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
              </div>
            </div>

            <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2024 Henixa Software Development Company. All rights reserved.
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

              {["Home", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="block text-2xl font-semibold text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="flex flex-col gap-2 pt-6">
                <a href="/" className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold text-center hover:bg-purple-500/10 transition-all">
                  Back to Home
                </a>
                <button onClick={openWhatsApp} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* SEO Content - Hidden but crawlable */}
        <div className="sr-only">
          <h1>Contact Henixa Software Development Company | Get Free Quote</h1>
          <p>
            Contact Henixa Software Development Company for custom software solutions, web application development, mobile app development, and enterprise software services. Get a free consultation and detailed project quote within 24 hours.
          </p>
          <h2>Request Software Development Services</h2>
          <p>
            Fill out our contact form to start your software development project with Henixa. Our expert development team specializes in custom software development, web applications using React and Next.js, mobile apps with React Native and Flutter, cloud solutions on AWS and Azure, and enterprise software systems.
          </p>
          <h2>Free Software Development Consultation</h2>
          <p>
            Henixa offers free consultation for all software development projects. Whether you need a custom CRM system, e-commerce platform, SaaS application, or mobile app, our team provides expert guidance on technology stack, architecture design, development timeline, and project budget.
          </p>
          <h2>Contact Methods - Email and WhatsApp</h2>
          <p>
            Reach Henixa Software Development Company via email at henixa73@gmail.com for detailed project inquiries and proposals. For quick consultations and instant responses, connect with us on WhatsApp. We guarantee a response within 24 hours to all project inquiries.
          </p>
          <h2>Software Development Services Available</h2>
          <ul>
            <li>Custom Software Development - Tailored solutions for unique business requirements</li>
            <li>Web Application Development - Using React, Next.js, Node.js, Python Django</li>
            <li>Mobile App Development - Native iOS/Android and cross-platform solutions</li>
            <li>E-commerce Solutions - Complete online store development with payment integration</li>
            <li>Enterprise Software - CRM, ERP, and business management systems</li>
            <li>Cloud Solutions - AWS, Azure, and Google Cloud deployment and management</li>
            <li>API Development - RESTful and GraphQL API design and implementation</li>
            <li>Software Consulting - Technology advisory and architecture planning</li>
          </ul>
          <p>
            Start your software development project today with Henixa. Our proven track record includes 200+ successfully delivered projects, 99.8% client satisfaction rate, and expertise in 50+ modern technologies. Contact us now for a free consultation and transform your business with custom software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}