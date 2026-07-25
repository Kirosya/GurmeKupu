'use client';

import React, { useState, useRef, useEffect } from 'react';
import { OrderItem } from '@/lib/types';
import { X, Trash2, ShoppingBag, Send, AlertCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onOrderSuccess: (orderId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
  onOrderSuccess,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sayfa scroll'unu kilitle / aç
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const totalPrice = items.reduce((sum, item) => sum + item.itemTotalPrice, 0);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (items.length === 0) {
      setErrorMessage('Sepetinizde ürün bulunmamaktadır.');
      return;
    }

    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      setErrorMessage('Lütfen İsim, Telefon ve Teslimat Adresi alanlarını doldurunuz.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerName, customerPhone, customerAddress, orderNote, items }),
      });

      const data = await res.json();

      if (data.success && data.order) {
        onClearCart();
        onOrderSuccess(data.order.id);
        onClose();
        setCustomerName('');
        setCustomerPhone('');
        setCustomerAddress('');
        setOrderNote('');
      } else {
        setErrorMessage(data.error || 'Sipariş oluşturulamadı.');
      }
    } catch {
      setErrorMessage('Ağ hatası oluştu, lütfen tekrar deneyiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        style={{ zIndex: 9998 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 9999 }}
        onClick={onClose}
      >
        <div
          className="w-full max-w-md bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          style={{ maxHeight: '88vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white leading-tight">Sipariş Sepetim</h2>
                <p className="text-xs text-amber-400 font-medium">Gurme Küpü</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Scrollable ürünler */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4">
            {/* Error */}
            {errorMessage && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-red-900/50 border border-red-700/50 text-red-300 text-xs mb-4">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Ürünler */}
            <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">
              Sepet ({items.length} ürün)
            </p>

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <ShoppingBag className="w-12 h-12 text-white/20" />
                <p className="text-sm text-white/40 font-medium">Sepetiniz boş</p>
              </div>
            ) : (
              <div className="space-y-2">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/8"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{item.productName}</p>
                      <p className="text-xs text-amber-400 font-medium mt-0.5">
                        {item.quantityValue} {item.unitType.toUpperCase()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-bold text-amber-400">
                        {item.itemTotalPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
                      </span>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white/30 hover:text-red-400 hover:bg-white/10 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer: Teslimat Bilgileri + Toplam + Sipariş Butonu */}
          {items.length > 0 && (
            <div className="px-5 py-4 border-t border-white/10 shrink-0 space-y-3">
              {/* Teslimat Bilgileri */}
              <p className="text-xs font-bold text-white/40 uppercase tracking-wider">
                Teslimat Bilgileri
              </p>
              <form id="order-form" onSubmit={handleSubmitOrder} className="space-y-2">
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ad Soyad"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Telefon Numarası"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <textarea
                  required
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Teslimat Adresi"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
                <textarea
                  rows={1}
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Sipariş Notu (opsiyonel)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </form>

              {/* Toplam + Buton */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm text-white/60 font-medium">Toplam</span>
                <span className="text-xl font-black text-amber-400">
                  {totalPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
                </span>
              </div>
              <button
                type="submit"
                form="order-form"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-black font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sipariş İletiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Siparişi Tamamla
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
