import { create } from "zustand";
import { ProductResponseDto, ProductVariantResponseDto } from "../../../common/dto/ProductResponseDto";
import { immer } from "zustand/middleware/immer";
import { UpdateProductVariantDto } from "../productManagement/dto/UpdateProductVariantDto";

interface ProductState {
    products: ProductResponseDto[];
    setAllProducts: (product: ProductResponseDto[]) => void;
    appendProduct: (product: ProductResponseDto) => void;
    replaceProduct: (product: ProductResponseDto) => void;
    removeProductById: (id: string) => void;
    appendVariantToProduct: (productId: string, dto: ProductVariantResponseDto) => void;
    replaceVariantInProduct: (productId: string, variant: ProductVariantResponseDto) => void;
    removeVariantFromProduct: (productId: string, variantId: string) => void;
    clearAllProducts: () => void;
}

export const useProductStore = create<ProductState>()(
    immer((set) => ({
        products: [],

        clearAllProducts: () => set((state) => {
            state.products = [];
        }),

        setAllProducts: (products) => set((state) => {
            state.products = products;
        }),

        appendProduct: (product) => set((state) => {
            state.products.push(product);
        }),

        replaceProduct: (updated) => set((state) => {
            const index = state.products.findIndex(p => p.id === updated.id);
            if (index !== -1) {
                state.products[index] = updated;
            }
        }),

        removeProductById: (id) => set((state) => {
            state.products = state.products.filter(p => p.id !== id);
        }),

        appendVariantToProduct: (productId, variant) => set((state) => {
            const product = state.products.find(p => p.id === productId);
            if (product) {
                if (!product.variants)
                    product.variants = [];

                product.variants.push({
                    id: variant.id,
                    imageUrl: variant.imageUrl,
                    price: variant.price,
                    status: variant.status,
                    stock: variant.stock,
                    attributes: variant.attributes
                });
            }
        }),

        replaceVariantInProduct: (productId, updatedVariant) => set((state) => {
            const product = state.products.find((p) => p.id === productId);
            if (product?.variants) {
                const index = product.variants.findIndex((v) => v.id === updatedVariant.id);
                if (index !== -1) {
                    product.variants[index] = updatedVariant;
                }
            }

        }),

        removeVariantFromProduct: (productId, variantId) => set((state) => {
            const product = state.products.find((p) => p.id === productId);
            if (product?.variants) {
                product.variants = product.variants.filter((v) => v.id !== variantId);
            }
        }),

    }))
);