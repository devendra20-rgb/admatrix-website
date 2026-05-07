"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Wrench, Rocket, TrendingUp, BarChart3 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    desc: "We study your business, audience, market, competitors, objectives, and current media performance.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Strategize",
    desc: "We define the funnel, channel mix, targeting approach, campaign structure, KPIs, and budget allocation.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Build",
    desc: "We prepare the campaign setup, tracking, creative direction, ad copy, audience segments, and reporting framework.",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "Launch",
    desc: "We activate campaigns across selected platforms with proper QA checks and tracking validation.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    number: "05",
    title: "Optimize",
    desc: "We review performance signals and improve budgets, bids, audiences, placements, creatives, and landing paths.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    number: "06",
    title: "Report",
    desc: "We share clear insights, performance summaries, learnings, and recommendations for the next phase.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-white pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Header - More Compact */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 uppercase tracking-[0.25em] text-sm font-bold mb-3"
          >
            HOW WE WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.05] mb-6"
          >
            A structured media process built for{" "}
            <span className="bg-gradient-to-r from-orange-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              better campaign outcomes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Successful media campaigns need more than ad placements. At Admatrix, 
            we follow a disciplined 6-step process to keep every campaign focused, 
            measurable, and scalable.
          </motion.p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-violet-600 text-white font-black text-xl rounded-2xl shadow-md">
                  {step.number}
                </div>
                <div className="text-orange-600 group-hover:text-violet-600 transition-colors">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              <div className="h-0.5 w-12 bg-gradient-to-r from-orange-400 to-violet-400 mt-8 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Start Your Campaign
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}