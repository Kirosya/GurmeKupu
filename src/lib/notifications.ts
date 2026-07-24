import { Order } from './types';
import { getPushTokensDB } from './redis';

/**
 * Yeni sipariş geldiğinde yöneticinin telefonuna ve Telegram hesabına anlık bildirim gönderir.
 */
export async function sendOrderNotifications(order: Order) {
  const formattedItems = order.items
    .map(
      item =>
        `• ${item.productName}: ${item.quantityValue} ${item.unitType.toUpperCase()} (${item.itemTotalPrice.toLocaleString('tr-TR')} ₺)`
    )
    .join('\n');

  const notificationTitle = `🔔 YENİ SİPARİŞ ALINDI! (#${order.id})`;
  const notificationBody = `${order.customerName} - ${order.totalPrice.toLocaleString('tr-TR')} ₺\nTeslimat: ${order.customerAddress.substring(0, 45)}...`;

  // 1. Expo Push Notifications Gönderimi
  try {
    const tokens = await getPushTokensDB();
    if (tokens && tokens.length > 0) {
      const messages = tokens.map(token => ({
        to: token,
        sound: 'default',
        priority: 'high',
        title: notificationTitle,
        body: notificationBody,
        data: { orderId: order.id, customerName: order.customerName, totalPrice: order.totalPrice },
      }));

      await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messages),
      });
      console.log(`[Push Notification] ${tokens.length} bildirim token'ına başarıyla iletildi.`);
    }
  } catch (err) {
    console.error('Expo Push Notification gönderim hatası:', err);
  }

  // 2. Telegram Bot Entegrasyonu (Yedek Bildirim Katmanı)
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    try {
      const telegramMessage = `
🍲 *GURME KÜPÜ - YENİ SİPARİŞ* (#${order.id})

👤 *Müşteri:* ${order.customerName}
📞 *Telefon:* ${order.customerPhone}
📍 *Adres:* ${order.customerAddress}
${order.orderNote ? `📝 *Sipariş Notu:* ${order.orderNote}\n` : ''}
📦 *Sipariş İçeriği:*
${formattedItems}

💰 *Toplam Tutar:* *${order.totalPrice.toLocaleString('tr-TR')} ₺*
⏰ *Sipariş Zamanı:* ${new Date(order.createdAt).toLocaleString('tr-TR')}
      `.trim();

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      });
      console.log('[Telegram Notification] Telegram kanalına mesaj iletildi.');
    } catch (err) {
      console.error('Telegram notification error:', err);
    }
  }
}
