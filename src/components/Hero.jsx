// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const logos = ["google", "amazon", "netflix", "nike", "adidas"];
//   const logoMap = {
//     google:
//       "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     amazon:
//       "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     netflix:
//       "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//     nike: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//     adidas:
//       "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
//   };

//   return (
//     <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between">
//       {/* 🌌 BACKGROUND GLOWS - Muted and restricted */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(227,6,19,0.1)_0%,transparent_70%)] blur-[100px]" />
//       </div>

//       {/* 🧠 MAIN CONTENT CONTAINER - Everything aligns here */}
//       <div className="relative z-10 flex-grow flex flex-col justify-start pt-48 md:pt-60 lg:pt-64">
//         <div className="max-w-[1600px] mx-auto px-10 md:px-20 w-full relative">
//           {/* ⚡ PARTICLES MOVE ONLY INSIDE CONTENT AREA */}
//           <div className="absolute right-10 top-0 w-[50%] h-[550px] pointer-events-none opacity-60">
//             {/* Background Particles - Higher Density */}
//             {[...Array(40)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-[2px] h-[2px] bg-white rounded-full"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                 }}
//                 animate={{
//                   y: [0, -30, 0],
//                   opacity: [0.2, 0.7, 0.2],
//                   scale: [1, 1.8, 1],
//                 }}
//                 transition={{
//                   duration: Math.random() * 4 + 3,
//                   repeat: Infinity,
//                   delay: Math.random() * 5,
//                 }}
//               />
//             ))}
//             {/* Signature Wave Line behind text */}
//             <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
//               <motion.path
//                 d="M400 50 Q 200 250 400 450"
//                 stroke="url(#grad1)"
//                 strokeWidth="2"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.8 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//               />
//               <motion.path
//                 d="M380 80 Q 230 250 380 420"
//                 stroke="url(#grad2)"
//                 strokeWidth="1.5"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.4 }}
//                 transition={{
//                   duration: 7,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: 1,
//                 }}
//               />
//               <defs>
//                 <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#39b14a" />
//                   <stop offset="100%" stopColor="#9333ea" />
//                 </linearGradient>
//                 <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#3b82f6" />
//                   <stop offset="100%" stopColor="#9333ea" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//           {/* TEXT CONTENT - Perfectly Aligned */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-[950px] relative z-20"
//           >
//             <p className="text-[#39b14a] tracking-[0.45em] text-[12px] font-[900] mb-8 uppercase">
//               Grow faster - without losing control
//             </p>

//             <h1 className="text-white text-[44px] md:text-[68px] lg:text-[88px] font-[900] leading-[1.05] tracking-tight mb-8">
//               We connect digital, activations,
//               <br className="hidden sm:block" />
//               and OOH-seamlessly
//               {/* <br className="hidden md:block" />
//               Activations & OOH that put your brand
//               <br className="hidden lg:block" />
//               in the real world - with
//               <span className="bg-gradient-to-r from-indigo-400 via-white to-indigo-300 bg-clip-text text-transparent block mt-4 lg:mt-6">
//                 measurable impact.
//               </span> */}
//             </h1>

//             <p className="text-white/40 text-[18px] md:text-[22px] max-w-xl font-medium mb-12 leading-relaxed">
//               From planning to execution, we keep your brand consistent
//               everywhere it shows up.
//             </p>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <a
//                 href="/contact"
//                 className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white text-xl font-black uppercase tracking-widest rounded-full shadow-[0_10px_40px_rgba(105,0,204,0.4)] transition-all duration-300 overflow-hidden"
//               >
//                 {/* White Shine Effect on Hover */}
//                 <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />

//                 <span className="relative z-10">Start a Project</span>
//                 <span className="relative z-10 group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* 🧩 LOGO MARQUEE - NOW LOCKED INSIDE 1600px CONTAINER */}
//       <div className="relative z-20 w-full pb-20 pt-12">
//         <div className="max-w-[1600px] mx-auto px-10 md:px-20">
//           {/* Alignment Line matches content width */}
//           <div className="w-full h-[1px] bg-white/5 mb-12" />

//           <div className="overflow-hidden relative">
//             <div className="flex gap-10 sm:gap-14 md:gap-20 animate-marquee whitespace-nowrap">
//               {[...logos, ...logos, ...logos].map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logoMap[logo]}
//                   alt={logo}
//                   className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-30 hover:opacity-100 transition-opacity duration-300"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 20s linear infinite;
//         }
//         @media (max-width: 1024px) {
//           .animate-marquee {
//           animation-duration: 14s;
//         }
//         @media (max-width: 640px) {
//           .animate-marquee {
//           animation-duration: 8s;
//         }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

// // "use client";
// // import React from "react";
// // import { motion } from "framer-motion";

// // const Hero = () => {
// //   const logos = ["nike", "adidas", "mercedes", "decathlon", "sephora"];

// //   const logoMap = {
// //     nike: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
// //     adidas:
// //       "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
// //     mercedes:
// //       "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
// //     decathlon:
// //       "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
// //     sephora:
// //       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
// //   };

// //   return (
// //     <section className="relative bg-black overflow-hidden flex flex-col">
// //       {/* Subtle right gradient glow - mobile pe smaller */}
// //       <div className="absolute inset-0 z-0 pointer-events-none">
// //         <div className="absolute right-[-30%] top-[-20%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(227,6,19,0.12)_0%,transparent_70%)] blur-[80px] sm:right-[-20%] sm:top-[-15%] sm:w-[600px] sm:h-[600px] md:right-[-10%] md:top-[-10%] md:w-[800px] md:h-[800px]" />
// //       </div>

// //       {/* Main Content - mobile pe top padding kam, center text */}
// //       <div className="relative z-10 flex-grow flex items-center pt-24 sm:pt-28 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-24">
// //   {/* Left alignment ke liye outer padding hata diya + negative margin use kiya */}
// //   <div className="w-full pl-0 md:pl-[max(40px,calc(50%-650px))] lg:pl-[max(40px,calc(50%-700px))]">
// //     <motion.div
// //       initial={{ opacity: 0, y: 30 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.7 }}
// //       className="max-w-[700px] text-center md:text-left"
// //     >
// //       <p className="text-[#39b14a] tracking-[0.3em] text-[11px] sm:text-[12px] font-bold mb-4 sm:mb-6 uppercase">
// //         NEXT-GEN PERFORMANCE ADVERTISING
// //       </p>

// //       <h1 className="text-white text-[36px] sm:text-[44px] md:text-[64px] lg:text-[74px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-5 sm:mb-6">
// //         Grow revenue faster - <br className="sm:hidden" />
// //         without losing control.<br />
// //         Find the hidden wins.
// //       </h1>

// //       <p className="text-white/70 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto md:mx-0">
// //         Add AI-led performance layers to your existing marketing setup and unlock growth across web and mobile.
// //       </p>

// //       <button className="group bg-[#39b14a] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-white font-semibold text-[14px] sm:text-[16px] shadow-[0_8px_30px_rgba(227,6,19,0.35)] hover:scale-105 transition-all flex items-center gap-3 mx-auto md:mx-0">
// //         Discover the Tech
// //         <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:translate-x-1 transition">
// //           →
// //         </span>
// //       </button>
// //     </motion.div>
// //   </div>
// // </div>

// //       {/* Logo Marquee - bottom tight, no extra gap */}
// //       <div className="relative z-10 pb-8 sm:pb-10 md:pb-12">
// //         <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 overflow-hidden">
// //           <div className="w-full h-[1px] bg-white/10 mb-5 sm:mb-6" />

// //           <div className="relative">
// //             <div className="flex gap-16 sm:gap-20 animate-marquee whitespace-nowrap">
// //               {[...logos, ...logos, ...logos].map((logo, i) => (
// //                 <img
// //                   key={i}
// //                   src={logoMap[logo]}
// //                   alt={logo}
// //                   className="h-6 sm:h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-90 transition"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const logos = ["google", "amazon", "netflix", "nike", "adidas"];
//   const logoMap = {
//     google:
//       "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     amazon:
//       "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     netflix:
//       "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//     nike: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//     adidas:
//       "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
//   };

//   return (
//     <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between">
//       {/* 🌌 BACKGROUND GLOWS */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(105,0,204,0.15)_0%,transparent_70%)] blur-[100px]" />
//         <div className="absolute left-[-5%] bottom-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(57,177,74,0.1)_0%,transparent_70%)] blur-[100px]" />
//       </div>

//       {/* 🧠 MAIN CONTENT CONTAINER */}
//       <div className="relative z-10 flex-grow flex flex-col justify-center pt-32 md:pt-40">
//         <div className="max-w-[1600px] mx-auto px-10 md:px-20 w-full relative">
//           {/* ⚡ PARTICLES MOVE ONLY INSIDE CONTENT AREA */}
//           <div className="absolute right-10 top-0 w-[50%] h-[550px] pointer-events-none opacity-60">
//             {/* Background Particles - Higher Density */}
//             {[...Array(40)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-[2px] h-[2px] bg-white rounded-full"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                 }}
//                 animate={{
//                   y: [0, -30, 0],
//                   opacity: [0.2, 0.7, 0.2],
//                   scale: [1, 1.8, 1],
//                 }}
//                 transition={{
//                   duration: Math.random() * 4 + 3,
//                   repeat: Infinity,
//                   delay: Math.random() * 5,
//                 }}
//               />
//             ))}
//             {/* Signature Wave Line behind text */}
//             <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
//               <motion.path
//                 d="M400 50 Q 200 250 400 450"
//                 stroke="url(#grad1)"
//                 strokeWidth="2"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.8 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//               />
//               <motion.path
//                 d="M380 80 Q 230 250 380 420"
//                 stroke="url(#grad2)"
//                 strokeWidth="1.5"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.4 }}
//                 transition={{
//                   duration: 7,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: 1,
//                 }}
//               />
//               <defs>
//                 <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#39b14a" />
//                   <stop offset="100%" stopColor="#9333ea" />
//                 </linearGradient>
//                 <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#3b82f6" />
//                   <stop offset="100%" stopColor="#9333ea" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//         </div>
//         <div className="max-w-[1600px] mx-auto px-10 md:px-20 w-full relative">
//           {/* ⚡ GRID SYSTEM: 8 (Text) + 4 (Image) */}
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             {/* LEFT SIDE: 8 COLUMNS (TEXT) */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="lg:col-span-8 relative z-20 text-left"
//             >
//               <p className="text-[#39b14a] tracking-[0.45em] text-[12px] font-[900] mb-8 uppercase">
//                 Full-Funnel Digital Media Agency
//               </p>

//               <h1 className="text-white text-[44px] md:text-[68px] lg:text-[84px] font-[900] leading-[1.05] tracking-tight mb-8 uppercase">
//                 Where Media, Creativity, and Performance Work Together
//               </h1>
//               <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent block text-[18px] md:text-[28px] lg:text-[32px] font-bold leading-[1.2] mb-12 max-w-4xl tracking-tight">
//                 Admatrix helps brands grow through data-led media buying,
//                 performance marketing, user acquisition, creative strategy, 
//                 and full-funnel campaign optimization.
//               </span>

//              {/* ` <p className="text-white/40 text-[18px] md:text-[22px] max-w-xl font-medium mb-12 leading-relaxed">
//                 From planning to execution, we keep your brand consistent
//                 everywhere it shows up.
//               </p>` */}

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex justify-start"
//               >
//                 <a
//                   href="/contact"
//                   className="group relative inline-flex items-center gap-2 md:gap-3 px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white text-base md:text-xl font-black uppercase tracking-widest rounded-full shadow-[0_10px_30px_rgba(105,0,204,0.3)] md:shadow-[0_10px_40px_rgba(105,0,204,0.4)] transition-all duration-300 overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
//                   <span className="relative z-10 whitespace-nowrap">
//                     Explore Our Services
//                   </span>
//                   <span className="relative z-10 group-hover:translate-x-1 transition-transform">
//                     →
//                   </span>
//                 </a>
//               </motion.div>
//             </motion.div>

//             {/* <motion.div
//               initial={{ opacity: 0, scale: 0.8, x: 50 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//               className="lg:col-span-4 relative flex justify-center lg:justify-end"
//             >
//               <div className="relative w-full max-w-[450px] aspect-[4/5] group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#6900CC] via-[#39B14A] to-[#6900CC] rounded-[2.6rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

//                 <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] -z-10">
//                   {[...Array(6)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       animate={{
//                         y: [0, -100, 0],
//                         x: [0, 30, 0],
//                         opacity: [0, 0.5, 0],
//                       }}
//                       transition={{
//                         duration: Math.random() * 5 + 5,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                       className="absolute w-1 h-1 bg-white rounded-full"
//                       style={{
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`,
//                       }}
//                     />
//                   ))}
//                 </div>

//                 <motion.div
//                   whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10"
//                 >
//                   <img
//                     src="/Hero-Photo.jpeg"
//                     alt="Marketing Impact"
//                     className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-[#6900CC]/10 via-transparent to-[#39B14A]/10 pointer-events-none" />
//                 </motion.div>

//                 <div className="absolute -top-10 -right-10 w-32 h-32 border border-white/5 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
//               </div>
//             </motion.div> */}
//           </div>
//         </div>
//       </div>

//       {/* 🧩 LOGO MARQUEE */}
//       <div className="relative z-20 w-full pt-20 pb-20">
//         <div className="max-w-[1600px] mx-auto px-10 md:px-20">
//           <div className="w-full h-[1px] bg-white/10 mb-12" />

//           <div className="overflow-hidden relative">
//             <div className="flex gap-12 sm:gap-20 animate-marquee whitespace-nowrap">
//               {[...logos, ...logos, ...logos].map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logoMap[logo]}
//                   alt={logo}
//                   className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-30 hover:opacity-100 transition-opacity duration-300"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 25s linear infinite;
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
    google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    netflix: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    nike: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    adidas: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  };

  return (
    <section className="relative w-full bg-[#f8f7ff] overflow-hidden flex flex-col justify-between min-h-screen">
      
      {/* 🌈 Enhanced Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Soft Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-orange-50" />
        
        {/* Large Soft Glows (Logo Colors) */}
        <div className="absolute right-[-10%] top-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(249,115,22,0.18)_0%,transparent_65%)] blur-[140px]" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(139,92,246,0.16)_0%,transparent_65%)] blur-[130px]" />
        
        {/* Extra Accent Glow */}
        <div className="absolute left-[20%] top-[30%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_70%)] blur-[100px]" />

        {/* Very Subtle Noise/Texture Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_0.8px,transparent_1px)] [background-size:40px_40px] opacity-40" />
      </div>

      {/* 🧠 MAIN CONTENT */}
      <div className="relative z-10 flex-grow flex flex-col justify-center pt-32 md:pt-40">
        <div className="max-w-[1600px] mx-auto px-10 md:px-20 w-full relative">
          
          {/* Floating Particles + Wave */}
          <div className="absolute right-8 md:right-16 top-12 w-[45%] md:w-[50%] h-[520px] pointer-events-none opacity-50">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2.5px] h-[2.5px] bg-violet-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -35, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.7, 1],
                }}
                transition={{
                  duration: Math.random() * 4.5 + 3.5,
                  repeat: Infinity,
                  delay: Math.random() * 6,
                }}
              />
            ))}

            <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
              <motion.path
                d="M400 50 Q 200 250 400 450"
                stroke="url(#grad1)"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.55 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-10 md:px-20 w-full relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 relative z-20 text-left"
            >
              <p className="text-orange-600 tracking-[0.45em] text-[12px] font-[900] mb-8 uppercase">
                Full-Funnel Digital Media Agency
              </p>

              <h1 className="text-gray-900 text-[44px] md:text-[68px] lg:text-[84px] font-[900] leading-[1.05] tracking-tight mb-8 uppercase">
                Where Media, Creativity, and Performance Work Together
              </h1>

              <span className="bg-gradient-to-r from-orange-600 via-violet-600 to-purple-600 bg-clip-text text-transparent block text-[18px] md:text-[28px] lg:text-[32px] font-bold leading-[1.2] mb-12 max-w-4xl tracking-tight">
                Admatrix helps brands grow through data-led media buying, 
                performance marketing, user acquisition, creative strategy, 
                and full-funnel campaign optimization.
              </span>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="flex justify-start"
              >
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-violet-600 text-white text-xl font-black uppercase tracking-widest rounded-full shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  <span className="relative z-10 whitespace-nowrap">Explore Our Services</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative z-20 w-full pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-10 md:px-20">
          <div className="w-full h-[1px] bg-gray-200 mb-12" />

          <div className="overflow-hidden relative">
            <div className="flex gap-12 sm:gap-20 animate-marquee whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logoMap[logo]}
                  alt={logo}
                  className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;