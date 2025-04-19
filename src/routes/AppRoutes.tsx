import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';
import RootLayout from '../layouts/rootLayout/RootLayout';
import Login from '../pages/auth/Login';
import Profile from '../pages/dashboard/Profile';
import OrderPage from '../pages/dashboard/order/OrderPageContainer';




const router = createBrowserRouter([
  {
    path: '/',
    // element: <RouteGuard />,
    children: [
      {
        path: '/dashboard',
        element: <RootLayout />,
        children: [
          { path: 'orders', element: <OrderPage /> },
          { path: 'profile', element: <Profile /> },
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Login /> },
    ]
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
