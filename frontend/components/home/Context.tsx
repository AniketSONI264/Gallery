

// 'use client';

// import { motion } from 'framer-motion';

// export default function ContextSection() {
//   return (
//     <section className="relative bg-black px-6 py-40 text-white">
//       {/* subtle divider */}
//       <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-white/10" />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: 'easeOut' }}
//         viewport={{ once: true }}
//         className="mx-auto max-w-3xl text-center"
//       >
//         <p className="text-2xl md:text-3xl font-light leading-relaxed tracking-wide text-white/70">
//           This space is not a gallery.
//           <br />
//           <span className="block mt-6">
//             It is a collection of pauses,
//             moments, and feelings
//             <br />
//             that quietly shaped us.
//           </span>
//         </p>
//       </motion.div>

//       {/* bottom divider */}
//       <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-white/10" />
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';

export default function ContextSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-32 sm:py-40 lg:py-48 text-white">
      
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* ================= TOP DIVIDER ================= */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="
          absolute top-0 left-1/2
          h-px w-20 sm:w-28
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent via-white/20 to-transparent
        "
      />

      {/* ================= CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <motion.p
          whileHover={{
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.9)',
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-[32px]
            font-light
            leading-relaxed
            tracking-wide
            text-white/70
          "
        >
          This space is not a gallery.
          <br />

          <span className="block mt-6 sm:mt-8">
            It is a collection of pauses,
            moments, and feelings
            <br className="hidden sm:block" />
            that quietly shaped us.
          </span>
        </motion.p>

        {/* subtle underline accent */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="
            mx-auto mt-10 block
            h-px w-16
            bg-gradient-to-r
            from-transparent via-white/30 to-transparent
            origin-center
          "
        />
      </motion.div>

      {/* ================= BOTTOM DIVIDER ================= */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="
          absolute bottom-0 left-1/2
          h-px w-20 sm:w-28
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent via-white/20 to-transparent
        "
      />
    </section>
  );
}
