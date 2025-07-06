import {
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/auth/mail-Verify");
    };

    return (
        <Stack spacing={1} alignItems="center" justifyContent="center" sx={{}}>
            <Typography variant="h5" fontWeight="bold" sx={{ color: 'black' }}>
                Kayıt Ol
            </Typography>

            <TextField
                label="Ad"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                    input: { color: 'black' },
                }}
            />

            <TextField
                label="Soyad"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                    input: { color: 'black' },
                }}
            />

            <TextField
                label="E-Posta"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                    input: { color: 'black' },
                }}
            />

            <TextField
                label="Şifre"
                type="password"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                    input: { color: 'black' },
                }}
            />

            <TextField
                label="Şifre Tekrar"
                type="password"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                    input: { color: 'black' },
                }}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        sx={{
                            color: 'black',
                            '&.Mui-checked': {
                                color: 'black',
                            },
                        }}
                    />
                }
                label="Kullanım şartlarını kabul ediyorum"
                sx={{ color: 'black' }}
            />

            <Button
                variant="contained"
                fullWidth
                onClick={handleRegister}
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'gray',
                    },
                }}
            >
                Kayıt Ol
            </Button>

            <Typography color="black">Zaten bir hesabınız var mı?</Typography>
            <Link to="/auth" style={{ color: 'black' }}>
                Giriş Yap
            </Link>
        </Stack>
    );
};

export default Register;
