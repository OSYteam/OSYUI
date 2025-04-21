import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import RootLayout from '../layouts/rootLayout/RootLayout';
import Login from '../pages/auth/Login';
import Profile from '../pages/dashboard/Profile';
import OrderPage from '../pages/dashboard/order/OrderPageContainer';
import RouteGuard from './RouteGuard';
import Settings from '../pages/dashboard/Settings';
import Stats from '../pages/dashboard/Stats';
import Receipt from '../pages/dashboard/Receipt';




const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteGuard />,
    children: [
      {
        path: 'dashboard',
        element: <RootLayout />,
        children: [
          { index: true, element: <OrderPage /> },
          { path: 'profile', element: <Profile /> },
          { path: 'settings', element: <Settings /> },
          { path: 'stats', element: <Stats /> },
          { path: 'receipt', element: <Receipt /> },
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
    ]
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export const useRouter = () => router;
export default AppRoutes;
