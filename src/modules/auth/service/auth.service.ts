import api from "../../../api/api";
import { LoginDto } from "../dto/LoginDto";
import { RegisterDto } from "../dto/RegisterDto";
import { UserResponseDto } from "../dto/UserResponse";
import { useAuthStore } from "../store/authStore";

const authStore = useAuthStore.getState();

export async function register(dto: RegisterDto): Promise<void> {
    try {
        const response = await api.post('/user/register', dto);
        console.log("Kayıt başarılı:", response.data);
    } catch (error) {
        console.error("Kayıt hatası:", error);
        throw error;
    }

}

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

async function getMe(accessToken: string): Promise<any> {
    const headers = {
        Authorization: `Bearer ${accessToken}`
    };

    try {
        const { data } = await api.get('/user/getme', { headers });
        // console.log(data);
        return data;

    } catch (error) {
        console.error("getMe hatası:", error);
        throw error;
    }
}


export async function logout(): Promise<void> {
    const { data } = await api.post('/auth/logout');

    console.log(data);
    return;

}