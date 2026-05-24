# Menu Module

Menü ve ürün yönetimi modülü.

## Klasör Yapısı

- `components/` - Menü/ürün UI bileşenleri (ProductList, ProductForm, CategoryManager, vb.)
- `pages/` - Menü yönetim sayfaları
- `services/` - API çağrıları ve business logic (menuService.ts, productService.ts)
- `store/` - State management (menuStore.ts)

## Kullanım

```typescript
import { ProductList, ProductForm } from '@/modules/menu';
```
