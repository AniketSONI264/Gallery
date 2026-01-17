'use client';

import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/adminGuard';
import TextEditor from '@/components/admin/textEditor';
import { fetchTexts, updateText } from '@/lib/api';

export default function AdminTextsPage() {
  const [texts, setTexts] = useState<Record<string, string>>({});

  useEffect(() => {
    const load = async () => {
      const res = await fetchTexts();
      const map: Record<string, string> = {};
      res.texts.forEach((t: any) => {
        map[t.key] = t.value;
      });
      setTexts(map);
    };
    load();
  }, []);

  const save = async (key: string, value: string) => {
    await updateText(key, value);
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-black text-white p-8 space-y-10">
        <h1 className="text-2xl tracking-widest uppercase">
          Text Content
        </h1>

        <TextEditor
          label="Hero Headline"
          value={texts.hero_headline || ''}
          onSave={(v) => save('hero_headline', v)}
        />

        <TextEditor
          label="Hero Subtitle"
          value={texts.hero_subtitle || ''}
          onSave={(v) => save('hero_subtitle', v)}
        />

        <TextEditor
          label="Footer Text"
          value={texts.footer_text || ''}
          onSave={(v) => save('footer_text', v)}
        />

        <TextEditor
          label="Final Message Letter"
          value={texts.final_letter || ''}
          multiline
          onSave={(v) => save('final_letter', v)}
        />
      </div>
    </AdminGuard>
  );
}
