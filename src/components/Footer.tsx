"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#f8f5ff] border-t border-violet-100 pt-16 md:pt-18 pb-6">

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
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-violet-300/25 blur-[150px]"
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
          className="absolute bottom-[-20%] right-[-10%] w-[650px] h-[650px] rounded-full bg-orange-200/30 blur-[140px]"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/60 via-white/40 to-orange-50/40" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.05)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 pb-12 border-b border-violet-100">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <img
              src="/Admatrix(1).png"
              alt="Admatrix Logo"
              className="h-14 md:h-16 w-auto mb-5"
            />

            {/* TITLE */}
            <h2 className="text-[#151515] text-2xl md:text-4xl font-black leading-[1.05] tracking-tight mb-5">
              Admatrix -
              <br />

              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Full-Funnel
              </span>

              <br />
              Digital Media Agency
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-[14px] md:text-[15px] leading-[1.8] max-w-2xl">
              We help brands grow through media strategy,
              performance marketing, user acquisition,
              programmatic buying, creative strategy,
              and data-led campaign optimization.
              Because in digital, the best story isn't
              the one with the biggest budget -
              it's the one with the smartest plan.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-5 mt-6">

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(139,92,246,0.08)] flex items-center justify-center text-violet-600 hover:text-orange-500 transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* QUICK LINKS */}
            <div>

              <p className="text-violet-600 uppercase tracking-[0.35em] text-[11px] font-black mb-7">
                Quick Links
              </p>

              <div className="space-y-4">

                {quickLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-gray-700 hover:text-[#151515] transition-all text-[15px] font-semibold"
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>

              <p className="text-violet-600 uppercase tracking-[0.35em] text-[11px] font-black mb-7">
                Contact
              </p>

              <div className="space-y-4">

                {/* PHONE */}
                <motion.a
                  whileHover={{
                    x: 4,
                  }}
                  href="tel:+971586065130"
                  className="group flex items-start gap-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(139,92,246,0.06)] p-3.5 hover:shadow-[0_18px_45px_rgba(139,92,246,0.12)] transition-all"
                >

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-violet-600 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-[#151515] text-sm font-bold mb-1">
                      Call Us
                    </p>

                    <p className="text-gray-600 text-[13px]">
                      +971 58 606 5130
                    </p>
                  </div>
                </motion.a>

                {/* EMAIL */}
                <motion.a
                  whileHover={{
                    x: 4,
                  }}
                  href="mailto:support@admatrix.com"
                  className="group flex items-start gap-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(139,92,246,0.06)] p-4 hover:shadow-[0_18px_45px_rgba(139,92,246,0.12)] transition-all"
                >

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-violet-600 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-[#151515] text-sm font-bold mb-1">
                      Email
                    </p>

                    <p className="text-gray-600 text-[13px] break-all">
                      support@admatrix.com
                    </p>
                  </div>
                </motion.a>

                {/* LOCATION */}
                <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 p-[1px]">

                  <div className="rounded-2xl bg-[#f8f5ff] px-5 py-4">

                    <p className="text-violet-600 uppercase tracking-[0.25em] text-[9px] font-black mb-2">
                      Location
                    </p>

                    <p className="text-[#151515] text-base font-bold">
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-5 flex flex-col lg:flex-row items-center justify-between gap-3">

          <p className="text-gray-500 text-xs md:text-sm text-center lg:text-left">
            © 2026 Admatrix. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs md:text-sm text-gray-500">

            <Link
              href="/privacy-policy"
              className="hover:text-[#151515] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-[#151515] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;