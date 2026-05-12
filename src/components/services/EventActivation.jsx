"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EventActivation() {
  const activationDeliverables = [
    "BTL Activations (malls, universities, corporate parks, hotspots)",
    "Retail & In-store Promotions (promoter management, demos)",
    "Product Launch Events (concept → execution)",
    "Roadshows & Brand Vans (route planning, permissions)",
    "Experiential Campaigns (interactive setups, gamification)",
    "Staffing, Training & Reporting (manpower, scripts)",
  ];

  const activationBestFor = ["Consumer brands", "New product trials", "Retail sales push", "Seasonal campaigns", "Community building"];

  return (
    <section id="events" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#39B14A]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8 text-[#0f172a]"
          >
            Activations <br />
            <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent">
              (BTL + Events)
            </span>
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            Real connection is hard to buy. Our activation team creates experiences that drive footfall, engagement, and brand recall-with clean execution and strong on-ground control.
          </p>

          <div className="mb-10">
            <h4 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#39B14A]"></span> What we deliver
            </h4>
            <ul className="grid gap-4">
              {activationDeliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Zap className="w-5 h-5 text-[#6900CC] flex-shrink-0 mt-1" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h4 className="text-lg font-bold text-[#0f172a] mb-4">Best for</h4>
            <div className="flex flex-wrap gap-3">
              {activationBestFor.map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border border-[#39B14A]/10 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#39B14A] to-[#6900CC] text-white font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 group shadow-lg hover:shadow-[#39B14A]/20"
          >
            Plan Your Next Activation
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10">
            <img
              src="/images/activation-main.jpg"
              alt="Activations & Events"
              className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tl from-[#39B14A]/20 to-[#6900CC]/20 rounded-[2rem] blur-2xl z-0" />
        </div>
      </div>
    </section>
  );
}