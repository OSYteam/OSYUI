import { ProductResponseDto, ProductVariantResponseDto } from "../../../common/dto/ProductResponseDto";
import api from '../../../lib/api/api'
import { HttpStatusCode } from "axios";
import { CreateProductDto } from "../productManagement/dto/CreateProductDto";
import { UpdateProductDto, UpdateProductVariantDto } from "../productManagement/dto/UpdateProductVariantDto";

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
        console.error(`Create Product Error : ${error}`);
        throw error;
    }
}

export async function updateProduct(accessToken: string, pId: string, dto: UpdateProductDto): Promise<ProductResponseDto> {
    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`
        }

        const response = await api.patch(`seller-product/${pId}`, dto, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
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
        return response.status;

    } catch (error) {
        console.error(`Delete Variant Error : ${error}`);
        throw error;
    }
}

export async function createVariant(accessToken: string, pId: string, dto: UpdateProductVariantDto): Promise<ProductVariantResponseDto> {
    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        const response = await api.post(`seller-product/variant/`, dto, { headers });
        return response.data;
    } catch (error) {
        console.error(`Create Variant Error : ${error}`);
        throw error;
    }
}

export async function updateVariant(accessToken: string, dto: UpdateProductVariantDto): Promise<ProductVariantResponseDto> {
    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        const response = await api.patch(`seller-product/variant/${dto.id}`, dto, { headers });
        return response.data;
    } catch (error) {
        console.error(`Update Variant Error : ${error}`);
        throw error;
    }
}



//#endregion 


//#region --- MEDIA ---
export async function uploadVariantImage(accessToken: string, vId: string, image: File): Promise<string> {

    try {

        const formData = new FormData();
        formData.append("file", image);

        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        };

        const response = await api.post(`media/variant/${vId}`, formData, { headers })
        return response.data;
    } catch (error) {
        console.error(`Delete Variant Error : ${error}`);
        throw error;
    }
}
//#endregion