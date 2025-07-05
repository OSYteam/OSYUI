import {
  Box,
  CssBaseline
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Appbar from '../sellerLayout/components/Appbar';
import DrawerMenu from '../sellerLayout/components/DrawerMenu';


//müşteri layout
const RootLayout = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* <Appbar /> */}

      <DrawerMenu />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
          // bgcolor: "yellowgreen",
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
