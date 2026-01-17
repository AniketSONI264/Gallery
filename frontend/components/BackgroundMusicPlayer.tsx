'use client';

import { useEffect, useRef, useState } from 'react';
import { fetchMusic } from '@/lib/api';

type Track = {
  url: string;
  title?: string;
};

export default function BackgroundMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);

  const [tracks, setTracks] = useState<Track[]>([]);
  const [mode, setMode] = useState<'order' | 'shuffle'>('order');
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  /* -------------------- INIT -------------------- */
  useEffect(() => {
    const savedVolume = localStorage.getItem('bg-volume');
    if (savedVolume) setVolume(Number(savedVolume));

    fetchMusic().then((data) => {
      if (!data?.tracks?.length) return;
      setTracks(data.tracks.filter((t: any) => t.enabled !== false));
      setMode(data.mode || 'order');
    });

    const unlock = () => {
      unlockedRef.current = true;
      document.removeEventListener('click', unlock);
    };
    document.addEventListener('click', unlock);

    return () => document.removeEventListener('click', unlock);
  }, []);

  /* -------------------- LOAD TRACK -------------------- */
  useEffect(() => {
    if (!tracks.length) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(tracks[index].url);
    audio.volume = volume;
    audioRef.current = audio;

    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };

    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.onended = nextTrack;

    if (playing && unlockedRef.current) {
      audio.play().catch(() => {});
    }
  }, [index, tracks]);

  /* -------------------- CONTROLS -------------------- */
  const togglePlay = () => {
    if (!audioRef.current || !unlockedRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const nextTrack = () => {
    if (!tracks.length) return;

    if (mode === 'shuffle') {
      setIndex(Math.floor(Math.random() * tracks.length));
    } else {
      setIndex((i) => (i + 1) % tracks.length);
    }
  };

  const toggleMode = () => {
    setMode((m) => (m === 'order' ? 'shuffle' : 'order'));
  };

  const changeVolume = (v: number) => {
    setVolume(v);
    localStorage.setItem('bg-volume', String(v));
    if (audioRef.current) audioRef.current.volume = v;
  };

  if (!tracks.length) return null;

  /* -------------------- UI -------------------- */
  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-md
        bg-black/70 backdrop-blur-xl
        border border-white/15
        rounded-2xl px-4 py-3
        text-white
        shadow-[0_0_40px_rgba(255,105,180,0.15)]
      "
    >
      {/* Track info */}
      <div className="text-xs text-white/70 truncate mb-2">
        {tracks[index].title || 'Now Playing'}
      </div>

      {/* Progress bar */}
      <div className="w-full h-[3px] bg-white/10 rounded overflow-hidden mb-3">
        <div
          className="h-full bg-pink-400 transition-all"
          style={{
            width: duration
              ? `${(currentTime / duration) * 100}%`
              : '0%',
          }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        {/* Shuffle / Order */}
        <button
          onClick={toggleMode}
          className={`text-lg ${
            mode === 'shuffle' ? 'text-pink-400' : 'text-white/50'
          }`}
          title="Shuffle / Order"
        >
          🔀
        </button>

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="
            text-2xl
            w-10 h-10 rounded-full
            flex items-center justify-center
            bg-white/10 hover:bg-white/20
            transition
          "
        >
          {playing ? '⏸' : '▶️'}
        </button>

        {/* Next */}
        <button
          onClick={nextTrack}
          className="text-lg text-white/70 hover:text-white"
          title="Next"
        >
          ⏭
        </button>

        {/* Volume */}
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
          className="w-20"
        />
      </div>

      {/* Waveform (subtle) */}
      {playing && (
        <div className="mt-2 flex gap-[2px] h-3">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-[2px] bg-pink-400/70 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
