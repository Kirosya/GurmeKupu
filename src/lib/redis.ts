import { Redis } from '@upstash/redis';
import { Product, Order, PushTokenRecord } from './types';
import { INITIAL_PRODUCTS } from '../data/initialProducts';

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

let redisClient: Redis | null = null;

if (url && token && url.length > 0 && token.length > 0) {
  try {
    redisClient = new Redis({ url, token });
  } catch (err) {
    console.warn('Upstash Redis initialize error, using fallback in-memory store:', err);
  }
}

// Fallback In-Memory Storage for Development / Seamless Testing
const memoryProducts: Map<string, Product> = new Map(
  INITIAL_PRODUCTS.map(p => [p.id, p])
);
const memoryOrders: Map<string, Order> = new Map();
const memoryPushTokens: Set<string> = new Set();

// PRODUCTS DB ACTIONS
export async function getProductsDB(): Promise<Product[]> {
  if (redisClient) {
    try {
      const data = await redisClient.get<Product[]>('gurmekupu:products');
      if (data && Array.isArray(data) && data.length > 0) {
        return data;
      }
      // If empty in Upstash, seed initial products
      await redisClient.set('gurmekupu:products', INITIAL_PRODUCTS);
      return INITIAL_PRODUCTS;
    } catch (e) {
      console.error('Redis getProductsDB failed, using memory store fallback:', e);
    }
  }
  return Array.from(memoryProducts.values());
}

export async function saveProductsDB(products: Product[]): Promise<boolean> {
  if (redisClient) {
    try {
      await redisClient.set('gurmekupu:products', products);
      return true;
    } catch (e) {
      console.error('Redis saveProductsDB failed:', e);
    }
  }
  memoryProducts.clear();
  products.forEach(p => memoryProducts.set(p.id, p));
  return true;
}

// ORDERS DB ACTIONS
export async function getOrdersDB(): Promise<Order[]> {
  if (redisClient) {
    try {
      const data = await redisClient.get<Order[]>('gurmekupu:orders');
      if (data && Array.isArray(data)) {
        return data;
      }
      return [];
    } catch (e) {
      console.error('Redis getOrdersDB failed, using memory fallback:', e);
    }
  }
  return Array.from(memoryOrders.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function createOrderDB(order: Order): Promise<Order> {
  const allOrders = await getOrdersDB();
  const updatedOrders = [order, ...allOrders];

  if (redisClient) {
    try {
      await redisClient.set('gurmekupu:orders', updatedOrders);
    } catch (e) {
      console.error('Redis createOrderDB error:', e);
    }
  }
  memoryOrders.set(order.id, order);
  return order;
}

export async function updateOrderStatusDB(orderId: string, status: Order['status']): Promise<Order | null> {
  const allOrders = await getOrdersDB();
  const targetIndex = allOrders.findIndex(o => o.id === orderId);
  if (targetIndex === -1) return null;

  allOrders[targetIndex].status = status;
  allOrders[targetIndex].updatedAt = new Date().toISOString();

  if (redisClient) {
    try {
      await redisClient.set('gurmekupu:orders', allOrders);
    } catch (e) {
      console.error('Redis updateOrderStatusDB error:', e);
    }
  }
  memoryOrders.set(orderId, allOrders[targetIndex]);
  return allOrders[targetIndex];
}

// PUSH TOKENS DB ACTIONS
export async function registerPushTokenDB(tokenStr: string): Promise<boolean> {
  if (!tokenStr) return false;
  
  if (redisClient) {
    try {
      const tokens = (await redisClient.get<string[]>('gurmekupu:push_tokens')) || [];
      if (!tokens.includes(tokenStr)) {
        tokens.push(tokenStr);
        await redisClient.set('gurmekupu:push_tokens', tokens);
      }
      return true;
    } catch (e) {
      console.error('Redis registerPushTokenDB error:', e);
    }
  }
  memoryPushTokens.add(tokenStr);
  return true;
}

export async function getPushTokensDB(): Promise<string[]> {
  if (redisClient) {
    try {
      const tokens = await redisClient.get<string[]>('gurmekupu:push_tokens');
      return tokens || [];
    } catch (e) {
      console.error('Redis getPushTokensDB error:', e);
    }
  }
  return Array.from(memoryPushTokens.values());
}
