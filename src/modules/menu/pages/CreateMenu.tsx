import { FC, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useNavigate } from "react-router-dom";

const CreateMenu: FC = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      borderRadius: "14px",

      "& fieldset": {
        borderColor: "#cbd5e1",
        transition: "all .2s ease",
      },

      "&:hover fieldset": {
        borderColor: "#1976d2",
        borderWidth: "2px",
      },

      "&.Mui-focused": {
        boxShadow: "0 0 0 4px rgba(25,118,210,.12)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
        borderWidth: "2px",
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#1976d2",
    },
  };

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h4" fontWeight={700}>
          Menü Oluştur
        </Typography>

        <Typography variant="body1" color="text.secondary" mt={1}>
          Restoranınız için yeni bir menü oluşturun ve oluşturduğunuz menüyü
          anlık olarak önizleyin.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
            }}
          >
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <RestaurantMenuIcon color="primary" />

              <Typography variant="h6" fontWeight={700}>
                Menü Bilgileri
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Menüye ait temel bilgileri doldurun.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <TextField
              fullWidth
              label="Menü Adı"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={textFieldSx}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Menü Açıklaması"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              sx={{
                ...textFieldSx,
                mt: 3,
              }}
            />

            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                textTransform: "none",
                background: "linear-gradient(135deg, #1976d2, #42a5f5)",
                boxShadow: "0 4px 14px rgba(25,118,210,0.35)",

                "&:hover": {
                  background: "linear-gradient(135deg, #1565c0, #1e88e5)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(25,118,210,0.45)",
                },

                transition: "all .2s ease",
              }}
              onClick={handleCreate}
            >
              Menüyü Kaydet
            </Button>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Canlı Önizleme
          </Typography>

          <Card
            sx={{
              maxWidth: 340,
              borderRadius: 4,
              overflow: "hidden",
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={"https://placehold.co/600x400?text=Menu+Image"}
              alt={title}
            />

            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom noWrap>
                {title || "Menü Adı"}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {subtitle || "Menü açıklaması burada görüntülenecektir."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateMenu;
