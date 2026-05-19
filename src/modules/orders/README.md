# Orders Module

Sipariş yönetimi modülü.

## Klasör Yapısı

- `components/` - Sipariş ile ilgili UI bileşenleri (OrderList, OrderCard, OrderQueue, vb.)
- `pages/` - Sipariş sayfaları (OrdersPage, OrderDetailPage)
- `services/` - API çağrıları ve business logic (orderService.ts)
- `store/` - State management (orderStore.ts)

## Kullanım

```typescript
import { OrderList, OrderDetailPage } from '@/modules/orders';
```
