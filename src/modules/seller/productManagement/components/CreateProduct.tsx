import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import { createRef, useRef, useState } from 'react'
import VariantForm from './VariantForm'
import { GoPlus } from 'react-icons/go'

function CreateProduct() {
    const [variantForms, setVariantForms] = useState<number[]>([])

    const [productData, setProductData] = useState({
        name: '',
        desc: '',
        discount: 0
    });


    const handleAddVariant = () => {
        const newId = Date.now();
        setVariantForms(prev => [...prev, newId]);
    }


    return (
        <Box sx={{ width: '100%', p: 3 }}>
            <Typography variant='h4'>Ürün Ekle</Typography>

            <Stack direction="row" spacing={4} alignItems="center" sx={{ mt: 4 }}>

                {/* Sol: Ürün Bilgileri */}
                <Stack spacing={3}>
                    <TextField
                        label="Ad"
                        variant="outlined"
                        value={productData.name}
                        onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                        InputLabelProps={{
                            sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                        }}
                        sx={{
                            width: '500px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'black' },
                                '&:hover fieldset': { borderColor: 'black' },
                                '&.Mui-focused fieldset': { borderColor: 'black' },
                            },
                            input: { color: 'black' },
                        }}
                    />
                    <TextField
                        label="Ürün Açıklaması"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={productData.desc}
                        onChange={(e) => setProductData({ ...productData, desc: e.target.value })}
                        InputLabelProps={{
                            sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                        }}
                        sx={{
                            width: '500px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'black' },
                                '&:hover fieldset': { borderColor: 'black' },
                                '&.Mui-focused fieldset': { borderColor: 'black' },
                            },
                            input: { color: 'black' },
                        }}
                    />

                    <TextField
                        label="İndirim"
                        type="number"
                        variant="outlined"
                        value={productData.discount}
                        onChange={(e) => setProductData({ ...productData, discount: Number(e.target.value) })}
                        sx={{
                            width: '100px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'black' },
                                '&:hover fieldset': { borderColor: 'black' },
                                '&.Mui-focused fieldset': { borderColor: 'black' },
                            },
                            input: { color: 'black' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'black', '&.Mui-focused': { color: 'black' } },
                        }}
                    />

                </Stack>

            </Stack>

            <Stack spacing={3} sx={{ mt: 4 }}>
                {variantForms.map(id => (
                    <VariantForm key={id} />
                ))}

                <Button
                    variant="contained"
                    color='secondary'
                    sx={{
                        width: '200px',
                        bgcolor: "purple",
                        color: "white",
                        "&:hover": {
                            bgcolor: "#b300b3",
                        },
                    }}
                    startIcon={<GoPlus />}
                    onClick={handleAddVariant}
                >
                    Varyant Ekle
                </Button>
            </Stack>
        </Box>
    )
}

export default CreateProduct
