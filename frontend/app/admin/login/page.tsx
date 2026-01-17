'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { adminLogin } from '@/lib/api';
import { setToken } from '@/lib/auth';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!password) {
      setError('Password is required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await adminLogin(password);
      setToken(res.token);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Invalid admin password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-950 p-8 shadow-2xl"
      >
        <h1 className="text-center text-lg tracking-[0.35em] uppercase text-white mb-8">
          Admin Access
        </h1>

        {/* Password Field */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              rounded-lg
              bg-neutral-900
              border
              border-white/10
              px-4
              py-3
              text-sm
              text-white
              placeholder:text-white/30
              focus:outline-none
              focus:border-white/30
              transition
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          onClick={handleLogin}
          className="
            mt-6
            w-full
            rounded-lg
            bg-white
            py-3
            text-sm
            font-medium
            text-black
            transition
            hover:bg-neutral-200
            disabled:opacity-60
          "
        >
          {loading ? 'Authenticating…' : 'Enter Dashboard'}
        </motion.button>

        {/* Hint */}
        <p className="mt-6 text-center text-[11px] text-white/30 tracking-wide">
          Restricted access · Authorized only
        </p>
      </motion.div>
    </div>
  );
}
