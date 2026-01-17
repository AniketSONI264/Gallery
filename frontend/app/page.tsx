
// 'use client';

// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const bgImages = [
//   '/Untitled design (7).png',
//   '/Untitled design (2).jpg'
//   // '/newImgHd.jpg'
// ];

// export default function Home() {
//   const [index, setIndex] = useState(0);

//   // Change background every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % bgImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black text-white">
//       {/* Background Image Crossfade */}
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1 }}
//           animate={{ opacity: 1, scale: 1.08 }}
//           exit={{ opacity: 0 }}
//           transition={{
//             opacity: { duration: 2, ease: 'easeInOut' },
//             scale: { duration: 20, ease: 'linear' }
//           }}
//           className="absolute inset-0"
//         >
//           <Image
//   src={bgImages[index]}
//   alt="Romantic background"
//   fill
//   priority
//   // className={`object-cover ${
//   //   index === 0 ? 'object-top' : 'object-center'
//   // }`}
//   className="object-cover"
// />

//         </motion.div>
//       </AnimatePresence>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

//       {/* Vignette */}
//       <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.7)]" />

//       {/* Foreground Content */}
//       <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.25 } }
//           }}
//           className="max-w-xl"
//         >
//           <motion.h1
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             transition={{ duration: 1.2, ease: 'easeOut' }}
//             className="text-4xl md:text-5xl font-light leading-tight tracking-wide"
//           >
//             Every moment with you
//             <br />
//             feels like home
//           </motion.h1>

//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             transition={{ duration: 1.1, ease: 'easeOut' }}
//             className="mt-6 text-lg text-white/70"
//           >
//             A small journey through memories,
//             <br />
//             love, and time.
//           </motion.p>

//           <motion.button
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             whileHover={{
//               y: -2,
//               boxShadow: '0 0 20px rgba(255,255,255,0.2)'
//             }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="mt-10 inline-flex items-center rounded-full border border-white/30 px-8 py-3 text-sm tracking-wide backdrop-blur"
//           >
//             Enter the story
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import HeroSection from '@/components/home/Hero';
import ContextSection from '@/components/home/Context';
import InvitationSection from '@/components/home/Invitation';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <ContextSection /> */}
      <InvitationSection />
      {/* <Footer /> */}
    </>
  );
}
