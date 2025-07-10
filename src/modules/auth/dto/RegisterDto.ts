import { UserRole } from "../../../common/enums/UserRole";

export interface RegisterDto {
    email: string;
    password: string;
    name?: string;
    surname?: string;
    phone: string;
    roles: UserRole[];
}
