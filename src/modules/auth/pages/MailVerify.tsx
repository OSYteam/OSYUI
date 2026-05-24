import {
    Button,
    Stack,
    TextField,
    Typography,
    Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EmailVerification = () => {
    const [timeLeft, setTimeLeft] = useState(120);
    const [code, setCode] = useState('');

    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <Stack spacing={3} alignItems="center" justifyContent="center" sx={{ mt: 3, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ color: 'black' }}>
                E-Posta Doğrulama
            </Typography>

            <Typography textAlign="center" sx={{ color: 'black' }}>
                E-posta adresinize bir doğrulama kodu gönderdik. Lütfen aşağıya 6 haneli kodu girin.
            </Typography>

            <Typography color="black" sx={{ fontSize: 15 }}>Kalan Süre: {formatTime(timeLeft)}</Typography>


            <TextField
                label="Doğrulama Kodu"
                variant="outlined"
                inputProps={{ maxLength: 6 }}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                InputLabelProps={{
                    sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                    input: { color: 'black', letterSpacing: '0.3rem', textAlign: 'center' },
                }}
            />


            <Button
                variant="contained"
                disabled={timeLeft === 0}
                sx={{
                    backgroundColor: timeLeft === 0 ? 'gray' : 'black',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: timeLeft === 0 ? 'gray' : 'darkgray',
                    },
                }}
            >
                Kodu Doğrula
            </Button>

            <Typography color="black">
                Kod ulaşmadı mı?{' '}
                <MuiLink
                    component="button"
                    sx={{ color: 'black', textDecoration: 'underline' }}
                >
                    Yeniden Gönder
                </MuiLink>
            </Typography>

            <Link to="/auth" style={{ color: 'black' }}>
                Giriş Ekranına Dön
            </Link>
        </Stack>
    );
};

export default EmailVerification;
