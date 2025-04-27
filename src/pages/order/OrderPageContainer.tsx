import { useState } from "react";
import { Box, Stack } from "@mui/material";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import OrderList from "./components/OrderList/OrderList";
import orders from "./mock/orders";

const OrderPage = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <Box
            sx={{
                height: "90%",
                borderRadius: 5,
                backgroundColor: "whitesmoke",
                m: 2,
            }}
        >
            <Stack direction={"row"}>
                <OrderList orders={orders} onOrderSelect={setSelectedOrder} />
                <OrderDetail order={selectedOrder} />
            </Stack>
        </Box>
    );
};

export default OrderPage;
