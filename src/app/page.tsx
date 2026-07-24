'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { MessageCircle, Instagram, ArrowDownRight, Phone, Mail, MapPin } from 'lucide-react';

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
                Ankara · Profesyonel Gıda Çözümleri
              </span>
            </div>

            <div className="space-y-6 py-12 lg:py-0">
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter text-stone-900">
                Profesyonel<br />
                Mutfakların<br />
                <em className="not-italic text-[#B84C0C]">Güvenilir</em><br />
                Ortağı.
              </h1>
              <p className="text-stone-500 text-lg max-w-md leading-relaxed font-light">
                Catering firmaları, toplu yemek üreticileri ve profesyonel mutfaklara yönelik geleneksel lezzetleri gurme kalitesinde sunuyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href="https://wa.me/905369305151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-stone-900 hover:bg-[#B84C0C] text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp'tan Sipariş Bağlantısı Al</span>
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
              alt="Gurme Küpü Ürünleri"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Öne Çıkan Ürünlerimiz</p>
              <p className="text-stone-900 font-bold text-sm mt-0.5">Sarma · İçli Köfte · Mantı · Dolma</p>
            </div>
          </div>
        </section>

        {/* ═══ RAKAMLAR / DEĞERLER ═══ */}
        <section className="border-y border-stone-200 bg-white py-10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
            {[
              { num: 'B2B', label: 'Profesyonel Satış' },
              { num: '7+', label: 'Ürün Çeşidi' },
              { num: '10 kg', label: 'Koli Bazında Satış' },
              { num: '100%', label: 'Hijyenik Üretim' },
            ].map((item) => (
              <div key={item.label} className="text-center px-4 py-2">
                <p className="text-4xl font-black text-[#B84C0C]">{item.num}</p>
                <p className="text-stone-500 text-sm mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ HAKKIMIZDA ═══ */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#B84C0C] mb-4 block">Biz Kimiz</span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              Geleneksel Lezzetleri<br />
              <span className="text-[#B84C0C]">Modern Kaliteyle</span><br />
              Sunuyoruz.
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
              <p>
                Gurme Küpü; kalite, süreklilik ve müşteri memnuniyetini merkeze alarak profesyonel mutfakların operasyonel süreçlerini kolaylaştırmayı amaçlar.
              </p>
              <p>
                Geleneksel tatları çağdaş bir estetikle yeniden yorumlayan markamız, sürdürülebilir tarım yapan üreticilerden temin edilen taze bileşenlerle üretim yapmaktadır.
              </p>
              <p>
                Sadece ürün tedarik etmekle kalmayıp, işletmelerle uzun vadeli iş birlikleri kuruyor ve onlara özel gurme çözümler sunuyoruz.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85"
              alt="Gurme Küpü Mutfak"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ═══ ÜRÜN VİTRİNİ ═══ */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black">Öne Çıkan Ürünlerimiz</h2>
            <ArrowDownRight className="w-8 h-8 text-[#B84C0C] flex-shrink-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-[420px] rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=85" alt="Sarma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-black text-white">Sarma Çeşitleri</h3>
                <p className="text-stone-300 text-sm mt-2">Yaprak, lahana — tencere paket, 10 kg/koli, +4°C'de 7 gün taze.</p>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-8 h-[420px]">
              <div className="rounded-3xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=85" alt="İçli Köfte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl font-black text-white">İçli Köfte & Mantı</h3>
                  <p className="text-stone-300 text-xs mt-1">10 kg/koli · -18°C'de 12 ay raf ömrü</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=85" alt="Dolma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl font-black text-white">Dolma Çeşitleri</h3>
                  <p className="text-stone-300 text-xs mt-1">Patlıcan, biber · 10 kg/koli · Taze</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/menu" className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#B84C0C] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
              Tüm Ürün Kataloğunu Gör →
            </Link>
          </div>
        </section>

        {/* ═══ HİZMETLER ═══ */}
        <section className="bg-stone-900 text-white py-20 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <h2 className="text-3xl font-black">Hizmetlerimiz</h2>
              <ArrowDownRight className="w-8 h-8 text-[#B84C0C] flex-shrink-0" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-700">
              {[
                {
                  no: '01',
                  title: 'Koli Bazında Ürün Satışı',
                  body: 'Catering firmaları ve toplu yemek üreticilerine 10 kg koli bazında, dondurulmuş veya taze ürün satışı yapıyoruz. Minimum sipariş esnekliği sunuyoruz.',
                },
                {
                  no: '02',
                  title: 'Menü & Lezzet Danışmanlığı',
                  body: 'İşletmenizin ihtiyaçlarına özel "lezzet haritası" oluşturuyor, menü planlamasından ürün seçimine kadar destek veriyoruz.',
                },
                {
                  no: '03',
                  title: 'Lojistik & Operasyonel Destek',
                  body: 'Ürünlerin hazırlanmasından teslimatına kadar her adımda kalite ve hijyen standartlarını koruyarak güvenilir tedarik sağlıyoruz.',
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

        {/* ═══ İLETİŞİM ═══ */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#B84C0C] mb-4 block">Ulaşın</span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-8">
              Teklif Almak için<br />
              <span className="text-[#B84C0C]">Hemen İletişime</span><br />
              Geçin.
            </h2>
            <div className="space-y-5">
              <a href="https://wa.me/905369305151" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">WhatsApp</p>
                  <p className="text-stone-900 font-bold text-lg group-hover:text-[#B84C0C] transition-colors">+90 536 930 51 51</p>
                </div>
              </a>
              <a href="tel:+905409305151" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Telefon</p>
                  <p className="text-stone-900 font-bold text-lg group-hover:text-[#B84C0C] transition-colors">+90 540 930 51 51</p>
                </div>
              </a>
              <a href="mailto:gurmekupu@hotmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">E-posta</p>
                  <p className="text-stone-900 font-bold text-lg group-hover:text-[#B84C0C] transition-colors">gurmekupu@hotmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Adres</p>
                  <p className="text-stone-900 font-bold text-lg">Süvari Mah. 1716. Sok. No:1<br />Etimesgut, Ankara</p>
                </div>
              </div>
              <a href="https://www.instagram.com/gurmekupu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Instagram</p>
                  <p className="text-stone-900 font-bold text-lg group-hover:text-[#B84C0C] transition-colors">@gurmekupu</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-stone-900 text-white rounded-3xl p-10 flex flex-col gap-6">
            <h3 className="text-2xl font-black">Hızlı İletişim</h3>
            <p className="text-stone-400 leading-relaxed">
              Ürün kataloğu, fiyat teklifi veya özel sipariş talepleriniz için WhatsApp üzerinden bize ulaşın. En kısa sürede dönüş sağlayacağız.
            </p>
            <a
              href="https://wa.me/905369305151"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp'ta Yaz
            </a>
            <a
              href="mailto:gurmekupu@hotmail.com"
              className="inline-flex items-center justify-center gap-3 bg-stone-700 hover:bg-stone-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              gurmekupu@hotmail.com
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-10 text-sm text-stone-400">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-black text-stone-900 text-base tracking-tight block">GURME KÜPÜ</span>
            <span className="text-xs text-stone-400">Profesyonel Gıda Çözümleri · Ankara</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-stone-900 transition-colors">Ana Sayfa</Link>
            <Link href="/menu" className="hover:text-stone-900 transition-colors">Ürün Kataloğu</Link>
            <Link href="/markalarimiz" className="hover:text-stone-900 transition-colors">Markalarımız</Link>
          </div>
          <p>© 2026 Gurme Küpü. Tüm hakları saklıdır.</p>
        </div>
      </footer>

    </div>
  );
}
