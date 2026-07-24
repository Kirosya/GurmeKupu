'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sepet her açıldığında en üste kaydır
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg bg-stone-900 border border-stone-800 rounded-3xl text-stone-100 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900">
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
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-800/80 text-red-200 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                  Eklenen Ürünler ({items.length})
                </h3>
                {items.length === 0 ? (
                  <div className="text-center py-10 border border-dashed border-stone-800 rounded-2xl p-6">
                    <ShoppingBag className="w-12 h-12 text-stone-700 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-stone-400">Sepetiniz şu an boş</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-stone-200 truncate">{item.productName}</h4>
                          <span className="text-[11px] font-semibold text-amber-400">{item.quantityValue} {item.unitType.toUpperCase()}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-extrabold text-amber-400">{item.itemTotalPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺</span>
                          <button onClick={() => onRemoveItem(idx)} className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-stone-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <form id="order-form" onSubmit={handleSubmitOrder} className="space-y-4 pt-4 border-t border-stone-800">
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider">Bilgiler</h3>
                  <input type="text" required value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-stone-100 text-xs focus:outline-none focus:border-amber-500" placeholder="Ad Soyad" />
                  <input type="tel" required value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-stone-100 text-xs focus:outline-none focus:border-amber-500" placeholder="Telefon" />
                  <textarea required rows={2} value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500" placeholder="Adres" />
                  <textarea rows={2} value={orderNote} onChange={(e) => setOrderNote(e.target.value)} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500" placeholder="Sipariş Notu" />
                </form>
              )}
            </div>

            {/* Sticky Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-stone-800 bg-stone-900">
                <div className="flex items-center justify-between mb-4 text-stone-300">
                  <span className="text-xs font-semibold">Toplam:</span>
                  <span className="text-xl font-black text-amber-400">{totalPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺</span>
                </div>
                <button type="submit" form="order-form" disabled={isSubmitting} className="w-full py-3.5 rounded-xl gold-gradient-bg text-stone-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all">
                  {isSubmitting ? 'Sipariş İletiliyor...' : <> <Send className="w-4 h-4" /> Siparişi Tamamla </>}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
