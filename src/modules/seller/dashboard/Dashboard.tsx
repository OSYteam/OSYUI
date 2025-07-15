import { Box, Stack, Typography, Button } from "@mui/material";
import { GoPlus } from "react-icons/go";
import ProductList from "../productManagement/components/ProductList";
import { NavLink, useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();
  const createProductHandle = () => {
    navigate('/seller/createProduct');
  };

  return (
    <Stack sx={{ width: "100%", minHeight: "100vh", bgcolor: "#f5f5f5" }} spacing={2}>

      {/* Header / Title */}
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h4" >
          Ürün Yönetimi
        </Typography>
      </Box>

      {/* Add Product */}
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          onClick={createProductHandle}
          startIcon={<GoPlus />}
          sx={{
            bgcolor: "purple",
            color: "white",
            "&:hover": {
              bgcolor: "#b300b3",
            },
          }}
        >
          Ürün Ekle
        </Button>
      </Box>

      {/* Products List */}
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          bgcolor: "#fafafa",
        }}
      >
        <Box sx={{ width: '100%', px: 2, py: 2 }}>
          <ProductList />
        </Box>
      </Box>

    </Stack>
  );
};

export default Dashboard;
