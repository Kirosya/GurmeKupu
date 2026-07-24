'use client';

import React, { useState, useEffect } from 'react';
import { Product, OrderItem } from '@/lib/types';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { OrderSuccessModal } from '@/components/OrderSuccessModal';
import { Sparkles, ChefHat, HeartHandshake, Utensils, ShoppingBag } from 'lucide-react';

export default function SiparisPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [successOrderId, setSuccessOrderId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.success && data.products) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error('Products load error:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Kategoriler
  const categories = ['Tümü', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'Tümü'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (newItem: OrderItem) => {
    setCartItems(prev => [...prev, newItem]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between selection:bg-amber-500 selection:text-stone-950">
      
      {/* Sticky Header */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-12 border border-amber-900/30 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Canlı Sipariş Olşturma Paneli
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-black text-stone-100 leading-tight">
              Gurme Lezzetleri <br />
              <span className="gold-gradient-text">Dilediğiniz Gramajda Seçin</span>
            </h2>

            <p className="text-sm text-stone-300 leading-relaxed font-medium">
              Aşağıdaki menüden dilediğiniz yemeklerin yanındaki Kg veya Gram kutusuna miktar girip sepetinize ekleyebilirsiniz. Siparişiniz anında mutfağımıza sesli bildirim olarak iletilir.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-stone-400">
              <span className="flex items-center gap-1.5 bg-stone-900/60 px-3 py-1.5 rounded-lg border border-stone-800">
                <ChefHat className="w-4 h-4 text-amber-500" /> Taze Günlük Pişirim
              </span>
              <span className="flex items-center gap-1.5 bg-stone-900/60 px-3 py-1.5 rounded-lg border border-stone-800">
                <HeartHandshake className="w-4 h-4 text-amber-500" /> Hassas Tartım & Paketleme
              </span>
            </div>
          </div>
        </div>

        {/* Kategori Filtre Tabları */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'gold-gradient-bg text-stone-950 shadow-lg shadow-amber-900/30'
                  : 'bg-stone-900 text-stone-400 hover:text-stone-100 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ürün Listesi */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm font-bold text-amber-400">Sipariş Kataloğu Yükleniyor...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/50 rounded-2xl border border-stone-800 p-8">
            <p className="text-stone-400 text-sm font-semibold">Bu kategoride henüz ürün bulunmuyor.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* En Alt Sepeti Gör Butonu */}
        <div className="pt-6 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full sm:w-auto min-w-[280px] px-8 py-4 rounded-2xl gold-gradient-bg text-stone-950 font-black text-base shadow-xl shadow-amber-900/40 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 border border-amber-400/40 group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>SEPETİ GÖR</span>
            <span className="bg-stone-950 text-amber-400 text-xs font-black px-3 py-1 rounded-full border border-amber-500/50 ml-1">
              {cartItems.length} Ürün
            </span>
          </button>
        </div>

      </main>

      {/* Modern Footer */}
      <footer className="border-t border-stone-800/80 bg-stone-950 py-8 mt-12 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-500" />
            <span className="font-extrabold text-stone-200">Gurme Küpü Sipariş Paneli © 2026</span>
          </div>
          <p className="text-stone-500">
            Tüm hakları saklıdır. Kg ve Gram bazlı sipariş ekranı.
          </p>
        </div>
      </footer>

      {/* Cart Side Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
        onOrderSuccess={(id) => setSuccessOrderId(id)}
      />

      {/* Order Success Modal */}
      <OrderSuccessModal
        orderId={successOrderId}
        onClose={() => setSuccessOrderId(null)}
      />

      {/* Floating Bottom Cart Bar for Mobile */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full py-3.5 px-6 rounded-2xl gold-gradient-bg text-stone-950 font-black text-sm shadow-2xl shadow-amber-950/80 border border-amber-400/50 flex items-center justify-between active:scale-95 transition-all"
          >
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5" />
              <span>SEPETİ GÖR</span>
            </div>
            <span className="bg-stone-950 text-amber-400 text-xs font-black px-3 py-1 rounded-full border border-amber-500">
              {cartItems.length} Ürün
            </span>
          </button>
        </div>
      )}

    </div>
  );
}
