import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, styled, Toolbar, Tooltip, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { MouseEvent, useState } from "react";
import { MdMenu } from "react-icons/md";
import { logout } from "../../../pages/auth/service/auth.service";
import { useAuthStore } from "../../../pages/auth/store/authStore";

const Appbar = () => {

    const clearAuth = useAuthStore(state => state.clearAuth);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {

        logout()
            .then(() => {

                clearAuth();

                window.location.href = "/auth";
            })
            .catch(err => {
                alert(err);
            })

        setAnchorEl(null);
    };

    const StyledToolbar = styled(Toolbar)(() => ({
        // backgroundColor: "red",
        // bgcolor: "pink",
        // height: 20,
        alignItems: 'flex-start',
        '@media all': {
            minHeight: 20,
        }
    }));


    return (


        <AppBar sx={{ boxShadow: "none" }} >

            <StyledToolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MdMenu />
                </IconButton>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
                >
                    MUI
                </Typography>

                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    // aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ alignSelf: "center" }}
                >
                    <Tooltip title="Account settings">

                        <Avatar sx={{ bgcolor: deepOrange[400], width: 32, height: 32 }} >N</Avatar>
                    </Tooltip>
                </Button>

                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => { setAnchorEl(null) }}
                >
                    <MenuItem onClick={() => { }}>Profile</MenuItem>
                    <MenuItem onClick={() => { }}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </StyledToolbar>

        </AppBar >

    );
}

export default Appbar;