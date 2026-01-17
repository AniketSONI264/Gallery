'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 14 });

export function CelebrationBumper() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 10 + 16;
        const left = Math.random() * 100;
        const delay = Math.random() * 1.0;

        return (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.6,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [-120, -220],
              scale: [0.6, 1, 0.8],
            }}
            transition={{
              duration: 3.2,
              delay,
              ease: 'easeOut',
            }}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: '10%',
              background:
                'radial-gradient(circle, rgba(255,180,200,0.9), rgba(255,180,200,0.4))',
              filter: 'blur(0.5px)',
            }}
          />
        );
      })}
    </div>
  );
}
