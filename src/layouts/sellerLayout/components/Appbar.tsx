import { useState, MouseEvent } from "react";
import {
    AppBar,
    Badge,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import { MdMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Appbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    color: "black",
                    boxShadow: "none",
                    backdropFilter: "blur(8px)",
                    px: 0, // horizontal padding
                    mx: 0,
                }}
            >
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        onClick={handleMenuClick}
                        aria-controls={open ? "hamburger-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        size="large"
                    >
                        <MdMenu size={24} />
                    </IconButton>

                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold", textAlign: "center", flexGrow: 1 }}
                    >
                        Ozzy Bazaar
                    </Typography>

                    <IconButton color="inherit" size="large">
                        <Badge badgeContent={3} color="error">
                            <FaShoppingCart size={20} />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Menu
                id="hamburger-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    "aria-labelledby": "hamburger-button",
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem onClick={handleMenuClose}>Anasayfa</MenuItem>
                <MenuItem onClick={handleMenuClose}>Hakkımızda</MenuItem>
                <MenuItem onClick={handleMenuClose}>İletişim</MenuItem>
            </Menu>
        </>
    );
};

export default Appbar;
