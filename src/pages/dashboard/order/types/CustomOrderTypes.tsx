import { Box } from "@mui/material";


export interface Order {
    id: string;
    orderNumber: string;
    customer: Customer;
    totalPrice: number;
    deliveryType: string;
    payment: { mealCard?: { cardSourceType?: string }; }
    eta: string;
    marketplace: "Yemek Sepeti" | "Trendyol Yemek" | "Getir";
}

export interface Customer {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
}


// Marketplace renkleri
const marketplaceColors = {
    "Trendyol Yemek": "#FF671F",
    "Getir": "#5D3FD3",
    "Yemek Sepeti": "#E60012",
};

export type MarketplaceType = keyof typeof marketplaceColors;

export const MarketplaceBadge = ({ name }: { name: MarketplaceType }) => (
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