import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import OrderList from "./components/OrderList/OrderList";
import { Order } from "./types/CustomOrderTypes";
import orders from "./mock/orders";




const OrderPage = () => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleOrderSelect = (order: Order | null) => {
        if (selectedOrder?.id === order?.id)
            setSelectedOrder(null);
        else
            setSelectedOrder(order);
    }


    useEffect(() => {
    }, [selectedOrder]);

    return (
        <Box
            sx={{
                height: "100%",
                width: '100%',
                p: 2,
                borderRadius: 5,
                backgroundColor: "whitesmoke",
                m: 2,
            }}
        >
            <Stack direction={"row"}>
                <OrderList orders={orders} selectedOrder={selectedOrder} onOrderSelect={handleOrderSelect} />
                <OrderDetail order={selectedOrder} handleOrderSelect={handleOrderSelect} />
            </Stack>
        </Box>
    );
};

export default OrderPage;
