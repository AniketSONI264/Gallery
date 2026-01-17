'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function GalleryStack({ images }: { images: any[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative my-20 w-full">
      <div className="mx-auto flex max-w-6xl items-start gap-16 ">

        {/* LEFT STACK */}
        <div
          className="relative h-[260px] w-[280px] cursor-pointer"
          onClick={() => setExpanded((v) => !v)}
        >
          <AnimatePresence>
            {!expanded &&
              images.slice(0, 4).map((img, i) => (
                <motion.img
                  key={img._id}
                  src={img.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: i * 18,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="
                    absolute
                    h-[260px]
                    w-[180px]
                    rounded-2xl
                    object-cover
                    shadow-[0_30px_70px_rgba(0,0,0,0.55)]
                  "
                  style={{ zIndex: 10 - i }}
                />
              ))}
          </AnimatePresence>

          {/* subtle hint */}
          {!expanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-10 left-0 text-xs tracking-widest text-white/40 uppercase"
            >
              Tap to open
            </motion.span>
          )}
        </div>

        {/* RIGHT EXPANDABLE ROW */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="
                flex
                gap-6
                overflow-x-auto
                pb-6
                scrollbar-hide
              "
            >
              {images.map((img) => (
                <motion.img
                  key={img._id}
                  src={img.url}
                  className="
                    h-[220px]
                    w-[160px]
                    flex-shrink-0
                    rounded-xl
                    object-cover
                  "
                  whileHover={{ scale: 1.08, y: -8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
