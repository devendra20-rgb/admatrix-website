"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#070312] pt-[180px] md:pt-[220px] pb-28 md:pb-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* BASE */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#160428] via-[#090312] to-[#1c0930]" />

        {/* PURPLE GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-15%] right-[-5%] w-[900px] h-[900px] rounded-full bg-violet-500/20 blur-[160px]"
        />

        {/* ORANGE GLOW */}
        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[750px] h-[750px] rounded-full bg-orange-500/10 blur-[140px]"
        />

        {/* GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="max-w-6xl">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-violet-400 uppercase tracking-[0.45em] text-[12px] font-black mb-8"
          >
            START A PROJECT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-black tracking-tight leading-[0.95] mb-10"
          >
            Let's Build
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Your Next
            </span>

            <br />
            Growth Campaign.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/65 text-lg md:text-2xl leading-relaxed max-w-4xl"
          >
            Tell us about your brand, audience, and growth goals.
            We'll help you build the right media strategy for awareness,
            lead generation, sales, app growth, and performance scaling.
          </motion.p>

          {/* TAGS */}
          {/* <div className="mt-16 flex flex-wrap gap-5">

            {[
              "Media Strategy",
              "Performance Campaigns",
              "Lead Generation",
              "User Acquisition",
              "Growth Partnerships",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -4,
                }}
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white/80 text-sm md:text-base font-semibold"
              >
                {item}
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}