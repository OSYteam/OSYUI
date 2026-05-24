import { Box, Container, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f5f5f5',
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Outlet />
                </Paper>
            </Container>
        </Box>
    );
};

export default AuthLayout;
