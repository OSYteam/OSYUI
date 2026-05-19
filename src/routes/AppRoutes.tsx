import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RestaurantMainLayout } from '../modules/restaurant';





/**
 * Seller routes
 *  Sadece auth olmuş seller erişebilir.
 */
// const sellerRoutes = [

//   // auth
//   {
//     path: '/seller/auth',
//     element: <SellerAuthLayout />,
//     children: [
//       { index: true, element: <SellerLogin /> },
//       // register, forget-password vs.
//     ]
//   },

//   // protected
//   {
//     path: '/seller',
//     // element: <SellerRouteGuard />,
//     children: [
//       {
//         element: <SellerMainLayout />,
//         children: [
//           { index: true, element: <Dashboard /> },
//           { path: 'product/list', element: <ProductList /> },
//           { path: 'product/create', element: <CreateProduct /> }
//         ]
//       }
//     ]
//   },
// ];

const authRoutes = [

  {
    path : '/auth',
    element: <div>Auth Layout</div>,
    children: [
      { index: true, element: <div>Login Page</div> },
    ]
  }
];


const restaurantRoutes = [
  {
    path: '/home',
    element: <RestaurantMainLayout />,
  }
];


/**
 * Router
 *  Tüm modül routeları burada oluşturulur.
 */

const router = createBrowserRouter([
  ...authRoutes,
  ...restaurantRoutes
]);

const AppRoutes = () => <RouterProvider router={router} />;
// export const useRouter = () => router;
export default AppRoutes;
