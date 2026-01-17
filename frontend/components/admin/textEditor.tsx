'use client';

import { useState } from 'react';

type Props = {
  label: string;
  value: string;
  onSave: (value: string) => void;
  multiline?: boolean;
};

export default function TextEditor({
  label,
  value,
  onSave,
  multiline = false,
}: Props) {
  const [text, setText] = useState(value);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await onSave(text);
    setSaving(false);
  };

  return (
    <div className="border border-white/10 p-6 rounded-lg space-y-4">
      <h3 className="text-xs uppercase tracking-widest text-white/60">
        {label}
      </h3>

      {multiline ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white resize-none"
        />
      ) : (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white"
        />
      )}

      <button
        onClick={handleSave}
        disabled={saving}
        className="text-xs tracking-wide uppercase text-white/70 hover:text-white transition"
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
