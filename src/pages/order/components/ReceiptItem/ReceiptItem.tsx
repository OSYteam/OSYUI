import { Box, Typography, Paper, Stack } from "@mui/material";

interface ReceiptItemProps {
    order: {
        orderNumber: string;
        customer: { firstName: string; lastName: string };
        totalPrice: number;
        deliveryType: string;
        payment: { mealCard: { cardSourceType: string } };
        eta: string;
    };
    //badgeColor: string;
}

const ReceiptItem = ({ order }: ReceiptItemProps) => {
    return (
        <Paper elevation={3} sx={{ p: 2, mb: 2, borderRadius: 3, ":hover": { backgroundColor: "#eaeaea" }, }}>
            <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle2" fontWeight="bold">
                    Sipariş No: {order.orderNumber}
                </Typography>
                <Box
                    sx={{
                        color: "white",
                        borderRadius: 1,
                        px: 1.5,
                        py: 0.5,
                        fontSize: "0.8rem",
                    }}
                >
                </Box>
            </Stack>
            <Typography>Müşteri: {order.customer.firstName} {order.customer.lastName}</Typography>
            <Typography>Toplam: ₺{order.totalPrice.toFixed(2)}</Typography>
            <Typography>Teslimat: {order.deliveryType}</Typography>
            <Typography>Ödeme: {order.payment.mealCard.cardSourceType}</Typography>
            <Typography>ETA: {order.eta}</Typography>
        </Paper>
    );
};

export default ReceiptItem;
