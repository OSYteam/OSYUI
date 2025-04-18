// import { Outlet } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { Navigate, Outlet } from 'react-router';

const AuthLayout = () => {


  const isAuthenticated = () => {
    return true;
  };


  return isAuthenticated() && <Navigate to="/dashboard" />;

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
