'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { MessageCircle, Thermometer, Package, Clock } from 'lucide-react';

type StorageType = 'frozen' | 'fresh';

interface Product {
  name: string;
  description: string;
  storage: StorageType;
  boxWeight: string;
  unitWeight?: string;
  shelfLife: string;
  storageCondition: string;
  packageType?: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Gurme İçli Köfte',
    description: 'Geleneksel tarifle hazırlanan, dış kabuğu ince ve çıtır, iç harcı lezzetli içli köfte. Koli başına 250 adet.',
    storage: 'frozen',
    boxWeight: '10 kg / koli',
    shelfLife: '12 ay (-18°C)',
    storageCondition: 'Derin dondurucuda saklayınız. Çözülmüş ürünü tekrar dondurmayınız.',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Gurme Yaprak Sarma',
    description: 'Taze asma yaprağına sarılmış, özenle hazırlanmış geleneksel yaprak sarması. Taze tüketim önerilir.',
    storage: 'fresh',
    boxWeight: '10 kg / koli',
    unitWeight: '18–22 g / adet',
    packageType: 'Tencere',
    shelfLife: '7 gün (+4°C)',
    storageCondition: 'Buzdolabında saklayınız.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Gurme Lahana Sarma',
    description: 'Taze lahana yaprağına sarılmış, kavrulmuş iç harçla hazırlanan geleneksel lahana sarması.',
    storage: 'fresh',
    boxWeight: '10 kg / koli',
    unitWeight: '35 g / adet',
    packageType: 'Tencere',
    shelfLife: '7 gün (+4°C)',
    storageCondition: 'Buzdolabında saklayınız.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Gurme Patlıcan Dolma',
    description: 'Özenle seçilmiş patlıcanlara doldurulan, kavrulmuş iç harçla hazırlanan geleneksel lezzet.',
    storage: 'fresh',
    boxWeight: '10 kg / koli',
    unitWeight: '40 g / adet',
    packageType: 'Tencere',
    shelfLife: '7 gün (+4°C)',
    storageCondition: 'Buzdolabında saklayınız.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Gurme Biber Dolma',
    description: 'Yeşil biberlere özel iç harçla doldurulan, profesyonel mutfaklar için hazır sunum kalitesinde ürün.',
    storage: 'fresh',
    boxWeight: '10 kg / koli',
    unitWeight: '25 g / adet',
    packageType: 'Tencere',
    shelfLife: '7 gün (+4°C)',
    storageCondition: 'Buzdolabında saklayınız.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Gurme Mantı',
    description: 'İnce açılmış hamurla yapılan, kaliteli kıyma harcıyla doldurulmuş geleneksel Türk mantısı.',
    storage: 'frozen',
    boxWeight: '10 kg / koli',
    shelfLife: '12 ay (-18°C)',
    storageCondition: 'Derin dondurucuda muhafaza ediniz. Çözüldükten sonra tekrar dondurmayınız.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Gurme Çiğköfte',
    description: 'Vakumlu paketlerde taze hazırlanan, toplu tüketim için uygun çiğköfte. Koli başına 10 poşet.',
    storage: 'fresh',
    boxWeight: '5 kg / koli',
    packageType: 'Vakumlu poşet',
    shelfLife: '7 gün (+4°C)',
    storageCondition: 'Uygun koşullarda saklayınız; tazelik ve kalite için önerilen koşullara uyunuz.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
  },
];

export default function MenuPage() {
  const [filter, setFilter] = useState<'all' | 'frozen' | 'fresh'>('all');

  const filtered = filter === 'all' ? products : products.filter(p => p.storage === filter);

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-stone-900 flex flex-col font-sans">
      <Header />

      <main className="flex-1">

        {/* BAŞLIK */}
        <section className="bg-stone-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-3">2026 – 2027 Sezonu</p>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight">
              Ürün <span className="text-[#B84C0C]">Kataloğumuz</span>
            </h1>
            <p className="text-stone-400 mt-5 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Catering firmaları, toplu yemek üreticileri ve profesyonel mutfaklar için hazırlanmış, koli bazında sipariş edilebilen ürünlerimiz.
            </p>
            <p className="text-stone-500 mt-3 text-sm">
              Fiyat bilgisi ve toplu sipariş teklifi için WhatsApp üzerinden ulaşın.
            </p>
            <a
              href="https://wa.me/905369305151"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Teklif & Sipariş Bağlantısı Al
            </a>
          </div>
        </section>

        {/* FİLTRE */}
        <section className="sticky top-[80px] z-30 bg-[#F5F0E8] border-b border-stone-200 py-4 px-4">
          <div className="flex items-center justify-center gap-3">
            {[
              { key: 'all', label: 'Tüm Ürünler' },
              { key: 'fresh', label: '🧊 Taze (+4°C)' },
              { key: 'frozen', label: '❄️ Derin Donmuş (-18°C)' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as typeof filter)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  filter === f.key
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* ÜRÜN KARTLARI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <div key={product.name} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                
                {/* Görsel */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Saklama Tipi Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                    product.storage === 'frozen'
                      ? 'bg-blue-600 text-white'
                      : 'bg-emerald-600 text-white'
                  }`}>
                    <Thermometer className="w-3 h-3" />
                    {product.storage === 'frozen' ? '-18°C Derin Donmuş' : '+4°C Taze'}
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-black text-stone-900">{product.name}</h2>
                  <p className="text-stone-500 text-sm mt-2 leading-relaxed flex-1">{product.description}</p>

                  {/* Detaylar */}
                  <div className="mt-5 space-y-2 border-t border-stone-100 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Package className="w-4 h-4 text-[#B84C0C] flex-shrink-0" />
                      <span className="text-stone-500 font-medium">Ambalaj:</span>
                      <span className="text-stone-800 font-bold">{product.boxWeight}</span>
                    </div>
                    {product.unitWeight && (
                      <div className="flex items-center gap-2 text-sm">
                        <Package className="w-4 h-4 text-[#B84C0C] flex-shrink-0" />
                        <span className="text-stone-500 font-medium">Adet ağırlığı:</span>
                        <span className="text-stone-800 font-bold">{product.unitWeight}</span>
                      </div>
                    )}
                    {product.packageType && (
                      <div className="flex items-center gap-2 text-sm">
                        <Package className="w-4 h-4 text-[#B84C0C] flex-shrink-0" />
                        <span className="text-stone-500 font-medium">Paket türü:</span>
                        <span className="text-stone-800 font-bold">{product.packageType}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-[#B84C0C] flex-shrink-0" />
                      <span className="text-stone-500 font-medium">Raf ömrü:</span>
                      <span className="text-stone-800 font-bold">{product.shelfLife}</span>
                    </div>
                  </div>

                  {/* Saklama notu */}
                  <p className="mt-3 text-xs text-stone-400 bg-stone-50 rounded-xl px-3 py-2 leading-relaxed">
                    ⚠️ {product.storageCondition}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center">
            <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-3">Toplu Sipariş</p>
            <h3 className="text-3xl sm:text-4xl font-black mb-4">
              Ürünleri İncelediniz mi?<br />
              <span className="text-[#B84C0C]">Teklif Almak İçin</span> Ulaşın.
            </h3>
            <p className="text-stone-400 max-w-xl mx-auto leading-relaxed mb-8 text-lg">
              Koli fiyatları, minimum sipariş miktarları ve teslimat detayları için WhatsApp'tan bize ulaşın; özel teklifinizi hızlıca hazırlayalım.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/905369305151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: 0536 930 51 51
              </a>
              <a
                href="mailto:gurmekupu@hotmail.com"
                className="inline-flex items-center justify-center gap-3 bg-stone-700 hover:bg-stone-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
              >
                gurmekupu@hotmail.com
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-10 text-sm text-stone-400">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-black text-stone-900 text-base tracking-tight">GURME KÜPÜ</span>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-stone-900 transition-colors">Ana Sayfa</Link>
            <Link href="/menu" className="hover:text-stone-900 transition-colors text-[#B84C0C] font-bold">Ürün Kataloğu</Link>
            <Link href="/markalarimiz" className="hover:text-stone-900 transition-colors">Markalarımız</Link>
          </div>
          <p>© 2026 Gurme Küpü. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
