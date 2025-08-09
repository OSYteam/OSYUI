import { ProductStatus } from "../enum/productStatus";

export interface UpdateProductVariantDto {
    id?: string;
    stock?: number;
    price?: number;
    status?: ProductStatus;
    attributes?: CreateVariantAttributeInput[];
}

export interface CreateVariantAttributeInput {
    attribute: number; // Attribute ID (örnek: renk, beden)
    attributeVal: number; // AttributeValue ID (örnek: kırmızı, xl)
}

export class UpdateProductDto {
    name?: string;
    desc?: string;
    discount?: number;
    variants?: UpdateProductVariantDto[];
}