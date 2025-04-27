import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const accessTokenLocalStroge = localStorage.getItem('access_token');


interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  setAuth: (accessToken: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(

  immer((set) => ({

    // isAuthenticated: !!accessTokenLocalStroge,
    isAuthenticated: true,
    accessToken: accessTokenLocalStroge,

    setAuth: (accessToken: string) => {
      set((state) => {

        state.accessToken = accessToken;
        state.isAuthenticated = true;
        localStorage.setItem('access_token', accessToken);
      });
    },

    clearAuth: () => {
      set((state) => {
        state.isAuthenticated = false;
        localStorage.removeItem('access_token');
      });
    },
  }))
);
