"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Wrench, Rocket, TrendingUp, BarChart3 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    desc: "We go deep on your business, audience, market, competitors, and current media performance. No assumptions - only insight.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Strategize",
    desc: "We define the full funnel: channel mix, audience approach, campaign architecture, KPIs, and budget logic. Strategy before spend, always.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Build",
    desc: "We prepare everything before launch - tracking, creative direction, audience segments, ad copy, and reporting frameworks. Precision in the setup pays off in performance.",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "Launch",
    desc: "We go live with full QA checks: tracking validation, creative review, audience verification, placement checks. No surprises on day one.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    number: "05",
    title: "Optimize",
    desc: "Daily and weekly performance reviews drive real-time adjustments to budgets, bids, audiences, creatives, and placements. We never stop improving.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    number: "06",
    title: "Report",
    desc: "You get clear, honest, jargon-free insights - what worked, what didn't, what we're doing next, and where the real growth opportunity sits.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default function HowWeWork() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto Scroll Logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;
    let scrollAmount = 1.3;

    const autoScroll = () => {
      if (container && !isHovered) {
        container.scrollLeft += scrollAmount;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <section className="relative w-full bg-[#0a061f] py-20 md:py-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f3d] via-[#0f0824] to-[#1f1438]" />
        <div className="absolute right-[-10%] top-[-15%] w-[900px] h-[900px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[800px] h-[800px] bg-violet-500/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-violet-400 uppercase tracking-[4px] text-sm font-bold mb-4"
          >
            OUR PROCESS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight"
          >
            Six steps.{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Endless momentum.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Great campaigns don't happen by accident. They're built - methodically, 
            strategically, and with relentless attention to what the data is telling us.
          </motion.p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {[...processSteps, ...processSteps].map((step, index) => (
            <motion.div
              key={index}
              className="min-w-[380px] md:min-w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/40 rounded-3xl p-9 md:p-10 transition-all duration-500 hover:-translate-y-2 group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-violet-600 to-purple-600 text-white font-black text-3xl rounded-2xl shadow-lg">
                  {step.number}
                </div>
                <div className="text-violet-400 group-hover:text-orange-400 transition-colors">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-5">
                {step.title}
              </h3>

              <p className="text-gray-300 text-[17px] leading-relaxed">
                {step.desc}
              </p>

              <div className="mt-8 h-0.5 w-16 bg-gradient-to-r from-violet-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Start Your Project Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}