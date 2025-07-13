import api from '../../api/api'
import { UserRole } from '../../common/enums/UserRole';
import { RegisterDto } from '../auth/dto/RegisterDto';
import { CreateUserRoleDto } from './dto/CreateUserRoleDto';

export async function register(dto: RegisterDto): Promise<string> {
    try {
        const response = await api.post('/user/register', dto);
        console.log("Kayıt başarılı:", response.data);
        return response.data.userId;
    } catch (error) {
        console.error("Kayıt hatası:", error);
        throw error;
    }
}


export async function getMe(accessToken: string): Promise<any> {
    const headers = {
        Authorization: `Bearer ${accessToken}`
    };

    try {
        const { data } = await api.get('/user/getme', { headers });
        return data;

    } catch (error) {
        console.error("getMe hatası:", error);
        throw error;
    }
}

export async function assignRole(dto: CreateUserRoleDto): Promise<void> {
    try {

        await api.post('/user/createRole', dto);
    } catch (error) {
        console.error("Create User Role Hatası:", error);
        throw error;
    }
}
