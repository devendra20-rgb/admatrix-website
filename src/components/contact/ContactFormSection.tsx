"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ChevronDown, Globe, Briefcase, Target, Wallet, Phone, Mail, User, Building2 } from "lucide-react";

// --- CUSTOM DROPDOWN COMPONENT ---
const CustomSelect = ({ label, options, icon: Icon, value, onChange, placeholder }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
        {Icon && <Icon size={16} className="text-orange-500" />}
        {label}
      </label>
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 border-2 transition-all cursor-pointer flex items-center justify-between rounded-2xl bg-white
          ${isOpen ? "border-orange-500 ring-4 ring-orange-50 shadow-sm" : "border-gray-100 hover:border-gray-200"}`}
      >
        <span className={value ? "text-gray-900 font-medium" : "text-gray-400"}>
          {value ? options.find((opt: any) => opt.value === value)?.label : placeholder}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-20 w-full mt-2 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden py-2 max-h-64 overflow-y-auto"
            >
              {options.map((option: any) => (
                <div
                  key={option.value}
                  className="px-6 py-3 hover:bg-orange-50 hover:text-orange-600 cursor-pointer text-gray-700 font-medium transition-colors"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", email: "", company: "", phone: "",
    website: "", targetMarket: "", budget: "", 
    service: "", objective: "", message: ""
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto my-20 bg-white p-16 rounded-[3rem] shadow-2xl text-center border border-gray-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 mx-auto mb-8 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
          <CheckCircle size={60} />
        </motion.div>
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Success!</h2>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">Your brief is in our hands. Our team will get back to you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:shadow-xl transition-all">Send Another</button>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-[100px] opacity-50" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm"
          >
            Start a Project
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6 tracking-tight"
          >
            Let’s build your next growth campaign.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed"
          >
            Tell us about your brand, goal, and target market. We will help you plan the right media approach for awareness, acquisition, leads, sales, or app growth.
          </motion.p>
        </div> */}

        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-16">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><User size={16} className="text-orange-500"/> Full Name *</label>
              <input type="text" required value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} 
                className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all" 
                placeholder="John Doe" />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Mail size={16} className="text-orange-500"/> Work Email *</label>
              <input type="email" required value={formData.email} onChange={(e) => handleChange("email", e.target.value)} 
                className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all" 
                placeholder="you@company.com" />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Building2 size={16} className="text-orange-500"/> Company Name *</label>
              <input type="text" required value={formData.company} onChange={(e) => handleChange("company", e.target.value)} 
                className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all" 
                placeholder="Your Agency / Business" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Phone size={16} className="text-orange-500"/> Phone Number *</label>
              <input type="tel" required value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} 
                className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all" 
                placeholder="+971 XX XXX XXXX" />
            </div>

            {/* Website / App Link */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Globe size={16} className="text-orange-500"/> Website / App Link</label>
              <input type="url" value={formData.website} onChange={(e) => handleChange("website", e.target.value)} 
                className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all" 
                placeholder="https://yourbrand.com" />
            </div>

            {/* Target Market */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Target size={16} className="text-orange-500"/> Target Market</label>
              <input type="text" value={formData.targetMarket} onChange={(e) => handleChange("targetMarket", e.target.value)} 
                className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all" 
                placeholder="UAE, GCC, MENA" />
            </div>

            {/* Monthly Budget */}
            <CustomSelect 
              label="Monthly Media Budget"
              icon={Wallet}
              placeholder="Select Budget Range"
              value={formData.budget}
              onChange={(val: string) => handleChange("budget", val)}
              options={[
                { label: "AED 10,000 - 25,000", value: "10k-25k" },
                { label: "AED 25,000 - 50,000", value: "25k-50k" },
                { label: "AED 50,000 - 100,000", value: "50k-100k" },
                { label: "AED 100,000+", value: "100k+" }
              ]}
            />

            {/* Service Interest Dropdown */}
            <CustomSelect 
              label="Service Interest"
              icon={Briefcase}
              placeholder="Select Service"
              value={formData.service}
              onChange={(val: string) => handleChange("service", val)}
              options={[
                { label: "Full-Funnel Media Strategy", value: "full-funnel" },
                { label: "Performance Marketing", value: "performance" },
                { label: "User Acquisition", value: "acquisition" },
                { label: "Programmatic Media", value: "programmatic" },
                { label: "Paid Social Advertising", value: "paid-social" },
                { label: "Google Ads / YouTube", value: "google-ads" },
                { label: "Creative Strategy", value: "creative" },
                { label: "Analytics & Reporting", value: "analytics" },
                { label: "Other", value: "other" }
              ]}
            />

            {/* Campaign Objective Dropdown */}
            <div className="md:col-span-2">
              <CustomSelect 
                label="Campaign Objective"
                icon={Target}
                placeholder="Select Objective"
                value={formData.objective}
                onChange={(val: string) => handleChange("objective", val)}
                options={[
                  { label: "Brand Awareness", value: "awareness" },
                  { label: "Website Traffic", value: "traffic" },
                  { label: "Lead Generation", value: "leads" },
                  { label: "App Installs", value: "installs" },
                  { label: "App Events", value: "events" },
                  { label: "Sales / Conversions", value: "sales" },
                  { label: "Retargeting", value: "retargeting" },
                  { label: "B2B Leads", value: "b2b" },
                  { label: "Creative Testing", value: "testing" },
                  { label: "Reporting Support", value: "reporting" }
                ]}
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea 
                rows={5} 
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us more about your goals, timeline, and any specific requirements..."
                className="w-full px-6 py-5 bg-gray-50/50 border-2 border-gray-100 rounded-[2rem] focus:bg-white focus:border-orange-500 outline-none transition-all resize-none"
              />
            </div>

            {/* CTA Button */}
           <div className="md:col-span-2 pt-4">
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    type="submit"
    className="w-full py-6 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-black text-xl rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all flex items-center justify-center gap-3"
  >
    Send Project Brief
    <Send size={24} />
  </motion.button>
</div>
          </form>
        </div>
      </div>
    </section>
  );
}