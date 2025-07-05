import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import RootLayout from '../layouts/rootLayout/RootLayout';
import SellerLayout from '../layouts/sellerLayout/SellerLayout';
import Login from '../modules/auth/Login';
import RouteGuard from './RouteGuard';
import OrderPage from '../modules/seller/order/OrderPageContainer';
import Dashboard from '../modules/seller/dashboard/Dashboard';


const router = createBrowserRouter([
  {
    //magazaismi.ozzy.com/home
    path: '/',
    element: <RouteGuard />,
    children: [
      {
        // base path (customer)
        path: '/',
        element: <RootLayout />,
        children: [

        ]
      },
      {
        //magazaismi.ozzy.com/seller/dashboard
        path: '/seller',
        element: <SellerLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'order', element: <OrderPage /> },

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
