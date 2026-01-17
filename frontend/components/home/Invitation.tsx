// // 'use client';

// // import { motion } from 'framer-motion';
// // import Link from 'next/link';

// // export default function InvitationSection() {
// //   return (
// //     <section className="bg-black text-white py-40 flex justify-center">
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //         viewport={{ once: true }}
// //         className="text-center"
// //       >
// //         <motion.div
// //           whileHover={{ y: -3, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
// //           transition={{ duration: 0.6, ease: 'easeOut' }}
// //         >
// //           <Link
// //             href="/gallery"
// //             className="inline-block rounded-full border border-white/30 px-10 py-4 tracking-wide backdrop-blur"
// //           >
// //             Begin the journey
// //           </Link>
// //         </motion.div>
// //       </motion.div>
// //     </section>
// //   );
// // }




// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const FloatingHeart = ({ delay = 0 }: { delay?: number }) => (
//   <motion.span
//     initial={{ opacity: 0, y: 20, scale: 0.6 }}
//     animate={{
//       opacity: [0, 0.6, 0],
//       y: [-20, -100],
//       scale: [0.6, 1.1, 1.2],
//     }}
//     transition={{
//       duration: 6,
//       delay,
//       repeat: Infinity,
//       ease: 'easeOut',
//     }}
//     className="absolute text-pink-500/60 text-3xl blur-[0.3px]"
//     style={{
//       left: `${20 + Math.random() * 60}%`,
//       bottom: '10%',
//     }}
//   >
//     ❤️
//   </motion.span>
// );

// export default function InvitationSection() {
//   return (
//     <section className="relative bg-black text-white py-40 flex justify-center overflow-hidden">
//       {/* GRAIN BACKGROUND */}
//       <div
//         className="absolute inset-0 opacity-[0.08] pointer-events-none"
//         style={{
//           backgroundImage: "url('/grain.png')",
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       {/* AMBIENT HEARTS */}
//       <FloatingHeart delay={0} />
//       <FloatingHeart delay={1.5} />
//       <FloatingHeart delay={3} />

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: 'easeOut' }}
//         viewport={{ once: true }}
//         className="relative z-10 text-center max-w-xl px-6"
//       >
//         {/* POETIC LINE */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="
//             mb-10
//             text-lg
//             sm:text-xl
//             font-light
//             tracking-wide
//             text-white/70
//           "
//         >
//           Some journeys don’t begin with steps,
//           <br className="hidden sm:block" />
//           they begin with a feeling.
//         </motion.p>

//         {/* HEART BUTTON */}
//         <motion.div
//           whileHover={{
//             scale: 1.08,
//             boxShadow: '0 0 60px rgba(255,20,60,0.6)',
//           }}
//           whileTap={{ scale: 0.96 }}
//           transition={{ type: 'spring', stiffness: 180 }}
//         >
//           <Link
//             href="/gallery"
//             className="
//               relative
//               inline-flex
//               items-center
//               justify-center
//               w-36
//               h-32
//               bg-gradient-to-br
//               from-pink-500
//               to-red-600
//               text-white
//               text-sm
//               uppercase
//               tracking-widest
//               shadow-[0_0_40px_rgba(255,0,80,0.45)]
//               hover:shadow-[0_0_70px_rgba(255,0,80,0.7)]
//               transition-all
//             "
//             style={{
//               clipPath:
//                 'path("M75 135 C15 90 0 60 0 40 C0 10 25 0 45 0 C60 0 70 10 75 20 C80 10 90 0 105 0 C125 0 150 10 150 40 C150 60 135 90 75 135 Z")',
//             }}
//           >
//             Begin
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }











'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const HEART_ICONS = ['❤️', '💗', '💖', '💕', '💞', '💘', '✨', '🙈','✨','💓','❤️‍🩹','❤️‍🔥','🩷'];

function FloatingHearts({ count = 6 }: { count?: number }) {
  const prefersReduced = useReducedMotion();

  const items = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      icon: HEART_ICONS[Math.floor(Math.random() * HEART_ICONS.length)],
      left: 2 + Math.random() * 86, // percent
      size: 36 + Math.random() * 22, // px base -> responsive by tailwind text sizes
      delay: Math.random() * 3,
      duration: 5 + Math.random() * 6,
      opacity: 0.35 + Math.random() * 0.55,
      drift: (Math.random() - 0.5) * 18, // horizontal drift px
    }));
  }, [count]);

  if (prefersReduced) return null;

  return (
    <>
      {items.map((it, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12, scale: 0.85 }}
          animate={{
            opacity: [0, it.opacity, 0],
            y: [-8 - Math.random() * 40, -120 - Math.random() * 40],
            x: [0, it.drift],
            scale: [0.85, 1.06, 1.14],
          }}
          transition={{
            duration: it.duration,
            delay: it.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{
            left: `${it.left}%`,
            bottom: `${6 + Math.random() * 20}%`,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            zIndex: 8,
          }}
          className={`absolute select-none pointer-events-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]`}
        >
          <span
            style={{
              fontSize: it.size,
              WebkitTextStroke: '0.3px rgba(255,255,255,0.02)',
              display: 'inline-block',
              transform: 'translateZ(0)',
            }}
            className="text-pink-400"
            aria-hidden
          >
            {it.icon}
          </span>
        </motion.span>
      ))}
    </>
  );
}

/**
 * HeartCTA - accessible heart-shaped CTA using inline SVG
 */
// function HeartCTA({ href = '/gallery', label = 'Begin' }: { href?: string; label?: string }) {
//   return (
//     <Link href={href} passHref>
//       <motion.a
//         role="button"
//         aria-label="Begin the journey"
//         initial={{ scale: 1, opacity: 1 }}
//         whileHover={{ scale: 1.06 }}
//         whileTap={{ scale: 0.98 }}
//         transition={{ type: 'spring', stiffness: 220, damping: 18 }}
//         className="relative z-20 inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg font-semibold
//                    shadow-[0_10px_40px_rgba(255,20,80,0.18)]
//                    hover:shadow-[0_12px_60px_rgba(255,20,80,0.28)]
//                    focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/30"
//         style={{
//           background: 'linear-gradient(135deg,#ff6aa7 0%, #ff3b6a 40%, #ff1a3c 100%)',
//           color: 'white',
//         }}
//       >
//         {/* Heart SVG */}
//         <svg
//           width="28"
//           height="28"
//           viewBox="0 0 24 24"
//           fill="none"
//           aria-hidden
//           className="inline-block"
//         >
//           <motion.path
//             initial={{ scale: 1 }}
//             whileHover={{ scale: 1.06 }}
//             transition={{ duration: 0.25 }}
//             d="M12.1 21.35l-1.1-1.02C5.14 15.24 2 12.39 2 8.5 2 6.02 4.02 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 17.98 4 20 6.02 20 8.5c0 3.89-3.14 6.74-8.9 11.83l-1 1.02z"
//             fill="white"
//             style={{ transformOrigin: 'center' }}
//           />
//         </svg>

//         <span className="tracking-widest">{label}</span>
//       </motion.a>
//     </Link>
//   );
// }
// import Link from 'next/link';
// import { motion } from 'framer-motion';

export function HeartCTA({
  href = '/gallery',
  label = 'Begin the journey',
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link href={href} aria-label={label}>
      {/* Link renders <a>, so we animate a DIV inside */}
      <motion.div
        role="button"
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.08,
          boxShadow: '0 0 70px rgba(255,40,90,0.75)',
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="
          relative z-15
          inline-flex items-center justify-center gap-3
          w-[170px] h-[150px]
          text-white text-sm sm:text-base
          uppercase tracking-widest
          cursor-pointer select-none
          focus:outline-none
        "
        style={{
          background: 'linear-gradient(135deg,#ff5f9e,#ff2b55)',
          clipPath:
            'path("M85 150 C20 100 0 65 0 40 C0 10 30 0 50 0 C65 0 78 12 85 25 C92 12 105 0 120 0 C140 0 170 10 170 40 C170 65 150 100 85 150 Z")',
        }}
      >
        {/* Heart Icon */}
        <span className="text-2xl sm:text-3xl">❤️</span>

        {/* Text */}
        <span className="absolute bottom-10 left-1/2 -translate-x-1/2">
          {label}
        </span>

        {/* Glow */}
        <span className="
          absolute inset-0 -z-10
          rounded-full blur-2xl
          bg-pink-500/40
        " />
      </motion.div>
    </Link>
  );
}


/**
 * Merged Hero+Invitation section
 */
export default function HeroInvite() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* BACKGROUND LAYERS */}
      {/* 1) grain (tile) with graceful fallback gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('/grain.png'), linear-gradient(180deg, rgba(0,0,0,0.62), rgba(0,0,0,0.72))",
          backgroundRepeat: 'repeat, no-repeat',
          backgroundSize: 'auto, cover',
          mixBlendMode: 'overlay',
          opacity: 0.08,
        }}
      />

      {/* 2) soft radial cinematic glow centered */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.75) 60%)',
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 lg:py-44">
        <div className="mx-auto max-w-3xl text-center">
          {/* small tag line */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-6 text-sm sm:text-base uppercase tracking-[0.28em] text-white/40"
          >
            A quiet scene — take a breath
          </motion.div>

          {/* main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            <span className="block">Every moment with you</span>
            <span className="block">feels like coming home</span>
          </motion.h1>

          {/* poetic subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.9 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white/70 font-normal leading-relaxed"
          >
            Not every memory needs a grand scene — some stay because they were felt.
            <span className="hidden sm:inline"> Hold my hand and we'll walk through them.</span>
          </motion.p>

          {/* CTA + small hint */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.9 }}
            className="mt-10 flex flex-col items-center gap-6"
          >
            <HeartCTA href="/gallery" label="Begin the journey" />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.9 }}
              className="text-sm text-white/50"
            >
              Or unlock the Surprise section when the time is right.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* floating hearts (visually behind CTA/text but above grain) */}
      <FloatingHearts count={7} />
    </section>
  );
}
