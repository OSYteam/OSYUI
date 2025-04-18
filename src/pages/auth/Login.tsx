import { Button, TextField } from '@mui/material';
import { useAuthStore } from '../../store/authStore';

const Login = () => {

  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login();
    window.location.href = '/dashboard';
  };

  return (
    <form>
      <TextField fullWidth label="E-posta" margin="normal" />
      <TextField fullWidth label="Şifre" type="password" margin="normal" />
      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
        Giriş Yap
      </Button>
    </form>
  );
};

export default Login;
