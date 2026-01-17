'use client';

import { useState } from 'react';
import { updateMusic } from '@/lib/api';

export default function AdminMusicUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert('Select a music file');

    setLoading(true);

    try {
      // 1️⃣ Upload to Cloudinary
      const formData = new FormData();
formData.append('file', file);
formData.append('upload_preset', 'music_uploads');

const res = await fetch(
  'https://api.cloudinary.com/v1_1/dr10kpkc4/video/upload',
  {
    method: 'POST',
    body: formData,
  }
);

const data = await res.json();


      // 2️⃣ Save URL to backend
      await updateMusic({
        url: data.secure_url,
        enabled,
      });

      alert('Music uploaded successfully 💝');
    } catch (err) {
      alert('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md space-y-6">
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full text-sm text-white"
      />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        Enable background music
      </label>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
          px-6 py-2
          border border-white/20
          hover:bg-white/10
          transition
          disabled:opacity-50
        "
      >
        {loading ? 'Uploading…' : 'Upload Music'}
      </button>
    </div>
  );
}
0