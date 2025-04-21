import { Box, Card, CardActionArea, CardContent, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import StatsChart from '../dashboard/order/components/Stats/StatsChart';
import { statsItems } from './order/components/Data/statsItems';


const Stats = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <Box padding={3}>
            <Stack direction="row" flexWrap="wrap" gap={3} justifyContent="flex-start">
                {statsItems.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: 'calc(25% - 24px)',
                            minWidth: 200,
                            borderRadius: 3,
                            boxShadow: 3,
                            transition: '0.3s',
                            cursor: 'pointer',
                            backgroundColor: selectedIndex === index ? '#6B6B6B' : '#fff',
                            '&:hover': {
                                transform: 'scale(1.03)',
                            },
                        }}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h6" color="primary" fontWeight={700}>
                                    {item.value}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Stack>

            {selectedIndex !== null && (
                <StatsChart
                    selectedIndex={selectedIndex}
                    title={statsItems[selectedIndex]?.title}
                />
            )}
        </Box>
    );
};

export default Stats;
