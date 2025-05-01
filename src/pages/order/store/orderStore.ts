import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';



interface OrderState {

}

export const useOrderStore = create<OrderState>()(
    immer((set) => ({

    }))
);
