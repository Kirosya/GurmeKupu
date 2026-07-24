'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Star, Home, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0, onOpenCart }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-amber-900/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-50">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex flex-shrink-0 items-center justify-center group-hover:scale-105 transition-transform">
            <img
              src="/logo.png"
              alt="GK"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight font-sans text-stone-100 flex items-center gap-1 sm:gap-2">
              GURME <span className="gold-gradient-text">KÜPÜ</span>
            </h1>
            <p className="text-[0.65rem] sm:text-xs text-amber-400/80 font-medium whitespace-nowrap">
              Profesyonel Gıda Çözümleri <span className="hidden sm:inline">· Ankara</span>
            </p>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-900/80 p-1.5 rounded-2xl border border-stone-800 absolute left-1/2 -translate-x-1/2">
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

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 z-50">
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl gold-gradient-bg text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-900/30 hover:brightness-110 active:scale-95 transition-all"
              id="open-cart-button"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Sepetim</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-stone-950 text-amber-400 text-[10px] sm:text-xs font-extrabold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border border-amber-500">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-950/95 backdrop-blur-xl border-b border-stone-800 shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${
                pathname === '/'
                  ? 'gold-gradient-bg text-stone-950 shadow'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Home className="w-4 h-4" /> Ana Sayfa
            </Link>

            <Link
              href="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${
                pathname === '/menu'
                  ? 'gold-gradient-bg text-stone-950 shadow'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <ShoppingBag className="w-4 h-4" /> Ürün Kataloğu
            </Link>

            <Link
              href="/markalarimiz"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${
                pathname === '/markalarimiz'
                  ? 'gold-gradient-bg text-stone-950 shadow'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Star className="w-4 h-4" /> Markalarımız
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
