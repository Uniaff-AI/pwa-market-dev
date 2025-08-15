import { openDB, type IDBPDatabase } from 'idb';
import type { TProduct } from '@/shared/types/product.ts';

const DB_NAME = 'pwa-market-db';
const STORE_NAME = 'products-basket';

let dbPromise: Promise<IDBPDatabase> | undefined;

if (typeof window !== 'undefined' && 'indexedDB' in window) {
  dbPromise = openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
} else {
  console.warn('IndexedDB is not available (SSR or non-browser environment)');
}

function sanitizeProduct(product: TProduct): TProduct {
  return {
    ...product,
    imageUrl: typeof product.imageUrl === 'string'
      ? product.imageUrl
      : product.imageUrl?.src ?? '',

    nameAndPrice: {
      ...product.nameAndPrice,
      advantages: {
        advantage1: {
          ...product.nameAndPrice.advantages.advantage1,
          icon: typeof product.nameAndPrice.advantages.advantage1.icon === 'string' ? product.nameAndPrice.advantages.advantage1.icon : product.nameAndPrice.advantages.advantage1.icon?.src,
        },
        advantage2: {
          ...product.nameAndPrice.advantages.advantage2,
          icon: typeof product.nameAndPrice.advantages.advantage2.icon === 'string' ? product.nameAndPrice.advantages.advantage2.icon : product.nameAndPrice.advantages.advantage2.icon?.src,
        },
      },
    },
  };
}

export const addProduct = async (product: TProduct): Promise<void> => {
  if (!dbPromise) return;
  const db = await dbPromise;
  const cleanProduct = sanitizeProduct(product);
  await db.put(STORE_NAME, cleanProduct);
};

export const deleteProduct = async (id: number): Promise<void> => {
  if (!dbPromise) return;
  const db = await dbPromise;
  await db.delete(STORE_NAME, id);
};

export const getAllProducts = async (): Promise<TProduct[]> => {
  if (!dbPromise) return [];
  const db = await dbPromise;
  return await db.getAll(STORE_NAME);
};

export const getProductById = async (id: number): Promise<TProduct | undefined> => {
  if (!dbPromise) return undefined;
  const db = await dbPromise;
  return await db.get(STORE_NAME, id);
};

export const updateProductCount = async (id: number, count: number): Promise<void> => {
  if (!dbPromise) return;
  const db = await dbPromise;
  const product: TProduct = await db.get(STORE_NAME, id);
  if (product) {
    product.count = count;
    await db.put(STORE_NAME, product);
  }
};
