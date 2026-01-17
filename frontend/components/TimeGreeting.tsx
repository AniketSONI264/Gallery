'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TimeGreeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 5) setGreeting('Still awake, Bebooo? 🌌');
    else if (hour < 12) setGreeting('Good morning, Bebooo ☀️');
    else if (hour < 17) setGreeting('Good afternoon, Bebooo 🌤️');
    else if (hour < 21) setGreeting('Good evening, Bebooo 🌙');
    else setGreeting('Good night, Bebooo ✨');
  }, []);

  if (!greeting) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-sm tracking-wide text-white/60 text-center"
    >
      {greeting}
    </motion.p>
  );
}
