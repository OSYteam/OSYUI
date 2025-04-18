

import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/authStore";



const RouteGuard = () => {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default RouteGuard;
