import type { TProduct } from '../shared/types/product';

// Иконки
import trashIcon from '../assets/icons/inner-app/trash.svg';
import carIcon from '../assets/icons/inner-app/car.svg';

// Изображения продуктов
import product1 from '../assets/inner-app/carousel-products/product-1.jpg';
import product2 from '../assets/inner-app/carousel-products/product-2.jpg';
import product3 from '../assets/inner-app/carousel-products/product-3.jpg';
import product4 from '../assets/inner-app/carousel-products/product-4.jpg';
import product5 from '../assets/inner-app/carousel-products/product-5.jpg';
import product6 from '../assets/inner-app/carousel-products/product-6.jpg';
import product7 from '../assets/inner-app/carousel-products/product-7.jpg';

export const products: TProduct[] = [
  {
    id: 1,
    imageUrl: product1,
    title: 'PARATUSIN TABLET',
    oldPrice: 19.173,
    newPrice: 16.297,
    soldCount: '11.2 RB+',
    colorCircle: 'green',
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
        text: 'Paratusin — средство от гриппа...',
      },
      block2: {
        title: 'Komposisi:',
        text: 'paracetamol 500mg, guafinesin...',
      },
      block3: {
        title: 'Indikasi / Manfaat / Kegunaan:',
        text: 'для снятия симптомов простуды...',
      },
      block4: {
        title: 'Dosis:',
        text: '12 лет: 3 x в день по 1 таблетке...',
      },
    },
    notes: {
      title: 'Ditinjau oleh Apoteker K24Klik',
      text1: 'Масса действия до 2 месяцев с момента отправки...',
      text2: 'Ошибки написания/фото — вне ответственности K24Klik...'
    },
    reviews: {
      title: 'Ulasan Produk',
      review: '(5.0)',
      score: '24 rating · 24 ulasan',
      date: 'white 2019-07-24 13:51:19',
      textConfirm: 'Покупка подтверждена',
      author: 'Produk Asli',
      quantityPeople: '2 человека нашли отзыв полезным',
      btnTitle: 'Tulis Ulasan'
    },
    question: {
      title: 'Tanya Produk',
      text: {
        oneChunk: 'Tanya tentang',
        twoChunk: 'Paratusin Tablet 1 Strip Isi 10 Tablet',
        threeChunk: 'pada apoteker kami',
        forChunk: 'di sini',
      }
    },
    comment: {
      author: 'Yetty Lucida',
      date: '- 2018-09-04 06:05:54',
      text: 'Apakah paratusin bisa dibeli bebas di apotek tanpa resep dokter?',
      btnTitle: 'Komentar'
    }
  },
  {
    id: 2,
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
        text: 'Paratusin — средство от гриппа...',
      },
      block2: {
        title: 'Komposisi:',
        text: 'paracetamol 500mg, guafinesin...',
      },
      block3: {
        title: 'Indikasi / Manfaat / Kegunaan:',
        text: 'для снятия симптомов простуды...',
      },
      block4: {
        title: 'Dosis:',
        text: '12 лет: 3 x в день по 1 таблетке...',
      },
    },
    notes: {
      title: 'Ditinjau oleh Apoteker K24Klik',
      text1: 'Масса действия до 2 месяцев с момента отправки...',
      text2: 'Ошибки написания/фото — вне ответственности K24Klik...'
    },
    reviews: {
      title: 'Ulasan Produk',
      review: '(5.0)',
      score: '24 rating · 24 ulasan',
      date: 'white 2019-07-24 13:51:19',
      textConfirm: 'Покупка подтверждена',
      author: 'Produk Asli',
      quantityPeople: '2 человека нашли отзыв полезным',
      btnTitle: 'Tulis Ulasan'
    },
    question: {
      title: 'Tanya Produk',
      text: {
        oneChunk: 'Tanya tentang',
        twoChunk: 'Paratusin Tablet 1 Strip Isi 10 Tablet',
        threeChunk: 'pada apoteker kami',
        forChunk: 'di sini',
      }
    },
    comment: {
      author: 'Yetty Lucida',
      date: '- 2018-09-04 06:05:54',
      text: 'Apakah paratusin bisa dibeli bebas di apotek tanpa resep dokter?',
      btnTitle: 'Komentar'
    }
  },
  {
    id: 3,
    imageUrl: product3,
    title: 'BECOM ZET TABLET',
    oldPrice: 31.898,
    newPrice: 28.708,
    soldCount: '27.7 RB+',
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
        text: 'Paratusin — средство от гриппа...',
      },
      block2: {
        title: 'Komposisi:',
        text: 'paracetamol 500mg, guafinesin...',
      },
      block3: {
        title: 'Indikasi / Manfaat / Kegunaan:',
        text: 'для снятия симптомов простуды...',
      },
      block4: {
        title: 'Dosis:',
        text: '12 лет: 3 x в день по 1 таблетке...',
      },
    },
    notes: {
      title: 'Ditinjau oleh Apoteker K24Klik',
      text1: 'Масса действия до 2 месяцев с момента отправки...',
      text2: 'Ошибки написания/фото — вне ответственности K24Klik...'
    },
    reviews: {
      title: 'Ulasan Produk',
      review: '(5.0)',
      score: '24 rating · 24 ulasan',
      date: 'white 2019-07-24 13:51:19',
      textConfirm: 'Покупка подтверждена',
      author: 'Produk Asli',
      quantityPeople: '2 человека нашли отзыв полезным',
      btnTitle: 'Tulis Ulasan'
    },
    question: {
      title: 'Tanya Produk',
      text: {
        oneChunk: 'Tanya tentang',
        twoChunk: 'Paratusin Tablet 1 Strip Isi 10 Tablet',
        threeChunk: 'pada apoteker kami',
        forChunk: 'di sini',
      }
    },
    comment: {
      author: 'Yetty Lucida',
      date: '- 2018-09-04 06:05:54',
      text: 'Apakah paratusin bisa dibeli bebas di apotek tanpa resep dokter?',
      btnTitle: 'Komentar'
    }
  },
  {
    id: 4,
    imageUrl: product4,
    title: 'NEUROBION FORTE',
    oldPrice: 45.000,
    newPrice: 39.500,
    soldCount: '6.5 RB+',
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
        text: 'Paratusin — средство от гриппа...',
      },
      block2: {
        title: 'Komposisi:',
        text: 'paracetamol 500mg, guafinesin...',
      },
      block3: {
        title: 'Indikasi / Manfaat / Kegunaan:',
        text: 'для снятия симптомов простуды...',
      },
      block4: {
        title: 'Dosis:',
        text: '12 лет: 3 x в день по 1 таблетке...',
      },
    },
    notes: {
      title: 'Ditinjau oleh Apoteker K24Klik',
      text1: 'Масса действия до 2 месяцев с момента отправки...',
      text2: 'Ошибки написания/фото — вне ответственности K24Klik...'
    },
    reviews: {
      title: 'Ulasan Produk',
      review: '(5.0)',
      score: '24 rating · 24 ulasan',
      date: 'white 2019-07-24 13:51:19',
      textConfirm: 'Покупка подтверждена',
      author: 'Produk Asli',
      quantityPeople: '2 человека нашли отзыв полезным',
      btnTitle: 'Tulis Ulasan'
    },
    question: {
      title: 'Tanya Produk',
      text: {
        oneChunk: 'Tanya tentang',
        twoChunk: 'Paratusin Tablet 1 Strip Isi 10 Tablet',
        threeChunk: 'pada apoteker kami',
        forChunk: 'di sini',
      }
    },
    comment: {
      author: 'Yetty Lucida',
      date: '- 2018-09-04 06:05:54',
      text: 'Apakah paratusin bisa dibeli bebas di apotek tanpa resep dokter?',
      btnTitle: 'Komentar'
    }
  },
  {
    id: 5,
    imageUrl: product5,
    title: 'IMBOOST TABLET',
    oldPrice: 26.500,
    newPrice: 22.400,
    soldCount: '4.2 RB+',
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
        text: 'Paratusin — средство от гриппа...',
      },
      block2: {
        title: 'Komposisi:',
        text: 'paracetamol 500mg, guafinesin...',
      },
      block3: {
        title: 'Indikasi / Manfaat / Kegunaan:',
        text: 'для снятия симптомов простуды...',
      },
      block4: {
        title: 'Dosis:',
        text: '12 лет: 3 x в день по 1 таблетке...',
      },
    },
    notes: {
      title: 'Ditinjau oleh Apoteker K24Klik',
      text1: 'Масса действия до 2 месяцев с момента отправки...',
      text2: 'Ошибки написания/фото — вне ответственности K24Klik...'
    },
    reviews: {
      title: 'Ulasan Produk',
      review: '(5.0)',
      score: '24 rating · 24 ulasan',
      date: 'white 2019-07-24 13:51:19',
      textConfirm: 'Покупка подтверждена',
      author: 'Produk Asli',
      quantityPeople: '2 человека нашли отзыв полезным',
      btnTitle: 'Tulis Ulasan'
    },
    question: {
      title: 'Tanya Produk',
      text: {
        oneChunk: 'Tanya tentang',
        twoChunk: 'Paratusin Tablet 1 Strip Isi 10 Tablet',
        threeChunk: 'pada apoteker kami',
        forChunk: 'di sini',
      }
    },
    comment: {
      author: 'Yetty Lucida',
      date: '- 2018-09-04 06:05:54',
      text: 'Apakah paratusin bisa dibeli bebas di apotek tanpa resep dokter?',
      btnTitle: 'Komentar'
    }
  },
  {
    id: 6,
    imageUrl: product6,
    title: 'BIOLYSIN SYRUP',
    oldPrice: 15.900,
    newPrice: 13.200,
    soldCount: '8.1 RB+',
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
        text: 'Paratusin — средство от гриппа...',
      },
      block2: {
        title: 'Komposisi:',
        text: 'paracetamol 500mg, guafinesin...',
      },
      block3: {
        title: 'Indikasi / Manfaat / Kegunaan:',
        text: 'для снятия симптомов простуды...',
      },
      block4: {
        title: 'Dosis:',
        text: '12 лет: 3 x в день по 1 таблетке...',
      },
    },
    notes: {
      title: 'Ditinjau oleh Apoteker K24Klik',
      text1: 'Масса действия до 2 месяцев с момента отправки...',
      text2: 'Ошибки написания/фото — вне ответственности K24Klik...'
    },
    reviews: {
      title: 'Ulasan Produk',
      review: '(5.0)',
      score: '24 rating · 24 ulasan',
      date: 'white 2019-07-24 13:51:19',
      textConfirm: 'Покупка подтверждена',
      author: 'Produk Asli',
      quantityPeople: '2 человека нашли отзыв полезным',
      btnTitle: 'Tulis Ulasan'
    },
    question: {
      title: 'Tanya Produk',
      text: {
        oneChunk: 'Tanya tentang',
        twoChunk: 'Paratusin Tablet 1 Strip Isi 10 Tablet',
        threeChunk: 'pada apoteker kami',
        forChunk: 'di sini',
      }
    },
    comment: {
      author: 'Yetty Lucida',
      date: '- 2018-09-04 06:05:54',
      text: 'Apakah paratusin bisa dibeli bebas di apotek tanpa resep dokter?',
      btnTitle: 'Komentar'
    }
  },
  {
    id: 7,
    imageUrl: product7,
    title: 'WOODS COUGH SYRUP',
    oldPrice: 18.000,
    newPrice: 15.500,
    soldCount: '3.3 RB+',
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
        text: 'Paratusin — средство от гриппа...',
      },
      block2: {
        title: 'Komposisi:',
        text: 'paracetamol 500mg, guafinesin...',
      },
      block3: {
        title: 'Indikasi / Manfaat / Kegunaan:',
        text: 'для снятия симптомов простуды...',
      },
      block4: {
        title: 'Dosis:',
        text: '12 лет: 3 x в день по 1 таблетке...',
      },
    },
    notes: {
      title: 'Ditinjau oleh Apoteker K24Klik',
      text1: 'Масса действия до 2 месяцев с момента отправки...',
      text2: 'Ошибки написания/фото — вне ответственности K24Klik...'
    },
    reviews: {
      title: 'Ulasan Produk',
      review: '(5.0)',
      score: '24 rating · 24 ulasan',
      date: 'white 2019-07-24 13:51:19',
      textConfirm: 'Покупка подтверждена',
      author: 'Produk Asli',
      quantityPeople: '2 человека нашли отзыв полезным',
      btnTitle: 'Tulis Ulasan'
    },
    question: {
      title: 'Tanya Produk',
      text: {
        oneChunk: 'Tanya tentang',
        twoChunk: 'Paratusin Tablet 1 Strip Isi 10 Tablet',
        threeChunk: 'pada apoteker kami',
        forChunk: 'di sini',
      }
    },
    comment: {
      author: 'Yetty Lucida',
      date: '- 2018-09-04 06:05:54',
      text: 'Apakah paratusin bisa dibeli bebas di apotek tanpa resep dokter?',
      btnTitle: 'Komentar'
    }
  },
];