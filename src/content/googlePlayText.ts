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
    downloads: "1 juta+",
    subTitleDownloads: '(jumlah unduhan)',
    urlAgeConstrant: ageConstrant,
    ageRating: "3+",
    btnSetupText: 'Unduh',
    btnOpenText: 'Buka Aplikasi',
    btnSetupingText: 'Mengunduh...',
    descriptionTitle: 'Deskripsi',
    description: `Butuh obat segera? K24Klik siap dengan pengiriman gratis dengan jaminan pengiriman dalam 24 menit.
Ketika tiba-tiba sakit dan Anda butuh obat darurat? K24Klik adalah solusinya!
Dapatkan PENGIRIMAN GRATIS dengan kode: KIRIMGRATISK24KLIK.`,
    lastUpdateTitle: 'Pembaruan terakhir',
    lastUpdateDate: '10 Jun 2025',
    category: "Kesehatan",
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
  scoreAppStats: '35,6 juta ulasan',
  reviews: [
    {
      id: 1,
      userTitle: "Ulasan Pengguna",
      singleReviewDate: "28 September 2024",
      singleReviewText: "ULASAN APLIKASI DENGAN REFERENSI KE PRODUK INOVATIF",
      likes: "959 orang menandai ulasan ini sebagai bermanfaat.",
      userLetter: 'P',
      userScore: 4
    },
    {
      id: 2,
      userTitle: "Ulasan Pengguna",
      singleReviewDate: "28 September 2024",
      singleReviewText: "ULASAN APLIKASI DENGAN REFERENSI KE PRODUK INOVATIF",
      likes: "959 orang menandai ulasan ini sebagai bermanfaat.",
      userLetter: 'P',
      userScore: 5
    },
    {
      id: 3,
      userTitle: "Ulasan Pengguna",
      singleReviewDate: "28 September 2024",
      singleReviewText: "ULASAN APLIKASI DENGAN REFERENSI KE PRODUK INOVATIF",
      likes: "959 orang menandai ulasan ini sebagai bermanfaat.",
      userLetter: 'P',
      userScore: 5
    },
  ] as TReview[],
  nav: {
    games: "Game",
    apps: "Aplikasi",
    books: "Buku",
    kids: "Anak-anak",
  },
};
