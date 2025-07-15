import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import { useState } from 'react'
import VariantForm from './VariantForm'
import { GoPlus } from 'react-icons/go'

function CreateProduct() {
    const [showVariantForm, setShowVariantForm] = useState(false)

    const handleAddVariant = () => {
        setShowVariantForm(true)
    }

    return (
        <Box sx={{ width: '100%', p: 3 }}>
            <Typography variant='h4'>Ürün Ekle</Typography>
            <Stack spacing={3} sx={{ mt: 4 }}>
                <TextField
                    label="Ad"
                    variant="outlined"
                    InputLabelProps={{
                        sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'black' },
                            '&:hover fieldset': { borderColor: 'black' },
                            '&.Mui-focused fieldset': { borderColor: 'black' },
                            width: '500px'
                        },
                        input: { color: 'black' },
                    }}
                />
                <TextField
                    label="Ürün Açıklaması"
                    variant="outlined"
                    multiline
                    rows={4}
                    InputLabelProps={{
                        sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'black' },
                            '&:hover fieldset': { borderColor: 'black' },
                            '&.Mui-focused fieldset': { borderColor: 'black' },
                            width: '500px'
                        },
                        input: { color: 'black' },
                    }}
                />
                <Button variant="contained" color='secondary' sx={{ width: '200px' }} startIcon={<GoPlus />} onClick={handleAddVariant}>
                    Varyant Ekle
                </Button>
                {showVariantForm && <VariantForm />}
            </Stack>
        </Box>
    )
}

export default CreateProduct
