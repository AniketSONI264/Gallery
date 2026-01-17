'use client';

import { motion } from 'framer-motion';

export default function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative px-6 py-24 md:py-32 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mx-auto max-w-6xl"
      >
        {(title || subtitle) && (
          <div className="mb-20 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-white/60 text-sm md:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </motion.div>
    </section>
  );
}
