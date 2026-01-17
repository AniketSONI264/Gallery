'use client';

import { motion } from 'framer-motion';

export default function UploadCard({
  onUpload,
}: {
  onUpload: (file: File) => void;
}) {
  return (
    <motion.label
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="
        block
        mb-12
        cursor-pointer
        rounded-2xl
        border border-dashed border-white/20
        p-10
        text-center
        bg-white/5
        hover:bg-white/10
        transition
      "
    >
      <input
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          if (e.target.files?.[0]) onUpload(e.target.files[0]);
        }}
      />

      <p className="text-sm tracking-wide text-white/70">
        Click to upload image
      </p>
      <p className="mt-2 text-xs text-white/40">
        JPG, PNG · Optimized automatically
      </p>
    </motion.label>
  );
}
