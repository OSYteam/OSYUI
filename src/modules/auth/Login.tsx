import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useAuthStore } from './store/authStore';
import { Link } from 'react-router-dom';

const Login = () => {
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login();
  };

  return (
    <Stack spacing={5} alignItems="center" justifyContent="center" sx={{ mt: 3, mb: 3 }}>

      <Typography variant="h5" fontWeight="bold" sx={{ color: 'black' }}>
        Giriş Yap
      </Typography>

      <TextField
        label="E-Posta"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          sx: {
            color: 'black',
            '&.Mui-focused': {
              color: 'black',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
          input: {
            color: 'black',
          },
        }}

      />

      <TextField
        label="Şifre"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          sx: {
            color: 'black',
            '&.Mui-focused': {
              color: 'black',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
          input: {
            color: 'black',
          },
        }}
      />


      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
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
          label="Beni Hatırla"
          sx={{
            color: 'black',
          }}
        />
        <Link to="forget-password" style={{ color: 'black' }}>
          Şifremi Unuttum ?
        </Link>
      </Stack>

      <Button
        variant="contained"
        fullWidth
        onClick={handleLogin}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'gray',
          },
        }}
      >
        Giriş Yap
      </Button>

      <Typography color='black'>Henüz hesabınız yok mu?</Typography>

      <Link to="register" style={{ color: 'black' }}>
        Kayıt Ol
      </Link>
    </Stack>
  );
};

export default Login;
