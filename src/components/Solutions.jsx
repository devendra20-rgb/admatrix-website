// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Solutions = () => {
//   const [activeTab, setActiveTab] = useState('retargeting');

//   const offers = {
//     retargeting: {
//       label: "Next-Gen Retargeting",
//       desc: "Maximize conversion by capturing non-obvious converters that others miss while making novel product recommendations. Deploy engaging, brand-friendly shoppable creative to drive sales.",
//       sub: "Add next-gen retargeting to create momentum and generate actionable insights used in the next phases of the cycle.",
//     },
//     acquisition: {
//       label: "Acquisition",
//       desc: "Generate initial conversion from new-to-file customers. Leverage multi-touch efforts, and dynamic product ads. Get insights about the most valuable new customers.",
//       sub: "Expand your reach and build brand awareness with highly targeted acquisition campaigns.",
//     },
//     engagement: {
//       label: "Engagement",
//       desc: "Engage infrequent visitors and high-intent prospects with personalized, shoppable creative and video with product overlay ads using richer formats.",
//       sub: "Deepen customer relationships with content that resonates and converts.",
//     },
//     demand: {
//       label: "Demand Generation",
//       desc: "Showcase your products and brand message among high-intent prospects. Use video and display ads with product overlays to guide prospects toward purchase.",
//       sub: "Build a robust pipeline by targeting prospects at the top of the funnel.",
//     }
//   };

//   return (
//     <section className="bg-white py-24 md:py-40 overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
//       <div className="max-w-[1600px] mx-auto px-10">
        
//         {/* --- PART 1: HOW WE DELIVER (The Creative Slider) --- */}
//         <div className="text-center mb-44">
//           <p className="text-[#39b14a] font-black tracking-[0.35em] text-[10px] mb-8 uppercase">
//             HOW WE DELIVER
//           </p>
//           <h2 className="text-[42px] md:text-[56px] font-[900] tracking-tight text-[#1a1a1a] leading-[1.05] mb-8">
//             Cut through the noise with <br /> Shoppable Creative
//           </h2>
//           <p className="text-[18px] text-[#5a5a5a] max-w-2xl mx-auto font-medium mb-20 leading-relaxed">
//             We display on-brand shoppable creative with personalized product recommendations based on first-party signals.
//           </p>

//           {/* Shoppable Frames Placeholder - Matching image 16 */}
//           <div className="flex justify-center items-center gap-6 md:gap-12 relative">
//              {/* Left Fade Frame */}
//              <div className="hidden md:block w-[280px] h-[480px] bg-gray-50 rounded-[35px] opacity-40 grayscale blur-[1px] transform -rotate-6">
//                 <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400" className="w-full h-full object-cover rounded-[35px]" alt="fashion" />
//              </div>

//              {/* Center Focus Frame */}
//              <motion.div 
//                whileHover={{ y: -15 }}
//                className="w-[320px] h-[550px] bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative z-10"
//              >
//                 <div className="p-6 flex flex-col items-center">
//                    <div className="w-full h-[360px] bg-gray-200 rounded-3xl mb-8 overflow-hidden">
//                       <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400" className="w-full h-full object-cover" alt="fashion-center" />
//                    </div>
//                    <div className="w-[85%] h-5 bg-gray-100 rounded-full mb-4" />
//                    <div className="w-[65%] h-5 bg-gray-100 rounded-full" />
//                 </div>
//              </motion.div>

//              {/* Right Fade Frame */}
//              <div className="hidden md:block w-[280px] h-[480px] bg-gray-50 rounded-[35px] opacity-40 grayscale blur-[1px] transform rotate-6">
//                 <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400" className="w-full h-full object-cover rounded-[35px]" alt="fashion" />
//              </div>
//           </div>
//         </div>

//         {/* --- PART 2: WHAT WE OFFER (The Tabbed Solutions) --- */}
//         <div className="pt-24 border-t border-gray-100">
//           <div className="text-center mb-16">
//             <p className="text-[#1a1a1a] font-black tracking-[0.35em] text-[10px] mb-8 uppercase">
//               WHAT WE OFFER
//             </p>
//             <h2 className="text-[42px] md:text-[56px] font-[900] tracking-tight text-[#1a1a1a] leading-[1.05] mb-12">
//               First-Party <span className="text-[#39b14a]">Performance Advertising</span> <br /> for Web and App
//             </h2>

//             {/* Pill Tabs */}
//             <div className="inline-flex bg-[#f2f2f2] p-1.5 rounded-full border border-[#ececec]">
//               {Object.keys(offers).map((key) => (
//                 <button
//                   key={key}
//                   onClick={() => setActiveTab(key)}
//                   className={`px-8 py-3.5 rounded-full text-[12px] font-black uppercase tracking-widest transition-all duration-300 ${
//                     activeTab === key 
//                       ? "bg-[#39b14a] text-white shadow-xl" 
//                       : "text-black/50 hover:text-black"
//                   }`}
//                 >
//                   {key === 'demand' ? 'Demand Generation' : key}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Content Card */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="flex flex-col md:flex-row bg-white rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-[#f0f0f0] overflow-hidden min-h-[550px]"
//             >
//               {/* Left Side: Dark Visualizer */}
//               <div className="w-full md:w-[46%] bg-black relative flex items-center justify-center p-12 overflow-hidden">
//                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,6,19,0.1)_0%,transparent_70%)]" />
//                  <div className="relative z-10 w-full h-[60%] border border-white/5 rounded-3xl bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center">
//                     <div className="flex gap-2 mb-4">
//                        {[1,2,3,4].map(i => (
//                          <motion.div key={i} animate={{ height: [20, 50, 20] }} transition={{ repeat: Infinity, duration: 1.5, delay: i*0.2 }} className="w-1.5 bg-[#39b14a] rounded-full opacity-50" />
//                        ))}
//                     </div>
//                     <span className="text-white/10 text-[9px] font-black tracking-[0.4em] uppercase">{activeTab} system active</span>
//                  </div>
//               </div>

//               {/* Right Side: Clean Typography */}
//               <div className="w-full md:w-[54%] p-12 md:p-24 flex flex-col justify-center bg-white">
//                 <h3 className="text-[38px] md:text-[50px] font-[900] text-[#1a1a1a] mb-8 leading-[1.05] tracking-tighter">
//                   {offers[activeTab].label}
//                 </h3>
//                 <p className="text-[19px] leading-[1.7] text-[#5a5a5a] font-medium mb-8">
//                   {offers[activeTab].desc}
//                 </p>
//                 <p className="text-[16px] leading-relaxed text-[#1a1a1a]/30 font-medium ">
//                   {offers[activeTab].sub}
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Solutions;


"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, Target, Download, ShoppingCart, Building2, 
  RotateCw, TestTube, BarChart3, ArrowRight 
} from "lucide-react";

const solutions = [
  {
    title: "Brand Awareness",
    desc: "Build visibility and reach relevant audiences across paid social, video, display, programmatic, and YouTube.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Lead Generation",
    desc: "Capture qualified enquiries through paid media funnels, landing page recommendations, and conversion-focused campaigns.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "App Installs",
    desc: "Acquire app users through CPI, CPA, paid social, programmatic, affiliate, and mobile performance channels.",
    icon: <Download className="w-8 h-8" />,
  },
  {
    title: "Sales & Conversions",
    desc: "Drive measurable actions through performance campaigns, retargeting, search, shopping, and conversion optimization.",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    title: "B2B Growth",
    desc: "Reach decision-makers through LinkedIn, Google Search, content-led campaigns, and lead generation funnels.",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: "Retargeting & Re-engagement",
    desc: "Bring back users who visited, clicked, installed, or showed interest but did not convert.",
    icon: <RotateCw className="w-8 h-8" />,
  },
  {
    title: "Creative Testing",
    desc: "Test multiple creative angles, formats, messages, and CTAs to identify what performs best.",
    icon: <TestTube className="w-8 h-8" />,
  },
  {
    title: "Campaign Reporting",
    desc: "Understand performance clearly through dashboards, insights, and end-of-campaign reports.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

export default function Solutions() {
  return (
    <section className="relative w-full bg-white pt-8 pb-24 md:pt-12 md:pb-32 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-violet-500/5 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">   {/* ← Reduced left-right padding */}

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            SOLUTIONS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6"
          >
            Media solutions built around{" "}
            <span className="bg-gradient-to-r from-orange-600 to-violet-600 bg-clip-text text-transparent">
              your business goals
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Whether you want to build awareness, acquire users, generate leads, 
            drive sales, or improve campaign performance — Admatrix builds the 
            right media approach around your objective.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group bg-white border border-gray-100 hover:border-orange-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-violet-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {solution.desc}
              </p>

              <div className="mt-8 h-0.5 w-16 bg-gradient-to-r from-orange-500 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Discuss Your Goals
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}