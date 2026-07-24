'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/80 backdrop-blur-md transition-opacity">
      <div className="relative flex items-center justify-center">
        {/* Animated Glow / Pulsing Ring */}
        <div className="w-20 h-20 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin" />
        
        {/* Center Logo Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo.png" alt="Yükleniyor..." className="w-8 h-8 object-contain animate-pulse" />
        </div>
      </div>
      <p className="mt-4 text-xs font-semibold tracking-wider text-amber-400/90 uppercase animate-pulse">
        Gurme Küpü Yükleniyor...
      </p>
    </div>
  );
}
