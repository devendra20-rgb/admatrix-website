"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  ChevronDown,
  Briefcase,
  Phone,
  Mail,
  User,
  Upload,
} from "lucide-react";

const CustomSelect = ({
  label,
  options,
  icon: Icon,
  value,
  onChange,
  placeholder,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-black text-[#151515] mb-3 flex items-center gap-2 uppercase tracking-[0.15em]">
        {Icon && <Icon size={15} className="text-violet-500" />}
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between bg-white/70 backdrop-blur-xl
        ${
          isOpen
            ? "border-violet-500 shadow-[0_0_0_4px_rgba(139,92,246,0.08)]"
            : "border-gray-100 hover:border-violet-200"
        }`}
      >
        <span
          className={
            value ? "text-[#151515] font-semibold" : "text-gray-400"
          }
        >
          {value
            ? options.find((opt: any) => opt.value === value)?.label
            : placeholder}
        </span>

        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} className="text-gray-400" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              className="absolute z-20 w-full mt-3 bg-white border border-gray-100 rounded-2xl overflow-y-auto max-h-[280px] shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
            >
              {options.map((option: any) => (
                <div
                  key={option.value}
                  className="px-6 py-4 text-gray-700 hover:bg-violet-50 hover:text-violet-600 cursor-pointer transition-all font-medium"
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

export default function CareerForm() {
  const [submitted, setSubmitted] = useState(false);

  const [selectedRole, setSelectedRole] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Please try again later.");
    }
  };

  /* SUCCESS */

  if (submitted) {
    return (
      <section className="relative py-28 bg-[#f8f5ff] overflow-hidden">

        <div className="max-w-3xl mx-auto px-6">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative overflow-hidden rounded-[42px] bg-white/80 backdrop-blur-2xl border border-white/70 shadow-[0_40px_120px_-20px_rgba(139,92,246,0.14)] p-10 md:p-16 text-center"
          >

            <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-violet-300/20 blur-[100px]" />

            <div className="relative z-10">

              <div className="w-28 h-28 mx-auto mb-10 rounded-full bg-gradient-to-r from-violet-500 to-orange-400 flex items-center justify-center text-white shadow-[0_20px_50px_rgba(139,92,246,0.3)]">
                <CheckCircle size={60} />
              </div>

              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#151515] mb-6">
                Application Received.
              </h2>

              <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10">
                Thank you for applying.
                Our recruitment team will review
                your application and get back to you soon.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="px-10 py-5 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white font-black uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(139,92,246,0.25)] hover:scale-105 transition-all duration-300"
              >
                Submit Another
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-28 md:py-36 bg-[#f8f5ff] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-violet-300/20 blur-[130px]"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-orange-200/30 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.06)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[42px] border border-white/70 bg-white/80 backdrop-blur-2xl p-8 md:p-14 shadow-[0_40px_120px_-20px_rgba(139,92,246,0.12)]"
        >

          <div className="absolute top-[-10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-violet-200/20 blur-[100px]" />

          {/* HEADER */}
          <div className="relative z-10 mb-14">

            <p className="text-violet-600 uppercase tracking-[0.35em] text-[12px] font-black mb-5">
              JOIN ADMATRIX
            </p>

            <h2 className="text-[#151515] text-4xl md:text-6xl font-black tracking-tight leading-[1] mb-5">
              Apply For Your
              <br />

              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Next Big Role.
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-[1.9] max-w-2xl">
              Fill out your details and upload your latest resume.
              Our team will review your application shortly.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
          >

            {/* FULL NAME */}
            <div>
              <label className="block text-sm font-black text-[#151515] mb-3 uppercase tracking-[0.15em]">
                Full Name *
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-500"
                />

                <input
                  required
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50/70 border border-gray-100 focus:border-violet-400 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-black text-[#151515] mb-3 uppercase tracking-[0.15em]">
                Phone Number *
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-500"
                />

                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50/70 border border-gray-100 focus:border-violet-400 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-black text-[#151515] mb-3 uppercase tracking-[0.15em]">
                Email Address *
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-500"
                />

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50/70 border border-gray-100 focus:border-violet-400 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            {/* ROLE */}
            <div className="md:col-span-2">
              <CustomSelect
                label="Interested Position"
                icon={Briefcase}
                placeholder="Select Role"
                value={selectedRole}
                onChange={(val: string) =>
                  setSelectedRole(val)
                }
                options={[
                  {
                    label: "Creative Designer",
                    value: "designer",
                  },
                  {
                    label: "Backend Developer",
                    value: "backend",
                  },
                  {
                    label: "Frontend Developer",
                    value: "frontend",
                  },
                  {
                    label: "Performance Marketer",
                    value: "marketing",
                  },
                  {
                    label: "Account Manager",
                    value: "manager",
                  },
                ]}
              />

              <input
                type="hidden"
                name="position"
                value={selectedRole}
              />
            </div>

            {/* RESUME */}
            <div className="md:col-span-2">

              <label className="block text-sm font-black text-[#151515] mb-3 uppercase tracking-[0.15em]">
                Resume / CV *
              </label>

              <div className="relative group">

                <input
                  required
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />

                <div className="w-full px-8 py-14 border-2 border-dashed border-violet-100 rounded-[2rem] bg-gray-50/60 flex flex-col items-center justify-center group-hover:border-violet-300 group-hover:bg-violet-50/40 transition-all duration-300">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 text-white flex items-center justify-center mb-5 shadow-[0_12px_40px_rgba(139,92,246,0.2)]">
                    <Upload size={28} />
                  </div>

                  <p className="text-[#151515] font-black uppercase tracking-[0.2em] text-sm mb-2">
                    Upload Resume
                  </p>

                  <p className="text-gray-500 text-xs uppercase tracking-[0.15em]">
                    PDF, DOC, DOCX • Max 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2 pt-2">

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 px-10 py-6 text-white font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(139,92,246,0.25)] transition-all duration-300"
              >

                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                <span className="relative z-10 flex items-center justify-center gap-4 text-lg">
                  Submit Application

                  <Send
                    size={22}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}