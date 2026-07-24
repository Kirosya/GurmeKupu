import { Product } from '../lib/types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Gurme Yaprak Sarma',
    description: 'Taze asma yaprağına sarılmış, özenle hazırlanmış geleneksel yaprak sarması. Ambalaj: 10 kg / koli. Paket türü: Tencere. (18-22g / adet)',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 350,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-2',
    name: 'Gurme Lahana Sarma',
    description: 'Taze lahana yaprağına sarılmış, kavrulmuş iç harçla hazırlanan geleneksel lahana sarması. Ambalaj: 10 kg / koli. Paket türü: Tencere. (35g / adet)',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 320,
    image: 'https://images.unsplash.com/photo-1594966779836-7c00e1672322?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-3',
    name: 'Gurme Patlıcan Dolma',
    description: 'Özenle seçilmiş patlıcanlara doldurulan, kavrulmuş iç harçla hazırlanan geleneksel lezzet. Ambalaj: 10 kg / koli. Paket türü: Tencere. (40g / adet)',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 380,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-4',
    name: 'Gurme Biber Dolma',
    description: 'Yeşil biberlere özel iç harçla doldurulan, profesyonel mutfaklar için hazır sunum kalitesinde ürün. Ambalaj: 10 kg / koli. Paket türü: Tencere. (25g / adet)',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 340,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  },
  {
    id: 'prod-5',
    name: 'Gurme Çiğköfte',
    description: 'Vakumlu paketlerde taze hazırlanan, toplu tüketim için uygun çiğköfte. Ambalaj: 5 kg / koli (10 poşet). Paket türü: Vakumlu poşet.',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 250,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  }
];
