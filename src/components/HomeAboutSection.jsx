"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Sparkles, Target } from "lucide-react";
import Link from "next/link";

export default function HomeAboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ff] py-28 md:py-36">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* PURPLE GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-violet-300/20 blur-[140px]"
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
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange-200/30 blur-[130px]"
        />

        {/* GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.06)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="text-violet-600 uppercase tracking-[0.4em] text-[12px] font-black mb-7"
            >
              ABOUT ADMATRIX
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="text-[#151515] text-5xl md:text-7xl lg:text-[82px] font-black leading-[0.95] tracking-tight mb-8"
            >
              We Build
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Growth Systems
              </span>
              <br />
              Not Just Campaigns.
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
              }}
              className="text-gray-600 text-lg md:text-2xl leading-[1.8] max-w-3xl mb-12"
            >
              Admatrix is a full-funnel digital media agency helping brands
              scale through strategy, performance marketing, creative systems,
              audience intelligence, and measurable execution.
            </motion.p>

            {/* FEATURE ROWS */}
            <div className="space-y-5">
              {[
                {
                  icon: <TrendingUp size={20} />,
                  title: "Performance-Led Growth",
                  desc: "Campaigns engineered around measurable business outcomes.",
                },
                {
                  icon: <Target size={20} />,
                  title: "Full-Funnel Strategy",
                  desc: "From awareness to acquisition to retention.",
                },
                {
                  icon: <Sparkles size={20} />,
                  title: "Creative + Media Harmony",
                  desc: "Strategy, creative, and optimization working together.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="group flex items-start gap-5 rounded-[28px] border border-white/70 bg-white/80 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(139,92,246,0.08)] hover:shadow-[0_20px_60px_rgba(139,92,246,0.14)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-orange-500 flex items-center justify-center text-white shadow-[0_12px_35px_rgba(139,92,246,0.25)] flex-shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[#151515] text-xl md:text-2xl font-black tracking-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.8]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
              }}
              className="mt-12"
            >
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(139,92,246,0.25)] hover:scale-105 transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                <span className="relative z-10">Learn More</span>

                <ArrowUpRight
                  size={20}
                  className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-violet-600 via-purple-600 to-orange-500 p-[1px] shadow-[0_30px_100px_rgba(139,92,246,0.25)]">
              <div className="relative rounded-[42px] bg-[#0d061c] overflow-hidden p-10 md:p-14">
                {/* GLOW */}
                <div className="absolute top-[-10%] right-[-10%] w-[280px] h-[280px] rounded-full bg-violet-500/20 blur-[90px]" />

                {/* CONTENT */}
                <div className="relative z-10">
                  <p className="text-violet-300 uppercase tracking-[0.35em] text-[11px] font-black mb-8">
                    WHY BRANDS CHOOSE ADMATRIX
                  </p>

                  <h3 className="text-white text-4xl md:text-6xl font-black leading-[1] tracking-tight mb-10">
                    Strategy.
                    <br />
                    Execution.
                    <br />
                    Scale.
                  </h3>

                  <div className="space-y-6">
                    {[
                      "Media Strategy & Planning",
                      "Performance Marketing",
                      "Paid Social & Search",
                      "Creative Strategy",
                      "Analytics & Optimization",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          x: 4,
                        }}
                        className="border-b border-white/10 pb-5"
                      >
                        <p className="text-white text-lg md:text-[22px] font-black tracking-tight">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7">
                    <p className="text-white/70 text-[15px] leading-[1.9]">
                      We don't believe in isolated campaigns. We build connected
                      systems that move audiences from awareness to action — and
                      keep performance scaling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            {/* <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 -left-10 hidden lg:block"
            >
              <div className="rounded-[28px] border border-white/70 bg-white/90 backdrop-blur-2xl px-8 py-7 shadow-[0_20px_60px_rgba(139,92,246,0.18)]">
                <p className="text-violet-600 uppercase tracking-[0.3em] text-[10px] font-black mb-3">
                  Growth Focused
                </p>

                <h4 className="text-[#151515] text-3xl font-black tracking-tight mb-2">
                  Full-Funnel
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed max-w-[220px]">
                  Strategy, media, creative, and analytics connected into one
                  growth engine.
                </p>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
