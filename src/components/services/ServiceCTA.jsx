// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, Send } from "lucide-react";

// export default function ServiceCTA() {
//   return (
//     <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden border-t border-gray-100">
//       <div className="relative z-10 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//           className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-10 md:p-16 lg:p-20 rounded-[3rem] text-center shadow-2xl"
//         >
//           <span className="text-[#39b14a] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 block">
//             Ready to scale?
//           </span>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] mb-8 leading-tight">
//             Let’s build your <br />
//             <span className="text-[#39b14a]">
//               Next Big Campaign
//             </span>
//           </h2>

//           <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
//             Tell us your goal and your market. We’ll recommend the best mix across branding, performance, activations, and outdoor.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <Link
//               href="/contact"
//               className="group inline-flex items-center px-10 py-5 bg-[#39b14a] hover:bg-red-700 text-white font-bold rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 hover:scale-105"
//             >
//               Start a Project
//               <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>

//             {/* <a
//               href="mailto:hello@fifthelement.com"
//               className="group inline-flex items-center px-10 py-5 border border-gray-300 text-[#0f172a] font-bold rounded-full hover:bg-gray-50 transition-all duration-300"
//             >
//               <Send className="mr-3 w-5 h-5" />
//               Drop an Email
//             </a> */}
//           </div>

//           <p className="text-sm text-gray-600 mt-12">
//             Trusted by brands across India - delivering measurable impact every time.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }