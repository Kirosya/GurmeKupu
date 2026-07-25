'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Order } from '@/lib/types';
import { CheckCircle, Clock, MapPin, Phone, User, RefreshCw, PackageCheck, FileText, Bell } from 'lucide-react';

export const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<string>('');
  
  // Önceki sipariş sayısını takip eden ref (Yeni sipariş geldiğinde sesli uyarı için)
  const previousOrdersCountRef = useRef<number>(-1);

  const playNotificationSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      console.error('Audio play error:', e);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      const data = await res.json();
      if (data.success && data.orders) {
        const fetchedOrders: Order[] = data.orders;
        const currentPendingCount = fetchedOrders.filter(o => o.status === 'PENDING').length;

        // Eğer yeni aktif sipariş geldiyse sesli ve bildirimli uyarı ver!
        if (previousOrdersCountRef.current !== -1 && currentPendingCount > previousOrdersCountRef.current) {
          playNotificationSound();

          if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
            const latestOrder = fetchedOrders[0];
            new Notification('🔔 YENİ GURME SİPARİŞİ GELDI!', {
              body: `Sipariş #${latestOrder?.id}: ${latestOrder?.customerName} (${latestOrder?.totalPrice.toLocaleString('tr-TR')} ₺)`,
              icon: '/favicon.ico',
            });
          }
        }

        previousOrdersCountRef.current = currentPendingCount;
        setOrders(fetchedOrders);
        setLastRefreshed(new Date().toLocaleTimeString('tr-TR'));
      }
    } catch (err) {
      console.error('Fetch orders error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(); // Sayfa yüklendiğinde/yenilendiğinde anında veri çekilir
    const interval = setInterval(fetchOrders, 60000); // Ardından her 1 dakikada bir kontrol eder
    return () => clearInterval(interval);
  }, []);

  const handleMarkAsDelivered = async (orderId: string) => {
    setIsUpdating(orderId);
    try {
      const res = await fetch('/api/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status: 'DELIVERED' }),
      });
      const data = await res.json();
      if (data.success) {
        setOrders(prev =>
          prev.map(o => (o.id === orderId ? { ...o, status: 'DELIVERED' } : o))
        );
      }
    } catch (err) {
      console.error('Update status error:', err);
    } finally {
      setIsUpdating(null);
    }
  };

  // Siparişleri Aktif ve Teslim Edilmiş olarak 2 gruba ayırıyoruz:
  const activeOrders = orders.filter(o => o.status === 'PENDING');
  const deliveredOrders = orders.filter(o => o.status === 'DELIVERED');

  return (
    <div className="space-y-8">
      
      {/* Top Bar with Live Refresh */}
      <div className="flex items-center justify-between bg-stone-900/80 p-4 rounded-2xl border border-stone-800 backdrop-blur-md">
        <div>
          <h2 className="text-xl font-extrabold text-stone-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500 animate-pulse" /> Canlı Sipariş Takip Ekranı
          </h2>
          <p className="text-xs text-stone-400 mt-0.5">
            Otomatik Canlı Yenileme & Sesli Uyarı Sistemleri Aktif (Son Yenileme: {lastRefreshed || 'Yükleniyor...'})
          </p>
        </div>

        <button
          onClick={fetchOrders}
          disabled={isLoading}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 text-xs font-semibold hover:border-amber-500 hover:text-amber-400 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-amber-500' : ''}`} />
          <span>Yenile</span>
        </button>
      </div>

      {/* SECTION 1: AKTİF SİPARİŞLER (ÜSTTE & CANLI RENKLERDE) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-stone-200 uppercase tracking-wider flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            Aktif Siparişler ({activeOrders.length})
          </h3>
          <span className="text-xs text-amber-400 font-semibold bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            Öncelikli İşleme Alınacaklar
          </span>
        </div>

        {activeOrders.length === 0 ? (
          <div className="text-center py-10 bg-stone-900/40 border border-stone-800/80 rounded-2xl p-6">
            <PackageCheck className="w-10 h-10 text-emerald-500/60 mx-auto mb-2" />
            <p className="text-sm font-semibold text-stone-300">Bekleyen aktif sipariş yok</p>
            <p className="text-xs text-stone-500 mt-1">Yeni bir müşteri siparişi ulaştığında burada anında görünecektir.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeOrders.map(order => (
              <div
                key={order.id}
                className="rounded-2xl bg-stone-900 border-2 border-amber-500/60 shadow-2xl p-5 space-y-4 relative overflow-hidden transition-transform duration-200 hover:scale-[1.01]"
              >
                <div className="absolute top-0 right-0 bg-amber-500 text-stone-950 text-[11px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  BEKLEYEN SİPARİŞ
                </div>

                {/* Sipariş Başlığı */}
                <div className="flex items-center justify-between pr-24">
                  <div>
                    <span className="text-xs font-bold text-amber-400 font-mono">#{order.id}</span>
                    <h4 className="text-base font-extrabold text-stone-100 flex items-center gap-1.5 mt-0.5">
                      <User className="w-4 h-4 text-stone-400" /> {order.customerName}
                    </h4>
                  </div>
                </div>

                {/* İletişim & Adres */}
                <div className="space-y-1.5 text-xs text-stone-300 bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <div className="flex items-center gap-2 text-stone-200 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <a href={`tel:${order.customerPhone}`} className="hover:underline text-amber-400">
                      {order.customerPhone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-stone-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{order.customerAddress}</span>
                  </div>
                  {order.orderNote && (
                    <div className="flex items-start gap-2 text-amber-300/90 pt-1.5 border-t border-stone-800/80 italic">
                      <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>Not: {order.orderNote}</span>
                    </div>
                  )}
                </div>

                {/* Ürün Listesi */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Sipariş Ürünleri:
                  </span>
                  <div className="space-y-1">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs text-stone-200 bg-stone-950/60 px-2.5 py-1.5 rounded-lg border border-stone-800/60">
                        <span>{item.productName}</span>
                        <span className="font-bold text-amber-400">
                          {item.quantityValue} {item.unitType.toUpperCase()} ({item.itemTotalPrice.toLocaleString('tr-TR')} ₺)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Toplam Fiyat & Teslim Et Butonu */}
                <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-400 block">Toplam Tutar:</span>
                    <span className="text-lg font-black text-amber-400">
                      {order.totalPrice.toLocaleString('tr-TR')} ₺
                    </span>
                  </div>

                  <button
                    onClick={() => handleMarkAsDelivered(order.id)}
                    disabled={isUpdating === order.id}
                    className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-900/40 active:scale-95 transition-all"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{isUpdating === order.id ? 'Güncelleniyor...' : 'Teslim Edildi Yap'}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTION 2: TESLİM EDİLEN SİPARİŞLER (ALTTAN & SOLUK RENKLERDE) */}
      <div className="space-y-4 pt-6 border-t border-stone-800">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider">
            Teslim Edilmiş Siparişler ({deliveredOrders.length})
          </h3>
          <span className="text-xs text-stone-500 font-medium">Altta Soluk Arşiv Görünümü</span>
        </div>

        {deliveredOrders.length === 0 ? (
          <p className="text-xs text-stone-500 italic">Henüz teslim edilmiş sipariş geçmişi bulunmuyor.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliveredOrders.map(order => (
              <div
                key={order.id}
                className="rounded-2xl bg-stone-900/40 border border-stone-800/60 p-4 space-y-3 opacity-60 hover:opacity-90 transition-opacity duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-stone-500">#{order.id}</span>
                    <h4 className="text-xs font-bold text-stone-300">{order.customerName}</h4>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900">
                    ✓ TESLİM EDİLDİ
                  </span>
                </div>

                <div className="text-[11px] text-stone-400 space-y-1">
                  <p className="truncate">📍 {order.customerAddress}</p>
                  <p>📦 {order.items.map(i => `${i.productName} (${i.quantityValue}${i.unitType})`).join(', ')}</p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-stone-800/40 text-xs">
                  <span className="text-stone-500">
                    {new Date(order.createdAt).toLocaleDateString('tr-TR')} - {new Date(order.createdAt).toLocaleTimeString('tr-TR')}
                  </span>
                  <span className="font-bold text-stone-300">
                    {order.totalPrice.toLocaleString('tr-TR')} ₺
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
