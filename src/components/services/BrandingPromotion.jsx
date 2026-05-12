"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function BrandingPromotion() {
  const deliverables = [
    "Brand Strategy & Positioning (tone, messaging, differentiation)",
    "Visual Identity (logo systems, brand guidelines, key visuals)",
    "Social & Content Strategy (content pillars, calendars, creative direction)",
    "Performance Marketing (Meta, Google, YouTube, programmatic as required)",
    "Landing Page + Funnel Optimization (CRO, tracking readiness, lead flows)",
    "Reporting & Insights (weekly/monthly dashboards, learnings, next steps)",
  ];

  const bestFor = ["New launches", "Rebranding", "Lead generation", "E-commerce growth", "Always-on performance"];

  return (
    <section id="branding" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6900CC]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10">
            <img
              src="/images/branding-main.jpg"
              alt="Branding & Performance"
              className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Decorative Gradient Frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#6900CC]/20 to-[#39B14A]/20 rounded-[2rem] blur-2xl z-0" />
        </div>

        <div className="order-1 lg:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8 text-[#0f172a]"
          >
            Branding & <br />
            <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent">
              Performance
            </span>
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            Strong brands don’t just look premium-they communicate clearly, build trust fast, and convert better. We combine brand strategy + content + performance marketing to help you grow visibility and revenue.
          </p>

          <div className="mb-10">
            <h4 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#6900CC]"></span> What we deliver
            </h4>
            <ul className="grid gap-4">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#39B14A] flex-shrink-0 mt-1" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h4 className="text-lg font-bold text-[#0f172a] mb-4">Best for</h4>
            <div className="flex flex-wrap gap-3">
              {bestFor.map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border border-[#6900CC]/10 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#6900CC] to-[#39B14A] hover:shadow-xl hover:shadow-[#6900CC]/20 text-white font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 group"
          >
            Start Your Branding Journey
            <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}