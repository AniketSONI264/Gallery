'use client';

import { motion } from 'framer-motion';

type ImageType = {
  _id: string;
  url: string;
  caption?: string;
};

export default function GalleryGrid({
  images,
  onSelect,
}: {
  images: ImageType[];
  onSelect: (index: number) => void;
}) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
      {images.map((img, index) => (
        <motion.div
          key={img._id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.05 }}
          whileHover={{ y: -6 }}
          className="relative cursor-pointer overflow-hidden rounded-3xl bg-neutral-900"
          onClick={() => onSelect(index)}
        >
          <div className="aspect-[4/5] w-full overflow-hidden">
            <motion.img
              src={img.url}
              alt={img.caption || 'memory'}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              loading="lazy"
            />
          </div>

          {/* soft hover veil */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
        </motion.div>
      ))}
    </div>
  );
}
