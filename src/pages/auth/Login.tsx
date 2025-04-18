import { Button, TextField } from '@mui/material';

const Login = () => {
  return (
    <form>
      <TextField fullWidth label="E-posta" margin="normal" />
      <TextField fullWidth label="Şifre" type="password" margin="normal" />
      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        Giriş Yap
      </Button>
    </form>
  );
};

export default Login;
