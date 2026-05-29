import { FC } from "react";
import { MenuItem } from "../components";
import { Box, Button, Grid } from "@mui/material";
import MenuItemCard from "./MenuItem";
import { Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const mockMenuItems: MenuItem[] = [
  {
    title: "Karışık Pizza",
    subtitle: "Bol malzemeli özel pizza",
    imgUrl:
      "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/8d83d9ed4567fa15456d8eec7557e60006a15576.jpg",
  },
  {
    title: "Hamburger",
    subtitle: "Özel soslu dana burger",
    imgUrl:
      "https://iasbh.tmgrup.com.tr/78d2fd/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2021/09/30/hamburger-tarifi-evde-hamburger-nasil-yapilir-1633000765331.jpg",
  },
  {
    title: "Tavuk Döner",
    subtitle: "Günlük hazırlanan tavuk döner",
    imgUrl:
      "https://www.hosta.com.tr/wp-content/uploads/2025/07/Ekmekte-Tavuk-Doner.jpg",
  },
];

const MenuList: FC = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("create");
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Menüler
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Restoranınızda bulunan tüm menüleri yönetin.
          </Typography>
        </Box>

        <Button
          startIcon={<AddIcon />}
          size="large"
          sx={{
            background: "linear-gradient(135deg, #ff6b00, #ff8c42)",
            color: "#fff",
            borderRadius: "12px",
            px: 3,
            py: 1.2,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "0 4px 12px rgba(255,107,0,0.3)",

            "&:hover": {
              background: "linear-gradient(135deg, #e65c00, #ff7518)",
              transform: "translateY(-2px)",
            },
          }}
          onClick={handleCreate}
        >
          Menü Oluştur
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {mockMenuItems.map((item) => (
          <Grid key={item.title}>
            <MenuItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuList;
