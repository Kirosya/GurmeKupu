import { Product } from '../lib/types';

export const INITIAL_PRODUCTS: Product[] = [
  // ── SARMA ───────────────────────────────────────────────────────────────
  {
    id: 'prod-1',
    name: 'Gurme Yaprak Sarma',
    description: 'Taze asma yaprağına sarılmış, özenle hazırlanmış geleneksel yaprak sarması.\n**18–22 g / adet** · Tencere paket\n**10 kg / koli** · +4°C\'de **7 gün** taze',
    category: 'Sarma Çeşitleri',
    pricePerKg: 350,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-2',
    name: 'Gurme Lahana Sarma',
    description: 'Taze lahana yaprağına sarılmış, kavrulmuş iç harçla hazırlanan geleneksel lahana sarması.\n**35 g / adet** · Tencere paket\n**10 kg / koli** · +4°C\'de **7 gün** taze',
    category: 'Sarma Çeşitleri',
    pricePerKg: 320,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },

  // ── DOLMA ────────────────────────────────────────────────────────────────
  {
    id: 'prod-3',
    name: 'Gurme Patlıcan Dolma',
    description: 'Özenle seçilmiş patlıcanlara doldurulan, kavrulmuş iç harçla hazırlanan geleneksel lezzet.\n**40 g / adet** · Tencere paket\n**10 kg / koli** · Buzdolabında saklanır',
    category: 'Dolma Çeşitleri',
    pricePerKg: 380,
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-4',
    name: 'Gurme Biber Dolma',
    description: 'Yeşil biberlere özel iç harçla doldurulan, profesyonel mutfaklar için hazır sunum kalitesinde ürün.\n**25 g / adet** · Tencere paket\n**10 kg / koli** · Buzdolabında saklanır',
    category: 'Dolma Çeşitleri',
    pricePerKg: 340,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },

  // ── İÇLİ KÖFTE & MANTI ──────────────────────────────────────────────────
  {
    id: 'prod-5',
    name: 'Gurme İçli Köfte',
    description: 'Özenle hazırlanmış geleneksel içli köfte. Dış kabuğu çıtır, iç harcı lezzetli.\n**250 adet / koli** · **10 kg / koli**\nRaf ömrü **12 ay (-18°C)** · Tekrar dondurmayınız',
    category: 'İçli Köfte & Mantı',
    pricePerKg: 420,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-6',
    name: 'Gurme Mantı',
    description: 'Özenle yoğrulmuş ince hamur içinde geleneksel etli mantı.\n**10 kg / koli**\nRaf ömrü **12 ay (-18°C)** · Derin dondurucuda saklanır',
    category: 'İçli Köfte & Mantı',
    pricePerKg: 480,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },

  // ── DİĞER ────────────────────────────────────────────────────────────────
  {
    id: 'prod-7',
    name: 'Gurme Çiğköfte',
    description: 'Vakumlu paketlerde taze hazırlanan, toplu tüketim için uygun çiğköfte.\n**5 kg / koli** (10 poşet) · Vakumlu poşet\nBuzdolabında saklanır',
    category: 'Diğer Ürünler',
    pricePerKg: 250,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
];
