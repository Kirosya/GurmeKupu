import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

export async function GET() {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) {
      return NextResponse.json({ success: false, error: 'Redis URL or Token is missing' });
    }
    const redisClient = new Redis({ url, token });
    await redisClient.del('gurmekupu:products');
    return NextResponse.json({ success: true, message: 'Products database key cleared' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
