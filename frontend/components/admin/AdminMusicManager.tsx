'use client';

import { useEffect, useRef, useState } from 'react';
import { updateMusic, fetchMusic } from '@/lib/api';

type Track = {
  url: string;
  title: string;
  enabled: boolean;
};

type Status = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export default function AdminMusicManager() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [mode, setMode] = useState<'order' | 'shuffle'>('order');
  const [status, setStatus] = useState<Status>({
    type: 'idle',
    message: '',
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* -------------------- FETCH EXISTING DATA -------------------- */
  useEffect(() => {
    fetchMusic().then((data) => {
      if (!data) return;
      setTracks(data.tracks || []);
      setMode(data.mode || 'order');
    });
  }, []);

  /* -------------------- AUTO CLEAR STATUS -------------------- */
  useEffect(() => {
    if (status.type === 'idle') return;

    const t = setTimeout(() => {
      setStatus({ type: 'idle', message: '' });
    }, 3000);

    return () => clearTimeout(t);
  }, [status]);

  /* -------------------- UPLOAD TRACK -------------------- */
  const uploadTrack = async (file: File) => {
    try {
      setStatus({ type: 'loading', message: 'Uploading track…' });

      const form = new FormData();
      form.append('file', file);
      form.append('upload_preset', 'music_uploads');

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dr10kpkc4/video/upload',
        {
          method: 'POST',
          body: form,
        }
      );

      if (!res.ok) {
        throw new Error('Cloudinary upload failed');
      }

      const data = await res.json();

      if (!data.secure_url) {
        throw new Error('No secure_url returned');
      }

      setTracks((prev) => [
        ...prev,
        {
          url: data.secure_url,
          title: file.name,
          enabled: true,
        },
      ]);

      setStatus({
        type: 'success',
        message: 'Track added to playlist',
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Upload failed. Check Cloudinary preset.',
      });
    }
  };

  /* -------------------- SAVE PLAYLIST -------------------- */
  const save = async () => {
    try {
      setStatus({ type: 'loading', message: 'Saving playlist…' });
      await updateMusic({ tracks, mode });

      setStatus({
        type: 'success',
        message: 'Playlist saved successfully',
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Failed to save playlist',
      });
    }
  };

  /* -------------------- PREVIEW -------------------- */
  const preview = (url: string) => {
    if (audioRef.current) audioRef.current.pause();
    audioRef.current = new Audio(url);
    audioRef.current.volume = 0.6;
    audioRef.current.play().catch(() => {});
  };

  return (
    <div className="space-y-8">

      {/* Status */}
      {status.type !== 'idle' && (
        <div
          className={`
            text-sm px-4 py-2 rounded-lg border
            ${
              status.type === 'loading'
                ? 'border-white/20 text-white/70'
                : status.type === 'success'
                ? 'border-pink-400/40 text-pink-400'
                : 'border-red-400/40 text-red-400'
            }
          `}
        >
          {status.message}
        </div>
      )}

      {/* Upload */}
      <div className="border border-white/10 rounded-xl p-6">
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) uploadTrack(file);
          }}
        />
      </div>

      {/* Playlist */}
      <div className="border border-white/10 rounded-xl p-6 space-y-4">
        {tracks.length === 0 && (
          <p className="text-xs text-white/40">
            No tracks added yet
          </p>
        )}

        {tracks.map((track, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/5 pb-3"
          >
            <div>
              <p className="text-sm">{track.title}</p>
              <button
                onClick={() => preview(track.url)}
                className="text-xs text-pink-400 hover:text-pink-300 transition"
              >
                ▶ Preview
              </button>
            </div>

            <input
              type="checkbox"
              checked={track.enabled}
              onChange={() =>
                setTracks((t) =>
                  t.map((x, idx) =>
                    idx === i ? { ...x, enabled: !x.enabled } : x
                  )
                )
              }
            />
          </div>
        ))}
      </div>

      {/* Mode */}
      <div className="flex gap-4">
        <button
          onClick={() => setMode('order')}
          className={`px-4 py-2 border rounded-lg transition ${
            mode === 'order'
              ? 'border-pink-400 text-pink-400'
              : 'border-white/20 text-white/60 hover:text-white'
          }`}
        >
          Play in Order
        </button>

        <button
          onClick={() => setMode('shuffle')}
          className={`px-4 py-2 border rounded-lg transition ${
            mode === 'shuffle'
              ? 'border-pink-400 text-pink-400'
              : 'border-white/20 text-white/60 hover:text-white'
          }`}
        >
          Shuffle
        </button>
      </div>

      {/* Save */}
      <button
        onClick={save}
        className="
          px-6 py-2 rounded-lg
          border border-white/20
          hover:bg-white/10
          transition
        "
      >
        Save Playlist
      </button>
    </div>
  );
}
