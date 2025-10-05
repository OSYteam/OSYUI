import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SellerLogin = () => {

  // const { setAccessToken, setUserInformation } = useAuthStore();
  // const { setAllProducts: setProduct } = useProductStore();

  const [userType, setUserType] = useState<'customer' | 'seller'>('customer');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async () => {

    // const dto: LoginDto = {
    //   email: formData.email,
    //   password: formData.password
    // }

    // const accessToken = await login(dto);

    // setAccessToken(accessToken);

    // const userDto: UserResponseDto = await getMe(accessToken);
    // setUserInformation(userDto);


    // productsları çek
    // const products = await getProducts(accessToken);
    // setProduct(products);

  };

  return (
    <Stack spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 3, mb: 3 }}>

      <Tabs
        value={userType}
        onChange={(e, newValue: 'customer' | 'seller') => setUserType(newValue)}
        textColor="inherit"
        indicatorColor="secondary"
        centered
        sx={{
          '& .MuiTab-root': {
            color: 'black',
            fontWeight: 'bold',
          },
          '& .Mui-selected': {
            color: 'black',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'black',
          },
        }}
      >
        <Tab label="Müşteri" value="customer" />
        <Tab label="Satıcı" value="seller" />
      </Tabs>

      <Typography variant="h5" fontWeight="bold" sx={{ color: 'black' }}>
        Giriş Yap
      </Typography>

      <TextField
        label="E-Posta"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

export default SellerLogin;
