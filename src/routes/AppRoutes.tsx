import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/auth/Login';
import Profile from '../pages/dashboard/Profile';
import OrderPage from '../pages/dashboard/order/OrderPageContainer';
import RouteGuard from './RouteGuard';
import Settings from '../pages/dashboard/Settings';
import Stats from '../pages/dashboard/Stats';
import Receipt from '../pages/dashboard/Receipt';
import RootLayout from '../layouts/rootLayout/RootLayout';
import SellerLayout from '../layouts/sellerLayout/SellerLayout';




const router = createBrowserRouter([
  {
    //magazaismi.ozzy.com/home
    path: '/',
    element: <RouteGuard />,
    children: [
      {
        // base path (employee)
        path: '/',
        element: <RootLayout />,
        children: [
          //home
          //product-detail
          //
          // { index: true, element: <Login /> },
        ]
      },
      {
        //magazaismi.ozzy.com/seller/dashboard
        //satici/dashboard
        path: '/seller',
        element: <SellerLayout />,
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
  //admin.ozzy.com
  {


  },
  {
    //magazaismi.ozzy.com/auth
    // /auth
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
