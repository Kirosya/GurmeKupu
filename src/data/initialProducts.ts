import { Product } from '../lib/types';

export const INITIAL_PRODUCTS: Product[] = [
  // ── SARMA ───────────────────────────────────────────────────────────────
  {
    id: 'prod-1',
    name: 'Gurme Yaprak Sarma',
    description: 'Taze asma yaprağına sarılmış, özenle hazırlanmış geleneksel yaprak sarması. 18–22 g / adet. Tencere paket.',
    category: 'Sarma Çeşitleri',
    pricePerKg: 350,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-2',
    name: 'Gurme Lahana Sarma',
    description: 'Taze lahana yaprağına sarılmış, kavrulmuş iç harçla hazırlanan geleneksel lahana sarması. 35 g / adet. Tencere paket.',
    category: 'Sarma Çeşitleri',
    pricePerKg: 320,
    image: 'https://images.unsplash.com/photo-1594966779836-7c00e1672322?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },

  // ── DOLMA ────────────────────────────────────────────────────────────────
  {
    id: 'prod-3',
    name: 'Gurme Patlıcan Dolma',
    description: 'Özenle seçilmiş patlıcanlara doldurulan, kavrulmuş iç harçla hazırlanan geleneksel lezzet. 40 g / adet. Tencere paket.',
    category: 'Dolma Çeşitleri',
    pricePerKg: 380,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-4',
    name: 'Gurme Biber Dolma',
    description: 'Yeşil biberlere özel iç harçla doldurulan, profesyonel mutfaklar için hazır sunum kalitesinde ürün. 25 g / adet. Tencere paket.',
    category: 'Dolma Çeşitleri',
    pricePerKg: 340,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },

  // ── İÇLİ KÖFTE & MANTI ──────────────────────────────────────────────────
  {
    id: 'prod-5',
    name: 'Gurme İçli Köfte',
    description: 'Özenle hazırlanmış geleneksel içli köfte. 250 adet / koli. Raf ömrü 12 ay (-18°C). Derin dondurucuda saklanır.',
    category: 'İçli Köfte & Mantı',
    pricePerKg: 420,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-6',
    name: 'Gurme Mantı',
    description: 'Özenle yoğrulmuş ince hamur içinde geleneksel etli mantı. Raf ömrü 12 ay (-18°C). Derin dondurucuda saklanır.',
    category: 'İçli Köfte & Mantı',
    pricePerKg: 480,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },

  // ── DİĞER ────────────────────────────────────────────────────────────────
  {
    id: 'prod-7',
    name: 'Gurme Çiğköfte',
    description: 'Vakumlu paketlerde taze hazırlanan, toplu tüketim için uygun çiğköfte. 5 kg / koli (10 poşet). Vakumlu poşet.',
    category: 'Diğer Ürünler',
    pricePerKg: 250,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
];
