import { Product } from '../lib/types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Zeytinyağlı Ev Yapımı Yaprak Sarma',
    description: 'Özel taze asma yaprağı, bol fıstıklı ve kuş üzümlü aromatik zeytinyağlı iç harç ile geleneksel sarma.',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 420,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-2',
    name: 'Geleneksel Kuzu Tandır',
    description: 'Ağır ateşte 8 saat fırınlanmış, lokum kıvamında taze kuzu eti ve yanında özel et suyu sosu ile.',
    category: 'Gurme Ana Yemekler',
    pricePerKg: 1250,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-3',
    name: 'Taze Köz Patlıcanlı Hünkar Beğendi',
    description: 'Odun ateşinde közlenmiş patlıcan, tereyağlı beşamelli beğendi yatağında özel dana saray kavurma.',
    category: 'Gurme Ana Yemekler',
    pricePerKg: 890,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-4',
    name: 'El Açması Tereyağlı Su Böreği',
    description: 'Köy yumurtası ile hazırlanmış incecik yufkalar ve bol Erzincan tulum peyniri dolgusu ile fırınlanmış.',
    category: 'Börek & Mantı',
    pricePerKg: 380,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-5',
    name: 'Kayseri Usulü Çıtır Ev Mantısı',
    description: 'Birebir el sıkımı minik Kayseri mantısı. Yanında katıksız süzme yoğurt ve tereyağlı pul biber sosu.',
    category: 'Börek & Mantı',
    pricePerKg: 480,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-6',
    name: 'Antep Fıstıklı Ev Baklavası',
    description: 'Saf yayık tereyağı ve Boz fıstık ile hazırlanmış 40 kat incecik yufkalı çıtır ev baklavası.',
    category: 'Tatlılar',
    pricePerKg: 750,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-7',
    name: 'Hatay Usulü Cevizli Muhammara & Humus',
    description: 'Taş değirmen tahini, köz biber ve bol ceviz içi ile hazırlanan meze tabağı ikramlığı.',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 360,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-8',
    name: 'Cevizli & Kıymalı Taş Fırın İçli Köfte',
    description: 'İncecik bulgur dış kabuk içinde bol cevizli, tereyağlı kavrulmuş kıyma dolgusu (Adet/Kg satışı).',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 520,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  }
];
