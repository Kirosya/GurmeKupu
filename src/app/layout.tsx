import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gurme Küpü - Catering & Kiloyla Özel Ev Lezzetleri',
  description: 'Zeytinyağlılar, gurme ana yemekler, börek ve tatlılar. Kiloyla veya gramla hızlı sipariş paneli.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className="bg-stone-950 text-stone-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
