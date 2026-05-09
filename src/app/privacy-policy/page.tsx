"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8f5ff] overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070312] pt-[180px] md:pt-[220px] pb-24 md:pb-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute inset-0 bg-gradient-to-br from-[#160428] via-[#090312] to-[#1c0930]" />

          <div className="absolute top-[-15%] right-[-5%] w-[900px] h-[900px] rounded-full bg-violet-500/20 blur-[160px]" />

          <div className="absolute bottom-[-20%] left-[-10%] w-[750px] h-[750px] rounded-full bg-orange-500/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
        </div>

        <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-violet-400 uppercase tracking-[0.45em] text-[12px] font-black mb-8"
          >
            PRIVACY POLICY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl lg:text-[88px] font-black leading-[0.95] tracking-tight mb-8"
          >
            Your Data.
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Protected.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/65 text-lg md:text-2xl leading-relaxed max-w-4xl"
          >
            Admatrix values your privacy and is committed to protecting
            your personal information with transparency and responsibility.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-24 md:py-32">

        {/* BG */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-[120px]" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-orange-200/30 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.05)_1px,transparent_1px)] [background-size:38px_38px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/70 bg-white/80 backdrop-blur-2xl shadow-[0_40px_120px_-20px_rgba(139,92,246,0.12)] p-8 md:p-14">

            <div className="space-y-14 text-gray-700">

              {[
                {
                  title: "1. Information We Collect",
                  text: "We may collect personal information such as your name, email address, phone number, company details, and project information when you contact us or submit forms through our website.",
                },
                {
                  title: "2. How We Use Your Information",
                  text: "Your information is used to communicate with you, provide requested services, improve campaign performance, respond to enquiries, and enhance the user experience across our digital platforms.",
                },
                {
                  title: "3. Data Protection",
                  text: "We implement reasonable technical and organizational measures to protect your information from unauthorized access, misuse, disclosure, or alteration.",
                },
                {
                  title: "4. Third-Party Services",
                  text: "Admatrix may use trusted third-party platforms and tools for analytics, advertising, CRM, communication, and campaign optimization. These services may process data in accordance with their own privacy policies.",
                },
                {
                  title: "5. Cookies & Tracking",
                  text: "Our website may use cookies and tracking technologies to improve functionality, analyze traffic, and measure campaign performance.",
                },
                {
                  title: "6. Data Sharing",
                  text: "We do not sell your personal information. Data may only be shared with trusted partners or service providers when necessary to deliver services or comply with legal obligations.",
                },
                {
                  title: "7. Your Rights",
                  text: "You may request access, correction, or deletion of your personal information by contacting us directly.",
                },
                {
                  title: "8. Policy Updates",
                  text: "Admatrix reserves the right to update this Privacy Policy at any time. Continued use of our website indicates acceptance of any changes.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.05,
                  }}
                >

                  <h2 className="text-[#151515] text-2xl md:text-3xl font-black tracking-tight mb-5">
                    {item.title}
                  </h2>

                  <p className="text-[16px] md:text-lg leading-[1.9] text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}

              {/* CONTACT */}
              <div className="pt-6 border-t border-violet-100">

                <h2 className="text-[#151515] text-2xl md:text-3xl font-black tracking-tight mb-5">
                  Contact Us
                </h2>

                <p className="text-[16px] md:text-lg leading-[1.9] text-gray-600">
                  If you have any questions regarding this Privacy Policy,
                  you can contact us at:
                  <br />
                  <br />
                  hello@admatrixagency.com
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}