// import { Navigate, Outlet } from 'react-router-dom';

import { Navigate, Outlet } from "react-router";

const isAuthenticated = () => {
    return true;
};

const RouteGuard = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/auth" />;
};

export default RouteGuard;
