import { FC, useState } from "react";
import { Box } from "@mui/material";
import {
  PlatformFilters,
  OrdersTable,
  OrderDetail,
  Order,
} from "../components";

type Platform = "yemeksepeti" | "getir" | "trendyol" | "migros" | "all";

// Mock data
const mockOrders: Order[] = [
  {
    id: "1",
    platform: "yemeksepeti",
    orderNumber: "YS-12345",
    customerName: "Ahmet Yılmaz",
    amount: 125.5,
    status: "pending",
    time: "14:30",
  },
  {
    id: "2",
    platform: "getir",
    orderNumber: "GT-67890",
    customerName: "Ayşe Demir",
    amount: 89.0,
    status: "preparing",
    time: "14:25",
  },
  {
    id: "3",
    platform: "trendyol",
    orderNumber: "TR-54321",
    customerName: "Mehmet Kaya",
    amount: 156.75,
    status: "ready",
    time: "14:20",
  },
  {
    id: "4",
    platform: "yemeksepeti",
    orderNumber: "YS-12346",
    customerName: "Fatma Şahin",
    amount: 210.0,
    status: "delivered",
    time: "14:15",
  },
  {
    id: "5",
    platform: "migros",
    orderNumber: "MG-98765",
    customerName: "Ali Çelik",
    amount: 95.25,
    status: "preparing",
    time: "14:10",
  },
  {
    id: "6",
    platform: "getir",
    orderNumber: "GT-67891",
    customerName: "Zeynep Öz",
    amount: 178.5,
    status: "pending",
    time: "14:05",
  },
  {
    id: "7",
    platform: "trendyol",
    orderNumber: "TR-54322",
    customerName: "Mustafa Akar",
    amount: 142.0,
    status: "ready",
    time: "14:00",
  },
];

const OrdersPage: FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders =
    selectedPlatform === "all"
      ? mockOrders
      : mockOrders.filter((order) => order.platform === selectedPlatform);

  const orderCounts = {
    all: mockOrders.length,
    yemeksepeti: mockOrders.filter((o) => o.platform === "yemeksepeti").length,
    getir: mockOrders.filter((o) => o.platform === "getir").length,
    trendyol: mockOrders.filter((o) => o.platform === "trendyol").length,
    migros: mockOrders.filter((o) => o.platform === "migros").length,
  };

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetail = () => {
    setSelectedOrder(null);
  };

  return (
    <Box>
      <PlatformFilters
        selectedPlatform={selectedPlatform}
        onPlatformChange={setSelectedPlatform}
        orderCounts={orderCounts}
      />

      <OrdersTable orders={filteredOrders} onOrderClick={handleOrderClick} />

      <OrderDetail
        order={selectedOrder}
        open={!!selectedOrder}
        onClose={handleCloseDetail}
      />
    </Box>
  );
};

export default OrdersPage;
