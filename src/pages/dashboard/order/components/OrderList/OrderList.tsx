import { Box, Card, Typography, Divider } from "@mui/material";

// Marketplace renkleri
const marketplaceColors = {
    "Trendyol Yemek": "#FF671F",
    "Getir": "#5D3FD3",
    "Yemek Sepeti": "#E60012",
} as const;

type MarketplaceType = keyof typeof marketplaceColors;

const MarketplaceBadge = ({ name }: { name: MarketplaceType }) => (
    <Box
        sx={{
            backgroundColor: marketplaceColors[name],
            color: "white",
            borderRadius: 1,
            px: 1.5,
            py: 0.5,
            display: "inline-block",
            fontWeight: "bold",
            fontSize: "0.8rem",
            minWidth: 100,
            textAlign: "center",
            mt: 1,
        }}
    >
        {name}
    </Box>
);

const OrderList = ({
    orders,
    onOrderSelect,
}: {
    orders: any[];
    onOrderSelect: (order: any) => void;
}) => {
    return (
        <Box m={2} sx={{ width: "100%" }}>
            <Box display="flex" flexDirection="column" gap={2}>
                {orders.map((order) => (
                    <Card
                        key={order.id}
                        onClick={() => onOrderSelect(order)}
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 2,
                            boxShadow: 3,
                            borderRadius: 3,
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "#f1f1f1",
                            },
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
                                Tahmini Süre:
                            </Typography>
                            <Typography variant="body1">{order.eta}</Typography>

                            {/* Marketplace Badge */}
                            {order.marketplace && (
                                <MarketplaceBadge name={order.marketplace as MarketplaceType} />
                            )}
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default OrderList;
