import { Box, Container } from '@mui/material';
// import { useAuthStore } from '../modules/auth/store/authStore';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../auth/store/authStore';

const CustomerAuthLayout = () => {

  // const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  // if (isAuthenticated) return <Navigate to="/seller" />;
  const navigate = useNavigate();
  const { isAuthenticated, userDto } = useAuthStore();
  useEffect(() => {
    if (isAuthenticated && userDto) {
      if (userDto.role[0] === 0) {
        navigate('/seller');
      } else if (userDto.role[0] === 1) {
        navigate('/c');
      }
    }
  }, [isAuthenticated, userDto]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
        gap: { xs: 2, md: 4 },
        background: 'linear-gradient(to right, #ffffff, #f5f5f5, #e0e0e0, #cccccc)',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: 350, md: 400, lg: 450, xl: 500 },
        }}
      >
        <img
          // src={logo2}
          alt="auth illustration"
          style={{
            width: '100%',
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 1,
          borderRadius: 3,
          width: { xs: '100%', sm: 350, md: 400 },
          // height: { xs: 'auto', md: 550 },
        }}
      >
        <Outlet />
      </Box>
    </Container>

  );
};

export default CustomerAuthLayout;
