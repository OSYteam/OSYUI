import { Box } from "@mui/material";
import ReceiptItem from "../order/components/ReceiptItem/ReceiptItem";
import mockReceiptData from "./mock/receiptData";


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
            {mockReceiptData.map((order) => (
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
