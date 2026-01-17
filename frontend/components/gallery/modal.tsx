'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryModal({
  image,
  index,
  total,
  onClose,
}: any) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.92 }}
          transition={{ duration: 0.6 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.url}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
          {image.caption && (
            <p className="mt-4 text-center text-white/60">
              {image.caption}
            </p>
          )}
        </motion.div>

        <span className="absolute top-6 right-8 text-xs text-white/40">
          {index + 1} / {total}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
