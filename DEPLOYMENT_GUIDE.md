# 🚀 Руководство по деплою PWA Market

## 📋 Для нового разработчика

### **1. Клонирование проекта**

```bash
# Клонировать репозиторий
git clone https://github.com/Uniaff-AI/pwa-market-dev.git
cd pwa-market-dev

# Переключиться на ветку с CRM интеграцией
git checkout feature/crm-integration
```

### **2. Установка зависимостей**

```bash
# Установить Yarn (если не установлен)
npm install -g yarn

# Установить зависимости проекта
yarn install
```

### **3. Настройка конфигурации**

Основные настройки находятся в `src/config/appConfig.ts`:

```typescript
// Настройка для разных кампаний/байеров
api: {
  ktCampaignId: 'your-campaign-name',  // ← ИЗМЕНИТЬ
  ktDomain: 'YourBuyerName',           // ← ИЗМЕНИТЬ
  enabled: true,                       // включить/выключить CRM
}

// Настройка формы (язык)
orderForm: {
  // Все тексты на хинди, можно перевести на другой язык
  title: 'ऑर्डर दें',                    // ← ИЗМЕНИТЬ на нужный язык
  // ...
}
```

### **4. Запуск в разработке**

```bash
# Запуск dev сервера
yarn dev

# Приложение будет доступно на:
# - http://localhost:4321/ (главная Google Play)
# - http://localhost:4321/inner-app/ (аптека с формой)
# - http://localhost:4321/inner-app/basket (корзина)
```

## 🌐 Варианты деплоя

### **Вариант 1: Netlify (Рекомендуется)**

1. **Создать аккаунт** на [netlify.com](https://netlify.com)
2. **Подключить GitHub** репозиторий
3. **Настройки билда:**
   - Build command: `yarn build`
   - Publish directory: `dist`
   - Node version: `18` или выше

4. **Автоматический деплой** при пуше в ветку

### **Вариант 2: Vercel**

```bash
# Установить Vercel CLI
npm i -g vercel

# Логин и деплой
vercel login
vercel --prod
```

### **Вариант 3: GitHub Pages**

1. **Settings** → **Pages** в GitHub репозитории
2. **Source**: GitHub Actions
3. **Создать файл** `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ feature/crm-integration ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'yarn'
    - run: yarn install
    - run: yarn build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### **Вариант 4: VPS/Сервер**

```bash
# На сервере
git clone https://github.com/Uniaff-AI/pwa-market-dev.git
cd pwa-market-dev
git checkout feature/crm-integration

# Установка зависимостей
npm install -g yarn pm2
yarn install

# Билд
yarn build

# Запуск с PM2
pm2 serve dist 3000 --name "pwa-market"
pm2 startup
pm2 save
```

## ⚙️ Переменные окружения

Создать файл `.env` (опционально):

```env
# CRM настройки
VITE_CRM_ENDPOINT=https://api.pwa.uniaffcrm.com/add_lead
VITE_KT_CAMPAIGN_ID=your-campaign-id
VITE_KT_DOMAIN=YourDomain

# Для использования в коде:
# import.meta.env.VITE_CRM_ENDPOINT
```

## 🛠️ Кастомизация для клиента

### **Смена кампании/байера:**
```typescript
// src/config/appConfig.ts
api: {
  ktCampaignId: 'client-campaign-2025',
  ktDomain: 'NewBuyer',
}
```

### **Смена языка:**
```typescript
// src/config/appConfig.ts
orderForm: {
  title: 'Place Order',           // английский
  // или
  title: 'Hacer pedido',          // испанский
  // или
  title: 'Passer commande',       // французский
}
```

### **Смена продукта:**
```typescript
// src/config/appConfig.ts
mainProduct: {
  title: 'YOUR_PRODUCT_NAME',
  oldPrice: 2000000,
  newPrice: 500000,
  // ...
}
```

## 🔧 Troubleshooting

### **Проблема: Node.js версия**
```bash
# Установить правильную версию Node.js
nvm install 18
nvm use 18
```

### **Проблема: Yarn не установлен**
```bash
npm install -g yarn
```

### **Проблема: Порты заняты**
```bash
# Запуск на другом порту
yarn dev --port 3000
```

## 📞 Контакты

- **Репозиторий**: https://github.com/Uniaff-AI/pwa-market-dev
- **Ветка с CRM**: `feature/crm-integration`
- **Документация**: `CRM_INTEGRATION_GUIDE.md`

## 🎯 Быстрый старт

```bash
git clone https://github.com/Uniaff-AI/pwa-market-dev.git
cd pwa-market-dev
git checkout feature/crm-integration
yarn install
yarn dev
```

**Готово! Приложение запущено на http://localhost:4321** 🚀
