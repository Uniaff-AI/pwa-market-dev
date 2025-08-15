export const appConfig = {
  // Главный продукт
  mainProduct: {
    id: 1,
    title: 'ENERVON C TABLET',
    oldPrice: 42.093,
    newPrice: 37.883,
    soldCount: '1.3 RB+',
    rating: 5.0,
    reviewCount: 24,
    imageUrl: '/src/assets/inner-app/carousel-products/product-2.jpg',
    
    // Описание продукта
    description: {
      short: 'Suplemen vitamin C dan B kompleks untuk meningkatkan daya tahan tubuh',
      full: 'Enervon-C adalah suplemen vitamin yang mengandung Vitamin C dan Vitamin B kompleks untuk membantu meningkatkan daya tahan tubuh dan energi.',
    },
    
    // Состав
    composition: 'Vitamin C 500mg, Vitamin B1 50mg, Vitamin B2 25mg, Vitamin B6 10mg, Vitamin B12 5mcg, Niacinamide 50mg, Calcium Pantothenate 25mg.',
    
    // Показания
    indications: 'Membantu memenuhi kebutuhan vitamin C dan B kompleks, meningkatkan daya tahan tubuh, mengurangi kelelahan, dan membantu proses metabolisme.',
    
    // Дозировка
    dosage: 'Dewasa: 1 tablet sehari setelah makan. Anak-anak 12-17 tahun: 1 tablet sehari setelah makan.',
  },

  // Отзывы (легко изменяемые)
  reviews: [
    {
      id: 1,
      author: 'Yetty Lucida',
      rating: 5,
      date: '2024-01-15',
      text: 'Produk sangat bagus, daya tahan tubuh meningkat signifikan!',
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
      text: 'Enervon C selalu jadi pilihan utama untuk vitamin harian.',
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
      text: 'Harga terjangkau dengan kualitas yang baik.',
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
      text: 'Pengiriman cepat dan produk original. Sangat puas!',
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
      text: 'Vitamin yang bagus untuk keluarga. Sudah beli beberapa kali.',
      verified: true,
      helpful: 9,
      avatar: '/src/assets/avatars/avatar-5.jpg',
      avatarInitials: 'DS'
    }
  ],

  // Скидки и акции
  promotions: {
    currentDiscount: 10, // процент скидки
    discountText: '-10%',
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
