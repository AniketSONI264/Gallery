'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ImageEditorModal({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (data: {
    files: File[];
    caption: string;
    isDraft: boolean;
  }) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [caption, setCaption] = useState('');
  const [isDraft, setIsDraft] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full max-w-2xl rounded-2xl bg-neutral-900 p-6 text-white"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm tracking-widest uppercase">
                Image Editor
              </h2>
              <button onClick={onClose} className="text-white/50 hover:text-white">
                ✕
              </button>
            </div>

            {/* Upload */}
            <label className="block border border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:bg-white/5 transition">
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(e) =>
                  setFiles(e.target.files ? Array.from(e.target.files) : [])
                }
              />
              <p className="text-sm text-white/70">
                Click to upload images (bulk supported)
              </p>
            </label>

            {/* Preview */}
            {files.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {files.map((file, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(file)}
                    className="h-24 w-full object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            {/* Caption */}
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption / memory text"
              className="mt-4 w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm resize-none"
            />

            {/* Draft toggle */}
            <label className="mt-4 flex items-center gap-3 text-sm text-white/60">
              <input
                type="checkbox"
                checked={isDraft}
                onChange={() => setIsDraft(!isDraft)}
              />
              Save as draft
            </label>

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm text-white/50 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  onSave({ files, caption, isDraft })
                }
                className="px-6 py-2 rounded-full bg-white text-black text-sm hover:bg-neutral-200 transition"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
