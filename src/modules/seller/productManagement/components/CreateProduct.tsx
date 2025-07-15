import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import VariantForm from './VariantForm'
import { GoPlus } from 'react-icons/go'

function CreateProduct() {
    const [variantForms, setVariantForms] = useState<number[]>([])
    const [preview, setPreview] = useState<string | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleAddVariant = () => {
        setVariantForms(prev => [...prev, Date.now()])
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
                </Stack>

                {/* Sağ: Görsel Alanı */}
                <Box
                    sx={{
                        width: 200,
                        height: 240,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px dashed gray',
                        borderRadius: 2,
                        p: 1,
                        overflow: 'hidden',
                        backgroundColor: '#f0f0f0',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: 160,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#fff',
                            borderRadius: 1,
                            overflow: 'hidden',
                        }}
                    >
                        {preview ? (
                            <img
                                src={preview}
                                alt="preview"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Görsel seçilmedi
                            </Typography>
                        )}
                    </Box>

                    <Button
                        variant="contained"
                        component="label"
                        sx={{ mt: 1, width: '100%' }}
                    >
                        Fotoğraf Seç
                        <input hidden type="file" accept="image/*" onChange={handleChange} />
                    </Button>
                </Box>
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
