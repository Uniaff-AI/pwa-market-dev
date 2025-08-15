import React from 'react';
import { cn } from '@/lib/utils.ts';
import { colorsCircle } from '@/utils/colorsCircle.ts';
import { checkTypeImg } from '@/utils/checkTypeImg.ts';

type ProductCardProps = {
  id: number;
  imageUrl: string | ImageMetadata;
  title: string;
  oldPrice: number;
  newPrice: number;
  soldCount: string;
  colorCircle: string;
};

type ColorKey = 'blue' | 'green' | 'yellow';

export const ProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, title, oldPrice, newPrice, colorCircle, soldCount, }) => {
  const { color } = colorsCircle[colorCircle as ColorKey];

  return (
    <a href={`/inner-app/products/${id}`} className="relative h-[225px] border border-[#008d49] rounded-[10px] py-0.5 px-1 bg-white shadow-sm w-full flex flex-col">
      <div className="absolute -top-2 -right-2 bg-[#cea13a] text-white text-xs font-bold px-2 py-0.5 rounded-[4px_4px_0] shadow">
        Promo
      </div>

      <div className={cn(`absolute left-3 top-3 rounded-full size-4`, color)}/>

      <div className="flex justify-center items-center h-[96px] overflow-hidden mb-2">
        <img src={checkTypeImg(imageUrl)} alt={title} className="h-full object-contain" />
      </div>

      <div className="text-center text-sm line-clamp-2 h-[36px]">
        {title}
      </div>

      <div className="mt-5 text-center">
        <p className="text-[#e23841] text-[13px] line-through leading-3">Rp {oldPrice}</p>
        <p className="text-[#00a445] text-sm font-bold">Rp {newPrice}</p>
      </div>

      <div className="text-xs text-[#111a05] mt-auto text-right">{soldCount} Terjual</div>
    </a>
  );
};
