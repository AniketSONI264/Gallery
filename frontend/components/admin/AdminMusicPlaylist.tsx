'use client';

import { useState } from 'react';
import { updateMusic } from '@/lib/api';

export default function AdminMusicPlaylist() {
  const [tracks, setTracks] = useState<any[]>([]);
  const [mode, setMode] = useState<'order' | 'shuffle'>('order');

  const savePlaylist = async () => {
    await updateMusic({ tracks, mode });
    alert('Playlist updated 💝');
  };

  return (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-lg uppercase tracking-widest">
        Playlist Mode
      </h2>

      <select
        value={mode}
        onChange={(e) => setMode(e.target.value as any)}
        className="bg-black border border-white/20 p-2"
      >
        <option value="order">Play in order</option>
        <option value="shuffle">Shuffle</option>
      </select>

      {/* Track list will go here (next step) */}

      <button
        onClick={savePlaylist}
        className="border border-white/20 px-6 py-2 hover:bg-white/10"
      >
        Save Playlist
      </button>
    </div>
  );
}
