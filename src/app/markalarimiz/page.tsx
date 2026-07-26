'use client';

import React from 'react';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { Utensils, ShieldCheck, GraduationCap } from 'lucide-react';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 flex flex-col font-sans selection:bg-orange-200 selection:text-stone-900">
      
      <Header />

      <main className="flex-1 pb-24">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-stone-900/70"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-6 mt-8">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white font-serif leading-tight">
              Markalarımızı <span className="text-orange-400 italic font-light">Tanıyın</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 font-light max-w-2xl mx-auto">
              Lezzetin, profesyonelliğin ve eğitimin buluşma noktası olan markalarımızla her adımda yanınızdayız.
            </p>
          </div>
        </section>

        {/* BRANDS SECTIONS */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-32 -mt-16 relative z-20">
          
          {/* Gurme Küpü */}
          <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-orange-900/5">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                  <Utensils className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-stone-900">Gurme Küpü</h2>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-4">Profesyonel mutfakların güvenilir çözüm ortağı.</h3>
              <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
                <p>
                  Gurme Küpü; catering firmaları, toplu yemek üreticileri ve profesyonel mutfaklara yönelik kaliteli gıda ürünleri sunan kurumsal bir markadır. Kalite, güven ve süreklilik anlayışıyla hareket ederek, iş ortaklarımızın ihtiyaçlarına uygun ürün ve çözümler geliştiriyoruz.
                </p>
                <p>
                  Amacımız yalnızca ürün tedarik etmek değil; profesyonel mutfakların güvenilir iş ortağı olarak operasyonlarına değer katmaktır. Her üründe kalite standartlarını ön planda tutuyor, iş ortaklarımızla birlikte profesyonel mutfakların beklentilerine uygun çözümler sunuyoruz.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
              <div className="w-full max-w-sm">
                <img src="/gurme-kupu.avif" alt="Gurme Küpü" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </section>

          {/* Gurme Destek */}
          <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-orange-900/5">
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="w-full max-w-sm">
                <img src="/gk-gurme-destek.avif" alt="Gurme Destek" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-stone-900">Gurme Destek</h2>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-4">Lezzetin arkasındaki profesyonel destek.</h3>
              <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
                <p>
                  Gurme Destek, Gurme Küpü tarafından geliştirilen profesyonel destek hizmetidir. İşletmelerin ihtiyaç duyduğu operasyonel desteği sağlayarak, Gurme Küpü ürünlerinin doğru hazırlama standartlarıyla sunulmasına katkıda bulunur.
                </p>
                <p>
                  Deneyimli ekibiyle özellikle yoğun dönemlerde profesyonel mutfakların iş yükünü hafifletir ve operasyonların kesintisiz devam etmesine destek olur. Gurme Destek'in amacı yalnızca destek sağlamak değil; Gurme Küpü'nün kalite anlayışını mutfağa taşımaktır.
                </p>
              </div>
            </div>
          </section>

          {/* Gurme Akademi */}
          <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-orange-900/5">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-stone-900">Gurme Akademi</h2>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-4">Bilginin, deneyimin ve profesyonelliğin buluşma noktası.</h3>
              <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
                <p>
                  Gurme Akademi, Gurme Küpü tarafından hayata geçirilen eğitim ve gelişim markasıdır. Profesyonel mutfakların ihtiyaç duyduğu bilgi ve uygulama desteğini, alanında deneyimli şeflerimizle buluşturarak sektöre değer katmayı hedefliyoruz.
                </p>
                <p>
                  Ürün hazırlama tekniklerinden uygulamalı mutfak eğitimlerine kadar geniş bir içerikle, iş ortaklarımızın bilgi ve becerilerini geliştirmelerine katkı sağlıyoruz. Gurme Akademi, yalnızca eğitim vermeyi değil; doğru teknikleri, kalite standartlarını ve profesyonel mutfak kültürünü paylaşmayı amaçlar.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
              <div className="w-full max-w-sm">
                <img src="/gk-gurme-akademi.avif" alt="Gurme Akademi" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-12 text-sm text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-stone-900 font-serif text-base">Gurme Küpü</span>
              <span className="text-xs text-orange-600 font-medium">Catering & Organizasyon</span>
            </div>
          </div>

          <div className="flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">Ana Sayfa</Link>
            <Link href="/markalarimiz" className="hover:text-orange-600 transition-colors">Markalarımız</Link>
          </div>

          <p className="text-center md:text-right">
            Gurme Küpü. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

    </div>
  );
}
