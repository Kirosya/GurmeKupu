'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-red-500 mb-2">Bir Hata Oluştu</h2>
      <p className="text-stone-400 text-xs mb-6 max-w-md">{error.message || 'Beklenmeyen bir istemci hatası meydana geldi.'}</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs"
        >
          Tekrar Dene
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 font-bold text-xs"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
