import { Box, Card, CardContent, Typography, Divider, Stack, Button } from "@mui/material";
import { MarketplaceBadge, MarketplaceType, Order } from "../../types/CustomOrderTypes";

const OrderDetail = ({ order, handleOrderSelect }: { order: any, handleOrderSelect: (order: Order | null) => void; }) => {
  if (!order) {
    return (
      <div />
    );
  }

  return (
    <Box m={2} sx={{ width: "30%", ml: 2 }}>
      <Card sx={{ p: 2, borderRadius: 5 }}>
        <CardContent>
          <Stack >
            <Typography variant="h6" align="center" gutterBottom>
              Sipariş Detayı
            </Typography>
            {/* Marketplace Badge */}
            {order.marketplace && (
              <MarketplaceBadge name={order.marketplace as MarketplaceType} />
            )}
          </Stack>

          <Divider sx={{ my: 3 }} />
          <Typography variant="subtitle2">
            Sipariş Numarası: {order.orderNumber}
          </Typography>

          <Typography variant="subtitle2">
            Teslimat Tipi: {order.deliveryType === "GO" ? "Restoran Kurye" : "Mağaza"}
          </Typography>
          <Typography variant="subtitle2">
            Ödeme Tipi:  {order.payment?.mealCard?.cardSourceType || "Bilinmiyor"}
          </Typography>
          <Typography variant="subtitle2">Sipariş Tarihi: {order.eta}</Typography>
          <Typography variant="subtitle2">Toplam: {order.totalPrice.toFixed(2)}₺</Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" align="center" gutterBottom>
            Müşteri Bilgileri
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="subtitle2">
            Müşteri: {order.customer.firstName} {order.customer.lastName}
          </Typography>
          <Typography variant="subtitle2">
            Tel: {order.customer.phoneNumber}
          </Typography>
          <Typography variant="subtitle2">
            Adres: {order.customer.address}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" align="center" gutterBottom>
            İşlemler
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Stack spacing={1}>

            <Stack direction='row' spacing={1}>

              <Button
                sx={{ width: '100px', height: '35px' }}
                variant="contained"
                color="info"
              >
                Yolda
              </Button>

              <Button
                sx={{ width: '140px', height: '35px' }}
                variant="contained"
                color="success"
              >
                Teslim Edildi
              </Button>

              <Button
                color="error"
                sx={{ width: '100px' }}
                variant="contained"
              >
                İptal Et
              </Button>

            </Stack>

            <Button
              sx={{ width: '100%', height: '35px' }}
              variant="contained"
              color="inherit"
            >
              Yazdır
            </Button>

            <Button
              sx={{ width: '100%', height: '35px' }}
              variant="contained"
              color="warning"
              onClick={() => {
                handleOrderSelect(null);
              }}
            >
              Siparişi Kapat
            </Button>
          </Stack>





        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetail;

