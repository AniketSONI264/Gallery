'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  onUnlock: () => void;
};

const VALID_PASSWORDS = ['1512', 'anidhi', 'pariket'];

export default function LockScreen({ onUnlock }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const normalized = password.trim().toLowerCase();

    if (VALID_PASSWORDS.includes(normalized)) {
      onUnlock();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 1200);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-full max-w-sm text-center"
      >
        <p className="mb-8 text-sm tracking-widest uppercase text-white/40">
          This part is just for you
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Enter the moment"
          className="
            w-full bg-transparent border-b border-white/30
            py-3 text-center text-lg
            focus:outline-none focus:border-white
            placeholder:text-white/30
          "
        />

        <motion.div
          animate={error ? { x: [-6, 6, -4, 4, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <button
            onClick={handleSubmit}
            className="
              rounded-full border border-white/30
              px-8 py-3 text-sm tracking-wide
              transition hover:bg-white hover:text-black
            "
          >
            Unlock
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
