import { Order } from './types';
import { getPushTokensDB } from './redis';
import { sendFcmNotification } from './fcm';

export async function sendOrderNotifications(order: Order) {
  try {
    const tokens = await getPushTokensDB();
    const itemsSummary = order.items
      .map(item => `${item.quantityValue}${item.unitType.toLowerCase()} ${item.productName}`)
      .join(', ');
      
    const title = `YENİ SİPARİŞ: ${order.customerName} - ${order.totalPrice.toLocaleString('tr-TR')}₺`;
    const body = itemsSummary;
    
    console.log(`Bildirim gönderiliyor... Toplam cihaz: ${tokens?.length || 0}`);
    
    const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

    if (tokens && tokens.length > 0) {
      for (const token of tokens) {
        // Doğrudan Native FCM Bildirimi Gönderimi
        if (firebasePrivateKey && token.length > 22 && !token.startsWith('web-browser')) {
          await sendFcmNotification(token, title, body, firebasePrivateKey.replace(/\\n/g, '\n'));
        }
      }
    }

    // TELEGRAM BİLDİRİMİ
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    
    if (BOT_TOKEN && CHAT_ID) {
      const formattedItems = order.items
        .map(
          item =>
            `• ${item.productName}: ${item.quantityValue} ${item.unitType.toUpperCase()} (${item.itemTotalPrice.toLocaleString('tr-TR')} ₺)`
        )
        .join('\n');

      const message = `*YENİ SİPARİŞ*\n\n👤 ${order.customerName}\n📱 ${order.customerPhone}\n📍 ${order.customerAddress}\n\n📝 Not: ${order.orderNote || 'Yok'}\n\n🛍️ *Ürünler:*\n${formattedItems}\n\n💰 *Toplam:* ${order.totalPrice.toLocaleString('tr-TR')} ₺`;
      
      const tgUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      await fetch(tgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      }).catch(err => console.error('Telegram hata:', err));
    }

  } catch (error) {
    console.error('Bildirim gönderim hatası:', error);
  }
}
