import {
    Box,
    Stack,
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Chip
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { ProductStatus } from '../enum/productStatus'

const mockAttributes = {
    color: ['Red', 'Blue', 'Gray'],
    size: ['S', 'M', 'L', 'XL']
}


const VariantForm = () => {

    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };


    const statusValues = Object.keys(ProductStatus)
        .filter((key) => !isNaN(Number(ProductStatus[key as keyof typeof ProductStatus])))
        .map((key) => Number(ProductStatus[key as keyof typeof ProductStatus])) as ProductStatus[];


    const statusLabels: Record<ProductStatus, string> = {
        [ProductStatus.AVAILABLE]: 'Stok var',
        [ProductStatus.UNAVAILABLE]: 'Azalıyor',
        [ProductStatus.OUT_OF_STOCK]: 'Yok',

    }

    const [attribute, setAttribute] = useState('')
    const [attributeValue, setAttributeValue] = useState('')
    const [attributePairs, setAttributePairs] = useState<{ key: string, value: string }[]>([])

    const handleAddAttribute = () => {
        if (attribute && attributeValue) {
            setAttributePairs(prev => [...prev, { key: attribute, value: attributeValue }])
            setAttribute('')
            setAttributeValue('')
        }
    }

    const handleRemoveAttribute = (index: number) => {
        setAttributePairs(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2, width: '100%', backgroundColor: '#fafafa' }}>
            <Typography variant='h6'>Varyant Bilgileri</Typography>

            <Stack flexDirection='row'>
                {/*Gorsel Yükleme Kısmı*/}
                <Box>
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
                            backgroundColor: '#f0f0f0'
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
                                overflow: 'hidden'
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

                </Box>
                {/*Variant Bilgileri Kısmı*/}
                <Box sx={{ ml: 2 }}>
                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap' }}
                    >

                        <TextField
                            label="Varyant Değeri"
                            variant="outlined"
                            sx={{ width: '450px' }}
                        />
                        <TextField
                            label="Stok"
                            type="number"
                            variant="outlined"
                            sx={{ width: '100px' }}
                        />
                        <TextField
                            label="Fiyat"
                            type="number"
                            variant="outlined"
                            sx={{ width: '100px' }}
                        />

                        <FormControl sx={{ width: '200px' }}>
                            <InputLabel>Durum</InputLabel>
                            <Select defaultValue="">

                                {
                                    statusValues.map((status) => (
                                        <MenuItem value={status}>
                                            {statusLabels[status]}
                                        </MenuItem>

                                    ))
                                }
                            </Select>
                        </FormControl>


                    </Stack>

                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        alignItems='center'
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', mt: 3 }}>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel>Attribute</InputLabel>
                            <Select
                                value={attribute}
                                onChange={(e) => {
                                    setAttribute(e.target.value)
                                    setAttributeValue('')
                                }}
                            >
                                {Object.keys(mockAttributes).map(attr => (
                                    <MenuItem key={attr} value={attr}>{attr}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {attribute && (
                            <FormControl sx={{ width: '300px' }}>
                                <InputLabel>Attribute Değeri</InputLabel>
                                <Select
                                    value={attributeValue}
                                    onChange={(e) => setAttributeValue(e.target.value)}
                                >
                                    {mockAttributes[attribute as keyof typeof mockAttributes].map((val) => (
                                        <MenuItem key={val} value={val}>{val}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}


                        {attribute && attributeValue && (
                            <Button variant="contained" color='success' onClick={handleAddAttribute}>
                                Ekle
                            </Button>
                        )}
                    </Stack>

                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                        {attributePairs.map((pair, index) => (
                            <Chip
                                key={index}
                                label={`${pair.key}: ${pair.value}`}
                                onDelete={() => handleRemoveAttribute(index)}
                                sx={{ m: 0.5 }}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default VariantForm
