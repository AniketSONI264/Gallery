'use client';

import { motion } from 'framer-motion';

const sections = ['hero', 'gallery', 'timeline', 'footer', 'surprise'];

export default function SectionTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onChange(section)}
          className="relative px-4 py-2 text-xs uppercase tracking-widest"
        >
          {active === section && (
            <motion.span
              layoutId="tab"
              className="absolute inset-0 rounded-full bg-white/10"
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
          )}
          <span className="relative z-10">{section}</span>
        </button>
      ))}
    </div>
  );
}
