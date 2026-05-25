/**
 * Getir Yemek Platform Integration
 * API entegrasyonu ve webhook handler'ları
 */

import { io, Socket } from 'socket.io-client';

export const getirConfig = {
  apiUrl: import.meta.env.VITE_GETIR_API_URL,
  apiKey: import.meta.env.VITE_GETIR_API_KEY,
  socketUrl: import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000/getir?id=REST_99',
};

interface NewOrderData {
  orderId: string;
  platform: 'getir';
  orderNumber: string;
  customerName: string;
  amount: number;
  status: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  timestamp: string;
}

export class GetirIntegration {
  private socket: Socket | null = null;

  /**
   * Socket.io ile yeni sipariş güncellemelerini dinle
   */
  subscribeToOrderUpdates(onNewOrder: (order: NewOrderData) => void) {
    // Socket bağlantısı yoksa oluştur
    if (!this.socket) {
      this.socket = io(getirConfig.socketUrl, {
        auth: {
          token: getirConfig.apiKey,
          platform: 'getir',
        },
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
      });

      // Bağlantı kurulduğunda
      this.socket.on('connect', () => {
        console.log('Getir socket connected:', this.socket?.id);
      });

      // Bağlantı hatası
      this.socket.on('connect_error', (error) => {
        console.error('Getir socket connection error:', error);
      });

      // Bağlantı koptuğunda
      this.socket.on('disconnect', (reason) => {
        console.log('Getir socket disconnected:', reason);
      });
    }

    // Yeni sipariş event'ını dinle
    this.socket.on('newOrder', (data: NewOrderData) => {
      console.log('New Getir order received:', data);
      onNewOrder(data);
    });

    // Sipariş durumu güncellemesi
    this.socket.on('orderStatusUpdate', (data: { orderId: string; status: string }) => {
      console.log('Getir order status updated:', data);
    });

    return this.socket;
  }

  /**
   * Socket bağlantısını kapat
   */
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      console.log('Getir socket disconnected');
    }
  }

  // Order sync
  async syncOrders() {
    // Implementation
    try {
      const response = await fetch(`${getirConfig.apiUrl}/orders`, {
        headers: {
          'Authorization': `Bearer ${getirConfig.apiKey}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error('Error syncing Getir orders:', error);
      throw error;
    }
  }

  // Menu sync
  async syncMenu() {
    // Implementation
    try {
      const response = await fetch(`${getirConfig.apiUrl}/menu`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${getirConfig.apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.error('Error syncing Getir menu:', error);
      throw error;
    }
  }
}
