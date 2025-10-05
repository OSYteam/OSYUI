// import "redTshirt" from '../../../../assets/images/products/red-shirt.jpg'
// import "blackTshirt" from '../../../../assets/images/products/black-shirt.jpg'
// import "blueTshirt" from '../../../../assets/images/products/blue-shirt.jpg'
// import "whiteTshirt" from '../../../../assets/images/products/white-shirt.jpg'
// import "grayTshirt" from '../../../../assets/images/products/gray-shirt.jpg'
import { ProductStatus } from '../../modules/seller/features/productManagement/enum/productStatus'

interface VariantAttribute {
    attributes: string;
    attributeValue: string;
}

export interface Variant {
    id: number;
    attributes: VariantAttribute[];
    variantValue: string;
    stock: number;
    price: number;
    status: ProductStatus,
    imageUrl: string;
}

export const mockVariants: Variant[] = [
    {
        id: 1,
        attributes: [
            { attributes: "Color", attributeValue: "Siyah" },
            { attributes: "Size", attributeValue: "M" },
        ],
        variantValue: "Siyah - M",
        stock: 15,
        price: 199.90,
        status: ProductStatus.AVAILABLE,
        imageUrl: "blackTshirt"
    },
    {
        id: 2,
        attributes: [
            { attributes: "Color", attributeValue: "Beyaz" },
            { attributes: "Size", attributeValue: "L" },
        ],
        variantValue: "Beyaz - L",
        stock: 5,
        price: 199.90,
        status: ProductStatus.AVAILABLE,
        imageUrl: "whiteTshirt"
    },
    {
        id: 3,
        attributes: [
            { attributes: "Color", attributeValue: "Gri" },
            { attributes: "Size", attributeValue: "S" },
        ],
        variantValue: "Gri - S",
        stock: 0,
        price: 189.90,
        status: ProductStatus.OUT_OF_STOCK,
        imageUrl: "grayTshirt"
    },
    {
        id: 4,
        attributes: [
            { attributes: "Color", attributeValue: "Lacivert" },
            { attributes: "Size", attributeValue: "XL" },
        ],
        variantValue: "Lacivert - XL",
        stock: 8,
        price: 209.90,
        status: ProductStatus.AVAILABLE,
        imageUrl: "blueTshirt"
    },
    {
        id: 5,
        attributes: [
            { attributes: "Color", attributeValue: "Kırmızı" },
            { attributes: "Size", attributeValue: "M" },
        ],
        variantValue: "Kırmızı - M",
        stock: 0,
        price: 199.90,
        status: ProductStatus.UNAVAILABLE,
        imageUrl: "redTshirt"
    },
];