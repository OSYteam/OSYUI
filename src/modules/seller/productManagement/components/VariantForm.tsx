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
import { useState } from 'react'

const attributes = {
    color: ['Red', 'Blue', 'Gray'],
    size: ['S', 'M', 'L', 'XL']
}

const VariantForm = () => {
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
        <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2, width: '520px', backgroundColor: '#fafafa' }}>
            <Typography variant='h6'>Varyant Bilgileri</Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
                <TextField label="Varyant Değeri" variant="outlined" fullWidth />
                <TextField label="Stok" type="number" variant="outlined" fullWidth />
                <TextField label="Fiyat" type="number" variant="outlined" fullWidth />

                <FormControl fullWidth>
                    <InputLabel>Durum</InputLabel>
                    <Select defaultValue="">
                        <MenuItem value="stocked">Stok Var</MenuItem>
                        <MenuItem value="low">Azalıyor</MenuItem>
                        <MenuItem value="out">Yok</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="outlined" component="label">
                    Görsel Yükle
                    <input hidden accept="image/*" type="file" />
                </Button>

                {/* Attribute Seçimi */}
                <FormControl fullWidth>
                    <InputLabel>Attribute</InputLabel>
                    <Select
                        value={attribute}
                        onChange={(e) => {
                            setAttribute(e.target.value)
                            setAttributeValue('')
                        }}
                    >
                        {Object.keys(attributes).map(attr => (
                            <MenuItem key={attr} value={attr}>{attr}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {attribute && (
                    <FormControl fullWidth>
                        <InputLabel>Attribute Değeri</InputLabel>
                        <Select
                            value={attributeValue}
                            onChange={(e) => setAttributeValue(e.target.value)}
                        >
                            {attributes[attribute as keyof typeof attributes].map((val) => (
                                <MenuItem key={val} value={val}>{val}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}

                {attribute && attributeValue && (
                    <Button variant="contained" onClick={handleAddAttribute}>
                        Ekle
                    </Button>
                )}

                {/* Eklenen attribute-value çiftlerini göster */}
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    {attributePairs.map((pair, index) => (
                        <Chip
                            key={index}
                            label={`${pair.key}: ${pair.value}`}
                            onDelete={() => handleRemoveAttribute(index)}
                            sx={{ m: 0.5 }}
                        />
                    ))}
                </Stack>
            </Stack>
        </Box>
    )
}

export default VariantForm
