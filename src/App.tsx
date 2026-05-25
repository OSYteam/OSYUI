import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './modules/auth/context';
import { SocketProvider } from './modules/platforms/context';
import { NotificationProvider } from './shared/context';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <SocketProvider>
          <AppRoutes />
        </SocketProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
