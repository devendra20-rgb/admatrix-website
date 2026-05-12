"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Target,
  Download,
  ShoppingCart,
  Building2,
  RotateCw,
  TestTube,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    title: "Brand Awareness",
    desc: "Break through the noise with high-impact reach campaigns across paid social, video, YouTube, display, and programmatic - built to make your brand impossible to ignore.",
    icon: <Users className="w-7 h-7" />,
  },
  {
    title: "Lead Generation",
    desc: "Capture qualified, high-intent enquiries through precision-targeted paid media, conversion-optimized landing pages, and funnel strategies that filter signal from noise.",
    icon: <Target className="w-7 h-7" />,
  },
  {
    title: "App Installs & Growth",
    desc: "Grow your user base with performance-led UA campaigns across paid social, programmatic, and mobile networks - optimized for quality, not just volume.",
    icon: <Download className="w-7 h-7" />,
  },
  {
    title: "Sales & Conversions",
    desc: "Drive measurable commercial outcomes through search, shopping, retargeting, and performance campaigns focused on ROAS, CPA, and revenue - not just traffic.",
    icon: <ShoppingCart className="w-7 h-7" />,
  },
  {
    title: "B2B Growth",
    desc: "Reach the decision-makers who matter through LinkedIn, Google Search, and content-led demand generation funnels - built for pipeline, not just impressions.",
    icon: <Building2 className="w-7 h-7" />,
  },
  {
    title: "Retargeting & Re-engagement",
    desc: "Recover the audience you've already earned. Bring back visitors, abandoners, and lapsed users with smart, sequenced retargeting campaigns that convert second chances.",
    icon: <RotateCw className="w-7 h-7" />,
  },
  {
    title: "Creative Testing",
    desc: "Systematically discover what messaging, format, and visual approach makes your audience act - through structured creative testing frameworks built for learning at scale.",
    icon: <TestTube className="w-7 h-7" />,
  },
  {
    title: "Campaign Reporting",
    desc: "Understand your campaigns with complete clarity through live dashboards, plain-language insights, and end-of-campaign reports that guide your next investment.",
    icon: <BarChart3 className="w-7 h-7" />,
  },
];

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-[#faf7ff] py-28 md:py-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* PURPLE GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-violet-300/20 blur-[120px]"
        />

        {/* ORANGE GLOW */}
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-[-10%] right-[5%] w-[450px] h-[450px] rounded-full bg-orange-200/30 blur-[120px]"
        />

        {/* GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.07)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-20 md:mb-24">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-600 uppercase tracking-[0.35em] text-[12px] font-black mb-6"
          >
            Solutions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[#151515] text-5xl md:text-7xl lg:text-[82px] font-black leading-[0.95] tracking-tight mb-8"
          >
            Media Solutions
            <br />

            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Built Around
            </span>

            <br />
            Your Business Goals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Whether you want to build awareness, acquire users,
            generate leads, drive sales, or improve campaign performance -
            Admatrix builds the right media approach around your objective.
          </motion.p>
        </div>

        {/* SOLUTIONS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/75 backdrop-blur-xl p-8 md:p-9 shadow-[0_10px_40px_rgba(139,92,246,0.08)] hover:shadow-[0_25px_70px_rgba(139,92,246,0.16)] transition-all duration-500"
            >

              {/* TOP LINE */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-orange-400 group-hover:w-full transition-all duration-700" />

              {/* HOVER GLOW */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet-300/20 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* ICON */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.06,
                }}
                className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-orange-500 flex items-center justify-center text-white mb-7 shadow-[0_12px_35px_rgba(139,92,246,0.25)]"
              >
                {solution.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="relative z-10 text-[#151515] text-[26px] font-black leading-[1.15] tracking-tight mb-5">
                {solution.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-gray-600 text-[16px] leading-[1.85]">
                {solution.desc}
              </p>

              {/* HOVER LINE */}
              <div className="relative z-10 mt-8 h-[2px] w-16 bg-gradient-to-r from-violet-500 to-orange-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-20"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-orange-500 text-white font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(139,92,246,0.25)] hover:scale-105 transition-all duration-300"
          >

            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

            <span className="relative z-10">
              Discuss Your Goals
            </span>

            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}