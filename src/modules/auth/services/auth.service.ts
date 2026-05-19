import api from "../../../lib/api/api";
import { LoginDto } from "../dto/LoginDto";
import { useAuthStore } from "../store/authStore";

export async function login(dto: LoginDto): Promise<string> {
    try {
        const { data } = await api.post('/auth/login', dto);
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