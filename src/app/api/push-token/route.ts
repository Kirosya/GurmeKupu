import { NextRequest, NextResponse } from 'next/server';
import { registerPushTokenDB } from '@/lib/redis';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token } = body as { token: string };

    if (!token) {
      return NextResponse.json({ success: false, error: 'Token gereklidir' }, { status: 400 });
    }

    await registerPushTokenDB(token);
    return NextResponse.json({ success: true, message: 'Mobil bildirim token kaydı başarılı.' });
  } catch (error) {
    console.error('API /api/push-token POST error:', error);
    return NextResponse.json({ success: false, error: 'Token kaydedilemedi' }, { status: 500 });
  }
}
