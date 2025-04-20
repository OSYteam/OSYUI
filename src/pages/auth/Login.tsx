import { Button, TextField } from '@mui/material';
import { useAuthStore } from '../../store/authStore';
import { login } from './service/auth.service';
import { useState } from 'react';

const Login = () => {

  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState<string>("");
  const [pass, setpass] = useState<string>("");

  const handleLogin = () => {

    if (email !== "" && pass !== "") {

      login(email, pass)
        .then(res => {
          setAuth(res);

          window.location.href = '/dashboard';

        })
        .catch(err => {
          alert(err);
        });
    }

  };

  return (
    <form>
      <TextField fullWidth label="E-posta" margin="normal" onChange={(e) => { setEmail(e.target.value) }} />
      <TextField fullWidth label="Şifre" type="password" margin="normal" onChange={(e) => { setpass(e.target.value) }} />
      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
        Giriş Yap
      </Button>
    </form>
  );
};

export default Login;
