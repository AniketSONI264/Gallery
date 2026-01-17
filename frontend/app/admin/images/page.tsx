
// 'use client';

// import { useEffect, useState } from 'react';
// import AdminShell from '@/components/admin/AdminShell';
// import SectionTabs from '@/components/admin/SectionTabs';
// import UploadCard from '@/components/admin/UploadCard';
// import ImageCard from '@/components/admin/ImageCard';
// import { fetchImages, uploadImage, deleteImage } from '@/lib/api';

// export default function AdminImagesPage() {
//   const [section, setSection] = useState('gallery');
//   const [images, setImages] = useState<any[]>([]);

//   const load = () => {
//     fetchImages(section).then((d) => setImages(d.images || []));
//   };

//   useEffect(() => {
//     load();
//   }, [section]);

//   const handleUpload = async (file: File) => {
//     const fd = new FormData();
//     fd.append('image', file);
//     fd.append('section', section);
//     await uploadImage(fd);
//     load();
//   };

//   return (
//     <AdminShell>
//       <SectionTabs active={section} onChange={setSection} />

//       <UploadCard onUpload={handleUpload} />

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {images.map((img) => (
//           <ImageCard
//             key={img._id}
//             src={img.url}
//             onDelete={async () => {
//               await deleteImage(img._id);
//               load();
//             }}
//           />
//         ))}
//       </div>
//     </AdminShell>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import SectionTabs from '@/components/admin/SectionTabs';
import ImageEditorModal from '@/components/admin/ImageEditorModal';
import ImageCard from '@/components/admin/ImageCard';
import { fetchImages, uploadImage, deleteImage } from '@/lib/api';

export default function AdminImagesPage() {
  const [section, setSection] = useState('gallery');
  const [images, setImages] = useState([]);
  const [editorOpen, setEditorOpen] = useState(false);

  const load = () => {
    fetchImages(section).then((d) => setImages(d.images || []));
  };

  useEffect(() => {
    load();
  }, [section]);

  const handleSave = async ({ files, caption, isDraft }: any) => {
    for (const file of files) {
      const fd = new FormData();
      fd.append('image', file);
      fd.append('section', section);
      fd.append('caption', caption);
      fd.append('isDraft', String(isDraft));
      await uploadImage(fd);
    }
    setEditorOpen(false);
    load();
  };

  return (
    <>
      <SectionTabs active={section} onChange={setSection} />

      <button
        onClick={() => setEditorOpen(true)}
        className="mb-10 px-6 py-3 rounded-full bg-white text-black text-sm hover:bg-neutral-200 transition"
      >
        Add Images
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((img: any) => (
          <ImageCard
            key={img._id}
            image={img}
            onEdit={() => setEditorOpen(true)}
            onDelete={async () => {
              await deleteImage(img._id);
              load();
            }}
          />
        ))}
      </div>

      <ImageEditorModal
        open={editorOpen}
        onClose={() => setEditorOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
