import type { TProduct } from '../../../shared/types/product';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

import { CounterButton } from '../CounterButton/CounterButton';
import { InnerAppText } from '@/content/innerAppText.ts';
import { deleteProduct, getAllProducts, updateProductCount } from '@/db/productsDB.ts';

type BasketProductCardProps = {
  product: TProduct;
  setProducts: Dispatch<SetStateAction<TProduct[]>>;
};

export const BasketProductCard = ({
    product,
    setProducts,
  }: BasketProductCardProps) => {
  const [count, setCount] = useState(product.count);
  const [showConfirm, setShowConfirm] = useState(false);

  const productId = product.id;
  const discount = ((+product.oldPrice - +product.newPrice) / +product.oldPrice * 100).toFixed(0);

  useEffect(() => {
    setShowConfirm(count !== product.count);
  }, [count, product.count]);

  const updateProducts = useCallback(async () => {
    const products = await getAllProducts();
    setProducts(products);
  }, [setProducts]);

  const handleDelete = useCallback(async () => {
    await deleteProduct(productId);
    await updateProducts();
  }, [productId, updateProducts]);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => (prev > 1 ? prev - 1 : prev));

  const handleConfirm = async () => {
    await updateProductCount(productId, count);
    const products = await getAllProducts();
    setProducts(products);
  };

  return (
    <div className="mt-5 py-3 px-2 border border-[#444]/30 rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-4">
          {/* Изображение */}
          <div>
            <img
              src={typeof product.imageUrl === 'string' ? product.imageUrl : product.imageUrl.src}
              alt={`Image Product ${product.title}`}
              className="w-20 min-w-20"
            />
          </div>

          {/* Контент */}
          <div>
            <h2 className="font-bold">{product.title}</h2>

            <p className="flex items-center gap-1 max-[400px]:flex-col max-[400px]:items-start">
            <span className="bg-[#FDE3D2] text-[#E23842] text-base font-bold px-1 py-1 rounded-lg">
              -{discount}%
            </span>
              <span className="line-through text-[#E23842] text-sm">
              {InnerAppText.basketPage.totalCurrency}{product.oldPrice}
            </span>
            </p>

            {/* Кнопки количества */}
            <div className="flex items-center mt-3">
              <CounterButton onClick={handleDecrement}>
                <MinusIcon className="size-4 stroke-3" />
              </CounterButton>

              <span className="border border-[#444]/50 px-5 rounded-sm bg-[#f5f5f5] text-[#555] text-sm">
              {count}
            </span>

              <CounterButton onClick={handleIncrement} green>
                <PlusIcon className="size-4 stroke-3" />
              </CounterButton>
            </div>
          </div>
        </div>

        {/* Правая часть: цена и удалить */}
        <div className="flex flex-col gap-3 items-end mt-5">
          <p className="text-[#00a445] font-semibold text-right">{InnerAppText.basketPage.totalCurrency}{product.newPrice}</p>
          <button onClick={handleDelete} className="cursor-pointer">
            <TrashIcon className="size-5 text-[#E23842]" />
          </button>
        </div>
      </div>
      {showConfirm && (
        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className="text-[10px] font-bold border border-[#444]/30 rounded-xl py-1 px-2 mt-4 cursor-pointer"
          >
            {InnerAppText.basketPage.btnConfirmText}
          </button>
        </div>
      )}
    </div>
  );
};
