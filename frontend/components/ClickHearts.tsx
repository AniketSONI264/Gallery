'use client';

import { useEffect } from 'react';

const HEARTS = ['💖','💗','💝','💕','💘'];

export default function ClickHearts() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const span = document.createElement('span');
      span.innerText = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      span.style.position = 'fixed';
      span.style.left = `${e.clientX}px`;
      span.style.top = `${e.clientY}px`;
      span.style.pointerEvents = 'none';
      span.style.fontSize = '20px';
      span.style.transition = 'all 1.2s ease-out';
      span.style.opacity = '1';

      document.body.appendChild(span);

      requestAnimationFrame(() => {
        span.style.transform = 'translateY(-30px) scale(1.4)';
        span.style.opacity = '0';
      });

      setTimeout(() => span.remove(), 1200);
    };

    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  return null;
}
