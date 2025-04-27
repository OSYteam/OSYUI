
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';


interface ContentFilterState {
    expanded: boolean;
    toggleMenuExpanded: () => void;

}

export const useContentFilterStore = create<ContentFilterState>()(
    immer((set) => ({

        expanded: true,
        toggleMenuExpanded: () => {
            set(state => { state.expanded = !state.expanded })
        }

    }))
);
