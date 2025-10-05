import {
    Box, Stack, TextField, Typography, Select, MenuItem,
    FormControl, InputLabel, Button, Chip
} from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { ProductStatus } from '../enum/productStatus'
import { CreateProductVariantDto, CreateVariantAttributeInput } from '../dto/CreateProductDto'
import { AttributeOptions } from '../../../../../common/enums/Attributes';

interface VariantFormProps {
    id: number;
    onChange: (id: number, data: CreateProductVariantDto) => void;
    onRemove: (id: number) => void;
    onImageChange: (id: number, file: File | null) => void;
}

const VariantForm = ({ id, onChange, onRemove, onImageChange }: VariantFormProps) => {
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState<ProductStatus>(ProductStatus.AVAILABLE);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [attributes, setAttributes] = useState<CreateVariantAttributeInput[]>([]);

    const [attribute, setAttribute] = useState<number | undefined>();
    const [attributeValue, setAttributeValue] = useState<number | undefined>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(file ? URL.createObjectURL(file) : null);
            setImage(file);
            onImageChange(id, file);
        }
    };

    const handleAddAttribute = () => {
        if (attribute !== undefined && attributeValue !== undefined) {
            setAttributes(prev => [...prev, {
                attribute: attribute,
                attributeVal: attributeValue
            }]);
            setAttribute(undefined);
            setAttributeValue(undefined);
        }
    };

    const handleRemoveAttribute = (index: number) => {
        setAttributes(prev => prev.filter((_, i) => i !== index));
    };

    useEffect(() => {
        onChange(id, {
            stock,
            price,
            status,
            attributes,
        });
    }, [stock, price, status, attributes]);

    const statusLabels: Record<ProductStatus, string> = {
        [ProductStatus.AVAILABLE]: 'Stok var',
        [ProductStatus.UNAVAILABLE]: 'Azalıyor',
        [ProductStatus.OUT_OF_STOCK]: 'Yok',
    };

    return (
        <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2, width: '100%', backgroundColor: '#fafafa' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h6'>Varyant Bilgileri</Typography>
                <Button color="error" onClick={() => onRemove(id)}>Sil</Button>
            </Stack>

            <Stack flexDirection='row' spacing={2} sx={{ mt: 2 }}>
                {/* Görsel */}
                <Box>
                    <Box
                        sx={{
                            width: 200, height: 240, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'space-between',
                            border: '1px dashed gray', borderRadius: 2, p: 1, backgroundColor: '#f0f0f0'
                        }}
                    >
                        <Box sx={{
                            width: '100%', height: 160, display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff', borderRadius: 1
                        }}>
                            {preview ? (
                                <img src={preview} alt="preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            ) : (
                                <Typography variant="body2">Görsel seçilmedi</Typography>
                            )}
                        </Box>
                        <Button variant="contained" component="label" sx={{ mt: 1, width: '100%' }}>
                            Fotoğraf Seç
                            <input hidden type="file" accept="image/*" onChange={handleFileChange} />
                        </Button>
                    </Box>
                </Box>

                {/* Bilgiler */}
                <Box sx={{ flex: 1 }}>
                    <Stack direction="row" spacing={2} flexWrap="wrap">
                        <TextField
                            label="Stok"
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(Number(e.target.value))}
                        />
                        <TextField
                            label="Fiyat"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                        <FormControl>
                            <InputLabel>Durum</InputLabel>
                            <Select value={status} onChange={(e) => setStatus(Number(e.target.value))}>
                                {Object.values(ProductStatus).map((val) => (
                                    <MenuItem key={val} value={val}>
                                        {statusLabels[val as ProductStatus]}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>

                    {/* Attribute Seçimi */}
                    <Stack direction="row" spacing={2} mt={3} flexWrap="wrap">
                        <FormControl sx={{ width: 250 }}>
                            <InputLabel>Attribute</InputLabel>
                            <Select
                                value={attribute ?? ''}
                                onChange={(e) => {
                                    setAttribute(Number(e.target.value));
                                    setAttributeValue(undefined);
                                }}
                            >
                                {AttributeOptions.map(opt => (
                                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {attribute !== undefined && (
                            <FormControl sx={{ width: 250 }}>
                                <InputLabel>Değer</InputLabel>
                                <Select
                                    value={attributeValue ?? ''}
                                    onChange={(e) => setAttributeValue(Number(e.target.value))}
                                >
                                    {AttributeOptions.find(attr => attr.value === attribute)?.values.map(val => (
                                        <MenuItem key={val.value} value={val.value}>{val.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}

                        {attribute !== undefined && attributeValue !== undefined && (
                            <Button variant="contained" onClick={handleAddAttribute}>Ekle</Button>
                        )}
                    </Stack>

                    {/* Chip gösterimi */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                        {attributes.map((pair, i) => {
                            const attrLabel = AttributeOptions.find(opt => opt.value === pair.attribute)?.label;
                            const valLabel = AttributeOptions
                                .find(opt => opt.value === pair.attribute)
                                ?.values.find(v => v.value === pair.attributeVal)?.label;
                            return (
                                <Chip
                                    key={i}
                                    label={`${attrLabel}: ${valLabel}`}
                                    onDelete={() => handleRemoveAttribute(i)}
                                />
                            )
                        })}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default VariantForm;
