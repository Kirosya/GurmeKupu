import { NextResponse } from 'next/server';
import { getPushTokensDB } from '@/lib/redis';

export const runtime = 'edge';

export async function GET() {
  try {
    const tokens = await getPushTokensDB();
    return NextResponse.json({ 
      success: true, 
      tokenCount: tokens.length, 
      tokens,
      hasRedis: !!process.env.UPSTASH_REDIS_REST_URL,
      hasFirebaseKey: !!process.env.FIREBASE_PRIVATE_KEY
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
