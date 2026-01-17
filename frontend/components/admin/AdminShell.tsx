// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function AdminShell({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* subtle grain */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('/grain.png')]" />

//       {/* header */}
//       <header className="sticky top-0 z-40 backdrop-blur-md bg-black/60 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
//           <h1 className="text-xs tracking-[0.4em] uppercase text-white/60">
//             Admin Control Room
//           </h1>

//           <nav className="flex gap-6 text-xs tracking-widest uppercase">
//             <Link href="/admin/images" className="hover:text-white transition">
//               Images
//             </Link>
//             <Link href="/admin/texts" className="hover:text-white transition">
//               Text
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* content */}
//       <motion.main
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         className="max-w-7xl mx-auto px-5 py-10"
//       >
//         {children}
//       </motion.main>
//     </div>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* grain BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.04]" />

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        {/* HEADER */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xs tracking-[0.4em] uppercase text-white/60">
              Admin Control Room
            </h1>

            <nav className="flex gap-8 text-xs tracking-widest uppercase">
              <Link
                href="/admin/images"
                className="cursor-pointer hover:text-white transition"
              >
                Images
              </Link>
              <Link
                href="/admin/texts"
                className="cursor-pointer hover:text-white transition"
              >
                Texts
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-6 py-10"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
