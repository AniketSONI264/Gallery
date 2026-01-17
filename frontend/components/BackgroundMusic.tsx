"use client";

import { useEffect, useRef, useState } from "react";
import { fetchMusic } from "@/lib/api";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    fetchMusic().then((music) => {
      if (!music || !music.enabled) return;

      const audio = new Audio(music.url);
      audio.loop = true;
      audio.volume = 0.4;

      audioRef.current = audio;
    });
  }, []);

  // Browser unlock (MANDATORY)
  useEffect(() => {
    const unlock = () => {
      setAllowed(true);
      document.removeEventListener("click", unlock);
    };
    document.addEventListener("click", unlock);
    return () => document.removeEventListener("click", unlock);
  }, []);

  useEffect(() => {
    if (allowed && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [allowed]);

  return null;
}
