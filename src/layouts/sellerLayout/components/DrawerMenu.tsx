import {
    Badge,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { FaBoxOpen, FaHome, FaNewspaper, FaProductHunt, FaReceipt } from 'react-icons/fa';
import { MdBarChart, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const drawerWidth = 200;

const DrawerMenu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuContent = [
        {
            text: 'Dashboard',
            path: '/',
            icon: <FaHome fontSize={25} />,
            // badgeContent: 5,
            visible: true,
        },
        {
            text: 'Siparişlerim',
            path: 'order',
            icon: <FaNewspaper fontSize={25} />,
            badgeContent: 5,
            visible: true,
        },

        {
            text: 'Ürün Yönetimi',
            path: 'product',
            icon: <FaBoxOpen fontSize={25} />,
            badgeContent: 5,
            visible: true,
        },
        {
            text: 'İstatistik',
            path: '/seller/stats',
            icon: <MdBarChart fontSize={25} />,
            visible: false,
        },
        {
            text: 'Bilgi Formları',
            path: '/seller/receipt',
            icon: <FaReceipt fontSize={25} />,
            visible: false,
        },
        {
            text: 'Ayarlar',
            path: '/seller/settings',
            icon: <MdSettings fontSize={25} />,
            visible: false,

        },
    ];

    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
                <Typography variant="h6" noWrap component="div" sx={{ color: '#333', fontWeight: 'bold' }}>
                    Abc Zeytinyağları
                </Typography>
            </Toolbar>
            <List sx={{ paddingTop: '20px' }}>
                {menuContent.map((item) => {

                    if (!item.visible) return;

                    return (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                sx={{
                                    color: '#333',
                                    borderRadius: '10px',
                                    padding: '12px 15px',
                                    transition: '0.3s all ease',
                                    '&:hover': {
                                        backgroundColor: '#e0e0e0',
                                    },
                                    '&.active': {
                                        backgroundColor: '#bdbdbd',
                                        color: '#212121',
                                    },
                                }}
                            >
                                <Stack direction="row" spacing={2} alignItems="center">
                                    {item.badgeContent ? (
                                        <Badge
                                            color="secondary"
                                            badgeContent={item.badgeContent}
                                            max={20}
                                            sx={{
                                                '.MuiBadge-dot': {
                                                    backgroundColor: '#9e9e9e',
                                                },
                                            }}
                                        >
                                            {item.icon}
                                        </Badge>
                                    ) : (
                                        item.icon
                                    )}
                                    <ListItemText
                                        primary={item.text}
                                        sx={{
                                            fontWeight: 600,
                                            color: '#333',
                                        }}
                                    />
                                </Stack>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );

    return (
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#fff' },
                }}
            >
                {drawer}
            </Drawer>

            {/* Masaüstü için drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        backgroundColor: '#fff',
                        paddingTop: '10px',
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default DrawerMenu;
