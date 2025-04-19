import { Box, Stack } from "@mui/material";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import OrderList from "./components/OrderList/OrderList";

const OrderPage = () => {

    return (
        <Box sx={{
            height: "90%",
            borderRadius: 5,
            backgroundColor: "whitesmoke",
            m: 2,
            
        }}>

            <Stack direction={"row"}>


            <OrderList />

            <OrderDetail />
            </Stack>

        </Box>
    )

}


export default OrderPage;