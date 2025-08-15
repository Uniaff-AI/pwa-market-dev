import type { TProduct } from '../shared/types/product';

// Иконки
import trashIcon from '../assets/icons/inner-app/trash.svg';
import carIcon from '../assets/icons/inner-app/car.svg';

// Изображения продуктов
import product2 from '../assets/inner-app/carousel-products/product-2.jpg';

export const mainProduct: TProduct = {
  id: 1,
  imageUrl: product2,
  title: 'ENERVON C TABLET',
  oldPrice: 42.093,
  newPrice: 37.883,
  soldCount: '1.3 RB+',
  colorCircle: 'blue',
  count: 1,
  rating: {
    soldCountTitle: 'Terjual'
  },
  nameAndPrice: {
    titleOther: '1 Strip Isi 10 Tablet (per Strip)',
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
      text: 'Enervon-C adalah suplemen vitamin yang mengandung Vitamin C dan Vitamin B kompleks untuk membantu meningkatkan daya tahan tubuh dan energi.',
    },
    block2: {
      title: 'Komposisi:',
      text: 'Vitamin C 500mg, Vitamin B1 50mg, Vitamin B2 25mg, Vitamin B6 10mg, Vitamin B12 5mcg, Niacinamide 50mg, Calcium Pantothenate 25mg.',
    },
    block3: {
      title: 'Indikasi / Manfaat / Kegunaan:',
      text: 'Membantu memenuhi kebutuhan vitamin C dan B kompleks, meningkatkan daya tahan tubuh, mengurangi kelelahan, dan membantu proses metabolisme.',
    },
    block4: {
      title: 'Dosis:',
      text: 'Dewasa: 1 tablet sehari setelah makan. Anak-anak 12-17 tahun: 1 tablet sehari setelah makan.',
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
      twoChunk: 'Enervon C Tablet 1 Strip Isi 10 Tablet',
      threeChunk: 'pada apoteker kami',
      forChunk: 'di sini',
    }
  },
  comment: {
    author: 'Yetty Lucida',
    date: '- 2018-09-04 06:05:54',
    text: 'Apakah Enervon C bisa dibeli bebas di apotek tanpa resep dokter?',
    btnTitle: 'Komentar'
  }
};

// Оставляем старый массив для совместимости, но используем только главный продукт
export const products: TProduct[] = [mainProduct];