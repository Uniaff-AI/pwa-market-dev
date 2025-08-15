import type { TProduct } from '../shared/types/product';

// Иконки
import trashIcon from '../assets/icons/inner-app/trash.svg';
import carIcon from '../assets/icons/inner-app/car.svg';

// Изображения продуктов
import product2 from '../assets/inner-app/carousel-products/product-2.jpg';

export const mainProduct: TProduct = {
  id: 1,
  imageUrl: product2,
  title: 'DIACLOSE',
  oldPrice: 1695652,
  newPrice: 390000,
  soldCount: '13 unit tersisa',
  colorCircle: 'blue',
  count: 1,
  rating: {
    soldCountTitle: 'Terjual'
  },
  nameAndPrice: {
    titleOther: 'Suplemen Kesehatan Mata (per Botol)',
    subPrice: 'Rp ',
    advantages: {
      advantage1: {
        title: '100% Obat Asli',
        icon: trashIcon
      },
      advantage2: {
        title: 'Stock Tersedia',
        icon: carIcon
      }
    },
  },
  description: {
    block1: {
      title: 'Deskripsi:',
      text: 'Diaclose adalah suplemen yang dirancang khusus untuk menjaga kesehatan mata dan meningkatkan penglihatan yang optimal.',
    },
    block2: {
      title: 'Komposisi:',
      text: 'Lutein 10mg, Zeaxanthin 2mg, Vitamin A 5000IU, Vitamin C 100mg, Vitamin E 30IU, Zinc 15mg, Selenium 50mcg.',
    },
    block3: {
      title: 'Indikasi / Manfaat / Kegunaan:',
      text: 'Membantu menjaga kesehatan mata, mengurangi risiko degenerasi makula, meningkatkan ketajaman penglihatan, dan melindungi mata dari radikal bebas.',
    },
    block4: {
      title: 'Dosis:',
      text: 'Dewasa: 1 kapsul sehari setelah makan. Konsultasikan dengan dokter sebelum penggunaan.',
    },
  },
  notes: {
    title: 'Ditinjau oleh Apoteker K24Klik',
    text1: 'Masa berlaku hingga 2 bulan dari tanggal pengiriman. Simpan di tempat kering dan sejuk.',
    text2: 'Kesalahan penulisan/foto — bukan tanggung jawab K24Klik. Harga dapat berubah sewaktu-waktu.'
  },
  reviews: {
    title: 'Ulasan Produk',
    review: '(5.0)',
    score: '24 rating · 24 ulasan',
    date: 'white 2019-07-24 13:51:19',
    textConfirm: 'Pembelian dikonfirmasi',
    author: 'Produk Asli',
    quantityPeople: '2 orang menemukan ulasan ini bermanfaat',
    btnTitle: 'Tulis Ulasan'
  },
  question: {
    title: 'Tanya Produk',
    text: {
      oneChunk: 'Tanya tentang',
      twoChunk: 'Diaclose Suplemen Kesehatan Mata',
      threeChunk: 'pada apoteker kami',
      forChunk: 'di sini',
    }
  },
  comment: {
    author: 'Yetty Lucida',
    date: '- 2018-09-04 06:05:54',
    text: 'Apakah Diaclose bisa dibeli bebas di apotek tanpa resep dokter?',
    btnTitle: 'Komentar'
  }
};

// Оставляем старый массив для совместимости, но используем только главный продукт
export const products: TProduct[] = [mainProduct];