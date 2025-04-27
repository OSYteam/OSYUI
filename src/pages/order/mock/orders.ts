import { Order } from "../types/CustomOrderTypes";

const orders: Order[] = [
    {
        id: "1000000023261",
        orderNumber: "1221047877",
        customer: {
            firstName: "Ali",
            lastName: "Yılmaz",
            address: "Mustafa Kemal Mahallesi Arife Sokak 29/1 Manisa/Turgutlu",
            phoneNumber: "+90 0555 555 55 55"
        },
        totalPrice: 40.99,
        deliveryType: "GO",
        payment: { mealCard: { cardSourceType: "PLUXEE - ONLINE" } },
        eta: "21.04.2025 16:29",
        marketplace: "Yemek Sepeti",
    },
    {
        id: "1000000023262",
        orderNumber: "1221047999",
        customer: {
            firstName: "Zeynep",
            lastName: "Demir",
            address: "Mustafa Kemal Mahallesi Arife Sokak 29/1 Manisa/Turgutlu",
            phoneNumber: "+90 0555 555 55 55"
        },
        totalPrice: 68.5,
        deliveryType: "STORE",
        payment: { mealCard: { cardSourceType: "MULTINET" } },
        eta: "21.04.2025 15:32",
        marketplace: "Trendyol Yemek",
    },
    {
        id: "1000000023263",
        orderNumber: "1221048001",
        customer: {
            firstName: "Mert", lastName: "Kaya", address: "Mustafa Kemal Mahallesi Arife Sokak 29/1 Manisa/Turgutlu",
            phoneNumber: "+90 0555 555 55 55"
        },
        totalPrice: 55.25,
        deliveryType: "GO",
        payment: { mealCard: { cardSourceType: "TICKET RESTAURANT" } },
        eta: "21.04.2025 16:10",
        marketplace: "Trendyol Yemek",
    },
    {
        id: "1000000023264",
        orderNumber: "1221048033",
        customer: {
            firstName: "Elif", lastName: "Şahin", address: "Mustafa Kemal Mahallesi Arife Sokak 29/1 Manisa/Turgutlu",
            phoneNumber: "+90 0555 555 55 55"
        },
        totalPrice: 32.0,
        deliveryType: "STORE",
        payment: { mealCard: { cardSourceType: "PLUXEE - MAĞAZA" } },
        eta: "21.04.2025 16:00",
        marketplace: "Getir",
    },


];

export default orders;