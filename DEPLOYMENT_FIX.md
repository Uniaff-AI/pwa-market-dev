# 🔧 Исправление проблем деплоя

## ❌ Проблема на uniaffocto.com

Из скриншота видны ошибки 404:
- `Failed to load resource: 404 (Not Found)` для файлов статики
- Ошибка `[astro-island] Error hydrating`

## 🎯 Основные причины:

1. **Неправильная маршрутизация** - сервер не знает как обрабатывать `/inner-app/` пути
2. **Отсутствие конфигурации хостинга** - нет настроек для статических файлов
3. **Проблемы с базовым путем** - неправильный base URL

## ✅ Решение:

### **1. Обновлена конфигурация Astro**
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  site: 'https://uniaffocto.com',
  base: '/',
  trailingSlash: 'ignore',
  // ...
})
```

### **2. Добавлен netlify.toml**
Правильная конфигурация для Netlify с редиректами:
```toml
[[redirects]]
  from = "/inner-app"
  to = "/inner-app/index.html"
  status = 200
```

### **3. Исправленный билд**
Теперь выполните:
```bash
yarn build
```

## 🚀 Шаги для исправления на продакшене:

### **Если используется Netlify:**

1. **Пересобрать проект**:
   ```bash
   git add .
   git commit -m "fix: исправление маршрутизации и конфигурации деплоя"
   git push
   ```

2. **Netlify автоматически пересоберет** с новыми настройками

### **Если используется другой хостинг:**

1. **Собрать локально**:
   ```bash
   yarn build
   ```

2. **Загрузить папку `dist/`** на хостинг

3. **Настроить редиректы** на сервере:
   - Apache: `.htaccess`
   - Nginx: конфигурация server блока
   - Vercel: `vercel.json`

## 📋 Структура правильного билда:

```
dist/
├── index.html                    # Главная страница
├── inner-app/
│   ├── index.html               # /inner-app/
│   ├── basket/
│   │   └── index.html           # /inner-app/basket
│   └── products/
│       └── 1/
│           └── index.html       # /inner-app/products/1
├── _astro/                      # Статические файлы
├── manifest.json               # PWA манифест
└── sw.js                      # Service Worker
```

## ⚠️ Для разных хостингов:

### **Netlify** (Рекомендуется)
✅ Уже настроено через `netlify.toml`

### **Vercel**
Нужен файл `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/inner-app", "destination": "/inner-app/index.html" },
    { "source": "/inner-app/basket", "destination": "/inner-app/basket/index.html" }
  ]
}
```

### **GitHub Pages**
В workflow добавить:
```yaml
- name: Fix GitHub Pages routing
  run: cp dist/index.html dist/404.html
```

### **Apache (.htaccess)**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^inner-app$ /inner-app/index.html [L]
RewriteRule ^inner-app/$ /inner-app/index.html [L]
RewriteRule ^inner-app/basket$ /inner-app/basket/index.html [L]
```

## 🧪 Тестирование:

После исправления проверьте:
- ✅ Главная: `https://uniaffocto.com/`
- ✅ Аптека: `https://uniaffocto.com/inner-app/`
- ✅ Корзина: `https://uniaffocto.com/inner-app/basket`
- ✅ Форма заказа работает
- ✅ Отправка в CRM работает

## 🔥 Быстрое исправление:

```bash
# 1. Пересобрать с новыми настройками
yarn build

# 2. Загрузить новый билд
# (или git push для автодеплоя)

# 3. Проверить работу
curl -I https://uniaffocto.com/inner-app/
```

## 📞 Если проблемы остались:

1. Проверьте консоль браузера на наличие ошибок
2. Убедитесь что все файлы загружены
3. Проверьте настройки хостинга
4. Обратитесь к документации конкретного хостинг-провайдера
