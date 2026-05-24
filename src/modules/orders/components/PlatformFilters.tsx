import { FC } from 'react';
import { Paper, ButtonGroup, Button } from '@mui/material';

type Platform = 'yemeksepeti' | 'getir' | 'trendyol' | 'migros' | 'all';

interface PlatformFiltersProps {
    selectedPlatform: Platform;
    onPlatformChange: (platform: Platform) => void;
    orderCounts: {
        all: number;
        yemeksepeti: number;
        getir: number;
        trendyol: number;
        migros: number;
    };
}

const PlatformFilters: FC<PlatformFiltersProps> = ({
    selectedPlatform,
    onPlatformChange,
    orderCounts,
}) => {
    return (
        <Paper sx={{ p: 2, mb: 3 }}>
            <ButtonGroup variant="outlined" sx={{ flexWrap: 'wrap', gap: 1 }} color="inherit">
                <Button
                    variant={selectedPlatform === 'all' ? 'contained' : 'outlined'}
                    onClick={() => onPlatformChange('all')}
                >
                    Tümü ({orderCounts.all})
                </Button>
                <Button
                    variant={selectedPlatform === 'yemeksepeti' ? 'contained' : 'outlined'}
                    onClick={() => onPlatformChange('yemeksepeti')}
                    sx={{
                        borderColor: selectedPlatform === 'yemeksepeti' ? '#ff0000' : undefined,
                        backgroundColor: selectedPlatform === 'yemeksepeti' ? '#ff0000' : undefined,
                        '&:hover': {
                            borderColor: '#ff0000',
                            backgroundColor: selectedPlatform === 'yemeksepeti' ? '#cc0000' : 'rgba(255, 0, 0, 0.04)',
                        }
                    }}
                >
                    Yemeksepeti ({orderCounts.yemeksepeti})
                </Button>
                <Button
                    variant={selectedPlatform === 'getir' ? 'contained' : 'outlined'}
                    onClick={() => onPlatformChange('getir')}
                    sx={{
                        borderColor: selectedPlatform === 'getir' ? '#5d3ebc' : undefined,
                        backgroundColor: selectedPlatform === 'getir' ? '#5d3ebc' : undefined,
                        '&:hover': {
                            borderColor: '#5d3ebc',
                            backgroundColor: selectedPlatform === 'getir' ? '#4a2f99' : 'rgba(93, 62, 188, 0.04)',
                        }
                    }}
                >
                    Getir Yemek ({orderCounts.getir})
                </Button>
                <Button
                    variant={selectedPlatform === 'trendyol' ? 'contained' : 'outlined'}
                    onClick={() => onPlatformChange('trendyol')}
                    sx={{
                        borderColor: selectedPlatform === 'trendyol' ? '#f27a1a' : undefined,
                        backgroundColor: selectedPlatform === 'trendyol' ? '#f27a1a' : undefined,
                        '&:hover': {
                            borderColor: '#f27a1a',
                            backgroundColor: selectedPlatform === 'trendyol' ? '#d96a15' : 'rgba(242, 122, 26, 0.04)',
                        }
                    }}
                >
                    Trendyol Yemek ({orderCounts.trendyol})
                </Button>
                <Button
                    variant={selectedPlatform === 'migros' ? 'contained' : 'outlined'}
                    onClick={() => onPlatformChange('migros')}
                    sx={{
                        borderColor: selectedPlatform === 'migros' ? '#ff6600' : undefined,
                        backgroundColor: selectedPlatform === 'migros' ? '#ff6600' : undefined,
                        '&:hover': {
                            borderColor: '#ff6600',
                            backgroundColor: selectedPlatform === 'migros' ? '#cc5200' : 'rgba(255, 102, 0, 0.04)',
                        }
                    }}
                >
                    Migros Yemek ({orderCounts.migros})
                </Button>
            </ButtonGroup>
        </Paper>
    );
};

export default PlatformFilters;
