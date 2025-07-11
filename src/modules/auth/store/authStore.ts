import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { UserResponseDto } from '../dto/UserResponse';
import { UserRole } from '../../../common/enums/UserRole';

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
  userDto: UserResponseDto;
  login: (user: UserResponseDto) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  immer((set) => ({
    isAuthenticated: initialAuth,
    userDto: initialUserDto,
    login: (user: UserResponseDto) => {
      set((state) => {
        state.userDto = user;
        state.isAuthenticated = true;
        console.log(state.userDto);
        localStorage.setItem('auth', 'true');
      });
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
