import api from '../../../api/api'
import { UserRole } from '../../../common/enums/UserRole';

export async function getRole(userId: string): Promise<UserRole> {

    try {
        const data = await api.get(`/role/${userId}`);
        console.log(data);
    } catch (error) {
        console.error(error);
    }

    return UserRole.ADMIN;
}

