'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {/* PUBLIC SITE ONLY */}
      {!isAdmin && <Navbar />}

      <main>{children}</main>

      {/* PUBLIC SITE ONLY */}
      {!isAdmin && <Footer />}
    </>
  );
}
