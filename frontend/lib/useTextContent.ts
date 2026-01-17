'use client';

import { useEffect, useState } from 'react';

export function useTextContent() {
  const [texts, setTexts] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/texts`)
      .then(res => res.json())
      .then(data => {
        const map: Record<string, string> = {};
        data.texts.forEach((t: any) => {
          map[t.key] = t.value;
        });
        setTexts(map);
      })
      .catch(() => {});
  }, []);
  
const isPreview = typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).get('preview');

fetch(`/texts${isPreview ? '?preview=true' : ''}`)


  return texts;
}
