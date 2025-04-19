import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, styled, Toolbar, Tooltip, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { MouseEvent, useState } from "react";
import { MdMenu } from "react-icons/md";

const Appbar = () => {


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledToolbar = styled(Toolbar)(() => ({
        // backgroundColor: "red",
        alignItems: 'flex-start',
        '@media all': {
            // minHeight: 128,
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
                    sx={{alignSelf: "center"}}
                >
                    <Tooltip title="Account settings">

                        <Avatar sx={{ bgcolor: deepOrange[400], width: 32, height: 32 }} >N</Avatar>
                    </Tooltip>
                </Button>

                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </StyledToolbar>

        </AppBar >

    );
}

export default Appbar;