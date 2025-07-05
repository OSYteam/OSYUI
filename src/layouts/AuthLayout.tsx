import { Box, Container, Typography } from '@mui/material';
// import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../pages/auth/store/authStore';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {


  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (isAuthenticated) return <Navigate to="/seller" />;

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Hoş geldin Bitanem 💖
        </Typography>
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;
