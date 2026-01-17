
// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { fetchImages } from '@/lib/api';

// type ImageType = {
//   _id: string;
//   url: string;
//   caption?: string;
// };

// const DEFAULT_SURPRISE_IMAGES: ImageType[] = [
//   {
//     _id: 'default-s-1',
//     url: '/defaults/surprise-1.jpg',
//     caption: 'You mean the world to me',
//   },
// ];

// const titleVariants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//     letterSpacing: "0.25em",
//     filter: "blur(6px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     letterSpacing: "0.08em",
//     filter: "blur(0px)",
//     transition: {
//       duration: 1.8,
//       ease: "easeOut",
//     },
//   },
// };

// const subtitleVariants = {
//   hidden: {
//     opacity: 0,
//     y: 12,
//     filter: "blur(4px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       delay: 0.9,
//       duration: 1.4,
//       ease: "easeOut",
//     },
//   },
// };


// export default function SurpriseGallery() {
//   const [images, setImages] = useState<ImageType[]>([]);

//   useEffect(() => {
//     fetchImages('surprise', true)
//       .then((data) => {
//         if (data.images?.length) {
//           setImages(data.images);
//         } else {
//           setImages(DEFAULT_SURPRISE_IMAGES);
//         }
//       })
//       .catch(() => setImages(DEFAULT_SURPRISE_IMAGES));
//   }, []);

//   return (
//     <section className="relative bg-black px-6 py-24 text-white">
//       {/* soft vignette */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

//       <motion.h1
//   variants={titleVariants}
//   initial="hidden"
//   animate="visible"
//   className="
//     mb-20
//     text-center
//     font-light
//     tracking-wide
//     text-white
//     text-[clamp(1.6rem,4vw,2.25rem)]
//     md:text-[clamp(2rem,3vw,2.5rem)]
//   "
//   style={{
//     textShadow: "0 0 24px rgba(255,180,200,0.25)",
//   }}
// >
//   {/* Main Title */}
//   <motion.span
//     animate={{ opacity: [0.95, 1, 0.95] }}
//     transition={{
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//     className="inline-block"
//   >
//     Just for You
//   </motion.span>

//   {/* Subtitle */}
//   <motion.span
//     variants={subtitleVariants}
//     initial="hidden"
//     animate="visible"
//     className="
//       block
//       mt-4
//       text-[clamp(0.75rem,2.5vw,0.95rem)]
//       text-white/55
//       tracking-[0.18em]
//       uppercase
//     "
//   >
//     moments I wanted you to feel, not just see
//   </motion.span>
// </motion.h1>


//       {/* gallery */}
//       <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {images.map((img, index) => (
//           <motion.div
//             key={img._id}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 1,
//               delay: index * 0.12,
//               ease: 'easeOut',
//             }}
//             whileHover="hover"
//             className="group relative"
//           >
//             {/* card */}
//             <motion.div
//               variants={{
//                 hover: { y: -8 },
//               }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-3xl
//                 bg-neutral-900
//                 shadow-[0_30px_80px_rgba(0,0,0,0.6)]
//               "
//             >
//               {/* image */}
//               <motion.img
//                 src={img.url}
//                 alt={img.caption || 'memory'}
//                 className="h-[420px] w-full object-cover"
//                 variants={{
//                   hover: { scale: 1.05 },
//                 }}
//                 transition={{ duration: 1.2, ease: 'easeOut' }}
//               />

//               {/* gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//               {/* caption reveal */}
//               {img.caption && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileHover={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: 'easeOut' }}
//                   className="
//                     absolute
//                     bottom-6
//                     left-6
//                     right-6
//                     text-center
//                     text-sm
//                     text-white/80
//                     tracking-wide
//                   "
//                 >
//                   {img.caption}
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchImages } from '@/lib/api';

type ImageType = {
  _id: string;
  url: string;
  caption?: string;
};

const DEFAULT_SURPRISE_IMAGES: ImageType[] = [
  {
    _id: 'default-s-1',
    url: '/defaults/surprise-1.jpg',
    caption: 'You mean the world to me',
  },
];

export default function SurpriseGallery() {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    fetchImages('surprise', true)
      .then((data) => {
        setImages(data.images?.length ? data.images : DEFAULT_SURPRISE_IMAGES);
      })
      .catch(() => setImages(DEFAULT_SURPRISE_IMAGES));
  }, []);

  return (
    <section className="relative bg-black px-6 py-24 text-white overflow-hidden">
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

      {/* ================= TITLE ================= */}
      <motion.h1
        initial={{ opacity: 0, y: 28, filter: 'blur(6px)', letterSpacing: '0.25em' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', letterSpacing: '0.08em' }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="
          mb-20
          text-center
          font-light
          text-white
          text-[clamp(1.6rem,4vw,2.25rem)]
          md:text-[clamp(2rem,3vw,2.5rem)]
        "
        style={{
          textShadow: '0 0 24px rgba(255,180,200,0.25)',
        }}
      >
        <motion.span
          animate={{ opacity: [0.95, 1, 0.95] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block"
        >
          Just for You
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.9, duration: 1.4, ease: 'easeOut' }}
          className="
            block
            mt-4
            text-[clamp(0.75rem,2.5vw,0.95rem)]
            text-white/55
            tracking-[0.18em]
            uppercase
          "
        >
          moments I wanted you to feel, not just see
        </motion.span>
      </motion.h1>

      {/* ================= GALLERY ================= */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {images.map((img, index) => (
          <motion.div
            key={img._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.12, ease: 'easeOut' }}
            className="group relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                bg-neutral-900
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              "
            >
              <motion.img
                src={img.url}
                alt={img.caption || 'memory'}
                className="h-[420px] w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {img.caption && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    text-center
                    text-sm
                    text-white/80
                    tracking-wide
                  "
                >
                  {img.caption}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
