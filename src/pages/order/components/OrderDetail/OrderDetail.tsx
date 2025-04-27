
import { Box, Card, CardContent, Typography } from "@mui/material";

const OrderDetail = ({ order }: { order: any }) => {
  if (!order) {
    return (
      <Box m={2} sx={{ width: "30%", ml: 2 }}>
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Typography variant="h6">Sipariş seçiniz</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box m={2} sx={{ width: "30%", ml: 2 }}>
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Sipariş Detayı
          </Typography>

          <Typography variant="subtitle2">
            Sipariş Numarası: {order.orderNumber}
          </Typography>
          <Typography variant="subtitle2">
            Müşteri: {order.customer.firstName} {order.customer.lastName}
          </Typography>
          <Typography variant="subtitle2">
            Teslimat Tipi: {order.deliveryType === "GO" ? "Restoran Kurye" : "Mağaza"}
          </Typography>
          <Typography variant="subtitle2">Tahmini Süre: {order.eta}</Typography>
          <Typography variant="subtitle2">Toplam: {order.totalPrice.toFixed(2)}₺</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetail;

