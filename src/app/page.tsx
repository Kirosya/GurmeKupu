'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Utensils, MessageCircle, Instagram, Leaf, Flame, Scale } from 'lucide-react';

export default function LandingHomePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 flex flex-col font-sans selection:bg-orange-200 selection:text-stone-900">
      
      {/* Header */}
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION - GIDA VE CATERING ODAKLI (RESİM ARKAPLANLI) */}
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center">
          {/* Arkaplan Resmi */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          {/* Karartma Overlay */}
          <div className="absolute inset-0 bg-stone-950/60"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Utensils className="w-8 h-8 text-orange-400" />
              <span className="text-orange-400 tracking-widest font-bold uppercase text-sm">Geleneksel Lezzet Sanatı</span>
              <Utensils className="w-8 h-8 text-orange-400" />
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white font-serif leading-tight">
              Özel Davetleriniz İçin <br />
              <span className="text-orange-400 italic font-light">Usta İşi</span> Lezzetler
            </h1>
            
            <p className="text-lg sm:text-2xl text-stone-200 font-light max-w-2xl mx-auto">
              Düğün, nişan ve tüm kurumsal davetlerinizde, anne eli değmiş gibi özenle hazırlanan, kiloyla sipariş edebileceğiniz ev yemekleri.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="https://wa.me/905369305151"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-900/30 w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp'tan Sipariş Bağlantısı Al</span>
              </a>
              <a
                href="https://www.instagram.com/gurmekupu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-stone-900/10 w-full sm:w-auto"
              >
                <Instagram className="w-6 h-6 text-pink-600" />
                <span>Instagram'da Bizi İncele</span>
              </a>
            </div>
          </div>
        </section>

        {/* BİZ KİMİZ / ÖZELLİKLER (Sıcak Tema) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Neden Gurme Küpü?</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">Mutfaktaki tutkumuzu, sofralarınıza en taze haliyle taşıyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl transition-shadow flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Kiloyla Esnek Sipariş</h3>
              <p className="text-stone-600 leading-relaxed">
                Porsiyon sınırlarına takılmadan, misafir sayınıza uygun olarak dilediğiniz yemeği gram veya kilo bazında tam ölçüsünde sipariş verin.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl transition-shadow flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Flame className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Odun Ateşinde Lezzet</h3>
              <p className="text-stone-600 leading-relaxed">
                Yemeklerimizde endüstriyel fırınlar yerine geleneksel yöntemleri benimsiyor, etlerimizi odun ateşinde ağır ağır pişiriyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl transition-shadow flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Taze ve Doğal İçerik</h3>
              <p className="text-stone-600 leading-relaxed">
                Mutfağımıza giren her malzeme günlük olarak özenle seçilir. Doğal olmayan hiçbir koruyucu veya katkı maddesi kullanmıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* FOTOĞRAF GALERİSİ / VİTRİN */}
        <section className="py-20 bg-stone-900 text-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold text-white">Öne Çıkan Lezzetlerimiz</h2>
                <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[450px] rounded-3xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80" alt="Odun Fırını Et" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <span className="px-4 py-1.5 bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 inline-block">İmza Yemeğimiz</span>
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">Kuzu Tandır</h3>
                  <p className="text-stone-300">Özel baharatlarla marine edilip taş fırında saatlerce lokum kıvamına gelene kadar pişirilir.</p>
                </div>
              </div>

              <div className="grid grid-rows-2 gap-8 h-[450px]">
                <div className="rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1548943487-a2e4f43b4850?auto=format&fit=crop&w=800&q=80" alt="Mezeler" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-serif font-bold text-white">Soğuk Mezeler</h3>
                    <p className="text-stone-300 text-sm mt-1">Zeytinyağlı Ege esintileri ve ev yapımı lezzetler.</p>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=800&q=80" alt="Ana Yemekler" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-serif font-bold text-white">Tencere Yemekleri</h3>
                    <p className="text-stone-300 text-sm mt-1">Geleneksel sulu ev yemeği seçenekleri.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
            <Link href="/admin" className="hover:text-orange-600 transition-colors">Yönetici Girişi</Link>
          </div>

          <p className="text-center md:text-right">
            © 2026 Gurme Küpü. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

    </div>
  );
}
