import {
    Button,
    Stack,
    TextField,
    Typography,
    Link as MuiLink,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

    const navigate = useNavigate();

    const handleSendResetLink = () => {
        navigate("/auth/mail-Verify");
    };

    return (
        <Stack spacing={5} alignItems="center" justifyContent="center" sx={{ mt: 3, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ color: 'black' }}>
                Şifremi Unuttum
            </Typography>

            <Typography textAlign="center" sx={{ color: 'black' }}>
                Şifrenizi sıfırlamak için e-posta adresinizi girin. Size bir sıfırlama bağlantısı göndereceğiz.
            </Typography>

            <TextField
                label="E-Posta"
                variant="outlined"
                InputLabelProps={{
                    sx: {
                        color: 'black',
                        '&.Mui-focused': { color: 'black' },
                    },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                        width: 300,
                    },
                    input: { color: 'black' },
                }}
            />

            <Button
                variant="contained"
                onClick={handleSendResetLink}
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'gray',
                    },
                }}
            >
                Sıfırlama Bağlantısı Gönder
            </Button>

            <Typography color="black">
                Hesabınızı hatırladınız mı?{' '}
                <MuiLink component={Link} to="/auth" sx={{ color: 'black', textDecoration: 'underline' }}>
                    Giriş Yap
                </MuiLink>
            </Typography>
        </Stack>
    );
};

export default ForgetPassword;
