'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Utensils, ShieldCheck, Home, ChefHat, Star } from 'lucide-react';

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0, onOpenCart }) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-amber-900/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center shadow-lg shadow-amber-900/40 group-hover:scale-105 transition-transform">
            <Utensils className="w-6 h-6 text-stone-950 font-bold" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight font-sans text-stone-100 flex items-center gap-2">
              GURME <span className="gold-gradient-text">KÜPÜ</span>
            </h1>
            <p className="text-xs text-amber-400/80 font-medium">
              Catering & Kiloyla Ev Lezzetleri
            </p>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-900/80 p-1.5 rounded-2xl border border-stone-800">
          <Link
            href="/"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              pathname === '/'
                ? 'gold-gradient-bg text-stone-950 shadow'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800'
            }`}
          >
            <Home className="w-3.5 h-3.5" /> Ana Sayfa
          </Link>
          
          <Link
            href="/menu"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              pathname === '/menu'
                ? 'gold-gradient-bg text-stone-950 shadow'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800'
            }`}
          >
            Ürün Kataloğu
          </Link>

          <Link
            href="/markalarimiz"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              pathname === '/markalarimiz'
                ? 'gold-gradient-bg text-stone-950 shadow'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800'
            }`}
          >
            <Star className="w-3.5 h-3.5" /> Markalarımız
          </Link>


        </nav>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          


          {/* Cart Button (Only show if handler is passed or on /siparis) */}
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl gold-gradient-bg text-stone-950 font-bold text-sm shadow-lg shadow-amber-900/30 hover:brightness-110 active:scale-95 transition-all"
              id="open-cart-button"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Sepetim</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-stone-950 text-amber-400 text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-amber-500">
                  {cartCount}
                </span>
              )}
            </button>
          )}

        </div>

      </div>
    </header>
  );
};
