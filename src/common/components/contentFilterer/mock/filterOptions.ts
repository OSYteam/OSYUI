const filterOptions = [
    {
        name: "Restoran",
        field: "marketplace",
        subOpt: [
            { name: "Yemek Sepeti" },
            { name: "Trendyol Yemek" },
            { name: "Getir" },
        ],
    },
    {
        name: "Ödeme Tipi",
        field: "payment.mealCard.cardSourceType",
        subOpt: [
            { name: "MULTINET" },
            { name: "PLUXEE - ONLINE" },
            { name: "TICKET RESTAURANT" },
        ],
    },
];

export default filterOptions;