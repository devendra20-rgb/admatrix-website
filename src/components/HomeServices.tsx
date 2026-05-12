"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Target,
  TrendingUp,
  Globe,
  Layers3,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Full-Funnel Media Strategy",
    icon: <Target className="w-7 h-7" />,
    description:
      "Your audience doesn't live in one place. Neither should your media. We architect complete campaign journeys - from first touch to final conversion.",
    points: [
      "End-to-end funnel planning",
      "Persona-driven audience targeting",
      "Multi-channel media allocation",
      "KPI-focused campaign roadmap",
    ],
    link: "/services#full-funnel",
  },
  {
    number: "02",
    title: "Performance Marketing",
    icon: <TrendingUp className="w-7 h-7" />,
    description:
      "We run campaigns laser-focused on the actions that grow your business - leads, purchases, installs, and conversions.",
    points: [
      "CPA, CPL, CPI & ROAS optimization",
      "Creative & audience A/B testing",
      "Real-time bid optimization",
      "Advanced attribution tracking",
    ],
    link: "/services#performance",
  },
  {
    number: "03",
    title: "User Acquisition & App Growth",
    icon: <Globe className="w-7 h-7" />,
    description:
      "We build UA strategies that don't just drive installs - they acquire users who actually engage, subscribe, and pay.",
    points: [
      "App install campaigns",
      "MMP integrations & setup",
      "Post-install event optimization",
      "Retargeting & fraud prevention",
    ],
    link: "/services#ua",
  },
  {
    number: "04",
    title: "Programmatic & Display Media",
    icon: <Layers3 className="w-7 h-7" />,
    description:
      "Scale brand presence across premium inventory using programmatic buying with surgical audience targeting.",
    points: [
      "DSP-driven media buying",
      "Native, display & video inventory",
      "Contextual + behavioral targeting",
      "Brand safety & viewability controls",
    ],
    link: "/services#programmatic",
  },
  {
    number: "05",
    title: "Paid Social & Search",
    icon: <BarChart3 className="w-7 h-7" />,
    description:
      "We turn social feeds and search results into performance engines across Meta, TikTok, Google, LinkedIn & more.",
    points: [
      "Meta, TikTok & LinkedIn Ads",
      "Google Search & Performance Max",
      "Platform-native creative strategy",
      "Remarketing & demand generation",
    ],
    link: "/services#paid-social",
  },
  {
    number: "06",
    title: "Creative Strategy & Analytics",
    icon: <Lightbulb className="w-7 h-7" />,
    description:
      "Great media needs great creative. We combine performance storytelling with analytics clarity.",
    points: [
      "Performance ad messaging",
      "Video & static creative direction",
      "Looker Studio dashboards",
      "Campaign reporting & insights",
    ],
    link: "/services#creative",
  },
];

export default function PremiumServices() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ff] py-28 md:py-36">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Purple Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-300/30 blur-[120px]"
        />

        {/* Orange Glow */}
        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-orange-200/40 blur-[120px]"
        />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.08)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-24">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-600 uppercase tracking-[0.4em] text-[12px] md:text-sm font-black mb-6"
          >
            Core Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#151515] text-5xl md:text-7xl lg:text-[82px] font-black leading-[0.95] tracking-tight mb-8"
          >
            Six Disciplines.
            <br />

            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              One Goal:
            </span>{" "}
            Measurable Growth.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-2xl leading-relaxed"
          >
            Strategy, performance, media buying, user acquisition,
            creative systems, and analytics - built together
            to scale modern brands.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                rotateX: 2,
                rotateY: 2,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-white/60 bg-white/80 backdrop-blur-xl p-8 md:p-9 shadow-[0_10px_40px_rgba(139,92,246,0.08)] hover:shadow-[0_25px_70px_rgba(139,92,246,0.18)] transition-all duration-500"
            >

              {/* TOP GLOW LINE */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-orange-400 group-hover:w-full transition-all duration-700" />

              {/* FLOATING ORB */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet-200/30 blur-[70px] opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* NUMBER + ICON */}
              <div className="flex items-center justify-between mb-10">

                <div className="text-[12px] font-black tracking-[0.35em] text-violet-500 uppercase">
                  {service.number}
                </div>

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-violet-500/20"
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* TITLE */}
              <h3 className="text-[#151515] text-[28px] md:text-[32px] font-black leading-[1.1] mb-5 tracking-tight">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-[16px] leading-[1.8] mb-8">
                {service.description}
              </p>

              {/* POINTS */}
              <div className="space-y-4 mb-10">

                {service.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-[9px] w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-orange-400 flex-shrink-0" />

                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-3 text-violet-600 hover:text-orange-500 transition-colors font-bold tracking-wide group/link"
              >
                Explore Service

                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-24"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-orange-500 text-white font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(139,92,246,0.25)] hover:scale-105 transition-all duration-300"
          >

            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

            <span className="relative z-10">
              View All Services
            </span>

            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}