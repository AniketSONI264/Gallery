// // 'use client';

// // import Image from 'next/image';
// // import { motion, useReducedMotion } from 'framer-motion';
// // import { useMemo } from 'react';

// // /* -------------------- MESSAGE CONTENT -------------------- */
// // const messageLines = [
// //   'Dear Bebooo,',
// //   '',
// //   'If you’re reading this, it means you’ve already walked',
// //   'through every moment I tried to preserve for us.',
// //   '',
// //   'Every photo you saw wasn’t chosen for perfection,',
// //   'it was chosen for truth.',
// //   '',
// //   'This space was never meant to impress you.',
// //   'It exists only to remind you of something simple.',
// //   '',
// //   'That even in a loud, restless world,',
// //   'you have always been my quiet place.',
// //   '',
// //   'The place where time slows down,',
// //   'where everything feels lighter without trying.',
// //   '',
// //   'Life will keep moving, changing, testing us,',
// //   'but these moments will always stay untouched.',
// //   '',
// //   'They will stay as proof that once,',
// //   'we felt something real, deeply, honestly.',
// //   '',
// //   'No matter where life takes us next,',
// //   'this will always be home to me.',
// //   '',
// //   'With all my heart,',
// //   'Always yours.',
// // ];

// // /* -------------------- HEART SYSTEM -------------------- */
// // const HEART_ICONS = [
// //   '❤️','💗','💖','💕','💞','💘','✨','🎉','🎊','💓','❤️‍🩹','❤️‍🔥','🩷',
// // ];

// // /* -------------------- FLOATING HEARTS -------------------- */
// // function FloatingHearts({ count = 14 }: { count?: number }) {
// //   const prefersReduced = useReducedMotion();

// //   const items = useMemo(() => {
// //     return Array.from({ length: count }).map(() => ({
// //       icon: HEART_ICONS[Math.floor(Math.random() * HEART_ICONS.length)],
// //       left: 6 + Math.random() * 86,
// //       size: 22 + Math.random() * 28,
// //       delay: Math.random() * 2,
// //       duration: 7 + Math.random() * 8,
// //       opacity: 0.35 + Math.random() * 0.5,
// //       drift: (Math.random() - 0.5) * 30,
// //     }));
// //   }, [count]);

// //   if (prefersReduced) return null;

// //   return (
// //     <div className="pointer-events-none absolute inset-0 overflow-hidden z-[5]">
// //       {items.map((item, i) => (
// //         <motion.span
// //           key={i}
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{
// //             opacity: [0, item.opacity, 0],
// //             y: [-20, -220],
// //             x: [0, item.drift],
// //           }}
// //           transition={{
// //             delay: item.delay,
// //             duration: item.duration,
// //             repeat: Infinity,
// //             ease: 'easeOut',
// //           }}
// //           className="absolute select-none blur-[0.4px]"
// //           style={{
// //             left: `${item.left}%`,
// //             bottom: '8%',
// //             fontSize: item.size,
// //           }}
// //         >
// //           {item.icon}
// //         </motion.span>
// //       ))}
// //     </div>
// //   );
// // }

// // /* -------------------- INLINE HEART -------------------- */
// // const InlineHeart = () => (
// //   <motion.span
// //     initial={{ opacity: 0, scale: 0.6 }}
// //     animate={{ opacity: 0.7, scale: 1 }}
// //     transition={{ duration: 0.6, ease: 'easeOut' }}
// //     className="mr-2 text-pink-400/70"
// //   >
// //     ❤️
// //   </motion.span>
// // );

// // /* -------------------- PAGE -------------------- */
// // export default function FinalMessagePage() {
// //   return (
// //     <section className="relative min-h-screen overflow-hidden bg-black">

// //       {/* BACKGROUND IMAGE */}
// //       <motion.div
// //         initial={{ scale: 1 }}
// //         animate={{ scale: 1.06 }}
// //         transition={{ duration: 45, ease: 'linear' }}
// //         className="absolute inset-0"
// //       >
// //         <Image
// //           src="/4.png"
// //           alt="Background"
// //           fill
// //           priority
// //           className="object-cover object-center opacity-65"
// //         />
// //       </motion.div>

// //       {/* OVERLAYS */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85" />
// //       <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.8)]" />

// //       {/* FLOATING HEARTS */}
// //       <FloatingHearts />

// //       {/* CONTENT */}
// //       <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 md:px-20 py-28">
// //         <motion.div
// //           initial={{ opacity: 0, y: 28 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 2, ease: 'easeOut' }}
// //           className="max-w-2xl text-left text-white"
// //         >
// //           {messageLines.map((line, index) => (
// //             <motion.p
// //               key={index}
// //               initial={{ opacity: 0, y: 12 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{
// //                 delay: index * 0.45,
// //                 duration: 0.9,
// //                 ease: 'easeOut',
// //               }}
// //               className={`
// //                 flex items-start
// //                 text-[15px] sm:text-base md:text-lg
// //                 leading-relaxed tracking-wide
// //                 text-white/85
// //                 ${line === '' ? 'h-6 sm:h-8' : 'mb-2'}
// //               `}
// //             >
// //               {line !== '' && <InlineHeart />}
// //               <span>{line}</span>
// //               {line !== '' && (
// //                 <motion.span
// //                   initial={{ opacity: 0, scale: 0.6 }}
// //                   animate={{ opacity: 0.6, scale: 1 }}
// //                   transition={{ delay: 0.25, duration: 0.6 }}
// //                   className="ml-2 text-pink-400/50"
// //                 >
// //                   ❤️
// //                 </motion.span>
// //               )}
// //             </motion.p>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }












// 'use client';

// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useEffect, useState } from 'react';

// /* -------------------- MESSAGE -------------------- */
// const messageLines = [
//   'Dear Bebooo,',
//   '',
//   'If you’re reading this, it means you’ve already walked',
//   'through every moment I tried to preserve for us.',
//   '',
//   'Every photo you saw wasn’t chosen for perfection,',
//   'it was chosen for truth.',
//   '',
//   'This space was never meant to impress you.',
//   'It exists only to remind you of something simple.',
//   '',
//   'That even in a loud, restless world,',
//   'you have always been my quiet place.',
//   '',
//   'The place where time slows down,',
//   'where everything feels lighter without trying.',
//   '',
//   'Life will keep moving, changing, testing us,',
//   'but these moments will always stay untouched.',
//   '',
//   'They will stay as proof that once,',
//   'we felt something real, deeply, honestly.',
//   '',
//   'No matter where life takes us next,',
//   'this will always be home to me.',
//   '',
//   'With all my heart,',
//   'Always yours.',
// ];

// /* -------------------- PAGE -------------------- */
// export default function FinalMessagePage() {
//   /* scroll-based fade at end */
//   const { scrollYProgress } = useScroll();
//   const fadeOut = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

//   return (
//     <section className="relative min-h-screen bg-black overflow-hidden">

//       {/* Background */}
//       <motion.div
//         initial={{ scale: 1 }}
//         animate={{ scale: 1.06 }}
//         transition={{ duration: 50, ease: 'linear' }}
//         className="absolute inset-0"
//       >
//         <Image
//           src="/4.png"
//           alt="Background"
//           fill
//           priority
//           className="object-cover object-center opacity-65"
//         />
//       </motion.div>

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
//       <div className="absolute inset-0 shadow-[inset_0_0_240px_rgba(0,0,0,0.85)]" />

//       {/* Content */}
//       <motion.div
//         style={{ opacity: fadeOut }}
//         className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 md:px-20 py-28"
//       >
//         <div className="max-w-2xl text-left text-white">

//           {messageLines.map((line, index) => (
//             <Line
//               key={index}
//               text={line}
//               index={index}
//               isTitle={index === 0}
//             />
//           ))}

//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* -------------------- LINE COMPONENT -------------------- */
// function Line({
//   text,
//   index,
//   isTitle,
// }: {
//   text: string;
//   index: number;
//   isTitle?: boolean;
// }) {
//   const [visibleChars, setVisibleChars] = useState(0);

//   /* subtle auto-type */
//   useEffect(() => {
//     if (!text) return;
//     const interval = setInterval(() => {
//       setVisibleChars((c) => (c < text.length ? c + 1 : c));
//     }, 18);
//     return () => clearInterval(interval);
//   }, [text]);

//   if (text === '') {
//     return <div className="h-6 sm:h-8" />;
//   }

//   return (
//     <motion.p
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{
//         opacity: 1,
//         scale: [1, 1.015, 1], // heartbeat pulse
//       }}
//       transition={{
//         delay: index * 0.4,
//         duration: 0.9,
//         ease: 'easeOut',
//       }}
//       className={`
//         mb-2
//         leading-relaxed
//         tracking-wide
//         ${
//           isTitle
//             ? 'font-[var(--font-handwritten)] text-2xl sm:text-3xl md:text-4xl text-white'
//             : 'font-[var(--font-serif)] text-[15px] sm:text-base md:text-lg text-white/85'
//         }
//       `}
//     >
//       {text.slice(0, visibleChars)}
//     </motion.p>
//   );
// }









'use client';

import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import TextTyping from '@/components/TypingText';
/* -------------------- MESSAGE -------------------- */

const today = new Date().toISOString().slice(5, 10); // MM-DD

// if (today === '02-14') {
//  "Dear Bebooo,",
//  "I Love You so muchhhhhhhhhhhhhhhhhhhhhhhhhhh 💝🥹❤️",
// }



const messageLines = [
  'Dear Bebooo💝,',
  '',
  'If you’re reading this, it means you’ve already walked',
  'through every moment I tried to preserve for us.',
  '',
  'Every photo you saw wasn’t chosen for perfection,',
  'it was chosen for truth.',
  '',
  'This space was never meant to impress you.',
  'It exists only to remind you of something simple.',
  '',
  'That even in a loud, restless world,',
  'you have always been my quiet place.',
  '',
  'The place where time slows down,',
  'where everything feels lighter without trying.',
  '',
  'Life will keep moving, changing, testing us,',
  'but these moments will always stay untouched.',
  '',
  'They will stay as proof that once,',
  'we felt something real, deeply, honestly.',
  '',
  'No matter where life takes us next,',
  'this will always be home to me.',
  '',
  'With all my heart,',
  'Always yours.',
];

/* -------------------- FLOATING HEARTS -------------------- */
const HEART_ICONS = [
  '❤️','💗','💖','💕','💞','💘','✨','🎉','🎊','💓','❤️‍🩹','❤️‍🔥','🩷',
];

function FloatingHearts({ count = 14 }: { count?: number }) {
  const reduced = useReducedMotion();

  const items = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      icon: HEART_ICONS[Math.floor(Math.random() * HEART_ICONS.length)],
      left: 4 + Math.random() * 90,
      size: 22 + Math.random() * 26,
      delay: Math.random() * 3,
      duration: 6 + Math.random() * 7,
      opacity: 0.3 + Math.random() * 0.5,
      drift: (Math.random() - 0.5) * 28,
    }));
  }, [count]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden">
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: [0, item.opacity, 0],
            y: [-20, -220],
            x: [0, item.drift],
          }}
          transition={{
            delay: item.delay,
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="absolute select-none blur-[0.3px]"
          style={{
            left: `${item.left}%`,
            bottom: '8%',
            fontSize: item.size,
          }}
        >
          {item.icon}
        </motion.span>
      ))}
    </div>
  );
}

/* -------------------- PAGE -------------------- */
export default function FinalMessagePage() {
  const { scrollYProgress } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 45, ease: 'linear' }}
        className="absolute inset-0"
      >
        <Image
          src="/4.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      <div className="absolute inset-0 shadow-[inset_0_0_260px_rgba(0,0,0,0.9)]" />

      {/* Ambient candle flicker */}
      <motion.div
        animate={{ opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,180,120,0.15),transparent_55%)]"
      />

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Content */}
      <TextTyping text="Dear Bebooo," />
      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 md:px-20 py-28"
      >
        <div className="max-w-2xl text-left text-white">
          {messageLines.map((line, index) => (
            <Line
              key={index}
              text={line}
              index={index}
              isTitle={index === 0}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------- LINE COMPONENT -------------------- */
function Line({
  text,
  index,
  isTitle,
}: {
  text: string;
  index: number;
  isTitle?: boolean;
}) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!text) return;
    const id = setInterval(() => {
      setVisible((v) => (v < text.length ? v + 1 : v));
    }, 18);
    return () => clearInterval(id);
  }, [text]);

  if (text === '') return <div className="h-6 sm:h-8" />;

  return (
    <motion.p
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{
        opacity: 1,
        scale: [1, 1.015, 1],
      }}
      transition={{
        delay: index * 0.42,
        duration: 0.9,
        ease: 'easeOut',
      }}
      className={`
        mb-2
        leading-relaxed
        tracking-wide
        ${
          isTitle
            ? 'font-[var(--font-handwritten)] text-2xl sm:text-3xl md:text-4xl text-white relative'
            : 'font-[var(--font-serif)] text-[15px] sm:text-base md:text-lg text-white/85'
        }
      `}
    >
      {text.slice(0, visible)}
      {visible < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1 inline-block h-[1em] w-[1px] bg-white/70 align-middle"
        />
      )}

      {/* ink bleed shimmer */}
      {isTitle && (
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-20 animate-pulse" />
      )}
    </motion.p>
  );
}
