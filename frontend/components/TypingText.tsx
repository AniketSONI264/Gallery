'use client';

import { useEffect, useState } from 'react';

export default function TypingText({
  text,
  speed = 40,
}: {
  text: string;
  speed?: number;
}) {
  const [visible, setVisible] = useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setVisible((v) => v + text[i]);
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return <span>{visible}</span>;
}
