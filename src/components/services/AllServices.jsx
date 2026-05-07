"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Target, Zap, Rocket, 
  Layers, Share2, Search, Palette, BarChart3 
} from "lucide-react";

const servicesData = [
  {
    id: "media-strategy",
    title: "Media Strategy & Planning",
    desc: "A strong campaign starts with a clear media strategy. We help brands define where to spend, who to target, and how to measure success.",
    deliverables: [
      "Channel mix, budget split & platform selection",
      "Full-funnel strategy (Awareness to Retention)",
      "Audience segmentation & persona building",
      "KPI Framework & success metrics",
      "Budget allocation & campaign architecture",
    ],
    bestFor: ["Brand launches", "New market entry", "Always-on campaigns", "Full-funnel planning"],
    icon: <Target className="w-6 h-6" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    desc: "We run performance-led campaigns focused on measurable outcomes like leads, sales, sign-ups, and app installs.",
    deliverables: [
      "Lead Generation (CPL campaigns)",
      "Conversion Campaigns (CPA, ROAS)",
      "App Performance (CPI + event optimization)",
      "E-commerce Growth & Cart Recovery",
      "Continuous A/B testing & optimization",
    ],
    bestFor: ["Lead Generation", "E-commerce Sales", "App Installs", "Customer Acquisition"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    id: "user-acquisition",
    title: "User Acquisition & App Growth",
    desc: "We help mobile apps and digital products acquire high-quality users through targeted paid media and optimization.",
    deliverables: [
      "App Install Campaigns (CPI/CPA)",
      "In-app event optimization",
      "Retargeting & re-engagement",
      "MMP tracking support (Adjust, AppsFlyer, etc.)",
      "Traffic quality monitoring",
    ],
    bestFor: ["Fintech", "E-commerce Apps", "Gaming", "Subscription Apps"],
    icon: <Rocket className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "programmatic",
    title: "Programmatic Media Buying",
    desc: "Scale reach with precision using programmatic buying across premium digital inventory.",
    deliverables: [
      "DSP Campaigns & Display Advertising",
      "Contextual & Audience Targeting",
      "Video & Native Placements",
      "Brand Safety & Verification",
      "Performance Analysis & Optimization",
    ],
    bestFor: ["Brand Awareness", "Retargeting", "Large-scale Reach", "Premium Inventory"],
    icon: <Layers className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "paid-social",
    title: "Paid Social Media Advertising",
    desc: "Strategic campaigns across Meta, LinkedIn, TikTok, Snapchat & more to drive awareness, leads, and conversions.",
    deliverables: [
      "Meta (Facebook & Instagram) Ads",
      "LinkedIn B2B Campaigns",
      "TikTok & Snapchat Campaigns",
      "YouTube & Google Search",
      "Creative Testing & Optimization",
    ],
    bestFor: ["Social Awareness", "Lead Generation", "App Promotion", "Product Launches"],
    icon: <Share2 className="w-6 h-6" />,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "search-youtube",
    title: "Search, YouTube & Google Ads",
    desc: "Capture high-intent users through Google’s powerful advertising ecosystem.",
    deliverables: [
      "Google Search Campaigns",
      "Performance Max Campaigns",
      "YouTube Video Advertising",
      "Demand Gen Campaigns",
      "Remarketing & Audience Targeting",
    ],
    bestFor: ["High-intent Traffic", "Lead Generation", "Brand Discovery", "Video Reach"],
    icon: <Search className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "creative-strategy",
    title: "Creative Strategy & Performance Creatives",
    desc: "Strong creative that actually performs. We create platform-specific ads that drive results.",
    deliverables: [
      "Campaign Creative Strategy",
      "Ad Copywriting & Messaging",
      "Static, Carousel & Video Creatives",
      "A/B Testing & Creative Insights",
      "Platform-specific formats",
    ],
    bestFor: ["Paid Social", "App Campaigns", "Product Launches", "Remarketing"],
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "analytics-reporting",
    title: "Analytics, Tracking & Reporting",
    desc: "Turn data into clear insights. We provide transparent reporting to help you make better decisions.",
    deliverables: [
      "Tracking Setup & Pixel Implementation",
      "Custom Dashboards (Looker Studio)",
      "Weekly & Monthly Performance Reports",
      "Creative & Funnel Analysis",
      "End-of-Campaign Insights & Recommendations",
    ],
    bestFor: ["Transparent Reporting", "Data-driven Optimization", "Campaign Learning"],
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-600",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative w-full bg-[#fafafa] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Expert Services
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-8"
          >
            Connected solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-violet-600">Digital Growth.</span>
          </motion.h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:border-transparent"
            >
              {/* Icon & Number Row */}
              <div className="flex justify-between items-center mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
                <span className="text-2xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                  {service.desc}
                </p>

                {/* Deliverables Mini-Card */}
                <div className="bg-gray-50/80 rounded-3xl p-6 mb-8 transition-colors group-hover:bg-orange-50/50">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">What we deliver</h4>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] font-medium text-gray-700 leading-tight">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tags & CTA */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.bestFor.map((tag, i) => (
                    <span key={i} className="text-[10px] px-3 py-1.5 bg-white border border-gray-100 text-gray-500 rounded-lg whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/contact" 
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-all font-bold group-hover:shadow-lg shadow-orange-200"
                >
                  Get This Service
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}