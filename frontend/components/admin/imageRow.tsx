'use client';

import { motion } from 'framer-motion';

type Props = {
  image: any;
  onDelete: (id: string) => void;
};

export default function ImageCard({ image, onDelete }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-neutral-900 rounded-lg overflow-hidden"
    >
      <img
        src={image.url}
        alt={image.caption || 'image'}
        className="h-40 w-full object-cover object-top"
      />
    
      <div className="p-3 text-xs text-white/70 space-y-1">
        <p>Section: {image.section}</p>
        {image.caption && <p>Caption: {image.caption}</p>}
        {image.isSurprise && (
          <span className="text-pink-400">Surprise</span>
        )}
      </div>

      <button
        onClick={() => onDelete(image._id)}
        className="absolute top-2 right-2 bg-black/70 px-2 py-1 text-xs hover:bg-red-600 transition"
      >
        Delete
      </button>
    </motion.div>
  );
}
