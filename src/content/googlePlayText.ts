import type {TSlider} from "../shared/types/slider.types";
import type {TScore} from "../shared/types/score.types";
import type { TReview } from '../shared/types/review';
import logoApp from '../assets/google-play/logo.webp';
import ageConstrant from '../assets/google-play/age-constrant.webp';
import slider1 from '../assets/google-play/slider/slider-1.webp';
import slider2 from '../assets/google-play/slider/slider-2.webp';
import slider3 from '../assets/google-play/slider/slider-3.webp';
import slider4 from '../assets/google-play/slider/slider-4.webp';
import slider5 from '../assets/google-play/slider/slider-5.webp';
import slider6 from '../assets/google-play/slider/slider-6.webp';

export const GooglePlayText = {
  header: {
    title: "Google Play",
  },
  app: {
    logo: logoApp,
    name: "K24KLIK: Beli Obat",
    author: "PT. K24 Klik Indonesia",
    downloads: "1 млн+",
    subTitleDownloads: '(количество скачиваний)',
    urlAgeConstrant: ageConstrant,
    ageRating: "3+",
    btnSetupText: 'Скачать',
    btnOpenText: 'Открыть приложение',
    btnSetupingText: 'Добавление...',
    descriptionTitle: 'Описание',
    description: `Нужны лекарства немедленно? K24Klik готов к бесплатной доставке с гарантией доставки в течение 24 минут.
Когда внезапно возникает боль и вам срочно нужно лекарство? K24Нажмите — это решение!
Получите БЕСПЛАТНУЮ ДОСТАВКУ, используя код: KIRIMGRATISK24KLIK.`,
    lastUpdateTitle: 'Последнее обновление',
    lastUpdateDate: '10 июн. 2025 г.',
    category: "Медицина",
  },
  sliderInfo: [
    {
      url: slider1,
    },
    {
      url: slider2,
    },
    {
      url: slider3,
    },
    {
      url: slider4,
    },
    {
      url: slider5,
    },
    {
      url: slider6,
    }
  ] as TSlider[],
  scoresInfo: {
    A: 100,
    B: 30,
    C: 40,
    D: 1,
    F: 0,
  } as TScore<number>,
  scoreAppStats: '35,6 млн отзывов',
  reviews: [
    {
      id: 1,
      userTitle: "Отзыв человека",
      singleReviewDate: "28 сентября 2024 г.",
      singleReviewText: "ОТЗЫВ О ПРИЛОЖЕНИИ С ОТСЫЛКАМИ К ИНОВАЦИОННОМУ ПРОДУКТУ",
      likes: "959 человек отметили этот отзыв как полезный.",
      userLetter: 'P',
      userScore: 4
    },
    {
      id: 2,
      userTitle: "Отзыв человека",
      singleReviewDate: "28 сентября 2024 г.",
      singleReviewText: "ОТЗЫВ О ПРИЛОЖЕНИИ С ОТСЫЛКАМИ К ИНОВАЦИОННОМУ ПРОДУКТУ",
      likes: "959 человек отметили этот отзыв как полезный.",
      userLetter: 'P',
      userScore: 5
    },
    {
      id: 3,
      userTitle: "Отзыв человека",
      singleReviewDate: "28 сентября 2024 г.",
      singleReviewText: "ОТЗЫВ О ПРИЛОЖЕНИИ С ОТСЫЛКАМИ К ИНОВАЦИОННОМУ ПРОДУКТУ",
      likes: "959 человек отметили этот отзыв как полезный.",
      userLetter: 'P',
      userScore: 5
    },
  ] as TReview[],
  nav: {
    games: "Игры",
    apps: "Приложения",
    books: "Книги",
    kids: "Детям",
  },
};
