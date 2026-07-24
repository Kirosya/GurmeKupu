// src/lib/fcm.ts
import { Order } from './types';

// Bu ayarlar Cloudflare Edge Runtime (Web Crypto API) ile tam uyumludur.
const FIREBASE_CLIENT_EMAIL = 'firebase-adminsdk-fbsvc@gurme-kupu.iam.gserviceaccount.com';
const FIREBASE_PROJECT_ID = 'gurme-kupu';

// Edge çalışma zamanı için özel PEM -> CryptoKey çevirici
async function importPrivateKey(pem: string) {
  const pemHeader = '-----BEGIN PRIVATE KEY-----';
  const pemFooter = '-----END PRIVATE KEY-----';
  const pemContents = pem
    .replace(pemHeader, '')
    .replace(pemFooter, '')
    .replace(/\s/g, '');
  
  const binaryDerString = atob(pemContents);
  const binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }

  return await crypto.subtle.importKey(
    'pkcs8',
    binaryDer.buffer,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: { name: 'SHA-256' },
    },
    false,
    ['sign']
  );
}

function base64UrlEncode(obj: any): string {
  const str = typeof obj === 'string' ? obj : JSON.stringify(obj);
  const uint8 = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < uint8.byteLength; i++) {
    binary += String.fromCharCode(uint8[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function getFcmAccessToken(privateKey: string): Promise<string> {
  const header = { alg: 'RS256', typ: 'JWT' };
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;
  
  const claim = {
    iss: FIREBASE_CLIENT_EMAIL,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    exp,
    iat,
  };

  const encodedHeader = base64UrlEncode(header);
  const encodedClaim = base64UrlEncode(claim);
  
  const key = await importPrivateKey(privateKey);
  
  const signatureBuffer = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(`${encodedHeader}.${encodedClaim}`)
  );
  
  let binarySig = '';
  const sigBytes = new Uint8Array(signatureBuffer);
  for (let i = 0; i < sigBytes.byteLength; i++) {
    binarySig += String.fromCharCode(sigBytes[i]);
  }
  const encodedSignature = btoa(binarySig)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const jwt = `${encodedHeader}.${encodedClaim}.${encodedSignature}`;

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });

  if (!response.ok) {
    throw new Error('FCM Access Token alınamadı: ' + await response.text());
  }

  const data = await response.json() as { access_token: string };
  return data.access_token;
}

export async function sendFcmNotification(token: string, title: string, body: string, privateKey: string) {
  try {
    const accessToken = await getFcmAccessToken(privateKey);
    
    const message = {
      message: {
        token,
        notification: {
          title,
          body,
        },
        android: {
          priority: 'high',
          notification: {
            sound: 'default',
            channel_id: 'default'
          }
        }
      }
    };

    const res = await fetch(`https://fcm.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/messages:send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (!res.ok) {
      console.error('FCM Gönderim Hatası:', await res.text());
    } else {
      console.log('FCM Bildirimi Başarıyla Gönderildi:', token);
    }
  } catch (error) {
    console.error('FCM sendFcmNotification Error:', error);
  }
}
