import { useEffect, useState } from 'react';
import { InnerAppText } from '@/content/innerAppText.ts';
import type { TProduct } from '@/shared/types/product.ts';
import { checkTypeImg } from '@/utils/checkTypeImg.ts';
import { findById } from '@/utils/products/findById.ts';
import { addProduct, deleteProduct, getProductById } from '@/db/productsDB.ts';

type FooterProductProps = {
  productId: number | undefined;
}

const FooterProduct = ({ productId }: FooterProductProps) => {
  const [isAdditingItem, setIsAdditingItem] = useState(false);

  const handleClickAddItemInBasket = async () => {
    if (!productId) return;

    const product = findById(productId);
    if (!product) return;

    const preparedProduct: TProduct = {
      ...product,
      count: product.count ?? 1, // обязательно: количество по умолчанию
      imageUrl: checkTypeImg(product.imageUrl),
    };

    if (!isAdditingItem) {
      await addProduct(preparedProduct);
      setIsAdditingItem(true);
    } else {
      await deleteProduct(productId);
      setIsAdditingItem(false);
    }
  };

  useEffect(() => {
    const checkProduct = async () => {
      if (!productId) return;
      const item = await getProductById(productId);
      setIsAdditingItem(!!item);
    };

    checkProduct();
  }, [productId]);

  if (!productId) return null;

  return (
    <div
      className="sticky bottom-0 pb-13 border-solid border-2 border-[#01A444] bg-[#008D49] text-white text-base rounded-t-xl pt-3 cursor-pointer font-bold w-full flex justify-center gap-5 text-center px-2">
      <button onClick={handleClickAddItemInBasket} className="addItem cursor-pointer border-solid border-1 border-white/50 px-4 py-2 rounded-xl">{isAdditingItem ? InnerAppText.mainApp.footer.btns.deleteTextBtn : InnerAppText.mainApp.footer.btns.addTextBtn}
      </button>
      <a className="border-solid border-1 border-white/50 px-4 py-2 rounded-xl" href="/inner-app/basket">{InnerAppText.mainApp.footer.btns.orderTextBtn}</a>
    </div>
  );
};

export default FooterProduct;