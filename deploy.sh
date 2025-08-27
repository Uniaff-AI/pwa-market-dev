#!/bin/bash

# 🚀 Скрипт автоматического деплоя PWA Market
# Использование: ./deploy.sh [campaign-id] [buyer-name]

echo "🚀 Автоматический деплой PWA Market"
echo "=================================="

# Параметры
CAMPAIGN_ID=${1:-"default-campaign"}
BUYER_NAME=${2:-"Mark"}

echo "📋 Параметры:"
echo "   Campaign ID: $CAMPAIGN_ID"
echo "   Buyer Name: $BUYER_NAME"
echo ""

# Проверка зависимостей
echo "🔍 Проверка зависимостей..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Установите Node.js 18+"
    exit 1
fi

if ! command -v yarn &> /dev/null; then
    echo "📦 Установка Yarn..."
    npm install -g yarn
fi

# Установка зависимостей проекта
echo "📦 Установка зависимостей..."
yarn install

# Настройка конфигурации
echo "⚙️ Настройка конфигурации..."
echo "   Updating ktCampaignId: $CAMPAIGN_ID"
echo "   Updating ktDomain: $BUYER_NAME"

# Простая замена в конфиге (для продакшена лучше использовать переменные окружения)
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/ktCampaignId: 'default-campaign'/ktCampaignId: '$CAMPAIGN_ID'/g" src/config/appConfig.ts
    sed -i '' "s/ktDomain: 'Mark'/ktDomain: '$BUYER_NAME'/g" src/config/appConfig.ts
else
    # Linux
    sed -i "s/ktCampaignId: 'default-campaign'/ktCampaignId: '$CAMPAIGN_ID'/g" src/config/appConfig.ts
    sed -i "s/ktDomain: 'Mark'/ktDomain: '$BUYER_NAME'/g" src/config/appConfig.ts
fi

# Билд проекта
echo "🔨 Сборка проекта..."
yarn build

# Проверка билда
if [ -d "dist" ]; then
    echo "✅ Билд успешно создан в папке 'dist'"
    echo ""
    echo "🌐 Варианты деплоя:"
    echo "   1. Netlify: загрузите папку 'dist'"
    echo "   2. Vercel: выполните 'vercel --prod'"
    echo "   3. GitHub Pages: настройте Actions"
    echo "   4. VPS: скопируйте 'dist' на сервер"
    echo ""
    echo "📁 Билд готов: $(pwd)/dist"
else
    echo "❌ Ошибка сборки"
    exit 1
fi

# Создание ZIP архива для удобства
echo "📦 Создание ZIP архива..."
zip -r "pwa-market-${CAMPAIGN_ID}-$(date +%Y%m%d).zip" dist/
echo "✅ Архив создан: pwa-market-${CAMPAIGN_ID}-$(date +%Y%m%d).zip"

echo ""
echo "🎉 Деплой готов!"
echo "=================================="
