// // 'use client';

// // import Image from 'next/image';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { useEffect, useState } from 'react';
// // import {useTextContent} from "@/lib/useTextContent";


// // const bgImages = [
// //   { src: '/Untitled design (7).png' },
// //   { src: '/Untitled design (2).jpg' },
// //   { src: '/3.png' },
// // ];

// // export default function HeroSection() {
// //   const [index, setIndex] = useState(0);
// // const texts = useTextContent();

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setIndex((i) => (i + 1) % bgImages.length);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <section className="relative min-h-screen overflow-hidden">
// //       {/* Background */}
// //       <AnimatePresence>
// //         <motion.div
// //           key={index}
// //           initial={{ opacity: 0, scale: 1 }}
// //           animate={{ opacity: 1, scale: 1.06 }}
// //           exit={{ opacity: 0 }}
// //           transition={{
// //             opacity: { duration: 1.6, ease: 'easeInOut' },
// //             scale: { duration: 18, ease: 'linear' }
// //           }}
// //           className="absolute inset-0"
// //         >
// //           <Image
// //             src={bgImages[index].src}
// //             alt="Background"
// //             fill
// //             priority
// //             className="
// //               object-cover
// //               object-center
// //               md:object-center
// //               lg:object-top
// //             "
// //           />
// //         </motion.div>
// //       </AnimatePresence>

// //       {/* Overlays */}
// //       <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
// //       <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.65)]" />

// //       {/* Content */}
// //       <div className="
// //         relative z-10
// //         flex min-h-screen items-center
// //         px-5 sm:px-8 md:px-16
// //         text-white
// //       ">
// //         {/* <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={{
// //             hidden: {},
// //             visible: { transition: { staggerChildren: 0.18 } }
// //           }}
// //           className="
// //             w-full
// //             max-w-xl
// //             text-center
// //             md:text-center
// //             lg:text-left
// //           "
// //         >
// //           <motion.h1
// //             variants={{
// //               hidden: { opacity: 0, y: 24 },
// //               visible: { opacity: 1, y: 0 }
// //             }}
// //             transition={{ duration: 1, ease: 'easeOut' }}
// //             className="
// //               text-[28px]
// //               sm:text-[34px]
// //               md:text-[40px]
// //               lg:text-5xl
// //               font-light
// //               leading-tight
// //               tracking-wide
// //             "
// //           >
// //             Every moment with you
// //             <br />
// //             feels like home
// //           </motion.h1>

// //           <motion.p
// //             variants={{
// //               hidden: { opacity: 0, y: 16 },
// //               visible: { opacity: 1, y: 0 }
// //             }}
// //             transition={{ duration: 0.9, ease: 'easeOut' }}
// //             className="
// //               mt-5
// //               sm:mt-6
// //               text-[15px]
// //               sm:text-base
// //               md:text-lg
// //               text-white/70
// //             "
// //           >
// //             A quiet journey through love,
// //             <br />
// //             time, and memory.
// //           </motion.p>
// //         </motion.div> */}
// //         <motion.div
// //   initial="hidden"
// //   animate="visible"
// //   variants={{
// //     hidden: {},
// //     visible: { transition: { staggerChildren: 0.18 } },
// //   }}
// //   className="
// //     w-full
// //     max-w-xl
// //     text-center
// //     md:text-center
// //     lg:text-left
// //   "
// // >
// //   <motion.h1
// //     variants={{
// //       hidden: { opacity: 0, y: 24 },
// //       visible: { opacity: 1, y: 0 },
// //     }}
// //     transition={{ duration: 1, ease: 'easeOut' }}
// //     className="
// //       text-[28px]
// //       sm:text-[34px]
// //       md:text-[40px]
// //       lg:text-5xl
// //       font-light
// //       leading-tight
// //       tracking-wide
// //     "
// //   >
// //     {texts.hero_headline || (
// //       <>
// //         Every moment with you
// //         <br />
// //         feels like home
// //       </>
// //     )}
// //   </motion.h1>

// //   <motion.p
// //     variants={{
// //       hidden: { opacity: 0, y: 16 },
// //       visible: { opacity: 1, y: 0 },
// //     }}
// //     transition={{ duration: 0.9, ease: 'easeOut' }}
// //     className="
// //       mt-5
// //       sm:mt-6
// //       text-[15px]
// //       sm:text-base
// //       md:text-lg
// //       text-white/70
// //     "
// //   >
// //     {texts.hero_subtitle || (
// //       <>
// //         A quiet journey through love,
// //         <br />
// //         time, and memory.
// //       </>
// //     )}
// //   </motion.p>
// // </motion.div>

// //       </div>
// //     </section>
// //   );
// // }








// 'use client';

// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import {useTextContent} from "@/lib/useTextContent";


// const bgImages = [
//   { src: '/Untitled design (7).png' },
//   { src: '/Untitled design (2).jpg' },
//   { src: '/3.png' },
// ];

// export default function HeroSection() {
//   const [index, setIndex] = useState(0);
// const texts = useTextContent();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % bgImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);
  

//   const LOVE_ICONS = ['❤️', '💗', '💖', '💕', '💞', '💘', '❣️', '💝'];

// const FloatingLove = () => {
//   const icon =
//     LOVE_ICONS[Math.floor(Math.random() * LOVE_ICONS.length)];

//   return (
//     <motion.span
//       initial={{
//         opacity: 0,
//         y: 20,
//         scale: 0.8,
//       }}
//       animate={{
//         opacity: [0, 0.9, 0],
//         y: [20, -90],
//         x: [-10, 10],
//         scale: [0.9, 1.25, 1.35],
//       }}
//       transition={{
//         duration: 4.5 + Math.random() * 2,
//         repeat: Infinity,
//         ease: 'easeOut',
//       }}
//       className="
//         absolute
//         text-[20px]
//         sm:text-[20px]
//         md:text-[20px]
//         lg:text-[20px]
//         text-pink-400/90
//         drop-shadow-[0_0_18px_rgba(255,105,180,0.45)]
//         select-none
//         pointer-events-none
//         blur-[0.2px]
//       "
//       style={{
//         left: `${10 + Math.random() * 80}%`,
//         top: `${65 + Math.random() * 25}%`,
//       }}
//     >
//       {icon}
//     </motion.span>
//   );
// };
// const heroLines = [
//   "Not everything needs to be loud to be remembered.",
//   "Some moments stay because they were felt,",
//   "not because they asked to be noticed.",
//   "A quiet journey through love, time, and memory.",
// ];
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.6,
//     },
//   },
// };

// const lineVariants = {
//   hidden: {
//     opacity: 0,
//     y: 14,
//     filter: "blur(4px)",
//   },
//   visible: {
//     opacity: [0, 1, 0.85, 1],
//     y: [14, 0, 0],
//     filter: ["blur(4px)", "blur(0px)"],
//     transition: {
//       duration: 2.8,
//       ease: "easeInOut",
//       repeat: Infinity,
//       repeatDelay: 5,
//     },
//   },
// };



//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background */}
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1 }}
//           animate={{ opacity: 1, scale: 1.06 }}
//           exit={{ opacity: 0 }}
//           transition={{
//             opacity: { duration: 1.6, ease: 'easeInOut' },
//             scale: { duration: 18, ease: 'linear' }
//           }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={bgImages[index].src}
//             alt="Background"
//             fill
//             priority
//             className="
//               object-cover
//               object-center
//               md:object-center
//               lg:object-top
//             "
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
//       <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.65)]" />

//       {/* Content */}
//       <div className="
//         relative z-10
//         flex min-h-screen items-center
//         px-5 sm:px-8 md:px-16
//         text-white
//       ">
//   <motion.div
//   initial="hidden"
//   animate="visible"
//   variants={{
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.18 } },
//   }}
//   className="
//     w-full
//     max-w-xl
//     text-center
//     md:text-center
//     lg:text-left
//   "
// >

//   <motion.h1
//   initial="hidden"
//   animate="visible"
//   variants={{
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.12 } },
//   }}
//   className="
//     relative
//     text-[30px]
//     sm:text-[38px]
//     md:text-[46px]
//     lg:text-[58px]
//     font-[300]
//     leading-[1.15]
//     tracking-wide
//     text-white
//   "
// >

//   {(texts.hero_headline ||
//     'Every moment with you feels like home'
//   )
//     .split(' ')
//     .map((word, i) => (
//       <motion.span
//         key={i}
//         variants={{
//           hidden: { opacity: 0, y: 26 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         transition={{ duration: 0.9, ease: 'easeOut' }}
//         className="
//           inline-block mr-[0.35em]
//           hover:text-pink-300/90
//           transition-colors duration-700
//         "
//       >
//         {word}
//       </motion.span>
//     ))}

// </motion.h1>
// <motion.div
//   variants={containerVariants}
//   initial="hidden"
//   animate="visible"
//   className="
//     relative
//     mt-8
//     text-[15px]
//     sm:text-base
//     md:text-lg
//     leading-relaxed
//     tracking-wide
//     text-white/70
//     max-w-xl
//   "
// >
//   {/* floating ambience */}
//   <FloatingLove />
//   <FloatingLove />
//   <FloatingLove />

//   {heroLines.map((line, index) => (
//     <motion.p
//       key={index}
//       variants={lineVariants}
//       className={`
//         ${index === heroLines.length - 1 ? "mt-3 text-white/50" : ""}
//       `}
//     >
//       {line}
//     </motion.p>
//   ))}

//   {/* floating ambience */}
//   <FloatingLove />
//   <FloatingLove />
//   <FloatingLove />
// </motion.div>

// </motion.div>

//       </div>
//     </section>
//   );
// }








// 'use client';

// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useTextContent } from '@/lib/useTextContent';

// /* -------------------- BACKGROUNDS -------------------- */
// const bgImages = [
//   { src: '/Untitled design (7).png' },
//   { src: '/Untitled design (2).jpg' },
//   { src: '/3.png' },
// ];

// /* -------------------- FLOATING LOVE -------------------- */
// const LOVE_ICONS = ['❤️', '💗', '💖', '💕', '💞', '💘', '💝'];

// function FloatingLove() {
//   const icon = LOVE_ICONS[Math.floor(Math.random() * LOVE_ICONS.length)];

//   return (
//     <motion.span
//       initial={{ opacity: 0, y: 20, scale: 0.8 }}
//       animate={{
//         opacity: [0, 0.9, 0],
//         y: [20, -120],
//         scale: [0.9, 1.2, 1.35],
//       }}
//       transition={{
//         duration: 5 + Math.random() * 2,
//         repeat: Infinity,
//         ease: 'easeOut',
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
//         left: `${10 + Math.random() * 80}%`,
//         top: `${65 + Math.random() * 25}%`,
//       }}
//     >
//       {icon}
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
//           transition={{ duration: 1.6, ease: 'easeOut' }}
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
//             transition={{ duration: 1.1, ease: 'easeOut' }}
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
//                 className={`${
//                   i === heroLines.length - 1 ? 'mt-3 text-white/50' : ''
//                 }`}
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
  { src: '/Untitled design (7).png' },
  { src: '/Untitled design (2).jpg' },
  { src: '/3.png' },
];

/* -------------------- FLOATING LOVE (FIXED) -------------------- */
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

/* -------------------- PAGE -------------------- */
export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const texts = useTextContent();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroLines = [
    'Not everything needs to be loud to be remembered.',
    'Some moments stay because they were felt,',
    'not because they asked to be noticed.',
    'A quiet journey through love, time, and memory.',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.06 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6 }}
          className="absolute inset-0"
        >
          <Image
            src={bgImages[index].src}
            alt="Background"
            fill
            priority
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

          {/* Paragraph */}
          <div className="relative mt-8 text-white/70">
            <FloatingLove />
            <FloatingLove />
            <FloatingLove />

            {heroLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.35, duration: 0.8 }}
                className={
                  i === heroLines.length - 1
                    ? 'mt-3 text-white/50'
                    : ''
                }
              >
                {line}
              </motion.p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
