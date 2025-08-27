# Инструкции для пуша в GitHub

## 🚀 Готово к пушу!

Ветка `feature/crm-integration` создана и все изменения закоммичены.

### **Для пуша в организацию Uniaff-AI:**

```bash
cd /Users/banjo/pwa-market-dev
git push -u origin feature/crm-integration
```

### **Если потребуется аутентификация:**

1. **Username**: ваш GitHub username
2. **Password**: используйте Personal Access Token (не пароль)

### **Создание Personal Access Token:**

1. Перейдите на GitHub.com
2. Settings → Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Выберите scopes: `repo` (полный доступ к репозиториям)
5. Скопируйте токен и используйте его как пароль

### **Альтернатива - SSH ключи:**

Если хотите настроить SSH для автоматического пуша:

```bash
# Генерация SSH ключа
ssh-keygen -t ed25519 -C "your_email@example.com"

# Добавление ключа в ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Скопировать публичный ключ
cat ~/.ssh/id_ed25519.pub

# Добавить ключ в GitHub Settings → SSH and GPG keys
```

## 📋 Что будет запушено:

- **Ветка**: `feature/crm-integration`
- **Коммит**: `4e2a1db` - "feat: Интеграция с CRM API и локализация на хинди"
- **Файлов изменено**: 9
- **Строк добавлено**: +481, -31

### **Новые файлы:**
- `CRM_INTEGRATION_GUIDE.md`
- `src/components/innerapp/OrderForm/OrderForm.tsx`
- `src/components/innerapp/OrderForm/OrderFormWrapper.tsx`
- `src/utils/leadApi.ts`

### **После успешного пуша:**
Можно будет создать Pull Request в GitHub для мерджа в master ветку.
