import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initialAuth = localStorage.getItem('auth') === 'true';


interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  immer((set) => ({
    isAuthenticated: initialAuth,

    login: () => {
      set((state) => {
        state.isAuthenticated = true;
        localStorage.setItem('auth', 'true');
      });
    },

    logout: () => {
      set((state) => {
        state.isAuthenticated = false;
        localStorage.removeItem('auth');
      });
    },
  }))
);
