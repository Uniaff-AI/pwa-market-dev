import { useEffect, useMemo, useState } from 'react';
import type { TProduct } from '@/shared/types/product.ts';
import { BasketProductCard } from './BasketProductCard';
import { calculatingFinalSum } from '@/utils/calculatingFinalSum.ts';
import { InnerAppText } from '@/content/innerAppText.ts';
import { getAllProducts } from '@/db/productsDB.ts';

const BasketProducts = () => {
  const [basketProducts, setBasketProducts] = useState<TProduct[]>([]);

  // Загружаем продукты при монтировании
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setBasketProducts(products);
    };

    fetchProducts();
  }, []);

  // Пересчитываем сумму при изменении списка продуктов
  const finalSum = useMemo(() => calculatingFinalSum(basketProducts), [basketProducts]);

  if (basketProducts.length === 0) {
    return (
      <h1 className="my-5 text-center font-bold">{InnerAppText.basketPage.emptyTitle}</h1>
    );
  }

  return (
    <div>
      <div className="mb-5">
        {basketProducts.map(product => (
          <BasketProductCard
            key={product.id}
            product={product}
            setProducts={setBasketProducts}
          />
        ))}
      </div>

      <div>
        {InnerAppText.basketPage.totalTitle}{' '}
        <span className="font-bold">{InnerAppText.basketPage.totalCurrency}{finalSum}</span>
      </div>
    </div>
  );
};

export default BasketProducts;
