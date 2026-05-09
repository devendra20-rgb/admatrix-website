"use client";

import React from "react";
import { motion } from "framer-motion";

export default function JoinUsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#05020d] py-28 md:py-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* BASE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#12041f] via-[#070312] to-[#1a082d]" />

        {/* PURPLE GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-20%] left-[-10%] w-[850px] h-[850px] rounded-full bg-violet-500/20 blur-[160px]"
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
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[140px]"
        />

        {/* GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

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
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
        >

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%)]" />

          {/* FLOATING BLUR */}
          <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center px-8 py-12 md:px-14 md:py-16 lg:px-20 lg:py-20">

            {/* LEFT */}
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
                className="text-violet-400 uppercase tracking-[0.4em] text-[11px] font-black mb-7"
              >
                LET'S BUILD SOMETHING BIG
              </motion.p>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                }}
                className="text-white text-4xl md:text-6xl lg:text-[78px] font-black leading-[0.95] tracking-tight mb-8"
              >
                Your Next
                <br />

                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Growth Move
                </span>

                <br />
                Starts Here.
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
                className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-3xl"
              >
                Whether you're launching, scaling, generating leads,
                acquiring users, or improving ROAS —
                Admatrix builds performance systems designed around measurable growth.
              </motion.p>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
              }}
              className="relative"
            >

              <div className="rounded-[36px] border border-white/10 bg-black/20 backdrop-blur-xl p-8 md:p-10">

                {/* STATS */}
                <div className="space-y-7 mb-10">

                  {[
                    {
                      value: "Full-Funnel",
                      label: "Media Strategy",
                    },
                    {
                      value: "Performance",
                      label: "Driven Campaigns",
                    },
                    {
                      value: "Transparent",
                      label: "Reporting & Scaling",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        x: 5,
                      }}
                      className="flex items-center justify-between border-b border-white/10 pb-5"
                    >

                      <h4 className="text-white text-xl md:text-2xl font-black">
                        {item.value}
                      </h4>

                      <p className="text-white/45 uppercase tracking-[0.25em] text-[10px] font-bold text-right">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* BUTTON */}
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative w-full inline-flex items-center justify-center gap-4 px-10 py-6 rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-orange-500 text-white font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(139,92,246,0.3)] transition-all duration-300"
                >

                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                  <span className="relative z-10">
                    Start A Conversation
                  </span>

                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}