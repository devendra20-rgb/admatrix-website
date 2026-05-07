"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, TrendingUp, Target, Lightbulb, Users, Award, ArrowRight } from "lucide-react";

const values = [
  { icon: <Eye className="w-8 h-8" />, title: "Clarity", desc: "We keep media strategy, communication, and reporting simple and clear." },
  { icon: <TrendingUp className="w-8 h-8" />, title: "Performance", desc: "We focus on measurable outcomes, not just campaign delivery." },
  { icon: <Target className="w-8 h-8" />, title: "Accountability", desc: "We take ownership of planning, execution, optimization, and reporting." },
  { icon: <Lightbulb className="w-8 h-8" />, title: "Creativity", desc: "We believe strong creative is a performance driver, not just a design element." },
  { icon: <Users className="w-8 h-8" />, title: "Transparency", desc: "We believe clients should understand where budgets are going and what results are coming back." },
  { icon: <Award className="w-8 h-8" />, title: "Growth Mindset", desc: "We test, learn, optimize, and scale based on real campaign signals." },
];

export default function AboutContent() {
  return (
    <div className="bg-white">
      {/* ==================== OUR STORY ==================== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/50 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-100/50 blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-orange-600 uppercase mb-4">The Beginning</h2>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">Our Story</h1>
          </motion.div>
          
          <div className="grid gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-snug">
                Admatrix was built with a clear belief: <span className="text-gray-900 font-bold underline decoration-orange-400 decoration-4 underline-offset-4">media should not be treated as only buying impressions or clicks.</span> It should be planned as a complete growth system.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 text-gray-600 text-lg"
              >
                Today, customers discover, compare, and choose brands across many digital touchpoints — video, search, social ads, website visits, and retargeting.
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-violet-600 text-white text-lg shadow-lg shadow-violet-200"
              >
                That is why Admatrix brings <span className="font-bold">strategy, media, creative, data, and optimization</span> together to build connected campaigns that deliver real results.
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VISION ==================== */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/40 transition-colors" />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500 mb-8 shadow-lg shadow-orange-500/20">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-orange-400 font-bold tracking-widest text-sm mb-4 uppercase">Our Mission</h3>
            <p className="text-2xl md:text-3xl font-medium leading-tight">
              To help brands grow through smarter media planning, creative thinking, and performance execution.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl group-hover:bg-violet-500/40 transition-colors" />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500 mb-8 shadow-lg shadow-violet-500/20">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-violet-400 font-bold tracking-widest text-sm mb-4 uppercase">Our Vision</h3>
            <p className="text-2xl md:text-3xl font-medium leading-tight">
              To become the trusted full-funnel partner for brands looking to scale across all digital growth channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
              >
                Our Values
              </motion.h2>
              <p className="text-xl text-gray-500">The core principles that drive our performance and your growth.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-100 mx-10 mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover Background Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 text-gray-900 group-hover:bg-white group-hover:scale-110 group-hover:text-orange-600 transition-all duration-500 shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}