'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Utensils, ArrowRight, Scale, ShieldCheck, Sparkles, ChefHat, Clock, Award, Star, Phone, MapPin } from 'lucide-react';

export default function LandingHomePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between selection:bg-amber-500 selection:text-stone-950">
      
      {/* Header */}
      <Header />

      <main className="flex-1 space-y-20 pb-16">
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Sol Metin Alanı */}
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 text-xs font-extrabold uppercase tracking-wider shadow-lg">
                <Sparkles className="w-4 h-4" /> Özel Ev Lezzetleri & Catering
              </span>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-stone-100 leading-[1.15]">
                Geleneksel Sofra Kültürü, <br />
                <span className="gold-gradient-text">Dilediğiniz Kiloda</span> Kapınızda.
              </h1>

              <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                Gurme Küpü ile özel düğün, nişan, davet ve aile sofralarınız için yaprak sarmadan kuzu tandıra kadar tüm lezzetleri **gram veya kg** bazında kolayca sipariş edin.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/siparis"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl gold-gradient-bg text-stone-950 font-black text-base flex items-center justify-center gap-3 shadow-2xl shadow-amber-900/50 hover:scale-105 active:scale-95 transition-all"
                >
                  <Utensils className="w-5 h-5" />
                  <span>Sipariş Paneline Git</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/admin"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-400 text-sm font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                  <span>Yönetici Paneli Girişi</span>
                </Link>
              </div>

              {/* İstatistik Rozetleri */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/80">
                <div>
                  <h4 className="text-2xl font-black text-amber-400">100%</h4>
                  <p className="text-xs text-stone-400">Günlük Taze Malzeme</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-amber-400">Gram/Kg</h4>
                  <p className="text-xs text-stone-400">Hassas Miktar Seçimi</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-amber-400">Anlık</h4>
                  <p className="text-xs text-stone-400">Sesli Mobil Bildirim</p>
                </div>
              </div>

            </div>

            {/* Sağ Görsel Banner */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Gurme Kuzu Tandır"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl border border-amber-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-amber-400 uppercase">Özel Catering Menümüz</span>
                      <h3 className="text-xl font-extrabold text-stone-100">Geleneksel Odun Fırın Kuzu Tandır</h3>
                    </div>
                    <Link
                      href="/siparis"
                      className="px-4 py-2 rounded-xl gold-gradient-bg text-stone-950 text-xs font-black shadow hover:brightness-110 transition-colors"
                    >
                      İncele
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* NEDEN GURME KÜPÜ? (ÖZELLİKLER) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl font-black text-stone-100">
              Neden <span className="gold-gradient-text">Gurme Küpü</span>?
            </h2>
            <p className="text-sm text-stone-400">
              Catering ve toptan/perakende ev yemekleri siparişlerinizi en pratik ve güvenilir şekilde yönetiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-all space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-stone-950 font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">Kg ve Gram Cinsinden Sipariş</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Sabit porsiyonlara bağlı kalmayın! İster 250 gram meze, ister 5 kg kavurma; tam ihtiyacınız kadar sipariş oluşturun.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-all space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-stone-950 font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">Anında Mobil Bildirim</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Sipariş verdiğiniz anda dükkan sahibinin cep telefonuna sesli uyarı bildirimi gider. Gecikmesiz hazırlanır.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-all space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-stone-950 font-bold">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">Usta Şef Mutfağı</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Geleneksel ev lezzetlerini saf yayık tereyağı, taze sızma zeytinyağı ve yöresel malzemelerle pişiriyoruz.
              </p>
            </div>

          </div>
        </section>

        {/* BANNER CTA SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="rounded-3xl gold-gradient-bg p-8 sm:p-12 text-stone-950 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Siparişinizi Hemen Oluşturun!
              </h2>
              <p className="text-stone-900 text-sm font-semibold max-w-xl">
                Kiloyla lezzet seçim ekranına geçerek birkaç tıkla siparişinizi iletebilirsiniz.
              </p>
            </div>

            <Link
              href="/siparis"
              className="px-8 py-4 rounded-2xl bg-stone-950 hover:bg-stone-900 text-amber-400 font-extrabold text-sm whitespace-nowrap shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>Sipariş Sayfasına Git</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950 py-10 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gold-gradient-bg flex items-center justify-center text-stone-950 font-bold">
              <Utensils className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-stone-200 text-sm">Gurme Küpü Catering</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Ana Sayfa</Link>
            <Link href="/siparis" className="hover:text-amber-400 transition-colors font-bold text-amber-400">Sipariş Ver (/siparis)</Link>
            <Link href="/admin" className="hover:text-amber-400 transition-colors">Admin Girişi</Link>
          </div>

          <p className="text-stone-500 text-center md:text-right">
            Gurme Küpü © 2026. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

    </div>
  );
}
