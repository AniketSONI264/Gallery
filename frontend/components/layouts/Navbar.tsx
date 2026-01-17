

// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const navItems = [
//   { label: '💗', href: '/' },
//   { label: 'Gallery', href: '/gallery' },
//   { label: 'Timeline', href: '/timeline' },
//   { label: 'Surprise', href: '/surprise' },
//   { label: 'Message', href: '/message' },
// ];

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
//       className="fixed top-0 left-0 z-50 w-full px-8 md:px-20 py-8"
//     >
//       <ul className="flex gap-12">
//         {navItems.map((item, index) => (
//           // <motion.li
//           //   key={item.label}
//           //   initial={{ opacity: 0, y: 10 }}
//           //   animate={{ opacity: 1, y: 0 }}
//           //   transition={{
//           //     delay: 2 + index * 0.15,
//           //     duration: 0.8,
//           //     ease: 'easeOut'
//           //   }}
//           // >
//           //   <Link
//           //     href={item.href}
//           //     className="group relative text-[13px] uppercase tracking-[0.3em] text-white/60 transition-colors duration-500 hover:text-white"
//           //   >
//           //     {item.label}

//           //     {/* underline */}
//           //     <span className="pointer-events-none absolute left-0 -bottom-2 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
//           //   </Link>
//           // </motion.li>
//           <motion.li
//   key={item.label}
//   initial={{ opacity: 0, y: 10 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{
//     delay: 2 + index * 0.15,
//     duration: 0.8,
//     ease: 'easeOut',
//   }}
// >
//   <Link
//     href={item.href}
//     className={`
//       group relative uppercase tracking-[0.3em]
//       transition-colors duration-500 hover:text-white
//       ${
//         index === 0
//           ? 'text-[30px] text-white font-light top-[-12]'
//           : 'text-[13px] text-white/60'
//       }
//     `}
//   >
//     {item.label}

//     {/* underline */}
//     <span
//       className={`
//         pointer-events-none absolute left-[-1] -bottom-2 h-[1px]
//         origin-left scale-x-0 transition-transform duration-500 ease-out
//         bg-white
//         ${index === 0 ? 'w-full' : 'w-full'}
//         group-hover:scale-x-100
//       `}
//     />
//   </Link>
// </motion.li>

//         ))}
//       </ul>
//     </motion.nav>
//   );
// }


'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';

const navItems = [
  { label: 'Gallery', href: '/gallery' },
  // { label: 'Timeline', href: '/timeline' },
  { label: 'Surprise', href: '/surprise' },
  { label: 'Message', href: '/message' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1.2, ease: 'easeOut' }}
        className="
          fixed top-0 left-0 z-50 w-full
          px-8 md:px-20 py-8
          hidden md:block
        "
      >
        <ul className="flex items-center gap-14">
          {/* Home / Heart */}
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.9 }}
          >
            <Link
              href="/"
              className="
                relative flex items-center gap-2
                text-white text-[28px] font-light
                hover:scale-[1.05] transition-transform duration-500
              "
            >
              <Heart className="w-6 h-6" strokeWidth={1.2} />
            </Link>
          </motion.li>

          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2 + index * 0.15,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <Link
                href={item.href}
                className="
                  group relative uppercase tracking-[0.3em]
                  text-[13px] text-white/60
                  transition-colors duration-500 hover:text-white
                "
              >
                {item.label}
                <span
                  className="
                    pointer-events-none absolute left-0 -bottom-2
                    h-[1px] w-full origin-left scale-x-0
                    bg-white transition-transform duration-500 ease-out
                    group-hover:scale-x-100
                  "
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* ================= MOBILE NAV ================= */}
      <div className="md:hidden fixed top-0 left-0 z-50 w-full px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white">
          <Heart className="w-6 h-6" strokeWidth={1.2} />
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="text-white"
          aria-label="Open Menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              fixed inset-0 z-[100]
              bg-black/95 backdrop-blur-md
              flex flex-col items-center justify-center
            "
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Nav Items */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex flex-col items-center gap-8"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-white text-lg tracking-[0.35em] uppercase
                      hover:text-white/80 transition-colors duration-300
                    "
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


