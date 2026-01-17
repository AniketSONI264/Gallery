// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function ImageCard({
// //   src,
// //   onDelete,
// // }: {
// //   src: string;
// //   onDelete: () => void;
// // }) {
// //   return (
// //     <motion.div
// //       layout
// //       initial={{ opacity: 0, scale: 0.96 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       exit={{ opacity: 0, scale: 0.96 }}
// //       whileHover={{ y: -6 }}
// //       className="group relative rounded-xl overflow-hidden bg-neutral-900"
// //     >
// //       <img
// //         src={src}
// //         className="h-[220px] w-full object-cover"
// //       />

// //       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

// //       <button
// //         onClick={onDelete}
// //         className="absolute top-3 right-3 text-xs opacity-0 group-hover:opacity-100 transition"
// //       >
// //         Delete
// //       </button>
// //     </motion.div>
// //   );
// // }

// 'use client';

// import { motion } from 'framer-motion';

// export default function ImageCard({
//   image,
//   onEdit,
//   onDelete,
// }: {
//   image: any;
//   onEdit: () => void;
//   onDelete: () => void;
// }) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       className="relative rounded-xl overflow-hidden bg-neutral-900"
//     >
//       <img
//         src={image.url}
//         className="h-[220px] w-full object-cover"
//       />

//       {/* overlay */}
//       <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition" />

//       {/* actions */}
//       <div className="absolute top-3 right-3 flex gap-2 opacity-0 hover:opacity-100 transition">
//         <button onClick={onEdit}>✎</button>
//         <button onClick={onDelete}>🗑</button>
//       </div>

//       {/* draft badge */}
//       {image.isDraft && (
//         <span className="absolute bottom-3 left-3 text-xs bg-black/70 px-2 py-1 rounded">
//           Draft
//         </span>
//       )}
//     </motion.div>
//   );
// }






'use client';

import { motion } from 'framer-motion';
import { Pencil, Trash2 } from 'lucide-react';

export default function ImageCard({
  image,
  onEdit,
  onDelete,
}: {
  image: any;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative rounded-xl overflow-hidden bg-neutral-900 group cursor-pointer"
    >
      {/* IMAGE */}
      <img
        src={image.url}
        alt={image.caption || 'image'}
        className="h-[220px] w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ACTION ICONS */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <Pencil size={14} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 transition"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* DRAFT BADGE */}
      {image.isDraft && (
        <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-black/70 px-2 py-1 rounded">
          Draft
        </span>
      )}
    </motion.div>
  );
}
