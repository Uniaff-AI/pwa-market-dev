import { products } from '../../content/products';

export function findById(id: number) {
  return products.find((product) => product.id === id);
}