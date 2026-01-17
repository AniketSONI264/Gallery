
// 'use client';

// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useTextContent } from '@/lib/useTextContent';

// /* -------------------- BACKGROUNDS -------------------- */
// const bgImages = [
//   { src: '/hero/hero-1.png' },
//   { src: '/hero/hero-1.png' },
//   { src: '/hero/hero-3.png' },
//   { src: '/hero/hero-2.jpg' },
//   { src: '/hero/hero-2.jpg' },
//   { src: '/hero/hero-3.png' },
// ];



// /* -------------------- FLOATING LOVE (FIXED) -------------------- */
// const LOVE_ICONS = ['❤️', '💗', '💖', '💕', '💞', '💘', '💝'];

// function FloatingLove() {
//   const [mounted, setMounted] = useState(false);
//   const [data, setData] = useState({
//     left: '50%',
//     top: '70%',
//     icon: '💖',
//     duration: 6,
//   });

//   useEffect(() => {
//     setMounted(true);

//     setData({
//       left: `${10 + Math.random() * 80}%`,
//       top: `${65 + Math.random() * 25}%`,
//       icon: LOVE_ICONS[Math.floor(Math.random() * LOVE_ICONS.length)],
//       duration: 5 + Math.random() * 2,
//     });
//   }, []);

//   if (!mounted) return null;

//   return (
//     <motion.span
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={{ opacity: 0.9, y: -120, scale: 1.3 }}
//       transition={{
//         duration: data.duration,
//         repeat: Infinity,
//       }}
//       className="
//         absolute
//         text-[20px]
//         text-pink-400/90
//         pointer-events-none
//         select-none
//         drop-shadow-[0_0_18px_rgba(255,105,180,0.45)]
//       "
//       style={{
//         left: data.left,
//         top: data.top,
//       }}
//     >
//       {data.icon}
//     </motion.span>
//   );
// }

// /* -------------------- PAGE -------------------- */
// export default function HeroSection() {
//   const [index, setIndex] = useState(0);
//   const texts = useTextContent();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % bgImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const heroLines = [
//     'Not everything needs to be loud to be remembered.',
//     'Some moments stay because they were felt,',
//     'not because they asked to be noticed.',
//     'A quiet journey through love, time, and memory.',
//   ];

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background */}
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, scale: 1.06 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.6 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={bgImages[index].src}
//             alt="Background"
//             fill
//             priority
//             className="object-cover object-center"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20" />
//       <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.65)]" />

//       {/* Content */}
//       <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16 text-white">
//         <div className="max-w-xl text-center lg:text-left">

//           {/* Headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 26 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.1 }}
//             className="
//               text-[30px]
//               sm:text-[38px]
//               md:text-[46px]
//               lg:text-[58px]
//               font-light
//               leading-tight
//               tracking-wide
//             "
//           >
//             {(texts.hero_headline ||
//               'Every moment with you feels like home')
//               .split(' ')
//               .map((word, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 18 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.08, duration: 0.6 }}
//                   className="inline-block mr-[0.35em]"
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//           </motion.h1>

//           {/* Paragraph */}
//           <div className="relative mt-8 text-white/70">
//             <FloatingLove />
//             <FloatingLove />
//             <FloatingLove />

//             {heroLines.map((line, i) => (
//               <motion.p
//                 key={i}
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + i * 0.35, duration: 0.8 }}
//                 className={
//                   i === heroLines.length - 1
//                     ? 'mt-3 text-white/50'
//                     : ''
//                 }
//               >
//                 {line}
//               </motion.p>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTextContent } from '@/lib/useTextContent';

/* -------------------- BACKGROUNDS -------------------- */
const bgImages = [
  { src: '/hero/hero-1.png' },
  { src: '/hero/hero-2.png' },
  { src: '/hero/333.png' },
];

/* -------------------- FLOATING LOVE -------------------- */
const LOVE_ICONS = ['❤️', '💗', '💖', '💕', '💞', '💘', '💝'];

function FloatingLove() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({
    left: '50%',
    top: '70%',
    icon: '💖',
    duration: 6,
  });

  useEffect(() => {
    setMounted(true);

    setData({
      left: `${10 + Math.random() * 80}%`,
      top: `${65 + Math.random() * 25}%`,
      icon: LOVE_ICONS[Math.floor(Math.random() * LOVE_ICONS.length)],
      duration: 5 + Math.random() * 2,
    });
  }, []);

  if (!mounted) return null;

  return (
    <motion.span
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 0.9, y: -120, scale: 1.3 }}
      transition={{
        duration: data.duration,
        repeat: Infinity,
      }}
      className="
        absolute
        text-[20px]
        text-pink-400/90
        pointer-events-none
        select-none
        drop-shadow-[0_0_18px_rgba(255,105,180,0.45)]
      "
      style={{
        left: data.left,
        top: data.top,
      }}
    >
      {data.icon}
    </motion.span>
  );
}

/* -------------------- HERO SECTION -------------------- */
export default function HeroSection() {
  const texts = useTextContent();

  const [bgIndex, setBgIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  const heroLines = [
    'Not everything needs to be loud to be remembered.',
    'Some moments stay because they were felt,',
    'not because they asked to be noticed.',
    'A quiet journey through love, time, and memory.',
  ];

  /* Background image rotation */
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* Text loop rotation */
  useEffect(() => {
    const timer = setInterval(() => {
      setLineIndex((i) => (i + 1) % heroLines.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.06 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6 }}
          className="absolute inset-0"
        >
          <Image
            src={bgImages[bgIndex].src}
            alt="Hero background"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.65)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16 text-white">
        <div className="max-w-xl text-center lg:text-left">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="
              text-[30px]
              sm:text-[38px]
              md:text-[46px]
              lg:text-[58px]
              font-light
              leading-tight
              tracking-wide
            "
          >
            {(texts.hero_headline ||
              'Every moment with you feels like home')
              .split(' ')
              .map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="inline-block mr-[0.35em]"
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>

          {/* Description (Looping Line by Line) */}
          <div className="relative mt-8 text-red/70 min-h-[4.5rem]">
            <FloatingLove />
            <FloatingLove />
            <FloatingLove />

            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.8 }}
                className={
                  lineIndex === heroLines.length - 1
                    ? 'text-white/50'
                    : 'text-white/70'
                }
              >
                {heroLines[lineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}









// 'use client';

// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useTextContent } from '@/lib/useTextContent';

// /* -------------------- BACKGROUNDS (SAFE LIST) -------------------- */
// /**
//  * IMPORTANT:
//  * - Use ONLY clean, lowercase paths
//  * - Even if some images are missing, fallback will prevent blanks
//  */
// const bgImages = [
//   '/hero/333.png',
//   '/hero/hero-1.png',
//   '/hero/hero-2.jpg',
//   '/hero/333.png',
// ];

// /* -------------------- FLOATING LOVE -------------------- */
// const LOVE_ICONS = ['❤️', '💗', '💖', '💕', '💞', '💘', '💝'];

// function FloatingLove() {
//   const [mounted, setMounted] = useState(false);
//   const [data, setData] = useState({
//     left: '50%',
//     top: '70%',
//     icon: '💖',
//     duration: 6,
//   });

//   useEffect(() => {
//     setMounted(true);
//     setData({
//       left: `${10 + Math.random() * 80}%`,
//       top: `${65 + Math.random() * 25}%`,
//       icon: LOVE_ICONS[Math.floor(Math.random() * LOVE_ICONS.length)],
//       duration: 5 + Math.random() * 2,
//     });
//   }, []);

//   if (!mounted) return null;

//   return (
//     <motion.span
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={{ opacity: 0.9, y: -120, scale: 1.3 }}
//       transition={{ duration: data.duration, repeat: Infinity }}
//       className="
//         absolute
//         text-[20px]
//         text-pink-400/90
//         pointer-events-none
//         select-none
//         drop-shadow-[0_0_18px_rgba(255,105,180,0.45)]
//       "
//       style={{ left: data.left, top: data.top }}
//     >
//       {data.icon}
//     </motion.span>
//   );
// }

// /* -------------------- HERO SECTION -------------------- */
// export default function HeroSection() {
//   const texts = useTextContent();

//   const [index, setIndex] = useState(0);
//   const [lineIndex, setLineIndex] = useState(0);
//   const [imageSrc, setImageSrc] = useState(bgImages[0]);

//   const heroLines = [
//     'Not everything needs to be loud to be remembered.',
//     'Some moments stay because they were felt,',
//     'not because they asked to be noticed.',
//     'A quiet journey through love, time, and memory.',
//   ];

//   /* Rotate background index */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % bgImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   /* Apply image safely */
//   useEffect(() => {
//     setImageSrc(bgImages[index] || bgImages[0]);
//   }, [index]);

//   /* Rotate text line */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setLineIndex((i) => (i + 1) % heroLines.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={imageSrc}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, scale: 1.06 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.6 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={imageSrc}
//             alt="Hero background"
//             fill
//             priority
//             className="object-cover object-center"
//             onError={() => {
//               // 🔒 HARD FALLBACK — NEVER BLANK
//               setImageSrc(bgImages[0]);
//             }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20" />
//       <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.65)]" />

//       {/* Content */}
//       <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16 text-white">
//         <div className="max-w-xl text-center lg:text-left">
//           {/* Headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 26 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.1 }}
//             className="
//               text-[30px]
//               sm:text-[38px]
//               md:text-[46px]
//               lg:text-[58px]
//               font-light
//               leading-tight
//               tracking-wide
//             "
//           >
//             {(texts.hero_headline ||
//               'Every moment with you feels like home')
//               .split(' ')
//               .map((word, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 18 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.08, duration: 0.6 }}
//                   className="inline-block mr-[0.35em]"
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//           </motion.h1>

//           {/* Description (Looping, Safe) */}
//           <div className="relative mt-8 min-h-[2.5rem] text-white/70">
//             <FloatingLove />
//             <FloatingLove />
//             <FloatingLove />

//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={lineIndex}
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -14 }}
//                 transition={{ duration: 0.8 }}
//                 className={
//                   lineIndex === heroLines.length - 1
//                     ? 'text-white/50'
//                     : 'text-white/70'
//                 }
//               >
//                 {heroLines[lineIndex]}
//               </motion.p>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
