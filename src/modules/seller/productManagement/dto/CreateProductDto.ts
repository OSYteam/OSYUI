import { ProductStatus } from "../enum/productStatus";

export interface CreateVariantAttributeInput {
    attribute: number; // Attribute ID (örnek: renk, beden)
    attributeVal: number; // AttributeValue ID (örnek: kırmızı, xl)
}

export interface CreateProductVariantDto {

    productId?: string;
    stock?: number;
    price?: number;
    status?: ProductStatus;
    imageUrl?: string;
    attributes: CreateVariantAttributeInput[];

}

export interface CreateProductDto {
    name: string;
    desc?: string;
    discount?: number;
    variants: CreateProductVariantDto[];
}