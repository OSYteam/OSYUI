import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  CssBaseline
} from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DrawerMenu from './components/DrawerMenu';

const drawerWidth = 200;

const SellerMainLayout = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <DrawerMenu />

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#fff",
          color: "#333",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Satıcı Paneli
          </Typography>

          <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
            <Avatar alt="Ozy Seller" src="/avatar.png" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
              elevation: 4,
              sx: {
                mt: 1.5,
                minWidth: 150,
              },
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>Profil</MenuItem>
            <MenuItem>Çıkış Yap</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pl: 4,
          pr: 4,
          pt: 4,
          mt: 8,
          bgcolor: "whitesmoke",
          overflowY: 'auto',
          height: 'calc(100vh - 64px)',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default SellerMainLayout;
