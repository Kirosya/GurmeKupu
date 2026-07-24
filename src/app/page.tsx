'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { MessageCircle, Instagram, ArrowDownRight } from 'lucide-react';

export default function LandingHomePage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-stone-900 flex flex-col font-sans">
      <Header />

      <main className="flex-1">

        {/* ═══ HERO — Split Editorial ═══ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[92vh]">

          {/* Sol: Büyük tipografi */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16 pt-12 lg:pt-16 order-2 lg:order-1">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400">
                Ankara · Catering & Ev Lezzetleri
              </span>
            </div>

            <div className="space-y-6 py-12 lg:py-0">
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter text-stone-900">
                Sofranıza<br />
                <em className="not-italic text-[#B84C0C]">Ev</em><br />
                Götürüyoruz.
              </h1>
              <p className="text-stone-500 text-lg max-w-md leading-relaxed font-light">
                Düğün, nişan ve özel davetleriniz için, anne mutfağının sıcaklığını kiloyla sipariş edebildiğiniz bir catering deneyimi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905369305151"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-stone-900 hover:bg-[#B84C0C] text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp'tan Sipariş Bağlantısı Al</span>
              </a>
              <a
                href="https://www.instagram.com/gurmekupu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-stone-300 hover:border-stone-900 text-stone-900 px-7 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 bg-[#B84C0C] hover:bg-[#9a3d08] text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                <span>Ürün Kataloğumuzu İncele →</span>
              </Link>
            </div>
          </div>

          {/* Sağ: Ana görsel */}
          <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
              alt="Gurme Küpü Lezzetleri"
              className="w-full h-full object-cover"
            />
            {/* Küçük floating badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">İmza Yemeklerimiz</p>
              <p className="text-stone-900 font-bold text-sm mt-0.5">Kuzu Tandır & Ev Yemekleri</p>
            </div>
          </div>
        </section>

        {/* ═══ RAKAMLAR ═══ */}
        <section className="border-y border-stone-200 bg-white py-10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
            {[
              { num: '500+', label: 'Başarılı Etkinlik' },
              { num: '10+', label: 'Yıl Deneyim' },
              { num: '50+', label: 'Yemek Çeşidi' },
              { num: '100%', label: 'Doğal Malzeme' },
            ].map((item) => (
              <div key={item.label} className="text-center px-4 py-2">
                <p className="text-4xl font-black text-[#B84C0C]">{item.num}</p>
                <p className="text-stone-500 text-sm mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ EDİTÖRYAL BÖLÜM — Asimetrik ═══ */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">

          {/* Büyük kart */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden h-[480px] group">
            <img
              src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1400&q=85"
              alt="Kuzu Tandır"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-black text-white mt-1">Kuzu Tandır</h3>
              <p className="text-stone-300 text-sm mt-2 leading-relaxed">Taş fırında saatlerce, lokum kıvamına gelinceye dek pişirilir.</p>
            </div>
          </div>

          {/* Sağ sütun: iki kart */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-[480px]">
            <div className="relative rounded-3xl overflow-hidden flex-1 group">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85"
                alt="Yemek Sofrası"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <h3 className="text-xl font-black text-white">Soğuk Mezeler</h3>
                <p className="text-stone-300 text-xs mt-1">Zeytinyağlı & ev yapımı</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden flex-1 group">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=85"
                alt="Tencere Yemekleri"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <h3 className="text-xl font-black text-white">Tencere Yemekleri</h3>
                <p className="text-stone-300 text-xs mt-1">Geleneksel ev lezzetleri</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ NEDEN BİZ — Yatay liste ═══ */}
        <section className="bg-stone-900 text-white py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <h2 className="text-3xl font-black">Neden Gurme Küpü?</h2>
              <ArrowDownRight className="w-8 h-8 text-[#B84C0C] flex-shrink-0" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-700">
              {[
                {
                  no: '01',
                  title: 'Kiloyla Esnek Sipariş',
                  body: 'Porsiyon sınırlaması yok. Misafir sayınıza uygun, gram hassasiyetinde sipariş verin.'
                },
                {
                  no: '02',
                  title: 'Odun Ateşinde Lezzet',
                  body: 'Endüstriyel fırın değil, geleneksel taş ve odun ateşi. Fark ilk lokmada belli olur.'
                },
                {
                  no: '03',
                  title: '100% Doğal İçerik',
                  body: 'Koruyucu, katkı maddesi yok. Her malzeme günlük, taze ve doğrudan tedarikçiden.'
                },
              ].map((item) => (
                <div key={item.no} className="bg-stone-900 p-8 lg:p-10">
                  <span className="text-5xl font-black text-stone-700">{item.no}</span>
                  <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
                  <p className="text-stone-400 leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-24 px-6 text-center bg-[#F5F0E8]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4">Sipariş Almak İçin</p>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-900 mb-8 leading-tight">
            Hemen <span className="text-[#B84C0C]">WhatsApp'tan</span><br />iletişime geçin.
          </h2>
          <a
            href="https://wa.me/905369305151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#B84C0C] hover:bg-[#9a3d08] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-900/20 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Sipariş Bağlantısı Al
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-10 text-sm text-stone-400">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-black text-stone-900 text-base tracking-tight">GURME KÜPÜ</span>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-stone-900 transition-colors">Ana Sayfa</Link>
            <Link href="/markalarimiz" className="hover:text-stone-900 transition-colors">Markalarımız</Link>
          </div>
          <p>© 2026 Gurme Küpü. Tüm hakları saklıdır.</p>
        </div>
      </footer>

    </div>
  );
}
