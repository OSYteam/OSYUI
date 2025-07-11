import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../modules/auth/store/authStore';
import { useEffect } from 'react';


const RouteGuard = () => {
    const { isAuthenticated, userDto } = useAuthStore();
    // const location = useLocation();


    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

    if (location.pathname === '/') {
        if (userDto.role[0] === 0) {
            return <Navigate to="/seller" replace />;
        } else if (userDto.role[0] === 1) {
            return <Navigate to="/c" replace />;
        }

    }

    return <Outlet />;
};

export default RouteGuard;
