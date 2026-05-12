"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Full-Funnel Media Strategy",
    href: "/services#full-funnel-media-strategy",
  },
  {
    number: "02",
    title: "Performance Marketing",
    href: "/services#performance-marketing",
  },
  {
    number: "03",
    title: "User Acquisition & App Growth",
    href: "/services#user-acquisition-app-growth",
  },
  {
    number: "04",
    title: "Programmatic & Display Media",
    href: "/services#programmatic-display-media",
  },
  {
    number: "05",
    title: "Paid Social & Search",
    href: "/services#paid-social-search",
  },
  {
    number: "06",
    title: "Creative Strategy & Analytics",
    href: "/services#creative-strategy-analytics",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      {/* GLASS NAVBAR */}
      <div className="w-full border-b border-white/10 bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="h-[84px] flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="relative z-50 flex items-center">
              <img
                src="/Admatrix(1).png"
                alt="Admatrix"
                className="h-11 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">

              {/* SERVICES */}
              <div className="relative group">
                <button className="flex items-center gap-2 text-[13px] font-black uppercase tracking-[0.25em] text-[#151515] hover:text-violet-700 transition-all duration-300">
                  Services
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>

                {/* DROPDOWN */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="w-[390px] rounded-[20px] border border-white/20 bg-white/95 backdrop-blur-2xl shadow-[0_16px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                    {/* SERVICES LIST */}
                    <div className="flex flex-col">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className={`group/item relative px-6 py-5 hover:bg-gradient-to-r hover:from-violet-50 hover:to-orange-50 transition-all duration-300 ${
                            index !== services.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            {/* NUMBER */}
                            <p className="text-[9px] font-black tracking-[0.2em] text-violet-600 uppercase mt-[2px] min-w-[20px]">
                              {service.number}
                            </p>

                            {/* TITLE */}
                            <h4 className="text-[14px] leading-[1.35] font-black text-[#141414] group-hover/item:text-violet-700 transition">
                              {service.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* LINKS */}
              {/* <Link
                href="/gallery"
                className="text-[13px] font-black uppercase tracking-[0.25em] text-[#151515] hover:text-violet-700 transition"
              >
                Gallery
              </Link> */}

              <Link
                href="/about-us"
                className="text-[13px] font-black uppercase tracking-[0.25em] text-[#151515] hover:text-violet-700 transition"
              >
                About Us
              </Link>

              <Link
                href="/careers"
                className="text-[13px] font-black uppercase tracking-[0.25em] text-[#151515] hover:text-violet-700 transition"
              >
                Careers
              </Link>
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:flex items-center justify-center px-8 h-[52px] rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white text-[11px] font-black uppercase tracking-[0.25em] shadow-[0_10px_35px_rgba(139,92,246,0.35)] hover:scale-105 hover:shadow-[0_14px_45px_rgba(139,92,246,0.45)] transition-all duration-300"
              >
                Start a Project
              </Link>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm"
              >
                <Menu size={24} className="text-[#111]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[9999] bg-[#090311] overflow-y-auto lg:hidden"
          >
            {/* TOP */}
            <div className="sticky top-0 z-50 bg-[#090311]/90 backdrop-blur-xl border-b border-white/10">
              <div className="h-[84px] px-5 flex items-center justify-between">
                <img
                  src="/Admatrix(1).png"
                  alt="Admatrix"
                  className="h-11 w-auto"
                />

                <button
                  onClick={closeMenu}
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
            </div>

            {/* MOBILE CONTENT */}
            <div className="px-6 py-10">
              {/* SERVICES */}
              <div className="rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full px-6 py-6 flex items-center justify-between"
                >
                  <div className="text-left">
                    <p className="text-violet-400 text-[11px] font-black tracking-[0.3em] uppercase mb-2">
                      Core Services
                    </p>

                    <h3 className="text-white text-[26px] leading-tight font-black">
                      Services
                    </h3>
                  </div>

                  <ChevronDown
                    size={26}
                    className={`text-white transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-white/10"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          onClick={closeMenu}
                          className="flex items-center justify-between px-6 py-5 border-b border-white/5 hover:bg-white/5 transition"
                        >
                          <div>
                            <p className="text-violet-400 text-[10px] font-black tracking-[0.25em] uppercase mb-2">
                              {service.number}
                            </p>

                            <h4 className="text-white text-[17px] font-bold leading-[1.4]">
                              {service.title}
                            </h4>
                          </div>

                          <ChevronRight size={18} className="text-white/40" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* LINKS */}
              <div className="mt-10 flex flex-col gap-5">
                <Link
                  href="/gallery"
                  onClick={closeMenu}
                  className="text-white text-[24px] font-black uppercase tracking-[0.15em]"
                >
                  Gallery
                </Link>

                <Link
                  href="/about-us"
                  onClick={closeMenu}
                  className="text-white text-[24px] font-black uppercase tracking-[0.15em]"
                >
                  About Us
                </Link>

                <Link
                  href="/careers"
                  onClick={closeMenu}
                  className="text-white text-[24px] font-black uppercase tracking-[0.15em]"
                >
                  Careers
                </Link>
              </div>

              {/* BUTTON */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-12 w-full h-[62px] rounded-full bg-gradient-to-r from-violet-600 to-orange-500 flex items-center justify-center text-white text-[13px] font-black uppercase tracking-[0.25em] shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
