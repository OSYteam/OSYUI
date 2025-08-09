import { ProductStatus } from "../enum/productStatus";

export interface VariantAttributeResponseDto {
    attributeName: string;
    attributeValue: string;
}

export interface ProductVariantResponseDto {
    id: string;

    price: number;

    stock: number;

    status: ProductStatus;
    attributes?: VariantAttributeResponseDto[];
}

export interface ProductResponseDto {
    id: string;

    name: string;

    desc?: string;

    stock: number;

    discount: number;

    variants?: ProductVariantResponseDto[];
}
