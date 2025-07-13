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
import { Link, useNavigate } from 'react-router-dom';
import { assignRole, register } from '../user/user.service';
import { useState } from 'react';
import { RegisterDto } from './dto/RegisterDto';
import { UserRole } from '../../common/enums/UserRole';
import { CreateUserRoleDto } from '../user/dto/CreateUserRoleDto';


const Register = () => {


    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });

    const [userType, setUserType] = useState<'customer' | 'seller'>('customer');
    const navigate = useNavigate();


    const handleRegister = async () => {

        const dto: RegisterDto = {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            surname: formData.surname,
            phone: formData.phone
        }
        try {

            const roleIndex = userType === 'customer' ? UserRole.CUSTOMER : UserRole.SELLER;

            const userId = await register(dto);

            const roleDto: CreateUserRoleDto = {
                userId,
                roles: [roleIndex]
            }

            await assignRole(roleDto);

        } catch (error) {
            console.error(error);
            alert("Register TSX Kayıt işlemi başarısız oldu");
        }
    };

    return (
        <Stack spacing={1} alignItems="center" justifyContent="center" sx={{}}>

            <Tabs
                value={userType}
                onChange={(e, newValue) => setUserType(newValue)}
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
                Kayıt Ol
            </Typography>

            <TextField
                label="Ad"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                label="Telefon Numarası"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
                        value={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
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
