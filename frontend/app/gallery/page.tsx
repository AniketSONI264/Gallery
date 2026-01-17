// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { fetchImages } from '@/lib/api';
// // import ImageShimmer from '@/components/ui/ImageShimmer';

// // /* -------------------- TYPES -------------------- */
// // type ImageType = {
// //   _id: string;
// //   url: string;
// //   caption?: string;
// // };

// // /* -------------------- DEFAULT FALLBACK -------------------- */
// // const DEFAULT_GALLERY_IMAGES: ImageType[] = [
// //   {
// //     _id: 'default-g-1',
// //     url: 'https://res.cloudinary.com/dr10kpkc4/image/upload/v1767286489/romantic-album/w2lila8fhtn1ucdwhavk.jpg',
// //     caption: 'A beautiful beginning',
// //   },
// //   {
// //     _id: 'default-g-2',
// //     url: 'https://res.cloudinary.com/dr10kpkc4/image/upload/v1767292273/romantic-album/tu3qka7f92i53chsmay1.jpg',
// //     caption: 'Moments we cherish',
// //   },
// //   {
// //     _id: 'default-g-3',
// //     url: 'https://res.cloudinary.com/dr10kpkc4/image/upload/v1767292295/romantic-album/d0wvizp6ui8jw8egbcbs.jpg',
// //     caption: 'Forever memories',
// //   },
// // ];

// // export default function GalleryPage() {
// //   const [images, setImages] = useState<ImageType[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeIndex, setActiveIndex] = useState<number | null>(null);

// //   const activeImage = activeIndex !== null ? images[activeIndex] : null;

// //   /* -------------------- FETCH -------------------- */
// //   useEffect(() => {
// //     fetchImages('gallery', false)
// //       .then((data) => {
// //         if (data.images?.length) {
// //           setImages(data.images);
// //         } else {
// //           setImages(DEFAULT_GALLERY_IMAGES);
// //         }
// //       })
// //       .catch(() => setImages(DEFAULT_GALLERY_IMAGES))
// //       .finally(() => setLoading(false));
// //   }, []);

// //   /* -------------------- LOCK SCROLL -------------------- */
// //   useEffect(() => {
// //     document.body.style.overflow = activeIndex !== null ? 'hidden' : '';
// //     return () => {
// //       document.body.style.overflow = '';
// //     };
// //   }, [activeIndex]);

// //   /* -------------------- KEYBOARD NAV -------------------- */
// //   useEffect(() => {
// //     if (activeIndex === null) return;

// //     const handleKey = (e: KeyboardEvent) => {
// //       if (e.key === 'Escape') setActiveIndex(null);
// //       if (e.key === 'ArrowRight' && activeIndex < images.length - 1)
// //         setActiveIndex(activeIndex + 1);
// //       if (e.key === 'ArrowLeft' && activeIndex > 0)
// //         setActiveIndex(activeIndex - 1);
// //     };

// //     window.addEventListener('keydown', handleKey);
// //     return () => window.removeEventListener('keydown', handleKey);
// //   }, [activeIndex, images.length]);

// //   return (
// //     <div className="min-h-screen bg-black px-6 py-16">
// //       <motion.h1
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //         className="mb-14 text-center text-4xl font-light text-white"
// //       >
// //         Our Memories
// //       </motion.h1>

// //       {/* Loading */}
// //       {loading && (
// //         <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
// //           {Array.from({ length: 6 }).map((_, i) => (
// //             <ImageShimmer key={i} />
// //           ))}
// //         </div>
// //       )}

// //       {/* Grid */}
// //       {!loading && (
// //         <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
// //           {images.map((img, index) => (
// //             <motion.div
// //               key={img._id}
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.05 }}
// //               whileHover={{ scale: 1.02 }}
// //               className="relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900"
// //               onClick={() => setActiveIndex(index)}
// //             >
// //               <div className="aspect-[4/5] w-full overflow-hidden">
// //                 <img
// //                   src={img.url}
// //                   alt={img.caption || 'memory'}
// //                   className="h-full w-full object-cover object-center"
// //                   loading="lazy"
// //                 />
// //               </div>

// //               <div className="pointer-events-none absolute inset-0 bg-black/0 transition hover:bg-black/20" />
// //             </motion.div>
// //           ))}
// //         </div>
// //       )}

// //       {/* Modal */}
// //       <AnimatePresence>
// //         {activeImage && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
// //             onClick={() => setActiveIndex(null)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.95, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.95, opacity: 0 }}
// //               transition={{ duration: 0.5, ease: 'easeOut' }}
// //               className="relative"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <img
// //                 src={activeImage.url}
// //                 className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
// //               />

// //               {activeImage.caption && (
// //                 <p className="mt-4 text-center text-sm text-white/60">
// //                   {activeImage.caption}
// //                 </p>
// //               )}
// //             </motion.div>

// //             <p className="absolute top-6 right-8 text-xs text-white/40">
// //               {activeIndex + 1} / {images.length}
// //             </p>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }




// 'use client';

// import { useEffect, useState } from 'react';
// import { fetchImages } from '@/lib/api';
// import GalleryHeader from '@/components/gallery/header';
// import GalleryGrid from '@/components/gallery/grid';
// import GalleryModal from '@/components/gallery/modal';
// import GalleryStack from '@/components/gallery/stack';

// export default function GalleryPage() {
//   const [images, setImages] = useState<any[]>([]);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   useEffect(() => {
//     fetchImages('gallery', false).then((data) => {
//       setImages(data.images || []);
//     });
//   }, []);

//   return (
//     <section className="min-h-screen bg-black px-6 py-20 text-white">
//       <GalleryHeader />

//       {/* cinematic stack */}
//       {images.length > 3 && <GalleryStack images={images.slice(0, 6)} />}

//       {/* main grid */}
//       <GalleryGrid images={images} onSelect={setActiveIndex} />

//       {/* modal */}
//       <GalleryModal
//         image={activeIndex !== null ? images[activeIndex] : null}
//         index={activeIndex}
//         total={images.length}
//         onClose={() => setActiveIndex(null)}
//       />
//     </section>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { fetchImages } from '@/lib/api';
import { shuffleArray } from '@/lib/shuffle';

import GalleryHeader from '@/components/gallery/header';
import GalleryGrid from '@/components/gallery/grid';
import GalleryModal from '@/components/gallery/modal';
import GalleryStack from '@/components/gallery/stack';

const PER_PAGE = 9;

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchImages('gallery', false).then((data) => {
      const shuffled = shuffleArray(data.images || []);
      setImages(shuffled);
      console.log('Fetching from:', process.env.NEXT_PUBLIC_API_URL);
    });
  }, []);

  const start = page * PER_PAGE;
  const currentImages = images.slice(start, start + PER_PAGE);

  return (
    <section className="relative min-h-screen bg-black px-6 py-20 text-white overflow-hidden">
      {/* grain */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] bg-[url('/grain.png')] mix-blend-overlay z-0" />

      <GalleryHeader />

      {/* STACK FEATURE */}
      {images.length > 4 && (
        <GalleryStack images={images.slice(0, 6)} />
      )}

      {/* GRID */}
      <GalleryGrid
        images={currentImages}
        onSelect={(i) => setActiveIndex(start + i)}
      />

      {/* PAGINATION */}
      <div className="mt-20 flex justify-center gap-8 text-sm tracking-widest">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
          className="text-white/40 hover:text-white transition disabled:opacity-20"
        >
          ← PREV
        </button>

        <button
          disabled={start + PER_PAGE >= images.length}
          onClick={() => setPage((p) => p + 1)}
          className="text-white/40 hover:text-white transition disabled:opacity-20"
        >
          NEXT →
        </button>
      </div>

      {/* MODAL */}
      <GalleryModal
        image={activeIndex !== null ? images[activeIndex] : null}
        index={activeIndex}
        total={images.length}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}
