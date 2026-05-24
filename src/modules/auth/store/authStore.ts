import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { UserResponseDto } from '../dto/UserResponse';

const initialAuth = localStorage.getItem('auth') === 'false';

const initialUserDto: UserResponseDto = {
  userId: '',
  name: '',
  email: '',
  role: [],
  createdAt: new Date(),
};
interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  userDto: UserResponseDto;
  setUserInformation: (user: UserResponseDto) => void;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  immer((set) => ({
    isAuthenticated: initialAuth,
    accessToken: '',
    userDto: initialUserDto,
    setUserInformation: (user: UserResponseDto) => {
      set((state) => {
        state.userDto = user;
        state.isAuthenticated = true;

        localStorage.setItem('auth', 'true');
      });
    },
    setAccessToken: (token) => {
      set((state) => {
        state.accessToken = token;
      })
    },
    logout: () => {
      set((state) => {
        state.userDto = initialUserDto;
        state.isAuthenticated = false;
        localStorage.removeItem('auth');
      });
    },
  }))
);
