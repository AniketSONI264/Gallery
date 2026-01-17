'use client';

import AdminGuard from '@/components/admin/adminGuard';
import AdminMusicManager from '@/components/admin/AdminMusicManager';

export default function AdminMusicPage() {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-900 text-white px-8 py-10">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-light tracking-widest uppercase mb-2">
            Music Playlist
          </h1>

          <p className="text-white/50 mb-10 text-sm">
            Control the mood of the experience.
          </p>

          <AdminMusicManager />

        </div>
      </div>
    </AdminGuard>
  );
}
