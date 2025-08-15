export const appConfig = {
  // Главный продукт
  mainProduct: {
    id: 1,
    title: 'DIACLOSE',
    oldPrice: 1695652,
    newPrice: 390000,
    soldCount: '13 unit tersisa',
    rating: 5.0,
    reviewCount: 24,
    imageUrl: '/src/assets/inner-app/carousel-products/product-2.jpg',
    
    // Описание продукта
    description: {
      short: 'Suplemen untuk kesehatan mata dan penglihatan yang optimal',
      full: 'Diaclose adalah suplemen yang dirancang khusus untuk menjaga kesehatan mata dan meningkatkan penglihatan yang optimal.',
    },
    
    // Состав
    composition: 'Lutein 10mg, Zeaxanthin 2mg, Vitamin A 5000IU, Vitamin C 100mg, Vitamin E 30IU, Zinc 15mg, Selenium 50mcg.',
    
    // Показания
    indications: 'Membantu menjaga kesehatan mata, mengurangi risiko degenerasi makula, meningkatkan ketajaman penglihatan, dan melindungi mata dari radikal bebas.',
    
    // Дозировка
    dosage: 'Dewasa: 1 kapsul sehari setelah makan. Konsultasikan dengan dokter sebelum penggunaan.',
  },

  // Отзывы (легко изменяемые)
  reviews: [
    {
      id: 1,
      author: 'Yetty Lucida',
      rating: 5,
      date: '2024-01-15',
      text: 'Produk sangat bagus, penglihatan menjadi lebih jelas dan tajam!',
      verified: true,
      helpful: 15,
      avatar: '/src/assets/avatars/avatar-1.jpg', // Путь к аватарке
      avatarInitials: 'YL' // Инициалы для fallback
    },
    {
      id: 2,
      author: 'Budi Santoso',
      rating: 5,
      date: '2024-01-10',
      text: 'Diaclose selalu jadi pilihan utama untuk kesehatan mata keluarga.',
      verified: true,
      helpful: 8,
      avatar: '/src/assets/avatars/avatar-2.jpg',
      avatarInitials: 'BS'
    },
    {
      id: 3,
      author: 'Sari Indah',
      rating: 4,
      date: '2024-01-08',
      text: 'Harga terjangkau dengan kualitas yang baik untuk kesehatan mata.',
      verified: true,
      helpful: 12,
      avatar: '/src/assets/avatars/avatar-3.jpg',
      avatarInitials: 'SI'
    },
    {
      id: 4,
      author: 'Ahmad Rizki',
      rating: 5,
      date: '2024-01-05',
      text: 'Pengiriman cepat dan produk original. Sangat puas dengan hasilnya untuk mata!',
      verified: true,
      helpful: 20,
      avatar: '/src/assets/avatars/avatar-4.jpg',
      avatarInitials: 'AR'
    },
    {
      id: 5,
      author: 'Dewi Sartika',
      rating: 4,
      date: '2024-01-03',
      text: 'Suplemen yang bagus untuk kesehatan mata keluarga. Sudah beli beberapa kali.',
      verified: true,
      helpful: 9,
      avatar: '/src/assets/avatars/avatar-5.jpg',
      avatarInitials: 'DS'
    }
  ],

  // Скидки и акции
  promotions: {
    currentDiscount: 77, // процент скидки
    discountText: '-77%',
    validUntil: '2024-12-31',
    freeShipping: true,
    minOrderForFreeShipping: 100000
  },

  // Настройки приложения
  app: {
    name: 'K24Klik',
    slogan: 'Asli, Komplit, Cepat',
    deliveryTime: '24 menit',
    supportPhone: '+62-21-1234567',
    supportEmail: 'support@k24klik.com'
  },

  // Социальные сети
  socialMedia: {
    facebook: 'https://facebook.com/k24klik',
    instagram: 'https://instagram.com/k24klik',
    twitter: 'https://twitter.com/k24klik',
    tiktok: 'https://tiktok.com/@k24klik'
  },

  // Настройки корзины
  basket: {
    autoAddMainProduct: true, // автоматически добавлять главный продукт
    showQuantitySelector: true,
    allowMultipleItems: true
  },

  // Настройки отображения
  display: {
    showReviews: true,
    showRatings: true,
    showSoldCount: true,
    showPromoBadge: true,
    showStockStatus: true,
    showReviewAvatars: true // Показывать аватарки в отзывах
  }
};

// Типы для TypeScript
export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  helpful: number;
  avatar?: string; // Путь к аватарке (опционально)
  avatarInitials?: string; // Инициалы для fallback (опционально)
}

export interface ProductConfig {
  id: number;
  title: string;
  oldPrice: number;
  newPrice: number;
  soldCount: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  description: {
    short: string;
    full: string;
  };
  composition: string;
  indications: string;
  dosage: string;
}

export interface AppConfig {
  mainProduct: ProductConfig;
  reviews: Review[];
  promotions: {
    currentDiscount: number;
    discountText: string;
    validUntil: string;
    freeShipping: boolean;
    minOrderForFreeShipping: number;
  };
  app: {
    name: string;
    slogan: string;
    deliveryTime: string;
    supportPhone: string;
    supportEmail: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    tiktok: string;
  };
  basket: {
    autoAddMainProduct: boolean;
    showQuantitySelector: boolean;
    allowMultipleItems: boolean;
  };
  display: {
    showReviews: boolean;
    showRatings: boolean;
    showSoldCount: boolean;
    showPromoBadge: boolean;
    showStockStatus: boolean;
    showReviewAvatars: boolean;
  };
}
