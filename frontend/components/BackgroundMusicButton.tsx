'use client';

import { useEffect, useRef, useState } from 'react';
import { fetchMusic } from '@/lib/api';

export default function BackgroundMusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [musicUrl, setMusicUrl] = useState<string | null>(null);

  /* -------------------- FETCH MUSIC -------------------- */
  useEffect(() => {
    fetchMusic().then((data) => {
      if (!data || !data.url || data.enabled === false) return;
      setMusicUrl(data.url);
    });

    // unlock audio on first user interaction
    const unlock = () => {
      unlockedRef.current = true;
      document.removeEventListener('click', unlock);
    };
    document.addEventListener('click', unlock);

    return () => document.removeEventListener('click', unlock);
  }, []);

  /* -------------------- INIT AUDIO -------------------- */
  useEffect(() => {
    if (!musicUrl) return;

    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [musicUrl]);

  /* -------------------- TOGGLE -------------------- */
  const togglePlay = () => {
    if (!audioRef.current || !unlockedRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  if (!musicUrl) return null;

  return (
    <button
      onClick={togglePlay}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-black/70 backdrop-blur
        border border-white/20
        flex items-center justify-center
        text-white text-xl
        hover:bg-white/10
        transition
      "
      aria-label="Toggle background music"
    >
      {playing ? '⏸' : '▶️'}
    </button>
  );
}
