
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


