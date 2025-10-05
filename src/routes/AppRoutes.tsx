import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../modules/main/layout/RootLayout';

import ForgetPassword from '../modules/auth/ForgetPassword';
import MailVerify from '../modules/auth/MailVerify';
import Register from '../modules/auth/Register';



import CustomerLogin from '../modules/customer/auth';
import CustomerRouteGuard from '../modules/customer/auth/CustomerRouteGuard';
import CustomerMainLayout from '../modules/customer/layouts/CustomerMainLayout';
import Home from '../modules/main/components/home';
import SellerLogin from '../modules/seller/auth';
import SellerRouteGuard from '../modules/seller/auth/SellerAuthGuard';
import SellerAuthLayout from '../modules/seller/layouts/SellerAuthLayout';
import CustomerAuthLayout from '../modules/customer/layouts/CustomerAuthLayout';
import SellerMainLayout from '../modules/seller/layouts/sellerMainLayout';
import Dashboard from '../modules/seller/features/dashboard/Dashboard';
import CreateProduct from '../modules/seller/features/productManagement/components/CreateProduct';
import ProductManagement from '../modules/seller/features/productManagement/ProductManagement';


/**
 * Main Site
 * Herkes bu route altındaki sayfalara erişebilir auth gerektirmez.
 */
const mainRoutes = [
  // all PUBLIC 
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ]
  },


];



/**
 * Customer Routes
 *  Sadece auth olmuş customerlar erişebilir.
 */
const customerRoutes = [

  // auth
  {
    path: '/customer/auth',
    element: <CustomerAuthLayout />,
    children: [
      { index: true, element: <CustomerLogin /> },
      { path: 'register', element: <Register /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'mail-verify', element: <MailVerify /> },
    ]
  },

  // protected
  {
    path: '/customer',
    element: <CustomerRouteGuard />,
    children: [
      {
        element: <CustomerMainLayout />,
        children: [
          // sepet, hesap sayfası vs...
        ]
      }
    ]
  },
];



/**
 * Seller routes
 *  Sadece auth olmuş seller erişebilir.
 */
const sellerRoutes = [

  // auth
  {
    path: '/seller/auth',
    element: <SellerAuthLayout />,
    children: [
      { index: true, element: <SellerLogin /> },
      // register, forget-password vs.
    ]
  },

  // protected
  {
    path: '/seller',
    element: <SellerRouteGuard />,
    children: [
      {
        element: <SellerMainLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'product', element: <ProductManagement /> },
          { path: 'create-product', element: <CreateProduct /> }
        ]
      }
    ]
  },
];


/**
 * Router
 *  Tüm modül routeları burada oluşturulur.
 */

const router = createBrowserRouter([

  ...mainRoutes,
  ...customerRoutes,
  ...sellerRoutes,
  // admin here...

]);

const AppRoutes = () => <RouterProvider router={router} />;
export const useRouter = () => router;
export default AppRoutes;
