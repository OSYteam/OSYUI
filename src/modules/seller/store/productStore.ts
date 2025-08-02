import { create } from "zustand";
import { ProductResponseDto } from "../../../common/dto/ProductResponseDto";
import { immer } from "zustand/middleware/immer";

interface ProductState {
    products: ProductResponseDto[];
    setProduct: (product: ProductResponseDto[]) => void;
    addProduct: (product: ProductResponseDto) => void;
    updateProduct: (product: ProductResponseDto) => void;
    dropProduct: (id: string) => void;
    dropVariant: (id: string) => void;
    clearProduct: () => void;
}

export const useProductStore = create<ProductState>()(
    immer((set) => ({
        products: [],

        setProduct: (products) => set((state) => {
            state.products = products;
            console.log(state.products);

        }),

        addProduct: (product) => set((state) => {
            state.products.push(product);
        }),

        updateProduct: (updated) => set((state) => {
            const index = state.products.findIndex(p => p.id === updated.id);
            if (index !== -1) {
                state.products[index] = updated;
            }
        }),

        dropProduct: (id) => set((state) => {
            state.products = state.products.filter(p => p.id !== id);
        }),

        dropVariant: (id) => set(() => {

        }),

        clearProduct: () => set((state) => {
            state.products = [];
        }),
    }))
);