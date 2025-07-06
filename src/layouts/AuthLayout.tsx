import { Box, Container } from '@mui/material';
import { useAuthStore } from '../modules/auth/store/authStore';
import { Navigate, Outlet } from 'react-router-dom';
import logo2 from '../assets/images/06.jpg'

const AuthLayout = () => {

  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (isAuthenticated) return <Navigate to="/seller" />;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2,
        gap: 4,
        background: 'linear-gradient(to right, #ffffff, #f5f5f5, #e0e0e0, #cccccc)',
      }}
    >

      <Box sx={{
        // flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 600
      }}>
        <img src={logo2} alt="auth illustration"
          style={{
            maxWidth: '600px',
            maxHeight: '600px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}

        />
      </Box>

      <Box
        sx={{
          // flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 1,
          borderRadius: 3,
          width: 450,
          height: 550,
        }}>
        <Outlet />
      </Box>

    </Container>
  );
};

export default AuthLayout;
