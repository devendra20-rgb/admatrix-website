"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X, ChevronUp } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileClose = () => {
    setOpen(false);
    setServicesExpanded(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* LEFT LOGO */}
          <div className="flex items-center gap-4">
            <Link href="/" className="transition-opacity hover:opacity-90">
              <img
                src="/5th-eleLogo.png"
                alt="Admatrix Digital"
                className="h-12 md:h-14 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-8 text-[13px] font-extrabold uppercase tracking-widest transition-colors ${
              isScrolled ? "text-gray-800" : "text-gray-900"
            }`}
          >
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 py-2 transition hover:text-orange-600 ${
                  isScrolled ? "text-gray-800" : "text-gray-900"
                }`}
              >
                SERVICES <ChevronDown size={14} />
              </button>

              <div className="absolute top-full left-0 w-64 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden py-2">
                  <Link
                    href="/services#branding"
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Branding + Promotion
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                  <Link
                    href="/services#events"
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Activation & Events
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                  <Link
                    href="/services#outdoor"
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Outdoor Advertising
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                  <Link
                    href="/services#branding"
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Branding + Promotion
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                  <Link
                    href="/services#events"
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Activation & Events
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                  <Link
                    href="/services#outdoor"
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Outdoor Advertising
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                </div>
              </div>
            </div>

            {/* <Link href="/case-studies" className="hover:text-orange-600 transition">
              Case Studies
            </Link> */}
            <Link href="/gallery" className="hover:text-orange-600 transition">
              Gallery
            </Link>
            <Link href="/about-us" className="hover:text-orange-600 transition">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-orange-600 transition">
              Careers
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden sm:block px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-orange-500 to-violet-600 text-white hover:shadow-xl hover:shadow-orange-500/30"
                  : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              Start a Project
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden transition-colors ${
                isScrolled ? "text-gray-800" : "text-gray-900"
              }`}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col">
          <div className="flex justify-end p-6 border-b">
            <button onClick={handleMobileClose} className="text-gray-800">
              <X size={32} />
            </button>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center px-6 space-y-8 text-center">
            <div className="w-full max-w-xs">
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between text-gray-900 text-2xl font-bold py-5 border-b border-gray-200"
              >
                Services
                {servicesExpanded ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
              </button>

              {servicesExpanded && (
                <div className="bg-gray-50 rounded-2xl mt-3 overflow-hidden border border-gray-100">
                  <Link href="/services#branding" className="block px-6 py-5 text-gray-700 text-xl hover:bg-orange-50 hover:text-orange-600" onClick={handleMobileClose}>
                    Branding + Promotion
                  </Link>
                  <Link href="/services#events" className="block px-6 py-5 text-gray-700 text-xl hover:bg-orange-50 hover:text-orange-600" onClick={handleMobileClose}>
                    Activation & Events
                  </Link>
                  <Link href="/services#outdoor" className="block px-6 py-5 text-gray-700 text-xl hover:bg-orange-50 hover:text-orange-600" onClick={handleMobileClose}>
                    Outdoor Advertising
                  </Link>
                  <Link href="/services#branding" className="block px-6 py-5 text-gray-700 text-xl hover:bg-orange-50 hover:text-orange-600" onClick={handleMobileClose}>
                    Branding + Promotion
                  </Link>
                  <Link href="/services#events" className="block px-6 py-5 text-gray-700 text-xl hover:bg-orange-50 hover:text-orange-600" onClick={handleMobileClose}>
                    Activation & Events
                  </Link>
                  <Link href="/services#outdoor" className="block px-6 py-5 text-gray-700 text-xl hover:bg-orange-50 hover:text-orange-600" onClick={handleMobileClose}>
                    Outdoor Advertising
                  </Link>

                </div>
              )}
            </div>

            {/* <Link href="/case-studies" className="text-gray-900 text-2xl font-bold hover:text-orange-600" onClick={handleMobileClose}>
              Case Studies
            </Link> */}
            <Link href="/gallery" className="text-gray-900 text-2xl font-bold hover:text-orange-600" onClick={handleMobileClose}>
              Gallery
            </Link>
            <Link href="/about-us" className="text-gray-900 text-2xl font-bold hover:text-orange-600" onClick={handleMobileClose}>
              About Us
            </Link>
            <Link href="/careers" className="text-gray-900 text-2xl font-bold hover:text-orange-600" onClick={handleMobileClose}>
              Careers
            </Link>

            <Link
              href="/contact"
              className="mt-10 w-3/4 max-w-xs bg-gradient-to-r from-orange-500 to-violet-600 text-white py-5 rounded-full font-bold text-xl hover:brightness-110 transition text-center"
              onClick={handleMobileClose}
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;