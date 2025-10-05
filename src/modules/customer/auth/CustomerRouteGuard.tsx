import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserRole } from '../../../common/enums/UserRole';
import { useAuthStore } from '../../auth/store/authStore';


const CustomerRouteGuard = () => {
    const { isAuthenticated, userDto } = useAuthStore();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/customer/auth" state={{ from: location }} replace />;
    }

    if (!userDto?.role.includes(UserRole.CUSTOMER)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default CustomerRouteGuard;
