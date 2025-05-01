import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import OrderList from "./components/OrderList/OrderList";
import MainContentLayout from "./layouts/MainContentLayout";
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
        <MainContentLayout>


            <Stack direction={"row"}>
                <OrderList orders={orders} selectedOrder={selectedOrder} onOrderSelect={handleOrderSelect} />
                <OrderDetail order={selectedOrder} handleOrderSelect={handleOrderSelect} />
            </Stack>
        </MainContentLayout>

    );
};

export default OrderPage;
