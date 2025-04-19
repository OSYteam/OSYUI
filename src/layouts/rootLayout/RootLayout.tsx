import {
  Box,
  CssBaseline
} from '@mui/material';
import { Outlet } from 'react-router';
import Appbar from './components/Appbar';
import DrawerMenu from './components/DrawerMenu';

const drawerWidth = 160;

const RootLayout = () => {




  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Appbar />

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
