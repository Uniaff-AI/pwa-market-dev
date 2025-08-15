# Управление контентом приложения

Этот документ описывает, как легко изменять контент приложения без изменения кода.

## 📁 Структура файлов контента

```
src/
├── config/
│   └── appConfig.ts          # Основная конфигурация приложения
├── content/
│   ├── products.ts           # Данные продуктов
│   ├── googlePlayText.ts     # Тексты Google Play страницы
│   └── innerAppText.ts       # Тексты внутреннего приложения
├── assets/
│   ├── inner-app/
│   │   └── carousel-products/ # Изображения продуктов
│   └── avatars/              # Аватарки пользователей
```

## 🎯 Основные изменения

### 1. Изменение главного продукта

**Файл:** `src/config/appConfig.ts`

```typescript
export const appConfig = {
  mainProduct: {
    id: 1,
    title: 'ENERVON C TABLET',           // ← Изменить название
    oldPrice: 42.093,                    // ← Изменить старую цену
    newPrice: 37.883,                    // ← Изменить новую цену
    soldCount: '1.3 RB+',                // ← Изменить количество продаж
    rating: 5.0,                         // ← Изменить рейтинг
    reviewCount: 24,                     // ← Изменить количество отзывов
    
    // Описание продукта
    description: {
      short: 'Краткое описание...',      // ← Изменить краткое описание
      full: 'Полное описание...',        // ← Изменить полное описание
    },
    
    composition: 'Состав продукта...',   // ← Изменить состав
    indications: 'Показания...',         // ← Изменить показания
    dosage: 'Дозировка...',              // ← Изменить дозировку
  }
}
```

### 2. Изменение отзывов с аватарками

**Файл:** `src/config/appConfig.ts`

```typescript
reviews: [
  {
    id: 1,
    author: 'Имя автора',                // ← Изменить имя
    rating: 5,                           // ← Изменить рейтинг (1-5)
    date: '2024-01-15',                  // ← Изменить дату
    text: 'Текст отзыва...',             // ← Изменить текст отзыва
    verified: true,                      // ← Подтвержденная покупка
    helpful: 15,                         // ← Количество "полезно"
    avatar: '/src/assets/avatars/avatar-1.jpg', // ← Путь к аватарке
    avatarInitials: 'ИА'                 // ← Инициалы для fallback
  }
]
```

### 3. Добавление новых аватарок

**Папка:** `src/assets/avatars/`

1. Добавьте файл изображения (например, `avatar-6.jpg`)
2. Обновите конфигурацию:

```typescript
{
  id: 6,
  author: 'Новый пользователь',
  rating: 5,
  date: '2024-01-20',
  text: 'Новый отзыв...',
  verified: true,
  helpful: 10,
  avatar: '/src/assets/avatars/avatar-6.jpg', // ← Новый путь
  avatarInitials: 'НП'                        // ← Инициалы
}
```

### 4. Изменение скидок и акций

**Файл:** `src/config/appConfig.ts`

```typescript
promotions: {
  currentDiscount: 10,                   // ← Процент скидки
  discountText: '-10%',                  // ← Текст скидки
  validUntil: '2024-12-31',             // ← Дата окончания акции
  freeShipping: true,                    // ← Бесплатная доставка
  minOrderForFreeShipping: 100000        // ← Минимальная сумма для бесплатной доставки
}
```

### 5. Изменение изображений продуктов

**Папка:** `src/assets/inner-app/carousel-products/`

- Замените файл `product-2.jpg` на новое изображение
- Или измените путь в `appConfig.mainProduct.imageUrl`

### 6. Изменение текстов приложения

**Файл:** `src/content/innerAppText.ts`

```typescript
export const InnerAppText = {
  title: 'Название приложения',          // ← Изменить название
  mainApp: {
    locationInfo: "Информация о доставке", // ← Изменить информацию о доставке
    titleBlock: {
      oneChunk: 'Часть 1 заголовка',     // ← Изменить части заголовка
      twoChunk: 'Часть 2 заголовка',
      threeChunk: 'Часть 3 заголовка',
    },
    // ... другие тексты
  }
}
```

## 🔧 Настройки отображения

**Файл:** `src/config/appConfig.ts`

```typescript
display: {
  showReviews: true,                     // ← Показывать отзывы
  showRatings: true,                     // ← Показывать рейтинги
  showSoldCount: true,                   // ← Показывать количество продаж
  showPromoBadge: true,                  // ← Показывать бейдж акции
  showStockStatus: true,                 // ← Показывать статус наличия
  showReviewAvatars: true                // ← Показывать аватарки в отзывах
}
```

## 🛒 Настройки корзины

**Файл:** `src/config/appConfig.ts`

```typescript
basket: {
  autoAddMainProduct: true,              // ← Автоматически добавлять главный продукт
  showQuantitySelector: true,            // ← Показывать селектор количества
  allowMultipleItems: true               // ← Разрешить несколько товаров
}
```

## 📱 Настройки приложения

**Файл:** `src/config/appConfig.ts`

```typescript
app: {
  name: 'K24Klik',                       // ← Название приложения
  slogan: 'Asli, Komplit, Cepat',        // ← Слоган
  deliveryTime: '24 menit',              // ← Время доставки
  supportPhone: '+62-21-1234567',        // ← Телефон поддержки
  supportEmail: 'support@k24klik.com'    // ← Email поддержки
}
```

## 🌐 Социальные сети

**Файл:** `src/config/appConfig.ts`

```typescript
socialMedia: {
  facebook: 'https://facebook.com/k24klik',    // ← Facebook
  instagram: 'https://instagram.com/k24klik',  // ← Instagram
  twitter: 'https://twitter.com/k24klik',      // ← Twitter
  tiktok: 'https://tiktok.com/@k24klik'        // ← TikTok
}
```

## 📋 Пошаговая инструкция для изменений

### Изменение продукта:

1. Откройте `src/config/appConfig.ts`
2. Найдите секцию `mainProduct`
3. Измените нужные поля
4. Сохраните файл
5. Перезапустите приложение

### Изменение отзывов:

1. Откройте `src/config/appConfig.ts`
2. Найдите массив `reviews`
3. Добавьте, удалите или измените отзывы
4. Для аватарок добавьте файл в `src/assets/avatars/`
5. Сохраните файл
6. Перезапустите приложение

### Добавление аватарок:

1. Добавьте файл изображения в `src/assets/avatars/`
2. Обновите конфигурацию отзыва с путем к аватарке
3. Добавьте инициалы для fallback
4. Сохраните изменения
5. Перезапустите приложение

### Изменение изображения:

1. Замените файл в `src/assets/inner-app/carousel-products/`
2. Или измените путь в `appConfig.mainProduct.imageUrl`
3. Сохраните изменения
4. Перезапустите приложение

## 🎨 Рекомендации для аватарок

- **Размер:** 100x100 пикселей
- **Формат:** JPG или PNG
- **Стиль:** Круглые аватарки с хорошим качеством
- **Размер файла:** до 50KB
- **Fallback:** Всегда указывайте инициалы для случаев, когда изображение не загружается

## ⚠️ Важные замечания

- Все изменения в `appConfig.ts` применяются автоматически
- Изменения в изображениях требуют перезапуска приложения
- Тексты на индонезийском языке находятся в `src/content/`
- Для изменения структуры данных нужно редактировать TypeScript типы
- Аватарки отображаются только если `showReviewAvatars: true`

## 🚀 Быстрые команды

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр
npm run preview
```

## 📞 Поддержка

Если у вас возникли вопросы по изменению контента, обратитесь к разработчику или проверьте TypeScript типы в файлах конфигурации.

