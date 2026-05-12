"use client";

import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OutdoorAds() {
  const outdoorDeliverables = [
    "Billboard & Unipole Media (highway, premium junctions)",
    "DOOH Screens (malls, high streets, business districts)",
    "Transit Media (metro, bus shelters, wraps, taxis)",
    "Airport Branding (baggage belts, lounges, gates)",
    "Media Planning & Buying (reach/frequency planning)",
    "Creative Adaptation (OOH-ready formats, layouts)",
  ];

  const outdoorBestFor = ["Mass awareness", "City-wide presence", "Launch announcements", "Brand authority"];

  return (
    <section id="outdoor" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6900CC]/2 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8 text-[#0f172a]"
          >
            Outdoor <br />
            <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent">
              Advertising (OOH/DOOH)
            </span>
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            Outdoor works when it’s planned right-location, visibility, and frequency. We dominate high-impact zones with smart OOH planning and premium inventory.
          </p>

          <div className="mb-10">
            <h4 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#6900CC]"></span> What we deliver
            </h4>
            <ul className="grid gap-4">
              {outdoorDeliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Globe className="w-5 h-5 text-[#39B14A] flex-shrink-0 mt-1" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h4 className="text-lg font-bold text-[#0f172a] mb-4">Best for</h4>
            <div className="flex flex-wrap gap-3">
              {outdoorBestFor.map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border border-[#6900CC]/10 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 group shadow-[0_10px_30px_rgba(105,0,204,0.2)] hover:shadow-[#39B14A]/30"
          >
            Dominate Your Market with OOH
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10">
            <img
              src="/images/outdoor-main.jpg"
              alt="Outdoor Advertising"
              className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-br from-[#6900CC]/10 to-[#39B14A]/10 rounded-[2rem] blur-3xl z-0" />
        </div>
      </div>
    </section>
  );
}