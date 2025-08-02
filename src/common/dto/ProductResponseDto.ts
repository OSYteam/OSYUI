import { ProductStatus } from "../../modules/seller/productManagement/enum/productStatus";

export interface VariantAttributeResponseDto {
    attributeName: string;
    attributeValue: string;
}

export interface ProductResponseDto {
    id: string;
    name: string;
    desc: string;
    stock: number;
    discount: number;
    variants?: ProductVariantResponseDto[];
}

export interface ProductVariantResponseDto {
    id: string;
    imageUrl: string;
    price: number;
    stock: number;
    status: ProductStatus;
    attributes?: VariantAttributeResponseDto[];
}
