'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { OrderList } from '@/components/admin/OrderList';
import { ProductEditor } from '@/components/admin/ProductEditor';
import { ShieldCheck, ShoppingBag, Utensils, Lock, LogOut, ArrowLeft, BellRing, Bell } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'orders' | 'products'>('orders');
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');

  // Kalıcı Oturum ve Mobil App Otomatik Giriş Kontrolü
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedAuth = localStorage.getItem('gurmekupu_admin_auth');
      const secretParam = searchParams.get('secret');
      const mobileParam = searchParams.get('mobile');

      // 1. Mobil app özel ayrıcalıklı otomatik giriş veya önceden kaydedilmiş oturum
      if (savedAuth === 'true' || secretParam === 'gurme123' || mobileParam === '1') {
        setIsAuthenticated(true);
        localStorage.setItem('gurmekupu_admin_auth', 'true');
      }

      if ('Notification' in window) {
        setNotificationPermission(Notification.permission);
      }
    }
  }, [searchParams]);

  const requestWebNotificationPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const perm = await Notification.requestPermission();
        setNotificationPermission(perm);
        if (perm === 'granted') {
          localStorage.setItem('gurmekupu_web_push_enabled', 'true');
          fetch('/api/push-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: `web-browser-${Date.now()}` }),
          }).catch(console.error);

          new Notification('🔔 Gurme Küpü Bildirimleri Aktif!', {
            body: 'Artık yeni siparişler geldiğinde tarayıcınıza sesli ve görsel bildirim ulaştırılacaktır.',
          });
        }
      } catch (err) {
        console.error('Bildirim izni alma hatası:', err);
      }
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'gurme123' || password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setErrorMsg('');
      // Oturumu kalıcı olarak localStorage'a kaydet (Böylece uygulamadan çıkıp girilse de şifre sormaz)
      if (typeof window !== 'undefined') {
        localStorage.setItem('gurmekupu_admin_auth', 'true');
      }
      
      setTimeout(() => {
        if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission !== 'granted') {
          requestWebNotificationPermission();
        }
      }, 500);

    } else {
      setErrorMsg('Hatalı şifre. Lütfen tekrar deneyiniz.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('gurmekupu_admin_auth');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center p-4">
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl gold-gradient-bg flex items-center justify-center mx-auto text-stone-950 shadow-lg shadow-amber-900/30">
              <ShieldCheck className="w-8 h-8 font-bold" />
            </div>
            <h2 className="text-2xl font-extrabold text-stone-100">Gurme Küpü Yönetici Girişi</h2>
            <p className="text-xs text-amber-400 font-medium">
              Siparişleri ve ürün fiyatlarını yönetmek için şifrenizi giriniz.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-950/80 border border-red-800 text-red-300 text-xs rounded-xl text-center">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5 mb-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-500" /> Yönetici Şifresi
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="Şifre giriniz (varsayılan: gurme123)"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-950 font-extrabold text-sm shadow-xl shadow-amber-900/30 hover:brightness-110 active:scale-95 transition-all"
            >
              Giriş Yap
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-stone-400 hover:text-amber-400 inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Müşteri Sipariş Sayfasına Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between">
      
      {/* Admin Top Header */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-stone-950 font-bold">
              <Utensils className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-extrabold text-stone-100 flex items-center gap-2">
                Gurme Küpü <span className="text-amber-500 text-xs px-2 py-0.5 rounded bg-amber-950 border border-amber-800">Admin Panel</span>
              </h1>
              <p className="text-[11px] text-stone-400">Canlı Sipariş & Ürün Yönetimi</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Bildirim Durum Butonu */}
            <button
              onClick={requestWebNotificationPermission}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                notificationPermission === 'granted'
                  ? 'bg-emerald-950/60 border-emerald-800 text-emerald-400'
                  : 'bg-amber-950/80 border-amber-800 text-amber-300 hover:bg-amber-900'
              }`}
              title="Web Bildirim İzin Durumu"
            >
              {notificationPermission === 'granted' ? (
                <>
                  <BellRing className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline">Web Bildirimleri Açık</span>
                </>
              ) : (
                <>
                  <Bell className="w-4 h-4 text-amber-400 animate-bounce" />
                  <span className="hidden sm:inline">Bildirim İzni Ver</span>
                </>
              )}
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-red-400 text-xs font-semibold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Çıkış Yap</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-extrabold text-xs transition-all ${
              activeTab === 'orders'
                ? 'gold-gradient-bg text-stone-950 shadow-lg shadow-amber-900/30'
                : 'bg-stone-900 text-stone-400 hover:text-stone-100 border border-stone-800'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Sipariş Takip Ekranı</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-extrabold text-xs transition-all ${
              activeTab === 'products'
                ? 'gold-gradient-bg text-stone-950 shadow-lg shadow-amber-900/30'
                : 'bg-stone-900 text-stone-400 hover:text-stone-100 border border-stone-800'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Menü & Fiyat Yönetimi</span>
          </button>
        </div>

        {/* Tab Views */}
        {activeTab === 'orders' ? (
          <OrderList />
        ) : (
          <ProductEditor />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-900 bg-stone-950 py-4 text-center text-xs text-stone-500">
        Gurme Küpü Yönetim Paneli - Güvenli Oturum
      </footer>

    </div>
  );
}
