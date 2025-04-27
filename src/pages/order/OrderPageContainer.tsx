import { Stack } from "@mui/material";
import { useState } from "react";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import OrderList from "./components/OrderList/OrderList";
import MainContentLayout from "./layouts/MainContentLayout";
import orders from "./mock/orders";

const OrderPage = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <MainContentLayout>


            <Stack direction={"row"}>
                <OrderList orders={orders} onOrderSelect={setSelectedOrder} />
                <OrderDetail order={selectedOrder} />
            </Stack>
        </MainContentLayout>

    );
};

export default OrderPage;
