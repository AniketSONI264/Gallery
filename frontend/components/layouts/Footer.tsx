// // 'use client';

// // import { motion } from 'framer-motion';

// // const footerImages = [
// //   '/3.png',
// //   '/4.png',
// //   '/5.jpg',
// //   '/3.png',
// //   '/4.png',
// //   '/5.jpg',
// //   '/3.png',
// //   '/4.png',
// //   '/5.jpg',
// // ];

// // export default function Footer() {
// //   return (
// //     <footer className="relative bg-black overflow-hidden py-20">
      
// //       {/* BACKGROUND SLIDER */}
// //       <div className="absolute inset-0">
// //         {/* fade edges */}
// //         <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
// //         <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

// //         {/* image track */}
// //         <motion.div
// //           className="absolute top-1/2 flex -translate-y-1/2 gap-8"
// //           animate={{ x: ['0%', '-50%'] }}
// //           transition={{
// //             duration: 70,
// //             repeat: Infinity,
// //             ease: 'linear',
// //           }}
// //         >
// //           {[...footerImages, ...footerImages].map((src, index) => (
// //             <motion.div
// //               key={index}
// //               whileHover={{ scale: 1.05, opacity: 0.9 }}
// //               transition={{ duration: 0.4, ease: 'easeOut' }}
// //               className="
// //                 relative
// //                 h-[140px]
// //                 w-[220px]
// //                 flex-shrink-0
// //                 overflow-hidden
// //                 rounded-xl
// //                 bg-neutral-900
// //                 opacity-70
// //               "
// //             >
// //               <img
// //                 src={src}
// //                 alt="Memory"
// //                 className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
// //                 loading="lazy"
// //               />
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* dark overlay to keep text readable */}
// //         <div className="absolute inset-0 bg-black/60" />
// //       </div>

// //       {/* FOREGROUND CONTENT */}
// //       <div className="relative z-20 flex flex-col items-center justify-center text-center">
// //         {/* <motion.p
// //           initial={{ opacity: 0, y: 10 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1.4, ease: 'easeOut' }}
// //           viewport={{ once: true }}
// //           className="text-sm tracking-[0.35em] uppercase text-white/70"
// //         >
// //           Made with love, quietly
// //         </motion.p>

// //         <motion.div
// //           initial={{ scaleX: 0 }}
// //           whileInView={{ scaleX: 1 }}
// //           transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
// //           viewport={{ once: true }}
// //           className="mt-6 h-px w-16 origin-center bg-white/30"
// //         /> */}
// //         <motion.div
// //   className="relative inline-block"
// //   initial="hidden"
// //   whileInView="visible"
// //   viewport={{ once: true }}
// //   variants={{
// //     hidden: { opacity: 0, y: 12 },
// //     visible: { opacity: 1, y: 0 }
// //   }}
// //   transition={{ duration: 1.4, ease: 'easeOut' }}
// // >
// //   {/* TEXT */}
// //   <motion.p
// //     whileHover={{
// //       color: 'rgba(255,255,255,0.95)',
// //       letterSpacing: '0.45em',
// //       scale: 1.02
// //     }}
// //     transition={{
// //       duration: 0.6,
// //       ease: 'easeOut'
// //     }}
// //     className="
// //       relative z-10
// //       cursor-default
// //       text-sm
// //       uppercase
// //       tracking-[0.35em]
// //       text-white/70
// //       select-none
// //     "
// //   >
// //     Made with love, quietly
// //   </motion.p>

// //   {/* UNDERLINE / GLOW */}
// //   <motion.span
// //     initial={{ scaleX: 0, opacity: 0 }}
// //     whileHover={{ scaleX: 1, opacity: 1 }}
// //     transition={{ duration: 0.6, ease: 'easeOut' }}
// //     className="
// //       absolute
// //       left-1/2
// //       -bottom-3
// //       h-px
// //       w-20
// //       -translate-x-1/2
// //       origin-center
// //       bg-gradient-to-r
// //       from-transparent
// //       via-white/50
// //       to-transparent
// //     "
// //   />

// //   {/* SOFT GLOW (AMBIENT) */}
// //   <motion.span
// //     animate={{
// //       opacity: [0.2, 0.35, 0.2]
// //     }}
// //     transition={{
// //       duration: 4,
// //       repeat: Infinity,
// //       ease: 'easeInOut'
// //     }}
// //     className="
// //       absolute
// //       inset-0
// //       -z-10
// //       blur-xl
// //       bg-white/5
// //       rounded-full
// //     "
// //   />
// // </motion.div>

// //       </div>
// //     </footer>
// //   );
// // }




// 'use client';

// import { motion } from 'framer-motion';

// /**
//  * Replace freely — no API dependency
//  * Recommended image size:
//  * 1200 × 800 (3:2) or 1600 × 900 (16:9)
//  */
// const footerImages = [
//   '/3.png',
//   '/4.png',
//   '/5.jpg',
//   '/3.png',
//   '/4.png',
//   '/5.jpg',
// ];

// export default function Footer() {
//   return (
//     <footer className="relative isolate bg-black overflow-hidden">
//       {/* ================= BACKGROUND IMAGE FLOW ================= */}
//       <div className="absolute inset-0">
//         {/* edge fades */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

//         {/* image track */}
//         <motion.div
//           className="
//             absolute top-1/2 flex gap-6 sm:gap-10
//             -translate-y-1/2
//           "
//           animate={{ x: ['0%', '-50%'] }}
//           transition={{
//             duration: 80,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         >
//           {[...footerImages, ...footerImages].map((src, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.06, opacity: 0.85 }}
//               transition={{ duration: 0.5, ease: 'easeOut' }}
//               className="
//                 relative
//                 h-[110px] w-[170px]
//                 sm:h-[140px] sm:w-[220px]
//                 md:h-[160px] md:w-[260px]
//                 flex-shrink-0
//                 overflow-hidden
//                 rounded-2xl
//                 bg-neutral-900
//                 opacity-70
//               "
//             >
//               <img
//                 src={src}
//                 alt="Memory"
//                 className="
//                   h-full w-full
//                   object-contain
//                   transition-transform duration-700 ease-out
//                   hover:scale-110
//                 "
//                 loading="lazy"
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* dark readability veil */}
//         <div className="absolute inset-0 bg-black/65" />
//       </div>

//       {/* ================= FOREGROUND CONTENT ================= */}
//       <div
//         className="
//           relative z-20
//           flex min-h-[220px] sm:min-h-[260px]
//           items-center justify-center
//           px-6 text-center
//         "
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.4, ease: 'easeOut' }}
//           className="relative inline-block"
//         >
//           {/* TEXT */}
//           <motion.p
//             whileHover={{
//               letterSpacing: '0.45em',
//               scale: 1.03,
//               color: 'rgba(255,255,255,0.95)',
//             }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             className="
//               relative z-10
//               text-[11px] sm:text-sm
//               uppercase
//               tracking-[0.35em]
//               text-white/70
//               select-none
//             "
//           >
//             Made with love, quietly
//           </motion.p>

//           {/* underline */}
//           <motion.span
//             initial={{ scaleX: 0, opacity: 0 }}
//             whileHover={{ scaleX: 1, opacity: 1 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             className="
//               absolute left-1/2 -bottom-3
//               h-px w-20
//               -translate-x-1/2
//               bg-gradient-to-r
//               from-transparent via-white/50 to-transparent
//               origin-center
//             "
//           />

//           {/* ambient glow */}
//           <motion.span
//             animate={{ opacity: [0.15, 0.3, 0.15] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//             className="
//               absolute inset-0 -z-10
//               blur-xl
//               bg-white/5
//               rounded-full
//             "
//           />
//         </motion.div>
//       </div>
//     </footer>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fetchImages } from '@/lib/api';

type ImageType = {
  _id: string;
  url: string;
};

/* ---------- LOCAL FALLBACK (SAFE MODE) ---------- */
const FALLBACK_FOOTER_IMAGES: ImageType[] = [
  { _id: 'f1', url: '/3.png' },
  { _id: 'f2', url: '/4.png' },
  { _id: 'f3', url: '/5.jpg' },
];

export default function Footer() {
  const [images, setImages] = useState<ImageType[]>(FALLBACK_FOOTER_IMAGES);

  /* ---------- FETCH FROM ADMIN (FOOTER SECTION) ---------- */
  useEffect(() => {
    fetchImages('footer')
      .then((data) => {
        if (data?.images?.length) {
          setImages(data.images);
        }
      })
      .catch(() => {
        // silent fallback
      });
  }, []);

  return (
    <footer className="relative isolate bg-black overflow-hidden">
      {/* ================= BACKGROUND IMAGE FLOW ================= */}
      <div className="absolute inset-0">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        {/* image track */}
        <motion.div
          className="absolute top-1/2 flex gap-6 sm:gap-10 -translate-y-1/2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...images, ...images].map((img, index) => (
            <motion.div
              key={`${img._id}-${index}`}
              whileHover={{ scale: 1.06, opacity: 0.85 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="
                relative
                h-[110px] w-[170px]
                sm:h-[140px] sm:w-[220px]
                md:h-[160px] md:w-[260px]
                flex-shrink-0
                overflow-hidden
                rounded-2xl
                bg-neutral-900
                opacity-70
              "
            >
              <img
                src={img.url}
                alt="Memory"
                className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* dark veil */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* ================= FOREGROUND ================= */}
      <div className="relative z-20 flex min-h-[220px] sm:min-h-[260px] items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="relative inline-block"
        >
          <motion.p
            whileHover={{
              letterSpacing: '0.45em',
              scale: 1.03,
              color: 'rgba(255,255,255,0.95)',
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="
              relative z-10
              text-[11px] sm:text-sm
              uppercase
              tracking-[0.35em]
              text-white/70
              select-none
            "
          >
            Made with love, quietly
          </motion.p>

          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="
              absolute left-1/2 -bottom-3
              h-px w-20
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent via-white/50 to-transparent
              origin-center
            "
          />

          <motion.span
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 -z-10 blur-xl bg-white/5 rounded-full"
          />
        </motion.div>
      </div>
    </footer>
  );
}
