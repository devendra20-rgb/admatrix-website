"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  TrendingUp,
  Target,
  Lightbulb,
  Users,
  Award,
} from "lucide-react";

const values = [
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Clarity",
    desc: "We keep strategy, communication, and reporting transparent and easy to understand.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Performance",
    desc: "Every campaign decision is tied to measurable business growth and outcomes.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Accountability",
    desc: "We take ownership of execution, optimization, reporting, and performance.",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Creativity",
    desc: "Creative isn't decoration. It's a performance driver that shapes action.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Transparency",
    desc: "Clients should always understand where budgets go and what results come back.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Growth Mindset",
    desc: "We test, learn, optimize, and scale based on real campaign signals.",
  },
];

export default function AboutContent() {
  return (
    <div className="bg-[#f8f5ff] overflow-hidden">

      {/* STORY */}
      <section className="relative py-28 md:py-36">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-200/30 blur-[120px]" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.06)_1px,transparent_1px)] [background-size:38px_38px]" />
        </div>

        <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="sticky top-32"
            >

              <p className="text-violet-600 uppercase tracking-[0.35em] text-[12px] font-black mb-7">
                OUR STORY
              </p>

              <h2 className="text-[#151515] text-5xl md:text-7xl lg:text-[86px] font-black leading-[0.95] tracking-tight mb-8">
                Strategy.
                <br />

                Creative.
                <br />

                <span className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent">
                  Performance.
                </span>
              </h2>

              <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-2xl">
                Admatrix was built on one belief:
                digital media should not just buy clicks -
                it should build scalable business growth.
              </p>
            </motion.div>

            {/* RIGHT */}
            <div className="space-y-7">

              {[
                "Today, customers discover, compare, and choose brands across multiple digital touchpoints - from social feeds and search to YouTube, websites, and retargeting campaigns.",
                "That's why Admatrix combines strategy, media buying, creative systems, analytics, and optimization into one connected growth engine.",
                "We don't see campaigns as isolated ads. We build full-funnel systems that guide people from awareness to conversion and long-term retention.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  className={`rounded-[36px] p-8 md:p-10 border ${
                    i === 1
                      ? "bg-gradient-to-br from-violet-600 to-orange-500 text-white border-transparent shadow-[0_20px_60px_rgba(139,92,246,0.25)]"
                      : "bg-white/80 backdrop-blur-xl border-white/70 shadow-[0_10px_40px_rgba(139,92,246,0.08)]"
                  }`}
                >
                  <p
                    className={`text-[18px] md:text-[22px] leading-[1.8] ${
                      i === 1 ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="relative overflow-hidden bg-[#070312] py-28 md:py-36">

        {/* BG */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[140px]" />

          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
        </div>

        <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Our Mission",
                text: "To help brands grow through smarter media strategy, performance marketing, creative thinking, and measurable execution.",
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Our Vision",
                text: "To become the trusted full-funnel growth partner for brands scaling across modern digital ecosystems.",
                color: "from-violet-500 to-purple-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-10 md:p-14"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-10 shadow-[0_14px_40px_rgba(139,92,246,0.3)]`}
                />

                <p className="text-violet-300 uppercase tracking-[0.35em] text-[11px] font-black mb-5">
                  {item.title}
                </p>

                <h3 className="text-white text-3xl md:text-5xl font-black leading-[1.15] tracking-tight">
                  {item.text}
                </h3>

                <div className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full bg-violet-500/10 blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-28 md:py-36">

        <div className="max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

          {/* TOP */}
          <div className="max-w-4xl mb-20">

            <p className="text-violet-600 uppercase tracking-[0.35em] text-[12px] font-black mb-6">
              OUR VALUES
            </p>

            <h2 className="text-[#151515] text-5xl md:text-7xl lg:text-[82px] font-black leading-[0.95] tracking-tight mb-8">
              Principles
              <br />

              <span className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent">
                Behind Our
              </span>

              <br />
              Performance.
            </h2>

            <p className="text-gray-600 text-lg md:text-2xl leading-relaxed">
              The standards, mindset, and systems that shape
              every strategy, campaign, and client partnership.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/70 bg-white/80 backdrop-blur-xl p-8 md:p-9 shadow-[0_10px_40px_rgba(139,92,246,0.08)] hover:shadow-[0_25px_70px_rgba(139,92,246,0.16)] transition-all duration-500"
              >

                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-orange-400 group-hover:w-full transition-all duration-700" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-orange-500 flex items-center justify-center text-white mb-8 shadow-[0_12px_35px_rgba(139,92,246,0.25)] group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>

                <h3 className="text-[#151515] text-3xl font-black tracking-tight mb-5">
                  {value.title}
                </h3>

                <p className="text-gray-600 text-[16px] leading-[1.9]">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}