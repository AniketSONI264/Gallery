// // // 'use client';

// // // import { motion } from 'framer-motion';

// // // export default function Reveal() {
// // //   return (
// // //     <motion.div
// // //       initial={{ clipPath: 'circle(0% at 50% 50%)' }}
// // //       animate={{ clipPath: 'circle(150% at 50% 50%)' }}
// // //       transition={{ duration: 2.2, ease: 'easeInOut' }}
// // //       className="fixed inset-0 z-50 bg-black flex items-center justify-center"
// // //     >
// // //       <motion.p
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 1.2, duration: 1 }}
// // //         className="text-white/70 tracking-widest uppercase text-sm"
// // //       >
// // //         Welcome
// // //       </motion.p>
// // //     </motion.div>
// // //   );
// // // }






// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function Reveal() {
// //   return (
// //     <motion.div
// //       initial={{
// //         clipPath: 'circle(0% at 50% 48%)',
// //         opacity: 1,
// //       }}
// //       animate={{
// //         clipPath: 'circle(160% at 50% 48%)',
// //         opacity: 0,
// //       }}
// //       transition={{
// //         clipPath: {
// //           duration: 2.4,
// //           ease: [0.4, 0, 0.2, 1], // cinematic easing
// //         },
// //         opacity: {
// //           delay: 2,
// //           duration: 0.8,
// //           ease: 'easeOut',
// //         },
// //       }}
// //       className="
// //         fixed inset-0 z-50
// //         bg-black
// //         flex items-center justify-center
// //         pointer-events-none
// //       "
// //     >
// //       <motion.p
// //         initial={{
// //           opacity: 0,
// //           y: 6,
// //           filter: 'blur(4px)',
// //         }}
// //         animate={{
// //           opacity: [0, 1, 0.85],
// //           y: [6, 0, 0],
// //           filter: ['blur(4px)', 'blur(0px)'],
// //         }}
// //         transition={{
// //           delay: 0.9,
// //           duration: 1.8,
// //           ease: 'easeInOut',
// //         }}
// //         className="
// //           text-white/70
// //           tracking-[0.35em]
// //           uppercase
// //           text-xs
// //           sm:text-sm
// //         "
// //       >
// //         Welcome
// //       </motion.p>
// //     </motion.div>
// //   );
// // }








// 'use client';

// import { motion } from 'framer-motion';

// export default function Reveal() {
//   return (
//     <motion.div
//       initial={{
//         clipPath: 'circle(0% at 50% 50%)',
//       }}
//       animate={{
//         clipPath: 'circle(160% at 50% 50%)',
//       }}
//       transition={{
//         duration: 2.6,
//         ease: [0.4, 0, 0.2, 1],
//       }}
//       className="
//         fixed inset-0 z-50
//         bg-black
//         flex flex-col
//         items-center justify-center
//         gap-6
//         text-center
//       "
//     >
//       {/* Loader */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 2.2,
//           repeat: Infinity,
//           ease: 'linear',
//         }}
//         className="
//           w-12 h-12
//           sm:w-14 sm:h-14
//           rounded-full
//           border border-white/30
//           border-t-white/80
//         "
//       />

//       {/* Welcome Text */}
//       <motion.p
//         initial={{
//           opacity: 0,
//           y: 10,
//           filter: 'blur(6px)',
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//           filter: 'blur(0px)',
//         }}
//         transition={{
//           delay: 0.8,
//           duration: 1.4,
//           ease: 'easeOut',
//         }}
//         className="
//           text-white
//           font-light
//           tracking-[0.4em]
//           uppercase
//           text-[clamp(0.75rem,2.5vw,1rem)]
//           sm:text-[clamp(0.9rem,2vw,1.1rem)]
//           opacity-90
//         "
//         style={{
//           textShadow: '0 0 18px rgba(255,255,255,0.25)',
//         }}
//       >
//         Welcome
//       </motion.p>
//     </motion.div>
//   );
// }







'use client';

import { motion } from 'framer-motion';
import { CelebrationBumper } from './CelebrationBumper';

export default function Reveal() {
  return (
    <motion.div
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(160% at 50% 50%)', opacity: 0 }}
      transition={{
        clipPath: {
          duration: 2.6,
          ease: [0.4, 0, 0.2, 1],
        },
        opacity: {
          delay: 2.4,
          duration: 0.8,
          ease: 'easeOut',
        },
      }}
      className="
        fixed inset-0 z-50
        bg-black
        flex flex-col
        items-center justify-center
        gap-6
        text-center
        overflow-hidden
      "
    >
      {/* Celebration */}
      <CelebrationBumper />

      {/* Loader */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="
          w-12 h-12
          sm:w-14 sm:h-14
          rounded-full
          border border-white/30
          border-t-white/80
        "
      />

      {/* Welcome Text */}
      <motion.p
        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          delay: 0.5,
          duration: 1.4,
          ease: 'easeOut',
        }}
        className="
          text-white
          font-light
          tracking-[0.45em]
          uppercase
          text-[clamp(0.8rem,3vw,1.1rem)]
          opacity-90
        "
        style={{
          textShadow: '0 0 20px rgba(255,180,200,0.35)',
        }}
      >
        Welcome
      </motion.p>
    </motion.div>
  );
}
