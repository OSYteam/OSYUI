import api from "../../../api/api";
import { LoginDto } from "../dto/LoginDto";
import { UserResponseDto } from "../dto/UserResponse";
import { useAuthStore } from "../store/authStore";

import { getMe } from '../../user/user.service'

const authStore = useAuthStore.getState();

export async function login(dto: LoginDto): Promise<string> {
    try {
        const { data } = await api.post('/auth/login', dto);

        const userDto: UserResponseDto = await getMe(data.accessToken);
        authStore.setUserInformation(userDto);

        return data.accessToken;
    } catch (error: any) {
        console.error("Giriş hatası:", error);
        alert(JSON.stringify(error.response.data['error']));
        throw error;
    }
}

export async function logout(): Promise<void> {
    const { data } = await api.post('/auth/logout');

    console.log(data);
    return;

}