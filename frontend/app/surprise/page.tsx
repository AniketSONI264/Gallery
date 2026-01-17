

// 'use client';

// import { useState } from 'react';
// import LockScreen from '@/components/surprise/Lock';
// import Reveal from '@/components/surprise/Reveal';
// import SurpriseGallery from '@/components/surprise/SurpriseGallery';

// export default function SurprisePage() {
//   const [unlocked, setUnlocked] = useState(false);
//   const [revealing, setRevealing] = useState(false);

//   const handleUnlock = () => {
//     setRevealing(true);
//     setTimeout(() => {
//       setRevealing(false);
//       setUnlocked(true);
//     }, 2200);
//   };

//   if (!unlocked) {
//     return (
//       <>
//         <LockScreen onUnlock={handleUnlock} />
//         {revealing && <Reveal />}
//       </>
//     );
//   }

//   return <SurpriseGallery />;
// }







'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LockScreen from '@/components/surprise/Lock';
import Reveal from '@/components/surprise/Reveal';
import SurpriseGallery from '@/components/surprise/SurpriseGallery';

export default function SurprisePage() {
  const [stage, setStage] = useState<'locked' | 'revealing' | 'unlocked'>(
    'locked'
  );

  const handleUnlock = () => {
    setStage('revealing');

    setTimeout(() => {
      setStage('unlocked');
    }, 2400);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="
  pointer-events-none fixed inset-0
  bg-black/40
  animate-[pulse_6s_ease-in-out_infinite]
  mix-blend-multiply
" />

      {/* Ambient background layer (matches Hero language) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <AnimatePresence mode="wait">
        {stage === 'locked' && (
          <motion.div
            key="locked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <LockScreen onUnlock={handleUnlock} />
          </motion.div>
        )}

        {stage === 'revealing' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-20"
          >
            <Reveal />
          </motion.div>
        )}

        {stage === 'unlocked' && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative z-10"
          >
            <SurpriseGallery />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
