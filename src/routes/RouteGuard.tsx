import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../modules/auth/store/authStore';
import { useEffect } from 'react';
import { UserRole } from '../common/enums/UserRole';


const RouteGuard = () => {
    const { isAuthenticated, userDto } = useAuthStore();
    // const location = useLocation();


    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

    if (location.pathname === '/') {
        const userRole = userDto.role[0];
        if (userRole == UserRole.SELLER) {
            return <Navigate to="/seller" replace />;
        } else if (userRole == UserRole.CUSTOMER) {
            return <Navigate to="/c" replace />;
        }

    }

    return <Outlet />;
};

export default RouteGuard;
