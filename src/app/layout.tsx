import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gurmekupu.com'), // Assuming the domain, next.js resolves absolute URLs
  title: {
    default: 'Gurme Küpü | Catering, Ev Yemekleri & Kiloyla Sipariş',
    template: '%s | Gurme Küpü'
  },
  description: 'İstanbul içi özel catering, ev yapımı zeytinyağlılar, gurme ana yemekler, taze börekler ve tatlılar. Kiloyla veya gramla hızlı sipariş paneli.',
  keywords: ['catering', 'ev yemekleri', 'zeytinyağlılar', 'kiloyla yemek', 'gurme sipariş', 'istanbul catering', 'toplu yemek siparişi', 'meze siparişi', 'tatlı siparişi'],
  authors: [{ name: 'Gurme Küpü' }],
  creator: 'Gurme Küpü',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://gurmekupu.com',
    siteName: 'Gurme Küpü',
    title: 'Gurme Küpü | Özel Ev Lezzetleri ve Catering',
    description: 'En özel davetleriniz ve günlük sofralarınız için el yapımı gurme lezzetler. Zeytinyağlı, meze ve ana yemek siparişi.',
    images: [
      {
        url: '/logo.png', // Fallback image for sharing
        width: 800,
        height: 600,
        alt: 'Gurme Küpü Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurme Küpü | Catering & Kiloyla Özel Ev Lezzetleri',
    description: 'Zeytinyağlılar, gurme ana yemekler, börek ve tatlılar. Kiloyla veya gramla hızlı sipariş paneli.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
