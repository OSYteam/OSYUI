// import { Outlet, NavLink } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
// import MenuIcon from '@mui/icons-material/Menu';
import { useState, MouseEvent } from 'react';
import { FaNewspaper, FaStore } from 'react-icons/fa';
import { MdMenu, MdSettings } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router';

const drawerWidth = 240;

const RootLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const menuContent = [
    {
      text: 'siparişlerim',
      path: '/dashboard',
      icon: <FaNewspaper fontSize={25} />,
      badgeContent: 21,
    },
    {
      text: 'mağazam',
      path: '/dashboard/profile',
      icon: <FaStore fontSize={25} />,
      badgeContent: 7,

    },
    {
      text: 'Ayarlar',
      path: '/dashboard',
      icon: <MdSettings fontSize={25} />

    },
  ];

  const drawer = (
    <div>
      <Toolbar >
        <Typography variant="h6" noWrap component="div">
          Abc Ev Yemekleri
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuContent.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                colorScheme: "black"
              }}

            >
              <Stack direction={"row"} spacing={2} alignItems={"center"}>

                {item.badgeContent ?
                  <Badge color="secondary" badgeContent={item.badgeContent} max={20}>
                    {item.icon}
                  </Badge>
                  :
                  item.icon
                }
                <ListItemText primary={item.text} />
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        // position="fixed"

        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",

        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%"
            }}
          >

            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MdMenu />
            </IconButton>

            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Tooltip title="Account settings">

                <Avatar sx={{ bgcolor: deepOrange[400] }}>N</Avatar>
              </Tooltip>
            </Button>

            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

          </Stack>

        </Toolbar>
      </AppBar>




      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar menus"
      >
        {/* Mobilde drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Masaüstü için drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8, // AppBar yüksekliği kadar boşluk bırak
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
