"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070312] pt-[180px] md:pt-[220px] pb-28 md:pb-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* BASE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#140327] via-[#090312] to-[#1b0930]" />

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
          className="absolute top-[-10%] right-[-5%] w-[850px] h-[850px] rounded-full bg-violet-500/20 blur-[150px]"
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
          className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-orange-400/10 blur-[130px]"
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
            FULL SERVICE OFFERING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-black tracking-tight leading-[0.95] mb-10"
          >
            Every Service.
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              One Direction:
            </span>

            <br />
            Your Growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/65 text-lg md:text-2xl leading-relaxed max-w-4xl"
          >
            Admatrix is a complete digital media agency.
            Whether you need a single service or a full-funnel partnership,
            we bring the expertise, platform knowledge,
            and performance thinking to make it work.
          </motion.p>

          {/* FLOATING STATS */}
          <div className="mt-16 flex flex-wrap gap-5">

            {[
              "Full-Funnel Strategy",
              "Performance Marketing",
              "Programmatic Buying",
              "Paid Social",
              "Analytics & Reporting",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}