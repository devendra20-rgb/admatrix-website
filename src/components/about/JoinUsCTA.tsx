// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function JoinUsCTA() {
//   return (
//     <section className="py-24 px-6 bg-[#050505] text-center border-t border-white/5 relative overflow-hidden">
//       {/* 🔥 HIGH-VISIBILITY THEME GLOW */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Left Purple Glow */}
//         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#6900CC]/40 rounded-full blur-[130px] animate-pulse" />

//         {/* Right Green Glow */}
//         <div
//           className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#39B14A]/30 rounded-full blur-[130px] animate-pulse"
//           style={{ animationDelay: "1s" }}
//         />

//         {/* Center Mesh/Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-[#6900CC]/10 via-transparent to-[#39B14A]/10 opacity-60" />
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight"
//         >
//           Your next campaign <br />
//           <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(105,0,204,0.4)]">
//             starts with a conversation.
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
//         >
//           Tell us your brand, your market, your goal. We'll tell you exactly how
//           we'd approach it and why.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <a
//             href="/contact"
//             className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white text-xl font-black uppercase tracking-widest rounded-full shadow-[0_10px_40px_rgba(105,0,204,0.4)] transition-all duration-300 overflow-hidden"
//           >
//             {/* White Shine Effect on Hover */}
//             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />

//             <span className="relative z-10">Get in Touch</span>
//             <span className="relative z-10 group-hover:translate-x-1 transition-transform">
//               →
//             </span>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function JoinUsCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8"
        >
          Your next campaign <br />
          <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">
            starts with a conversation
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Tell us your brand, your market, your goal. We'll tell you exactly how we'd approach it and why.
        </motion.p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-violet-500/50 transition-all"
        >
          Get in Touch
          <span>→</span>
        </motion.a>
      </div>
    </section>
  );
}