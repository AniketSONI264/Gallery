'use client';

import { useEffect } from 'react';

const icons = [
  '/favicon-heart-1.svg',
  '/favicon-heart-2.svg',
  '/favicon-heart-3.svg',
];

export default function FaviconAnimator() {
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const link =
        document.querySelector<HTMLLinkElement>("link[rel='icon']") ||
        document.createElement('link');

      link.rel = 'icon';
      link.href = icons[i % icons.length];
      document.head.appendChild(link);

      i++;
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return null;
}
