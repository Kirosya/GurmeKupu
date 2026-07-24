'use client';

import React from 'react';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

interface OrderSuccessModalProps {
  orderId: string | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ orderId, onClose }) => {
  if (!orderId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-stone-900 border border-amber-500/40 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="w-20 h-20 bg-emerald-950/80 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-900/30">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
        </div>

        <div>
          <h2 className="text-2xl font-black text-stone-100">Siparişiniz Alındı!</h2>
          <p className="text-xs text-amber-400 font-semibold mt-1">
            Gurme Küpü siparişiniz başarıyla mutfağımıza iletildi.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-left space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-stone-400">Sipariş Numarası:</span>
            <span className="font-extrabold text-amber-400 font-mono text-sm">#{orderId}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-stone-400">Durum:</span>
            <span className="font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
              Hazırlanıyor / Beklemede
            </span>
          </div>
        </div>

        <p className="text-xs text-stone-400 leading-relaxed">
          Sipariş detaylarınız işletme yöneticimizin telefonuna anlık sesli bildirim olarak iletilmiştir. En kısa sürede siparişiniz hazırlanıp adresinize teslim edilecektir.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 hover:brightness-110 active:scale-95 transition-all"
        >
          <span>Alışverişe Devam Et</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
