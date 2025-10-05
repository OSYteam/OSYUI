import {
    Badge,
    Box,
    Collapse,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { FaReceipt } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { IoList, IoSettingsOutline } from "react-icons/io5";
import { IconType } from 'react-icons/lib';
import { MdBarChart, MdExpandLess, MdExpandMore } from 'react-icons/md';
import { RiUserCommunityLine } from "react-icons/ri";
import { TbPackages } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const drawerWidth = 220;

interface MenuContentItem {
    title: string;
    path: string;
    icon: IconType;
    visible: boolean;
    badgeContent?: number;
    subItems?: MenuContentItem[];
}

const DrawerMenu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleSubMenu = (path: string) => {
        setOpenMenus(prev => ({ ...prev, [path]: !prev[path] }));
    };

    const menuContent: MenuContentItem[] = [
        {
            title: 'Dashboard',
            path: '/seller/',
            icon: AiOutlineProduct,
            visible: true,
        },
        {
            title: 'Ürün Yönetimi',
            path: '/seller/product',
            icon: AiOutlineProduct,
            visible: true,
            subItems: [
                {
                    title: 'Ürün Listesi',
                    path: '/seller/product/list',
                    icon: IoList,
                    visible: true,
                },
                {
                    title: 'Yeni Ürün Ekle',
                    path: '/seller/product/create',
                    icon: FiPlus,
                    visible: true,
                }
            ]
        },
        {
            title: 'Siparişlerim',
            path: '/seller/orders',
            icon: TbPackages,
            badgeContent: 5,
            visible: true,
        },
        {
            title: 'Müşteriler',
            path: '/seller/customer',
            icon: RiUserCommunityLine,
            visible: true,
        },
        {
            title: 'İstatistik',
            path: '/seller/stats',
            icon: MdBarChart,
            visible: false,
        },
        {
            title: 'Bilgi Formları',
            path: '/seller/receipt',
            icon: FaReceipt,
            visible: false,
        },
        {
            title: 'Ayarlar',
            path: '/seller/settings',
            icon: IoSettingsOutline,
            visible: true,
        },
    ];

    const renderMenuItems = (items: MenuContentItem[], level: number = 0) => {
        return items
            .filter(item => item.visible)
            .map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isOpen = openMenus[item.path] || false;

                return (
                    <Box key={item.path} sx={{ mb: 0.5 }}>
                        <ListItem disablePadding sx={{ pl: level * 2 }}>
                            <ListItemButton
                                component={!hasSubItems ? NavLink : 'button'}
                                to={!hasSubItems ? item.path : undefined}
                                onClick={hasSubItems ? () => toggleSubMenu(item.path) : undefined}
                                sx={{
                                    color: '#333',
                                    borderRadius: '8px',
                                    padding: '10px 14px',
                                    transition: 'background-color 0.25s ease, transform 0.15s ease',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                        transform: 'translateX(2px)',
                                    },
                                    '&.active': {
                                        backgroundColor: '#e0e0e0',
                                        color: '#212121',
                                        fontWeight: 'bold',
                                    },
                                    justifyContent: 'space-between',
                                    mt: level > 0 ? 0.3 : 0, // subItemlar biraz daha sıkı olsun
                                }}
                            >
                                <Stack direction="row" spacing={1.8} alignItems="center">
                                    {item.badgeContent ? (
                                        <Badge
                                            color="secondary"
                                            badgeContent={item.badgeContent}
                                            max={20}
                                        >
                                            <item.icon fontSize={22} />
                                        </Badge>
                                    ) : (
                                        <item.icon fontSize={22} />
                                    )}
                                    <ListItemText
                                        primary={item.title}
                                        primaryTypographyProps={{
                                            fontSize: 14,
                                            fontWeight: 500,
                                        }}
                                        sx={{ color: '#333' }}
                                    />
                                </Stack>
                                {hasSubItems && (isOpen ? <MdExpandLess /> : <MdExpandMore />)}
                            </ListItemButton>
                        </ListItem>

                        {hasSubItems && (
                            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    {renderMenuItems(item.subItems!, level + 1)}
                                </List>
                            </Collapse>
                        )}
                    </Box>
                );
            });
    };

    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: '#f4f4f4', p: 2 }}>
                <Typography variant="h6" noWrap component="div" sx={{ color: '#333', fontWeight: 'bold' }}>
                    OZY LOGO
                </Typography>
            </Toolbar>
            <List sx={{ pt: 2, px: 1 }}>
                {renderMenuItems(menuContent)}
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
                        p: 1.5,
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
