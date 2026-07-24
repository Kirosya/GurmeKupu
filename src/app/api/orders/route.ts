import { NextRequest, NextResponse } from 'next/server';
import { getOrdersDB, createOrderDB, updateOrderStatusDB } from '@/lib/redis';
import { sendOrderNotifications } from '@/lib/notifications';
import { Order, OrderItem } from '@/lib/types';

export const runtime = 'edge';

export async function GET() {
  try {
    const orders = await getOrdersDB();
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error('API /api/orders GET error:', error);
    return NextResponse.json({ success: false, error: 'Siparişler yüklenemedi' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerName, customerPhone, customerAddress, orderNote, items } = body as {
      customerName: string;
      customerPhone: string;
      customerAddress: string;
      orderNote?: string;
      items: OrderItem[];
    };

    if (!customerName || !customerPhone || !customerAddress || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Lütfen tüm zorunlu müşteri bilgilerini ve en az 1 ürün giriniz.' },
        { status: 400 }
      );
    }

    const totalPrice = items.reduce((sum, item) => sum + (item.itemTotalPrice || 0), 0);
    const orderId = `GK-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder: Order = {
      id: orderId,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerAddress: customerAddress.trim(),
      orderNote: (orderNote || '').trim(),
      items,
      totalPrice,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    };

    const savedOrder = await createOrderDB(newOrder);

    try {
      await sendOrderNotifications(savedOrder);
    } catch (err) {
      console.error('Bildirim gönderim hatası:', err);
    }

    return NextResponse.json({
      success: true,
      message: 'Siparişiniz başarıyla alındı!',
      order: savedOrder,
    });
  } catch (error) {
    console.error('API /api/orders POST error:', error);
    return NextResponse.json({ success: false, error: 'Sipariş oluşturulurken bir hata meydana geldi' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, status } = body as { orderId: string; status: Order['status'] };

    if (!orderId || !status) {
      return NextResponse.json({ success: false, error: 'Sipariş ID ve durum bilgisi gereklidir' }, { status: 400 });
    }

    const updatedOrder = await updateOrderStatusDB(orderId, status);
    if (!updatedOrder) {
      return NextResponse.json({ success: false, error: 'Sipariş bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error('API /api/orders PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Sipariş durumu güncellenemedi' }, { status: 500 });
  }
}
