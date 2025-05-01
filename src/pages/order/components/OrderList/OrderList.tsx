import { Box, Card, Typography, Divider, Button, Stack } from "@mui/material";
import { Order } from "../../types/CustomOrderTypes";
// import { MarketplaceBadge, MarketplaceType, Order } from "../../types/CustomOrderTypes";


const OrderList = ({
    orders,
    selectedOrder,
    onOrderSelect: handleOrder,
}: {
    orders: Order[];
    selectedOrder: Order | null;
    onOrderSelect: (order: Order) => void;
}) => {
    return (
        <Box m={2} sx={{ width: "100%" }}>
            <Box display="flex" flexDirection="column" gap={2}>
                {orders.map((order) => (
                    <Card
                        key={order.id}
                        // onClick={() => handleOrder(order)}
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 2,
                            boxShadow: 3,
                            borderRadius: 3,
                            "&:hover": {
                                backgroundColor: "#f1f1f1",
                            },
                            border: selectedOrder?.id === order.id ? "3px solid #4caf50" : "1px solid #e0e0e0",
                        }}
                    >
                        {/* Sol */}
                        <Box sx={{ minWidth: 200 }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Sipariş No:
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                                {order.orderNumber}
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle2" color="text.secondary">
                                Müşteri:
                            </Typography>
                            <Typography variant="body1">
                                {order.customer.firstName} {order.customer.lastName}
                            </Typography>
                        </Box>

                        {/* Adres Bilgisi */}
                        <Box sx={{ minWidth: 200, maxWidth: 250, wordBreak: "break-word" }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Adres:
                            </Typography>

                            <Divider sx={{ my: 1 }} />

                            <Typography
                                variant="body2"
                                sx={{
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                }}
                            >
                                {order.customer.address}
                            </Typography>
                            <Button
                                variant="contained"
                                size="small"
                                color="info"
                                sx={{ mt: 1 }}
                                onClick={() => {
                                    const query = encodeURIComponent(order.customer.address);
                                    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
                                }}
                            >
                                Haritada Aç
                            </Button>
                        </Box>


                        {/* Orta */}
                        <Box sx={{ minWidth: 200 }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Tutar:
                            </Typography>
                            <Typography variant="body1">₺{order.totalPrice.toFixed(2)}</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle2" color="text.secondary">
                                Teslimat Tipi:
                            </Typography>
                            <Typography variant="body1">{order.deliveryType}</Typography>
                        </Box>

                        {/* Sağ */}
                        <Box sx={{ minWidth: 200 }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Ödeme:
                            </Typography>
                            <Typography variant="body1">
                                {order.payment?.mealCard?.cardSourceType || "Bilinmiyor"}
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle2" color="text.secondary">
                                Tarih/Saat:
                            </Typography>
                            <Typography variant="body1">{order.eta}</Typography>

                            {/* Marketplace Badge */}
                            {/* {order.marketplace && (
                                <MarketplaceBadge name={order.marketplace as MarketplaceType} />
                            )} */}
                        </Box>

                        <Box sx={{ minWidth: 200 }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                İşlemler:
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Stack spacing={1}>
                                <Button
                                    color="success"
                                    sx={{ width: '100px' }}
                                    variant="contained"
                                >
                                    Onayla
                                </Button>
                                <Button
                                    sx={{ width: '100px' }}
                                    variant="contained"
                                    color="info"
                                >
                                    Adisyon
                                </Button>
                                <Button
                                    sx={{ width: '100px' }}
                                    variant="contained"
                                    color="inherit"
                                    onClick={() => handleOrder(order)}
                                >
                                    Detay
                                </Button>
                            </Stack>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default OrderList;
