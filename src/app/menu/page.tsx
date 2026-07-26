'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Package, Utensils } from 'lucide-react';
import { Product } from '@/lib/types';

export default function MenuPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.success && data.products) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error('Products load error:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-stone-900 flex flex-col font-sans">
      <Header />

      <main className="flex-1">

        {/* BAŞLIK */}
        <section className="bg-stone-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-3">Gurme Lezzetler</p>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight">
              Menü & <span className="text-[#B84C0C]">Kataloğumuz</span>
            </h1>
            <p className="text-stone-400 mt-5 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Profesyonel mutfaklar, toplu tüketim ve gurme damaklar için özenle hazırlanan zengin içerikli menümüz.
            </p>
            <p className="text-stone-500 mt-3 text-sm">
              Siparişleriniz veya özel istekleriniz için bizimle iletişime geçebilirsiniz.
            </p>
            <a
              href="https://wa.me/905369305151"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Sipariş & Bilgi İçin WhatsApp
            </a>
          </div>
        </section>

        {/* FİLTRE */}
        <section className="sticky top-[80px] z-30 bg-[#F5F0E8] border-b border-stone-200 py-4 px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  filter === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat === 'all' ? 'Tüm Ürünler' : cat}
              </button>
            ))}
          </div>
        </section>

        {/* ÜRÜN KARTLARI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          {isLoading ? (
            <div className="flex items-center justify-center py-20 text-stone-500">
              Menü yükleniyor...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 flex flex-col relative">
                  
                  {/* Görsel */}
                  <div className="relative h-52 overflow-hidden bg-stone-100">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        loading="lazy"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-300">
                        <Utensils className="w-12 h-12" />
                      </div>
                    )}
                    
                    {/* Durum Badge */}
                    {!product.isAvailable && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold bg-red-600 text-white shadow-md">
                        Geçici Olarak Temin Edilemiyor
                      </div>
                    )}
                  </div>

                  {/* İçerik */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h2 className="text-xl font-black text-stone-900 leading-tight">{product.name}</h2>
                      <span className="text-[#B84C0C] font-black text-lg whitespace-nowrap">{product.pricePerKg} ₺</span>
                    </div>
                    <p className="text-stone-500 text-sm mt-3 leading-relaxed flex-1">
                      {product.description || 'Bu ürün için henüz açıklama girilmemiş.'}
                    </p>

                    {/* Detaylar */}
                    <div className="mt-5 space-y-2 border-t border-stone-100 pt-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-[#B84C0C] flex-shrink-0" />
                          <span className="text-stone-500 font-medium">Kategori:</span>
                        </div>
                        <span className="text-stone-800 font-bold bg-stone-100 px-3 py-1 rounded-lg text-xs">{product.category}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-stone-500 font-medium ml-6">Birim:</span>
                        <span className="text-stone-800 font-bold">Kilogram (kg)</span>
                      </div>
                    </div>

                    <a 
                      href={`https://wa.me/905369305151?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak ve sipariş vermek istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 w-full py-3 rounded-xl font-bold text-center transition-colors text-sm flex items-center justify-center gap-2 ${
                        product.isAvailable 
                          ? 'bg-stone-900 text-white hover:bg-stone-800' 
                          : 'bg-stone-200 text-stone-400 pointer-events-none'
                      }`}
                    >
                      {product.isAvailable ? (
                        <>
                          <MessageCircle className="w-4 h-4" />
                          <span>İletişime Geç</span>
                        </>
                      ) : 'Tükendi'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Boş Durum */}
          {!isLoading && filtered.length === 0 && (
            <div className="text-center py-20 text-stone-500">
              Bu kategoride henüz ürün bulunmamaktadır.
            </div>
          )}

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
          <p>Gurme Küpü. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
