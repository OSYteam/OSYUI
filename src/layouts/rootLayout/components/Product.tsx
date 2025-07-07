import { Box, Container, Typography } from '@mui/material';
import React from 'react';


type ProductProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
};

function Product({ id, name, description, price, imageUrl }: ProductProps) {

    const handleClick = (id: number) => {
        alert(id + " ID'ye sahip ürünün detaylarını göster");
    }


    return (
        <Container
            maxWidth={false}
            sx={{
                width: '100%',
                height: '160px',
                mb: 2,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#ffffff',
                borderRadius: 3,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
            }}
            onClick={() => handleClick(id)}
        >
            {/* Ürün Resmi */}
            <Box display="flex" alignItems="center" justifyContent="center" mr={2}>
                <img
                    src={imageUrl}
                    alt={name}
                    style={{
                        width: 130,
                        height: 130,
                        objectFit: 'cover',
                        borderRadius: 10,
                    }}
                />
            </Box>

            {/* Ürün Bilgileri */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    height: '100%',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        color: '#212121',
                    }}
                >
                    {name}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#666',
                        fontSize: '0.9rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        mt: 0.5,
                    }}
                >
                    {description}
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        mt: 1,
                        color: '#000',
                    }}
                >
                    {price} ₺
                </Typography>
            </Box>
        </Container>
    );
}

export default Product;
