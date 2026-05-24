import { UserRole } from "../../../common/enums/UserRole";

export interface UserResponseDto {
    userId: string;
    email: string;
    name?: string;
    role: UserRole[];
    createdAt: Date;
}
