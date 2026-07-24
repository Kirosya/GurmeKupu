'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0, onOpenCart }) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-900 border-b border-stone-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Gurme Küpü"
            className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-800/80 p-1.5 rounded-2xl border border-stone-700">
          <Link
            href="/"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              pathname === '/'
                ? 'bg-[#B84C0C] text-white shadow'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-700'
            }`}
          >
            Ana Sayfa
          </Link>

          <Link
            href="/menu"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              pathname === '/menu'
                ? 'bg-[#B84C0C] text-white shadow'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-700'
            }`}
          >
            Ürün Kataloğu
          </Link>

          <Link
            href="/markalarimiz"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              pathname === '/markalarimiz'
                ? 'bg-[#B84C0C] text-white shadow'
                : 'text-stone-300 hover:text-stone-100 hover:bg-stone-700'
            }`}
          >
            Markalarımız
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#B84C0C] text-white font-bold text-sm shadow-lg hover:bg-[#9a3d08] active:scale-95 transition-all"
              id="open-cart-button"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Sepetim</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-white text-[#B84C0C] text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
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
