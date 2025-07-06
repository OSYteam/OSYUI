import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import RootLayout from '../layouts/rootLayout/RootLayout';
import SellerLayout from '../layouts/sellerLayout/SellerLayout';
import Login from '../modules/auth/Login';
import RouteGuard from './RouteGuard';
import OrderPage from '../modules/seller/order/OrderPageContainer';
import Dashboard from '../modules/seller/dashboard/Dashboard';
import Home from '../modules/customer/home';
import ProductManagement from '../modules/seller/productManagement/ProductManagement';
import Register from '../modules/auth/Register';
import ForgetPassword from '../modules/auth/ForgetPassword';
import MailVerify from '../modules/auth/MailVerify';


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
          { index: true, element: <Dashboard /> },
        ]
      },
      {
        //magazaismi.ozzy.com/seller/dashboard
        path: '/seller',
        element: <SellerLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'order', element: <OrderPage /> },
          { path: 'product', element: <ProductManagement /> },

        ]
      }
    ]
  },
  //admin.ozzy.com
  {


  },

  //customer
  {
    path: '/c',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ]
  },
  {
    //magazaismi.ozzy.com/auth
    // /auth
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'mail-Verify', element: <MailVerify /> }
    ]
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export const useRouter = () => router;
export default AppRoutes;
