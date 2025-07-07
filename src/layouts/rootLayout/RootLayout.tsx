import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  InputBase,
  Paper
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Appbar from '../sellerLayout/components/Appbar';

import { FaSearch } from "react-icons/fa";
import BottomNavBar from '../../common/components/BottomNavBar';


//müşteri layout
const RootLayout = () => {

  return (

    <>
      <Appbar />

      <hr />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: '#fefefe',
          px: { xs: 2, sm: 4, md: 8 },
          pt: 2,
        }}
      >

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: { xs: '100%', sm: 400, md: 500 },
              borderRadius: "8px",
              boxShadow: 2,
              bgcolor: "#f5f5f5"
            }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Ara..."
              inputProps={{ "aria-label": "ara" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <FaSearch />
            </IconButton>
          </Paper>
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: 'whitesmoke',
            borderRadius: 2,
            p: 2,
            minHeight: '300px'
          }}
        >
          <Outlet />
        </Box>

      </Box>

      <BottomNavBar />

    </>
  );
};

export default RootLayout;
