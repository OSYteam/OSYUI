import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { GetirIntegration } from '../integrations/getir';

interface SocketContextType {
  isConnected: boolean;
  connectionStatus: {
    getir: boolean;
    yemeksepeti: boolean;
    trendyol: boolean;
  };
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [connectionStatus, setConnectionStatus] = useState({
    getir: false,
    yemeksepeti: false,
    trendyol: false,
  });

  useEffect(() => {
    // TODO: Initialize socket connections
    console.log('Socket connections initializing...');

    // Example: Initialize Getir
    const getir = new GetirIntegration();
    
    // Subscribe to order updates
    getir.subscribeToOrderUpdates((order) => {
      console.log('New order:', order);
      setConnectionStatus(prev => ({ ...prev, getir: true }));
    });

    // Cleanup
    return () => {
      console.log('Disconnecting sockets...');
      getir.disconnect();
    };
  }, []);

  const isConnected = Object.values(connectionStatus).some(status => status);

  return (
    <SocketContext.Provider value={{ isConnected, connectionStatus }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within SocketProvider');
  }
  return context;
};
