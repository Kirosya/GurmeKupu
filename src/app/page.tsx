'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { MessageCircle, Instagram, ArrowDownRight, Phone, Mail, MapPin } from 'lucide-react';

export default function LandingHomePage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-900 flex flex-col font-sans">
      <Header />

      <main className="flex-1">

        {/* ═══ HERO — Split Editorial ═══ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[92vh]">

          {/* Sol: Büyük tipografi */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16 pt-12 lg:pt-16 order-2 lg:order-1">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D9480F]">
                Ankara · Profesyonel Gıda Çözümleri
              </span>
            </div>

            <div className="space-y-6 py-12 lg:py-0">
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter text-[#0A1A3A]">
                Profesyonel<br />
                Mutfakların<br />
                <em className="not-italic text-[#D9480F]">Güvenilir</em><br />
                Ortağı.
              </h1>
              <p className="text-slate-500 text-lg max-w-md leading-relaxed font-medium">
                Catering firmaları, toplu yemek üreticileri ve profesyonel mutfaklara yönelik geleneksel lezzetleri gurme kalitesinde sunuyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href={`https://wa.me/905369305151?text=${encodeURIComponent('Merhaba, sipariş bağlantısı almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0A1A3A] hover:bg-[#163060] text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-blue-900/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp'tan Sipariş Bağlantısı Al</span>
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 bg-[#D9480F] hover:bg-[#b83b09] text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-orange-900/20"
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
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1A3A]/20 to-transparent mix-blend-multiply" />
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-2xl border border-white/20">
              <p className="text-xs text-[#D9480F] font-bold uppercase tracking-wider">Öne Çıkan Ürünlerimiz</p>
              <p className="text-[#0A1A3A] font-black text-sm mt-0.5">Sarma · İçli Köfte · Mantı · Dolma</p>
            </div>
          </div>
        </section>

        {/* ═══ RAKAMLAR / DEĞERLER ═══ */}
        <section className="border-y border-orange-100 bg-orange-50/50 py-10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-orange-200/60">
            {[
              { num: 'B2B', label: 'Profesyonel Satış' },
              { num: '7+', label: 'Ürün Çeşidi' },
              { num: '10 kg', label: 'Koli Bazında Satış' },
              { num: '100%', label: 'Hijyenik Üretim' },
            ].map((item) => (
              <div key={item.label} className="text-center px-4 py-2">
                <p className="text-4xl font-black text-[#D9480F] drop-shadow-sm">{item.num}</p>
                <p className="text-[#0A1A3A]/70 text-sm mt-1 font-bold">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ HAKKIMIZDA ═══ */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D9480F] mb-4 block">Biz Kimiz</span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6 text-[#0A1A3A]">
              Geleneksel Lezzetleri<br />
              <span className="text-[#D9480F]">Modern Kaliteyle</span><br />
              Sunuyoruz.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg font-medium">
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
          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl shadow-blue-900/10 border-4 border-white">
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
            <h2 className="text-3xl font-black text-[#0A1A3A]">Öne Çıkan Ürünlerimiz</h2>
            <ArrowDownRight className="w-8 h-8 text-[#D9480F] flex-shrink-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-[420px] rounded-3xl overflow-hidden relative group shadow-xl shadow-blue-900/10">
              <img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=85" alt="Sarma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A]/90 via-[#0A1A3A]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-black text-white">Sarma Çeşitleri</h3>
                <p className="text-blue-100 text-sm mt-2 font-medium">Yaprak, lahana — tencere paket, 10 kg/koli, +4°C'de 7 gün taze.</p>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-8 h-[420px]">
              <div className="rounded-3xl overflow-hidden relative group shadow-xl shadow-blue-900/10">
                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=85" alt="İçli Köfte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl font-black text-white">İçli Köfte & Mantı</h3>
                  <p className="text-blue-100 text-xs mt-1 font-medium">10 kg/koli · -18°C'de 12 ay raf ömrü</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden relative group shadow-xl shadow-blue-900/10">
                <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=85" alt="Dolma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl font-black text-white">Dolma Çeşitleri</h3>
                  <p className="text-blue-100 text-xs mt-1 font-medium">Patlıcan, biber · 10 kg/koli · Taze</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/menu" className="inline-flex items-center gap-2 bg-[#0A1A3A] hover:bg-[#163060] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-900/20">
              Tüm Ürün Kataloğunu Gör →
            </Link>
          </div>
        </section>

        {/* ═══ HİZMETLER ═══ */}
        <section className="bg-gradient-to-br from-[#0A1A3A] to-[#163060] text-white py-24 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <h2 className="text-3xl font-black">Hizmetlerimiz</h2>
              <ArrowDownRight className="w-8 h-8 text-[#D9480F] flex-shrink-0" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div key={item.no} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/15 transition-colors">
                  <span className="text-5xl font-black text-[#D9480F]/80">{item.no}</span>
                  <h3 className="text-xl font-bold mt-4 mb-3 text-white">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed text-sm font-medium">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ İLETİŞİM ═══ */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D9480F] mb-4 block">Ulaşın</span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-8 text-[#0A1A3A]">
              Teklif Almak için<br />
              <span className="text-[#D9480F]">Hemen İletişime</span><br />
              Geçin.
            </h2>
            <div className="space-y-5">
              <a href={`https://wa.me/905369305151?text=${encodeURIComponent('Merhaba, Gurme Küpü ürünleri hakkında bilgi almak ve sipariş vermek istiyorum.')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-[#0A1A3A] font-black text-lg group-hover:text-[#D9480F] transition-colors">+90 536 930 51 51</p>
                </div>
              </a>
              <a href="tel:+905409305151" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Telefon</p>
                  <p className="text-[#0A1A3A] font-black text-lg group-hover:text-[#D9480F] transition-colors">+90 540 930 51 51</p>
                </div>
              </a>
              <a href="mailto:gurmekupu@hotmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#D9480F] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">E-posta</p>
                  <p className="text-[#0A1A3A] font-black text-lg group-hover:text-[#D9480F] transition-colors">gurmekupu@hotmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Adres</p>
                  <p className="text-[#0A1A3A] font-black text-lg">Süvari Mah. 1716. Sok. No:1<br />Etimesgut, Ankara</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#D9480F] to-[#b83b09] text-white rounded-3xl p-10 flex flex-col gap-6 shadow-2xl shadow-orange-900/20">
            <h3 className="text-2xl font-black">Hızlı İletişim</h3>
            <p className="text-orange-100 font-medium leading-relaxed">
              Ürün kataloğu, fiyat teklifi veya özel sipariş talepleriniz için WhatsApp üzerinden bize ulaşın. En kısa sürede dönüş sağlayacağız.
            </p>
            <a
              href={`https://wa.me/905369305151?text=${encodeURIComponent('Merhaba, Gurme Küpü ürünleri hakkında bilgi almak ve sipariş vermek istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#D9480F] px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp'ta Yaz
            </a>
            <a
              href="mailto:gurmekupu@hotmail.com"
              className="inline-flex items-center justify-center gap-3 bg-black/20 hover:bg-black/30 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              gurmekupu@hotmail.com
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-black text-[#0A1A3A] text-lg tracking-tight block mb-1">GURME KÜPÜ</span>
            <span className="text-xs font-medium uppercase tracking-widest text-[#D9480F]">Profesyonel Gıda Çözümleri</span>
          </div>
          <div className="flex items-center gap-8 font-bold">
            <Link href="/" className="hover:text-[#D9480F] transition-colors">Ana Sayfa</Link>
            <Link href="/menu" className="hover:text-[#D9480F] transition-colors">Ürün Kataloğu</Link>
            <Link href="/markalarimiz" className="hover:text-[#D9480F] transition-colors">Markalarımız</Link>
          </div>
          <p className="font-medium text-slate-400">Ankara · Etimesgut</p>
        </div>
      </footer>

    </div>
  );
}
