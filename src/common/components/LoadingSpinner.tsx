import React from 'react';
import { Box, Typography } from '@mui/material';

interface LoadingSpinnerProps {
    size?: number;
    text?: string;
}

const LoadingSpinner = ({ size = 64, text = 'Yükleniyor...' }: LoadingSpinnerProps) => {
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                userSelect: 'none',
                color: 'primary.main',
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="loading"
            >
                {[0, 1, 2].map((i) => {
                    const r = radius - i * (strokeWidth + 4);
                    const dashArray = 0.75 * circumference;
                    const dashOffset = circumference - dashArray;
                    return (
                        <circle
                            key={i}
                            cx={size / 2}
                            cy={size / 2}
                            r={r}
                            stroke={`url(#gradient${i})`}
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeDasharray={dashArray + ' ' + circumference}
                            strokeDashoffset={dashOffset}
                            fill="none"
                            style={{
                                animation: `spin${i} 1.5s linear infinite`,
                                transformOrigin: '50% 50%',
                            }}
                        />
                    );
                })}
                <defs>
                    {[0, 1, 2].map((i) => (
                        <linearGradient
                            key={i}
                            id={`gradient${i}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor={`hsl(${(i * 120) % 360}, 90%, 55%)`} />
                            <stop offset="100%" stopColor={`hsl(${(i * 120 + 60) % 360}, 90%, 70%)`} />
                        </linearGradient>
                    ))}
                </defs>
            </svg>

            <Typography
                variant="body1"
                sx={{
                    fontWeight: 'bold',
                    color: 'primary.main',
                    letterSpacing: 1,
                    animation: 'textFade 3s ease-in-out infinite',
                }}
            >
                {text}
            </Typography>

            <style>{`
        @keyframes spin0 {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        @keyframes spin1 {
          0% { transform: rotate(360deg);}
          100% { transform: rotate(0deg);}
        }
        @keyframes spin2 {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        @keyframes textFade {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
        </Box>
    );
};

export default LoadingSpinner;
