import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Box,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    alpha,
    Badge,
    styled,
    InputBase,
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Receipt as OrdersIcon,
    Restaurant as MenuIcon,
    Inventory as InventoryIcon,
    Cloud as PlatformsIcon,
    Analytics as AnalyticsIcon,
    Settings as SettingsIcon,
    Person as ProfileIcon,
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    Mail as MailIcon,
    ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const drawerWidth = 240;
const miniDrawerWidth = 64;

const menuItems = [
    { text: 'Restoranım', icon: <DashboardIcon />, path: '/panel/home' },
    { text: 'Siparişler', icon: <OrdersIcon />, path: '/panel/orders' },
    { text: 'Menü', icon: <MenuIcon />, path: '/panel/menu' },
    { text: 'Stok', icon: <InventoryIcon />, path: '/panel/inventory' },
    { text: 'Platformlar', icon: <PlatformsIcon />, path: '/panel/platforms' },
    { text: 'Raporlar', icon: <AnalyticsIcon />, path: '/panel/analytics' },
];

const settingsItems = [
    { text: 'Ayarlar', icon: <SettingsIcon />, path: '/panel/settings' },
    { text: 'Profil', icon: <ProfileIcon />, path: '/panel/profile' },
];

const MainLayout = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(true);
    const open = Boolean(anchorEl);
    const notificationOpen = Boolean(notificationAnchorEl);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
        setNotificationAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setNotificationAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Drawer Navigation */}
            <Drawer
                sx={{
                    width: drawerOpen ? drawerWidth : miniDrawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerOpen ? drawerWidth : miniDrawerWidth,
                        boxSizing: 'border-box',
                        borderRight: '1px solid #e0e0e0',
                        overflowX: 'hidden',
                        transition: 'width 0.3s',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box sx={{ 
                    p: 2, 
                    textAlign: 'center', 
                    borderBottom: '1px solid #e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: drawerOpen ? 'space-between' : 'center',
                    minHeight: 64,
                }}>
                    {drawerOpen && (
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                                OSY
                            </Typography>
                          
                        </Box>
                    )}
                    <IconButton onClick={handleDrawerToggle} size="small">
                        <ChevronLeftIcon sx={{ 
                            transform: drawerOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s'
                        }} />
                    </IconButton>
                </Box>

                <List sx={{ mt: 1 }}>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                selected={location.pathname === item.path}
                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: drawerOpen ? 'initial' : 'center',
                                    px: 2.5,
                                    '&.Mui-selected': {
                                        backgroundColor: '#e3f2fd',
                                        '&:hover': {
                                            backgroundColor: '#bbdefb',
                                        },
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ 
                                    minWidth: 0,
                                    mr: drawerOpen ? 2 : 'auto',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </ListItemIcon>
                                {drawerOpen && (
                                    <ListItemText 
                                        primary={item.text} 
                                        primaryTypographyProps={{
                                            fontSize: '0.9rem',
                                            fontWeight: location.pathname === item.path ? 600 : 400
                                        }}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider sx={{ mt: 'auto' }} />

                <List>
                    {settingsItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                selected={location.pathname === item.path}
                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: drawerOpen ? 'initial' : 'center',
                                    px: 2.5,
                                    '&.Mui-selected': {
                                        backgroundColor: '#e3f2fd',
                                        '&:hover': {
                                            backgroundColor: '#bbdefb',
                                        },
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ 
                                    minWidth: 0,
                                    mr: drawerOpen ? 2 : 'auto',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </ListItemIcon>
                                {drawerOpen && (
                                    <ListItemText 
                                        primary={item.text}
                                        primaryTypographyProps={{
                                            fontSize: '0.9rem',
                                            fontWeight: location.pathname === item.path ? 600 : 400
                                        }}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerOpen ? drawerWidth : miniDrawerWidth}px)`,
                    ml: `${drawerOpen ? drawerWidth : miniDrawerWidth}px`,
                    backgroundColor: "#fff",
                    color: "#333",
                    boxShadow: "none",
                    borderBottom: "1px solid #ddd",
                    transition: 'width 0.3s, margin 0.3s',
                }}
                elevation={0}
            >
                <Toolbar>
                   
                    
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Ara…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                            size="large"
                            aria-label="show new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="show new notifications"
                            color="inherit"
                            onClick={handleNotificationClick}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                            <Avatar alt="Kullanıcı" src="/avatar.png" />
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
                            <MenuItem onClick={() => navigate('/panel/profile')}>Profil</MenuItem>
                            <MenuItem onClick={() => navigate('/panel/settings')}>Ayarlar</MenuItem>
                            <Divider />
                            <MenuItem onClick={() => navigate('/auth/login')}>Çıkış Yap</MenuItem>
                        </Menu>

                        <Menu
                            anchorEl={notificationAnchorEl}
                            open={notificationOpen}
                            onClose={handleNotificationClose}
                            PaperProps={{
                                elevation: 4,
                                sx: {
                                    mt: 1.5,
                                    minWidth: 300,
                                    maxHeight: 400,
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
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h6" sx={{ mb: 1 }}>Bildirimler</Typography>
                                <Divider />
                            </Box>
                            <MenuItem onClick={handleNotificationClose}>
                                <Box>
                                    <Typography variant="body2" fontWeight={600}>Yeni Sipariş</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        #12345 numaralı sipariş alındı
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleNotificationClose}>
                                <Box>
                                    <Typography variant="body2" fontWeight={600}>Stok Uyarısı</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Hamburger ekmeği stokları azaldı
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleNotificationClose}>
                                <Box>
                                    <Typography variant="body2" fontWeight={600}>Platform Senkronizasyonu</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Yemeksepeti menüsü güncellendi
                                    </Typography>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </Box>
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

export default MainLayout;
