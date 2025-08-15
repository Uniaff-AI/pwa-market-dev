import React, { useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { mainProduct } from '../../../content/products';
import { addProduct, getAllProducts } from '../../../db/productsDB';

export const MainProduct = () => {
  useEffect(() => {
    // Автоматически добавляем главный продукт в корзину при загрузке
    const addMainProductToBasket = async () => {
      try {
        // Проверяем, есть ли уже продукт в корзине
        const existingProducts = await getAllProducts();
        const isProductInBasket = existingProducts.some(product => product.id === mainProduct.id);
        
        // Если продукта нет в корзине, добавляем его
        if (!isProductInBasket) {
          await addProduct(mainProduct);
          console.log('Главный продукт добавлен в корзину автоматически');
        }
      } catch (error) {
        console.error('Ошибка при добавлении продукта в корзину:', error);
      }
    };

    addMainProductToBasket();
  }, []);

  return (
    <div className="flex justify-center items-center py-4">
      <div className="max-w-[300px] w-full">
        <ProductCard {...mainProduct} />
      </div>
    </div>
  );
};
