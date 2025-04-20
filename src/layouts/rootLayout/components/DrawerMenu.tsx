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
import { FaNewspaper, FaStore } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router';

const drawerWidth = 160;

const DrawerMenu = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const menuContent = [
        {
            text: 'siparişlerim',
            path: '/dashboard/orders',
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
            path: '/dashboard/settings',
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
            {/* <Divider /> */}
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
        </div >
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
    );

}


export default DrawerMenu;