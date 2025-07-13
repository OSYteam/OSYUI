import { UserRole } from "../../../common/enums/UserRole";

export interface CreateUserRoleDto {
    userId: string;
    roles: UserRole[]
}