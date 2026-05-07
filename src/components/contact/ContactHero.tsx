"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col justify-center items-center text-center py-28 md:py-36 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-600 uppercase tracking-[0.45em] text-sm font-bold mb-6"
        >
          START A PROJECT
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-gray-900 mb-8"
        >
          Let’s build your next{" "}
          <span className="bg-gradient-to-r from-orange-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            growth campaign
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          Tell us about your brand, goal, and target market. We will help you plan the right media approach for awareness, acquisition, leads, sales, or app growth.
        </motion.p>
      </div>
    </section>
  );
}