import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-4xl font-extrabold text-amber-500 mb-2">404 - Sayfa Bulunamadı</h2>
      <p className="text-stone-400 text-sm mb-6">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl gold-gradient-bg text-stone-950 font-bold text-xs shadow-lg"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
