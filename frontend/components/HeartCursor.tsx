'use client';

import { useEffect } from 'react';

const HEARTS = ['💖','💗','💝','💕','💘'];

export default function HeartCursor() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const span = document.createElement('span');
      span.innerText = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      span.style.position = 'fixed';
      span.style.left = `${e.clientX}px`;
      span.style.top = `${e.clientY}px`;
      span.style.pointerEvents = 'none';
      span.style.fontSize = '14px';
      span.style.transition = 'all 1s ease-out';
      span.style.opacity = '1';

      document.body.appendChild(span);

      requestAnimationFrame(() => {
        span.style.transform = 'translateY(-20px) scale(1.3)';
        span.style.opacity = '0';
      });

      setTimeout(() => span.remove(), 1000);
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return null;
}



// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const HEARTS = ['💝', '💖', '💗', '💓', '💕', '💘'];

// type Heart = {
//   id: number;
//   x: number;
//   y: number;
//   icon: string;
// };

// export default function HeartCursorTrail() {
//   const [hearts, setHearts] = useState<Heart[]>([]);

//   useEffect(() => {
//     let id = 0;

//     const handleMove = (e: MouseEvent) => {
//       const heart = {
//         id: id++,
//         x: e.clientX,
//         y: e.clientY,
//         icon: HEARTS[Math.floor(Math.random() * HEARTS.length)],
//       };

//       setHearts((prev) => [...prev.slice(-18), heart]);
//     };

//     window.addEventListener('mousemove', handleMove);
//     return () => window.removeEventListener('mousemove', handleMove);
//   }, []);

//   return (
//     <div className="pointer-events-none fixed inset-0 z-[9999]">
//       <AnimatePresence>
//         {hearts.map((heart) => (
//           <motion.span
//             key={heart.id}
//             initial={{ opacity: 0, scale: 0.6, y: 0 }}
//             animate={{ opacity: 1, scale: 1.2, y: -24 }}
//             exit={{ opacity: 0, scale: 0.4, y: -40 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             style={{
//               position: 'absolute',
//               left: heart.x,
//               top: heart.y,
//             }}
//             className="text-pink-400 drop-shadow-[0_0_14px_rgba(255,105,180,0.8)]"
//           >
//             {heart.icon}
//           </motion.span>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }
