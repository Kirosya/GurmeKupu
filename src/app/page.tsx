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

      <main className="flex-1 space-y-24 pb-20">
        
        {/* HERO SECTION - SADE VE TEMİZ */}
        <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-stone-100 leading-[1.1]">
              Geleneksel Lezzetler, <br />
              <span className="gold-gradient-text font-serif italic font-light">Tam Ölçüsünde.</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed font-light">
              Düğün, nişan ve özel davetleriniz için özenle hazırlanan ev yemekleri. İhtiyacınız olan lezzeti, tam ihtiyacınız olan kiloda sipariş edin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/siparis"
                className="px-8 py-4 rounded-full gold-gradient-bg text-stone-950 font-bold text-base hover:scale-105 transition-transform flex items-center gap-2"
              >
                <span>Siparişe Başla</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FOTOĞRAF GALERİSİ / VİTRİN */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-[400px] rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80" alt="Catering Masası" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-stone-100">Özel Davetler</h3>
                <p className="text-stone-300 text-sm mt-1">Misafirlerinizi unutulmaz lezzetlerle ağırlayın.</p>
              </div>
            </div>
            <div className="h-[400px] rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="Odun Fırını Et" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-stone-100">Kuzu Tandır</h3>
                <p className="text-stone-300 text-sm mt-1">Odun ateşinde ağır ağır pişen geleneksel tat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER - SADELEŞTİRİLMİŞ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-stone-800 shadow-xl shadow-amber-900/20">
                <img src="https://images.unsplash.com/photo-1548943487-a2e4f43b4850?auto=format&fit=crop&w=400&q=80" alt="Meze" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">Kiloyla Sipariş</h3>
              <p className="text-sm text-stone-400 font-light max-w-xs">
                Porsiyon sınırlarına takılmadan, ister gram ister kilo bazında ihtiyacınız kadar sipariş verin.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-stone-800 shadow-xl shadow-amber-900/20">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=400&q=80" alt="Mutfak" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">Usta Mutfağı</h3>
              <p className="text-sm text-stone-400 font-light max-w-xs">
                En taze ve doğal malzemelerle, yılların tecrübesine sahip ustalarımızın ellerinden.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-stone-800 bg-stone-900 flex items-center justify-center shadow-xl shadow-amber-900/20">
                <Clock className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-stone-100">Tam Zamanında</h3>
              <p className="text-sm text-stone-400 font-light max-w-xs">
                Siparişleriniz tam belirttiğiniz günde ve saatte taptaze olarak teslim edilir.
              </p>
            </div>
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
