import type { TProduct } from '../shared/types/product';

export function calculatingFinalSum(products: TProduct[]) {
  let sum = 0;

  for (const product of products) {
    const total = product.count * product.newPrice;
    sum += +total.toFixed(3);
  }

  return +sum.toFixed(3);
}