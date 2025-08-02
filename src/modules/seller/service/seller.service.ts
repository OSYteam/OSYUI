import { ProductResponseDto, ProductVariantResponseDto } from "../../../common/dto/ProductResponseDto";
import api from '../../../api/api'
import { HttpStatusCode } from "axios";
import { CreateProductDto } from "../productManagement/dto/CreateProductDto";

//#region --- PRODUCT ----

export async function getProducts(token: string): Promise<ProductResponseDto[]> {
    try {

        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await api.get('/seller-product/', { headers });
        return response.data as ProductResponseDto[];


    } catch (error) {
        console.error(`Get Product Error : ${error}`);
        throw error;
    }
}


export async function deleteProduct(accessToken: string, id: string): Promise<HttpStatusCode> {
    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        const response = await api.delete(`/seller-product/${id}`, { headers });
        return response.status;
    } catch (error) {
        console.error(`Delete Product Error : ${error}`);
        throw error;
    }
}


export async function createProduct(accessToken: string, dto: CreateProductDto): Promise<ProductResponseDto> {

    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        const response = await api.post(`seller-product/`, dto, { headers });
        return response.data;

    } catch (error) {
        console.error(`Delete Product Error : ${error}`);
        throw error;
    }
}

//#endregion



//#region --- VARIANTS ----

export async function deleteVariant(accessToken: string, id: string): Promise<number> {

    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        const response = await api.delete(`seller-product/variant/${id}`, { headers });
        return response.data as HttpStatusCode;

    } catch (error) {
        console.error(`Delete Variant Error : ${error}`);
        throw error;
    }
}



//#endregion 