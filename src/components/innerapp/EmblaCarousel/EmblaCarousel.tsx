import { Carousel,CarouselContent, CarouselItem } from '../../ui/carousel';
import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../../content/products';

export const EmblaCarousel = () => {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{ dragFree: true }}
        className="w-full"
      >
        <CarouselContent className="ml-0 py-2">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="max-w-[165px] min-w-[112px] w-[30vw] shrink-0"
            >
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};