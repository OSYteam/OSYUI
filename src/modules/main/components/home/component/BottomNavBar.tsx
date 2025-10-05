import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Typography, Box } from '@mui/material';
import { AiOutlineHome, AiFillStar } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';

const BottomNavBar = () => {
    const [value, setValue] = useState('home');
    const storeRating = 4.3;

    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: '#fefefe',
                borderTop: '1px solid #ddd',
                boxShadow: '0 -2px 5px rgba(0,0,0,0.05)',
                zIndex: 1300,
            }}
            elevation={3}
        >
            <BottomNavigation
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
                sx={{
                    bgcolor: 'transparent',
                    '.Mui-selected, .Mui-selected > svg': {
                        color: '#000',
                    },
                    '.MuiBottomNavigationAction-root': {
                        color: '#777',
                    },
                    '.MuiSvgIcon-root': {
                        fontSize: 24,
                    }
                }}
                showLabels
            >
                {/* Home */}
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<AiOutlineHome size={25} />}
                    sx={{ fontWeight: value === 'home' ? 'bold' : 'normal' }}
                />

                {/* Rating */}
                <BottomNavigationAction
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <AiFillStar color="#ffb400" size={25} />
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000' }}>
                                {storeRating.toFixed(1)}
                            </Typography>
                        </Box>
                    }
                    value="rating"
                    icon={null}
                    sx={{
                        pointerEvents: 'none',
                    }}
                />

                {/* Chat */}
                <BottomNavigationAction
                    label="Soru Sor"
                    value="chat"
                    icon={<FiMessageCircle size={25} />}
                    sx={{ fontWeight: value === 'chat' ? 'bold' : 'normal' }}
                />
            </BottomNavigation>
        </Paper>
    );
};

export default BottomNavBar;
