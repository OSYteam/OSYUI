import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../modules/auth/store/authStore';


const RouteGuard = () => {
    const { isAuthenticated } = useAuthStore();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

    if (location.pathname === '/') {
        return <Navigate to="/seller" replace />;
    }

    return <Outlet />;
};

export default RouteGuard;
