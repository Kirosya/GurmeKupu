'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body className="bg-stone-950 text-stone-100 flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Sistem Hatası</h2>
        <p className="text-stone-400 text-xs mb-4">Uygulamada genel bir hata meydana geldi.</p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs"
        >
          Yeniden Yükle
        </button>
      </body>
    </html>
  );
}
