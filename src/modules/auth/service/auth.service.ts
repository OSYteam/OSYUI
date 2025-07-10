import api from "../../../api/api";
import { RegisterDto } from "../dto/RegisterDto";



export async function register(dto: RegisterDto): Promise<void> {

    try {
        const response = await api.post('/user/register', dto);
        console.log("Kayıt başarılı:", response.data);
    } catch (error) {
        console.error("Kayıt hatası:", error);
        throw error;
    }

}

export async function login(email: string, password: string): Promise<string> {
    const { data } = await api.post('/auth/login', { email, password });

    return data.accessToken;

}


export async function logout(): Promise<void> {
    const { data } = await api.post('/auth/logout');

    console.log(data);
    return;

}