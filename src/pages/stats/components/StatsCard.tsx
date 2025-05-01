import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

interface StatsCardProps {
    title: string;
    value: string;
    onClick: () => void;
    isSelected: boolean;
}

const StatsCard = ({ title, value, onClick, isSelected }: StatsCardProps) => {
    return (
        <Card
            sx={{
                width: 'calc(25% - 24px)',
                minWidth: 200,
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                cursor: 'pointer',
                backgroundColor: isSelected ? '#f0f0f0' : '#fff',
                '&:hover': {
                    transform: 'scale(1.03)',
                },
            }}
            onClick={onClick}
        >
            <CardActionArea>
                <CardContent>
                    <Typography variant="subtitle1" fontWeight={600}>
                        {title}
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight={700}>
                        {value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default StatsCard;