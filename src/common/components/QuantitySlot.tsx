import React, { useState } from 'react';
import { Box, Icon, IconButton, Typography } from '@mui/material';
import { FaPlus, FaMinus } from 'react-icons/fa';

type QuantitySelectorProps = {
    min?: number;
    max?: number;
    initial?: number;
    onChange?: (value: number) => void;
};

const QuantitySlot: React.FC<QuantitySelectorProps> = ({
    min = 1,
    max = 99,
    initial = 1,
    onChange,
}) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrease = () => {
        if (quantity < max) {
            const newValue = quantity + 1;
            setQuantity(newValue);
            onChange?.(newValue);
        }
    };

    const handleDecrease = () => {
        if (quantity > min) {
            const newValue = quantity - 1;
            setQuantity(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            border="1px solid #ccc"
            borderRadius="8px"
            px={1}
            py={0.5}
            gap={1}
            sx={{ width: 'fit-content', }}
        >
            <IconButton size="small" onClick={handleDecrease}>
                <FaMinus />
            </IconButton>
            <Typography variant="body1" sx={{ minWidth: 24, textAlign: 'center' }}>
                {quantity}
            </Typography>
            <IconButton size="small" onClick={handleIncrease}>
                <FaPlus />
            </IconButton>
        </Box>
    );
};

export default QuantitySlot;
