import { Box } from "@mui/material";
import { orders } from './features/order/components/Data/orders'
import ReceiptItem from "./features/order/components/ReceiptItem/ReceiptItem";


const Receipt = () => {
    return (
        <Box
            p={4}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-start',
            }}
        >
            {orders.map((order) => (
                <Box
                    key={order.id}
                    sx={{
                        width: 'calc(20% - 12px)',
                        //marginBottom: 2,
                        margin: '4px',
                    }}
                >
                    <ReceiptItem
                        order={order}
                    //badgeColor={marketplaceColors[order.marketplace as keyof typeof marketplaceColors]}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default Receipt;
