"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f5ff] overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070312] pt-[180px] md:pt-[220px] pb-24 md:pb-32">

        {/* BG */}
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
            TERMS & CONDITIONS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl lg:text-[88px] font-black leading-[0.95] tracking-tight mb-8"
          >
            Terms That
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Guide Our
            </span>

            <br />
            Partnership.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/65 text-lg md:text-2xl leading-relaxed max-w-4xl"
          >
            By using our website and services, you agree to the following
            terms and conditions established by Admatrix.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-24 md:py-32">

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
                  title: "1. Use Of Website",
                  text: "The content on this website is provided for general informational purposes only. Users agree to use the website responsibly and lawfully.",
                },
                {
                  title: "2. Intellectual Property",
                  text: "All website content, branding, designs, visuals, text, graphics, and materials are the property of Admatrix unless otherwise stated and may not be copied or distributed without permission.",
                },
                {
                  title: "3. Services & Deliverables",
                  text: "Project timelines, deliverables, advertising performance, and campaign outcomes may vary depending on market conditions, platforms, budgets, and client cooperation.",
                },
                {
                  title: "4. Third-Party Platforms",
                  text: "Admatrix may utilize third-party advertising platforms and software tools including Meta, Google, LinkedIn, TikTok, DSPs, and analytics providers. Platform policies remain subject to their respective terms.",
                },
                {
                  title: "5. Limitation Of Liability",
                  text: "Admatrix shall not be held responsible for indirect damages, business losses, platform outages, policy changes, or issues arising from third-party systems.",
                },
                {
                  title: "6. Payments & Agreements",
                  text: "Any commercial engagement, payment terms, or campaign execution details will be governed through separate client agreements or proposals.",
                },
                {
                  title: "7. Privacy",
                  text: "Use of our services and website is also governed by our Privacy Policy.",
                },
                {
                  title: "8. Modifications",
                  text: "Admatrix reserves the right to update or modify these Terms & Conditions at any time without prior notice.",
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
                  Contact
                </h2>

                <p className="text-[16px] md:text-lg leading-[1.9] text-gray-600">
                  For questions regarding these Terms & Conditions,
                  please contact:
                  <br />
                  <br />
                  support@admatrix.com
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