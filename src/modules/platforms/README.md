# Platform Integrations Module

Yemek platformları entegrasyon modülü (Yemeksepeti, Getir, Trendyol, vb.)

## Klasör Yapısı

- `components/` - Platform yönetim UI bileşenleri
- `integrations/` - Platform-specific entegrasyon kodları
  - `yemeksepeti.ts`
  - `getir.ts`
  - `trendyol.ts`
- `services/` - Platform senkronizasyon servisleri

## Kullanım

```typescript
import { YemeksepetiIntegration, GetirIntegration } from '@/modules/platforms/integrations';
```
