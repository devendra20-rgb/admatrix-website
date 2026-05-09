"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Zap,
  Rocket,
  Layers,
  Share2,
  Search,
  Palette,
  BarChart3,
} from "lucide-react";

const servicesData = [
  {
    id: "media-strategy",
    title: "Media Strategy & Planning",
    desc: "A media plan isn't a spreadsheet of placements. It's a blueprint for growth. We build channel strategies that match your audience, funnel, competitive landscape, and business goals — before a single rupee is spent.",
    deliverables: [
      "Media Planning & Platform Selection",
      "Funnel Strategy & Customer Journey Mapping",
      "Audience Segmentation & Intent Mapping",
      "KPI Framework & Success Metrics",
      "Budget Architecture & Spend Allocation",
      "Campaign Structure Built For Scale",
    ],
    bestFor:
      "Brand launches, new market entry, always-on campaigns, lead generation, app growth.",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    desc: "Every campaign we run is accountable to results. We test relentlessly, optimize obsessively, and scale only what proves it deserves more budget.",
    deliverables: [
      "Lead Generation Campaigns",
      "Conversion & ROAS-Focused Media Buying",
      "App Performance Optimization",
      "E-commerce Growth & Cart Recovery",
      "Landing Page Review & Funnel Audit",
      "Continuous Campaign Optimization",
    ],
    bestFor:
      "Leads, sales, installs, enquiries, subscriptions, trials, and customer acquisition.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    id: "user-acquisition",
    title: "User Acquisition & App Growth",
    desc: "App installs alone don't build a business. We acquire users who actually matter — people who engage, convert, and stick around.",
    deliverables: [
      "App Install Campaigns",
      "Post-Install Event Optimization",
      "MMP Support & Attribution Guidance",
      "Retargeting & Re-engagement",
      "Traffic Quality Monitoring",
      "Scale Planning & Partner Expansion",
    ],
    bestFor:
      "Fintech, e-commerce, gaming, travel, delivery, and subscription apps.",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "programmatic",
    title: "Programmatic Media Buying",
    desc: "Reach your audience wherever they are on the open web — with the targeting precision of a sniper and the scale of a broadcast.",
    deliverables: [
      "DSP Campaigns",
      "Display, Native & Video Advertising",
      "Contextual & Audience Targeting",
      "Behavioral & Geographic Layering",
      "Brand Safety Controls",
      "Inventory & Performance Analysis",
    ],
    bestFor:
      "Brand awareness, retargeting, premium inventory, audience expansion, and large-scale reach.",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "paid-social",
    title: "Paid Social Media Advertising",
    desc: "Social isn't just where people scroll — it's where decisions are made. We build social campaigns that stop the thumb and start the funnel.",
    deliverables: [
      "Meta Ads",
      "LinkedIn Advertising",
      "TikTok & Snapchat Campaigns",
      "X / Twitter Campaigns",
      "Pinterest Advertising",
      "Platform-Specific Creative Testing",
    ],
    bestFor:
      "Social awareness, lead generation, traffic, app promotion, launches, and retargeting.",
    icon: <Share2 className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "search-youtube",
    title: "Search, YouTube & Google Ads",
    desc: "When your audience is actively searching, we make sure it's your brand they find. When they're watching or discovering — we put you in the frame.",
    deliverables: [
      "Google Search Campaigns",
      "Performance Max",
      "Demand Gen Campaigns",
      "YouTube Advertising",
      "Display Advertising",
      "Remarketing Campaigns",
    ],
    bestFor:
      "High-intent traffic, lead generation, video reach, sales, and remarketing.",
    icon: <Search className="w-6 h-6" />,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: "creative-strategy",
    title: "Creative Strategy & Performance Creatives",
    desc: "The best targeting in the world won't save a bad creative. We make sure your ads stop people in their tracks — and give them a reason to act.",
    deliverables: [
      "Creative Strategy & Messaging",
      "Ad Copywriting",
      "Static Creative Direction",
      "Video Concepts & Storyboards",
      "A/B Creative Testing",
      "Creative Performance Insights",
    ],
    bestFor:
      "Paid social, lead generation, app campaigns, launches, and creative testing.",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "analytics-reporting",
    title: "Analytics, Tracking & Reporting",
    desc: "Data without clarity is noise. We translate campaign numbers into clear decisions — so you always know where your money's going and what it's doing.",
    deliverables: [
      "Tracking Setup Guidance",
      "Dashboard Reporting",
      "Weekly Campaign Reports",
      "Creative Performance Reports",
      "Funnel Analysis",
      "End-of-Campaign Reporting",
    ],
    bestFor:
      "Brands that want transparent reporting, scalable learnings, and better decisions.",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ff] py-28 md:py-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full bg-violet-300/20 blur-[120px]" />

        <div className="absolute bottom-0 right-[5%] w-[450px] h-[450px] rounded-full bg-orange-200/30 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.06)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-[0_12px_45px_rgba(139,92,246,0.08)] hover:shadow-[0_25px_70px_rgba(139,92,246,0.14)] transition-all duration-500"
            >

              {/* TOP LINE */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-orange-400 group-hover:w-full transition-all duration-700" />

              {/* TOP */}
              <div className="flex items-center justify-between mb-10">

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-[0_12px_35px_rgba(139,92,246,0.25)]`}
                >
                  {service.icon}
                </div>

                <div className="text-5xl font-black text-gray-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-[#151515] text-3xl md:text-[36px] font-black leading-[1.05] tracking-tight mb-6">
                {service.title}
              </h3>

              <p className="text-gray-600 text-[16px] leading-[1.9] mb-10">
                {service.desc}
              </p>

              {/* DELIVERABLES */}
              <div className="rounded-[28px] bg-[#faf7ff] border border-violet-100 p-6 mb-8">

                <p className="text-violet-600 uppercase tracking-[0.28em] text-[10px] font-black mb-5">
                  What We Deliver
                </p>

                <div className="space-y-4">

                  {service.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />

                      <p className="text-gray-700 text-[15px] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BEST FOR */}
              <div className="pt-2">

                <p className="text-violet-600 uppercase tracking-[0.28em] text-[10px] font-black mb-4">
                  Best For
                </p>

                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {service.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}