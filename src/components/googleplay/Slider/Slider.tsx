import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import type {TSlider} from '@/shared/types/slider.types.ts';
import Dialog from "../Dialog/Dialog";
import styles from './Slider.module.css';

interface SliderProps {
  sliderItems: TSlider[]
}

const Slider = ({ sliderItems }: SliderProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="w-full max-w-[500px] overflow-hidden"
    >
      <CarouselContent>
        {sliderItems.map((item, index) => (
          <Dialog key={index}>
            <CarouselItem className={`basis-1/3 px-2`}>
              <img src={item.url.src} alt={`Slider Image ${index + 1}`} className={styles.sliderItem}/>
            </CarouselItem>
          </Dialog>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;