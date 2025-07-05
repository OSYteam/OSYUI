import {
  Box,
  CssBaseline
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Appbar from '../sellerLayout/components/Appbar';


//müşteri layout
const RootLayout = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Appbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          mt: 8,
          bgcolor: "yellowgreen",
          // boxShadow: 23,
          height: "93vh"
        }}
      >
        <Outlet />
      </Box>

    </Box >
  );
};

export default RootLayout;
