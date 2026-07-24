import { NextRequest, NextResponse } from 'next/server';
import { getProductsDB, saveProductsDB } from '@/lib/redis';
import { Product } from '@/lib/types';

export async function GET() {
  try {
    const products = await getProductsDB();
    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error('API /api/products GET error:', error);
    return NextResponse.json({ success: false, error: 'Ürünler yüklenirken hata oluştu' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { products } = body as { products: Product[] };

    if (!Array.isArray(products)) {
      return NextResponse.json({ success: false, error: 'Geçersiz ürün verisi' }, { status: 400 });
    }

    await saveProductsDB(products);
    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error('API /api/products PUT error:', error);
    return NextResponse.json({ success: false, error: 'Ürünler güncellenirken hata oluştu' }, { status: 500 });
  }
}
