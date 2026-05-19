import { Box, Stack, Typography } from "@mui/material";


const Dashboard = () => {


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
          Hello welcome back!
        </Typography>
      </Box>


    </Stack>
  );
};

export default Dashboard;
