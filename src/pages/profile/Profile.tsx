import { Avatar, Box, Button, Card, CardContent, Divider, Typography } from "@mui/material";

const store = {
  name: "Ali Ev Yemekleri",
  logo: "https://randomuser.me/api/portraits/men/41.jpg",
  email: "destek@alielektronik.com",
  phone: "0212 365 34 03",
  address: "Perpa Ticaret Merkezi, Şişli / İstanbul",
  description: "Elektronik parça, ekipman ve teknik servis alanında 10 yılı aşkın tecrübemizle hizmetinizdeyiz.",
  registeredAt: "12 Mart 2021",
  ordersCount: 124,
};

const Profile = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "#f0f4f8",
        display: "flex",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          borderRadius: 0,
          boxShadow: 4,
        }}
      >
        <Box
          sx={{
            bgcolor: "#F0F8FF",
            width: { md: "35%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 5,
            textAlign: "center",
          }}
        >
          <Avatar
            src={store.logo}
            alt={store.name}
            sx={{
              width: 160,
              height: 160,
              mb: 3,
              border: "4px solidrgb(49, 230, 209)",
            }}
          />
          <Typography variant="h3" fontWeight={700} fontFamily="'Poppins', sans-serif" color="##F0F8FF">
            {store.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" mt={2}>
            {store.description}
          </Typography>
        </Box>

        {/* Sağ Panel - Bilgiler */}
        <Box
          sx={{
            width: { md: "65%", xs: "100%" },
            bgcolor: "#fff",
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              fontWeight={600}
              color="primary"
              fontFamily="'Poppins', sans-serif"
              gutterBottom
            >
              Mağaza Bilgileri
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={500} color="text.secondary">
                E-Posta
              </Typography>
              <Typography variant="h6">{store.email}</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={500} color="text.secondary">
                Telefon
              </Typography>
              <Typography variant="h6">{store.phone}</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={500} color="text.secondary">
                Adres
              </Typography>
              <Typography variant="h6">{store.address}</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={500} color="text.secondary">
                Kayıt Tarihi
              </Typography>
              <Typography variant="h6">{store.registeredAt}</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={500} color="text.secondary">
                Toplam Sipariş
              </Typography>
              <Typography variant="h6">{store.ordersCount}</Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Button
              variant="contained"
              sx={{
                bgcolor: "##31E6D1",
                fontWeight: 600,
                fontSize: "1rem",
                fontFamily: "'Poppins', sans-serif",
                py: 1.5,
                px: 4,
                "&:hover": {
                  bgcolor: "#F0F8FF",
                },
              }}
            >
              Mağaza Bilgilerini Güncelle
            </Button>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
