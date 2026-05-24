# Shared Resources

Tüm modüller tarafından kullanılabilecek ortak kaynaklar.

## Klasör Yapısı

- `components/` - Ortak UI bileşenleri (Button, Modal, Table, LoadingSpinner, vb.)
- `hooks/` - Custom React hooks (useDebounce, useLocalStorage, vb.)
- `utils/` - Yardımcı fonksiyonlar (date formatters, currency, validation, vb.)
- `types/` - Global type tanımları
- `constants/` - Sabitler ve konfigürasyonlar

## Kullanım

```typescript
import { LoadingSpinner, Button } from '@/shared/components';
import { useDebounce } from '@/shared/hooks';
import { formatCurrency } from '@/shared/utils';
```
