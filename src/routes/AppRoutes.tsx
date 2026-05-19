import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { AuthLayout } from '../layouts';

/**
 * Auth routes (Giriş yapmamış kullanıcılar)
 * AuthLayout içinde render edilir
 */
const authRoutes = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <div>Login Page</div> },
      { path: 'login', element: <div>Login Page</div> },
      { path: 'register', element: <div>Register Page</div> },
      { path: 'forgot-password', element: <div>Forgot Password Page</div> },
    ]
  }
];

/**
 * Main routes (Giriş yapmış kullanıcılar)
 * MainLayout içinde render edilir
 */
const mainRoutes = [
  {
    path: '/panel',
    element: <MainLayout />,
    children: [
      { index: true, element: <div>Dashboard Page</div> },
      { path: 'dashboard', element: <div>Dashboard Page</div> },
      { path: 'orders', element: <div>Orders Page</div> },
      { path: 'orders/:id', element: <div>Order Detail Page</div> },
      { path: 'menu', element: <div>Menu Page</div> },
      { path: 'menu/create', element: <div>Create Product Page</div> },
      { path: 'inventory', element: <div>Inventory Page</div> },
      { path: 'platforms', element: <div>Platforms Page</div> },
      { path: 'analytics', element: <div>Analytics Page</div> },
      { path: 'settings', element: <div>Settings Page</div> },
      { path: 'profile', element: <div>Profile Page</div> },
    ]
  }
];

/**
 * Fallback route (404 - Sayfa bulunamadı)
 */
const fallbackRoutes = [
  {
    path: '*',
    element: <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h1>404</h1>
      <p>Sayfa bulunamadı</p>
      <a href="/panel" style={{ color: '#1976d2' }}>Ana Sayfaya Dön</a>
    </div>
  }
];

/**
 * Router
 * Tüm route'lar burada birleştirilir
 */
const router = createBrowserRouter([
  ...authRoutes,
  ...mainRoutes,
  ...fallbackRoutes,
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
