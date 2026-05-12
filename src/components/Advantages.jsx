"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  BarChart3,
  Globe,
  Sparkles,
  Activity,
  Layers3,
  LineChart,
} from "lucide-react";

const advantages = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Full-Funnel DNA",
    text: "We see the entire customer journey - not just the ad click. Every campaign is designed to move people from awareness to action to loyalty.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance-First Mindset",
    text: "Every media decision is tied directly to measurable business outcomes - leads, installs, sales, ROAS, and revenue growth.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cross-Platform Mastery",
    text: "Google, Meta, TikTok, LinkedIn, Programmatic DSPs - we know how every platform behaves and how to scale performance on each.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Audience Intelligence",
    text: "We define audiences through behavior, demographics, intent signals, device patterns, location, and funnel stage data.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Creative + Media Harmony",
    text: "Your message, creative format, and media placement are built together for stronger engagement and conversion impact.",
  },
  {
    icon: <Layers3 className="w-6 h-6" />,
    title: "Zero Guesswork Reporting",
    text: "Crystal-clear dashboards and reporting systems that show what happened, why it worked, and where we scale next.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Always-On Optimization",
    text: "We monitor campaigns daily and continuously optimize bids, budgets, creatives, and targeting for sustained growth.",
  },
];

export default function AdmatrixAdvantage() {
  return (
    <section className="relative overflow-hidden bg-[#070312] py-24 md:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[140px]"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange-400/10 blur-[130px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-start">

          {/* LEFT SIDE - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 sticky top-28 self-start"
          >
            <p className="text-violet-400 uppercase tracking-[0.45em] text-[12px] font-black mb-6">
              WHY ADMAtRIX
            </p>

            <h2 className="text-white text-5xl md:text-6xl lg:text-[78px] leading-[0.95] font-black tracking-tighter mb-8">
              We're Not
              <br />
              A Vendor.
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                We're Your Growth Partner.
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              There's no shortage of media agencies. What's rare is one that thinks like a strategist, 
              executes like a performance team, and reports like your CFO is watching.
            </p>

            {/* 360 Block */}
            <div className="mt-16 flex items-end gap-6">
              <div className="text-[85px] md:text-[110px] font-black leading-none bg-gradient-to-b from-violet-300 to-violet-700 bg-clip-text text-transparent">
                360°
              </div>
              <div className="pb-6">
                <p className="text-white text-xl font-bold uppercase tracking-widest">Full Funnel</p>
                <p className="text-white/60 mt-2 max-w-xs">
                  Media strategy, creative, analytics, and optimization - connected into one scalable growth system.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Compact Cards */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-7 hover:border-violet-500/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-violet-500/10 to-transparent" />

                  <div className="relative z-10 flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white text-xl font-bold tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-[15.5px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}