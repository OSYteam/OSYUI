import { Box, Typography, TextField, Button, Card, CardContent } from "@mui/material";

const sectionStyle = {
    backgroundColor: "#fff",
    p: 4,
    boxShadow: 3,
    borderRadius: 3,
    mb: 4,
};

const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: 600,
    mb: 3,
    color: "#1f2d3d",
};

const Settings = () => {
    return (
        <Box
            sx={{
                p: 5,
                backgroundColor: "#f5f7fa",
                minHeight: "100vh",
            }}
        >
            <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, color: "#1f2d3d" }}>
                Ayarlar Paneli
            </Typography>

            {/* Mağaza Bilgileri */}
            <Card sx={sectionStyle}>
                <CardContent>
                    <Typography sx={headingStyle}>Mağaza Bilgileri</Typography>
                    <TextField fullWidth label="Mağaza Adı" margin="normal" />
                    <TextField fullWidth label="Vergi Numarası" margin="normal" />
                    <TextField fullWidth label="Adres" margin="normal" />
                    <Button variant="contained" sx={{ mt: 3, backgroundColor: "#1976d2" }}>
                        Kaydet
                    </Button>
                </CardContent>
            </Card>

            {/* Entegrasyon Ayarları */}
            <Card sx={sectionStyle}>
                <CardContent>
                    <Typography sx={headingStyle}>Entegrasyon Ayarları</Typography>
                    <TextField fullWidth label="Trendyol API Anahtarı" margin="normal" />
                    <TextField fullWidth label="Getir API Anahtarı" margin="normal" />
                    <TextField fullWidth label="Yemek Sepeti API Anahtarı" margin="normal" />
                    <Button variant="contained" sx={{ mt: 3, backgroundColor: "#1976d2" }}>
                        Güncelle
                    </Button>
                </CardContent>
            </Card>

            {/* İletişim Bilgileri */}
            <Card sx={sectionStyle}>
                <CardContent>
                    <Typography sx={headingStyle}>İletişim Bilgileri</Typography>
                    <TextField fullWidth label="E-posta Adresi" margin="normal" />
                    <TextField fullWidth label="Telefon Numarası" margin="normal" />
                    <TextField fullWidth label="Instagram / Sosyal Medya" margin="normal" />
                    <Button variant="contained" sx={{ mt: 3, backgroundColor: "#1976d2" }}>
                        Bilgileri Kaydet
                    </Button>
                </CardContent>
            </Card>

            {/* Güvenlik */}
            <Card sx={sectionStyle}>
                <CardContent>
                    <Typography sx={headingStyle}>Hesap ve Güvenlik</Typography>
                    <TextField fullWidth type="password" label="Yeni Şifre" margin="normal" />
                    <TextField fullWidth type="password" label="Şifreyi Onayla" margin="normal" />
                    <Button variant="contained" color="error" sx={{ mt: 3 }}>
                        Şifreyi Değiştir
                    </Button>
                </CardContent>
            </Card>

            {/* Tema ve Görünüm */}
            <Card sx={sectionStyle}>
                <CardContent>
                    <Typography sx={headingStyle}>Tema ve Görünüm</Typography>
                    <TextField fullWidth label="Renk Teması (HEX)" defaultValue="#49e6d1" margin="normal" />
                    <TextField fullWidth label="Yazı Fontu (örn: Roboto)" margin="normal" />
                    <Button variant="contained" sx={{ mt: 3, backgroundColor: "#1976d2" }}>
                        Uygula
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Settings;
