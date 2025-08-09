// components/LoadingSpinner.tsx
import { Box, Typography } from '@mui/material';
import { FaSpinner } from 'react-icons/fa';

interface LoadingSpinnerProps {
    size?: number;
    text?: string;
    color?: string;
}

const LoadingSpinner = ({ size = 40, text = 'Yükleniyor...', color = '#673ab7' }: LoadingSpinnerProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                color,
            }}
        >
            <FaSpinner
                size={size}
                style={{
                    animation: 'spin 1.5s linear infinite',
                    color,
                }}
            />
            <Typography variant="body2" sx={{ userSelect: 'none' }}>
                {text}
            </Typography>

            {/* Spinner animasyon keyframes */}
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
        </Box>
    );
};

export default LoadingSpinner;
