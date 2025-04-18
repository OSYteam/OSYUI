import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/dashboard/Home';
import Login from '../pages/auth/Login';
import Profile from '../pages/dashboard/Profile';
import RouteGuard from './RouteGuard';




const router = createBrowserRouter([
  {
    path: '',
    element: <RouteGuard />,
    children: [
      {
        path: '/dashboard',
        element: <RootLayout />,
        children: [
          { path: '', element: <Home /> },
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
