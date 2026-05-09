// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const logos = ["google", "amazon", "netflix", "nike", "adidas"];
//   const logoMap = {
//     google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     netflix: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//     nike: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//     adidas: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
//   };

//   return (
//     <section className="relative w-full bg-[#0a061f] overflow-hidden flex flex-col justify-between min-h-screen">
//       {/* Background Layers */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Base Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f3d] via-[#0f0824] to-[#1f1438]" />

//         {/* Left subtle glow */}
//         <div className="absolute left-[-10%] bottom-[-20%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(167,139,250,0.25)_0%,transparent_60%)] blur-[140px]" />

//         {/* Right Side - Strong 3D Effect */}
//         <div className="absolute right-0 top-0 w-3/5 h-full">
//           {/* Large Central Orb */}
//           <div className="absolute right-[8%] top-[25%] w-[620px] h-[620px] bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.55)_0%,rgba(236,72,153,0.35)_40%,transparent_70%)] blur-[120px] animate-pulse" />

//           {/* Secondary Orb */}
//           <div className="absolute right-[15%] top-[42%] w-[480px] h-[480px] bg-[radial-gradient(circle_at_60%_30%,rgba(249,115,22,0.45)_0%,transparent_65%)] blur-[110px]" />

//           {/* 3D Floating Rings / Tori */}
//           <motion.div
//             className="absolute right-[12%] top-[18%] w-[380px] h-[380px] border border-violet-400/30 rounded-full"
//             animate={{ rotateX: 25, rotateY: 360 }}
//             transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//             style={{ transformStyle: "preserve-3d" }}
//           />
//           <motion.div
//             className="absolute right-[18%] top-[32%] w-[260px] h-[260px] border border-purple-400/20 rounded-full"
//             animate={{ rotateX: -30, rotateY: -360 }}
//             transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
//             style={{ transformStyle: "preserve-3d" }}
//           />

//           {/* Small Accent Glows */}
//           <div className="absolute right-[25%] top-[55%] w-[220px] h-[220px] bg-orange-500/20 rounded-full blur-[80px]" />
//         </div>

//         {/* Subtle Grid */}
//         <div className="absolute inset-0 bg-[radial-gradient(#4f46e520_0.8px,transparent_1px)] [background-size:50px_50px] opacity-40" />
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 flex-grow flex flex-col justify-center pt-24 md:pt-28 lg:pt-32">
//         <div className="max-w-[1600px] mx-auto px-10 md:px-20 w-full">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="lg:col-span-7 relative z-20 text-left"
//             >
//               <p className="text-violet-400 tracking-[0.45em] text-[12px] font-[900] mb-8 uppercase">
//                 Full-Funnel Digital Media Agency
//               </p>
//               <h1 className="text-white text-[44px] md:text-[68px] lg:text-[84px] font-[900] leading-[1.05] tracking-tight mb-8 uppercase">
//                 Where Media, Creativity, and Performance Work Together
//               </h1>
//               <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent block text-[18px] md:text-[28px] lg:text-[32px] font-bold leading-[1.2] mb-12 max-w-4xl tracking-tight">
//                 Admatrix helps brands grow through data-led media buying,
//                 performance marketing, user acquisition, creative strategy, and
//                 full-funnel campaign optimization.
//               </span>

//               <motion.div whileHover={{ scale: 1.05 }} className="flex justify-start">
//                 <a
//                   href="/contact"
//                   className="group relative inline-flex items-center gap-3 px-11 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-xl font-black uppercase tracking-widest rounded-full shadow-xl shadow-violet-500/50 hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-300 overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
//                   <span className="relative z-10 bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent">
//                     Explore Our Services
//                   </span>
//                   <span className="relative z-10 group-hover:translate-x-1 transition-transform text-white">
//                     →
//                   </span>
//                 </a>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Particles - Right Side Enhanced */}
//       <div className="absolute right-8 md:right-20 top-20 w-[45%] md:w-[48%] h-[580px] pointer-events-none z-10 opacity-70">
//         {[...Array(60)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-[3px] h-[3px] bg-gradient-to-br from-violet-300 to-fuchsia-300 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -90, 0],
//               x: [0, Math.random() * 30 - 15],
//               opacity: [0.3, 0.9, 0.3],
//               scale: [1, 1.8, 1],
//             }}
//             transition={{
//               duration: Math.random() * 6 + 5,
//               repeat: Infinity,
//               delay: Math.random() * 8,
//             }}
//           />
//         ))}
//       </div>

//       {/* Logo Marquee */}
//       <div className="relative z-20 w-full pt-16 pb-20">
//         <div className="max-w-[1600px] mx-auto px-10 md:px-20">
//           <div className="w-full h-[1px] bg-white/10 mb-12" />
//           <div className="overflow-hidden relative">
//             <div className="flex gap-12 sm:gap-20 animate-marquee whitespace-nowrap">
//               {[...logos, ...logos, ...logos].map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logoMap[logo]}
//                   alt={logo}
//                   className="h-8 md:h-10 w-auto object-contain brightness-75 hover:brightness-100 transition-all duration-300"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 28s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const logos = ["google", "amazon", "netflix", "nike", "adidas"];

  const logoMap = {
    google:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    amazon:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    netflix:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    nike:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    adidas:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#070311] flex flex-col justify-between">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b103d] via-[#090312] to-[#140824]" />

        {/* Purple Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(139,92,246,0.35)_0%,transparent_60%)] blur-[160px]" />

        {/* Orange Glow */}
        <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(249,115,22,0.18)_0%,transparent_70%)] blur-[150px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e520_1px,transparent_1px)] [background-size:45px_45px] opacity-40" />
      </div>

      {/* HERO */}
      <div className="relative z-10 flex-grow flex items-center pt-40 md:pt-44 lg:pt-48 pb-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 w-full">

          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative z-20"
            >
              <p className="text-violet-400 tracking-[0.45em] text-[12px] font-black mb-7 uppercase">
                Full-Funnel Digital Media Agency
              </p>

              <h1 className="text-white text-[42px] md:text-[68px] lg:text-[82px] leading-[1.02] font-black uppercase tracking-tight mb-8">
                Where Media,
                <br />
                Creativity &
                <br />
                Performance Work
                <br />
                Together
              </h1>

              <p className="bg-gradient-to-r from-violet-300 via-purple-300 to-orange-300 bg-clip-text text-transparent text-[18px] md:text-[26px] lg:text-[30px] font-bold leading-[1.3] max-w-4xl mb-12">
                Admatrix helps brands grow through data-led media buying,
                performance marketing, user acquisition, creative strategy,
                and full-funnel campaign optimization.
              </p>

              {/* BUTTON */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="/contact"
                className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 shadow-[0_0_40px_rgba(139,92,246,0.45)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 skew-x-12" />

                <span className="relative z-10 text-white text-lg font-black uppercase tracking-[0.2em]">
                  Explore Services
                </span>

                <span className="relative z-10 text-white text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.a>
            </motion.div>

            {/* RIGHT SIDE 3D EFFECT */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative h-[700px]">

              {/* MAIN FLOATING ORB */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 6, -6, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[420px] h-[420px]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* OUTER GLOW */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/40 via-purple-500/20 to-orange-400/30 blur-[90px]" />

                {/* GLASS SPHERE */}
                <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.35)]">

                  {/* ROTATING GRADIENT */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-30%] bg-conic-gradient opacity-40 blur-3xl"
                  />

                  {/* INNER SPHERE */}
                  <div className="absolute inset-[18%] rounded-full border border-white/10 bg-black/20 backdrop-blur-2xl" />

                  {/* CORE */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-400 to-orange-400 blur-md"
                  />

                  {/* RINGS */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[8%] rounded-full border border-violet-400/20"
                  />

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[22%] rounded-full border border-orange-400/20"
                  />
                </div>
              </motion.div>

              {/* FLOATING CARD 1 */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute top-16 left-0 w-[240px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
              >
                <p className="text-white/70 uppercase tracking-[0.3em] text-xs mb-4">
                  ROAS Growth
                </p>

                <h3 className="text-white text-5xl font-black">
                  342%
                </h3>

                <div className="mt-5 w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-[80%] h-full bg-gradient-to-r from-violet-500 to-orange-400 rounded-full" />
                </div>
              </motion.div>

              {/* FLOATING CARD 2 */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute bottom-20 right-0 w-[260px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
              >
                <p className="text-white/70 uppercase tracking-[0.3em] text-xs mb-4">
                  Active Campaigns
                </p>

                <h3 className="text-white text-4xl font-black">
                  1.2K+
                </h3>

                <div className="flex gap-3 mt-6">
                  <div className="w-3 h-3 rounded-full bg-violet-400" />
                  <div className="w-3 h-3 rounded-full bg-purple-400" />
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                </div>
              </motion.div>

              {/* PARTICLES */}
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[3px] h-[3px] rounded-full bg-violet-400"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="relative z-20 w-full pb-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

          <div className="w-full h-[1px] bg-white/10 mb-12" />

          <div className="overflow-hidden relative">
            <div className="flex gap-14 md:gap-24 animate-marquee whitespace-nowrap">

              {[...logos, ...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logoMap[logo]}
                  alt={logo}
                  className="h-8 md:h-10 w-auto object-contain brightness-75 hover:brightness-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .bg-conic-gradient {
          background: conic-gradient(
            from 180deg,
            #8b5cf6,
            #a855f7,
            #d946ef,
            #fb923c,
            #8b5cf6
          );
        }
      `}</style>
    </section>
  );
};

export default Hero;