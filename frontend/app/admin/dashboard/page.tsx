'use client';

import AdminGuard from '@/components/admin/adminGuard';
import Link from 'next/link';
import { removeToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push('/admin/login');
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-black text-white p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl tracking-widest uppercase">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="text-sm tracking-wide text-red-400 hover:text-red-300 transition"
          >
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/images"
            className="
              border border-white/10
              p-6
              transition
              hover:bg-white/5
              hover:border-white/20
            "
          >
            <h2 className="text-sm tracking-widest uppercase mb-2">
              Manage Images
            </h2>
            <p className="text-white/50 text-xs leading-relaxed">
              Upload, organize, and delete images across hero, gallery,
              timeline, footer, and surprise sections.
            </p>
          </Link>
          <Link
  href="/admin/music"
  className="
    border border-white/10
    p-6
    transition
    hover:bg-white/5
    hover:border-white/20
  "
>
  <h2 className="text-sm tracking-widest uppercase mb-2">
    Manage Music
  </h2>
  <p className="text-white/50 text-xs leading-relaxed">
    Upload and control background music for the site.
  </p>
</Link>

        </div>
      </div>
    </AdminGuard>
  );
}
