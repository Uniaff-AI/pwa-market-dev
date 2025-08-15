# Управление контентом приложения

Этот документ описывает, как легко изменять контент приложения без необходимости редактирования кода.

## 📁 Основные файлы конфигурации

### 1. `src/config/appConfig.ts` - Главная конфигурация

Этот файл содержит все настройки приложения и легко изменяемый контент.

#### Главный продукт
```typescript
mainProduct: {
  id: 1,
  title: 'DIACLOSE', // Название продукта
  oldPrice: 1695652, // Старая цена
  newPrice: 390000,  // Новая цена
  soldCount: '13 unit tersisa', // Количество остатков
  rating: 5.0, // Рейтинг
  reviewCount: 24, // Количество отзывов
  imageUrl: '/src/assets/inner-app/carousel-products/product-2.jpg', // Изображение
  description: { short: '...', full: '...' }, // Описание
  composition: '...', // Состав
  indications: '...', // Показания
  dosage: '...' // Дозировка
}
```

#### Отзывы (внутреннее приложение)
```typescript
reviews: [
  {
    id: 1,
    author: 'Yetty Lucida', // Автор
    rating: 5, // Рейтинг (1-5)
    date: '2024-01-15', // Дата
    text: 'Текст отзыва...', // Текст отзыва
    verified: true, // Верифицированный отзыв
    helpful: 15, // Количество "полезно"
    avatar: '/src/assets/avatars/avatar-1.jpg', // Путь к аватарке
    avatarInitials: 'YL' // Инициалы для fallback
  }
]
```

#### VSL (Video Sales Letter)
```typescript
vsl: {
  enabled: true, // Включить/выключить VSL
  videoUrl: 'https://example.com/diaclose-vsl.mp4', // URL видео
  posterUrl: '/src/assets/vsl/diaclose-poster.jpg', // Постер для видео
  title: 'VSL - Diaclose', // Заголовок
  autoPlay: false, // Автовоспроизведение
  showControls: true, // Показывать контролы
  fallbackText: 'VSL' // Текст если видео недоступно
}
```

#### Google Play отзывы
```typescript
googlePlayReviews: [
  {
    id: 1,
    userTitle: "Ulasan Pengguna", // Заголовок пользователя
    singleReviewDate: "28 September 2024", // Дата отзыва
    singleReviewText: "Текст отзыва...", // Текст отзыва
    likes: "959 orang menandai ulasan ini sebagai bermanfaat.", // Количество лайков
    userLetter: 'A', // Буква пользователя
    userScore: 5, // Оценка (1-5)
    avatar: '/src/assets/avatars/google-play/user-1.jpg', // Аватарка
    avatarInitials: 'AP' // Инициалы для fallback
  }
]
```

#### Настройки отображения
```typescript
display: {
  showReviews: true, // Показывать отзывы
  showRatings: true, // Показывать рейтинги
  showSoldCount: true, // Показывать количество продаж
  showPromoBadge: true, // Показывать промо-бейдж
  showStockStatus: true, // Показывать статус остатков
  showReviewAvatars: true, // Показывать аватарки в отзывах
  showVSL: true // Показывать VSL видео
}
```

### 2. `src/content/products.ts` - Продукты

Содержит информацию о продуктах для корзины.

### 3. `src/content/googlePlayText.ts` - Google Play тексты

Содержит все тексты для страницы Google Play.

### 4. `src/content/innerAppText.ts` - Внутреннее приложение

Содержит тексты для внутреннего приложения.

## 🖼️ Управление изображениями

### Аватарки для отзывов
- **Внутреннее приложение**: `src/assets/avatars/`
- **Google Play**: `src/assets/avatars/google-play/`

### Рекомендации для аватарок:
- Размер: 100x100 пикселей
- Формат: JPG или PNG
- Стиль: Круглые аватарки с хорошим качеством
- Размер файла: до 50KB

### VSL видео и постеры
- **Видео**: Загрузите на внешний сервер (YouTube, Vimeo, или ваш сервер)
- **Постеры**: `src/assets/vsl/`

## 🎥 Настройка VSL

1. **Подготовьте видео**:
   - Формат: MP4 или WebM
   - Размер: Оптимизированный для веба
   - Длительность: Рекомендуется 2-5 минут

2. **Загрузите видео**:
   - YouTube (приватное видео)
   - Vimeo
   - Ваш сервер

3. **Обновите конфигурацию**:
   ```typescript
   vsl: {
     videoUrl: 'https://your-video-url.com/video.mp4',
     posterUrl: '/src/assets/vsl/your-poster.jpg',
     title: 'Ваш заголовок VSL'
   }
   ```

## 📝 Изменение отзывов

### Внутреннее приложение
Отредактируйте массив `reviews` в `appConfig.ts`:

```typescript
reviews: [
  {
    id: 1,
    author: 'Новое имя',
    rating: 5,
    date: '2024-01-20',
    text: 'Новый текст отзыва...',
    avatar: '/src/assets/avatars/new-avatar.jpg',
    avatarInitials: 'НИ'
  }
]
```

### Google Play
Отредактируйте массив `googlePlayReviews` в `appConfig.ts`:

```typescript
googlePlayReviews: [
  {
    id: 1,
    userTitle: "Новый пользователь",
    singleReviewText: "Новый отзыв для Google Play...",
    userScore: 5,
    avatar: '/src/assets/avatars/google-play/new-user.jpg',
    avatarInitials: 'НП'
  }
]
```

## 🎨 Изменение стилей

### Цвета
Основные цвета приложения:
- Зеленый: `#01A444`, `#008D49`
- Красный: `#E23842`
- Оранжевый: `#FDE3D2`

### Шрифты
- Основной: Poppins
- Заголовки: Roboto

## 🔧 Настройки корзины

```typescript
basket: {
  autoAddMainProduct: true, // Автоматически добавлять главный продукт
  showQuantitySelector: true, // Показывать селектор количества
  allowMultipleItems: true // Разрешить несколько товаров
}
```

## 📱 PWA настройки

PWA настройки находятся в `astro.config.mjs`:
- Название приложения
- Иконки
- Цвета темы
- Стартовая страница

## 🚀 Быстрые изменения

### Изменить главный продукт:
1. Откройте `src/config/appConfig.ts`
2. Найдите секцию `mainProduct`
3. Измените название, цены, описание
4. Сохраните файл

### Добавить новый отзыв:
1. Откройте `src/config/appConfig.ts`
2. Найдите массив `reviews` или `googlePlayReviews`
3. Добавьте новый объект отзыва
4. Добавьте аватарку в соответствующую папку

### Изменить VSL:
1. Откройте `src/config/appConfig.ts`
2. Найдите секцию `vsl`
3. Обновите `videoUrl` и `posterUrl`
4. Сохраните файл

## ⚠️ Важные замечания

1. **Изображения**: Убедитесь, что пути к изображениям корректны
2. **Форматирование**: Сохраняйте правильное форматирование JSON
3. **Кодировка**: Используйте UTF-8 для поддержки индонезийского языка
4. **Тестирование**: Всегда проверяйте изменения в браузере

## 📞 Поддержка

Если у вас возникли вопросы по изменению контента, обратитесь к разработчику или проверьте TypeScript типы в файлах конфигурации.

