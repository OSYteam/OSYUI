import { Box, Card, Stack, Typography } from "@mui/material";

const orders = [
    {
        id: "1000000023261",
        orderNumber: "1221047877",
        customer: {
            firstName: "Ali",
            lastName: "Yılmaz"
        },
        totalPrice: 40.99,
        deliveryType: "GO",
        payment: {
            mealCard: {
                cardSourceType: "PLUXEE - ONLINE"
            }
        },
        eta: "32 - 47 dk"
    },
    {
        id: "1000000023262",
        orderNumber: "1221047999",
        customer: {
            firstName: "Zeynep",
            lastName: "Demir"
        },
        totalPrice: 68.5,
        deliveryType: "STORE",
        payment: {
            mealCard: {
                cardSourceType: "MULTINET"
            }
        },
        eta: "25 - 35 dk"
    },
    {
        id: "1000000023263",
        orderNumber: "1221048001",
        customer: {
            firstName: "Mert",
            lastName: "Kaya"
        },
        totalPrice: 55.25,
        deliveryType: "GO",
        payment: {
            mealCard: {
                cardSourceType: "TICKET RESTAURANT"
            }
        },
        eta: "40 - 55 dk"
    },
    {
        id: "1000000023264",
        orderNumber: "1221048033",
        customer: {
            firstName: "Elif",
            lastName: "Şahin"
        },
        totalPrice: 32.0,
        deliveryType: "STORE",
        payment: {
            mealCard: {
                cardSourceType: "PLUXEE - MAĞAZA"
            }
        },
        eta: "20 - 30 dk"
    }
];

const getMarketplaceName = (deliveryType: string) => {
    switch (deliveryType) {
        case "GO":
        case "STORE":
            const marketplaces = ["Trendyol Yemek", "Getir", "Yemek Sepeti"];
            return marketplaces[Math.floor(Math.random() * marketplaces.length)];
        default:
            return "Bilinmeyen";
    }
};

const OrderList = () => {
    return (
        <Box
            m={2}
            sx={{
                height: "100%",
                width: "30%",
                ml: 2
            }}
        >
            <Stack spacing={2}>
                {orders.map((order) => (
                    <Card key={order.id} sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Sipariş No: {order.orderNumber}
                        </Typography>
                        <Typography variant="body1">
                            Müşteri: {order.customer.firstName} {order.customer.lastName}
                        </Typography>
                        <Typography variant="body2">Toplam Tutar: ₺{order.totalPrice}</Typography>
                        <Typography variant="body2">Teslimat Tipi: {order.deliveryType}</Typography>
                        <Typography variant="body2">
                            Pazaryeri: {getMarketplaceName(order.deliveryType)}
                        </Typography>
                        <Typography variant="body2">
                            Ödeme: {order.payment?.mealCard?.cardSourceType || "Bilinmiyor"}
                        </Typography>
                        <Typography variant="body2">Tahmini Süre: {order.eta}</Typography>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
};

export default OrderList;
