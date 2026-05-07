"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Palette, Zap, Globe, Target, TrendingUp, Lightbulb, BarChart3, ArrowRight } from "lucide-react";

const homeServices = [
  {
    title: "Full-Funnel Media Strategy",
    icon: <Target className="w-10 h-10" />,
    oneLiner: "We build connected media plans that guide users from awareness to consideration, conversion, and retention.",
    microText: [
      "Funnel planning",
      "Audience segmentation",
      "Channel strategy",
      "Budget allocation",
      "Campaign roadmap",
      "KPI planning",
    ],
    link: "/services#full-funnel",
  },
  {
    title: "Performance Marketing",
    icon: <TrendingUp className="w-10 h-10" />,
    oneLiner: "Performance-led campaigns focused on measurable actions like leads, purchases, sign-ups, and conversions.",
    microText: [
      "Lead generation campaigns",
      "CPA, CPL, CPI & ROAS focus",
      "Conversion tracking",
      "A/B testing & optimization",
    ],
    link: "/services#performance",
  },
  {
    title: "User Acquisition",
    icon: <Globe className="w-10 h-10" />,
    oneLiner: "Quality user acquisition through targeted media buying, performance campaigns, and event optimization.",
    microText: [
      "App install campaigns",
      "CPI & CPA buying",
      "Retargeting & re-engagement",
      "Fraud monitoring",
    ],
    link: "/services#user-acquisition",
  },
  {
    title: "Programmatic & Display",
    icon: <Zap className="w-10 h-10" />,
    oneLiner: "Reach relevant audiences across premium inventory using programmatic buying and real-time optimization.",
    microText: [
      "Programmatic media buying",
      "Display advertising",
      "DSP campaigns",
      "Contextual & audience targeting",
    ],
    link: "/services#programmatic",
  },
  {
    title: "Paid Social & Search",
    icon: <Palette className="w-10 h-10" />,
    oneLiner: "Strategic campaigns across Meta, Google, YouTube, LinkedIn, TikTok & more to drive awareness and conversions.",
    microText: [
      "Meta, TikTok & Snapchat Ads",
      "Google Ads & YouTube",
      "LinkedIn Advertising",
      "Search & Performance Max",
    ],
    link: "/services#paid-social",
  },
  {
    title: "Creative Strategy & Content",
    icon: <Lightbulb className="w-10 h-10" />,
    oneLiner: "Platform-ready creative concepts, messaging, and visuals that actually perform in today’s feed.",
    microText: [
      "Campaign messaging",
      "Ad copywriting",
      "Static & video creatives",
      "Performance creative testing",
    ],
    link: "/services#creative",
  },
];

export default function HomeServices() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6"
          >
            WHAT WE DO BEST
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-gray-900 mb-8"
          >
            End-to-End Solutions for<br className="hidden md:block" /> 
            <span className="bg-gradient-to-r from-orange-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Business Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From strategy to execution — we combine data intelligence with creative excellence.
          </motion.p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {homeServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 md:p-9 border border-gray-100 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-violet-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>

              {/* One Liner */}
              <p className="text-gray-600 text-[17px] leading-relaxed mb-8">
                {service.oneLiner}
              </p>

              {/* Micro Points */}
              <ul className="space-y-3 text-sm text-gray-500 mb-10">
                {service.microText.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-violet-600 group/link transition-colors"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/services">
            <button className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-bold text-lg rounded-full shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Explore All Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}