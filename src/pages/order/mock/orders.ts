const orders = [
    {
        id: "1000000023261",
        orderNumber: "1221047877",
        customer: { firstName: "Ali", lastName: "Yılmaz" },
        totalPrice: 40.99,
        deliveryType: "GO",
        payment: { mealCard: { cardSourceType: "PLUXEE - ONLINE" } },
        eta: "32 - 47 dk",
        marketplace: "Yemek Sepeti",
    },
    {
        id: "1000000023262",
        orderNumber: "1221047999",
        customer: { firstName: "Zeynep", lastName: "Demir" },
        totalPrice: 68.5,
        deliveryType: "STORE",
        payment: { mealCard: { cardSourceType: "MULTINET" } },
        eta: "25 - 35 dk",
        marketplace: "Trendyol Yemek",
    },
    {
        id: "1000000023263",
        orderNumber: "1221048001",
        customer: { firstName: "Mert", lastName: "Kaya" },
        totalPrice: 55.25,
        deliveryType: "GO",
        payment: { mealCard: { cardSourceType: "TICKET RESTAURANT" } },
        eta: "40 - 55 dk",
        marketplace: "Trendyol Yemek",
    },
    {
        id: "1000000023264",
        orderNumber: "1221048033",
        customer: { firstName: "Elif", lastName: "Şahin" },
        totalPrice: 32.0,
        deliveryType: "STORE",
        payment: { mealCard: { cardSourceType: "PLUXEE - MAĞAZA" } },
        eta: "20 - 30 dk",
        marketplace: "Getir",
    },
];

export default orders;