export type UnitType = 'kg' | 'g';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  pricePerKg: number; // TL cinsinden kilogram fiyatı
  image: string;
  isAvailable: boolean;
}

export interface OrderItem {
  productId: string;
  productName: string;
  pricePerKg: number;
  unitType: UnitType;
  quantityValue: number; // Müşterinin girdiği miktar (örn: 500g veya 1.5kg)
  weightInKg: number;    // Hesaplama için kg cinsinden ağırlık (örn: 0.5 veya 1.5)
  itemTotalPrice: number;
}

export type OrderStatus = 'PENDING' | 'DELIVERED' | 'CANCELLED';

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  orderNote: string;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface PushTokenRecord {
  token: string;
  deviceType?: string;
  registeredAt: string;
}
