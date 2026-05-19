/**
 * Platform Synchronization Service
 * Tüm platformlarla senkronizasyon işlemlerini yönetir
 */

import { YemeksepetiIntegration } from '../integrations/yemeksepeti';
import { GetirIntegration } from '../integrations/getir';
import { TrendyolIntegration } from '../integrations/trendyol';

export class PlatformSyncService {
  private yemeksepeti: YemeksepetiIntegration;
  private getir: GetirIntegration;
  private trendyol: TrendyolIntegration;

  constructor() {
    this.yemeksepeti = new YemeksepetiIntegration();
    this.getir = new GetirIntegration();
    this.trendyol = new TrendyolIntegration();
  }

  /**
   * Tüm platformlardan yeni siparişleri çek
   */
  async syncAllOrders() {
    const results = await Promise.allSettled([
      this.yemeksepeti.syncOrders(),
      this.getir.syncOrders(),
      this.trendyol.syncOrders(),
    ]);

    return results;
  }

  /**
   * Tüm platformlara menü değişikliklerini gönder
   */
  async syncMenuToAllPlatforms() {
    const results = await Promise.allSettled([
      this.yemeksepeti.syncMenu(),
      this.getir.syncMenu(),
      this.trendyol.syncMenu(),
    ]);

    return results;
  }

  /**
   * Belirli bir platforma sipariş durumu güncelle
   */
  async updateOrderStatus(platform: string, orderId: string, status: string) {
    switch (platform) {
      case 'yemeksepeti':
        return this.yemeksepeti.updateOrderStatus(orderId, status);
      case 'getir':
        return this.getir.updateOrderStatus(orderId, status);
      case 'trendyol':
        return this.trendyol.updateOrderStatus(orderId, status);
      default:
        throw new Error(`Unknown platform: ${platform}`);
    }
  }
}

export const platformSyncService = new PlatformSyncService();
