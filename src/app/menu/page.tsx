'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const menuData = [
  {
    category: 'Izgara & Et Yemekleri',
    emoji: '🥩',
    items: [
      'Kuzu Tandır',
      'Kuzu Şiş',
      'Tavuk Şiş',
      'Adana Kebap',
      'Urfa Kebap',
      'Köfte',
      'Tavuk Kanat',
      'Pirzola',
    ],
  },
  {
    category: 'Sulu Yemekler',
    emoji: '🍲',
    items: [
      'Kuru Fasulye',
      'Nohut',
      'Mercimek Çorbası',
      'Et Sote',
      'Türlü',
      'Kabak Yemeği',
      'Patlıcan Musakka',
      'Etli Taze Fasulye',
      'Sebze Yemeği',
    ],
  },
  {
    category: 'Pilavlar & Makarnalar',
    emoji: '🍚',
    items: [
      'Tereyağlı Pilav',
      'Domatesli Pilav',
      'Nohutlu Pilav',
      'Bulgur Pilavı',
      'Fırın Makarna',
      'Kıymalı Makarna',
    ],
  },
  {
    category: 'Mezeler & Salatalar',
    emoji: '🥗',
    items: [
      'Cacık',
      'Haydari',
      'Acı Ezme',
      'Patlıcan Salatası',
      'Semizotu',
      'Çoban Salatası',
      'Mevsim Salata',
      'Tabule',
      'Humus',
    ],
  },
  {
    category: 'Çorbalar',
    emoji: '🍜',
    items: [
      'Mercimek Çorbası',
      'Domates Çorbası',
      'Yayla Çorbası',
      'Ezogelin Çorbası',
      'İşkembe Çorbası',
      'Tarhana Çorbası',
    ],
  },
  {
    category: 'Börekler & Hamur İşleri',
    emoji: '🥙',
    items: [
      'Kol Böreği',
      'Su Böreği',
      'Ispanaklı Börek',
      'Kıymalı Börek',
      'Peynirli Gözleme',
      'Kıymalı Gözleme',
    ],
  },
  {
    category: 'Tatlılar',
    emoji: '🍮',
    items: [
      'Sütlaç',
      'Kazandibi',
      'Aşure',
      'Revani',
      'Şekerpare',
      'Baklava',
      'Kadayıf',
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? menuData.filter((c) => c.category === activeCategory)
    : menuData;

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-stone-900 flex flex-col font-sans">
      <Header />

      <main className="flex-1">

        {/* BAŞLIK */}
        <section className="bg-stone-900 text-white py-20 px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-3">2026–2027 Sezonu</p>
          <h1 className="text-5xl sm:text-6xl font-black leading-tight">
            Yemek <span className="text-[#B84C0C]">Menümüz</span>
          </h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg font-light">
            Tüm yemeklerimiz kilo bazında sipariş edilebilir. Fiyat bilgisi ve detaylı teklif için WhatsApp'tan ulaşın.
          </p>
          <a
            href="https://wa.me/905369305151"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Sipariş Bağlantısı Al
          </a>
        </section>

        {/* KATEGORİ FİLTRE */}
        <section className="sticky top-[80px] z-30 bg-[#F5F0E8] border-b border-stone-200 py-4 px-4 overflow-x-auto">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-max mx-auto">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === null
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              Tümü
            </button>
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.category
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.emoji} {cat.category}
              </button>
            ))}
          </div>
        </section>

        {/* MENÜ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((cat) => (
              <div key={cat.category} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-900 px-6 py-5 flex items-center gap-3">
                  <span className="text-3xl">{cat.emoji}</span>
                  <h2 className="text-lg font-black text-white">{cat.category}</h2>
                </div>
                <ul className="divide-y divide-stone-100">
                  {cat.items.map((item) => (
                    <li key={item} className="px-6 py-3.5 flex items-center justify-between group">
                      <span className="text-stone-700 font-medium group-hover:text-stone-900 transition-colors">{item}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-300 group-hover:text-[#B84C0C] transition-colors">Kiloyla</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ÖNEMLI NOT */}
          <div className="mt-16 bg-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center">
            <p className="text-stone-400 text-sm uppercase tracking-widest font-bold mb-3">Sipariş Nasıl Alınır?</p>
            <h3 className="text-3xl font-black mb-4">İstediğiniz Yemeği Seçin, <br />Biz Gerisini Halledelim.</h3>
            <p className="text-stone-400 max-w-xl mx-auto leading-relaxed mb-8">
              Menüden beğendiğiniz yemekleri seçin, kişi sayısını belirtin. WhatsApp üzerinden size özel fiyatlandırma ve sipariş bağlantısı gönderelim.
            </p>
            <a
              href="https://wa.me/905369305151"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp'tan İletişime Geç
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-10 text-sm text-stone-400">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-black text-stone-900 text-base tracking-tight">GURME KÜPÜ</span>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-stone-900 transition-colors">Ana Sayfa</Link>
            <Link href="/menu" className="hover:text-stone-900 transition-colors text-[#B84C0C] font-bold">Menü</Link>
            <Link href="/markalarimiz" className="hover:text-stone-900 transition-colors">Markalarımız</Link>
          </div>
          <p>© 2026 Gurme Küpü. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
