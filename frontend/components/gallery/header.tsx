// 'use client';

// import { motion } from 'framer-motion';

// export default function GalleryHeader() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2, ease: 'easeOut' }}
//       className="mb-24 text-center"
//     >
//       <motion.h1
//         className="text-4xl md:text-5xl font-light tracking-wide"
//         initial={{ letterSpacing: '0.25em' }}
//         animate={{ letterSpacing: '0.05em' }}
//         transition={{ duration: 1.4, ease: 'easeOut' }}
//       >
//         Our Memories ✨📸
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8, duration: 1 }}
//         className="mt-6 text-sm md:text-base text-white/60"
//       >
//         not captured, but *felt*
//       </motion.p>
//     </motion.div>
//   );
// }



'use client';

import { motion } from 'framer-motion';

export default function GalleryHeader() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } },
      }}
      className="
        relative
        mb-20 sm:mb-28 md:mb-32
        px-4
        text-center
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[220px] w-[220px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white/5
          blur-[120px]
        "
      />

      {/* Title */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="
          relative
          font-light
          tracking-wide
          text-white
          text-[clamp(2.2rem,6vw,3.4rem)]
        "
      >
        {/* Text with animated tracking */}
        <motion.span
          initial={{ letterSpacing: '0.35em', opacity: 0 }}
          animate={{ letterSpacing: '0.06em', opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="inline-block"
        >
          Our Memories
        </motion.span>

        {/* Sparkle emojis */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="ml-3 inline-flex gap-1 align-middle"
        >
          <motion.span
            animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✨
          </motion.span>
          <motion.span
            animate={{ y: [0, -4, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            📸
          </motion.span>
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="
          relative
          mx-auto
          mt-6
          max-w-md
          text-[clamp(0.9rem,2.5vw,1.05rem)]
          font-light
          tracking-wide
          text-white/60
        "
      >
        not captured, but <span className="italic text-white/80">felt</span>
      </motion.p>

      {/* Underline accent */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2, ease: 'easeOut' }}
        className="
          mx-auto
          mt-8
          block
          h-px
          w-20
          origin-center
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      {/* Subtle breathing effect */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="
          pointer-events-none
          absolute
          inset-0
          bg-white/5
          blur-[160px]
          rounded-full
        "
      />
    </motion.header>
  );
}
