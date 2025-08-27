# 🚀 PWA Market - Quick Deploy Guide

## ⚡ Быстрый старт для разработчика

### 1️⃣ **Клонирование и запуск**
```bash
git clone https://github.com/Uniaff-AI/pwa-market-dev.git
cd pwa-market-dev
git checkout feature/crm-integration
yarn install
yarn dev
```

### 2️⃣ **Автоматический деплой**
```bash
# Базовый деплой
./deploy.sh

# Деплой для конкретной кампании и байера
./deploy.sh "my-campaign-2025" "NewBuyer"
```

### 3️⃣ **Результат**
- 📦 Готовый билд в папке `dist/`
- 🗜️ ZIP архив для загрузки
- 🌐 Готов к загрузке на любой хостинг

## 🌐 Хостинги (от простого к сложному)

| Хостинг | Сложность | Время | Цена |
|---------|-----------|--------|------|
| **Netlify** | ⭐ | 2 мин | Бесплатно |
| **Vercel** | ⭐⭐ | 3 мин | Бесплатно |
| **GitHub Pages** | ⭐⭐⭐ | 5 мин | Бесплатно |
| **VPS** | ⭐⭐⭐⭐ | 15 мин | $5/мес |

## 📋 Чеклист для клиента

### ✅ **Базовая настройка:**
- [ ] Сменить `ktCampaignId` в конфиге
- [ ] Сменить `ktDomain` на имя байера  
- [ ] Проверить работу формы заказа
- [ ] Протестировать отправку в CRM

### ✅ **Дополнительно:**
- [ ] Сменить язык формы (если нужно)
- [ ] Обновить информацию о продукте
- [ ] Добавить VSL видео
- [ ] Настроить домен

## 🎯 Примеры кастомизации

### **Новая кампания:**
```typescript
// src/config/appConfig.ts
api: {
  ktCampaignId: 'diabetes-india-2025',
  ktDomain: 'HealthBuyer',
}
```

### **Смена языка на английский:**
```typescript
orderForm: {
  title: 'Place Your Order',
  subtitle: 'Fill the form and we will contact you',
  nameLabel: 'Your Name',
  phoneLabel: 'Phone Number',
  // ...
}
```

## 📞 Поддержка

- 📖 **Полная документация**: `DEPLOYMENT_GUIDE.md`
- 🛠️ **CRM интеграция**: `CRM_INTEGRATION_GUIDE.md`  
- 🔧 **Troubleshooting**: см. DEPLOYMENT_GUIDE.md

---

## 🚀 Одна команда - готовый сайт!

```bash
./deploy.sh "your-campaign" "YourName" && echo "🎉 Готово!"
```

**Время деплоя: ~3 минуты** ⏱️
