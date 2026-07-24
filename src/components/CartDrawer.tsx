'use client';

import React, { useState } from 'react';
import { OrderItem } from '@/lib/types';
import { X, Trash2, ShoppingBag, Send, AlertCircle, Phone, MapPin, User, FileText } from 'lucide-react';

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

  if (!isOpen) return null;

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
        body: JSON.stringify({
          customerName,
          customerPhone,
          customerAddress,
          orderNote,
          items,
        }),
      });

      const data = await res.json();

      if (data.success && data.order) {
        onClearCart();
        onOrderSuccess(data.order.id);
        onClose();
        // Formu temizle
        setCustomerName('');
        setCustomerPhone('');
        setCustomerAddress('');
        setOrderNote('');
      } else {
        setErrorMessage(data.error || 'Sipariş oluşturulamadı.');
      }
    } catch (err) {
      console.error('Cart submission error:', err);
      setErrorMessage('Ağ hatası oluştu, lütfen tekrar deneyiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-l border-amber-900/40 text-stone-100 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-stone-950">
                <ShoppingBag className="w-5 h-5 font-bold" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-stone-100">Sipariş Sepetim</h2>
                <p className="text-xs text-amber-400 font-medium">Gurme Küpü Özel Menü</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-950/80 border border-red-800/80 text-red-200 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Sepetteki Ürünler */}
            <div>
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                Eklenen Ürünler ({items.length})
              </h3>

              {items.length === 0 ? (
                <div className="text-center py-10 border border-dashed border-stone-800 rounded-2xl p-6">
                  <ShoppingBag className="w-12 h-12 text-stone-700 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-stone-400">Sepetiniz şu an boş</p>
                  <p className="text-xs text-stone-500 mt-1">Menüden kg veya gram seçerek ürün ekleyebilirsiniz.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between gap-3 group hover:border-amber-500/30 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-stone-200 truncate">
                          {item.productName}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                            {item.quantityValue} {item.unitType.toUpperCase()}
                          </span>
                          <span className="text-[11px] text-stone-400">
                            ({item.pricePerKg} ₺/kg)
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-extrabold text-amber-400 whitespace-nowrap">
                          {item.itemTotalPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
                        </span>
                        
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-stone-800 transition-colors"
                          title="Ürünü Çıkar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Müşteri Bilgileri Formu */}
            {items.length > 0 && (
              <form id="order-form" onSubmit={handleSubmitOrder} className="space-y-4 pt-4 border-t border-stone-800">
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Teslimat & İletişim Bilgileri
                </h3>

                {/* Ad Soyad */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5 mb-1">
                    <User className="w-3.5 h-3.5 text-amber-500" /> Adınız & Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-stone-100 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Örn: Ahmet Yılmaz"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5 mb-1">
                    <Phone className="w-3.5 h-3.5 text-amber-500" /> Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-stone-100 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Örn: 0555 123 4567"
                  />
                </div>

                {/* Adres */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" /> Açık Teslimat Adresi *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Mahalle, sokak, bina ve daire numarası..."
                  />
                </div>

                {/* Sipariş Notu */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5 mb-1">
                    <FileText className="w-3.5 h-3.5 text-amber-500" /> Özel Sipariş Notu (İsteğe Bağlı)
                  </label>
                  <textarea
                    rows={2}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Örn: Teslimat saat 17:00'de yapılsın, ekstra acı sos olsun..."
                  />
                </div>

              </form>
            )}

          </div>

          {/* Footer & Submit */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-800 bg-stone-950/80 space-y-4">
              <div className="flex items-center justify-between text-stone-300">
                <span className="text-xs font-semibold">Genel Toplam Tutar:</span>
                <span className="text-xl font-black text-amber-400">
                  {totalPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
                </span>
              </div>

              <button
                type="submit"
                form="order-form"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-900/30 hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all"
              >
                {isSubmitting ? (
                  <span>Sipariş İletiliyor...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Siparişi Tamamla ({totalPrice.toLocaleString('tr-TR')} ₺)
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
