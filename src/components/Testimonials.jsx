"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      company: "Secret Escapes",
      quote: "Working with Admatrix has elevated our acquisition strategy significantly. Their data-driven approach and optimization capabilities have delivered strong results.",
      author: "Daniel Reeves",
      role: "Director of Digital Growth"
    },
    {
      company: "Autotrader",
      quote: "Admatrix’s platform adapts seamlessly to our pace of innovation. Their technology allows us to process large volumes of user signals efficiently.",
      author: "Chris Morgan",
      role: "Head of Mobile Marketing"
    },
    {
      company: "Brand XYZ",
      quote: "The team helped us uncover new revenue by improving retargeting with AI-led performance insights and deep learning optimization.",
      author: "John Carter",
      role: "Growth Lead"
    }
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextIndex = (index + 1) % testimonials.length;

  return (
    /* Fix: height: auto rakha hai taaki extra space na bache niche */
    <section className="bg-[#f5f5f5] py-20 md:py-28 w-full h-auto overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-10 md:px-20">

        {/* --- Header: Clean Alignment --- */}
        <div className="flex items-center justify-between mb-12 border-b border-black/5 pb-6">
          <p className="text-[11px] tracking-[0.4em] uppercase font-[900] text-black">
            Client's Testimony
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[12px] font-bold tracking-widest text-black/40">
              0{index + 1} / 0{testimonials.length}
            </span>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#39b14a] transition-all">
                <ArrowLeft size={16} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#39b14a] transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* --- Main Content: Grid for Desktop 2-Card View --- */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 50 : -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              /* Fix: md:grid-cols-2 ensures 2 cards on desktop */
              className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24"
            >
              {/* Active Card */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[13px] font-black uppercase tracking-widest text-[#39b14a] mb-6">
                    {testimonials[index].company}
                  </p>
                  <h2 className="text-[24px] md:text-[34px] font-bold leading-[1.25] text-black tracking-tight mb-8">
                    "{testimonials[index].quote}"
                  </h2>
                </div>
                <div>
                  <p className="font-black text-black uppercase text-[11px] tracking-wider">{testimonials[index].author}</p>
                  <p className="text-[11px] text-black/50 font-medium">{testimonials[index].role}</p>
                </div>
              </div>

              {/* Faded Next Card: Desktop Only */}
              <div className="hidden md:flex flex-col justify-between opacity-20 select-none grayscale">
                <div>
                  <p className="text-[13px] font-black uppercase tracking-widest text-black mb-6">
                    {testimonials[nextIndex].company}
                  </p>
                  <h2 className="text-[24px] md:text-[34px] font-bold leading-[1.25] text-black tracking-tight mb-8">
                    "{testimonials[nextIndex].quote}"
                  </h2>
                </div>
                <div>
                  <p className="font-black text-black uppercase text-[11px] tracking-wider">{testimonials[nextIndex].author}</p>
                  <p className="text-[11px] text-black/50 font-medium">{testimonials[nextIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;






// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       quote: "We've worked on previous successful campaigns with Admatrix and knew we could approach them again to take care of our pre-holiday message campaign. Once again, they came through with impressive results that delivered on every point. It's great to have such cooperation with a trusted provider that understands the industry and who we can collaborate with for specific media campaigns at Steve Madden.",
//       author: "Maayan Shlomov",
//       role: "Digital & ecommerce Manager, Steve Madden",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Steve_Madden_logo.svg/1200px-Steve_Madden_logo.svg.png", // or real logo URL
//       link: "#", // replace with actual case study link
//     },
//     {
//       quote: "We started using Admatrix in 2019 for our retargeting efforts, with the goal of driving our CPA as low as possible by using custom bidding strategies. As our advertising strategy became more ROI-driven, we were able to make better use of our budget thanks to the personalization and effectiveness of Deep Learning algorithms.",
//       author: "Jesslyn Kwong",
//       role: "VP Digital Performance & Solutions, 99.co",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/99.co_logo.svg/1200px-99.co_logo.svg.png", // placeholder
//       link: "#",
//     },
//     {
//       quote: "Admatrix has consistently met or exceeded the goals we've set and has proved to be an important marketing partner. We've been impressed with both performance and service levels, so much so that we've expanded our collaboration beyond the U.K.",
//       author: "Michael Dobinson",
//       role: "Head of Performance Marketing, Secret Escapes",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Secret_Escapes_logo.svg/1200px-Secret_Escapes_logo.svg.png", // placeholder
//       link: "#",
//     },
//     {
//       quote: "Admatrix drives at our speed. We have decades of data and generate more every day, and Admatrix has proven that their technology can handle that vast sea of information and find patterns that will convince people to take action in the app. That’s what we needed, and it’s what we got.",
//       author: "Paul Davey",
//       role: "Senior Mobile Marketing Manager, Autotrader",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Autotrader_logo.svg/1200px-Autotrader_logo.svg.png", // placeholder
//       link: "#",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section data-testid="testimonials-section" className="py-24 md:py-32 bg-white">
//       <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">HOW WE WORK</p>
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
//             Fueling the virtuous cycle of growth
//           </h2>
//         </motion.div>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Progress line (gradient red-purple) */}
//           <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#39b14a] via-purple-600 to-purple-800" style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%`, transition: 'width 0.5s ease' }} />

//           {/* Current Testimonial */}
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           >
//             {/* Left: Quote + Author */}
//             <div className="text-left">
//               <p className="text-xl md:text-2xl leading-relaxed text-gray-800  mb-8">
//                 "{testimonials[currentIndex].quote}"
//               </p>
//               <p className="font-semibold text-lg text-black">{testimonials[currentIndex].author}</p>
//               <p className="text-gray-600">{testimonials[currentIndex].role}</p>
//               <a
//                 href={testimonials[currentIndex].link}
//                 className="mt-6 inline-block bg-[#39b14a] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
//               >
//                 Read more
//               </a>
//             </div>

//             {/* Right: Logo (or placeholder) */}
//             <div className="flex justify-center lg:justify-end">
//               <img
//                 src={testimonials[currentIndex].logo}
//                 alt={`${testimonials[currentIndex].role} logo`}
//                 className="h-24 md:h-32 object-contain opacity-80"
//               />
//             </div>
//           </motion.div>

//           {/* Navigation: Counter + Arrows */}
//           <div className="flex justify-between items-center mt-12">
//             <div className="text-gray-500 text-lg">
//               {currentIndex + 1} / {testimonials.length}
//             </div>
//             <div className="flex gap-6">
//               <button
//                 onClick={prevSlide}
//                 className="text-3xl text-gray-400 hover:text-black transition"
//                 aria-label="Previous testimonial"
//               >
//                 ←
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="text-3xl text-gray-400 hover:text-black transition"
//                 aria-label="Next testimonial"
//               >
//                 →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const HowWeWork = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Secret_Escapes_Logo.svg",
//       quote: "Admatrix has consistently met or exceeded the goals we've set and has proved to be an important marketing partner. We've been impressed with both performance and service levels, so much so that we've expanded our collaboration beyond the U.K.",
//       author: 'Michael Dobinson',
//       role: 'Head of Performance Marketing, Secret Escapes',
//     },
//     {
//       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Auto_Trader_Group_logo.svg/1200px-Auto_Trader_Group_logo.svg.png",
//       quote: "Admatrix drives at our speed. We generate more every day, and Admatrix technology can handle that vast sea of patterns that will convince people to buy. That's what we needed, and it's what we got.",
//       author: 'Paul Davey',
//       role: 'Senior Mobile Marketing Manager, Autotrader',
//     }
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className="py-24 md:py-40 bg-white overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
//       <div className="max-w-[1600px] mx-auto px-10">

//         {/* --- Top Navigation Row (Image 17 Style) --- */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-gray-100 pb-12">
//           <div>
//             <p className="text-[#1a1a1a] font-black tracking-[0.3em] text-[10px] uppercase mb-8">
//                HOW WE WORK
//             </p>
//             {/* Animated Gradient Progress Bar */}
//             <div className="w-64 h-[2px] bg-gray-100 relative">
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-[#39b14a] via-purple-500 to-blue-500"
//                 initial={{ width: "0%" }}
//                 animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//           </div>

//           {/* Slider Controls */}
//           <div className="flex items-center gap-6 mt-8 md:mt-0">
//              <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
//                 <ChevronLeft size={20} className="text-black" />
//              </button>
//              <span className="text-[14px] font-black text-[#1a1a1a]">
//                 {currentIndex + 1} / {testimonials.length}
//              </span>
//              <button onClick={handleNext} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
//                 <ChevronRight size={20} className="text-black" />
//              </button>
//           </div>
//         </div>

//         {/* --- Testimonial Content --- */}
//         <div className="flex flex-col md:flex-row gap-20">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col md:flex-row gap-20 w-full"
//             >
//               {/* Main Active Testimonial (Full Color) */}
//               <div className="flex-1 max-w-2xl">
//                 <img
//                   src={testimonials[currentIndex].logo}
//                   alt="brand logo"
//                   className="h-10 w-auto object-contain mb-12 grayscale-0"
//                 />
//                 <h3 className="text-[24px] md:text-[32px] font-medium leading-[1.5] text-[#1a1a1a] mb-12 ">
//                   "{testimonials[currentIndex].quote}"
//                 </h3>
//                 <div>
//                   <p className="text-[14px] font-black text-[#1a1a1a] uppercase tracking-wider mb-1">
//                     {testimonials[currentIndex].author}
//                   </p>
//                   <p className="text-[14px] text-[#5a5a5a] font-medium">
//                     {testimonials[currentIndex].role}
//                   </p>
//                 </div>
//                 <button className="mt-12 bg-[#39b14a] text-white px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-[#c40510] transition-all">
//                   Read more
//                 </button>
//               </div>

//               {/* Next Testimonial Preview (Faded like Image 17) */}
//               <div className="hidden lg:block flex-1 opacity-20 pointer-events-none">
//                 <img
//                   src={testimonials[(currentIndex + 1) % testimonials.length].logo}
//                   alt="next logo"
//                   className="h-10 w-auto object-contain mb-12"
//                 />
//                 <h3 className="text-[24px] md:text-[32px] font-medium leading-[1.5] text-[#1a1a1a] mb-12 ">
//                   "{testimonials[(currentIndex + 1) % testimonials.length].quote.substring(0, 150)}..."
//                 </h3>
//                 <button className="bg-red-200 text-white px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-widest">
//                   Read more
//                 </button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowWeWork;
