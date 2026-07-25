'use client';

import React, { useState } from 'react';
import { Product, UnitType, OrderItem } from '@/lib/types';
import { Plus, Check, Scale, RefreshCw } from 'lucide-react';

// **metin** → bold, \n → ayrı satır olarak render eder
function BoldText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, lineIdx) => {
        const parts = line.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={lineIdx} className="text-xs text-stone-400 leading-relaxed">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="text-amber-400 font-bold">{part}</strong>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: OrderItem) => void;
  onUpdateCart: (item: OrderItem) => void;
  cartItem?: OrderItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onUpdateCart, cartItem }) => {
  const [unitType, setUnitType] = useState<UnitType>('kg');
  const [quantityInput, setQuantityInput] = useState<string>('1');

  const isInCart = !!cartItem;

  // Mevcut input, sepetteki kayıttan farklı mı?
  const hasChanged = isInCart && (
    parseFloat(quantityInput) !== cartItem!.quantityValue ||
    unitType !== cartItem!.unitType
  );

  // Sayısal miktar hesabı
  const rawNum = parseFloat(quantityInput) || 0;
  // kg cinsinden karşılık
  const weightInKg = unitType === 'kg' ? rawNum : rawNum / 1000;
  // Toplam Tutar
  const calculatedPrice = Math.max(0, weightInKg * product.pricePerKg);

  const handleAddToCart = () => {
    if (rawNum <= 0) return;

    const item: OrderItem = {
      productId: product.id,
      productName: product.name,
      pricePerKg: product.pricePerKg,
      unitType,
      quantityValue: rawNum,
      weightInKg,
      itemTotalPrice: calculatedPrice,
    };

    if (isInCart) {
      onUpdateCart(item);
    } else {
      onAddToCart(item);
    }
  };

  const handlePresetSelect = (presetKg: number, type: UnitType, valStr: string) => {
    setUnitType(type);
    setQuantityInput(valStr);
  };

  return (
    <div className={`group rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl ${!product.isAvailable ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
      
      {/* Ürün Görseli & Kategori */}
      <div>
        <div className="relative h-52 w-full overflow-hidden bg-stone-950">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
          
          <span className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>

          {!product.isAvailable && (
            <span className="absolute inset-0 m-auto w-max h-max bg-red-950/90 text-red-400 text-xs font-extrabold px-4 py-2 rounded-lg border border-red-800">
              TÜKENDİ / GEÇİCİ OLARAK YOK
            </span>
          )}
        </div>

        {/* Ürün Bilgisi */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
            <BoldText text={product.description} />
          </p>

          <div className="mt-4 flex items-baseline justify-between border-b border-stone-800/80 pb-3">
            <span className="text-xs text-stone-400 font-medium flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-amber-500" /> Birim Fiyat:
            </span>
            <span className="text-base font-extrabold text-amber-400">
              {product.pricePerKg.toLocaleString('tr-TR')} ₺ <span className="text-xs text-stone-400 font-normal">/ kg</span>
            </span>
          </div>

          {/* Miktar ve Birim Girdi Alanı */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-stone-300">
                Sipariş Miktarı:
              </label>
              
              {/* Kg / Gram Switch */}
              <div className="flex items-center bg-stone-950 p-1 rounded-lg border border-stone-800">
                <button
                  type="button"
                  onClick={() => {
                    setUnitType('kg');
                    if (unitType === 'g') setQuantityInput('1');
                  }}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${unitType === 'kg' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  Kg
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUnitType('g');
                    if (unitType === 'kg') setQuantityInput('500');
                  }}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${unitType === 'g' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  Gram
                </button>
              </div>
            </div>

            {/* Sayısal Input */}
            <div className="relative">
              <input
                type="number"
                step={unitType === 'kg' ? '0.1' : '50'}
                min={unitType === 'kg' ? '0.1' : '50'}
                value={quantityInput}
                onChange={(e) => setQuantityInput(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-100 font-bold focus:outline-none focus:border-amber-500 transition-colors text-sm"
                placeholder={unitType === 'kg' ? 'Örn: 1.5' : 'Örn: 500'}
              />
              <span className="absolute right-4 top-2.5 text-xs font-semibold text-stone-400 uppercase">
                {unitType}
              </span>
            </div>

            {/* Hızlı Seçim Hazır Butonları */}
            <div className="grid grid-cols-4 gap-1.5 mt-2">
              <button
                type="button"
                onClick={() => handlePresetSelect(0.25, 'g', '250')}
                className="py-1 px-1 bg-stone-950 hover:bg-stone-800 text-[11px] font-medium text-stone-300 rounded border border-stone-800 hover:border-amber-500/40 transition-colors"
              >
                250g
              </button>
              <button
                type="button"
                onClick={() => handlePresetSelect(0.5, 'g', '500')}
                className="py-1 px-1 bg-stone-950 hover:bg-stone-800 text-[11px] font-medium text-stone-300 rounded border border-stone-800 hover:border-amber-500/40 transition-colors"
              >
                500g
              </button>
              <button
                type="button"
                onClick={() => handlePresetSelect(1, 'kg', '1')}
                className="py-1 px-1 bg-stone-950 hover:bg-stone-800 text-[11px] font-medium text-stone-300 rounded border border-stone-800 hover:border-amber-500/40 transition-colors"
              >
                1 Kg
              </button>
              <button
                type="button"
                onClick={() => handlePresetSelect(2, 'kg', '2')}
                className="py-1 px-1 bg-stone-950 hover:bg-stone-800 text-[11px] font-medium text-stone-300 rounded border border-stone-800 hover:border-amber-500/40 transition-colors"
              >
                2 Kg
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tutar & Sepete Ekle Butonu */}
      <div className="p-5 pt-0 mt-2 border-t border-stone-800/50">
        <div className="flex items-center justify-between py-3">
          <span className="text-xs text-stone-400">Hesaplanan Tutar:</span>
          <span className="text-lg font-black text-amber-400">
            {calculatedPrice.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ₺
          </span>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={rawNum <= 0}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
            hasChanged
              ? 'bg-amber-500 text-stone-950 hover:bg-amber-400 active:scale-95'
              : isInCart
              ? 'bg-emerald-600 text-white'
              : 'gold-gradient-bg text-stone-950 shadow-lg shadow-amber-900/20 hover:brightness-110 active:scale-95'
          }`}
        >
          {hasChanged ? (
            <><RefreshCw className="w-4 h-4" /> Sepeti Güncelle</>
          ) : isInCart ? (
            <><Check className="w-4 h-4" /> Eklendi</>
          ) : (
            <><Plus className="w-4 h-4" /> Sepete Ekle</>
          )}
        </button>
      </div>

    </div>
  );
};
