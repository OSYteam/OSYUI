import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../auth/store/authStore';
import { UserRole } from '../../../common/enums/UserRole';

const SellerRouteGuard = () => {
  const { isAuthenticated, userDto } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    // Seller özel auth sayfasına yönlendir
    return <Navigate to="/seller/auth" state={{ from: location }} replace />;
  }

  if (!userDto?.role.includes(UserRole.SELLER)) {
    // Kullanıcı seller değilse, ana sayfaya ya da 403 sayfasına at
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default SellerRouteGuard;
